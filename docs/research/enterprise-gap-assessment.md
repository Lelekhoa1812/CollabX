# Enterprise gap and improvement assessment

Status: research control · Baseline assessed: `design-v2` · Target baseline: `design-v3` · Assessed: 2026-08-11 · Owner: business analysis and architecture councils

## Assessment purpose and method

This assessment reviews the complete documentation corpus as a prospective enterprise product, operating service and governed AI system. It tests six questions for every capability: who receives value; who has authority; what data and state exist; how failure/recovery works; what evidence proves success; and who operates/supports it over its lifecycle.

The design-v2 corpus is unusually strong in epistemic modelling, BA practice, provenance, bounded agency, tenant isolation and AWS architecture. Its principal weakness is not missing feature ambition; it is that several enterprise operating obligations are distributed, implicit or measured only by aspirational targets. The empty milestone documents also prevented an implementation team from producing auditable incremental evidence.

## Findings and dispositions

| ID | Severity | Gap in design-v2 | Enterprise consequence | design-v3 disposition / owner |
|---|---|---|---|---|
| GAP-01 | critical | Five milestone files were empty | no executable scope, entry/exit gate or evidence chain | milestone 1–5 plans; delivery council |
| GAP-02 | high | configured Azure OpenAI profile conflicted with Bedrock-first production prose | tests could run against an undeclared provider or falsely qualify production | [provider/environment profiles](../engineering/model-provider-and-environment-profiles.md); AI platform |
| GAP-03 | high | success targets lacked a complete metric dictionary | teams could choose favourable denominators/windows and declare success | metric contracts in milestones and NFR additions; product/evaluation |
| GAP-04 | high | service/customer lifecycle was dispersed across capabilities | weak onboarding, support, renewal, suspension and offboarding | [enterprise readiness model](../governance/enterprise-readiness-model.md); service owner |
| GAP-05 | high | support/ITSM severity, incident communication and problem management were implicit | platform could be technically resilient but operationally unsupported | service management contract and milestone operations exercises; SRE/service desk |
| GAP-06 | high | identity architecture did not fully define joiner/mover/leaver, recovery and tenant-admin abuse | orphaned access and privilege persistence | enterprise readiness ER-03 and milestone authority matrices; identity owner |
| GAP-07 | high | privacy rights, records/eDiscovery and derivative disposition lacked end-to-end service workflows | inability to meet customer/legal operations despite storage controls | enterprise readiness privacy/records workflows; privacy/data owners |
| GAP-08 | high | AI evaluation described layers but not a real-provider preflight/reproducibility contract | non-repeatable or fake-only model claims | provider profiles and milestone real-model gates; model-risk owner |
| GAP-09 | high | pilot-to-production combined adoption, operations and commercial proof loosely | “successful demo” could bypass service readiness | M5 staged pilot, production and scale decisions; release authority |
| GAP-10 | medium | entitlements, metering, billing allocation and provider invoice reconciliation were only capability bullets | leakage, bill disputes and unsustainable margins | enterprise commercial integrity controls; finance/service owner |
| GAP-11 | medium | organisation/change adoption and user competency were under-specified | low adoption, unsafe use and over-reliance | adoption/training contract and pilot metrics; customer success |
| GAP-12 | medium | supplier management did not define exit and substitution proof per critical dependency | hidden concentration and continuity risk | ER-09/ER-15 plus provider/connector conformance; procurement/architecture |
| GAP-13 | medium | feature and control ownership lacked a single RACI/evidence status model | controls might exist without an operating owner | readiness states and milestone accountable roles; service owner |
| GAP-14 | medium | accessibility targets lacked release sampling and defect policy in milestone execution | late discovery and exclusion | each milestone includes automated/manual/affected-user gates; design council |
| GAP-15 | medium | data migration/import/round-trip and customer exit had no timed gate | vendor lock-in or lossy onboarding/offboarding | portability/exit gate in M2 and M5; data/architecture |
| GAP-16 | medium | model/provider cost, retry and evaluation cost attribution were not separated | distorted unit economics | usage classification and per-capability budgets; FinOps/model platform |
| GAP-17 | medium | human research quality lacked recruitment balance, dropout and adverse-event operations | biased validation or participant harm | M1/M4/M5 research protocols; research/privacy |
| GAP-18 | medium | roadmap phases and requested five-milestone delivery view were unmapped | competing delivery narratives | milestone-to-roadmap crosswalk below; delivery council |
| GAP-19 | medium | control assurance stated frameworks but not certification scope boundaries per release | compliance theatre or overclaiming | evidence state model, qualified assessor/legal review; risk council |
| GAP-20 | medium | documentation integrity checks were point-in-time claims without a runnable repository harness | drift could go undetected | each milestone requires docs lint/link/ID/secret checks; engineering |
| GAP-21 | medium | business continuity focused on technology more than people/provider/support unavailability | recovery may fail during real disruption | M5 continuity exercises across staff, IdP, model, connector and Region; service owner |
| GAP-22 | medium | model behaviour toward minors, employee/HR and regulated decision contexts was not explicitly routed | prohibited/consequential use ambiguity | use-case intake and AI class gate in M1/M5; model-risk/legal |
| GAP-23 | low | sustainability was not linked to workload baselines or procurement decisions | unverifiable environmental claims | evidence-only measurement; FinOps/procurement |
| GAP-24 | low | historical reset/completion documents describe their date correctly but can be mistaken for current repository state | false assumption that config cannot exist | document-control registry remains authoritative; README links current controls |
| GAP-25 | critical | frontend coverage named navigation/components but not a complete page surface, visual character, role journeys or high measurable UX bar | technically complete product could remain incoherent, dense or executive/participant-hostile | [enterprise frontend specification](../experience/enterprise-frontend-experience.md), X09 and expanded milestones; design council |
| GAP-26 | critical | prototype generation did not define progressive mixed-format intent discovery, coherent mock data or production-grade coding-agent context/tool/patch/validation semantics | unsafe one-shot mockups or broad repository mutation could masquerade as collaborative design | [experience generation and coding agent](../intelligence/experience-generation-and-coding-agent.md), X10 and expanded T/milestone tasks; product/AI/engineering councils |
| GAP-27 | critical | no brownfield archaeology, CodeKnowledgeGraph/reindex, AC-gated review agent, or ERP/CRM/SAP process/config evidence path | CollabX could not BA existing enterprise systems or govern code change against requirements | [coding intelligence and review agent](../intelligence/coding-intelligence-and-review-agent.md), [gap review](ba-and-coding-intelligence-gap-review.md), X11/X12, Capability 18, milestone M1–M5; AI/architecture councils |

