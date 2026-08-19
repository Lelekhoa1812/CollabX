# Milestone 1 — Research, benchmark and decision foundation

Status: delivery control · Baseline: `design-v4` · Effective: 2026-08-19 · Owner: product research council · Maps to: R0 / T0

## Outcome and decision

Prove that CollabX addresses a valuable enterprise BA problem, that senior-quality behaviour can be measured, that the proposed experience is comprehensible, and that no known architecture/control flaw makes further investment irresponsible. The terminal decision is `invest`, `narrow`, `pivot`, or `stop`; completion is not presumed.

Read: [vision](../product/vision.md), [BA operating model](../product/ba-operating-model.md), [capability map](../product/end-to-end-capability-map.md), [coding intelligence](../intelligence/coding-intelligence-and-review-agent.md), [BA/coding gap review](../research/ba-and-coding-intelligence-gap-review.md), [decision intelligence](../research/decision-intelligence-and-deliberation.md), [evaluation program](../research/evaluation-and-experiments.md), [technology decisions](../research/technology-decisions.md), [enterprise gap assessment](../research/enterprise-gap-assessment.md), [enterprise readiness](../governance/enterprise-readiness-model.md), [provider profiles](../engineering/model-provider-and-environment-profiles.md), and T0 in the [build sequence](../delivery/build-sequence-and-dependency-graph.md).

Decision Intelligence inserts below specify probes, gold, metrics and invest/narrow language. They do not run interviews, `eval:run`, or product code. X13/X14 are specified-not-run unless a later signed programme authorises them.

## Entry, governance and evidence rules

- Entry: named sponsor, product/research lead, BA benchmark lead, coding/review benchmark lead, security/privacy reviewer and budget authority; no production/customer data.
- Research participants receive consent, recording, withdrawal, AI-use and retention information; adverse events have an owner and stop path.
- Primary hypotheses, metrics, slices, sample sizes, exclusions and stop rules are preregistered before result inspection.
- Store only redacted evidence references/hashes in task dossiers; secrets and restricted research material remain in governed stores.
- Real-model runs use `eval-real`, the configured Azure deployments and a capped budget. They cannot qualify Bedrock production.
- Supervision: Research + AI councils; weekly evidence review; stop authority = product council.

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
| M1.17–M1.19 | T0.15–T0.17 (Capability 18 / X11 / X12 research packs) |
| M1.20 | T0.12 (decision freeze after all experiments) |

All T0 packages listed above are covered; new T0.15–T0.17 are added in the build sequence for coding intelligence research.

## Work plan

### M1.01 — Establish decision charter and requirement trace

1. Name buyer, users, affected non-users, business decision, scope, exclusions and success/harm hypotheses.
2. Trace each explicit product promise to capability, experiment, metric, evidence owner and roadmap decision.
3. Record assumptions, conflicting evidence, legal/regulatory unknowns and prohibited use candidates.
4. Approve G0 charter and publish the trace matrix.

Output: charter, stakeholder/authority map, `promise → metric → experiment → decision` matrix. Accept when every promise has an owner and falsification route, and no critical stakeholder class lacks a sampling plan.

Specification insert: add the promise **evidence-backed, contradiction-tested, and quantitatively prioritised projection of an approved baseline** to the matrix. Map it to Capabilities 7 and 9, gates G2/G3/G5, experiments X03/X13/X14, and a kill route if method theatre beats RAG without quality. Do not claim ISO 42001 certification or a “mathematically validated PRD.”

### M1.02 — Run problem, buyer and workflow discovery

1. Recruit at least 25 participants across senior BAs, sponsors, SMEs/frontline, design, engineering, risk/procurement and buyers; disclose sample imbalance.
2. Observe at least five real discovery/requirements sessions with consent; capture work, delays, handoffs, failures and workaround costs.
3. Code evidence independently by two researchers for high-impact themes and inspect disagreements.
4. Quantify baseline stakeholder time, rework, decision latency, defect escape and tool/service cost where obtainable.

Output: de-identified evidence set, opportunity map and disconfirming findings. Accept when at least three buyer contexts show a material problem or the council narrows/stops; do not infer market size from participant enthusiasm.

Specification insert — interview/observation probes (T0.01): (1) pairwise AHP vs scored MCDA vs even-swaps talk; (2) how policy-versus-practice is resolved today; (3) cost of a bad G3 decision vs extra stakeholder minutes; (4) would they accept a system that *refuses* to recommend; (5) existing WSJF/MoSCoW/AHP use. Do not treat meeting-note enthusiasm as market size.

### M1.03 — Define senior-BA competency and artefact rubrics

