# AI implementation-agent playbook

Status: delivery control · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: engineering council

This is the mandatory execution protocol for future coding agents. It prevents locally plausible code from diverging from CollabX architecture.

## Instruction precedence

1. Human-approved work-item scope and acceptance evidence.
2. Security/privacy/tenant/authority policies and stop conditions.
3. Canonical schemas, domain invariants and accepted ADRs.
4. This design corpus and repository instructions.
5. Existing implementation patterns that comply with 1–4.

Code is not evidence that a conflicting design decision is settled. Raise the conflict.

## Before implementation

Read the capability, journey, domain context, architecture, contract/state catalogue, threat/privacy notes, accepted ADRs and neighbouring code. Inspect dirty worktree and preserve unrelated human changes. Restate the exact acceptance examples, non-goals, dependencies and verification plan in the task record. If the task lacks an authority model, tenant scope, failure/idempotency behaviour or evidence gate, stop and convert it to specification/spike work.

## Vertical-slice sequence

1. Add/update canonical vocabulary and JSON Schema with valid/invalid examples.
2. Add pure domain values, aggregate transition and property tests.
3. Add application command/query/port and authorisation action.
4. Add migration/repository/RLS plus integration and isolation tests.
5. Add outbox event/inbox consumer if cross-context behaviour exists.
6. Add API/stream adapter and generated client contract tests.
7. Add workflow/activity with replay/idempotency/cancellation tests when long-running.
8. Add UI including loading/empty/stale/permission/error/accessibility states.
9. Add telemetry/audit with safe fields and SLO signal.
10. Add threat/abuse, evaluation and E2E cases; update docs/ADR/runbook.

Avoid horizontal phases that build every database table, then every endpoint, then every UI. Deliver one outcome-capable thread behind a feature flag.

## AI-specific change sequence

Dataset/rubric first → baseline result → candidate prompt/graph/tool/model → offline and adversarial evaluations → expert review → shadow → canary → approval. Never tune on the hidden release set. Do not commit model-generated semantic memory, change prompts, or swap model aliases directly in production.

## Frontend and repository-change addendum

For frontend or generated-code work, read the [enterprise frontend specification](../experience/enterprise-frontend-experience.md) and [experience-generation/coding-agent specification](../intelligence/experience-generation-and-coding-agent.md). The dossier also records target role/job/journey/portal surface; applicable normal/empty/loading/partial/stale/denied/conflict/error/offline/recovery states; viewport/theme/locale/accessibility matrix; exact repository/ref/base revision and dirty state; instruction/context manifest; allowed paths/tools/network/effects; mock-data schema/seed; semantic/visual/code delta; screenshots; patch receipts; and revert.

Inspect established routes, components, tokens, schemas and tests before generating equivalents. Patch exact scoped files against a known base, preserve unrelated user changes, and keep commit/push/PR/deploy as distinct explicitly authorised actions. Validation includes rendered-browser inspection and manual keyboard/assistive-technology evidence for critical journeys; type/lint/unit success alone is incomplete.

## Required task dossier

```text
ID / owner / reviewers
Capability and user outcome
In scope / explicitly out of scope
Dependencies and accepted ADRs
Actors, tenant tier, authority and data classes
Domain entities, commands, states and invariants
API/events/schema versions and examples
UX states and accessibility acceptance
Failure, retry, idempotency, concurrency and rollback
Threats/privacy/retention and audit
Telemetry/SLO/cost budget
Tests/evaluations and exact commands
Migration/deployment/feature flag
Evidence links and remaining risks
```

## Change-size and commit discipline

One coherent behaviour per work item; separate mechanical generation/migration from semantic changes. Generated files identify their source and are never hand-edited. Lock files change only for an approved dependency. Do not reformat unrelated files. Do not disable tests, loosen types/schemas, bypass RLS/policy, catch broad exceptions, add silent fallback or log content to make a task pass.

## Framework rules

- Domain/application packages do not import AWS, FastAPI, ORM, LangChain/LangGraph, Temporal or model SDK types.
- All framework data is translated at adapters.
- Agents return typed proposals only; canonical writes go through application commands.
- External calls use ports with timeout, retry policy, circuit breaker and receipt.
- Code for the accepted durable-workflow adapter is deterministic; agent/model calls occur only in retry-safe, receipt-producing activities.
- Database connections always establish tenant/actor context and clear it safely.
- No raw SQL/string tool construction from model output.
- No long-lived cloud credentials; CI and workloads use federated roles.

## Verification report

Report commands and outcomes for static/unit/property, schema/compatibility, integration/RLS, workflow replay, UI/E2E/accessibility, security and affected evaluation suites. Show migration forward/backward or explain expand/contract. Include diff scope, screenshots/rendered artefacts where visual, telemetry added, cost/latency change, residual risk and rollback. “Tests pass” without names/scope is not sufficient.

## Stop and escalation

Stop on destructive target ambiguity; user-owned conflicting changes; missing business authority; new external side effect; data transfer/residency change; security/control bypass; breaking schema without migration; unreviewed dependency/service/model; failed critical invariant/isolation/evaluation; irreversible migration; evidence falsifying the task thesis; or required secrets/access. Safe read-only investigation continues until the exact blocker is known.

## Completion test

A task is complete only when requested behaviour works through its real boundary, every stated acceptance item has direct evidence, negative/failure cases pass, documentation/contracts match, migration and rollback are viable, observability exists, and no required follow-up is disguised as “future work”. Partial implementation remains explicitly open.
