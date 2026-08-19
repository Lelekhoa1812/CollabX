# BA method engines and sufficiency operations

Status: normative · Baseline: `design-v4` · Effective: 2026-08-19 · Owner: BA practice and product councils · Companions: [ba-operating-model.md](ba-operating-model.md), [artefacts-traceability-and-gates.md](artefacts-traceability-and-gates.md), [decision-intelligence-and-deliberation.md](../research/decision-intelligence-and-deliberation.md)

This document turns named BA techniques and qualitative gates into **computable engines** or explicit intelligence-v1 out-of-scope declarations. Catalogue-only mentions in the capability map are insufficient for implementation.

## Sufficiency model (operational)

Sufficiency is five-way and must not collapse into one score:

| Dimension | Operational definition | Logged fields |
|---|---|---|
| Confidence | Calibrated ordinal band `very_low` / `low` / `medium` / `high` / `very_high` with method (`frequency`, `steward_prior`, `model_calibrated`) | band, method, sample_n |
| Coverage | Fraction of required coverage-graph nodes in state `covered` or `waived` for the named gate | covered/required, missing_ids |
| Consistency | Count of open conflicts typed critical for the gate scope | open_critical_conflicts |
| Decision readiness | All absolute blockers for the gate are empty | blocker_ids |
| Approval | Separate signed human record | approval_id |

### Coverage graph

Every engagement maintains a coverage graph whose node kinds include: stakeholder_class, evidence_source_class, critical_scenario, exception_scenario, nfr_scenario, conflict_seed, process_variant, **code_module** (brownfield), **config_object** (ERP), and outcome_measure.

Node states: `required` → `planned` → `covered` | `waived` | `blocked`. Waivers name control, rationale, compensating control, owner, expiry.

### Question priority (calibrated)

`priority(q) = information_gain × decision_impact × uncertainty × respondent_authority × freshness / (effort + fatigue + sensitivity + bias_risk)`

Feature extractors, priors and logs are first-class:

| Feature | Source | Persistence |
|---|---|---|
| information_gain | coverage-graph expected entropy reduction | logged per candidate |
| decision_impact | linked gate/decision weight | schema |
| uncertainty | assertion confidence + conflict density | schema |
| respondent_authority | stakeholder topology | schema |
| freshness | evidence age vs policy | schema |
| effort / fatigue / sensitivity / bias_risk | technique metadata + session telemetry | schema |

Weights start as steward priors; M4/M5 recalibrate from longitudinal outcomes. The policy is never “whatever the LLM asks next.”

## G0–G7 enumerable blocker catalogue

| Gate | Blocker ID | Condition | Default severity |
|---|---|---|---|
| G0 | `G0.NO_OWNER` | no named decision owner | absolute |
| G0 | `G0.NO_OUTCOME` | no measurable outcome hypothesis | absolute |
| G0 | `G0.NO_PURPOSE` | no permitted data purpose | absolute |
| G1 | `G1.CLASS_ABSENT` | required stakeholder_class uncovered without waiver | absolute |
| G1 | `G1.SOURCE_ABSENT` | required evidence_source_class uncovered without waiver | absolute |
| G1 | `G1.UNSAFE_ELICIT` | hard-reject facilitation policy triggered | absolute |
| G2 | `G2.CRITICAL_CONFLICT` | open critical conflict in problem scope | absolute |
| G2 | `G2.NO_CAUSE` | no confirmed/contested cause model linked | absolute |
| G2 | `G2.NO_OUTCOME_BASE` | outcome measure baseline missing | absolute |
| G3 | `G3.UNASSESSED_RISK` | selected option has unassessed critical feasibility dimension | absolute |
| G3 | `G3.HIDDEN_ASSUMPTION` | comparison omits material assumption | absolute |
| G4 | `G4.SCENARIO_UNTESTED` | primary/exception/a11y/security scenario untested | absolute |
| G5 | `G5.UNTRACED` | material item lacks required trace relation | absolute |
| G5 | `G5.AC_GAP` | open critical AC-gap from review-run | absolute |
| G5 | `G5.NO_OWNER` | missing operational owner | absolute |
| G6 | `G6.TEST_FAIL` | critical test/threat/data/DR/a11y failure | absolute |
| G6 | `G6.INDEX_STALE` | merge/release policy requires fresh code index | absolute when policy on |
| G7 | `G7.NO_MEASURE` | measures unavailable | absolute |
| G7 | `G7.HARM_OPEN` | unresolved participant/customer harm | absolute |