1. Convert the six BA knowledge areas and CollabX quality rubric into observable behavioural anchors.
2. Define critical failures: missed safety/regulatory constraint, fabricated authority/evidence, leading coercive elicitation, unresolved material contradiction, untestable baseline, hidden assumption shipped as fact, unjustified recommendation with an `unassessed` critical dimension, averaging dissent into approval, Fusion-Score-as-approval, and fabricated pairwise matrix with pretty CR.
3. Calibrate at least three expert graders on shared examples and adjudicate ambiguity.
4. Freeze rubric version and grader guide before candidate comparison.

Output: rubric, scoring handbook, calibration results. Accept when weighted inter-rater agreement is ≥0.70 (or justified domain equivalent), with ≥0.90 agreement on critical-failure labels.

### M1.04 — Build benchmark corpus v0

1. Create cases for regulated/high-rule, operational/process-heavy and product/discovery-heavy domains.
2. Include private-role facts, tacit exception, temporal change, conflicting authority, inaccessible evidence, NFR/recovery need and adversarial instruction.
3. Produce gold claims, spans, concepts, conflicts, questions, requirements, scenarios and known limitations through expert review.
4. Split development, calibration and hidden release sets by organisation/domain/time; fingerprint cases for contamination checks.

Output: versioned public-synthetic smoke set and restricted gold set. Accept when every critical slice has positive/negative examples and no candidate has access to hidden answers.

Specification insert: require at least one overnight-claims-style option/conflict fixture (policy-versus-practice, unsupported volume, split-rule option, weight disagreement). Gold must include options (null/process/configure as applicable), assumption map, MCDA scores with one `unassessed`, typed conflict, Decide dispositions, and PRD projection exclusions. Do not seed a “Nash equilibrium reached” success label.

### M1.05 — Implement the evaluation and metric harness specification

1. Define metric numerator, denominator, exclusions, unit, direction, aggregation, slice, window and owner.
2. Define bootstrap/confidence-interval method, non-inferiority margin, multiple-comparison handling and minimum sample completeness.
3. Specify immutable run/result schemas and reproducibility manifests.
4. Create a failure taxonomy separating model, retrieval, policy, data, grader, infrastructure and human-process failures.

Output: evaluation protocol and schemas. Accept when an independent evaluator can reproduce a sample calculation from fixtures without interpretation.

Specification insert: include the X13/X14 metric dictionary in [evaluation-and-experiments.md](../research/evaluation-and-experiments.md) — hidden-assumption recall, unjustified-recommendation rate, termination rate, stakeholder minutes, rank stability, automation-bias when LLM drafts scores, rank-reversal, cost per validated decision. Numerators/denominators/exclusions only; no harness code and no Fusion Score SLI.

### M1.06 — Validate real-model configuration and provider contract

1. Add a preflight that checks required variable presence without printing values and rejects ambiguous/missing deployment aliases.
2. Invoke `OPENAI_LLM`, `OPENAI_MLM`, `OPENAI_SLM` and `AZURE_EMBEDDING` with synthetic non-sensitive probes; test authentication, timeout, rate-limit/error parsing and usage capture.
3. Validate strict JSON output, refusal handling, extra/invalid fields, Unicode, long input and bounded repair.
4. Persist redacted manifests and cost/latency summaries; never persist secrets or unrestricted content.

Output: Azure provider conformance report. Accept with 100% schema enforcement, attributable deployment/request metadata, zero secret leakage and complete results for the preregistered probe count. Failure blocks model-dependent research, not deterministic documentation work.

Specification insert: method/challenge research, if ever run, uses the existing `eval-real` profile and cannot qualify Bedrock. No C# or NLI-service probe. This milestone file does not run model probes.

### M1.07 — Execute X01 elicitation feasibility

1. Compare adaptive policy, static script and expert-BA condition using randomised/order-balanced scenarios.
2. Measure critical-fact/exception coverage, valid new information per question/minute, leading/bias rate, burden, stop appropriateness and participant correction.
3. Review dissenting/low-power, language and sensitive-content slices.
4. Analyse effect and uncertainty; record qualitative failure examples.

Output: X01 feasibility decision. Accept investment only if coverage/quality is non-inferior to the expert baseline within the preregistered margin and burden does not materially worsen.

Specification insert: assumption-mapping and issue-tree *assists* are elicitation/synthesis aids. They do not replace the X01 kill gate. Do not invent X01b “Six Hats interview.”

### M1.08 — Execute X02 semantic layer versus strong RAG

