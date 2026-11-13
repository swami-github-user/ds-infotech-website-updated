/**
 * GET /recordings  (protected by the Cognito JWT authorizer)
 *
 * Returns the courses the signed-in learner has access to, with a
 * time-limited CloudFront download link for every session.
 *
 * Access model: each course is a Cognito group, and its files live under
 * s3://<bucket>/courses/<group-name>/. An optional manifest.json in that
 * folder sets the course title and session titles/order:
 *
 *   {
 *     "title": "DevOps on AWS – November 2026 Batch",
 *     "sessions": [
 *       { "file": "01-intro.mp4", "title": "Day 1 – Introduction to DevOps" }
 *     ]
 *   }
 *
 * Without a manifest, every video file in the folder is listed in name order.
 */

const { S3Client, ListObjectsV2Command, GetObjectCommand } = require("@aws-sdk/client-s3");
const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
const { getSignedUrl } = require("@aws-sdk/cloudfront-signer");
const { success, error } = require("../../shared/response");
const logger = require("../../utils/logger");

const s3 = new S3Client({});
const ssm = new SSMClient({});

const VIDEO_EXTENSIONS = [".mp4", ".mkv", ".mov", ".webm", ".m4v", ".avi"];

let cachedPrivateKey;

async function getPrivateKey() {
    if (!cachedPrivateKey) {
        const out = await ssm.send(new GetParameterCommand({
            Name: process.env.PRIVATE_KEY_PARAMETER,
            WithDecryption: true,
        }));
        cachedPrivateKey = out.Parameter.Value;
    }
    return cachedPrivateKey;
}

/** HTTP API passes array claims as "[a b]" strings; accept both forms. */
function parseGroups(raw) {
    if (!raw) return [];
    if (Array.isArray(raw)) return raw;
    return String(raw)
        .replace(/^\[|\]$/g, "")
        .split(/[\s,]+/)
        .map((g) => g.trim())
        .filter(Boolean);
}

function titleFromFile(file) {
    return file
        .replace(/\.[^.]+$/, "")
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function isVideo(key) {
    const lower = key.toLowerCase();
    return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

async function listCourseObjects(bucket, prefix) {
    const objects = [];
    let token;
    do {
        const out = await s3.send(new ListObjectsV2Command({
            Bucket: bucket,
            Prefix: prefix,
            ContinuationToken: token,
        }));
        (out.Contents || []).forEach((o) => objects.push(o));
        token = out.IsTruncated ? out.NextContinuationToken : undefined;
    } while (token);
    return objects;
}

async function readManifest(bucket, prefix) {
    try {
        const out = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: `${prefix}manifest.json` }));
        return JSON.parse(await out.Body.transformToString());
    } catch (err) {
        if (err.name === "NoSuchKey") return null;
        logger.error("Could not read manifest", { prefix, message: err.message });
        return null;
    }
}

function buildSessions(objects, manifest, prefix) {
    const byFile = new Map(
        objects
            .filter((o) => isVideo(o.Key))
            .map((o) => [o.Key.slice(prefix.length), o])
    );

    if (manifest && Array.isArray(manifest.sessions)) {
        return manifest.sessions
            .filter((s) => byFile.has(s.file))
            .map((s) => ({ file: s.file, title: s.title || titleFromFile(s.file), size: byFile.get(s.file).Size }));
    }

    return [...byFile.keys()]
        .filter((file) => !file.includes("/"))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((file) => ({ file, title: titleFromFile(file), size: byFile.get(file).Size }));
}

exports.handler = async (event) => {
    try {
        const claims = event.requestContext?.authorizer?.jwt?.claims || {};
        const groups = parseGroups(claims["cognito:groups"]);

        logger.info("Recordings requested", { user: claims.sub, groups });

        if (groups.length === 0) {
            return success({ courses: [] });
        }

        const bucket = process.env.RECORDINGS_BUCKET;
        const domain = process.env.DOWNLOAD_DOMAIN;
        const keyPairId = process.env.KEY_PAIR_ID;
        const ttlHours = Number(process.env.LINK_TTL_HOURS || 6);
        const expires = new Date(Date.now() + ttlHours * 3600 * 1000);
        const privateKey = await getPrivateKey();

        const courses = [];

        for (const group of groups) {
            const prefix = `courses/${group}/`;
            const [objects, manifest] = await Promise.all([
                listCourseObjects(bucket, prefix),
                readManifest(bucket, prefix),
            ]);

            const sessions = buildSessions(objects, manifest, prefix).map((s) => ({
                title: s.title,
                file: s.file,
                sizeBytes: s.size,
                url: getSignedUrl({
                    url: `https://${domain}/${prefix}${s.file.split("/").map(encodeURIComponent).join("/")}`,
                    keyPairId,
                    privateKey,
                    dateLessThan: expires.toISOString(),
                }),
            }));

            courses.push({
                id: group,
                title: (manifest && manifest.title) || titleFromFile(group),
                sessions,
            });
        }

        return success({ courses, linksExpireAt: expires.toISOString() });
    } catch (err) {
        logger.error("Failed to list recordings", { message: err.message });
        return error(500, "Could not load your recordings. Please try again shortly.");
    }
};

// Exposed for unit tests
exports._internal = { parseGroups, buildSessions, titleFromFile };
