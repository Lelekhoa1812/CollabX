# TASK Completion

- [x] TASK-001 — Architecture decision and specification traceability baseline
- [x] TASK-002 — Monorepo, toolchains, dependency locks and developer commands
- [x] TASK-003 — Typed configuration, secrets, environment profiles and feature flags
- [x] TASK-004 — Canonical contracts, state vocabularies, error model and generated clients baseline
- [x] TASK-005 — Local infrastructure stack and deterministic test harness
- [x] TASK-006 — CI/CD, supply-chain security and release evidence skeleton
- [x] TASK-007 — Azure landing zone, network, identity and core IaC modules
- [x] TASK-008 — OpenTelemetry, structured logging, correlation and redaction foundation
- [x] TASK-009 — PostgreSQL foundation, schemas, common columns, RLS and migration policy
- [x] TASK-010 — Identity, browser session, external client and service authentication foundation

## Live-Service Follow-Up

- [x] Run `python scripts/real_ai_check.py` with real Azure Foundry OpenAI credentials.
- [x] Run `python scripts/real_langchain_check.py` against hard, medium and easy deployments.
- [x] Configure `LANGSMITH_API_KEY` and tenant policy to capture redacted LangSmith traces.
- [ ] Deploy Bicep to the selected Azure subscription and record `what-if` plus smoke-test evidence.
- [ ] Register Entra workforce and External ID applications, then enable full PKCE/BFF callback integration.
