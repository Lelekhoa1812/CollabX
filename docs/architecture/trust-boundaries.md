# Trust Boundaries

| Boundary | Control |
|---|---|
| Browser to API | Entra/BFF session, CSRF binding, APIM validation, WAF, rate limits |
| Tenant/project data | Explicit active tenant/project context, RBAC/ABAC, PostgreSQL RLS, scoped blob/search keys |
| AI providers | Model Gateway, typed schemas, content policy, citation validation, no privileged writes |
| Workers | Temporal activity boundaries, managed identity, least privilege, isolated render/document processing |
| External connectors | Default read-only, explicit mappings, idempotency, reconciliation and audit |
| Observability | Redaction before export; tenant/project identifiers hashed or access-controlled |

Frontend visibility is never authorization. Server boundaries must enforce tenant, project, actor, classification, lifecycle, consent and version context.

