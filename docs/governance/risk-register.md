# Governance, assumptions, and risk register

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: risk council · Review: quarterly

## Decision rights

Product council owns outcomes/scope; architecture council owns technical standards; domain stewards own semantic releases; data owner owns purpose/retention/access; model-risk owner owns release evidence; business authorities approve interpretations/baselines; incident commander can suspend agents/tools. One person may hold roles in a pilot, but decisions remain separate records.

## Principal risks

| Risk | Early indicator | Control/experiment | Stop or escalation trigger |
|---|---|---|---|
| Fluent but shallow BA behaviour | high output, missed tacit exceptions | expert benchmark, X01 | critical coverage below strong RAG/human baseline |
| Semantic model institutionalises error | repeated consistent wrong outputs | provenance, steward approval, regression/rollback | critical wrong rule reaches baseline |
| Automation bias | confirmations without corrections | uncertainty UX, independent review | trust calibration worsens vs baseline |
| Stakeholder surveillance/manipulation | reduced candour, complaints | consent/minimisation, no covert emotion inference | material participant harm |
| Multi-agent complexity | loops, cost, correlated agreement | ablations, budgets, critic independence | no significant quality gain |
| Retrieval leakage | ACL filter after vector search | pre-filter, RLS, isolation suite | any cross-tenant disclosure |
| Memory poisoning/staleness | old/injected fact reused | quarantine, temporal validity, challenge retrieval | critical false memory persists |
| Vendor/framework lock-in | domain types depend on SDK | ports, export, conformance suite | failed portability exercise |
| Prototype anchoring | users approve polish, not need | low fidelity, competing variants | worse requirement discovery |
| Ontology upkeep exceeds value | growing steward queue/cost | domain-pack ROI metrics | maintenance cost exceeds avoided rework |
| Regulatory/residency failure | unknown subprocessors/location | data maps, regional cells, contracts | unresolved prohibited transfer |
| Evaluation gaming/leakage | test gains without pilot gains | hidden sets, temporal splits, outcome tracking | repeated offline/field divergence |
| Provider/configuration mismatch | local Azure result presented as Bedrock/production qualification | provider profile, manifest and cross-provider conformance | unattributable run or unqualified fallback |
| Operationally incomplete SaaS | features pass but support/offboarding/rights/billing cannot operate | ER readiness assessment and lifecycle rehearsal | critical lifecycle path lacks owner/evidence |
| Identity lifecycle failure | leaver/delegation retains access | SCIM/revocation SLA, access review and negative authority suite | privileged orphaned access |
| Metering or entitlement error | provider/customer usage does not reconcile | immutable usage ledger, quota and billing fixtures | cross-tenant charge or material variance |
| Low adoption or unsafe reliance | low correction/source inspection, shadow processes | training competency, adoption/trust telemetry, customer success | critical over-reliance or sustained target-journey abandonment |
| Supplier concentration/exit failure | model/identity/connector cannot be substituted or exported | conformance ports, exit rehearsal, manual degradation | critical supplier change without viable continuity |
| Research participant harm/bias | dropout/complaint or unrepresented affected group | consent, sampling, adverse-event stop, independent review | material harm or invalid critical sample |
| Executive or simplified assistant UI creates false certainty | polished brief/dashboard hides evidence, dissent or metric limits | semantic status, evidence drill-down, comprehension study | approval based on misleading status/metric |
| Generated prototype anchors intent | visual polish drives agreement before task evidence | fidelity ladder, competing variants, X05 and explicit assumptions | valid correction yield falls or anchoring harm rises |
| Coding agent corrupts customer work | broad/stale patch overwrites unrelated change | exact-base patch, dirty-state preservation, diff/rollback and repository CI | any unrelated change loss or scope escape |
| Generated code supply-chain/exfiltration | dependency, script or preview leaks data/credentials | pinned sandbox, no ambient credentials/network, scans and CSP | sandbox escape, unapproved network or secret exposure |
| Multi-agent code conflict | specialists overlap or manufacture agreement | bounded scope, merge ownership, conflict reducer and ablation | unresolved overlapping semantic/code patch |
| ERP/CRM IP leakage via archaeology | exports or index chunks leave authorised boundary | purpose ACL, redaction, egress allowlist, retention | any unauthorised IP/PII disclosure |
| False AC-coverage | review marks ACs covered without tests/files | AC map requires symbol/test anchors; X11 | critical AC marked covered without evidence |
| Index staleness | review/patch against obsolete graph | freshness SLO, `index_stale` block policy | merge on stale index when policy forbids |
| Transport/CAB bypass | agent or user promotes ERP change without dual control | change-class matrix, distinct transport connector, dual authority | any unauthorised transport/deploy |
| Review automation bias | humans rubber-stamp Reviewer output | uncertainty UX, waive reason codes, calibration study | critical defect merged with only AI approve |

## Assumption ledger

| Assumption | Confidence | Test |
|---|---:|---|
| Organisations will grant enough governed evidence access | low | discovery interviews and connector pilot |
| SMEs will review semantic proposals | medium-low | measure review burden/latency |
| BA work can be decomposed without losing relationships | medium | X01/X03 qualitative analysis |
| PostgreSQL suffices through pilot | medium-high | X06 load/recall tests |
| Interactive prototypes improve intent clarity | medium | X05 |
| AC-gated review improves requirement conformance of patches | medium | X11 |
| Archaeology from code/config beats unaided SME as-is | medium-low | X12 |
| Buyers value traceability enough to tolerate governance | medium | willingness-to-pay/usability study |
| Domain learning transfers between engagements safely | low | held-out project transfer study |
| Current Azure deployment results predict the selected AWS production route | low | replay provider-neutral release suite against Bedrock; do not assume equivalence |
| Customers can operate required stewardship/support controls | low | M5 onboarding, service exercise and measured burden |
| Usage-based costs can be attributed and priced sustainably | low | M5 provider reconciliation and unit-economics study |

## Change control

Changes to schemas, ontology, prompts, models, tools, policies, workflows and evaluation rubrics create a proposal with rationale, impact graph, migration, tests, approval class, rollout and rollback. Emergency changes expire and require retrospective review. Baselines are never edited; approved change creates a new baseline and traceable supersession.

## Incident classes

Security/privacy breach, unsafe or discriminatory output, unauthorised external action, corrupted semantic release, unavailable workflow, model/provider drift, and erroneous published baseline have separate containment playbooks. Universal first actions: stop affected capability, preserve non-sensitive evidence, revoke credentials if relevant, identify tenants/runs/versions, communicate through owner, restore known-good configuration, and create regression evidence before re-enable.

## Research ethics

Participants know when AI is used, what is recorded, how it will affect decisions, and how to withdraw where possible. Synthetic personas cannot establish harm absence. Do not infer protected or psychological characteristics for persuasion. Preserve dissent and minority needs. Escalate material decisions rather than fabricating consensus.
