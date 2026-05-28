# Regulatory Comment Intelligence Hub

[![CI](https://github.com/mizcausevic-dev/regulatory-comment-intelligence-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/mizcausevic-dev/regulatory-comment-intelligence-hub/actions/workflows/ci.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](./LICENSE)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-025E8C?logo=dependabot&logoColor=white)](./.github/dependabot.yml)
[![Deploy](https://github.com/mizcausevic-dev/regulatory-comment-intelligence-hub/actions/workflows/pages.yml/badge.svg)](https://github.com/mizcausevic-dev/regulatory-comment-intelligence-hub/actions/workflows/pages.yml)

TypeScript control plane for regulatory comment intake, obligation mapping, approval posture, and evidence-packaged submission workflows.

## Why this exists

Regulatory commenting is often treated like a writing exercise when it is really a deadline-sensitive operating system:
- agencies publish prompts that splinter into legal, technical, operational, and commercial obligations
- evidence sits across teams that do not naturally work from one queue
- reviewers care about different risks, so strong substance still dies in approval traffic
- comment quality degrades when ownership, deadline pressure, and evidence gaps are not visible early

`regulatory-comment-intelligence-hub` models that operating layer so policy, compliance, legal, and executive teams can inspect where submission readiness is strong and where it is about to fail.

## Why this matters (KG Embedded tie-back)

This repo demonstrates the evidence-packaged submission primitive for GovTech / RegTech buyers: regulatory comment intake tied to obligation mapping, approval blockers, and operator-safe escalation paths. A B2B SaaS buyer would care because public-sector and regulated submission workflows often need to surface inside customer-facing tools without exposing unsafe write paths or fragmented evidence trails. Kinetic Gain Embedded extends this into security-first in-product analytics for obligation-aware and approval-aware reporting across regulated workflows, see [kineticgain.com/embedded](https://kineticgain.com/embedded).

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

## Production status

<!-- Maintained by Claude Code (Platform/SRE lane) after v1.0-prod hardening. -->

| Aspect | Status |
|--------|--------|
| CI | Node 20 + 22 matrix — lint · typecheck · coverage · build · demo · smoke · `npm audit` ([workflow](./.github/workflows/ci.yml)) |
| Test coverage | 100% statements on `src/services/` (gate: ≥ 60%) |
| License | [AGPL-3.0-or-later](./LICENSE) |
| Dependencies | Dependabot weekly (npm + GitHub Actions); `npm audit --audit-level=high` in CI |
| Security | [SECURITY.md](./SECURITY.md) — 0 known high/critical advisories at v1.0-prod |
| Deploy | Static prerender → **https://dockets.kineticgain.com/** (Hostinger FTP, [deploy workflow](./.github/workflows/deploy.yml)) + github.io mirror ([pages workflow](./.github/workflows/pages.yml)) |

## Docs

- [Architecture](./docs/architecture.md)
- [Origin](./docs/ORIGIN.md)
- [Kinetic Gain Embedded tie-back](./docs/KINETIC_GAIN_EMBEDDED.md)
- [Changelog](./CHANGELOG.md)

## Part of the Kinetic Gain Suite

Operator surface in the [Kinetic Gain Suite](https://suite.kineticgain.com/) — a portfolio of buyer-readable control planes spanning security posture, compliance evidence, data-platform governance, FinOps, and operator workflows. See the suite index for related surfaces. Apex: [kineticgain.com](https://kineticgain.com/).
