# Milestone 5 — Guarded pilot, production readiness and controlled scale

Status: delivery control · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: service and product councils · Maps to: R4–R5 / remaining T9, T10–T11

## Outcome and staged decisions

Demonstrate measurable value and acceptable harm/cost in 2–3 governed pilots, then separately decide production and scale readiness. The stages are `pilot-ready → pilot-evaluated → production-ready → scale-qualified`; passing one never implies the next. Each capability, tenant tier, Region, connector, language/domain and autonomy action class is approved independently.

Read: [roadmap R4–R5](../delivery/roadmap.md), [enterprise readiness](../governance/enterprise-readiness-model.md), [integration architecture](../architecture/integration-and-interoperability.md), [coding intelligence](../intelligence/coding-intelligence-and-review-agent.md), [process intelligence](../product/process-intelligence-posture.md), [AWS operations](../architecture/aws-security-resilience-operations.md), [verification](../engineering/verification-strategy.md), [controls](../governance/enterprise-control-framework.md), [risk register](../governance/risk-register.md), and T9–T11 in the [build sequence](../delivery/build-sequence-and-dependency-graph.md).

## Entry and non-negotiable controls

- Entry: signed M4 pilot release; customer/pilot charter; DPA/security/AI/privacy review; named sponsor/data/model-risk/service owners; rollback and exit agreement.
- Pilot use stays within approved people, data, Region, provider, connectors and decisions. Consequential/prohibited classes remain disabled.
- Customer content is not reused for training/evaluation without a separate explicit purpose and governance.
- A critical privacy/security/authority/harm/baseline-integrity issue suspends the affected capability immediately.
- Supervision: Service owner + release authority; staged decisions (pilot ≠ production ≠ scale).

## Existing work-package coverage

| Milestone task | Existing work packages |
|---|---|
| M5.01 | T10.05 pilot governance |
| M5.02 | T9.05–T9.11 |
| M5.03 | T10.01 and T11.07 certification controls |
| M5.04 | T10.02–T10.04 |
| M5.05 | T10.05–T10.06 |
| M5.06 | T10.06 and T11.10 operational assurance |
| M5.07 | T11.06 plus foundation lifecycle controls |
| M5.08 | T10.08, T11.09 |
| M5.09 | T10.07, T10.11, T11.10 |
| M5.10 | T10.08, T11.09 |
| M5.11 | T10.09, T11.03 |
| M5.12 | T10.05 pilot execution |
| M5.13 | T9.11–T9.12, T10.10 |
| M5.14 | T10.11–T10.12 |
| M5.15 | T11.01–T11.03, T11.06 |
| M5.16 | T11.04–T11.05, T11.07 |
| M5.17 | T11.08 |
| M5.18 | T10.13 |
| M5.19 | T10.14 |
| M5.20 | T11.13 |
| M5.21 | T11.09–T11.12 and final scale decision |

All remaining T9.05–T11.13 packages are covered; overlaps are deliberate where qualification consumes implementation evidence.

## Work plan

### M5.01 — Select and contract governed pilots

1. Select 2–3 engagements across distinct risk/domain shapes with measurable baseline and willing affected participants.
2. Classify use case/action/data/Region/provider and exclude prohibited decisions.
3. Agree outcomes, leading/lagging metrics, comparison, data purpose/retention, human authority, burden/harm and stop/exit terms.
4. Complete security/privacy/AI due diligence, responsibility matrix, support contacts and incident notification path.

Accept: every pilot has G0 charter, baseline measures, named authorities, approved processing and signed stop/exit criteria; no critical unknown is deferred to “after launch”.

### M5.02 — Complete change, delivery and outcome bridge

1. Implement prioritisation/release slicing, RAID, actions, decisions and dependencies linked to baseline.
2. Route developer questions and answers through evidence/authority with response targets.
3. Record implementation interpretations/deviations, semantic impact and rebaseline decision.
4. Ingest test/release evidence and instrument solution/outcome baselines before release.

Accept: ≥95% critical outcome→requirement→scenario/design→work→test trace coverage; 100% material deviation has disposition; no stale approval survives changed content.

### M5.03 — Build and certify connector SDK/control plane

1. Implement connection identity/scope/purpose/secret/cursor/mapping/health/revocation and receipts.
2. Build webhook/polling inbox, dedupe, quarantine, retry/DLQ and reconciliation.
3. Build outbound preview/version check/approval/idempotent execute/read-back flow.
4. Run certification fixtures for auth negative, replay, pagination, quota, schema drift, deletion, conflict, adversarial content and uninstall.

Accept: zero over-scoped call/cross-tenant access/unauthorised write; 100% seeded drift detected; revocation blocks new calls within declared target; partial effects reconcile.

### M5.04 — Implement only pilot-required connectors

