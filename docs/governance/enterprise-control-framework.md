# Enterprise control framework

Status: normative · Baseline: `design-v4` · Effective: 2026-08-19 · Owner: risk and security councils

## Control families

| Family | Required controls and evidence |
|---|---|
| Governance | accountable owners, risk appetite, policy hierarchy, exceptions, board/customer reporting |
| Asset/data | inventory, classification, purpose/consent, lineage, residency, retention, deletion, legal hold |
| Identity/access | federation/MFA, least privilege, ABAC/RBAC/ReBAC, tenant isolation, reviews, break-glass |
| Secure SDLC | threat modelling, secure standards, reviews, SAST/SCA/IaC/secrets, SBOM/signing, pen tests |
| AI lifecycle | use-case risk, dataset/model/prompt/tool registry, evaluation, human authority, monitoring/rollback |
| Operations | SLO/on-call, change/incident/problem, capacity, vulnerability/patch, backup/DR, supplier status |
| Privacy/ethics | DPIA, minimisation, transparency, rights, accessibility, fairness/harm and research consent |
| Third party | due diligence, DPA/subprocessors, scopes, attestations, outage/exit, deletion and portability |
| Assurance | immutable evidence, control testing, audit trail, customer evidence packages, remediation |

Map implementation evidence to applicable ISO 27001/27017/27018, SOC 2, NIST CSF/AI RMF, privacy and sector obligations only with qualified legal/compliance input. Documentation is not certification.

Future mapping targets (M5 / legal review; not MVP architecture and not product features):

- ISO/IEC 42001 AIMS
- Australian AI Ethics Principles
- Privacy Act 1988 and OAIC AI guidance — APP 10 is *personal information* quality, not document freshness or bitemporal business evidence
- APRA CPG 234 / CPS 234 for APRA-regulated pilots only

Do not build cryptographic attestation of every AHP matrix as a v1 differentiator. Existing provenance, signatures on baselines and audit trails are the v1 bar. Decision Methods and structured challenge are Class B/C analytical assists; they never become Class C/D autonomy to approve.

## Three lines and separation

Product/engineering/domain stewards operate controls; security/privacy/model-risk functions define/challenge/monitor; internal/external assurance tests independently. Model developers cannot be sole evaluators or release approvers for high-risk capabilities. Production access, KMS administration, security-log administration and audit are segregated.

## AI risk classification

Classify use case/action by decision impact, affected people, sensitivity, reversibility, autonomy, external side effect, domain regulation, scale and detectability. The highest relevant dimension sets minimum controls.

| Class | Example | Minimum posture |
|---|---|---|
| A assistive | draft question, visualise confirmed process | transparent, cited, editable, sampled evaluation |
| B analytical | propose requirements/conflicts/options | schema/evidence/critic, professional review before baseline |
| C consequential | policy interpretation, prioritisation affecting people | domain authority, independent validation, formal rules where viable, no autonomous effect |
| D prohibited by default | final legal/HR eligibility, covert profiling, unreviewed external action | do not implement without new executive/legal mandate and dedicated controls |

## Data-use boundary

Training/fine-tuning, evaluation, production inference, telemetry and product analytics are separate purposes. Customer data is not reused across them by implication. Each processing activity records legal/contractual basis, data types, subjects, Region, processors, retention and access. Customer content never trains a shared model without explicit agreement and governance.

## Evidence catalogue

Continuously produce account/SCP/control status; asset/data maps; IAM/access reviews; key/secret rotation; CloudTrail/Config/Security Hub findings; scan/SBOM/signatures; threat/DPIA; test/evaluation/system cards; deployment/approval/rollback; backup restore/DR; incident exercises; retention/deletion certificates; SLO/capacity/cost; supplier reviews and staff training. Evidence has owner, period, integrity hash, classification and retention.

## Customer assurance and transparency

Expose service architecture/residency, subprocessors and model providers; data-use/retention; security and availability commitments; AI limitations and human authority; incident notification; audit/export/deletion; accessibility status; model/system-card summaries and material changes. Do not market “no hallucinations”, “autonomous senior BA” or compliance without scoped evidence.

## Change risk tiers

Standard: backward-compatible, low-risk, automated evidence. Significant: schema/workflow/prompt/model/tool/policy/tenant change requiring owner review, staging and canary. Major: data purpose/residency, new high-impact use case, isolation model, subprocessor, breaking baseline semantics or DR change requiring architecture/security/privacy/business approval and customer notice where contractual.
