# Contracts, prompts, observability, and security

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: engineering and security councils

## Contract-first boundary

All persisted commands, events, tool calls, agent states and artefacts have JSON Schema 2020-12 contracts with stable `$id`, semantic `schema_version`, examples and compatibility tests. Pydantic models are generated or checked against the canonical schema—not independently hand-maintained.

Versioning policy:

- Patch: clarifies documentation or adds non-semantic metadata.
- Minor: backward-compatible optional field/enum evolution with consumer tolerance proved.
- Major: breaking shape or meaning; dual read/write migration and explicit sunset.
- Events are immutable facts named in past tense; consumers ignore unknown fields but not unknown meanings.
- Every record carries `tenant_id`, `id`, `schema_version`, `occurred_at`, `correlation_id`, `causation_id`, actor, classification and trace context.

OpenAPI describes synchronous boundaries; AsyncAPI or equivalent describes messaging; JSON Schema owns payload meaning. Pin supported versions rather than “latest” (current OpenAPI specification index: [OAS 3.2.0](https://spec.openapis.org/oas/latest.html)).

## Prompt and policy dictionary

Prompts are governed release artefacts, not strings scattered through code.

| Field | Required content |
|---|---|
| Identity | stable key, semantic version, owner, status |
| Intent | capability, permitted decisions, non-goals |
| Inputs/outputs | schema IDs, trust labels, examples |
| Composition | system template, reusable fragments, locale |
| Controls | tool allowlist, risk class, budgets, stop/escalation rules |
| Dependencies | models, policies, ontology/domain-pack versions |
| Evidence | evaluation dataset/result, approval, rollout percentage |
| Lifecycle | effective date, supersedes, rollback target |

Semantic keywords such as `MUST`, `PROPOSED`, `CONFIRMED`, `CONTESTED`, `EVIDENCE`, `ASSUMPTION`, `AUTHORITY_REQUIRED`, `UNSUPPORTED`, and `STOP_REASON` have machine-readable definitions. Output schemas enforce them. Do not expose hidden reasoning; store concise rationale, evidence, checks and decisions sufficient for audit.

## Observability model

One trace connects user action → API command → durable workflow → cognitive run → retrieval → model/tool calls → proposal → approval → committed versions. Use OpenTelemetry semantic conventions where stable and pin the GenAI convention version; the current registry warns prompt/messages may contain sensitive data ([OpenTelemetry](https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/)). Content capture defaults off. Store hashes, IDs, counts, classifications and policy decisions; gated debug capture is time-bound, encrypted and audited.

Required signals:

- Product: stakeholder time, question yield, corrections, coverage, conflicts, approval cycle, rework and outcome value.
- Intelligence: task success, citation quality, calibration, tool error, loop depth, repair/escalation, model drift.
- Retrieval: candidates, ranker scores, filters, temporal/ACL validity and gold recall.
- Platform: latency, saturation, queue age, retries, workflow stalls, database/object health.
- Economics: cost per validated decision/artefact, tokens by capability, cache value, human review effort.

SLOs use burn-rate alerts. Agent “success” telemetry never substitutes for outcome evaluation.

## Threat model

| Threat | Primary controls |
|---|---|
| Cross-tenant disclosure | RLS/partition keys, ACL-before-retrieval, tenant-scoped encryption, isolation tests |
| Prompt injection in sources | trust segmentation, instruction/data separation, tool policy, content sanitisation |
| Excessive agency | deny-by-default tools, preview/approval, scoped tokens, budgets, kill switch |
| Tool poisoning/MCP confusion | signed registry, version pinning, schema verification, origin display, sandbox |
| Data exfiltration | egress allowlist, DLP/redaction, provider contracts, output scanning |
| Memory poisoning | candidate quarantine, evidence/authority checks, conflict detection, rollback |
| Supply-chain compromise | SBOM, signatures, provenance, dependency scanning, isolated builds |
| Prototype code execution | ephemeral sandbox, no secrets, network deny, resource/time limits |
| Model/provider failure | gateway, circuit breaker, fallback policy, graceful human workflow |
| Insider misuse | least privilege, separation of duties, immutable audit, anomaly detection |
| Repository instruction/scope injection | instruction hierarchy, untrusted-content boundary, exact path/base policy and tool validation |
| Generated patch corruption | dirty-state preservation, exact-base apply, semantic/code diff, tests, rollback and human review |
| Preview/build exfiltration | ephemeral sandbox, no ambient credentials/network, CSP/origin isolation, secret/dependency scan |
| False validation evidence | signed tool receipts, pinned environment, raw result integrity and independent critical review |

Use STRIDE per boundary plus misuse/abuse cases for AI. Map controls to NIST AI RMF Govern/Map/Measure/Manage and the Generative AI Profile ([NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)). Threat modelling and privacy impact assessment are release artefacts, not end-stage reviews.

## Identity and authorisation

Workforce federation plus tenant-managed external identities; short sessions; phishing-resistant MFA for privileged roles; workload identity rather than stored credentials. Combine RBAC roles with ABAC attributes (tenant, engagement, purpose, classification, source ACL, jurisdiction, action risk) and relationship checks (participant/owner/approver). PostgreSQL RLS is defence in depth, not the sole policy engine.

MCP and connectors use per-user or delegated scopes, short-lived tokens, explicit server/tool identity, capability manifests and consent. A model never sees reusable credentials. See the [MCP authorisation specification](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization).

## Release gates

No release with critical tenant-isolation failure, unauthorised side effect, ungrounded material claim above threshold, expired model/prompt evaluation, restore failure, high-risk accessibility defect, unresolved critical threat, or missing rollback. Canary and shadow runs compare quality/cost/latency; automated rollback uses technical regressions, while semantic regressions require human review.
