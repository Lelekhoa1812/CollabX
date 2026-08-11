# Enterprise readiness and service operating model

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: product, operations, security and risk councils

This document closes the gap between a capable product design and an operable enterprise SaaS service. A capability is not enterprise-ready until product, people, process, technology, supplier and evidence controls operate together. The [milestone plans](../milestones/) turn these obligations into delivery gates.

## Enterprise readiness dimensions

| ID | Dimension | Minimum operating capability | Required evidence before production |
|---|---|---|---|
| ER-01 | Product and value | named buyer, service tiers, outcome baseline, adoption plan, exit criteria | signed service proposition, pilot value report, product telemetry |
| ER-02 | Customer lifecycle | qualification, contracting, tenant provisioning, onboarding, success, renewal and offboarding | rehearsed onboarding/offboarding, ownership RACI, data-return/deletion proof |
| ER-03 | Identity lifecycle | federation, SCIM/JIT, joiner/mover/leaver, delegation, access review, recovery and break-glass | positive/negative authority matrix and deprovisioning-time evidence |
| ER-04 | Data governance | inventory, classification, ownership, purpose, residency, quality, lineage, retention, hold and rights | data map, ROPA/DPIA as applicable, deletion/export/hold tests |
| ER-05 | Security | threat model, secure SDLC, vulnerability management, secrets/keys, detection, incident response and assurance | independent security review, pen test, remediation record, control evidence |
| ER-06 | Privacy and responsible AI | lawful/contractual purpose, consent, transparency, human authority, harm/fairness review and redress | approved AI/privacy impact assessment, notices, redress exercise, system card |
| ER-07 | Reliability and continuity | SLOs, capacity, backup/restore, dependency degradation, incident/problem/change and DR | error-budget history, restore and game-day timestamps, runbook exercise |
| ER-08 | Service management | service catalogue, support channels/severity, on-call, status, maintenance, escalation and post-incident review | staffed rota, support simulation, customer communications and PIR sample |
| ER-09 | Supplier and integration | due diligence, DPA/subprocessors, scopes, quotas, outage/exit, portability and connector certification | supplier register, dependency test, revocation/reconciliation evidence |
| ER-10 | Financial and commercial | pricing/entitlements, metering, invoice allocation, budgets, margin and overage policy | reconciled usage ledger, unit economics, billing-dispute and quota tests |
| ER-11 | Delivery and change | controlled environments, signed supply chain, segregation, migration, rollback, release and emergency change | release evidence manifest, rollback drill, change record and approvals |
| ER-12 | Usability and accessibility | role-based journeys, inclusive research, WCAG, localisation, training and assisted support | independent accessibility audit and affected-user results |
| ER-13 | Information governance | document/record classification, approval, publication, legal discovery and disposition | record schedule, export/eDiscovery exercise, disposition evidence |
| ER-14 | Observability and audit | separable audit/ops/AI/product signals, safe telemetry, customer audit export | end-to-end trace, audit completeness/integrity and redaction tests |
| ER-15 | Portability and exit | canonical export/import, tenant/provider migration, key and model portability, documented exit | timed export/import and provider failover or approved constraint |
| ER-16 | Organisation and adoption | operating roles, competency/training, support content, adoption/change plan and feedback loop | training completion, task competency, adoption risks and owner actions |

## Service catalogue and customer lifecycle

Every sellable service tier defines supported Regions and languages, isolation tier, model/provider policy, availability class, RPO/RTO, storage/retention, connectors, support hours, response targets, quotas, accessibility status, export/offboarding, customer responsibilities and exclusions. Marketing claims cannot exceed verified evidence or contractual scope.

The customer lifecycle is a governed workflow:

1. Qualify intended use, regulated domains, affected people, data classes, countries and prohibited use.
2. Complete security/privacy/AI due diligence, DPA/subprocessor disclosure, service description and responsibility matrix.
3. Record tenant home cell, isolation tier, identity federation, data purpose, retention, keys, models, quotas and support contacts.
4. Provision from an approved template; verify isolation, federation, logging, budgets and customer acceptance before data import.
5. Onboard administrators, stewards, BAs, approvers and support contacts using role-specific competency checks.
6. Review adoption, value, risks, access, data quality, spend and open incidents at an agreed cadence.
7. Treat tier/Region/model/purpose expansion as a risk-classified change, not a sales-side toggle.
8. On suspension or exit, freeze effects, export authorised records, revoke identities/connectors, apply hold/retention, delete eligible derivatives and issue evidence.

## Enterprise roles and separation of duties

