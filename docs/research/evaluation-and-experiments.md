# Evaluation and experiment program

Status: research control · Baseline: `design-v4` · Effective: 2026-08-19 · Owner: research and evaluation council

## Research doctrine

Every major feature starts as a falsifiable capability claim. Evaluate the whole socio-technical workflow against credible baselines, not the model in isolation. Separate offline repeatability, simulated stakeholder studies, expert review, and real pilot outcomes.

## Baselines

Compare on identical cases:

1. Human senior BA working with normal tools.
2. Human BA with generic LLM.
3. Strong hybrid RAG assistant.
4. CollabX single-agent configuration.
5. CollabX bounded multi-agent configuration.

Blinded expert graders assess outputs; stakeholder experience is measured separately. Report confidence intervals, failure slices, human time and total cost. Do not hide worse cases behind averages.

## Benchmark corpus

Construct consented, de-identified cases across at least three domains: regulated/high-rule, operational/process-heavy, and product/discovery-heavy. Each case includes source packs, stakeholder roles with private knowledge and incentives, seeded ambiguity/conflicts, temporal policy changes, inaccessible evidence, adversarial documents, completed gold artefacts and later delivery outcomes.

Split by organisation/domain/time to prevent leakage. Maintain public synthetic smoke tests and restricted realistic gold sets. Track model, prompt, tool, ontology, retrieval index and evaluator versions.

## Evaluation matrix

| Capability | Measures | Critical slice |
|---|---|---|
| Elicitation | critical fact recall, question efficiency, leading/bias score, participant burden | tacit exception, reluctant/dissenting stakeholder |
| Domain learning | concept/entity F1, relation/rule accuracy, temporal/scoped validity, correction retention | ambiguous term, policy change |
| Synthesis | contradiction recall/precision, unsupported claim rate, causal overreach | authority disagreement |
| Requirements | expert rubric, scenario/acceptance coverage, defect escape | NFR, failure/recovery, permission |
| Prototyping | task success, comprehension delta, requirement corrections found, accessibility | anchoring/polish bias |
| Retrieval | Recall@k, nDCG, citation precision/recall, ACL leakage | counterevidence and old-version trap |
| Agents/tools | task success, redundant work, tool correctness, loop termination, side effects | partial failure/replay |
| Human factors | trust calibration, control, fatigue, inclusion, correction ease | low-power stakeholder |
| Enterprise frontend | role task success/time/error, status/authority comprehension, evidence access, navigation/context recovery, accessibility, visual coherence | executive decision, time-poor participant, deep BA work |
| Experience/code generation | intent/trace coverage, question relevance/burden, valid correction yield, mock coherence, patch precision, code/visual/a11y/security quality, reviewer effort | vague brief, stale/dirty repository and permission/failure states |
| AC-gated review | AC-gap recall/precision, false approve rate, finding usefulness, latency | planted missing AC, test weakening, correlated specialist agreement |
| Brownfield archaeology | claim precision/recall, citation integrity, steward burden, promotion safety | ambiguous config vs code, temporal policy change, IP-sensitive exports |
| Outcome | rework, cycle time, defects, adoption, realised value | 30/90-day post-release |

LLM-as-judge is a noisy measurement instrument: calibrate against human labels, use multiple order-randomised graders, test bias, and never let it alone approve a release.

## Foundational experiments

An experiment can mature across phases without changing its hypothesis ID. Record each run as `experiment_id`, `stage`, dataset/protocol version and execution ID. R0 produces a preregistered thin feasibility result; the mapped later train produces production-shaped or confirmatory qualification. A feasibility pass authorises investment, not production acceptance.

| ID | Hypothesis | Design | Pass signal | Decision |
|---|---|---|---|---|
| X01 | Adaptive elicitation improves coverage/hour | controlled role-play vs static script and expert BA | non-inferior coverage/quality, lower burden | build/question policy or narrow |
| X02 | Explicit semantic assets beat vector RAG on ambiguity/change | same corpus, three architectures | material temporal/conflict gain at acceptable upkeep | adopt domain pack depth |
| X03 | Multi-agent critique improves critical outputs | single vs specialist+critic ablation | significant defect reduction after cost/latency | enable only winning tasks |
| X04 | Evidence graph improves trust calibration | prose answer vs cited claim view | users distinguish known/unknown better | commit evidence UX |
| X05 | Progressive prototypes elicit hidden needs | interview-only vs linked prototype | more valid corrections without anchoring | choose fidelity policy |
| X06 | PostgreSQL hybrid retrieval meets pilot needs | exact/vector/lexical/graph workload | recall/SLO/isolation at forecast scale | retain or add search/graph engine |
| X07-A | A durable-workflow/cognitive-runtime split is feasible | minimal interrupt/resume, replay, retry and duplicate-signal spike | deterministic replay and no duplicate acknowledged effect | select a provisional runtime and record constraints |
| X07-B | The provisional runtime is production-operable | production-shaped kill/redeploy, history upgrade, cancellation, recovery and operator exercise | no lost state or duplicate effect; upgrade and recovery objectives pass | accept, replace or constrain the runtime split |
| X08 | Memory promotion is safe/useful | longitudinal correction and poisoning suite | high retention, low false-memory rate | tune approval/promotion |
| X09 | A coherent evidence-first frontend improves executive, participant and professional work | role-based tasks against document/dashboard and generic-workbench-or-chat-only baselines | better comprehension/task success/context recovery with no accessibility or burden regression | accept dual-portal surface/design system or simplify further |
| X10 | Progressive intent/Q&A plus governed code tools outperform one-shot/manual experience generation | ambiguous briefs through L1–L5; manual, generic generator and CollabX; stale/hostile repositories; **polyglot and brownfield fixtures** | higher valid-correction/trace/patch quality at lower cycle/review time with zero critical patch/effect failure | qualify fidelity/tool/topology per task |
| X11 | AC-gated review catches requirement gaps better than quality-only bots and matches human review on critical AC misses | seeded PRs/change sets with planted AC-gaps, trace breaks and test weakening; baselines: human reviewer, quality-only bot, CollabX Reviewer | AC-gap recall ≥ feasibility threshold (M1) then confirmatory ≥90% on hidden set; false-positive rate ≤ agreed bound; **zero silent approve**; findings cite AC IDs | enable Reviewer always-on; tune severity/blocking policy |
| X12 | Brownfield archaeology produces cited as-is BA claims that beat unaided SME memory and generic RAG on fixture packs | synthetic/consented ERP-like, CRM-metadata and customization packs; gold process/rule/integration claims; CollabX Archaeologist vs RAG vs unaided notes | claim precision/recall material gain; **100%** material claims cited or UNSUPPORTED; zero silent semantic promotion | adopt archaeology path; size steward burden |
| X13 | For Class C option/conflict cases, classed structured challenge reduces critical defect escape vs critic-only after cost/latency | same gold cases; conditions = single-pass, lead+critic, lead+classed challenge; matched token budget | material drop in hidden-assumption escape and unjustified-recommendation rate at acceptable cost/latency; termination without “zero contradictions = success” | enable classed challenge only on winning Class C tasks; else keep critic-only. A 3-agent JSON demo that “converged” is not a pass. Do not enable MAFP |
| X14 | MCDA lite is non-inferior to bounded AHP/BWM on rank usefulness and cheaper in stakeholder minutes | same option sets; methods = MCDA lite, AHP n≤7, BWM; human judges; optional LLM-drafted scores as a *bias* arm | adopt only methods that beat MCDA lite on a pre-registered metric without raising approval-confusion | default if null: keep MCDA lite; AHP/BWM stay optional or OOS |