Warnings (non-absolute) include low coverage bands, open non-critical conflicts, steward queue backlog and index lag under SLO. Gate evaluation returns `{blockers[], warnings[], waivers[], coverage}`. Do **not** add a Fusion Score or collapse the five dimensions into one readiness number. `gate.evaluated` carries `{confidence, coverage, consistency, decision_readiness, approval, blockers[], warnings[], waivers[]}`.

## Decision Quality elements (checklist, not a score)

Six diagnostic questions map onto existing blockers. They do not become a seventh sufficiency dimension.

| Element | Diagnostic | Existing blocker / rule |
|---|---|---|
| Frame | Named, scoped, owned? | `G0.NO_OWNER`, `G0.NO_OUTCOME`, `G0.NO_PURPOSE` |
| Alternatives | Null/manual/process/configure/buy/build/integrate present as applicable? | M3.12 option-set rule |
| Information | Material claims cited or `UNSUPPORTED`? Coverage sufficient? | Grounding NFR + coverage graph |
| Values | Criteria, weights and *weight disagreement* visible? | MCDA lite dissent |
| Reasoning | Named method ran; critic searched hidden assumptions? | method-run tag + `G3.HIDDEN_ASSUMPTION` |
| Commitment | Signed human approval on exact versions? | Approval dimension; never inferred |

A decision is blocked by its weakest element. “Good enough” means further work on that element is no longer the best use of stakeholder time.

## Decision Methods port

Implementation is a tagged `/agent-runs` plus knowledge-item proposals. **Do not add `/method-runs` or `/sufficiency`.** Full research rationale: [decision-intelligence-and-deliberation.md](../research/decision-intelligence-and-deliberation.md).

- **Input:** `decision_id`, `gate_id`, `option_item_ids[]`, `criterion_item_ids[]`, `method` enum, `judge_set` (stakeholder IDs + authority weights), `evidence_manifest_id`
- **Output:** `ranking[]` or `labels[]`, `sensitivity[]`, `dissent[]`, `unassessed[]`, `assumptions_open[]`, `stop_reason`, `recommendation` (`none` \| `prefer` \| `split_scope`)
- **Invariant:** `recommendation` never writes Approval. `decide` is a separate `/decisions` command by a named human.
- **Judges:** humans supply scores/weights/pairwise. An LLM may propose a draft score with `UNSUPPORTED` or citation; it may not silently fill a missing critical dimension. Do not average judges into approval.
- **Engine tags:** `mcda_lite` \| `wsjf` \| `moscow` \| `assumption_map` \| `even_swaps` \| `ahp` \| `bwm` \| `catwoe_assist` \| `challenge`

Options, criteria, assumption-map points, dissent and issue-tree nodes reuse existing knowledge-item kinds and relations. No new kinds. Optional TCO / cost / reversibility / risk *fields* may sit on option items; they are not an NPV or Monte Carlo suite.

## Method engines — intelligence v1

Each engine has: input schema, procedure steps, stop rules, output artefacts, evaluation hook.

### Prioritisation — WSJF / Cost of Delay

| Field | Definition |
|---|---|
| `user_business_value` | 1–10 ordinal or monetary proxy |
| `time_criticality` | 1–10 |
| `risk_reduction_opportunity_enablement` | 1–10 |
| `job_size` | effort points or person-days |
| `wsjf` | `(ubv + tc + rr/oe) / job_size` |

Stop: refuse WSJF if any component is missing without an explicit estimate range. Bind outputs to release slices (`T9.06`), not to baseline approval.

### Prioritisation — MoSCoW

| Field | Definition |
|---|---|
| `item_id` | knowledge-item version |
| `label` | `Must` \| `Should` \| `Could` \| `Wont` |
| `capacity_or_timebox` | named capacity constraint |
| `owner` | accountable stakeholder |

Stop / conflict: if the Must set exceeds capacity, emit a typed conflict — do not silently squeeze. Eval: false-Must rate vs later deferrals. MoSCoW labels never become Musts automatically from an MCDA rank.

### Optioning — MCDA lite (default)

Inputs: options including applicable null/manual/process/configure/buy/build/integrate; criteria; per-criterion weight (human or range); scores 0–5 or `unassessed`; optional TCO / reversibility / risk fields.

Steps: validate option set → collect scores per judge → do **not** average judges into approval → show aligned / divergent / missing → compute weighted rank *per judge and as a first-class dissent view* → tornado on ±weight (table, not a chart product).

Stop: any *critical* criterion `unassessed` → `recommendation=none`. Outputs: ranked table, tornado table, dissent record, hidden-assumption list. Eval: M3.12 reproducibility; X14 vs AHP/BWM; automation-bias rate when LLM drafts scores. Gate: G3.

