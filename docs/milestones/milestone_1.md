# Milestone 1 — Research, benchmark and decision foundation

Status: delivery control · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: product research council · Maps to: R0 / T0

## Outcome and decision

Prove that CollabX addresses a valuable enterprise BA problem, that senior-quality behaviour can be measured, that the proposed experience is comprehensible, and that no known architecture/control flaw makes further investment irresponsible. The terminal decision is `invest`, `narrow`, `pivot`, or `stop`; completion is not presumed.

Read: [vision](../product/vision.md), [BA operating model](../product/ba-operating-model.md), [capability map](../product/end-to-end-capability-map.md), [evaluation program](../research/evaluation-and-experiments.md), [technology decisions](../research/technology-decisions.md), [enterprise gap assessment](../research/enterprise-gap-assessment.md), [enterprise readiness](../governance/enterprise-readiness-model.md), [provider profiles](../engineering/model-provider-and-environment-profiles.md), and T0 in the [build sequence](../delivery/build-sequence-and-dependency-graph.md).

## Entry, governance and evidence rules

- Entry: named sponsor, product/research lead, BA benchmark lead, security/privacy reviewer and budget authority; no production/customer data.
- Research participants receive consent, recording, withdrawal, AI-use and retention information; adverse events have an owner and stop path.
- Primary hypotheses, metrics, slices, sample sizes, exclusions and stop rules are preregistered before result inspection.
- Store only redacted evidence references/hashes in task dossiers; secrets and restricted research material remain in governed stores.
- Real-model runs use `eval-real`, the configured Azure deployments and a capped budget. They cannot qualify Bedrock production.

## Existing work-package coverage

| Milestone tasks | Existing work packages |
|---|---|
| M1.01–M1.02 | T0.01–T0.02 |
| M1.03, M1.07, M1.09, M1.13 | T0.06 |
| M1.04 | T0.07 |
| M1.05 | T0.03–T0.05 |
| M1.06 | T0.09 model/provider portion |
| M1.08, M1.10 | T0.11 |
| M1.11 | T0.10 |
| M1.12 | T0.08 |
| M1.14, M1.17 | T0.12 |
| M1.15–M1.16 | T0.13–T0.14 |

All T0.01–T0.14 packages are covered.

## Work plan

### M1.01 — Establish decision charter and requirement trace

1. Name buyer, users, affected non-users, business decision, scope, exclusions and success/harm hypotheses.
2. Trace each explicit product promise to capability, experiment, metric, evidence owner and roadmap decision.
3. Record assumptions, conflicting evidence, legal/regulatory unknowns and prohibited use candidates.
4. Approve G0 charter and publish the trace matrix.

Output: charter, stakeholder/authority map, `promise → metric → experiment → decision` matrix. Accept when every promise has an owner and falsification route, and no critical stakeholder class lacks a sampling plan.

### M1.02 — Run problem, buyer and workflow discovery

1. Recruit at least 25 participants across senior BAs, sponsors, SMEs/frontline, design, engineering, risk/procurement and buyers; disclose sample imbalance.
2. Observe at least five real discovery/requirements sessions with consent; capture work, delays, handoffs, failures and workaround costs.
3. Code evidence independently by two researchers for high-impact themes and inspect disagreements.
4. Quantify baseline stakeholder time, rework, decision latency, defect escape and tool/service cost where obtainable.

Output: de-identified evidence set, opportunity map and disconfirming findings. Accept when at least three buyer contexts show a material problem or the council narrows/stops; do not infer market size from participant enthusiasm.

### M1.03 — Define senior-BA competency and artefact rubrics

1. Convert the six BA knowledge areas and CollabX quality rubric into observable behavioural anchors.
2. Define critical failures: missed safety/regulatory constraint, fabricated authority/evidence, leading coercive elicitation, unresolved material contradiction and untestable baseline.
3. Calibrate at least three expert graders on shared examples and adjudicate ambiguity.
4. Freeze rubric version and grader guide before candidate comparison.

Output: rubric, scoring handbook, calibration results. Accept when weighted inter-rater agreement is ≥0.70 (or justified domain equivalent), with ≥0.90 agreement on critical-failure labels.

### M1.04 — Build benchmark corpus v0

1. Create cases for regulated/high-rule, operational/process-heavy and product/discovery-heavy domains.
2. Include private-role facts, tacit exception, temporal change, conflicting authority, inaccessible evidence, NFR/recovery need and adversarial instruction.
3. Produce gold claims, spans, concepts, conflicts, questions, requirements, scenarios and known limitations through expert review.
4. Split development, calibration and hidden release sets by organisation/domain/time; fingerprint cases for contamination checks.

Output: versioned public-synthetic smoke set and restricted gold set. Accept when every critical slice has positive/negative examples and no candidate has access to hidden answers.

### M1.05 — Implement the evaluation and metric harness specification

1. Define metric numerator, denominator, exclusions, unit, direction, aggregation, slice, window and owner.
2. Define bootstrap/confidence-interval method, non-inferiority margin, multiple-comparison handling and minimum sample completeness.
3. Specify immutable run/result schemas and reproducibility manifests.
4. Create a failure taxonomy separating model, retrieval, policy, data, grader, infrastructure and human-process failures.

