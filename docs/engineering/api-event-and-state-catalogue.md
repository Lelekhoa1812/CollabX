# API, event, and state catalogue

Status: normative · Baseline: `design-v2` · Effective: 2026-08-11 · Owner: engineering council

## API style

REST resources for commands/queries, SSE for durable output streams, WebSocket only for bidirectional live sessions. Pagination is cursor-based with stable ordering. Mutation requests require `Idempotency-Key` and `If-Match`/expected version. Responses include `ETag`, correlation and canonical IDs. Errors use RFC 9457-style Problem Details with stable `type`, `code`, `retryable`, field violations and safe metadata.

## Initial resource surface

| Resource | Representative operations |
|---|---|
| `/tenants` | provision, policy/tier/residency read/update, export/delete request |
| `/engagements` | create/read/search, transition, charter/gate/readiness, baseline/change |
| `/stakeholders` | register, authority/role/consent/preferences, coverage |
| `/sources` | upload session, complete, classify, versions, spans, retention/delete |
| `/knowledge-items` | propose/version/review/confirm/reject, relations, conflicts, impact |
| `/sessions` | plan/start/signal/stream/pause/resume/close/playback |
| `/surveys` | draft/publish/campaign/respond/close/analyse |
| `/requirements` | create/verify/validate/prioritise/trace/change |
| `/prototypes` | create/version/render/compare/events/findings |
| `/decisions` | propose/options/decide/revisit |
| `/reviews` | queue/comment/disposition/approve/waive |
| `/agent-runs` | start/status/stream/cancel/trace/replay-safe-inspection |
| `/domain-packs` | branch/propose/test/review/release/rollback |
| `/connections` | authorise/scope/test/sync/revoke/reconcile |
| `/evaluations` | dataset/experiment/run/result/release-evidence |

Never expose generic CRUD for authority-sensitive transitions. `POST /requirements/{id}:approve` is a command with policy/invariants; a generic patch to `status` is forbidden.

## Event envelope

| Field | Meaning |
|---|---|
| `event_id` | globally unique immutable ID |
| `event_type` | namespace.past_tense version-neutral semantic name |
| `schema_version` | payload contract version |
| `tenant_id`, `cell_id` | isolation/routing context |
| `aggregate_type/id/version` | ordering and optimistic concurrency |
| `occurred_at`, `recorded_at` | business and system time |
| `actor` | human/service/agent identity and delegated authority ref |
| `correlation_id`, `causation_id`, `traceparent` | chain |
| `classification`, `purpose` | handling policy |
| `payload` | minimal fact; large/sensitive content referenced by authorised ID |

## Domain event catalogue

| Domain | Events |
|---|---|
| tenancy | `tenant.provisioned`, `membership.changed`, `residency.changed`, `tenant.offboarding_started` |
| engagement | `engagement.framed`, `stage.changed`, `gate.evaluated`, `baseline.published`, `change.authorised` |
| evidence | `source.received`, `source.quarantined`, `source.promoted`, `span.anchored`, `deletion.verified` |
| knowledge | `assertion.proposed`, `item.confirmed`, `conflict.detected`, `conflict.resolved`, `domain_pack.released` |
| collaboration | `session.started`, `utterance.corrected`, `question.answered`, `recap.confirmed`, `survey.completed` |
| analysis | `requirement.verified`, `decision.made`, `risk.escalated`, `option.selected` |
| prototype | `prototype.versioned`, `scenario.observed`, `finding.confirmed` |
| intelligence | `run.started`, `tool.denied`, `run.interrupted`, `proposal.produced`, `run.terminated` |
| integration | `connection.authorised`, `sync.checkpointed`, `mapping.failed`, `connection.revoked` |
| evaluation | `experiment.completed`, `regression.detected`, `release.approved`, `release.rolled_back` |

Consumers must be idempotent and tolerate unknown additive fields. Event names do not include implementation (“postgres_row_created”) or commands (“create_requirement”). Corrections append compensating/new facts.

## Critical state machines

| Aggregate | States |
|---|---|
| Source | requested → uploading → quarantined → processing → review_required/ready → superseded → retention_hold/deletion_pending → deleted |
| Knowledge item | proposed → in_review → confirmed/contested/rejected → published → superseded/withdrawn |
| Conflict | detected → triaged → evidence_requested/decision_required → resolved/accepted_divergence → reopened |
| Agent run | queued → planning → executing ↔ waiting_tool → validating → waiting_human/repairing → succeeded/failed/cancelled/budget_exhausted/policy_denied |
| Review | open → assigned → changes_requested/conditionally_approved/approved/rejected/expired |
| Baseline | preparing → gate_failed/ready → approving → published → superseded/revoked |
| Connection | draft → authorising → active/degraded → revoked/expired/error → deleted |
| Deletion job | requested → legal_policy_check → approved/denied → executing → verifying → certified/partial_failure |

Every terminal/transition definition is maintained as a shared enum/schema, not duplicated strings.

## Consistency contracts

- Synchronous consistency inside one aggregate transaction.
- Cross-context propagation is eventual and exposes projection version/staleness.
- Baseline publication uses a manifest of exact item versions, not a distributed lock across contexts.
- Search/read models expose `indexed_through_event` or source versions.
- Approval checks exact content hash/version; any mutation invalidates pending approval.
- External sync stores source remote ID/version and mapping version; three-way reconciliation avoids blind overwrite.

## Compatibility verification

Schema CI validates meta-schema, examples and breaking diffs; producer tests old/new consumers; consumer-driven contracts verify API adapters; event replay from representative historical fixtures proves upcasters; database migration tests upgrade a production-shaped snapshot; prompt/tool output schemas are fuzzed with invalid/extra/large/Unicode payloads.
