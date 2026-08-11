# Milestone 2 — Trusted enterprise foundation

Status: delivery control · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: engineering delivery council · Maps to: R1 / T1–T4

## Outcome and decision

Deliver a model-independent, tenant-safe, recoverable substrate for identity, authority, evidence, temporal knowledge, contracts, durable workflows, audit and data lifecycle. The gate decides whether the foundation is safe enough for intelligence work; it does not claim BA competence.

Read: [system architecture](../architecture/system-architecture.md), [AWS platform](../architecture/aws-platform.md), [AWS operations](../architecture/aws-security-resilience-operations.md), [data model](../architecture/data-and-knowledge-model.md), [implementation blueprint](../engineering/implementation-blueprint.md), [API/event catalogue](../engineering/api-event-and-state-catalogue.md), [verification](../engineering/verification-strategy.md), [enterprise readiness](../governance/enterprise-readiness-model.md), and T1–T4 in the [build sequence](../delivery/build-sequence-and-dependency-graph.md).

## Entry and delivery controls

- Entry: signed M1 `invest/narrow` decision, approved scope, schema conventions, data/threat classification, provisional ADRs and staffed control owners.
- Build vertical slices behind flags. Every task dossier names tenant/authority, rollback, telemetry, tests and evidence.
- No production/customer data and no autonomous external writes. Real models are limited to provider/telemetry integration probes.
- Critical isolation, provenance, durability, deletion or restore failure blocks the milestone and cannot be waived by schedule.

## Existing work-package coverage

| Milestone task | Existing work packages |
|---|---|
| M2.01 | T1.08–T1.10 plus the accepted T0 contract outputs |
| M2.02 | T1.01–T1.07 |
| M2.03 | T1.10–T1.11 |
| M2.04 | T2.01, T2.10 |
| M2.05 | T2.02–T2.04, T2.11 |
| M2.06 | T2.05–T2.09, T2.12 |
| M2.07 | T3.01–T3.04 |
| M2.08 | T3.05–T3.11 |
| M2.09 | T4.01–T4.03 |
| M2.10 | T4.04–T4.08, T4.12 |
| M2.11 | T4.09–T4.10 |
| M2.12 | T3.12 |
| M2.13 | T4.11–T4.12 |
| M2.14 | T1.11–T1.12, T2.12, T3.12 |
| M2.15–M2.16 | T1.13–T1.14 |
| M2.17 | qualification across T1–T4 and expanded foundations |

All T1.01–T1.14, T2.01–T2.12, T3.01–T3.12 and T4.01–T4.12 packages are covered; ranges are inclusive.

## Work plan

### M2.01 — Bootstrap repository, contracts and supply-chain gates

1. Create the target repository/package boundaries and stable root task runner.
2. Establish locked dependencies, formatting/types, architecture import tests, secret scanning and generated-code rules.
3. Implement canonical JSON Schema registry, examples, breaking-diff policy and OpenAPI/event generation.
4. Build signed artefact, SBOM, provenance and vulnerability gates with documented exception expiry.

Accept: clean-room checkout reproduces builds; domain imports no framework/cloud types; invalid/breaking schemas fail; critical/high exploitable findings block. Evidence: T0.03–T0.05/T1.08–T1.10 dossiers.

### M2.02 — Provision governed AWS landing zone

1. Create approved OUs/accounts, workforce access, root/break-glass, log archive and delegated security services through IaC.
2. Apply/test SCPs for Regions, public storage/database, logging, IAM keys, KMS and backup protections.
3. Create non-production regional cell network, private subnets/endpoints and inspected connector egress.
4. Verify CloudTrail/Config/GuardDuty/Security Hub aggregation and immutable evidence retention.

Accept: policy-negative tests cannot create prohibited resources; all control findings route to owner/runbook; drift detection passes. Evidence: T1.01–T1.07.

### M2.03 — Establish environment promotion and configuration governance

1. Define preview/integration/evaluation/staging/production accounts, trust and deployment roles.
2. Separate secret references from config; validate `.env.example`; prevent `.env` and credentials entering git/build artefacts.
3. Promote identical signed image/schema/policy/prompt digests with environment bindings only.
4. Exercise blue/green rollback and expand/migrate/contract on a production-shaped snapshot.

Accept: secret leak suite returns zero; digest equality is provable; deployment and rollback meet declared objectives without data loss.

### M2.04 — Implement tenant, residency, tier and entitlement core

1. Model tenant/cell/tier/residency/status/entitlement/quotas with explicit transitions.
2. Bind immutable tenant and purpose context from authentication through command, queue, cache, DB, object and telemetry.
3. Enforce pool/bridge/silo policy contracts while implementing only the approved initial tier.
4. Add provisioning, suspension, tier-change and offboarding workflows with approvals.

Accept: missing/malformed context denies; concurrent tenant/tier changes preserve invariants; quotas fail safely; offboarding reaches a verified terminal state.

### M2.05 — Implement identity, federation and authority lifecycle

