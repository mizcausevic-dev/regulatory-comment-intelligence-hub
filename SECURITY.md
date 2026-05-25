# Security Policy

## Scope

This repository is a **reference control plane** for regulatory comment intake,
obligation mapping, approval posture, and evidence packaging. It ships sample,
non-sensitive data only. It is not a production system of record and should not
be deployed with real regulated data without an independent security review.

## Supported versions

| Version | Supported |
|---------|-----------|
| `v1.0-prod` and later | ✅ |
| `v0.1-shipped` (pre-hardening) | ❌ |

## Reporting a vulnerability

Please report suspected vulnerabilities privately to **security@kineticgain.com**
(or open a [GitHub security advisory](https://github.com/mizcausevic-dev/regulatory-comment-intelligence-hub/security/advisories/new)).
Do not open a public issue for a security report.

We aim to acknowledge within 3 business days.

## Dependency posture

- Dependencies are monitored weekly via Dependabot (npm + GitHub Actions).
- CI runs `npm audit --audit-level=high` on every push and pull request.
- High/critical advisories are triaged and either patched or documented here.

### Known / accepted advisories

_None at v1.0-prod._ If `npm audit` surfaces a high/critical advisory that cannot
be patched without breaking the public API, it will be documented in this section
with the rationale and mitigation.
