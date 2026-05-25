# Changelog

## 2026-05-25

### v0.1
- Shipped the first public regulated-workflow control surface.
- Added comment-lane, obligation-map, approval-posture, verification, and docs routes.
- Added browser-rendered proof assets for the README.

### v1.0
- Published as the first repo in the Industry Atlas expansion.
- Opened the GovTech / RegTech cluster while staying aligned with the Kinetic Gain governance and operator-tooling spine.

### v1.0-prod — production hardening (Claude Code · Platform/SRE)
- CI: Node 20 + 22 matrix running lint, typecheck, coverage, build, demo, smoke, and `npm audit`.
- Tests: added `src/services/render.test.ts`; raised `src/services/` coverage to 100% statements / 100% functions (gate ≥ 60%).
- Tooling: added ESLint (flat config, typescript-eslint) and `typecheck`/`coverage`/`start` scripts.
- License: added AGPL-3.0-or-later `LICENSE` file.
- Dependabot: weekly npm + github-actions updates.
- Security: added `SECURITY.md`; `npm audit --audit-level=high` wired into CI (0 known high/critical).
- Deploy: staged `fly.toml` + `Dockerfile` + `.dockerignore` (deploy pending credentials).
- Repo hygiene: PR template, bug/feature issue templates, `outreach.md` scaffold, README badges + Production status block.

### v1.0.1-prod — deploy via static prerender + GitHub Pages
- Replaced the Fly.io deploy path (payment + SSO-gated tokens = friction) with a zero-credential static deploy.
- Added `scripts/prerender.ts`: snapshots every route to flat `.html` (relative nav links, host-agnostic) plus the API surface as JSON under `site/`.
- Added `.github/workflows/pages.yml` (GitHub Pages via Actions; `GITHUB_TOKEN` only — no external secrets).
- Removed `fly.toml`, `Dockerfile`, `.dockerignore`. No `0.0.0.0` bind change needed (static, no running server).
- Custom `kineticgain.com` domain to be layered via a CNAME once the DNS record is created.
