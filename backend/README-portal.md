# Learner Portal

Paid learners sign in at `/portal/index.html` and download their course
recordings. Payment is handled outside the site; after a learner pays, you
give them access with one command.

## How it works

| Piece | Service | Notes |
| --- | --- | --- |
| Logins | Amazon Cognito user pool `ds-infotech-learners` | Invite-only. Learners can't sign themselves up. |
| Login page | Cognito hosted login | Handles first-time password change and "forgot password". |
| Courses | Cognito groups | One group per course. Folder `courses/<group>/` in the bucket. |
| Recordings | Private S3 bucket | Block Public Access on, encrypted. |
| Downloads | CloudFront with signed URLs | Links expire after 6 hours. Signing key is generated at deploy time and kept in SSM Parameter Store. |
| API | `GET /recordings` on the existing HTTP API | Protected by a Cognito JWT authorizer. |

## One-time setup (after the first deploy)

1. **Merge the pull request.** The backend workflow creates everything above.
   If the deploy fails because the login domain is taken, change the
   `AuthDomainPrefix` default in `template.yaml` and merge again.
   If it fails with `AccessDenied`, the deploy IAM user needs permissions for
   Cognito, CloudFront, S3 bucket creation and SSM Parameter Store.

2. **Read the stack outputs:**

   ```bash
   aws cloudformation describe-stacks --region ap-south-1 \
     --stack-name ds-infotech-backend \
     --query "Stacks[0].Outputs" --output table
   ```

3. **Add three repository variables** on GitHub:
   *Settings → Secrets and variables → Actions → Variables → New repository variable*

   | Variable | Stack output |
   | --- | --- |
   | `NEXT_PUBLIC_COGNITO_DOMAIN` | `CognitoDomain` |
   | `NEXT_PUBLIC_COGNITO_CLIENT_ID` | `CognitoClientId` |
   | `NEXT_PUBLIC_PORTAL_API` | `PortalApi` |

   These are public values (they end up in the browser), so variables, not secrets.

4. **Re-run the "Deploy Frontend" workflow** (Actions tab → Deploy Frontend → Re-run).
   Until then the portal page shows "coming soon".

## Day-to-day

Run these from the `backend/` folder with AWS CLI credentials for the company account.

**Upload a course's recordings** (safe to re-run; only new or changed files upload):

```bash
./scripts/upload-recordings.sh ~/Videos/devops-nov devops-nov-2026
```

**Give a learner access** (creates their login and emails a temporary password):

```bash
./scripts/add-learner.sh learner@example.com devops-nov-2026
```

**Remove access:**

```bash
./scripts/add-learner.sh --remove learner@example.com devops-nov-2026
```

### Optional: titles and order

Without a manifest, sessions are listed in file-name order with titles taken
from the file names (`03-docker-basics.mp4` → "03 docker basics").
For nicer titles, add `manifest.json` to the folder before uploading:

```json
{
  "title": "DevOps on AWS – November 2026 Batch",
  "sessions": [
    { "file": "01-intro.mp4", "title": "Day 1 – Introduction to DevOps and Git" },
    { "file": "02-cicd.mp4", "title": "Day 2 – CI/CD with CodePipeline" }
  ]
}
```

Only files listed in the manifest are shown, in that order.

## Running costs (ap-south-1, list prices)

- **Downloads:** CloudFront's first 1 TB per month is free; after that,
  delivery to viewers in India is about $0.109/GB.
- **Storage:** S3 Standard, roughly $0.025/GB-month.
- **Logins, API, Lambda, SSM:** within free tiers at this scale.

Check the AWS Pricing Calculator for current rates before relying on these.

## Limits to be aware of

- Anyone with a learner's password can use their login, and downloaded files
  can be copied. Each `/recordings` request is logged in CloudWatch with the
  learner's ID, which helps spot shared accounts.
- Cognito's default email sender allows a limited number of invitations per
  day. Connect Amazon SES to the user pool if you add many learners at once.