### Engine — Assumption mapping

Highest-value added engine. Attacks untested beliefs (`G3.HIDDEN_ASSUMPTION`), not ranking aesthetics.

Inputs: selected option or problem frame; candidate assumptions from elicitation, critic or archaeology. Categories: desirability, feasibility, viability, adaptability, plus existing `constraint` / `risk` kinds. Plot: importance (decision impact) × evidence strength (`cited` / `inferred` / `none`).

Steps: list “what must be true” → classify → plot → test-first the important+unknown quadrant → link each to an evidence request, prototype test or sandbox test.

Stop: if an important+unknown assumption sits on a critical G3 dimension, refuse recommendation. Outputs: assumption items with valid interval, owner, expiry, test. `G3.HIDDEN_ASSUMPTION` clears only when tested or waived. Eval: recall of seeded hidden assumptions; steward time; invalidation rate after G7. Importance is human-owned; model-scored importance is a warning, not a plot axis.

### Assist — Issue / hypothesis tree

Inputs: root question or hypothesized cause. Steps: decompose to 3–5 branches; MECE lint; star 80/20 branches; attach evidence or `UNSUPPORTED`. Stop: do not invent consensus; divergent branches become conflicts. UI: outline / table, not a graph canvas. Gate: G2 (`G2.NO_CAUSE`). Opportunity–solution outline (outcome → opportunity → option → assumption test) is a *view* over existing items, not a new graph.

### Assist — Even-swaps

When: ≤5 options × ≤6 criteria and stakeholders reject composite scores. Steps: identify dominated rows → propose one explicit trade → drop a now-equal criterion → repeat. Stop: if a proposed swap has no owner or no evidence, park it. Output: eliminated options + recorded trades (the reasoning trail).

### Optional — Bounded AHP / BWM

When: `n ≤ 7`, a named stakeholder asks for pairwise, `method=ahp|bwm`, and X14 has not killed the method. Backend: deterministic eigenvector or BWM min-max; CI/CR or BWM consistency; geometric-mean aggregation if multiple judges **and** dissent still shown; rank-reversal check when an option is added or removed.

Stop: `CR ≥ 0.1` (or BWM equivalent) → do not auto-repair into a pretty matrix; return the most inconsistent pairs to the *human* judge. An LLM may explain inconsistency; it may not silently rewrite judgments to pass CR. Never treat CR as security, validity, readiness or approval. Portfolio-scale pairwise UI remains OOS.

### Strategy — CATWOE / soft systems (assist engine)

Inputs: worldview statements from stakeholders. Outputs: CATWOE table per worldview, tension list, recommended accommodation questions. **Parity with expert SSM facilitation is human-owned** (see augmentation boundary); the engine drafts and structures only.

### Workshop — event storming controller

Inputs: domain events board state. Procedure: orange events → blue commands → yellow aggregates → pink policies → purple hotspots. Stop: do not invent consensus; capture divergent timelines as conflicts. Full live facilitation remains assist+human.

### Process intelligence — conformance

Inputs: process model projection + event-log slice. Outputs: fitness, deviations, bottleneck candidates as **observed** claims. Required for material “as-is process” assertions when an event-log connector is authorised (see process-intelligence posture).

## Explicit intelligence-v1 OOS (with rationale)

| Technique | Rationale | Revisit trigger |
|---|---|---|
| Full AHP pairwise-matrix UI at portfolio scale | High UX burden and false precision; MCDA lite covers pilot | X14 pass **and** a named portfolio requester |
| ANP, TOPSIS, PROMETHEE, RICE/ICE | Method sprawl; overlapping scores | Material evidence that MCDA lite fails a named slice |
| Default MAFP / Nash / MCTS PRD generation | Principle 8; X03/X13; MCTS needs a verifiable reward (patches, not PRDs) | X13/X03 pass **and** a verified reward function |
| IBIS / Dialogue Mapping canvas | PERF-06; maps become unwieldy | Never as a product canvas; typed moves stay in |
| NPV / real options / cost Monte Carlo / PERT | Finance/PM suite creep | After M5 delivery-bridge proof |
| ATAM full architecture evaluation | Architect-led workshops beyond BA loop proof | Architecture-heavy pilot |
| Autonomic Kotter/ADKAR coaching bots | Manipulation/surveillance risk | Only as checklist assist with human change owner |
| DMN executable runtime | After rule extraction is stable | Domain-pack ROI evidence |
| Fusion Score or CR-as-firewall | Collapses five-way sufficiency; CR ≠ validity or security | Never |

Named capability-map bullets for OOS techniques must link here or be removed from “complete” claims.