1. Prioritise document, work-management and communication integrations required by signed pilots.
2. Use least-privilege/read-only first; map remote ownership/version/ACL/deletion precisely.
3. Validate provider sandbox, rate/quota, outage, token rotation/revocation and accessibility of consent/error UX.
4. Obtain connector owner and customer approval for each write action class.

Accept: connector-specific certification passes and portability/export path exists; unneeded catalogue integrations are not built for appearance.

### M5.05 — Operationalise tenant onboarding and customer success

1. Provision tenant home cell/tier/identity/policies/keys/models/quotas/connectors from approved configuration.
2. Run isolation/federation/log/budget/backup acceptance before import.
3. Train admins/stewards/BAs/approvers/support contacts and validate task competency.
4. Establish adoption/value/access/spend/risk review cadence and feedback routing.

Accept: time-to-ready and failure/rework are measured; 100% privileged users pass competency/acceptable-use checks; customer signs tenant acceptance.

### M5.06 — Establish service desk, SRE and customer communications

1. Publish service catalogue, severity, support hours, response/escalation, maintenance and status commitments.
2. Staff on-call/service desk and connect actionable alerts to owner/runbook.
3. Exercise SEV-1 security/AI and SEV-2 availability incidents including customer/regulatory assessment.
4. Run post-incident/problem/change workflows and verify action tracking.

Accept: detection/declaration/containment/communication targets are met in exercises; 100% pages actionable; no single undocumented person is required for recovery.

### M5.07 — Prove privacy rights, records and offboarding in pilot context

1. Reconcile field-level data map, purpose, processors, Region, retention and rights applicability.
2. Exercise access/export, correction, restriction/deletion and legal hold with mixed participant confidentiality.
3. Test eDiscovery/audit export without exposing unauthorised content.
4. Run complete tenant suspension/offboarding, canonical return, revocation, deletion/hold and certificate.

Accept: response workflow meets applicable contractual/legal target; 100% eligible derivatives accounted; canonical export independently readable; exceptions name basis/expiry.

### M5.08 — Validate metering, entitlement and unit economics

1. Record immutable usage for model, retrieval, storage, rendering, connectors, support and evaluation.
2. Separate customer work, retry/failure, internal evaluation and support replay.
3. Reconcile usage to provider invoice and customer report; test quota, overage, plan change, suspension and dispute.
4. Calculate gross margin and cost per validated decision, stakeholder-hour saved, indexed page and engagement.

Accept: usage reconciliation variance ≤1%; zero cross-tenant attribution; runaway budgets stop/queue; economic decision includes stewardship/support/assurance cost.

### M5.09 — Execute production security, privacy and AI assurance

1. Update threat model/DPIA/AI risk/system card for exact release, provider, connector and data flows.
2. Run SAST/SCA/IaC/container/API/DAST, tenant isolation, adversarial AI, social/insider and red-team scenarios.
3. Commission independent penetration/accessibility reviews; remediate and retest.
4. Assemble scoped control mapping/customer assurance pack without certification overclaim.

Accept: zero unresolved critical/high exploitable or critical AI/privacy/accessibility issue; medium residuals have owner/expiry; independent retest confirms closure.

### M5.10 — Prove performance, fairness, capacity and graceful degradation

1. Load realistic concurrent sessions, streams, autosaves, ingestion, filtered retrieval, agent fan-out, exports and webhook storms.
2. Test forecast, 2× burst and 10× scale; allocate provider/DB/queue/telemetry quotas through IaC.
3. Saturate one tenant/provider and verify fair scheduling/admission/backpressure.
4. Measure p50/p95/p99, error budgets, queue age, cost and user-visible degradation.

Accept: all applicable NFRs pass; one tenant at limit does not breach another’s SLO; overload preserves acknowledged work and class-A human paths.

### M5.11 — Prove backup, AZ/Region and business continuity

1. Restore application-consistent tenant state and compare canonical hashes/approved baseline.
2. Run AZ loss, database/queue/IdP/model/connector outage and bad release rollback.
3. Run approved regional loss strategy with residency/failover authority; measure RPO/RTO.
4. Exercise staff/support unavailability and provider exit/manual continuity path.

Accept: AVL targets met with timestamped evidence; zero approved-decision loss/duplicate external effect; prohibited cross-Region movement never occurs; customer communication works.

### M5.12 — Run shadow, canary and real pilot

1. Shadow candidate on policy-permitted inputs with no effects; compare approved baseline route.
2. Canary by tenant/cohort/capability with technical auto-rollback and semantic human review.
3. Operate pilots through framing, discovery, validation, baseline, delivery feedback and initial outcome observation.
4. Capture corrections, rejects, escalations, incidents, burden, support, cost and unintended effects; preserve dissent.

Accept: canary stays within SLO/safety/cost guardrails; zero critical incident; pilot has complete denominator and missing-data report. Failure triggers rollback/suspension, not metric redefinition.

