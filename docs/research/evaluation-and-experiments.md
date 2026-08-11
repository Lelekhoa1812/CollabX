# Evaluation and experiment program

Status: research control · Baseline: `design-v2` · Effective: 2026-08-11 · Owner: research and evaluation council

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

## Adversarial suite

Include indirect prompt injection, malicious connector descriptions, poisoned memory, colluding sources, invented citations, plausible obsolete policy, scope collision, identity merge, authority spoof, Unicode/schema attacks, huge inputs, tool replay, retry storms, cancellation races, data deletion, cross-tenant nearest neighbours, emotionally coercive questioning and consensus bias.

## Quality gates

R0 research gate: corpus/rubrics, preregistered X01–X06 thin feasibility results and X07-A evidence exist. R1 foundation: isolation, provenance, bitemporal versioning, contracts and X07-B production qualification pass. R2 intelligence: confirmatory X02/X03/X06/X08 evidence and a grounded single-agent loop beat the strong RAG baseline on their declared critical slices. R3 collaboration: confirmatory X01/X04/X05 elicitation and prototype studies pass. R4 pilot: end-to-end business outcome and safety gates pass. Production autonomy remains action-class-specific.

## Scientific hygiene

Pre-register primary metric and stop criterion; freeze test sets; keep exploratory sets separate; record failures and null results; conduct ablations; repeat stochastic runs; estimate inter-rater agreement; review domain/fairness slices; monitor contamination; and publish an internal model/system card each release.