X13 and X14 are **specified, not run** in this documentation workstream. They execute only in a later signed M1/M3 programme. X03 remains the specialist-spawn gate; X13 is a sibling protocol, not a replacement.

### Metric dictionary (X13 / X14)

Specify numerator, denominator, exclusions, unit and direction before any run. Do not add a Fusion Score SLI.

| Metric | Numerator | Denominator | Exclusions | Unit / direction |
|---|---|---|---|---|
| Hidden-assumption recall | Seeded material assumptions found by critic or challenge | Seeded material assumptions in the gold case | Assumptions waived in gold | rate; higher better |
| Unjustified-recommendation rate | Runs that emit `recommendation=prefer` while a critical dimension is `unassessed` or an important+unknown assumption is open | Method/challenge runs in the slice | `recommendation=none` as designed | rate; lower better |
| Termination rate | Runs that halt with an enumerable reason (`needs-evidence`, `needs-human`, budget, repetition, no new evidence) | Runs started | Operator cancel outside protocol | rate; higher better when halt is correct |
| Stakeholder minutes | Clock time judges spend scoring, pairwise or even-swaps | Completed method run | Facilitator setup | minutes; lower better at equal quality |
| Rank stability | Rank unchanged under preregistered ±weight perturbation | Perturbation trials | Trials that change the option set | rate; higher better |
| Automation bias (LLM-drafted scores) | Human-accepted LLM scores that contradict cited evidence or gold | LLM-drafted score cells | Cells humans explicitly override | rate; lower better |
| Rank-reversal | Rank of remaining options changes when an option is added or removed | Add/remove trials | Trials that also change weights | rate; lower better |
| Cost per validated decision | Tokens + human minutes + infra attributable to one signed `/decisions` record | Signed decisions in the window | Chat turns that never reached Decide | currency or tokens+minutes; report separately from cost per chat turn |

## Adversarial suite

Include indirect prompt injection, malicious connector descriptions, poisoned memory, colluding sources, invented citations, plausible obsolete policy, scope collision, identity merge, authority spoof, Unicode/schema attacks, huge inputs, tool replay, retry storms, cancellation races, data deletion, cross-tenant nearest neighbours, emotionally coercive questioning, consensus bias, **repository instruction injection**, **stale/dirty base patch**, **index ACL leakage**, **false AC-coverage**, **ERP export IP exfiltration**, **LLM-filled AHP matrix with pretty `CR < 0.1` that contradicts cited evidence**, **averaging-into-approval attempt**, **scope-split presented as contradiction**, **obsolete policy used as current constraint**, **challenge loop with no new evidence**, and **sandbox test cited without receipt hash**.

## Quality gates

R0 research gate: corpus/rubrics, preregistered X01–X06/X09–**X12** thin feasibility results and X07-A evidence exist. X13/X14 are specified in this programme; they are not an R0 execution requirement unless product council authorises a later research pack. R1 foundation: isolation, provenance, bitemporal versioning, contracts, frontend/code-workspace/**code-index** substrate and X07-B production qualification pass. R2 intelligence: confirmatory X02/X03/X06/X08/X10/**X11/X12** evidence and grounded bounded agent loops beat strong baselines on declared critical slices; X13/X14 confirmatory only if authorised. R3 collaboration: confirmatory X01/X04/X05/X09/X10 elicitation, frontend, prototype/code-generation and **review/AC-coverage** studies pass. R4 pilot: end-to-end business, frontend, generated-change, **brownfield archaeology** outcome and safety gates pass. Production autonomy remains action-class-specific.

## Scientific hygiene

Pre-register primary metric and stop criterion; freeze test sets; keep exploratory sets separate; record failures and null results; conduct ablations; repeat stochastic runs; estimate inter-rater agreement; review domain/fairness slices; monitor contamination; and publish an internal model/system card each release.
