# BA method engines and sufficiency operations

Status: normative · Baseline: `design-v3` · Effective: 2026-08-12 · Owner: BA practice and product councils · Companions: [ba-operating-model.md](ba-operating-model.md), [artefacts-traceability-and-gates.md](artefacts-traceability-and-gates.md)

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

Warnings (non-absolute) include low coverage bands, open non-critical conflicts, steward queue backlog and index lag under SLO. Gate evaluation returns `{blockers[], warnings[], waivers[], coverage}`.

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

Stop: refuse WSJF if any component missing without explicit estimate range. MoSCoW remains a separate labelling engine with conflict detection when Must items exceed capacity.

### Optioning — MCDA lite

Inputs: option set (must include null/manual/process/configure/buy/build/integrate as applicable), criteria with weights, scores 0–5, sensitivity (±weight). Outputs: ranked options, tornado of weight sensitivity, dissent record. Stop: no recommendation if a critical dimension is `unassessed`.

### Strategy — CATWOE / soft systems (assist engine)

Inputs: worldview statements from stakeholders. Outputs: CATWOE table per worldview, tension list, recommended accommodation questions. **Parity with expert SSM facilitation is human-owned** (see augmentation boundary); the engine drafts and structures only.

### Workshop — event storming controller

Inputs: domain events board state. Procedure: orange events → blue commands → yellow aggregates → pink policies → purple hotspots. Stop: do not invent consensus; capture divergent timelines as conflicts. Full live facilitation remains assist+human.

### Process intelligence — conformance

Inputs: process model projection + event-log slice. Outputs: fitness, deviations, bottleneck candidates as **observed** claims. Required for material “as-is process” assertions when an event-log connector is authorised (see process-intelligence posture).

## Explicit intelligence-v1 OOS (with rationale)

| Technique | Rationale | Revisit trigger |
|---|---|---|
| Full AHP pairwise pairwise-matrix UI at portfolio scale | High UX burden; MCDA lite covers pilot | Portfolio pilot requests |
| ATAM full architecture evaluation | Requires architect-led workshops beyond BA loop proof | Architecture-heavy pilot |
| PERT probabilistic scheduling | PM-suite risk; BA loop first | After M5 delivery bridge proof |
| Autonomic Kotter/ADKAR coaching bots | Manipulation/surveillance risk | Only as checklist assist with human change owner |

Named capability-map bullets for OOS techniques must link here or be removed from “complete” claims.
