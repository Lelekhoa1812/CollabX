# TASK-007 Evidence

Scope: Azure landing zone, network, identity and core IaC modules.

Changed files: `infra/modules/*`, `infra/environments/{dev,test,staging,prod,recovery}/main.bicep`.

Decisions: Bicep is the IaC language; environments contain no secrets; Key Vault disables public network access and enables RBAC/soft delete/purge protection.

Commands: `az deployment group what-if` per environment after Azure subscription selection.

Test evidence: CI skeleton reserves IaC scan and what-if gates.

Residual risk: Live deployment is not possible without Azure subscription/tenant context.

Rollback: Use Bicep deployment history and previous release manifest.

