# Technology decision candidate registry

Status: provisional normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: architecture council

These rows govern initial spikes, not procurement or production acceptance. `Candidate` means implementation may explore behind the named port; `Provisional` permits foundation work within the stated limits; `Accepted` requires an ADR and evidence. An accepted ADR supersedes its row through the document-control registry.

## Decision status

| ID | Concern | Current candidate | Alternatives | Status | Evidence gate / reversal trigger |
|---|---|---|---|---|---|
| TD-001 | Languages | Python for intelligence/platform; TypeScript/React for web | .NET | Candidate | T0 team/tooling spike; reverse if enterprise integration/team evidence dominates |
| TD-002 | HTTP API | ASGI/FastAPI-style adapter + OpenAPI 3.2 | .NET, Node | Candidate | security, streaming, contract-generation and load spike |
| TD-003 | Contracts | JSON Schema 2020-12 + Pydantic adapters | Protobuf for selected RPC | Provisional | compatibility/code-generation suite; introduce Protobuf only for measured RPC need |
| TD-004 | Transactional source | PostgreSQL | distributed SQL | Provisional | bitemporal/RLS/load evidence; MongoDB rejected absent a canonical access pattern |
| TD-005 | Vector retrieval | pgvector exact, then HNSW | OpenSearch, Qdrant | Provisional | X06 filtered recall/latency/scale; non-AWS service requires data-flow/residency decision |
| TD-006 | Graph | relational edge model/projection | Neptune, Neo4j, RDF store | Provisional | extract only after multi-hop workload, isolation and TCO evidence |
| TD-007 | Object evidence | S3 through an object-store port | alternate S3-compatible store for portability | Provisional | immutability, retention, residency and export conformance |
| TD-008 | Durable workflow | Temporal-compatible port | Camunda, AWS-native orchestration | Candidate | T0.10/X07-A selects provisional deployment; X07-B replay/operations qualifies production |
| TD-009 | Cognitive graph | LangGraph behind `CognitiveRuntime` | Pydantic Graph, Semantic Kernel, custom | Candidate | checkpoint/interrupt/subgraph conformance and evaluation |
| TD-010 | Agent topology | one lead agent plus typed specialists when proven | CrewAI/SK orchestration adapters | Candidate | X03 ablation; specialists enabled only for statistically/materially better tasks |
| TD-011 | Messaging | SQS/EventBridge behind ports + transactional outbox | Kafka | Provisional | ordering, replay, throughput and operational evidence |
| TD-012 | Telemetry | OpenTelemetry/ADOT | vendor SDK supplement | Provisional | correlation, redaction, overhead and export portability |
| TD-013 | Policy decision point | engine-neutral PDP interface + PostgreSQL RLS | Amazon Verified Permissions, embedded Cedar, OPA | Candidate | T2.06 compares semantics, latency, policy lifecycle, local testing, quotas and tenant models |
| TD-014 | UI | React + accessible design system + canvas adapters | server-rendered/hybrid | Candidate | X09 page/journey coherence, bundle/Core Web Vitals, device, accessibility and collaborative-editing evidence |
| TD-015 | Rendering/code workspace | isolated ephemeral container/worktree with separate preview origin, exact-base patch tools and no ambient credentials/network | managed sandbox/development service | Provisional | X10 hostile-input/path/base/dirty-state, dependency, network/secret isolation, startup and cost tests |
| TD-016 | Application topology | modular monolith + isolated workers | extracted services/serverless | Provisional | extract only for measured scale, fault, ownership or release-frequency pressure |
| TD-017 | AWS compute | ECS Fargate across three AZs | EKS, Lambda, EC2 ECS | Candidate | T0.09/T1 operational, streaming, sandbox, scale and cost spike |
| TD-018 | AWS database | Aurora PostgreSQL provisioned + RDS Proxy | RDS PostgreSQL, future Aurora modes | Candidate | X06 plus failover/extension/backup/DR/connection evidence |
| TD-019 | AWS edge | CloudFront + WAF + ALB | API Gateway/AppSync for selected APIs | Candidate | streaming/WebSocket, protection, latency and cost tests |
| TD-020 | AWS model plane | Bedrock behind owned model gateway | SageMaker or approved external provider adapter | Candidate | model/domain/Region/safety/quota/cost evaluation each release |
| TD-021 | AWS tenancy | regional pooled cells with bridge/silo tiers | silo-only | Candidate | isolation, compliance, noisy-neighbour and unit-economics evidence |
| TD-022 | AWS PDP backend | TD-013 interface; AVP is favoured managed candidate | embedded Cedar, OPA | Candidate | same T2.06 comparison; AWS specificity cannot bypass TD-013 |
| TD-023 | AWS delivery | CDK/CloudFormation + signed ECS blue/green | Terraform, EKS GitOps | Candidate | team skill, plan/test, drift, rollback and portability spike |
| TD-024 | Customer identity | engine-neutral CIAM/federation port | Cognito, external CIAM/customer IdP | Candidate | federation, SCIM, branding, Region, recovery and enterprise-policy study |
| TD-025 | Experience/code workspace | owned structured inspect/patch/validate gateway over the isolated workspace | remote customer runner or managed cloud development environment | Candidate | X10 sandbox/path/network/secret/dirty-state safety, framework coverage, latency/cost and customer repository policy |
| TD-026 | Generated UI design-system adaptation | inspect/reuse host tokens/components behind typed adapter; owned minimal baseline only for greenfield | screenshot-to-code or generator-owned component library | Candidate | X09/X10 visual coherence, accessibility, patch precision, component reuse and upgrade evidence |