1. Hold corpus, model deployments and task prompts constant across lexical/vector RAG and semantic/temporal augmentation.
2. Test ambiguous terms, scope collision, rule exceptions, old-policy trap, correction and conflict.
3. Measure task success, temporal/conflict accuracy, retrieval/citation quality, latency, token/provider cost and steward upkeep.
4. Run ablations to attribute gain to semantic assets rather than extra context.

Output: X02 architecture decision evidence. Accept added semantic complexity only for material critical-slice gain at a supportable maintenance estimate.

Specification insert: issue-tree assist does not replace the X02 kill gate. Semantic/temporal assets remain the hypothesis under test.

### M1.09 — Execute X03–X05 experience and topology feasibility

1. X03 compares single agent, single+critic and bounded specialists using the same budgets where possible.
2. X04 compares prose answers to the evidence/status/conflict view for trust calibration and correction success.
3. X05 compares interview-only, low-fidelity linked prototype and higher-fidelity variant for valid corrections and anchoring.
4. Report quality, latency, cost, workload, accessibility and adverse effects independently.

Output: three experiment decisions. Accept multi-agent or higher fidelity only when its incremental benefit exceeds preregistered cost/burden and no critical slice regresses; otherwise it remains disabled.

Specification insert: X13 is a *sibling protocol* to X03 (classed challenge vs critic-only, matched token budget). A 3-agent JSON demo that “converged” is not a pass. Do not enable MAFP because debate converged. X04 remains the evidence-view vs prose test for Decide/Understand. X05 is unchanged.

### M1.10 — Execute X06 storage/retrieval feasibility

1. Generate production-shaped tenant, ACL, time, document-size and update distributions at forecast and 10× forecast.
2. Establish exact-search truth; test PostgreSQL lexical/vector/hybrid and filtered approximate alternatives.
3. Measure Recall@k, nDCG, citation recall/precision, counterevidence/temporal recall, p50/p95/p99 latency, write impact and cost.
4. Run cross-tenant negative tests before and after indexing/rebuild.

Output: storage/retrieval ADR evidence. Accept PostgreSQL pilot baseline only with zero isolation failures and thresholds from [vision](../product/vision.md)/[NFRs](../engineering/non-functional-requirements.md); otherwise select a bounded spike, not an untested engine.

Specification insert: GraphRAG stays an X06 *optional projection* candidate, not a lock. Do not write a GraphRAG ADR as accepted. Counterevidence sampling remains required for option/conflict cases.

### M1.11 — Execute X07-A durable/cognitive runtime spike

1. Implement the minimal wait-signal-interrupt-resume workflow and one bounded model activity behind ports.
2. Kill/restart at every boundary; duplicate and reorder signals; redeploy compatible code; cancel during activity.
3. Prove deterministic replay, idempotent effects, encrypted/minimal history and operator inspection.
4. Compare Temporal-compatible and credible alternative constraints, deployment, residency, cost and skills.

Output: provisional runtime ADR. Accept only with no lost acknowledged state/duplicate effect in all planned failure injections and documented production qualification work for M2.

Specification insert: long method/challenge runs are PERF-07 durable activities (ack, cancel/resume, progress). Live interview never waits on them. Same Temporal-or-equivalent port; no Kafka lock and no C# AHP worker.

### M1.12 — Complete architecture, threat, privacy and abuse analysis

1. Map people, browser, tenant, provider, connector, sandbox, telemetry and administrator trust boundaries.
2. Run STRIDE plus AI misuse cases, data-flow/purpose/residency mapping and initial DPIA/AI risk classification.
3. Test cross-tenant retrieval, prompt injection, authority spoof, malicious tool metadata, exfiltration, memory poisoning and runaway cost.
4. Assign owner, control, test, residual risk and release stage to every material threat.

Output: reviewed threat/privacy/data-flow pack. Accept when no critical risk lacks an in-scope control/test or explicit stop decision.

Specification insert — rejected controls: `CR < 0.1` is not an injection firewall; token log-probs are not factual confidence; averaging judges is an abuse case; LLM-filled pretty AHP matrices are an adversarial fixture. APP 10 maps to *personal information* quality, not document freshness.

### M1.13 — Validate journey prototypes and accessibility direction

1. Prototype initiative brief, evidence-first contribution, Understand disagreement review, Design feedback and item-level approval journeys across Business and Build portal concepts.
2. Test keyboard, screen reader, zoom/reflow, low-bandwidth/form alternative and plain language with representative users.
3. Measure task success/time/error, state/authority comprehension, source inspection, correction and perceived control.
4. Revise and retest critical failures; record design-system requirements.

Output: validated experience direction. Accept with 100% critical-task completion after allowed recovery, no critical accessibility blocker and ≥90% correct comprehension of `proposed/confirmed/approved` in the study sample.

