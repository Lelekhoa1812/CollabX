# Non-functional requirements and service objectives

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: product and reliability councils

Targets below are initial product contracts to validate under production-shaped load. Tenant agreements may select stricter tiers. Percentiles use rolling windows and exclude only documented planned maintenance.

## Measurement contract

Every reported SLI, evaluation or business metric defines numerator, denominator, unit, direction, aggregation, population/slice, time window, exclusions, missing-data treatment, source/lineage, owner and alert/decision threshold. Percentiles report sample size and tail segmentation; probabilistic quality reports uncertainty and critical-failure counts. A dashboard without this dictionary is not release evidence. Experimental milestone thresholds refine a named study; they do not silently change production SLOs.

## Availability and durability

| ID | Requirement | Verification |
|---|---|---|
| AVL-01 | Class-A reads/autosave monthly availability ≥99.95%; orchestration ≥99.9% | synthetic probes and SLI audit |
| AVL-02 | No acknowledged command, answer, approval or decision is lost | crash/replay and reconciliation suite |
| AVL-03 | Single AZ loss has no manual recovery requirement | zonal game day |
| AVL-04 | Standard tier RPO ≤24 h/RTO ≤8 h; critical target RPO ≤5 min/RTO ≤60 min | timed restore/regional game day |
| AVL-05 | Model/search/prototype outage leaves evidence read, editing and human workflow available | dependency chaos test |

## Performance and responsiveness

| ID | Requirement | Initial target |
|---|---|---|
| PERF-01 | static shell LCP p75 | <2.5 s on defined mid-tier/mobile network profile |
| PERF-02 | non-AI API read/write p95 | <300/<500 ms within home Region |
| PERF-03 | autosave acknowledgement p95 | <500 ms; visible unsaved state immediately |
| PERF-04 | search p95 | <1.5 s for pilot corpus with full ACL/time filters |
| PERF-05 | conversational first streamed token p95 | <3 s when provider healthy; progress within 500 ms |
| PERF-06 | canvas interaction | ≥50 fps typical; virtualise large graphs/tables |
| PERF-07 | long operations | async acknowledgement <1 s with resumable progress/cancel |
| PERF-08 | field web responsiveness/stability | INP p75 ≤200 ms and CLS p75 ≤0.1, segmented mobile/desktop; current Core Web Vitals lifecycle revalidated quarterly |

Measure separately by cell, tenant tier, capability, device/network, payload and provider. Never hide tail latency in averages.

## Scale and fairness

- Horizontal stateless compute; no sticky session required beyond explicitly resumable stream IDs.
- Validate 10× forecast tenant/user/document/session/run workload and 2× burst before pilot launch.
- Per-tenant rate, concurrency, queue, model-token, storage and export limits; weighted fair scheduling.
- One tenant at quota cannot push another tenant beyond its SLO or access its cache/index results.
- Backlogs have maximum age and admission control; overload sheds batch/low-priority work before interactive/autosave.
- Capacity model includes Bedrock quotas, Aurora connections/I/O/storage, S3/Textract, queue, NAT/endpoint and telemetry cardinality.

## Security and privacy

- TLS 1.2 minimum/1.3 preferred; managed encryption at rest; no plaintext credentials or public data stores.
- Zero cross-tenant access in exhaustive isolation suite; deny on missing/malformed tenant or purpose context.
- Phishing-resistant MFA/step-up for privileged and consequential actions.
- Critical/high exploitable vulnerabilities block release; patch SLAs are risk-ranked and measured.
- User/source/model content absent from logs/metrics/traces by default; telemetry field allowlist.
- Data purpose, consent, residency, retention, subject rights and derived deletion are enforceable and audited.
- Security incidents have detection, containment, notification and evidence objectives set by incident class.

## AI quality and safety

- 100% of material factual claims either resolve to authorised evidence spans or display `UNSUPPORTED`.
- Structured outputs validate schema and semantic invariants before any use.
- Zero model-originated external write without the action-class policy and required approval.
- Critical contradiction recall, temporal correctness, elicitation and requirement thresholds follow the evaluation contract; no aggregate score masks a critical slice.
- Users can inspect source, uncertainty, agent/tool/version and correct/reject every proposal.
- Model, prompt, retrieval, tool, guardrail and domain-pack changes are independently versioned and rollback-capable.
- Every real-model result identifies provider profile, deployment alias, API/model version when returned, capability manifest, dataset, run count, token/cost/latency and grader versions; missing attribution invalidates the result.
- Required real-model suites fail closed if the declared deployment is unavailable; fallback may be evaluated only as its own qualified route.

