# TASK-009 Evidence

Scope: PostgreSQL foundation, schemas, common columns, RLS and migration policy.

Changed files: `migrations/versions/0001_foundation.py`, `packages/infrastructure/src/axion_infrastructure/database.py`, `scripts/check_migrations.py`.

Decisions: Baseline creates all source schemas from the specification, identity tables, audit table and a deny-by-context tenant RLS policy example.

Commands: `alembic upgrade head`, `python scripts/check_migrations.py`.

Test evidence: migration checker and transaction context helpers.

Residual risk: Full project-owned table RLS broadens as feature tables are created in later tasks.

Rollback: `alembic downgrade base` in local/dev; production uses roll-forward unless explicitly approved.

