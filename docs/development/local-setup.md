# Local Setup

Prerequisites: `uv`, `pnpm`, Docker or compatible container runtime.

1. Copy `.env.example` to `.env` and fill local values.
2. Run `make bootstrap`.
3. Run `docker compose up -d postgres redis azurite mailpit`.
4. Run `make migrate seed`.
5. Start the API with `uv run axion-api` on port 8000.
6. Start the workbench with `pnpm --filter @axion/web dev --host 0.0.0.0 --port 5173`.

The local compose stack maps PostgreSQL to host port 55432, Redis to 56379 and Temporal to 17233 to avoid collisions with other Docker projects on this workstation. Container-internal ports remain the standard 5432, 6379 and 7233.

The local `.env` is intentionally ignored by Git and contains the supplied Azure Foundry and LangSmith settings. Run `python scripts/real_ai_check.py` for a direct provider call and `python scripts/real_langchain_check.py` for a real tool-calling agent across hard, medium and easy routes. LangSmith tracing is enabled when `LANGSMITH_API_KEY` is supplied and tenant policy permits it.
