# Documentation control and precedence

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: product and architecture councils

This registry determines which document governs when two statements overlap. File modification time, detail level, or confident wording does not establish authority.

## Precedence

1. Applicable law, customer contract and approved organisational policy.
2. Accepted ADRs and approved, versioned machine-readable contracts once they exist.
3. Normative design documents listed here.
4. Governed delivery specifications and task dossiers.
5. Research evidence and decision candidates.
6. Historical audit/reset records.

Within one level, the more specific document governs only within its declared scope. A specific conflict is resolved through a decision record; implementation agents must not choose silently. A newer date does not automatically supersede an approved decision.

## Status vocabulary

| Status | Meaning |
|---|---|
| Normative | Governs implementation unless a higher-precedence decision supersedes it |
| Provisional normative | Governs the initial spike/build, but names an evidence gate before production acceptance |
| Delivery control | Governs sequencing, task execution and evidence rather than product semantics |
| Research control | Governs experiments/evaluation; conclusions remain hypotheses until evidence passes |
| Reference | Supporting sources or explanation; cannot override normative design |
| Historical | Immutable point-in-time record; never describes current state unless re-audited |

## Canonical registry

| Scope | Document | Status | Owns / does not own |
|---|---|---|---|
| Entry point | `../../README.md` | Reference | project orientation; no detailed decisions |
| Corpus map | `../README.md` | Normative | navigation, vocabulary, documentation rules |
| Document authority | `document-control.md` | Normative | status vocabulary, precedence, registry and conflict process |
| Product thesis | `../product/vision.md` | Normative | outcomes, principles, non-goals and falsification |
| BA practice | `../product/ba-operating-model.md` | Normative | engagement lifecycle and human authority |
| Capability boundary | `../product/end-to-end-capability-map.md` | Normative | full product capability scope |
| Artefacts/gates | `../product/artefacts-traceability-and-gates.md` | Normative | artefacts, relations, gates, baselines and change |
| Facilitation | `../product/conversation-survey-and-facilitation.md` | Normative | interview/survey/session behaviour |
| Experience | `../experience/discovery-and-prototyping.md` | Normative | discovery/prototype interaction contract |
| Information architecture | `../experience/information-architecture-and-design-system.md` | Normative | navigation, design system and trust UX |
| Enterprise frontend | `../experience/enterprise-frontend-experience.md` | Normative | complete frontend page surface, visual/interaction quality, role journeys and UX gates |
| Logical architecture | `../architecture/system-architecture.md` | Normative | provider-neutral boundaries and runtime separation |
| Data/knowledge | `../architecture/data-and-knowledge-model.md` | Normative | source of truth, time, provenance and semantic lifecycle |
| Integration | `../architecture/integration-and-interoperability.md` | Normative | connector, MCP and synchronisation boundaries |
| AWS platform | `../architecture/aws-platform.md` | Provisional normative | initial AWS physical mapping; open choices defer to decision registry |
| AWS operations | `../architecture/aws-security-resilience-operations.md` | Normative | AWS security, availability, DR, SRE and FinOps |
| Agents/memory/RAG | `../intelligence/agents-memory-rag.md` | Normative | cognitive topology, memory, context, retrieval and tools |
| Model/agent lifecycle | `../intelligence/model-agent-and-evaluation-lifecycle.md` | Normative | release unit, routing, guards, evaluation and drift |
| Experience/coding agent | `../intelligence/experience-generation-and-coding-agent.md` | Normative | progressive UI generation, mock data, coding-agent context/state/tools/patches and qualification |
| Coding intelligence / review | `../intelligence/coding-intelligence-and-review-agent.md` | Normative | CodeKnowledgeGraph, reindex, archaeology, multi-agent coding, AC-gated review, ERP change classes |
| BA method engines / sufficiency | `../product/ba-method-engines-and-sufficiency.md` | Normative | coverage graph, G0–G7 blocker catalogue, technique engines and OOS |
| Augmentation boundary | `../product/augmentation-boundary.md` | Normative | parity / assist / human-owned / prohibited task classes |
| Process intelligence posture | `../product/process-intelligence-posture.md` | Normative | process-mining and conformance grounding requirements |
| Implementation structure | `../engineering/implementation-blueprint.md` | Normative | repository, bounded contexts and coding boundaries |
| API/events/states | `../engineering/api-event-and-state-catalogue.md` | Normative | interface style, envelopes and state vocabularies |
| Engineering controls | `../engineering/contracts-observability-security.md` | Normative | contracts, prompts, telemetry and threat controls |
| NFRs/SLOs | `../engineering/non-functional-requirements.md` | Normative | sole numeric service-objective catalogue |
| Verification | `../engineering/verification-strategy.md` | Normative | test/evaluation/release evidence |
| Model/environment profiles | `../engineering/model-provider-and-environment-profiles.md` | Normative | real-model configuration, provider boundaries and reproducibility |
| Enterprise controls | `enterprise-control-framework.md` | Normative | governance, assurance and AI risk classes |
| Enterprise readiness | `enterprise-readiness-model.md` | Normative | customer/service lifecycle, operational readiness, support, commercial and adoption controls |
| Risk register | `risk-register.md` | Normative | active risks and assumptions; review quarterly |
| Technology choices | `../research/technology-decisions.md` | Provisional normative | decision candidates/status/gates; accepted ADR later supersedes row |
| Evaluation | `../research/evaluation-and-experiments.md` | Research control | experiment IDs, methods and release gates |
| BA/coding gap review | `../research/ba-and-coding-intelligence-gap-review.md` | Research control | BA scorecard, coding competitive synthesis, GAP-27 |
| Roadmap | `../delivery/roadmap.md` | Delivery control | R0–R5 outcome phases and gates |
| Milestones | `../milestones/milestone_1.md` through `milestone_5.md` | Delivery control | executable five-stage tasks, acceptance, metrics and evidence commands |
| Portfolio backlog | `../delivery/backlog.md` | Delivery control | 53 portfolio epics mapped to trains |
| Build sequence | `../delivery/build-sequence-and-dependency-graph.md` | Delivery control | 173 implementation work packages and dependency order |
| AI delivery | `../delivery/ai-implementation-playbook.md` | Delivery control | mandatory task execution protocol |
| Sources | `../research/sources.md` | Reference | research provenance; volatile sources revalidate quarterly |
| Gap audit | `../research/gap-and-coverage-audit.md` | Historical | `design-v2` gap snapshot; active decisions live in technology registry |
| Enterprise gap assessment | `../research/enterprise-gap-assessment.md` | Research control | current enterprise gap findings, dispositions and milestone crosswalk |
| Completion audit | `../research/completion-audit.md` | Historical | `design-v2` verification snapshot only |
| Reset manifest | `reset-manifest.md` | Historical | destructive-reset record and recovery note |

## Required document header

New normative, delivery, research-control and provisional documents include: `Status`, `Baseline/version`, `Effective/reviewed date`, `Owner`, and `Supersedes` where relevant. Historical documents include an audit/event date and explicitly state that they are not continuously current.

## Change process

1. Open a change proposal naming affected documents, decisions, contracts and task mappings.
2. Identify contradictions using this precedence model.
3. Update the authoritative document first; update summaries/references in the same change.
4. Add or revise an ADR when an accepted architectural decision changes.
5. Run link, identifier, task-count, terminology and Mermaid checks.
6. Record reviewer, effective baseline and supersession.

## Conflict protocol for implementation agents

Stop the affected implementation, cite both statements, determine their registry status and request a decision if precedence does not resolve meaning. Do not average targets, select the easier control, or infer acceptance from AWS/framework-specific examples.
