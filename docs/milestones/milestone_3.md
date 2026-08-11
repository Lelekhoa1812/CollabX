# Milestone 3 — Grounded Senior BA intelligence core

Status: delivery control · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: AI and BA engineering councils · Maps to: R2 / T5–T6

## Outcome and decision

Qualify a bounded, evidence-first single-agent BA analytical core against strong RAG and human baselines. It must extract, model, challenge and propose without silently creating truth or authority. Multi-agent paths remain disabled unless ablation proves a specific benefit.

Read: [agents/memory/RAG](../intelligence/agents-memory-rag.md), [model lifecycle](../intelligence/model-agent-and-evaluation-lifecycle.md), [provider profiles](../engineering/model-provider-and-environment-profiles.md), [data model](../architecture/data-and-knowledge-model.md), [BA model](../product/ba-operating-model.md), [evaluation program](../research/evaluation-and-experiments.md), and T5–T6 in the [build sequence](../delivery/build-sequence-and-dependency-graph.md).

## Entry and hard constraints

- Entry: M2 foundation accepted; benchmark/rubric frozen; real-provider conformance current; model-call budget and data-purpose approval.
- Agents receive bounded context and return typed proposals. They cannot approve, publish, alter policy/domain packs or execute external writes.
- No critical result may be qualified solely by an LLM grader. Hidden release cases remain inaccessible to builders.
- A deployment/API/prompt/retrieval/policy change invalidates affected evidence and triggers rerun.

## Existing work-package coverage

| Milestone task | Existing work packages |
|---|---|
| M3.01 | T5.01–T5.02 |
| M3.02 | T5.03–T5.04 guard/tool boundary |
| M3.03 | T5.05 |
| M3.04 | T5.06–T5.07 |
| M3.05 | T5.08 |
| M3.06 | T5.09–T5.10 |
| M3.07 | T6.01–T6.02, T6.11 |
| M3.08 | T6.03 |
| M3.09 | T6.04 and semantic dependencies T3.07–T3.10 |
| M3.10 | T6.05–T6.06 |
| M3.11 | T6.07 |
| M3.12 | T6.08 |
| M3.13 | T6.09–T6.10 |
| M3.14, M3.17 | T5.11–T5.12, T6.12 |
| M3.15 | T5.13–T5.14, T6.13 |
| M3.16 | T6.14 |

All T5.01–T6.14 packages are covered. T5.04 tool registry is built with the structured/guard boundary and exercised throughout the agent tasks.

## Work plan

### M3.01 — Implement model catalogue, gateway and route policy

1. Register provider/deployment capabilities, residency, modalities, structure/tools, quotas, price and qualification status.
2. Implement policy filtering then versioned route selection for capability/risk/budget.
3. Add timeout, cancellation, retry/backoff, rate-limit, circuit breaker and request receipt.
4. Prove no unqualified fallback and attribute tokens/cost to tenant/capability/evaluation.

Accept: 100% route fixtures select or deny as oracle; injected outage never chooses a prohibited deployment; usage reconciliation difference ≤1% against provider-reported test usage.

### M3.02 — Implement strict structured generation and guardrails

1. Generate/validate model outputs against canonical schemas with unknown fields rejected.
2. Add semantic invariants, citation format, output size/pagination and one bounded repair.
3. Layer input, context, provider, output, authority/tool and critic controls.
4. Fuzz malformed, huge, Unicode, refusal, truncated and adversarial responses.

Accept: 100% invalid outputs blocked from canonical/tool boundaries; repair never changes authority/data scope; failure is explicit and observable.

### M3.03 — Build prompt, policy and capability release registry

1. Version prompt components, schemas, tools, models/routes, policies, budgets and domain-pack compatibility.
2. Add composition lint for trust labels, non-goals, stop rules, output schema and examples/counterexamples.
3. Link each candidate to datasets/results, approval, rollout and rollback.
4. Diff releases semantically and invalidate approvals on dependency change.

Accept: no runtime prompt string lacks registry identity; exact historical capability can be reconstructed from its manifest; rollback target passes smoke suite.

### M3.04 — Implement hybrid retrieval and exact benchmark

1. Parse intent/entity/time/scope and apply tenant/ACL/purpose filters before candidate generation.
2. Fuse lexical, vector and structured/graph candidates; establish exact-search reference.
3. Rerank for relevance, authority, freshness and diversity; deliberately sample counterevidence.
4. Expose inclusion/exclusion diagnostics and stable evidence spans.

Accept: Recall@10 ≥0.95 for critical evidence and ≥0.90 for critical counterevidence on hidden set; citation precision ≥0.95; zero ACL leak; PERF-04 passes. Threshold changes require evaluation-council approval.