1. Build CIAM port and selected adapter; validate OIDC/SAML, session expiry/revocation, step-up and recovery.
2. Implement membership, groups, delegation/expiry, service identities and relationship-aware action catalogue.
3. Implement SCIM/JIT joiner/mover/leaver and customer-admin boundaries.
4. Run full positive/negative authority matrix, access review and emergency break-glass exercise.

Accept: leaver access revoked within the declared SLA (target ≤15 minutes for automated deprovisioning); stale delegation cannot approve; every privileged action is attributable and reviewed.

### M2.06 — Select and implement policy enforcement plus RLS

1. Define engine-neutral PDP inputs/outputs, reason codes, versioning and deny-on-error semantics.
2. Compare AVP/embedded Cedar/OPA against the same conformance, latency, lifecycle and tenant-scale suite.
3. Implement PEPs at API, service, workflow signal, retrieval, tool and export boundaries.
4. Implement hardened transaction-local PostgreSQL context/RLS and connection reset tests.

Accept: 100% authority matrix decisions match policy oracle; zero cross-tenant rows under pool/reuse/failure tests; chosen backend has accepted ADR/rollback.

### M2.07 — Build source ingestion, quarantine and stable evidence

1. Implement presigned upload contract, checksums, size/type limits, malware/DLP/injection/decompression quarantine.
2. Store immutable original/source version/hash/classification/retention and parser activity.
3. Sandbox parsing/OCR and create exact page/time/character/structural evidence anchors.
4. Build accessible viewer and reparse/version tests that never silently move anchors.

Accept: all hostile fixtures remain quarantined/unindexed; anchor hash/coordinates reproduce approved spans; parser confidence routes review; no worker secrets/network escape.

### M2.08 — Build bitemporal epistemic work graph

1. Implement items, versions, assertions, evidence, relations, conflicts, decisions and baselines as canonical schemas.
2. Enforce append-only semantic versions, valid/recorded time, optimistic concurrency and relation endpoint versions.
3. Implement as-of/recorded-as-of queries, provenance traversal and typed conflict lifecycle.
4. Add property tests for interval overlap, supersession, concurrent edit and historical replay.

Accept: 100% generated valid histories reproduce expected truth; invalid overlap/state transitions fail; every material assertion resolves to permitted evidence or `UNSUPPORTED`.

### M2.09 — Implement command, event and idempotency substrate

1. Implement the command/UoW template with idempotency/expected version and safe problem details.
2. Persist aggregate, audit fact, outbox and idempotency response atomically.
3. Implement event envelope, inbox dedupe, SQS/EventBridge routing, DLQ ownership and reconciliation.
4. Inject duplicate, reorder, timeout, crash, partial publish and replay cases.

Accept: no acknowledged command lost; no duplicate semantic/external effect across the complete fault matrix; consumers tolerate compatible schema evolution.

### M2.10 — Qualify durable engagement runtime with X07-B

1. Implement workflow namespace/security/codec, engagement lifecycle, human signals, timers, cancellation and compensation.
2. Pin workflow/activity versions and bound history; keep content out of workflow history.
3. Kill/redeploy during every activity; test history upgrades, worker outage, duplicate signals, late approvals and operator recovery.
4. Compare results with M1 provisional ADR and accept, constrain or replace it.

Accept: zero lost acknowledged state/duplicate effect; replay deterministic; recovery/operator objectives and cost limits pass; signed production-runtime ADR exists.

### M2.11 — Establish audit, telemetry and privacy-safe observability

1. Define immutable audit facts separately from operational, AI evaluation and product analytics.
2. Correlate user command through workflow/activity/tool/provider and committed versions using content-off defaults.
3. Add field allowlists, cardinality limits, redaction tests, sampling approvals and customer audit export.
4. Build SLI dashboards and actionable alerts for APIs, queues, workflow, DB, object store and controls.

Accept: ≥99.9% of synthetic accepted commands have a complete correlation path; zero seeded secret/content fields appear; audit tampering is detected.

### M2.12 — Implement retention, legal hold, rights and verified deletion

1. Bind purpose, consent/basis, classification, Region, owner, hold, retention and due date at ingestion.
2. Implement access/export, correction, restriction and deletion request state machines with identity/authority checks.
3. Traverse original, span, chunk, embedding, cache, summary, evaluation copy, export and backup policy.
4. Reconcile and issue non-sensitive certificate; inject partial failure and legal-hold conflicts.

Accept: 100% eligible seeded derivatives removed within test SLA; held content preserved and explained; certificate exactly matches scope; no other-tenant/participant disclosure.

### M2.13 — Prove backup, restore, dependency degradation and capacity

1. Configure versioning/PITR/cross-account backup and validate application-consistent restore.
2. Exercise AZ loss, Aurora failover, queue outage, IdP outage, object failure and model outage.
3. Verify class-A evidence read/edit and human workflow remain usable when intelligence fails.
4. Load forecast, 2× burst and 10× capacity model with tenant-fairness controls.