## Resolved conflicts

- Policy is now one decision: TD-013 owns the engine-neutral contract; TD-022 evaluates the AWS backend. Repository policy assets remain backend-neutral until T2.06.
- PostgreSQL owns canonical truth; vector, graph and search engines are rebuildable projections.
- AWS is the physical deployment baseline. Non-AWS alternatives are portability/exception paths requiring explicit data-flow and residency approval, not parallel defaults.
- Temporal selection is two-stage: X07-A/T0.10 supports a provisional foundation ADR; X07-B in R1 is required before production acceptance.

Decision Intelligence footnote (2026-08-19): meeting notes proposed C# AHP workers, Kafka/RabbitMQ and GraphRAG as defaults. Those remain **rejected locks**. TD-001 (Python/TypeScript), TD-011 (SQS/EventBridge) and TD-006 (relational graph projection; extract only after measured multi-hop evidence) do **not** change status. GraphRAG, if ever, is an X06 optional projection candidate — not an accepted ADR. Bounded AHP/BWM, if ever, run behind the existing `CognitiveRuntime` / `/agent-runs` port.

## Framework challenge

LangChain may supply model/tool/retriever adapters but cannot leak into domain contracts. LangGraph controls bounded cognitive state, not the engagement record. CrewAI and Semantic Kernel remain benchmark adapters until they beat the typed topology under X03 and runtime qualification. Pydantic supplies validation, not durable orchestration. No framework supplies enterprise semantics, authority, evaluation or BA competence.

## Buy/build boundary

Build CollabX differentiation: epistemic/temporal work graph, adaptive elicitation policy, context compiler, provenance/conflict services, BA evaluation corpus, prototype-to-requirement traceability, sufficiency gates and governance UX. Buy/operate commodities: identity infrastructure, database/object infrastructure, model APIs, malware scanning, telemetry backend and SaaS connectors. All providers remain behind conformance-tested ports.

## Required spikes before accepted ADRs

- T0.09 AWS Region/service/quota and ECS/Aurora/edge feasibility.
- T0.10/X07-A workflow/cognitive interrupt feasibility; X07-B production replay and failure qualification.
- X06 hybrid retrieval with ACL/time filters and counterevidence.
- T2.06 AVP versus embedded Cedar versus OPA behind the same PDP conformance suite.
- Bitemporal update and semantic-release impact traversal.
- Sandboxed prototype rendering with hostile-input isolation and element telemetry.
- Model gateway structured output, fallback, redaction and Region policy.
- OpenTelemetry trace across runtime boundaries without sensitive content.
- RLS, S3, search/cache/queue and connector tenant-isolation red team.
- Canonical knowledge export/import portability.
- Enterprise frontend dual-portal surface/state/component and X09 role-journey qualification.
- Experience-intent/mock-data/context/patch contracts and X10 stale/hostile repository qualification.
