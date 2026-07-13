# Foundation Threat Model

| Threat | Control |
|---|---|
| Cross-tenant data access | Active tenant context, app policy, PostgreSQL RLS, tenant-keyed events/search/blob paths |
| Token theft | BFF server-side token storage, Secure HttpOnly SameSite cookies, CSRF binding, rotation and logout |
| Prompt or response leakage | Redaction before logs/traces, allowlisted telemetry fields, tenant policy for LangSmith |
| Unsafe AI action | AI tools create proposals only; privileged writes require human commands |
| Supply-chain compromise | Lockfiles, CI verification, SCA/SAST/container/IaC scans, signed provenance |
| Public cloud exposure | Private origins, Front Door/WAF/APIM, private service endpoints and managed identity |

