# Operations Foundation Runbook

## Health

- API liveness: `GET /health/live`
- Startup: `GET /health/startup`
- Readiness: `GET /health/ready`

Readiness must never reveal endpoints, credentials or raw dependency errors.

## Recovery

1. Identify the correlation ID and affected tenant/project.
2. Check API, worker and database health.
3. For migration failure, stop promotion and roll forward with a reviewed corrective migration.
4. For Service Bus or workflow backlog, pause non-critical queues, drain/replay with idempotency and record audit evidence.
5. For AI provider outage, disable affected model routes and return insufficient-information outcomes.

