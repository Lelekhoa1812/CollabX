# Axion Stakeholder CRM

Axion Stakeholder CRM is an AI-assisted consulting operating system for governed discovery, analysis, requirements, evidence, delivery handover and controlled change. This repository implements the TASK-001 to TASK-010 foundation from the project blueprint.

## Local Ports

| Service | Port |
|---|---:|
| FastAPI API | 8000 |
| React/Vite workbench | 5173 |
| PostgreSQL | 55432 |
| Redis | 56379 |
| Temporal | 17233 |
| Azurite Blob/Queue/Table | 10000/10001/10002 |
| Mailpit SMTP/UI | 1025/8025 |

## Quick Start

```bash
make bootstrap
docker compose up -d
make migrate seed
uv run axion-api
pnpm --filter @axion/web dev --host 0.0.0.0 --port 5173
```

Run verification:

```bash
make verify
python scripts/real_ai_check.py
python scripts/real_langchain_check.py
```

The local `.env` uses the supplied Azure Foundry deployments and LangSmith tracing. Hard tasks route to `AZURE_OPENAI_LLM`, medium tasks to `AZURE_OPENAI_MLM`, and easy tasks to `AZURE_OPENAI_SLM`. The LangChain check runs real model calls and emits LangSmith traces when tenant policy permits it.

## Foundation Contents

- TASK-001 governance: ADRs, architecture views, traceability matrix and validator.
- TASK-002 monorepo: uv workspace, pnpm workspace, API/web shells, containers and developer commands.
- TASK-003 configuration: typed Pydantic settings, secret references, feature flags and config check.
- TASK-004 contracts: canonical Appendix A states, value objects, problem details, event schemas and OpenAPI export.
- TASK-005 local stack: PostgreSQL, Redis, Temporal, Azurite, Mailpit, provider fakes and deterministic seed data.
- TASK-006 CI/CD: GitHub workflow and release manifest schema.
- TASK-007 Azure IaC: Bicep modules and environment compositions.
- TASK-008 observability: health endpoints, redaction and operations runbook.
- TASK-009 PostgreSQL: baseline schemas, identity/audit tables, RLS example and migration checker.
- TASK-010 identity: Entra-oriented token validation contracts, encrypted session codec and identity persistence baseline.
