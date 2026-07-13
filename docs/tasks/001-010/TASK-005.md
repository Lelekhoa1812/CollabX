# TASK-005 Evidence

Scope: Local infrastructure stack and deterministic test harness.

Changed files: `compose.yaml`, `packages/infrastructure/src/axion_infrastructure/fakes.py`, `scripts/seed_local.py`.

Decisions: Local host ports are PostgreSQL 55432, Redis 56379, Temporal 17233, Azurite 10000-10002, Mailpit 1025/8025. PostgreSQL/Redis/Temporal container-internal ports remain 5432/6379/7233.

Commands: `docker compose up -d`, `make seed`.

Test evidence: provider fakes are unit-testable and model pagination, duplicate events and retryable/non-retryable failures.

Residual risk: Temporal time-skipping and Azure sandbox parity tests are scaffolded for later worker feature tasks.

Rollback: Stop compose stack and remove `.local/seed.json`.