### M3.05 — Build immutable context compiler

1. Compile goal, actor/authority, policies, evidence, item versions, conflicts, tools, schema and budget.
2. Rank/deduplicate within token budget and preserve trusted/untrusted section boundaries.
3. Record included/excluded items, access denials, retrieval diagnostics and hashes.
4. Test lost-in-context, malicious sources, stale summaries, scope collision and replay.

Accept: identical pinned inputs produce the same manifest; 100% included evidence is permitted/current for query scope; critical evidence loss rate meets retrieval gate.

### M3.06 — Implement memory lifecycle and X08

1. Store working/episodic/prospective memory with consent, scope, expiry and provenance.
2. Route semantic candidates through novelty, support, sensitivity, conflict, freshness and steward approval.
3. Execute longitudinal corrections, obsolete-policy, poisoned-summary, identity-merge and deletion cases.
4. Measure corrected-fact retention, false-memory reuse, review burden and downstream task value.

Accept: 100% critical corrections retained in applicable later cases; zero unapproved semantic promotion; zero critical poisoned-memory reuse; deletion/expiry respected.

### M3.07 — Implement cognitive runtime and bounded lead-BA loop

1. Implement framework-neutral run state, plan/execute/validate/critic/repair states and terminal reasons.
2. Isolate model/tool calls behind receipt-producing activities; bind parent/child budgets and cancellation.
3. Require completion predicate, unresolved uncertainty, citations and recommended next action.
4. Replay/interrupt/cancel/budget-exhaust/failure test each node boundary.

Accept: 100% runs terminate within declared wall/token/tool/repair budgets; cancellation stops descendants; canonical state is never directly written.

### M3.08 — Implement assertion and evidence extraction

1. Extract atomic claims with modality, scope/time, claimant/authority, confidence method and exact spans.
2. Separate source statement from model inference and unsupported synthesis.
3. Detect span mismatch, invented citation, ambiguous identity and OCR uncertainty.
4. Queue material candidates for professional review and capture corrections.

Accept: span entailment precision ≥0.95 and material-claim recall ≥0.90 on hidden critical set; invented citation rate 0%; every missed critical claim is reviewed as release blocker.

### M3.09 — Implement domain and conflict modelling

1. Propose lexicon/concepts/aliases/entities/rules/process/state/data with scope/time.
2. Detect direct, value, scope, temporal, authority, policy/practice and identity conflicts.
3. Test scope/time reconciliation before contradiction; preserve both evidence sets.
4. Branch, validate, steward-review, release and rollback a sample domain pack.

Accept: critical contradiction recall ≥0.90 and precision ≥0.90; temporal/scope correctness ≥0.95; zero auto-resolution of material conflict.

### M3.10 — Implement strategy/current-state analysis

1. Frame problem versus symptom, outcome baseline and decision boundary.
2. Generate causal/root-cause hypotheses with supporting/challenging evidence and counterfactual tests.
3. Model current capability/process/data/system/pain and known unknowns.
4. Propose future-state outcomes/metrics without converting assumptions into facts.

Accept: expert rubric ≥human-with-generic-LLM baseline and non-inferior to strong RAG overall; no critical causal-overreach failure.

### M3.11 — Implement requirement, scenario, NFR and trace analysis

1. Generate atomic candidate requirements from confirmed intention models, not raw utterance conversion.
2. Add rationale, owner, evidence, scope, priority hypothesis, primary/exception/permission/recovery scenarios and acceptance examples.
3. Cover functional, transition and quality attributes; link outcome, rule, design and test.
4. Lint and critic-check feasibility, ambiguity, consistency, testability and unsupported content.

Accept: ≥90% pass expert quality rubric, ≥95% critical scenario coverage, 100% material facts grounded/unsupported, zero critical permission/recovery omission.

### M3.12 — Implement option, feasibility and decision support

1. Include null/manual/process/configure/buy/build/integrate options as applicable.
2. Assess business, technical, operational, legal, data, AI, security, delivery, cost and reversibility.
3. Expose assumptions, missing evidence, weight disagreements and sensitivity.
4. Produce decision proposal with expiry/revisit trigger; require named human authority.

Accept: no option is recommended with an unassessed critical dimension; sensitivity results are reproducible; system never records human approval implicitly.

### M3.13 — Implement independent critic, sufficiency and repair

1. Define deterministic checks and separate critic prompts/context to reduce correlated agreement.
2. Search for counterexamples, missing stakeholders/scenarios, unsupported claims, contradictions and authority gaps.
3. Repair only within budget; prevent critic/repair loops and preserve original finding.
4. Calculate gate-specific blockers/warnings/coverage/waivers without a magic confidence score.

