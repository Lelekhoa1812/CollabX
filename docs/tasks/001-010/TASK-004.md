# TASK-004 Evidence

Scope: Canonical contracts, state vocabularies, error model and generated client baseline.

Changed files: `packages/domain/src/axion_domain/states.py`, `value_objects.py`, `packages/contracts/src/axion_contracts/*`, `packages/contracts/schemas/*`, `scripts/export_openapi.py`.

Decisions: Appendix A enums are centralized in the domain package; problem details use `application/problem+json`.

Commands: `make contracts`.

Test evidence: `tests/unit/test_states.py`, `tests/unit/test_api.py`.

Residual risk: Generated TypeScript client is initialized as a contract output surface; endpoint generation expands with feature APIs.

Rollback: Revert contracts and OpenAPI output together.

