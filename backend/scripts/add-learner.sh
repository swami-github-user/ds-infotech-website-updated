#!/usr/bin/env bash
# Give a learner access to a course.
#
# Usage:
#   ./scripts/add-learner.sh <email> <course-id>
#
# - Creates the learner's login if it doesn't exist yet; Cognito emails them
#   a temporary password and the portal link.
# - Creates the course group the first time it is used.
# - Adds the learner to the course. Running it again for another course
#   gives the same learner access to both.
#
# To remove access:   ./scripts/add-learner.sh --remove <email> <course-id>

set -euo pipefail

STACK_NAME="${STACK_NAME:-ds-infotech-backend}"
REGION="${AWS_REGION:-ap-south-1}"

REMOVE=false
if [ "${1:-}" = "--remove" ]; then
  REMOVE=true
  shift
fi

if [ $# -ne 2 ]; then
  echo "Usage: $0 [--remove] <email> <course-id>" >&2
  exit 1
fi

EMAIL=$(echo "$1" | tr '[:upper:]' '[:lower:]')
COURSE="$2"

POOL_ID=$(aws cloudformation describe-stacks \
  --region "$REGION" \
  --stack-name "$STACK_NAME" \
  --query "Stacks[0].Outputs[?OutputKey=='LearnerUserPoolId'].OutputValue" \
  --output text)

if $REMOVE; then
  aws cognito-idp admin-remove-user-from-group \
    --region "$REGION" --user-pool-id "$POOL_ID" \
    --username "$EMAIL" --group-name "$COURSE"
  echo "Removed $EMAIL from $COURSE."
  exit 0
fi

# Create the course group on first use
if ! aws cognito-idp get-group --region "$REGION" --user-pool-id "$POOL_ID" \
     --group-name "$COURSE" >/dev/null 2>&1; then
  aws cognito-idp create-group --region "$REGION" --user-pool-id "$POOL_ID" \
    --group-name "$COURSE" --description "Course: $COURSE" >/dev/null
  echo "Created course group $COURSE"
fi

# Create the learner if needed (sends the invitation email)
if aws cognito-idp admin-get-user --region "$REGION" --user-pool-id "$POOL_ID" \
     --username "$EMAIL" >/dev/null 2>&1; then
  echo "$EMAIL already has a login"
else
  aws cognito-idp admin-create-user \
    --region "$REGION" \
    --user-pool-id "$POOL_ID" \
    --username "$EMAIL" \
    --user-attributes Name=email,Value="$EMAIL" Name=email_verified,Value=true \
    --desired-delivery-mediums EMAIL >/dev/null
  echo "Created login for $EMAIL and emailed the invitation"
fi

aws cognito-idp admin-add-user-to-group \
  --region "$REGION" --user-pool-id "$POOL_ID" \
  --username "$EMAIL" --group-name "$COURSE"

echo "$EMAIL now has access to $COURSE"