Specification insert: Understand Options / Disagreement and the Decide brief absorb the “Conflict Resolution Brief.” No new dashboard IA. Tornado is a table. Issue trees are outlines. Pairwise matrix canvas remains OOS. Do not implement new `prototype/` pages in this documentation workstream.

### M1.14 — Establish enterprise service and commercial hypotheses

1. Define service tiers, customer responsibilities, support assumptions, data/model choices, quotas and exclusions.
2. Model provisioning, onboarding, stewardship, model/provider, infrastructure, support, assurance and offboarding cost.
3. Test buyer willingness, procurement blockers, security evidence needs and acceptable human-review burden.
4. Define pilot contract, success, harm, stop and exit terms without making unverified compliance claims.

Output: commercial/TCO hypothesis. Accept only if a plausible value-to-cost path exists and buyers accept the required governance; otherwise narrow target segment.

Specification insert: probe cost-of-bad-G3 vs extra stakeholder minutes; treat cost per validated decision as a commercial hypothesis; include governance burden of stewarding method judgments.

### M1.15 — Execute X09 enterprise frontend benchmark and design direction

1. Benchmark comparable executive, participant, analytical, approval, administration and delivery workflows against the [enterprise frontend specification](../experience/enterprise-frontend-experience.md), using identical task scripts rather than subjective screenshots.
2. Produce low/high-density concepts for Business Home, Initiative, Contribute, Understand, Design, Decide, Track, Settings, and Build Home/Workspace/Review; test navigation, status semantics, source access and coherent visual character.
3. Run role-based first-use studies including executives, time-poor participants, BAs, engineers, approvers, administrators and people using keyboard/screen reader/zoom/low bandwidth.
4. Freeze the dual-portal surface catalogue, design principles, component/status vocabulary, supported device/locale matrix and measurable target assumptions for M2–M4.

Output: frontend research report, portal/journey matrix and design direction. Accept when ≥90% participants complete the primary concept journey without facilitator rescue, ≥90% distinguish draft/approved/assistant suggestion, all critical accessibility blockers are removed, and executives identify outcome/main risk/decision in ≤5 minutes.

Specification insert: freeze language that Understand Options/Disagreement and Decide brief absorb Conflict Resolution Brief fields (method, scores, `unassessed`, tornado table, dissent, assumption map, both evidence sets, Decision Quality weak-link, item-level dispositions). No new dashboard.

### M1.16 — Execute X10 experience-generation and coding-agent benchmark

1. Create representative tasks from vague brief through MCQ/free-form/checklist clarification, coherent mock data, L1–L4 prototype and a bounded L5 repository patch including **at least one non-UI change class** (API, rule, or config-as-code).
2. Include brownfield/hostile fixtures: large monorepo path filters, stale/dirty base, config-as-code, and synthetic ERP-like customization layout (no real customer SAP IP).
3. Compare manual product/design/engineering workflow, generic model generation and CollabX’s proposed intent/context/tool/patch contracts on intention accuracy, question burden, visual quality, code correctness, traceability and reviewer effort.
4. Red-team prompt/repository injection, stale/dirty base, path escape, unrelated-change loss, unsafe dependency/network/secret access, patch failure, specialist overlap and unauthorised commit/push/deploy.
5. Decide eligible fidelity levels, repository/tool boundaries, multi-agent hypotheses, budgets and datasets for later qualification.

Output: generation/coding-agent benchmark and threat pack. Accept further investment only if the governed approach preserves 100% critical intent/trace, loses zero unrelated changes, produces zero unauthorised effect and shows a credible improvement in time or valid-correction yield over the comparison workflow. Frontend-only L5 is insufficient as the sole path.

Specification insert: sandbox test receipts may later *evidence* technical-feasibility claims; they do not generate PRDs. MCTS, if ever, is an X10 / Capability 18 research option only (SWE-Debate’s actual setting). Do not add SWE-Debate as a BA default.

### M1.17 — Build brownfield / ERP-like research corpus

1. Construct at least three packs: process-heavy, customization-heavy, integration-heavy (synthetic or consented de-identified).
2. Include gold as-is process/rule/integration claims, stakeholder private knowledge, seeded conflicts and IP-handling protocol.
3. Define leakage tests (secrets, customer names, cross-pack contamination).
4. Publish pack versions and retention/destruction rules.

Accept: ≥3 packs versioned; security/privacy review signed; no production ERP customer IP without contract.

Specification insert: archaeology assumptions later feed the assumption-mapping engine. They do not create a second code graph. Tree-sitter is a parser adapter under CodeKnowledgeGraph.