## Milestone-to-roadmap crosswalk

The five milestone plans are the executable delivery view; the roadmap remains the outcome/evidence strategy.

| Milestone | Roadmap/train coverage | Decision produced |
|---|---|---|
| M1 | R0 / T0 | invest, narrow, pivot or stop based on problem, benchmark, risk and architecture evidence |
| M2 | R1 / T1–T4 | accept or reject the trusted enterprise foundation and durable runtime |
| M3 | R2 / T5–T6 | qualify or reject the grounded single-agent BA intelligence core |
| M4 | R3 plus baseline-ready T9.01–T9.04 / T7–T8 | qualify collaborative elicitation, prototype validation and governed baselining |
| M5 | R4–R5 / remaining T9, T10–T11 | pilot, production, scale or stop each capability/action class independently |

M5 is deliberately staged: pilot acceptance does not imply production or scale acceptance.

## Coverage rule for implementation

Every milestone task must name upstream documents, accountable owner, dependencies, steps, outputs, deterministic verification, real-model verification where relevant, acceptance threshold, failure/rollback and evidence location. A task cannot be closed by a narrative statement. A skipped task requires an approved applicability decision and cannot conceal a release blocker.

## Residual hypotheses—not documentation gaps

The following remain evidence-driven decisions: commercial willingness to pay; senior-BA benchmark superiority; domain-pack maintenance economics; model/provider route; durable workflow implementation; policy engine; filtered retrieval scale; multi-agent implementer value (Reviewer is always-on read-only by design); cross-domain transfer; active multi-Region topology; autonomy by action; ERP adapter TCO per pilot stack; AC-gated review field precision/recall; process-mining connector yield vs steward burden. The milestone plans make these falsifiable and assign stop decisions rather than assuming success.
