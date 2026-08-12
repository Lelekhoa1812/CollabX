# End-to-end BA-agent capability map

Status: normative · Baseline: `design-v3` · Effective: 2026-08-12 · Owner: product council

User-facing delivery of these capabilities uses the **Business** and **Build** portals defined in [enterprise frontend experience](../experience/enterprise-frontend-experience.md). Specialised former pages become tabs, drawers and modes inside those portal surfaces.

This is the product boundary an implementation must satisfy. A capability is not complete until its user experience, domain model, authority, failure modes, telemetry and evaluation evidence exist. Capability 18 extends the boundary for brownfield BA on existing ERP/CRM/SAP and custom codebases; see [coding intelligence and review agent](../intelligence/coding-intelligence-and-review-agent.md).

## 1. Portfolio and engagement governance

- Tenant, business unit, client, initiative, program, project and engagement hierarchy.
- Engagement charter: business need, decision, outcome, scope, assumptions, constraints, risk, budget, timeline and authority.
- BA approach selection: predictive, adaptive, discovery, compliance, vendor selection, process improvement or hybrid.
- Work plan, technique selection, information-management plan, communication plan and governance calendar.
- Capability maturity, readiness and AI-use-risk assessment.
- Engagement templates/domain packs with controlled inheritance and upgrade impact.
- Portfolio dependency, duplicated change, shared stakeholder and semantic-conflict detection.
- Benefits hypothesis and post-delivery value measurement.

## 2. Stakeholder intelligence and collaboration

- Stakeholder identification from organisation, process, systems, sources and referrals.
- Role/authority/expertise/impact/influence/interest/availability/incentive topology.
- RACI/RASCI, decision-right and data-owner matrices with effective dates.
- Inclusion/coverage analysis for frontline, dissenting, impacted and low-power groups.
- Consent, recording, accessibility, language, timezone and communication preferences.
- Trust and participation signals based on declared/observed collaboration—not covert psychometrics.
- Invitations, secure contribution links, delegation, absence/escalation and anonymous channels where governed.
- Comments, mentions, action items, decisions, notifications and digest policies.

## 3. Discovery planning and elicitation

- Evidence inventory, source requests and access/authority checks.
- Coverage graph by goal, process, scenario, stakeholder and risk.
- Interview/workshop/observation/focus-group/survey/document/prototype activity plans.
- Adaptive question planning with rationale, expected information gain and bias review.
- Live text/voice sessions, transcription, speaker correction, facilitation and structured extraction.
- Async interview and adaptive survey branching with autosave/resume.
- Workshop agenda, collaborative modelling, breakout synthesis, parking lot and **aligned/divergent/missing perspectives** (never fabricated organisational consensus).
- Critical-incident, laddering, Five Whys, contextual inquiry, teach-back and counterfactual techniques.
- Fatigue, sensitivity, repetition and diminishing-return stop policies.
- Session playback, participant confirmation/correction and unanswered-question routing.

## 4. Enterprise/domain learning

- Source ingestion, classification, OCR/transcription, structure and exact evidence anchors.
- Entity resolution, vocabulary, aliases, acronyms, definitions and ambiguity.
- Concept taxonomy/ontology, relations, examples, counterexamples and scope.
- Business-rule extraction into decision tables/trees, expressions, exceptions and test cases.
- Process/event/state/capability/value-stream/organisation/system/data models.
- Policy, regulation, contract and practice separation; authority hierarchy.
- Temporal truth, jurisdiction/product/segment scope and policy effective dates.
- Candidate quarantine, SME/steward review, semantic release, dependency impact and rollback.
- Conflict/duplicate/gap/anomaly detection and explicit resolution decisions.
- Cross-engagement transfer with privacy, relevance and tenant barriers.

## 5. Strategy and problem analysis

- Current-state environment, capability, operating model, metrics and pain-point analysis.
- Problem framing versus symptom; causal graph/root-cause hypotheses and disconfirming evidence.
- SWOT/PESTLE/market/vendor/benchmark research with source freshness.
- Goal hierarchy, outcomes, KPIs, leading/lagging indicators and measurement feasibility.
- Future-state capabilities, principles, boundaries and transition states.
- Change strategy, dependencies, assumptions, constraints, risks and organisational readiness.
- Business case: options, costs, benefits, sensitivity, opportunity cost and confidence.
- Scope models and explicit out-of-scope/unknown items.

## 6. Requirements and design definition