Output: evaluation protocol and schemas. Accept when an independent evaluator can reproduce a sample calculation from fixtures without interpretation.

### M1.06 — Validate real-model configuration and provider contract

1. Add a preflight that checks required variable presence without printing values and rejects ambiguous/missing deployment aliases.
2. Invoke `OPENAI_LLM`, `OPENAI_MLM`, `OPENAI_SLM` and `AZURE_EMBEDDING` with synthetic non-sensitive probes; test authentication, timeout, rate-limit/error parsing and usage capture.
3. Validate strict JSON output, refusal handling, extra/invalid fields, Unicode, long input and bounded repair.
4. Persist redacted manifests and cost/latency summaries; never persist secrets or unrestricted content.

Output: Azure provider conformance report. Accept with 100% schema enforcement, attributable deployment/request metadata, zero secret leakage and complete results for the preregistered probe count. Failure blocks model-dependent research, not deterministic documentation work.

### M1.07 — Execute X01 elicitation feasibility

1. Compare adaptive policy, static script and expert-BA condition using randomised/order-balanced scenarios.
2. Measure critical-fact/exception coverage, valid new information per question/minute, leading/bias rate, burden, stop appropriateness and participant correction.
3. Review dissenting/low-power, language and sensitive-content slices.
4. Analyse effect and uncertainty; record qualitative failure examples.

Output: X01 feasibility decision. Accept investment only if coverage/quality is non-inferior to the expert baseline within the preregistered margin and burden does not materially worsen.

### M1.08 — Execute X02 semantic layer versus strong RAG

1. Hold corpus, model deployments and task prompts constant across lexical/vector RAG and semantic/temporal augmentation.
2. Test ambiguous terms, scope collision, rule exceptions, old-policy trap, correction and conflict.
3. Measure task success, temporal/conflict accuracy, retrieval/citation quality, latency, token/provider cost and steward upkeep.
4. Run ablations to attribute gain to semantic assets rather than extra context.

Output: X02 architecture decision evidence. Accept added semantic complexity only for material critical-slice gain at a supportable maintenance estimate.

### M1.09 — Execute X03–X05 experience and topology feasibility

1. X03 compares single agent, single+critic and bounded specialists using the same budgets where possible.
2. X04 compares prose answers to the evidence/status/conflict view for trust calibration and correction success.
3. X05 compares interview-only, low-fidelity linked prototype and higher-fidelity variant for valid corrections and anchoring.
4. Report quality, latency, cost, workload, accessibility and adverse effects independently.

Output: three experiment decisions. Accept multi-agent or higher fidelity only when its incremental benefit exceeds preregistered cost/burden and no critical slice regresses; otherwise it remains disabled.

### M1.10 — Execute X06 storage/retrieval feasibility

1. Generate production-shaped tenant, ACL, time, document-size and update distributions at forecast and 10× forecast.
2. Establish exact-search truth; test PostgreSQL lexical/vector/hybrid and filtered approximate alternatives.
3. Measure Recall@k, nDCG, citation recall/precision, counterevidence/temporal recall, p50/p95/p99 latency, write impact and cost.
4. Run cross-tenant negative tests before and after indexing/rebuild.

Output: storage/retrieval ADR evidence. Accept PostgreSQL pilot baseline only with zero isolation failures and thresholds from [vision](../product/vision.md)/[NFRs](../engineering/non-functional-requirements.md); otherwise select a bounded spike, not an untested engine.

### M1.11 — Execute X07-A durable/cognitive runtime spike

1. Implement the minimal wait-signal-interrupt-resume workflow and one bounded model activity behind ports.
2. Kill/restart at every boundary; duplicate and reorder signals; redeploy compatible code; cancel during activity.
3. Prove deterministic replay, idempotent effects, encrypted/minimal history and operator inspection.
4. Compare Temporal-compatible and credible alternative constraints, deployment, residency, cost and skills.

Output: provisional runtime ADR. Accept only with no lost acknowledged state/duplicate effect in all planned failure injections and documented production qualification work for M2.

### M1.12 — Complete architecture, threat, privacy and abuse analysis

1. Map people, browser, tenant, provider, connector, sandbox, telemetry and administrator trust boundaries.
2. Run STRIDE plus AI misuse cases, data-flow/purpose/residency mapping and initial DPIA/AI risk classification.
3. Test cross-tenant retrieval, prompt injection, authority spoof, malicious tool metadata, exfiltration, memory poisoning and runaway cost.
4. Assign owner, control, test, residual risk and release stage to every material threat.

Output: reviewed threat/privacy/data-flow pack. Accept when no critical risk lacks an in-scope control/test or explicit stop decision.

### M1.13 — Validate journey prototypes and accessibility direction

1. Prototype charter, evidence-first dialogue, living canvas, conflict review, linked feedback and approval journeys.
2. Test keyboard, screen reader, zoom/reflow, low-bandwidth/form alternative and plain language with representative users.
3. Measure task success/time/error, state/authority comprehension, source inspection, correction and perceived control.
4. Revise and retest critical failures; record design-system requirements.