## Service operations and lifecycle

- Each production tier publishes support hours, incident severity, response/communication targets, maintenance, dependency exclusions and customer responsibilities.
- Production SEV-1 detection/triage is staffed for the service tier; every page has owner, current runbook and customer/regulatory assessment path.
- Automated identity deprovisioning targets ≤15 minutes from an authoritative SCIM/administrator event; privileged revocation is verified end to end.
- Tenant provisioning/offboarding, canonical export/import, legal hold, rights and derived deletion have measured completion/error backlogs and reconciliation.
- Usage attribution is idempotent and tenant-correct; production billing reconciliation variance target is ≤1% by billable unit and period.
- Critical operational/control evidence has owner and expiry; expired evidence blocks promotion of the affected capability.

## Accessibility and inclusive UX

- WCAG 2.2 AA for all production journeys; target AAA where feasible for comprehension/contrast.
- Full keyboard access, visible focus, semantic landmarks, screen-reader names/states, 400% zoom/reflow and reduced motion.
- Captions/transcript correction and non-audio alternative; no timing-only or drag-only task.
- Plain language, locale/timezone/calendar/number support, translation trace to canonical concepts.
- Automated checks on every PR, manual assistive-technology tests each release and affected-user studies before pilot.

## Frontend experience quality

- Role-critical journeys, page catalogue and quality targets follow the [enterprise frontend specification](../experience/enterprise-frontend-experience.md); no page ships without all applicable loading/empty/stale/denied/error/offline/recovery states.
- Local interaction feedback occurs within 100 ms; frontend work avoids >50 ms main-thread tasks at p75 on the declared target device unless chunked/yielded with evidence.
- 100% critical journeys have browser E2E, keyboard and manual assistive-technology evidence; visual snapshots cover supported viewport, theme, locale and representative data state.
- Generated L4/L5 frontends meet host PERF, security, privacy, accessibility, architectural and bundle budgets; a sandbox prototype receives no production-readiness inference.
- Client analytics have event schema, purpose, consent/notice where required, field allowlist and denominator; no session replay on sensitive fields.

## Reliability and correctness

- Idempotency for all mutations, activities, webhooks and external effects within documented retention window.
- Optimistic concurrency prevents lost semantic edits; conflicts are user-visible and mergeable.
- Events are at-least-once; consumers deduplicate and reconcile; DLQs have owner/SLO/runbook.
- Bitemporal as-of queries reproduce the exact source/knowledge/baseline used for any decision.
- Recovery/rollback paths are tested at least quarterly and before material architecture changes.

## Maintainability and portability

- Domain/application dependency rules enforced automatically; cloud/agent framework types remain in adapters.
- Public/internal contracts generated from one schema source; breaking-change detection blocks unplanned drift.
- New capability includes runbook, dashboards, tests, migration, feature flag and removal/rollback plan.
- Restore/export canonical tenant knowledge in documented non-proprietary JSON/CSV/standard artefacts without model/framework dependency.
- Supported runtime/dependency versions, ownership and end-of-life dates are inventoried; critical upgrade lead time is budgeted.

## Observability and audit

- Every accepted user command correlates through workflow, retrieval/model/tool and committed state.
- Audit facts are immutable, queryable by tenant/actor/action/resource/time and exportable under policy.
- SLOs have objective SLIs, error budgets and multi-window burn alerts; alerts name owner/runbook.
- Metrics/tags avoid unbounded tenant/content cardinality in shared telemetry; per-tenant analytics use governed data pipelines.

## Sustainability and cost

Budgets are set for cost per validated decision, session, indexed page, artefact and tenant; anomalous cost stops/queues runaway agents. Token and compute reduction may not reduce evidence coverage, isolation or required evaluation. Measure embodied/operational considerations through AWS customer carbon tooling where available, but do not claim carbon improvement without methodology.
