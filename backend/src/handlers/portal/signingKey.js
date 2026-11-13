/**
 * CloudFormation custom resource: CloudFront signing key pair.
 *
 * Create: generates an RSA-2048 key pair, stores the private key as an
 *         SSM SecureString and the public key as a plain String, and returns
 *         the public key so CloudFormation can register it with CloudFront.
 * Update: returns the existing key, so the key never rotates by accident.
 * Delete: removes both parameters.
 */

const crypto = require("crypto");
const https = require("https");
const {
    SSMClient,
    PutParameterCommand,
    GetParameterCommand,
    DeleteParameterCommand,
} = require("@aws-sdk/client-ssm");

const ssm = new SSMClient({});

function respond(event, context, status, data, reason) {
    const body = JSON.stringify({
        Status: status,
        Reason: reason || `See CloudWatch log stream ${context.logStreamName}`,
        PhysicalResourceId: event.PhysicalResourceId || event.ResourceProperties.ParameterPrefix,
        StackId: event.StackId,
        RequestId: event.RequestId,
        LogicalResourceId: event.LogicalResourceId,
        Data: data || {},
    });

    const url = new URL(event.ResponseURL);

    return new Promise((resolve, reject) => {
        const req = https.request(
            {
                hostname: url.hostname,
                path: url.pathname + url.search,
                method: "PUT",
                headers: {
                    "Content-Type": "",
                    "Content-Length": Buffer.byteLength(body),
                },
            },
            (res) => {
                res.on("data", () => {});
                res.on("end", resolve);
            }
        );
        req.on("error", reject);
        req.write(body);
        req.end();
    });
}

async function getParam(name, decrypt) {
    try {
        const out = await ssm.send(new GetParameterCommand({ Name: name, WithDecryption: decrypt }));
        return out.Parameter.Value;
    } catch (err) {
        if (err.name === "ParameterNotFound") return null;
        throw err;
    }
}

exports.handler = async (event, context) => {
    const prefix = event.ResourceProperties.ParameterPrefix;
    const privateName = `${prefix}/private`;
    const publicName = `${prefix}/public`;

    try {
        if (event.RequestType === "Delete") {
            for (const name of [privateName, publicName]) {
                try {
                    await ssm.send(new DeleteParameterCommand({ Name: name }));
                } catch (err) {
                    if (err.name !== "ParameterNotFound") throw err;
                }
            }
            await respond(event, context, "SUCCESS");
            return;
        }

        let publicKey = await getParam(publicName, false);
        const existingPrivate = await getParam(privateName, true);

        if (!publicKey || !existingPrivate) {
            const pair = crypto.generateKeyPairSync("rsa", {
                modulusLength: 2048,
                publicKeyEncoding: { type: "spki", format: "pem" },
                privateKeyEncoding: { type: "pkcs8", format: "pem" },
            });

            await ssm.send(new PutParameterCommand({
                Name: privateName,
                Value: pair.privateKey,
                Type: "SecureString",
                Overwrite: true,
                Description: "CloudFront signing private key for learner downloads",
            }));

            await ssm.send(new PutParameterCommand({
                Name: publicName,
                Value: pair.publicKey,
                Type: "String",
                Overwrite: true,
                Description: "CloudFront signing public key for learner downloads",
            }));

            publicKey = pair.publicKey;
        }

        await respond(event, context, "SUCCESS", {
            PublicKey: publicKey,
            PrivateKeyParameter: privateName,
        });
    } catch (err) {
        console.error(err);
        await respond(event, context, "FAILED", {}, String(err.message || err).slice(0, 200));
    }
};
