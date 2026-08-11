# Gap and coverage audit

Status: historical · Baseline assessed: `design-v2` · Audited: 2026-08-11 · Owner: architecture council

This is a point-in-time analysis, not an authority for current decisions. Consult the [decision registry](technology-decisions.md) for current candidates.

## Why the first corpus was insufficient

The first redesign described principles and major components but left implementation agents to invent critical details. That was unsafe. Missing or shallow areas included the complete BA capability surface; artefact/trace semantics; conversation and survey controller; service and context ownership; API/event/state catalogue; model/prompt release unit; repository/dependency rules; AWS account/network/service topology; pool/bridge/silo tenancy; private model/data paths; deployment, DR, FinOps and incident design; AI coding protocol; and a sequenced dependency graph.

This second pass adds those layers, but the following remain intentionally unproven hypotheses until R0 experiments or accepted ADRs supply evidence.

## Open decisions—not documentation omissions

| Decision | Evidence needed | Owner/gate |
|---|---|---|
| Durable runtime and Temporal deployment | X07-A establishes feasibility; X07-B tests residency, codec, latency, history upgrades, operations and cost | architecture at T0.10, qualification at T4.12/R1 |
| Cognito vs external CIAM | enterprise federation/SCIM/branding/region requirements | identity/product at T0/T2 |
| Verified Permissions vs embedded Cedar/OPA | latency, policy lifecycle, tenant-store scale, local testing | security at T2 |
| Aurora topology and pgvector scale | production-shaped X06 including filtered recall and write load | data at T0/T5 |
| OpenSearch/Neptune extraction | access pattern and cost proves PostgreSQL inadequate | architecture after pilot |
| Bedrock models/routes | domain benchmark, Region, safety, cost and quota | model-risk each release |
| agent topology | X03 ablation proves specialists outperform single agent | research at R2 |
| multi-Region tier | contracted RTO/RPO/residency and game-day proof | business/SRE at pilot |
| domain-pack transfer | held-out organisations show benefit without leakage/staleness | research after pilot |
| autonomy per tool/action | canary safety and reversal evidence | business/risk after pilot |

## Coverage matrix

| Objective area | Authoritative design evidence |
|---|---|
| senior BA role/lifecycle | `product/ba-operating-model.md`, `product/end-to-end-capability-map.md` |
| adaptive intention discovery | `product/conversation-survey-and-facilitation.md` |
| domain learning | `architecture/data-and-knowledge-model.md`, `intelligence/agents-memory-rag.md` |
| artefacts/trace/change | `product/artefacts-traceability-and-gates.md` |
| dynamic prototypes/high UX | `experience/discovery-and-prototyping.md`, `experience/information-architecture-and-design-system.md` |
| agent/memory/context/RAG | `intelligence/agents-memory-rag.md`, `intelligence/model-agent-and-evaluation-lifecycle.md` |
| service/data contracts | `engineering/implementation-blueprint.md`, `engineering/api-event-and-state-catalogue.md`, `engineering/non-functional-requirements.md` |
| secure scalable delivery | `engineering/verification-strategy.md`, `governance/enterprise-control-framework.md` |
| AWS platform | `architecture/aws-platform.md`, `architecture/aws-security-resilience-operations.md` |
| SaaS/tool interoperability | `architecture/integration-and-interoperability.md` |
| implementation by AI | `delivery/ai-implementation-playbook.md`, `delivery/build-sequence-and-dependency-graph.md` |
| empirical proof | `research/evaluation-and-experiments.md`, `delivery/roadmap.md` |

## Completion rule

Documentation completeness means each explicit objective has a coherent, linked, implementable specification and every unresolved choice is labelled with a test/owner/gate. It does not mean the product thesis is true. Only executed experiments, code, security tests and pilot outcomes can prove that; the roadmap forbids converting hypotheses into claims.