### M5.13 — Evaluate pilot value and harm independently

1. Compare to pre-pilot/credible comparator on validated coverage, requirement defects, rework, cycle time, stakeholder hours and outcome leading indicators.
2. Measure trust calibration, control, inclusion, adoption, abandonment, stewardship/review/support burden and harms.
3. Segment by pilot/risk/role/power/language/accessibility and inspect worst cases.
4. Conduct 30/90-day outcome review where timing permits; separate product, enterprise/adoption and solution limitations.

Accept: equal-or-better quality plus ≥30% stakeholder-efficiency improvement or another preregistered economic value; no critical safety/privacy harm; acceptable total cost. Report confidence/limitations—directional pilots do not prove universal causality.

### M5.14 — Hold pilot and production go/no-go separately

1. Independent BA/research, security/privacy/model-risk, SRE, accessibility and business authorities inspect evidence.
2. Decide each capability/domain/connector/provider/action class `production`, `constrain`, `rework`, `retire` or `research only`.
3. Complete all applicable ER-01–ER-16 statuses; require independent evidence for critical dimensions.
4. Publish customer-facing system card, known limitations, subprocessors/model providers, accessibility status and material-change process.

Accept production only with operating service, signed residual risk, rollback/kill switch and no enterprise release blocker. Pilot success alone is insufficient.

### M5.15 — Add regional/tenant-tier scale only after production evidence

1. Re-run Region service/model/language/quota/compliance/residency checklist for a second cell.
2. Qualify bridge/silo tier, customer keys/audit export and warm-standby topology from explicit demand.
3. Test cross-cell routing metadata, data immobility, deployment parity, support and DR.
4. Re-run security, load, real-model, accessibility and customer lifecycle gates per new profile.

Accept: new cell/tier independently meets its contract; no global plane contains restricted tenant content; unit economics and operational staffing remain sustainable.

### M5.16 — Qualify domain transfer, multilingual and optional projections

1. Test domain packs on held-out organisations and time periods for transfer benefit/leakage/staleness.
2. Test translation/canonical-term mapping, locale UX, transcription and evaluation rubrics with qualified reviewers.
3. Benchmark PostgreSQL against search/graph extraction using measured access patterns.
4. Approve only variants with material benefit and maintained isolation/portability/TCO.

Accept: no critical slice regression or cross-organisation leakage; locale/domain limitations published; optional service has accepted ADR and rebuild/exit path.

### M5.17 — Qualify progressive autonomy per action class

1. Inventory action/resource/side effect/reversibility/data/risk and current approval.
2. Start draft-only, then shadow, preview/approve and only then eligible low-risk bounded automation.
3. Test stale approval, changed diff/target/scope/token, replay, partial failure, cancellation and kill switch.
4. Canary with explicit tenant opt-in, limits, anomaly monitoring and rapid rollback.

Accept: zero unauthorised/duplicate effect; approval invalidates on any material change; class C remains human-authorised and class D prohibited absent new executive/legal mandate.

### M5.18 — Prove production frontend experience operations

1. Instrument page/journey success, latency, errors, abandonment, correction, evidence inspection, status comprehension and support need using governed event schemas and defined denominators.
2. Run RUM/lab performance, visual/responsive/locale, browser compatibility, accessibility and client-security monitoring with content-off telemetry and actionable ownership.
3. Observe executive, participant, BA, engineer, approver and administrator journeys through pilot; analyse worst role/device/language/accessibility slices and shadow-workarounds.
4. Exercise degraded model/search/connector/IdP/network states, stale sessions, multi-tab/offline drafts and frontend rollback while preserving human work.

Accept: dual-portal targets in the frontend specification hold over the pilot observation window; zero critical/high accessibility/security/privacy/status defect; ≥95% recoverable errors resolve without support; no acknowledged input loss; frontend rollback meets objective.

### M5.19 — Pilot client prototype and repository coding-agent capability

1. Select at least two bounded client journeys with approved repositories/design systems **and/or ERP/CRM read adapters**, synthetic/non-sensitive test data, baseline delivery effort and explicit patch/side-effect authority.
2. Run progressive clarification through mock/prototype validation before repository patch; preserve human alternatives, rationale, dissent, tests and exact trace; run **AC-gated review** before human accept.
3. Have client designer/engineer/security/accessibility reviewers compare change quality, review time, correction yield and regressions against their normal workflow.
4. Rehearse rejection, stale base, unrelated dirty change, test failure, revert, model/provider failure and complete repository/artefact export/exit.

Accept: equal-or-better task/visual/code quality with materially lower validated-cycle time or higher correction yield; zero unrelated-change loss, scope escape, secret/network leak or unauthorised commit/push/PR/deploy/transport; all production repository gates and human reviews pass; critical AC-gaps cannot be ignored without waiver.

