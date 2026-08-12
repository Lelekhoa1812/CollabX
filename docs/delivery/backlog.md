# Portfolio epic backlog

Status: delivery control · Baseline: `design-v3` · Effective: 2026-08-12 · Owner: product delivery council · 53 portfolio epics

Each epic expresses a reviewable investment outcome. It is not an implementation task. The `T` references map the epic to one or more of the 173 work packages in the [build sequence](build-sequence-and-dependency-graph.md); detailed stories exist only while an epic is in delivery. The [roadmap](roadmap.md) owns phase entry and exit gates.

Identifier namespaces are deliberately distinct: `R0-nn` is research, `F-nn` foundation, `I-nn` intelligence, and `E-nn` experience/pilot. Experiment identifiers are `X01`–`X12`, including the two-stage `X07-A`/`X07-B`; they are never epic identifiers.

## R0 research epics

| ID | Epic | Key evidence / acceptance | Work-package mapping |
|---|---|---|---|
| R0-01 | Problem and buyer discovery | coded interviews, observed workflows, opportunity/risk map, disconfirming evidence | T0.01–T0.02, T0.12 |
| R0-02 | Senior BA competency rubric | expert-reviewed behavioural anchors across six IIBA knowledge areas | T0.06 |
| R0-03 | Benchmark corpus v0 | three domain shapes, private-role facts, conflicts, temporal changes, gold rationale | T0.07 |
| R0-04 | Elicitation experiment X01 | preregistration, recordings/consent, blinded scores, burden analysis | T0.06, T7.12 |
| R0-05 | Semantic-vs-RAG experiment X02 | identical corpus and models; ambiguity/change/maintenance results | T0.11, T5.12 |
| R0-06 | Agent ablation X03 | single, critic, specialists; quality/latency/cost statistics | T0.10, T6.12 |
| R0-07 | Evidence/frontend UX experiment X04 | trust calibration, status comprehension and correction success vs prose baseline | T0.06, T0.13, T8.12–T8.13, T8.17 |
| R0-08 | Prototype/code-generation experiment X05 | hidden-need yield, anchoring, accessibility, progressive fidelity and patch integrity | T0.06, T0.14, T8.12, T8.15–T8.17 |
| R0-09 | Storage/retrieval experiment X06 | representative ACL/time filters, recall, latency, cost and scale forecast | T0.11, T5.06–T5.07 |
| R0-10 | Architecture/security spikes | X07-A workflow replay, sandbox, bitemporal graph, threat/privacy assessment | T0.08–T0.10 |
| R0-11 | Commercial model | buyer, pricing hypothesis, human stewardship TCO, adoption constraints | T0.01, T0.12 |
| R0-12 | R0 decision review | signed go/narrow/pivot/stop record with evidence links | T0.12 |
| R0-13 | AC-gated review experiment X11 | AC-gap recall/precision, zero silent approve, review rubric κ | T0.16, T6.16, T8.18 |
| R0-14 | Brownfield archaeology experiment X12 | claim precision/recall, citation integrity, steward burden, ERP-like corpus | T0.15, T0.17, T6.15, T8.19 |

## Foundation epics

| ID | Epic | Definition of done | Work-package mapping |
|---|---|---|---|
| F-01 | Identity, tenant, purpose and authority | negative isolation suite and delegated-access audit pass | T2.01–T2.12 |
| F-02 | Contract/schema registry | compatibility, fixtures, migrations and generated-model parity pass | T0.03–T0.05 |
| F-03 | Source/evidence pipeline | immutable originals, stable spans, OCR quality, malware/injection quarantine | T3.01–T3.04 |
| F-04 | Bitemporal work graph | valid/recorded time queries, optimistic concurrency, full provenance | T3.05–T3.11 |
| F-05 | Eventing and idempotency | transactional outbox/inbox, duplicate/reorder/failure tests | T4.01–T4.03 |
| F-06 | Durable engagement runtime | waits, signals, timers, cancel, retry, deploy replay and compensation | T4.04–T4.08, T4.12 |
| F-07 | Policy/tool gateway | schema/permission/budget gates, preview/receipt, zero raw credentials | T2.05–T2.07, T5.04 |
| F-08 | Context manifest | deterministic assembly, ACL explanations, token budget and replay | T5.08 |
| F-09 | Observability/audit | end-to-end traces, redaction, metric semantics, audit integrity | T4.09–T4.10 |
| F-10 | Data lifecycle | classification, consent, hold, retention, export, verified derived deletion | T3.12 |
| F-11 | Resilience | backup restore, RPO/RTO evidence, queue/DLQ reconciliation | T4.11–T4.12, T10.09 |
| F-12 | Foundation qualification | landing zone, supply chain, frontend/design system, isolated code workspace, code-index/graph receipts, security, performance and runbooks pass | T1.01–T1.17, T4.12 |

## Intelligence epics

