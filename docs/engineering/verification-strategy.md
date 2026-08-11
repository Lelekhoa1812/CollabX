# Verification and quality strategy

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: quality and engineering councils

## Test pyramid plus evaluation lattice

Deterministic correctness and probabilistic quality are different systems. CI tests contracts/invariants on every change; evaluation jobs measure distributions and cannot be reduced to one flaky pass/fail generation.

| Layer | Required scope |
|---|---|
| Unit/property | value objects, temporal intervals, transition invariants, scoring, reducers, parsers |
| Schema/static | types, JSON Schema, OpenAPI/events, architecture imports, prompt/tool manifests |
| Component | DB repositories/RLS, S3 anchors, policy engine, model/tool adapters with recordings/fakes |
| Contract | producer/consumer, external connector sandboxes, model structured outputs |
| Integration | Aurora/SQS/EventBridge/selected durable-workflow runtime/S3/Bedrock test account through private paths |
| Workflow/replay | duplicates, reorder, crash, timeout, cancellation, version upgrade, compensation |
| E2E | representative journeys and browser/accessibility across role/tenant boundaries |
| Evaluation | gold BA capability, retrieval, agent, safety, human and field outcomes |
| Operational | load/soak/chaos, backup/restore/DR, deploy/rollback, quota and cost |
| Service lifecycle | provision, federation/SCIM, support incident, rights/hold, metering, export/import and offboarding |
| Frontend/product | component states, browser journeys, role usability, visual/responsive/localised quality, RUM and analytics correctness |
| Generated experience/code | intent/trace, mock-data integrity, sandbox, exact-base patch, repository CI and independent visual/security/accessibility critique |

## Non-negotiable suites

- Tenant isolation matrix across API, DB, S3, cache, queue, search, graph, exports, logs and tools.
- Authority matrix: every sensitive transition allowed and denied by role/context/delegation/expiry.
- Bitemporal property tests: no invalid overlap; as-of and recorded-as-of reproduce historical decisions.
- Provenance: every material generated claim resolves to permitted immutable span or unsupported status.
- Idempotency: repeat every command/activity/webhook/tool effect without duplication.
- Compatibility: old event/API/schema/prompt/workflow history across upgrades.
- Deletion: originals and all projections/caches/exports removed or legal-held; certificate accurate.
- Accessibility: automated plus manual keyboard/screen-reader/zoom/contrast/reflow/cognitive testing.
- Security: SAST/SCA/secret/IaC/container/API/DAST and adversarial AI suites.
- Resilience: AZ, database, queue, model, IdP, connector, deploy and Region scenarios.
- Real-model conformance: redacted preflight, structured outputs, error/rate-limit/cancel, routing/fallback, reproducibility and cost attribution against each qualified deployment.
- Customer lifecycle: synthetic contract-to-provision, role training, support/escalation, plan/quota change, suspension, canonical exit and verified disposition.
- Documentation integrity: internal/external link policy, header/registry reachability, unique IDs/task counts, terminology, code fences/Mermaid, placeholders, secret patterns and runnable-command inventory.
- Frontend state matrix: every critical page in normal, empty, loading, partial, stale, denied, validation, conflict, error, offline and recovery states where applicable.
- Generated patch integrity: stale base, dirty/unrelated user change, path/scope escape, malformed patch, partial apply, failing test, rollback and prohibited commit/push/deploy.

## Test data

Factories generate tenant-separated, temporally valid domain data. Production data is prohibited from development; restricted evaluation data stays in the evaluation account/bucket with purpose access. Synthetic data includes realistic ambiguity and bias but cannot replace affected-person testing. Logs/screenshots are scrubbed before CI artefacts.

## Performance workload

Model concurrent live sessions, streaming connections, autosaves, document bursts, hybrid retrieval with ACL/time filters, graph impacts, agent fan-out, baseline render/export and connector webhook storms. Report per-tenant fairness and tail latency under overload. Capacity tests use realistic text/token/document distributions and provider quotas, not only HTTP request counts.

## Release pipeline gates

1. Pre-commit: format, lint, type, secret and fast unit/schema tests.
2. PR: architecture, unit/property, compatibility, component, IaC/security and affected evaluation smoke.
3. Merge: signed build/SBOM, full integration/workflow/E2E, migration and evaluation regression.
4. Staging: production-shaped load, security/DAST, accessibility, restore and deployment validation.
5. Shadow: candidate model/prompt/graph on policy-permitted traffic with no effects.
6. Canary: tenant/internal cohort, SLO/evaluation alarms and automatic technical rollback.
7. Promote: human release authority validates evidence manifest; bake and observe.

Real-model suites are split into a small required preflight/smoke gate and governed full evaluation jobs. Missing credentials may skip opt-in local smoke only; they cannot turn a required milestone evaluation green. The result explicitly reports `passed`, `failed`, `blocked`, or `not_applicable`—never an ambiguous skip.

## Quality evidence manifest

Record commit/image digest, dependency/SBOM/signature, infrastructure plan, schema/migration versions, prompt/model/policy/domain-pack manifests, all test/evaluation results and failures/waivers, security scans, performance/cost, accessibility, restore/rollback proof, approvers and expiry. CI status alone is insufficient.

## Flake and oracle policy

Quarantine does not mean ignore: owner, issue, expiry and risk are required; critical suites cannot be quarantined. Stochastic evaluations run enough repetitions for uncertainty, use fixed parameters where supported and retain samples. Human graders use anchored rubrics and agreement checks. LLM graders are versioned/calibrated and never sole oracle for critical claims.
