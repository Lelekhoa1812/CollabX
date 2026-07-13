# TASK-010 Evidence

Scope: Identity, browser session, external client and service authentication.

Changed files: `packages/infrastructure/src/axion_infrastructure/identity.py`, identity migration tables, `.env.example`, threat model.

Decisions: Stable identity is issuer+subject, not email. Browser session model is BFF-style encrypted server-side token storage with Secure HttpOnly SameSite cookie posture documented.

Commands: `pytest tests/unit/test_identity.py`.

Test evidence: token claim validation and encrypted session codec tests.

Residual risk: Live Entra key validation, PKCE callback and logout flows require registered Entra apps and are wired as the next auth integration layer.

Rollback: Disable authenticated routes and keep health endpoints only.