| ID | Epic | Definition of done | Work-package mapping |
|---|---|---|---|
| I-01 | Hybrid retrieval | gold recall/citation/ACL/time thresholds and counterevidence sampling pass | T5.06–T5.07 |
| I-02 | Context compiler | relevance/diversity/freshness policies and lost-in-context test pass | T5.08 |
| I-03 | Lead BA cognitive graph | bounded terminal states, interrupt/resume, structured proposals | T6.01–T6.02, T6.11 |
| I-04 | Prompt/model/policy registry | versioned composition, evaluation evidence, canary and rollback | T5.01–T5.05 |
| I-05 | Assertion and evidence extraction | calibrated extraction with exact anchors and quarantine | T6.03 |
| I-06 | Conflict engine | negation/scope/time/authority types; expert benchmark pass | T3.08, T6.04 |
| I-07 | Domain-pack lifecycle | branch, steward review, SHACL-like checks, dependency impact, release/rollback | T3.07, T3.09–T3.10 |
| I-08 | BA model suite | goal, capability, process, rule, data, scenario, requirement and trace views | T6.04–T6.08 |
| I-09 | Critic and repair | independent checks, fixed budget, escalation, ablation-proven benefit | T6.09–T6.11 |
| I-10 | Memory promotion and X08 | consent, evidence, novelty/conflict/freshness gates, poisoning/correction suite | T5.09–T5.10 |
| I-11 | Sufficiency gates | decision-specific blockers, coverage and waivers; never auto-approval | T6.10 |
| I-12 | Intelligence qualification | beats strong baselines on BA and experience/coding-agent critical metrics | T5.11–T5.14, T6.12–T6.14 |
| I-13 | Archaeology + AC-gated review cores | X11/X12 confirmatory; always-on Reviewer; polyglot proposals | T6.15–T6.17 |

## Experience and pilot epics

| ID | Epic | Definition of done | Work-package mapping |
|---|---|---|---|
| E-01 | Dual-portal Business/Build experience | complete portal surfaces keep assistant-guided Understand/Design/Decide and Build Workspace/Review coherent and accessible | T8.01–T8.05, T8.13–T8.14, T8.17 |
| E-02 | Stakeholder topology | authority, expertise, impact and inclusion gaps are actionable | T7.01–T7.02 |
| E-03 | Elicitation planner | information-gain policy, technique choice, fatigue/consent and stop rules | T7.03 |
| E-04 | Live/async participation | resume, recap, correction, survey, transcript, collaboration, notification, accessibility and low-bandwidth paths | T7.04–T7.07, T7.09–T7.11 |
| E-05 | Conflict facilitation | side-by-side claims/evidence and explicit authority decision | T3.08, T7.08 |
| E-06 | Prototype and governed coding runtime | sandboxed states/transitions/mock data/fidelity plus exact-base repository patch, AC panel, no secrets/implicit effects | T8.06–T8.08, T8.15–T8.17 |
| E-13 | Build Review and code-discovery UX | Requirements coverage journey, code-discovery claim review, why-this-exists drill-down | T8.18–T8.19 |
| E-07 | Element feedback trace | scenario observation links to requirement/design/evidence and impact | T8.09 |
| E-08 | Review/approval/baseline | governed artefact rendering, separation of duties, typed waiver, e-signature, immutable bundle and semantic diff | T8.10–T8.12, T9.01–T9.04 |
| E-09 | Delivery feedback | slicing, decisions, questions, deviations, test evidence and change impacts return to work graph | T9.05–T9.11 |
| E-10 | Connector kit | least privilege, cursors/webhooks, mapping, reconciliation, deletion and certification | T10.01–T10.04, T11.07 |
| E-11 | Pilot and scale operations | SLOs, frontend RUM, support, incident/DR, cost, regional scale, customer controls, capacity and analytics ready | T10.05–T10.09, T10.13, T11.01–T11.06, T11.08–T11.10, T11.13 |
| E-12 | Pilot and scale evaluation | real outcome, frontend/generation/coding-agent quality, participant harm, efficiency, TCO and independent decision | T9.12, T10.10–T10.14, T11.11–T11.13 |
| E-14 | Brownfield connector and transport gates | ERP/CRM/SAP read and/or process-mining certification; CAB/transport dual control | T10.15–T10.16 |

## Cross-cutting definition of done

Every epic has an accountable owner, hypothesis/value, threat and privacy notes, contract changes, tests at the right layer, telemetry, accessibility impact, migration/rollback, evaluation result, documentation and reviewer. Model-dependent changes also have dataset-slice results, cost/latency, failure examples and a system-card update. Every mapped work package must have its task dossier, or an explicit non-applicability decision, before the epic closes.

## Stop conditions for autonomous delivery agents

Stop and request authority on unclear destructive scope, schema/semantic breaking change without migration, security/privacy policy conflict, irreversible external effect, missing secret/access, failed critical test, ambiguous business authority, evidence suggesting the epic hypothesis is false, or changes outside the assigned work item. Never weaken a gate to make a task pass.
