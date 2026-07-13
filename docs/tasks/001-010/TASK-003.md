# TASK-003 Evidence

Scope: Typed configuration, secrets, environment profiles and feature flags.

Changed files: `packages/infrastructure/src/axion_infrastructure/config.py`, `.env.example`, `scripts/config_check.py`.

Decisions: `AXION_` prefix, nested delimiter `__`, production rejects debug/wildcard CORS and incomplete Foundry/Entra settings.

Commands: `python scripts/config_check.py`; `python scripts/real_ai_check.py`; `python scripts/real_langchain_check.py`.

Test evidence: `tests/unit/test_config_redaction.py`.

Residual risk: Azure App Configuration/Key Vault live adapter is represented by `SecretRef` contract; full managed-identity resolution belongs to cloud wiring beyond the local foundation. LangSmith remains opt-in and requires `LANGSMITH_API_KEY`.

Rollback: Restore prior configuration model and env examples.
