# Architecture

## Overview

`regulatory-comment-intelligence-hub` is a lightweight TypeScript + Express control surface for modeling the operational layer between a public rulemaking prompt and a submission-ready response packet.

## Surfaces

- `overview`
  - active dockets
  - deadline pressure
  - agency coverage
  - obligation readiness
- `comment-lane`
  - docket-by-docket workflow state
  - deadline, owner, and next action
- `obligation-map`
  - section-level obligations
  - impact areas
  - evidence gaps and ownership
- `approval-posture`
  - packet completeness
  - blocker visibility
  - sign-off pressure
- `verification`
  - what the repo proves about regulated workflow systems

## Data Model

- `CommentRecord`
  - agency, docket, stage, deadline, lead analyst, risk, next action
- `ObligationItem`
  - source section, owner, impact area, readiness, evidence gap
- `ApprovalPacket`
  - audience, completeness score, blocker, due date, decision note

## Design Principle

Regulatory comment work should be inspectable by policy, legal, compliance, and executive stakeholders. The system should explain:
- what still needs to be submitted
- what evidence is missing
- who owns each unresolved obligation
- whether the approval path is safe or collapsing under time pressure
