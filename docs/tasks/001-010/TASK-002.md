# TASK-002 Evidence

Scope: Monorepo, toolchains, dependency locks and developer commands.

Changed files: `pyproject.toml`, package `pyproject.toml` files, `package.json`, `pnpm-workspace.yaml`, `Makefile`, Dockerfiles, web shell, `.editorconfig`, `.gitattributes`, `.gitignore`, `.dockerignore`, `.env.example`, `docs/development/local-setup.md`.

Decisions: Python is managed by `uv`; JavaScript by `pnpm`; API uses port 8000; Vite uses port 5173.

Commands: `make bootstrap`, `make verify`.

Test evidence: API health unit test and web rendering test.

Residual risk: Lockfiles require dependency install in the current environment; network may require approval.

Rollback: Revert manifests and generated lockfiles together.

