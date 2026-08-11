# Research sources and evidence notes

Status: reference · Baseline: `design-v2` · Reviewed: 2026-08-11 · Owner: research council

Reviewed 11 August 2026. Prefer primary specifications and vendor documentation for capability facts; vendor features are candidates, not independent proof of suitability. Revalidate before implementation.

## Business analysis and responsible AI

- [IIBA BABOK knowledge areas and techniques](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/) — competency coverage and elicitation/prototyping techniques.
- [IIBA Business Analysis Standard tasks](https://www.iiba.org/knowledgehub/business-analysis-standard/4-tasks-and-knowledge-areas/introducing-business-analysis-tasks/) — lifecycle benchmark; areas are not a mandated sequence.
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and [Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) — Govern, Map, Measure, Manage and GenAI risks.

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
