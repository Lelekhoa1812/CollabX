# Research sources and evidence notes

Status: reference · Baseline: `design-v4` · Reviewed: 2026-08-19 · Owner: research council

Reviewed 19 August 2026. Prefer primary specifications and vendor documentation for capability facts; vendor features are candidates, not independent proof of suitability. Revalidate before implementation. Decision-method and compliance citations support the research-control memo [decision-intelligence-and-deliberation.md](decision-intelligence-and-deliberation.md); they do not authorise a Fusion Score, default MAFP, or certification claims.

## Business analysis and responsible AI

- [IIBA BABOK knowledge areas and techniques](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/) — competency coverage and elicitation/prototyping techniques.
- [IIBA Business Analysis Standard tasks](https://www.iiba.org/knowledgehub/business-analysis-standard/4-tasks-and-knowledge-areas/introducing-business-analysis-tasks/) — lifecycle benchmark; areas are not a mandated sequence.
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and [Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) — Govern, Map, Measure, Manage and GenAI risks.

## Decision methods, deliberation and elicitation research

- Saaty, *The Analytic Hierarchy Process* — pairwise comparison and consistency ratio (CR). CR measures transitivity of a judge’s pairwise matrix, not validity, security, readiness or approval. Rank-reversal when options are added or removed is a known AHP limitation (Belton & Gear and later reviews).
- Rezaei, [Best-worst multi-criteria decision-making method](https://doi.org/10.1016/j.omega.2014.11.009) (*Omega*, 2015) — BWM reduces pairwise count versus AHP; still a scoring method. CollabX treats BWM as an X14 candidate only, not a v1 default.
- Hammond, Keeney and Raiffa, [Even swaps: a rational method for making trade-offs](https://hbr.org/1998/03/even-swaps-a-rational-method-for-making-trade-offs) — explicit trades without composite scores; CollabX assist for small option×criterion tables when stakeholders reject scoring.
- Spetzler, Winter and Meyer, *Decision Quality* (Strategic Decisions Group) — six elements (frame, alternatives, information, values, reasoning, commitment). Use as diagnostic questions mapped to G0–G7, not a branded seventh score.
- Kunz and Rittel, IBIS; Conklin, *Dialogue Mapping* — typed question/position/argument grammar is useful. Practitioner reports that Compendium-style maps become unwieldy, atomise rhetoric and drop chronology/attribution. CollabX uses IBIS as typed *moves* on existing items, not a product canvas (PERF-06).
- Bland, assumption mapping in *Testing Business Ideas* — importance × evidence 2×2; test the important+unknown quadrant first. Aligns with `G3.HIDDEN_ASSUMPTION` and DFVA (desirability / feasibility / viability / adaptability).
- Torres, *Continuous Discovery Habits* — opportunity–solution tree (outcome → opportunity → option → assumption test) as a *view* over existing items, not a new graph product.
- Jin et al., [ReqElicitGym](https://doi.org/10.48550/arxiv.2602.18306) — interview-competence eval environment (implicit-requirement elicitation). Useful for X01-style interview metrics; it does not evaluate optioning, conflict disposition or signed approval.
- Multi-agent ablation literature (including LangGraph’s own warning that multi-agent is not always needed): under matched compute, extra agents often fail to beat a strong single agent plus critic. X03 remains the specialist gate; a 3-agent JSON demo that “converged” is not a pass.
- Li et al., [SWE-Debate](https://doi.org/10.48550/arxiv.2507.23348) — competitive debate plus MCTS for *issue-resolution patches* on SWE-bench. Scope is code localisation and patch search with a verifiable test reward, not PRD generation. If MCTS is ever tried, confine it to Capability 18.
- NLI / span-entailment: general NLI models (SNLI/MNLI-trained) suffer domain shift on enterprise claims; scope, time and referent identity are not “contradiction.” CollabX uses optional span-entailment as a *candidate* (M3.08 ≥0.95 precision target) then typed checks. Never auto-resolve. Never treat zero contradictions as success.

## Compliance mapping sources (M5 targets, not MVP architecture)

- [ISO/IEC 42001:2023](https://www.iso.org/standard/81230.html) — AI management system. Documentation is not certification.
- [Australia’s AI Ethics Principles](https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-principles) — mapping target for M5 assurance, not a product feature list.
- [Privacy Act 1988](https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act) and [OAIC APP 10](https://www.oaic.gov.au/privacy/australian-privacy-principles/read-the-australian-privacy-principles/australian-privacy-principle-10-quality-of-personal-information) — APP 10 is *personal information* quality (accurate, up-to-date, complete, relevant), not document freshness or bitemporal business evidence.
- [APRA CPG 234](https://www.apra.gov.au/sites/default/files/cpg_234_information_security_june_2019.pdf) and [CPS 234](https://www.apra.gov.au/sites/default/files/cps_234_july_2019_0.pdf) — information-security mapping for APRA-regulated pilots only.

## Agent and workflow runtimes

- [LangGraph persistence](https://langchain-ai.github.io/langgraph/concepts/time-travel/), [memory](https://langchain-ai.github.io/langgraph/agents/memory/), [interrupts](https://langchain-ai.github.io/langgraph/how-tos/human_in_the_loop/breakpoints/) and [multi-agent guidance](https://langchain-ai.github.io/langgraph/tutorials/multi_agent/multi-agent-collaboration/) — candidate cognitive runtime; note replay/idempotency constraints and warning that multi-agent is not always needed.
- [Temporal workflow execution](https://docs.temporal.io/workflow-execution) — candidate durable workflow runtime; must pass local operational spike.
- [CrewAI Flows](https://docs.crewai.com/en/concepts/flows) and [memory](https://docs.crewai.com/en/concepts/memory) — benchmark candidate for event flows, typed state and persistence.
- [Semantic Kernel agent orchestration](https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/agent-orchestration/) — pattern reference; documentation marks orchestration experimental.
- [Pydantic Graph](https://ai.pydantic.dev/graph/) — typed graph alternative; validation does not replace durable workflow semantics.

## Data, contracts, and telemetry

- [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12) — canonical payload/schema dialect.
- [OpenAPI 3.2.0](https://spec.openapis.org/oas/latest.html) — HTTP interface description and security considerations.
- [pgvector](https://github.com/pgvector/pgvector) — exact baseline plus HNSW/IVFFlat trade-offs.
- [W3C PROV-O](https://www.w3.org/TR/prov-o/), [SKOS](https://www.w3.org/TR/skos-reference/) and [SHACL](https://www.w3.org/TR/shacl/) — provenance, vocabularies and graph constraints.
- [OpenTelemetry semantic conventions](https://opentelemetry.io/docs/specs/semconv/) and [GenAI attributes](https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/) — telemetry naming, maturity and sensitive-content cautions.
- [Model Context Protocol authorisation](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization) — connector/tool delegated authorisation baseline.

## Frontend, accessibility and secure generated software

- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) — normative accessibility success criteria and full-page/responsive conformance baseline.
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) — non-normative keyboard/role/state implementation patterns for complex widgets; test with assistive-technology users.
- [Core Web Vitals](https://web.dev/articles/vitals) — current LCP, INP and CLS definitions, p75 assessment and field-versus-lab measurement guidance; revalidate metric lifecycle quarterly.
- [NIST SP 800-218 Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) — secure SDLC practices applied equally to human and agent-generated software.

## AWS enterprise platform

- [AWS account separation](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/aws-account-management-and-separation.html), [Control Tower landing zone](https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/how-does-aws-control-tower-establish-your-multi-account-environment.html) and [multi-Region guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/multi-region-architecture.html) — organisation boundaries, controls and explicit DR drivers.
- [AWS SaaS tenant identity/isolation](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/identity-and-access-management.html) and [multi-tenant authorisation](https://docs.aws.amazon.com/prescriptive-guidance/latest/saas-multitenant-api-access-authorization/introduction.html) — tenant context, PEP/PDP and distinction from authentication.
- [Bedrock data protection](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html), [private endpoints](https://docs.aws.amazon.com/bedrock/latest/userguide/endpoints.html), [Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html), [evaluation](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html) and [invocation logging](https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html) — model-plane controls and operational caveats.
- [Aurora PostgreSQL for pgvector](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.VectorDB.html), [OpenSearch Serverless security](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-security.html), [S3 security](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html) and [ECS blue/green](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-blue-green.html) — storage/search/deployment candidates and constraints.

## What the retired idea research changed

The prior Raedan analysis correctly distinguished explicit enterprise semantics from model memory and highlighted vocabulary, canonical concepts, ontology/knowledge graph, rules, evidence, versioning and hybrid reasoning. CollabX retains that durable semantic-control idea.

It was insufficient as a product architecture because semantic interpretation alone does not establish senior-BA competence. The redesign adds adaptive elicitation, stakeholder authority/incentives, epistemic and temporal state, decision readiness, conflict facilitation, interactive validation, delivery feedback, outcome measurement, bounded agency, rigorous evaluation, and an explicit human operating model. No Raedan-specific product or claim is treated as a CollabX dependency.

## Evidence policy

External documentation proves only that a feature/specification exists. Architecture suitability must be demonstrated through the experiments in [evaluation](evaluation-and-experiments.md). Research notes label observation, inference and hypothesis; cite access date for volatile material; retain quoted text within licence/copyright limits; archive permitted specifications; and log contradictory evidence rather than selecting only confirming sources.
