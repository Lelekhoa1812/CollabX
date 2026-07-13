# TASK-008 Evidence

Scope: OpenTelemetry, structured logging, correlation and redaction foundation.

Changed files: `packages/observability/src/axion_observability/redaction.py`, API health endpoints, `docs/runbooks/operations-foundation.md`.

Decisions: Redaction is recursive and strips secrets, prompt/response/audio/transcript fields, control characters and email addresses before export.

Commands: `pytest tests/unit/test_config_redaction.py`.

Test evidence: snapshot-style redaction assertions.

Residual risk: Full OTel exporter wiring is configured by settings and expands as database/HTTP/Temporal adapters are enabled.

Rollback: Disable exporters and keep local structured logs only.

