PYTHON ?= uv run python
PNPM ?= corepack pnpm

.PHONY: bootstrap lint typecheck test-unit test-integration test-web contracts migrate dev verify seed

bootstrap:
	uv sync --all-packages --dev
	$(PNPM) install --frozen-lockfile

lint:
	uv run ruff check .
	$(PNPM) exec eslint apps/web/src --max-warnings=0

typecheck:
	uv run mypy
	$(PNPM) exec tsc -b

test-unit:
	uv run pytest tests/unit

test-integration:
	uv run pytest tests/integration

test-web:
	$(PNPM) exec vitest run

contracts:
	$(PYTHON) scripts/validate_traceability.py
	$(PYTHON) scripts/export_openapi.py

migrate:
	uv run alembic upgrade head

seed:
	$(PYTHON) scripts/seed_local.py

dev:
	$(PNPM) --filter @axion/web dev --host 0.0.0.0 --port 5173

verify: lint typecheck test-unit contracts test-web
