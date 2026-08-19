# API, event, and state catalogue

Status: normative · Baseline: `design-v4` · Effective: 2026-08-19 · Owner: engineering council

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
| `/experience-projects` | brief/intent/journey/IA/fidelity/workspace/readiness |
| `/mock-data-packs` | schema/seed/scenarios/validate/version/publish |
| `/change-sets` | propose/diff/rebase/approve/apply/revert/evidence |
| `/build-runs` | start/status/stream/cancel/tools/validation/artefacts |
| `/code-indexes` | bind repo/export, reindex, status, freshness, ACL diagnostics |
| `/code-graphs` | snapshot read/query, symbol/impact traversal, diff graphs |
| `/archaeology-runs` | start/status/stream/cancel, claim proposals, citations |
| `/review-runs` | start/status/stream, findings, AC coverage map, CI status publish |
| `/ac-coverage` | query mapped/missing ACs for change set or PR |
| `/decisions` | propose/options/decide/revisit |
| `/reviews` | queue/comment/disposition/approve/waive |
| `/agent-runs` | start/status/stream/cancel/trace/replay-safe-inspection |
| `/domain-packs` | branch/propose/test/review/release/rollback |
| `/connections` | authorise/scope/test/sync/revoke/reconcile |
| `/evaluations` | dataset/experiment/run/result/release-evidence |
| `/service-tiers` | catalogue, SLO/support/residency/model/limits and change publication |
| `/support-cases` | create/triage/escalate/communicate/resolve/problem-link |
| `/usage-records` | query/reconcile/dispute/export; immutable ingestion is internal only |
| `/rights-requests` | access/correct/restrict/delete/hold/export/verify |
| `/offboarding-jobs` | suspend/export/revoke/retain/delete/certify |

Never expose generic CRUD for authority-sensitive transitions. `POST /requirements/{id}:approve` is a command with policy/invariants; a generic patch to `status` is forbidden. Do **not** add `/method-runs` or `/sufficiency`. Method execution is a tagged `/agent-runs`. Sufficiency travels on `gate.evaluated`.

### `/decisions` command bodies

| Command | Required fields |
|---|---|
| `propose` | `frame`, `owner`, `expiry_or_revisit`, `gate_id` |
| `options` | `method` enum, item-version refs, `sensitivity[]`, `dissent[]`, `unassessed[]`, `assumptions_open[]` |
| `decide` | named `authority`, exact item versions, per-item `disposition` (`approve` \| `reject` \| `ask_evidence` \| `leave_out` \| `accept_divergence` \| `split_scope`) |
| `revisit` | `decision_id`, trigger (`expiry` \| `new_evidence` \| `conflict_reopened`) |

`recommendation` from a method run never writes Approval. Item sign-off stays on `/reviews`; strategic choice stays on `/decisions`; conflict disposition may link both.

### `/agent-runs` engine tag

`engine`: `mcda_lite` \| `wsjf` \| `moscow` \| `assumption_map` \| `even_swaps` \| `ahp` \| `bwm` \| `catwoe_assist` \| `challenge`. Input includes `decision_id`, `gate_id`, `option_item_ids[]`, `criterion_item_ids[]`, `judge_set`, `evidence_manifest_id`. Output includes `ranking[]` or `labels[]`, `sensitivity[]`, `dissent[]`, `unassessed[]`, `assumptions_open[]`, `stop_reason`, `recommendation` (`none` \| `prefer` \| `split_scope`).

### `gate.evaluated` payload

`{confidence, coverage, consistency, decision_readiness, approval, blockers[], warnings[], waivers[]}`. Five dimensions; never a Fusion Score.

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
| knowledge | `assertion.proposed`, `item.confirmed`, `conflict.detected`, `conflict.resolved`, `conflict.reopened`, `domain_pack.released` |
| collaboration | `session.started`, `utterance.corrected`, `question.answered`, `recap.confirmed`, `survey.completed` |
| analysis | `requirement.verified`, `decision.made`, `decision.revisited`, `risk.escalated`, `option.selected` |
| prototype | `prototype.versioned`, `scenario.observed`, `finding.confirmed` |
| experience build | `intent.updated`, `question.answered`, `mock_data.versioned`, `change_set.proposed`, `patch.applied`, `validation.failed`, `build.completed` |
| coding intelligence | `code_index.refreshed`, `code_index.stale`, `archaeology.completed`, `review.completed`, `ac_coverage.updated`, `finding.waived`, `transport.previewed` |
| intelligence | `run.started`, `tool.denied`, `run.interrupted`, `proposal.produced`, `run.terminated` |
| integration | `connection.authorised`, `sync.checkpointed`, `mapping.failed`, `connection.revoked` |
| evaluation | `experiment.completed`, `regression.detected`, `release.approved`, `release.rolled_back` |
| service | `case.opened`, `incident.declared`, `status.published`, `problem.created`, `change.authorised` |
| commercial | `entitlement.changed`, `quota.reached`, `usage.recorded`, `usage.reconciled`, `billing_dispute.opened` |
| privacy/records | `rights_request.received`, `legal_hold.changed`, `export.completed`, `offboarding.certified` |

Consumers must be idempotent and tolerate unknown additive fields. Event names do not include implementation (“postgres_row_created”) or commands (“create_requirement”). Corrections append compensating/new facts.

## Critical state machines

| Aggregate | States |
|---|---|
| Source | requested → uploading → quarantined → processing → review_required/ready → superseded → retention_hold/deletion_pending → deleted |
| Knowledge item | proposed → in_review → confirmed/contested/rejected → published → superseded/withdrawn |
| Conflict | detected → triaged → under_deliberation / evidence_requested / decision_required / dissent_recorded / deferred / scope_split_pending → resolved / accepted_divergence → reopened |
| Agent run | queued → planning → executing ↔ waiting_tool → validating → waiting_human/repairing → succeeded/failed/cancelled/budget_exhausted/policy_denied |
| Review | open → assigned → changes_requested/conditionally_approved/approved/rejected/expired |
| Baseline | preparing → gate_failed/ready → approving → published → superseded/revoked |
| Connection | draft → authorising → active/degraded → revoked/expired/error → deleted |
| Deletion job | requested → legal_policy_check → approved/denied → executing → verifying → certified/partial_failure |
| Support case | new → triaged → investigating/waiting_customer/waiting_supplier → resolved → closed/reopened |
| Incident | detected → declared → contained → recovering → monitoring → resolved → review_open → closed |
| Rights request | received → identity_scope_check → approved/denied/clarification → executing → quality_review → fulfilled/partially_fulfilled |
| Offboarding | requested → suspension_planned → export_ready → access_revoked → retention_hold_applied → deletion_verifying → certified/exception |
| Experience project | framing → clarifying → journey_ready → prototyping → validating → baseline_ready → repository_ready/research_only/closed |
| Change set | drafting → proposed → conflict/validating → failed/ready_for_review → approved/rejected → applied → reverted/superseded |
| Build run | queued → inspecting → clarifying/planning → patching → validating → critic_review → repairing/waiting_human → succeeded/failed/cancelled/budget_exhausted/policy_denied |
| Code index | bound → indexing → ready/degraded → stale → failed/revoked |
| Archaeology run | queued → inspecting → extracting → validating → waiting_human → succeeded/failed/cancelled/policy_denied |
| Review run | queued → loading_context → analysing → validating → publishing → succeeded/failed/cancelled/index_stale |
| AC coverage | computing → complete/partial → blocked (critical gaps) → waived (named waiver) |

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