Output: validated experience direction. Accept with 100% critical-task completion after allowed recovery, no critical accessibility blocker and ≥90% correct comprehension of `proposed/confirmed/approved` in the study sample.

### M1.14 — Establish enterprise service and commercial hypotheses

1. Define service tiers, customer responsibilities, support assumptions, data/model choices, quotas and exclusions.
2. Model provisioning, onboarding, stewardship, model/provider, infrastructure, support, assurance and offboarding cost.
3. Test buyer willingness, procurement blockers, security evidence needs and acceptable human-review burden.
4. Define pilot contract, success, harm, stop and exit terms without making unverified compliance claims.

Output: commercial/TCO hypothesis. Accept only if a plausible value-to-cost path exists and buyers accept the required governance; otherwise narrow target segment.

### M1.15 — Execute X09 enterprise frontend benchmark and design direction

1. Benchmark comparable executive, participant, analytical, approval, administration and service workflows against the [enterprise frontend specification](../experience/enterprise-frontend-experience.md), using identical task scripts rather than subjective screenshots.
2. Produce low/high-density concepts for portfolio, engagement overview, session, analysis room, conflict, prototype, approval and administration; test navigation, status semantics, evidence access and coherent visual character.
3. Run role-based first-use studies including executives, time-poor participants, BAs, engineers, approvers, administrators and people using keyboard/screen reader/zoom/low bandwidth.
4. Freeze the Tier-A page catalogue, design principles, component/status vocabulary, supported device/locale matrix and measurable target assumptions for M2–M4.

Output: frontend research report, route/journey matrix and design direction. Accept when ≥90% participants complete the primary concept journey without facilitator rescue, ≥90% distinguish proposed/confirmed/approved, all critical accessibility blockers are removed, and executives identify outcome/blocker/decision in ≤5 minutes.

### M1.16 — Execute X10 experience-generation and coding-agent benchmark

1. Create representative tasks from vague brief through MCQ/free-form/checklist clarification, coherent mock data, L1–L4 prototype and a bounded L5 repository patch.
2. Compare manual product/design/engineering workflow, generic model generation and CollabX’s proposed intent/context/tool/patch contracts on intention accuracy, question burden, visual quality, code correctness, traceability and reviewer effort.
3. Red-team prompt/repository injection, stale/dirty base, path escape, unrelated-change loss, unsafe dependency/network/secret access, patch failure, specialist overlap and unauthorised commit/push/deploy.
4. Decide eligible fidelity levels, repository/tool boundaries, multi-agent hypotheses, budgets and datasets for later qualification.

Output: generation/coding-agent benchmark and threat pack. Accept further investment only if the governed approach preserves 100% critical intent/trace, loses zero unrelated changes, produces zero unauthorised effect and shows a credible improvement in time or valid-correction yield over the comparison workflow.

### M1.17 — Hold the R0 investment decision

1. Freeze results and compile evidence/limitations, not a sales narrative.
2. Independently review metric integrity, safety/privacy, technical feasibility and commercial evidence.
3. List passed, failed, inconclusive and contaminated hypotheses with confidence.
4. Sign `invest`, `narrow`, `pivot` or `stop`, plus M2 scope, budgets and accepted/provisional ADRs.

Output: immutable M1 evidence manifest and decision. Accept milestone completion only when the decision is signed; an honest stop is a successful research outcome.

## Milestone success scorecard

| Measure | Gate |
|---|---|
| Research coverage | ≥25 interviews, ≥5 observations, declared role/domain sampling gaps |
| Rubric reliability | agreement thresholds in M1.03; 100% critical cases adjudicated |
| Grounding | 100% material claims cited or `UNSUPPORTED` in evaluated outputs |
| Safety/isolation | zero cross-tenant disclosure and unauthorised external effect |
| Model reproducibility | 100% real-model runs have redacted manifest and intended deployment attribution |
| Experience | no critical accessibility issue; authority/status comprehension target met |
| Frontend direction | Tier-A route/journey/component/state matrix frozen; ≥90% unassisted concept task success |
| Experience/code generation | X10 benchmark covers L1–L5, hostile repository and patch integrity; zero critical effect/loss |
| Decision integrity | every experiment has result, uncertainty, failure examples and action |

## Runnable validation contract

Implementation must expose stable root commands equivalent to:

```bash
task docs:check
task test:unit
task eval:preflight --profile eval-real --redact
task eval:run --experiment X01,X02,X03,X04,X05,X06,X07-A,X09,X10 --profile eval-real
task eval:verify-manifest --milestone M1
```

Command names may change only through the task-runner contract; milestone evidence records exact commit, command, environment profile and result. `eval:preflight` must read `.env` locally without echoing values.

## Exit and handoff

M2 cannot begin beyond disposable preparation until M1 produces the signed decision, accepted schema conventions, benchmark/rubric versions, threat/data classifications, provider conformance, provisional runtime decision and an approved list of unresolved risks. Failed critical safety, isolation or research-ethics evidence forces `narrow/pivot/stop`.