Accept: NFR AVL/PERF targets pass or approved targets are revised with evidence; no noisy neighbour breaches another tenant SLO; restore proves RPO/RTO using timestamps.

### M2.14 — Rehearse customer provisioning, support and offboarding

1. Provision two synthetic tenants with distinct identity, policy, Region/tier and data-retention settings.
2. Run administrator onboarding, access review, support SEV-2 simulation and status/customer communication.
3. Export one tenant canonically, import to a clean environment and compare semantic hashes.
4. Offboard it: revoke users/connectors, apply hold/retention, delete eligible data and reconcile usage.

Accept: no manual hidden step lacks owner/runbook; export/import preserves 100% canonical entities/relations/versions; offboarding evidence is complete.

### M2.15 — Build enterprise frontend platform and design-system foundation

1. Implement the product shell, routing, authentication/tenant context, permission-aware navigation, error boundary, resumable data/stream client and stable URL/deep-link contract.
2. Build token layers and accessible foundation/semantic components from the [enterprise frontend specification](../experience/enterprise-frontend-experience.md), with documented states, keyboard/focus, screen-reader, responsive, locale and tenant-theme contracts.
3. Establish Storybook-equivalent component evidence, generated API clients, test fixtures, visual snapshots and analytics event schemas with safe-field allowlists.
4. Exercise tenant switch, stale session, multi-tab, offline/reconnect, error/retry, zoom/RTL/long text and representative device/browser matrices.

Accept: 100% foundation and semantic components pass automated accessibility plus manual keyboard/screen-reader smoke; zero tenant/cache/URL leakage; visual snapshots cover all supported theme/viewport/locale states; shell meets PERF-01 and local feedback targets.

### M2.16 — Build governed preview and code-workspace substrate

1. Implement experience-project, context-manifest, workspace-binding, change-set, patch/tool receipt and validation-run schemas/state machines without model autonomy.
2. Provision ephemeral preview/code workers with pinned image/dependencies, resource quotas, network deny/default, no ambient credentials, origin-isolated preview and structured host messaging.
3. Implement exact-base inspect/patch/re-read/diff/revert primitives, allowed-path policy and dirty/unrelated-change preservation; keep commit/push/PR/deploy as separate disabled effects.
4. Test malicious repository instructions, symlinks/path traversal, huge/binary files, stale base, partial patch, concurrent edit, dependency scripts, secret detection, sandbox escape and cleanup.

Accept: zero path/sandbox/network/secret escape; zero unrelated-change loss across the adversarial matrix; every apply/revert has complete receipt and reproducible base; all external version-control/deployment effects remain denied.

### M2.17 — Hold foundation release review

1. Compile test, security, accessibility-shell, migration, restore, runtime, cost and residual-risk evidence.
2. Independently sample isolation, authority, provenance, deletion and replay results.
3. Classify all ER dimensions relevant to foundation and expire/approve any exception.
4. Sign `accept`, `constrain/rework`, `replace architecture`, or `stop` and set M3 limits.

Accept: all zero-tolerance gates pass and release authority signs the evidence manifest; code volume or CI green status alone is insufficient.

## Milestone success scorecard

| Measure | Gate |
|---|---|
| Isolation/authority | zero cross-tenant disclosure; 100% oracle decisions; deny on missing context |
| Durability | zero lost acknowledged command/answer/approval and zero duplicate effect in fault suite |
| Historical correctness | 100% property/generated histories reproduce expected bitemporal result |
| Provenance | 100% material claims cited or `UNSUPPORTED` |
| Deletion/export | 100% eligible derivative traversal; lossless canonical round trip |
| Observability | ≥99.9% correlation completeness; zero seeded sensitive telemetry leakage |
| Recovery/performance | all applicable AVL/PERF gates pass under production-shaped load |
| Supply chain | reproducible signed build/SBOM; zero unaccepted critical/high exploitable issue |
| Frontend foundation | accessible component/state/visual matrix passes; zero tenant/cache/URL leak; shell performance passes |
| Code workspace | zero sandbox/path/network/secret escape or unrelated-change loss; exact-base apply/revert receipts complete |

## Runnable validation contract

```bash
task docs:check
task test:unit test:property test:schema test:architecture
task test:integration test:rls test:isolation test:authority
task test:workflow-replay test:idempotency test:deletion test:export-roundtrip
task test:security test:accessibility test:load test:chaos
task test:frontend-shell test:components test:visual test:workspace-sandbox test:patch-integrity
task eval:preflight --profile eval-real --redact
task test:provider-observability --profile eval-real
task evidence:verify --milestone M2
```

## Exit and handoff

M3 receives accepted provider-neutral ports, schema/policy registries, source/evidence and temporal stores, durable workflow, context-manifest shell, real-provider preflight, evaluation runner foundation, isolation/authority harness and operating runbooks. Intelligence work is blocked by any unresolved critical isolation, deletion, replay, provenance or telemetry leak.
