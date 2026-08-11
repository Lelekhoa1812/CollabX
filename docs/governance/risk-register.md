# Governance, assumptions, and risk register

Status: normative · Baseline: `design-v2` · Effective: 2026-08-11 · Owner: risk council · Review: quarterly

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

## Assumption ledger

| Assumption | Confidence | Test |
|---|---:|---|
| Organisations will grant enough governed evidence access | low | discovery interviews and connector pilot |
| SMEs will review semantic proposals | medium-low | measure review burden/latency |
| BA work can be decomposed without losing relationships | medium | X01/X03 qualitative analysis |
| PostgreSQL suffices through pilot | medium-high | X06 load/recall tests |
| Interactive prototypes improve intent clarity | medium | X05 |
| Buyers value traceability enough to tolerate governance | medium | willingness-to-pay/usability study |
| Domain learning transfers between engagements safely | low | held-out project transfer study |

## Change control

Changes to schemas, ontology, prompts, models, tools, policies, workflows and evaluation rubrics create a proposal with rationale, impact graph, migration, tests, approval class, rollout and rollback. Emergency changes expire and require retrospective review. Baselines are never edited; approved change creates a new baseline and traceable supersession.

## Incident classes

Security/privacy breach, unsafe or discriminatory output, unauthorised external action, corrupted semantic release, unavailable workflow, model/provider drift, and erroneous published baseline have separate containment playbooks. Universal first actions: stop affected capability, preserve non-sensitive evidence, revoke credentials if relevant, identify tenants/runs/versions, communicate through owner, restore known-good configuration, and create regression evidence before re-enable.

## Research ethics

Participants know when AI is used, what is recorded, how it will affect decisions, and how to withdraw where possible. Synthetic personas cannot establish harm absence. Do not infer protected or psychological characteristics for persuasion. Preserve dissent and minority needs. Escalate material decisions rather than fabricating consensus.
