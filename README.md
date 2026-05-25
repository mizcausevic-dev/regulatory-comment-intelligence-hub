# Regulatory Comment Intelligence Hub

TypeScript control plane for regulatory comment intake, obligation mapping, approval posture, and evidence-packaged submission workflows.

## Why this exists

Regulatory commenting is often treated like a writing exercise when it is really a deadline-sensitive operating system:
- agencies publish prompts that splinter into legal, technical, operational, and commercial obligations
- evidence sits across teams that do not naturally work from one queue
- reviewers care about different risks, so strong substance still dies in approval traffic
- comment quality degrades when ownership, deadline pressure, and evidence gaps are not visible early

`regulatory-comment-intelligence-hub` models that operating layer so policy, compliance, legal, and executive teams can inspect where submission readiness is strong and where it is about to fail.

## Routes

- `/`
- `/comment-lane`
- `/obligation-map`
- `/approval-posture`
- `/verification`
- `/docs`

## API

- `/api/dashboard/summary`
- `/api/comment-lane`
- `/api/obligation-map`
- `/api/approval-posture`
- `/api/verification`
- `/api/sample`

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Comment lane](./screenshots/02-comment-lane-proof.png)
![Obligation map](./screenshots/03-obligation-map-proof.png)
![Approval posture](./screenshots/04-approval-posture-proof.png)

## Local Development

```powershell
cd regulatory-comment-intelligence-hub
npm install
npm run dev
```

Open:
- [http://127.0.0.1:5414/](http://127.0.0.1:5414/)
- [http://127.0.0.1:5414/comment-lane](http://127.0.0.1:5414/comment-lane)
- [http://127.0.0.1:5414/obligation-map](http://127.0.0.1:5414/obligation-map)
- [http://127.0.0.1:5414/approval-posture](http://127.0.0.1:5414/approval-posture)
- [http://127.0.0.1:5414/verification](http://127.0.0.1:5414/verification)

## Validation

- `npm run build`
- `npm run test`
- `npm run demo`
- `npm run smoke`
- `npm run render:assets`

## Docs

- [Architecture](./docs/architecture.md)
- [Origin](./docs/ORIGIN.md)
- [Changelog](./CHANGELOG.md)
