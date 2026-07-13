# TASK-006 Evidence

Scope: CI/CD, supply-chain security and release evidence skeleton.

Changed files: `.github/workflows/ci.yml`, `docs/release/release-manifest.schema.json`, Dockerfiles.

Decisions: CI verifies locks, lint, typecheck, contracts, unit tests, web tests and migration checks before promotion.

Commands: GitHub Actions workflow `ci`.

Test evidence: workflow invokes repository verification commands.

Residual risk: SBOM/signing/scanner integrations require repository secrets and cloud identities configured in GitHub.

Rollback: Disable workflow or revert release schema.