| Role | Accountable for | Must not solely approve |
|---|---|---|
| Service owner | service proposition, tier and lifecycle | own material risk exception |
| Customer success owner | adoption, outcomes and renewal risks | data-purpose expansion |
| Tenant administrator | membership, group mapping and tenant settings | own privileged-access review |
| Data owner/steward | purpose, quality, retention and semantic releases | implementation of own control test |
| Model-risk owner | capability classification and AI release evidence | candidate model/prompt development result alone |
| Security/privacy officer | control design, DPIA, incident and assurance | routine production deployment |
| SRE/service desk | availability, support, incident/problem and recovery | residual business-risk acceptance |
| Release authority | completeness of release evidence and rollout | bypass of failed critical gate |
| Business authority | interpretation, option, baseline and value decisions | technical/security control waiver outside remit |
| Independent assurance | samples and challenges control evidence | operating the control being tested |

For small pilots, one person may hold several roles, but the decision records, review moments and conflict-of-interest declaration remain distinct.

## Service management contract

The service catalogue owns severity definitions and customer response commitments. At minimum:

- `SEV-1`: confirmed/credible tenant breach, unauthorised consequential action, widespread loss of class-A service, corrupted approved baseline or unrecoverable data risk; 24×7 page for production.
- `SEV-2`: major tenant/capability degradation, material model safety regression, blocked critical workflow or failed recovery objective.
- `SEV-3`: limited degradation with workaround, connector lag, non-critical accessibility defect or isolated data-quality failure.
- `SEV-4`: request, question, cosmetic defect or planned improvement.

Each incident records detection, declared severity, affected tenants/capabilities/versions, containment, evidence preservation, communications, regulatory/contractual assessment, restoration, validation and closure authority. Significant incidents create a blameless post-incident review with causes, escaped controls, actions, owners and due dates. Recurrent incidents enter problem management. Emergency changes expire and receive retrospective approval.

## Privacy, data rights and records operations

The tenant data map links every field/object to purpose, lawful/contractual basis where applicable, controller/processor role, subject category, classification, Region, recipient/subprocessor, retention, deletion behaviour and rights applicability. Do not infer that all collaboration content has the same purpose.

Operational workflows cover access/export, correction, restriction, objection/opt-out where applicable, deletion, legal hold, eDiscovery, incident preservation and account closure. Identity verification is proportionate; responses must not expose other participants or privileged material. Every derivative—chunk, embedding, summary, cache, model-evaluation copy, export and backup—is either deleted, held under a documented exception or scheduled for expiry. Certificates state scope and limitations without retaining deleted content.

## Commercial, metering and entitlement integrity

Entitlements are versioned policy, separate from UI visibility. Usage events are immutable, tenant-scoped, idempotent and reconcilable to provider invoices and customer-facing reports. Metering distinguishes customer work, retries, internal evaluation, support replay and failed provider calls. Billing never uses unrestricted content.

Before a paid tier launches, prove quota enforcement, overage behaviour, plan change, suspension/grace, refund/credit evidence, invoice allocation, tax/currency ownership, provider-cost reconciliation and prevention of cross-tenant usage attribution. Commercial operations cannot override safety, residency or retention policy.

## Adoption, training and organisational change

Enterprise deployment includes stakeholder impact, sponsor coalition, communications, role mapping, training, office hours, support articles, champion network, resistance/concern handling and adoption telemetry. Training covers epistemic states, evidence inspection, human authority, corrections, confidential data, prohibited use, escalation and accessible participation. Completion is demonstrated by task competency, not video attendance.

Measure activation, retained use of target journeys, contribution coverage, time-to-first-validated-decision, correction behaviour, evidence inspection, review latency, support demand and abandonment. Segment without covert profiling. Low adoption triggers discovery and workflow change, not manipulative nudges.

## Readiness assessment and evidence

Each ER dimension is `not assessed`, `gap`, `planned`, `implemented`, `operating`, or `independently evidenced`. “Implemented” is not production-ready. A release assessment records control owner, evidence URI/hash, observation window, exceptions/expiry, reviewer and next review date.

Production entry requires every applicable dimension at least `operating`, with ER-03 through ER-07, ER-11 and ER-14 independently evidenced. Any non-applicable dimension needs an approved rationale. Critical failures are not compensable by a high aggregate readiness score.

## Enterprise release blockers

Block release for any unresolved critical tenant/authority defect; unknown data purpose/residency/subprocessor; untested offboarding/deletion/restore; unstaffed incident path; expired AI/security/privacy assessment; inaccessible critical journey; unreconciled metering; missing customer exit; unbounded model/tool cost; model deployment that has not passed the declared evaluation; or claim/contract exceeding measured evidence.