Accept: critic materially reduces critical defect escape versus single-pass in X03 with acceptable cost/latency; all runs terminate; zero auto-approval.

### M3.14 — Run blinded, repeated real-model qualification

1. Freeze release candidate and execute deterministic suites plus repeated `eval-real` runs on development then hidden sets.
2. Compare human senior BA, human+generic LLM, strong RAG, CollabX single and only proven specialist configurations.
3. Report per-case/slice distributions, confidence intervals, grader agreement, latency/cost/review time and critical failures.
4. Run adversarial safety/authority/injection/exfiltration and deployment fallback tests.

Accept: CollabX single-agent materially beats strong RAG on preregistered critical grounding/conflict/temporal/requirements metrics; it is non-inferior on overall expert quality; zero isolation/authority/external-action failure.

### M3.15 — Implement experience-intent and coding-agent cognitive core

1. Implement `ExperienceIntent` and `BuildContextManifest` compilation from outcomes, users/jobs, scenarios, states, rules/permissions, routes/components, data/contracts, metrics, evidence and repository context.
2. Implement progressive question candidate generation across free-form, MCQ, multi-select, checklist, rank/scale, scenario, evidence request and semantic-diff confirmation with hard rejection and fatigue/stop policy.
3. Implement inspect/clarify/plan/design/patch/validate/critic/repair/present run states, terminal reasons, file/tool/diff budgets and approval-required transitions.
4. Generate typed mock-data/prototype/change-set proposals only; validate exact trace, assumptions, rationale, notices/tips and no direct repository/external side effect.

Accept: ≥95% critical intent constraints captured on hidden tasks; ≥80% questions independently judged decision-relevant; 100% hard-reject cases blocked; every run terminates within budget and produces no unauthorised effect.

### M3.16 — Qualify generation quality and bounded specialist topology

1. Run repeated `eval-real` cases from ambiguous brief through L1–L4 and bounded L5 patch proposal using pinned context, tools, mock-data seeds and repositories.
2. Compare lead-only, lead+independent critic and bounded research/experience/frontend/data/security/accessibility/test specialists; keep task/data/tool budgets comparable and inspect merge conflicts.
3. Score intention/trace coverage, question burden, scenario completeness, patch precision, established-component reuse, code/build/test quality, visual/accessibility/security failures, latency/cost and reviewer comprehension.
4. Red-team repository instruction injection, stale/dirty base, scope escape, test weakening, dependency introduction, fabricated validation and correlated specialist agreement.

Accept: approved topology materially improves critical defect escape or valid-correction yield after latency/cost; 100% material changes traced; zero unrelated-change loss/scope escape/unauthorised effect; no critical result relies solely on an LLM grader.

### M3.17 — Hold intelligence release decision

1. Compile capability manifest, system-card draft, evaluation results, failure catalogue, cost/capacity and rollback.
2. Have independent BA, model-risk and security reviewers inspect hidden failures and reproduce samples.
3. Decide each capability `approve for M4`, `constrain`, `rework`, or `reject`; decide agent topology per task.
4. Pin approved release and disable all unqualified paths.

Accept: signed release decision with no expired/incomplete critical evidence; aggregate performance cannot offset a zero-tolerance failure.

## Success metrics

The task thresholds above govern. Additionally: structured-output valid-after-first-attempt ≥98%; p95 first streamed token follows PERF-05; p95 complete analytical task and cost budgets are preregistered per task; escalation is treated as a valid outcome but must be calibrated—too low suggests overconfidence and too high provides no value. Experience-generation reports critical intent/trace coverage, decision-relevant question rate, question burden, patch precision, component reuse, visual/accessibility/security failure and reviewer comprehension. Report human correction/rejection and critical-failure counts, not only averages.

## Runnable validation contract

```bash
task docs:check
task test:unit test:property test:schema test:retrieval test:context
task test:agent-replay test:agent-budget test:memory test:policy test:security-ai
task eval:preflight --profile eval-real --redact
task eval:run --suite retrieval,extraction,conflict,requirements,memory,agent,experience-codegen,safety --profile eval-real --repeat governed
task eval:compare --baseline strong-rag --candidate collabx-single
task evidence:verify --milestone M3
```

## Exit and handoff

M4 receives only approved capability manifests, limitation/unsupported-use statements, pinned routes/prompts/policies, evaluation results, cost/latency envelopes and rollback switches. Failed or inconclusive capabilities remain feature-disabled and cannot be hidden behind UI polish.