- Business, stakeholder, solution functional/non-functional and transition requirements.
- User stories, job stories, use cases, scenarios, examples and acceptance criteria.
- Business rules, decision models, state machines, sequence, context and data-flow diagrams.
- Process AS-IS/TO-BE, BPMN projection, exception/recovery/manual fallback.
- Data entities, definitions, lifecycle, CRUD, lineage, quality, ownership and classification.
- Interface/integration contracts, events, mappings, reconciliation and failure handling.
- NFR quality-attribute scenarios: performance, availability, security, privacy, accessibility, usability, scalability, interoperability, maintainability and observability.
- Requirement architecture: decomposition, dependency, derivation, conflict and allocation.
- Verification linting and semantic validation against outcomes and scenarios.

## 7. Optioning, feasibility and decision support

- Generate null/manual/process/configure/buy/build/integrate options.
- Feasibility across business, technical, operational, legal, data, AI, security and delivery dimensions.
- Weighted criteria with sensitivity analysis; expose stakeholder weight disagreement.
- Architecture spikes, vendor assessment, proof of capability and total cost of ownership.
- Benefits, harms, reversibility, switching cost and uncertainty.
- Decision record with alternatives, evidence, assumptions, dissent and expiry/revisit trigger.

## 8. Interactive design and validation

- Journey/service blueprint, information architecture and task-flow modelling.
- Progressive wireframe → stateful prototype → thin-slice progression.
- Live generation/editing with stable element IDs and requirement/scenario links.
- Representative, boundary, exception, permission, accessibility and recovery scenarios.
- Usability task scripts, observations, annotations, variants and preference evidence.
- Design-system constraint, responsive/localised views and realistic synthetic fixtures.
- Prototype feasibility and security disclaimer; sandboxed execution.
- Findings become traced candidates, never automatic approved requirements.

## 9. Prioritisation, planning and release

- MoSCoW, value/risk/effort, cost of delay, WSJF and pairwise approaches with rationale.
- Minimum viable learning/product/release distinction.
- Dependency, sequencing, milestone, capacity, estimate range and critical-path views.
- RAID, decision/action logs and ownership/escalation.
- Release slice by end-to-end outcome/scenario rather than component inventory.
- Readiness gates covering product, requirement, design, security, data, operations and adoption.

## 10. Review, approval and baselining

- Unified review queue by authority and risk.
- Line/element/model-level feedback, suggested change and disposition.
- Conflict-of-interest and separation-of-duties checks.
- Approval, rejection, conditional approval, delegation and expiring waiver.
- Immutable signed baseline bundles; compare versions and affected descendants.
- Publication audience, classification, watermark and export policy.

## 11. Delivery bridge and change control

- Developer/vendor questions with answer evidence and decision authority.
- Work-item export/synchronisation without surrendering canonical meaning.
- Implementation interpretation, deviation and assumption records.
- Test evidence and acceptance-result ingestion.
- Change request, impact traversal, re-estimation, decision and re-baselining.
- Trace from business outcome to requirement/design/code work/test/release, including CodeKnowledgeGraph symbols and review receipts.
- Detect delivery drift, stale requirements and unimplemented critical scenarios.
- Bind delivery diffs to AC-gated review findings (§18); unresolved critical `ac_gap` / `trace_break` blocks baseline and merge when policy requires.

## 12. Solution evaluation and organisational learning

- Instrument outcome/KPI baselines before solution release.
- Measure solution performance, adoption, process, quality and unintended effects.
- Separate solution limitation from enterprise/process/adoption limitation.
- Compare actual cost/value against business-case ranges.
- Recommend enhance, rollback, retire, train, redesign or investigate.
- Feed confirmed outcomes/corrections into domain pack and BA procedure evaluation.
- Close engagement with unresolved obligations, retention and ownership assigned.

## 13. Knowledge and artefact studio

- Evidence/source library and viewer; glossary, graph/table and temporal views.
- Editable goal, capability, stakeholder, process, rule, data, requirement, design and trace models.
- Template DSL and section anchors; DOCX/PDF/XLSX/CSV/JSON/OpenAPI/BPMN/SVG exports.
- Citation/unsupported-claim validator, editorial overrides and accessible visual QA.
- Import/round-trip controls; no lossy import silently overwrites canonical items.

## 14. Agent and model administration

- Model/provider catalogue, routing policy, quotas, cost, residency and fallback.
- Prompt/component, tool, guardrail, schema, workflow and agent release registries.
- Domain-pack steward workspace; memory proposal and conflict queues.
- Dataset/evaluation/experiment registry and release evidence.
- Trace/replay inspector, failure recovery, kill switches and canary controls.
- Per-action autonomy policies and customer-configurable prohibitions.

## 15. Enterprise administration and integrations

