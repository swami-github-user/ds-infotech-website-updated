#!/usr/bin/env bash
# Upload a folder of session recordings for one course.
#
# Usage:
#   ./scripts/upload-recordings.sh <local-folder> <course-id>
#
# Example:
#   ./scripts/upload-recordings.sh ~/Videos/devops-nov devops-nov-2026
#
# <course-id> becomes the Cognito group name learners are added to, so use
# lowercase letters, numbers and hyphens (e.g. devops-nov-2026).
#
# Files are uploaded with "Content-Disposition: attachment" so the browser
# downloads them instead of playing them in a tab. Re-running the script only
# uploads new or changed files.
#
# Optional: put a manifest.json in the folder to set the course title and
# session titles/order (see README-portal.md).

set -euo pipefail

STACK_NAME="${STACK_NAME:-ds-infotech-backend}"
REGION="${AWS_REGION:-ap-south-1}"

if [ $# -ne 2 ]; then
  echo "Usage: $0 <local-folder> <course-id>" >&2
  exit 1
fi

SRC="$1"
COURSE="${2#./}"

if [[ ! "$COURSE" =~ ^[a-z0-9][a-z0-9-]{1,62}$ ]]; then
  echo "Course id must be lowercase letters, numbers and hyphens, e.g. devops-nov-2026" >&2
  exit 1
fi

if [ ! -d "$SRC" ]; then
  echo "Folder not found: $SRC" >&2
  exit 1
fi

BUCKET=$(aws cloudformation describe-stacks \
  --region "$REGION" \
  --stack-name "$STACK_NAME" \
  --query "Stacks[0].Outputs[?OutputKey=='RecordingsBucketName'].OutputValue" \
  --output text)

echo "Uploading videos from $SRC to s3://$BUCKET/courses/$COURSE/"

aws s3 sync "$SRC" "s3://$BUCKET/courses/$COURSE/" \
  --region "$REGION" \
  --exclude "*" \
  --include "*.mp4" --include "*.mkv" --include "*.mov" \
  --include "*.webm" --include "*.m4v" --include "*.avi" \
  --content-disposition attachment

if [ -f "$SRC/manifest.json" ]; then
  aws s3 cp "$SRC/manifest.json" "s3://$BUCKET/courses/$COURSE/manifest.json" \
    --region "$REGION" \
    --content-type application/json
  echo "Uploaded manifest.json"
fi

echo "Done. Add learners with: ./scripts/add-learner.sh <email> $COURSE"