### M5.22 — Pilot brownfield connector class and CAB/transport gates

1. Certify at least one brownfield stack required by the pilot (git monorepo polyglot **and/or** ERP/CRM/SAP read adapter; process-mining event-log adapter when logs exist).
2. Implement change-class promotion path for non-git ERP: preview, dual control, freeze-window checks; agents never hold transport authority by default.
3. Rehearse IP redaction, export/exit and adapter revocation.
4. Measure archaeology→BA claim steward burden and AC-gated review override rates in the field.

Accept: conformance suite green; least-privilege proven; zero unauthorised transport; exit/export timed gate met; residual risk accepted by service owner.

### M5.20 — Establish ongoing generation/coding-agent assurance

1. Monitor question relevance/burden, intent/trace coverage, patch precision, component reuse, test/visual/accessibility/security failures, reviewer overrides, **AC-gap dismissals**, cost and topology benefit by domain/framework.
2. Requalify on model/prompt/tool/sandbox/design-system/framework/dependency/context-policy/**index** changes; maintain hidden repositories, hostile fixtures, visual scenarios and **X10/X11/X12** continuous suites.
3. Approve autonomy separately for inspect, transform, patch, validate, package, VCS, deploy and **transport** action classes, with tenant opt-in, budgets and kill switches.
4. Review specialist topology through ablation and retire agents/tools/dependencies that add no material value or increase conflict/risk; Reviewer remains always-on unless explicitly retired with evidence.

Accept: one complete continuous review/requalification cycle passes; stale evidence blocks promotion; zero aggregate score masks a critical patch/security/accessibility/AC-gap failure; VCS/deploy/transport remain human-authorised unless separately approved with canary evidence.

### M5.21 — Establish continuous assurance and scale decision

1. Schedule access, supplier, vulnerability, model/prompt, domain-pack, SLO/error-budget, restore/DR, cost and outcome reviews.
2. Define drift thresholds, evidence expiry, customer notification and requalification triggers.
3. Test provider/model deprecation, connector schema change, key rotation and canonical export/import.
4. Sign `scale`, `hold`, `narrow`, or `retire` per capability/tier/Region and publish evidence manifest.

Accept: at least one complete review cycle operates; stale evidence automatically blocks promotion; no broad “platform approved” statement replaces scoped decisions.

## Pilot, production and scale scorecards

| Dimension | Pilot gate | Production/scale gate |
|---|---|---|
| Quality | equal/better comparator; critical slices pass | sustained canary/pilot plus fresh release eval |
| Efficiency/value | ≥30% stakeholder-time hypothesis or agreed value | measurable outcome and sustainable unit economics |
| Safety/privacy | zero critical issue/action/isolation failure | independent assurance, live monitoring and redress operating |
| Reliability | pilot SLO and no lost acknowledged state | NFR/error-budget history; restore/DR proof |
| Adoption | target roles complete core journeys and training | retained use, acceptable support/burden, customer success loop |
| Cost | capped pilot and cost attribution | ≤1% usage reconciliation variance; viable margin/TCO |
| Portability/exit | export/offboarding rehearsal | timed clean import/export/provider/tenant exit evidence |
| Accessibility | WCAG 2.2 AA and affected-user pilot | independent audit and defect management operating |
| Frontend experience | Dual-portal task/status/source/performance targets in representative pilot | sustained RUM, role/device/locale slice and rollback evidence |
| Generated experience/code | equal-or-better correction/quality with zero patch/effect failure | continuous X10/X11/X12 requalification, client exit and action-class control |
| Brownfield / ERP evidence | pilot connector conformance; zero unauthorised transport | continuous adapter/index assurance and IP controls |

## Runnable validation contract

```bash
task docs:check
task test:all test:e2e-enterprise test:connector-certification
task test:security test:privacy-rights test:accessibility test:billing-reconcile
task test:frontend-production test:visual test:experience-codegen test:patch-integrity
task test:load test:soak test:chaos test:restore test:dr
task eval:preflight --profile staging --redact
task eval:run --suite release,safety,domain,locale,X09,X10,X11,X12,provider-failover --profile staging
task ops:exercise --scenario sev1-ai,sev1-security,sev2-region,provider-exit,transport-deny
task evidence:verify --milestone M5 --stage pilot
task evidence:verify --milestone M5 --stage production
task evidence:verify --milestone M5 --stage scale
```

Production commands execute only in approved accounts with change records and authority. Local `.env` is suitable for `eval-real` research, never implicit production credentials.

## Completion boundary

M5 completes when the scale/hold/narrow/retire decisions and continuous assurance ownership are signed—not when every catalogue integration is built. Pilot-required brownfield connectors are in scope; unneeded catalogue integrations are not built for appearance. Any capability lacking evidence remains disabled or research-only. Known limitations, expired waivers, incidents and null results remain visible in the final system/evidence card.