- Tenant provisioning/tiering, branding, locale, retention, keys and residency.
- SSO federation, SCIM, group/role mapping, delegated administration and access reviews.
- Connector credentials/consent, scopes, mapping, webhook/polling cursors and reconciliation.
- Microsoft 365, Google Workspace, Jira, Azure DevOps, GitHub, CRM and data/catalog adapters prioritised by pilots.
- Audit export, eDiscovery/legal hold, data-subject access/correction/deletion.
- Usage, entitlements, budgets, billing allocation and service status.

## 16. Enterprise service and customer lifecycle

- Use-case qualification, service tier/contract/responsibility selection and prohibited-use screening.
- Repeatable tenant provisioning, configuration acceptance, data migration, administrator setup and role-based competency training.
- Customer success plans linking adoption, review burden, support, risk, value hypothesis and renewal/retirement decisions.
- Service catalogue, severity/support/on-call/status/maintenance, incident/problem/change and customer communications.
- Supplier/subprocessor inventory, due diligence, outage/deprecation handling, portability and exit.
- Entitlement and immutable usage metering, provider/customer reconciliation, quota/overage/suspension and billing-dispute evidence.
- Data-rights, eDiscovery/legal-hold, canonical export/import, tenant suspension/offboarding and verified disposition.
- System/accessibility/control evidence cards, customer assurance, limitation/change notices and continuous review.

## 17. Experience generation and governed code collaboration

- Progressive intention graph linking outcome, user/job, scenario, state, component, data/API, metric, evidence and decision.
- Mixed progressive Q&A: free-form, MCQ, multi-select, checklist, ranking, scale, scenario task, evidence request and semantic-diff confirmation.
- Journey, IA, wireframe, stateful mock, contract prototype, sandbox thin slice and authorised repository patch fidelity levels.
- Coherent synthetic mock-data packs covering happy, empty, loading, stale, permission, error, exception, boundary, locale and accessibility states.
- Context manifest combining scoped instructions, repository/architecture, journeys/requirements/evidence, code patterns, tools, budgets and validation.
- Coding-agent inspect/clarify/plan/design/patch/validate/critic/repair/present lifecycle with explicit terminal reasons.
- Structured tool gateway and patch receipts; exact-base conflict, unrelated-change preservation, rollback and no implicit commit/push/deploy.
- Polyglot and non-UI change classes (API, business rule, workflow config, integration, migration, role/security) as governed proposals—not frontend-only.
- Bounded research, experience, frontend/polyglot implementer, contract, security, accessibility and testing specialists only when decomposition/ablation proves benefit.
- Integrated prototype viewport, intent/Q&A, route/component/state inspector, change rationale, validation evidence and feedback trace.
- Browser E2E, visual, accessibility, security/privacy, performance, product-study and repository-integrity qualification.
- Hand off to Capability 18 for brownfield archaeology, CodeKnowledgeGraph, AC-gated review and ERP promotion paths.

## 18. Code archaeology, review and multi-agent coding intelligence

- Brownfield discovery: authorised repos and ERP/CRM/SAP config/metadata as evidence sources for as-is process, rules, integrations and permissions.
- Versioned, tenant-ACL’d CodeKnowledgeGraph with hybrid semantic/lexical/structural retrieval and Merkle/content-hash reindex.
- Archaeologist agent emits cited as-is claim proposals; steward/BA promotion only (no silent semantic write).
- Multi-agent coding topology: orchestrator, planner, explorer, archaeologist, implementer, **always-on AC-gated reviewer**, security, tester.
- Review findings typed as bug, security, quality, AC-gap, trace-break, assumption-violation, test-weakening, scope-escape, secret-risk.
- AC coverage panel: each linked acceptance criterion mapped to files/tests changed or explicitly missing.
- Change-class matrix with validation and promotion path (git PR vs ERP transport/CAB dual control).
- Optioning bridge: configure vs customize vs integrate vs process-only fed by archaeology and feasibility.
- SCM review webhooks, CI blocking statuses, exact-base patch hygiene and continuous X10/X11/X12 assurance.
- Explicit non-goals: silent VCS/deploy/transport; unreviewed ERP writes; vendor certification claims; covert overscope scanning.

## Cross-capability quality contract

Every capability supplies: accessible responsive UX; API/event/schema; tenant/authority enforcement; provenance and bitemporal behaviour; audit; content classification/retention; idempotency/concurrency; failure/recovery; observability/SLO; cost quota; internationalisation; import/export; test fixtures; adversarial evaluation; service/support ownership; customer exit; and upgrade/rollback path.