### M1.18 — Execute X11 AC-gated review benchmark

1. Seed PRs/change sets with planted AC-gaps, trace breaks and test weakening.
2. Baselines: human reviewer, quality-only bot, CollabX Reviewer contract.
3. Score AC-gap recall/precision, false-positive rate, latency and silent-approve attempts.
4. Freeze review rubric (bug/security/quality/ac_gap/trace_break/assumption_violation/test_weakening) with inter-rater agreement.

Accept: feasibility recall meets preregistered threshold; **zero silent approve**; κ ≥ preregistered agreement; decide blocking policy hypotheses for M3/M4.

### M1.19 — Execute X12 archaeology → BA model benchmark

1. Run Archaeologist contract on corpus packs vs generic RAG vs unaided notes.
2. Score claim precision/recall, citation integrity and steward burden estimate.
3. Red-team invented citations, config-vs-code confusion and silent semantic promotion.
4. Decide whether archaeology is invest/narrow for M2–M3 substrate.

Accept: material precision/recall gain or honest narrow; **100%** material claims cited or UNSUPPORTED; zero silent promotion; domain-pack TCO sketch updated.

Specification insert: archaeology-derived assumptions enter assumption mapping as candidate items with valid interval and owner; they never silently become confirmed weights or Musts.

### M1.20 — Hold the R0 investment decision

1. Freeze results and compile evidence/limitations, not a sales narrative.
2. Independently review metric integrity, safety/privacy, technical feasibility and commercial evidence.
3. List passed, failed, inconclusive and contaminated hypotheses with confidence—including X10/X11/X12.
4. Sign `invest`, `narrow`, `pivot` or `stop`, plus M2 scope, budgets and accepted/provisional ADRs.

Output: immutable M1 evidence manifest and decision. Accept milestone completion only when the decision is signed; an honest stop is a successful research outcome. Coding intelligence may be narrowed (e.g. git+polyglot first, SAP adapter later) but **cannot be dropped entirely** if brownfield BA remains in vision.

Specification insert — Decision Intelligence invest/narrow: thicken MCDA / assumption-mapping / critic only if M1.02 / M1.04 / M1.09 evidence supports it. AHP/BWM stay optional or OOS unless X14 is authorised. MAFP, MCTS-for-PRD, C#, Kafka and GraphRAG cannot be `invest` items from meeting notes alone.

## Milestone success scorecard

| Measure | Gate |
|---|---|
| Research coverage | ≥25 interviews, ≥5 observations, declared role/domain sampling gaps |
| Rubric reliability | agreement thresholds in M1.03; 100% critical cases adjudicated |
| Grounding | 100% material claims cited or `UNSUPPORTED` in evaluated outputs |
| Safety/isolation | zero cross-tenant disclosure and unauthorised external effect |
| Model reproducibility | 100% real-model runs have redacted manifest and intended deployment attribution |
| Experience | no critical accessibility issue; authority/status comprehension target met |
| Frontend direction | Dual-portal surface/journey/component/state matrix frozen; ≥90% unassisted concept task success |
| Experience/code generation | X10 covers L1–L5 including non-UI class, hostile/brownfield fixtures; zero critical effect/loss |
| AC-gated review | X11 feasibility pass; zero silent approve |
| Archaeology | X12 feasibility pass or signed narrow; 100% citation integrity |
| Decision integrity | every experiment has result, uncertainty, failure examples and action |
| Decision Intelligence (specified) | X13/X14 protocols and overnight-claims gold exist; no Fusion Score / MAFP / “mathematically validated PRD” in the signed promise matrix |

## Runnable validation contract

Implementation must expose stable root commands equivalent to:

```bash
task docs:check
task test:unit
task eval:preflight --profile eval-real --redact
task eval:run --experiment X01,X02,X03,X04,X05,X06,X07-A,X09,X10,X11,X12 --profile eval-real
# X13,X14 are specified; include only if a later signed programme authorises the pack
task eval:verify-manifest --milestone M1
```

Command names may change only through the task-runner contract; milestone evidence records exact commit, command, environment profile and result. `eval:preflight` must read `.env` locally without echoing values.

## Exit and handoff

M2 cannot begin beyond disposable preparation until M1 produces the signed decision, accepted schema conventions, benchmark/rubric versions, threat/data classifications, provider conformance, provisional runtime decision, coding-intelligence invest/narrow scope and an approved list of unresolved risks. Failed critical safety, isolation or research-ethics evidence forces `narrow/pivot/stop`. Kill-gate experiments for the intelligence thesis remain X01, X02, X10, X11, X12 and domain-pack TCO.
