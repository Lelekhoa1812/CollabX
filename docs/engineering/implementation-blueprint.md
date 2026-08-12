# Implementation blueprint

Status: normative · Baseline: `design-v3` · Effective: 2026-08-12 · Owner: engineering and architecture councils

This document constrains future code generation. It defines dependency direction and delivery mechanics; it is not product code. Coding intelligence packages implement [coding-intelligence-and-review-agent.md](../intelligence/coding-intelligence-and-review-agent.md).

## Target repository

```text
collabx/
├── apps/
│   ├── web/                 # React workbench; generated API client only
│   ├── api/                 # HTTP/streaming composition and auth PEP
│   ├── worker-workflow/     # durable workflow activities
│   ├── worker-intelligence/ # cognitive graphs, retrieval, model calls
│   ├── worker-ingestion/    # source parsing/extraction/index projections
│   ├── worker-render/       # sandbox dispatcher; no business credentials
│   ├── worker-code/         # isolated repository inspect/patch/validate/review jobs; no implicit external effects
│   ├── worker-code-index/   # Merkle reindex, hybrid map, CodeKnowledgeGraph projections
│   └── worker-connectors/   # external integration adapters (SCM, ERP read, process-mining)
├── packages/
│   ├── domain/              # pure aggregates, value types, transition rules
│   ├── application/         # commands, queries, ports, unit of work
│   ├── contracts/           # canonical schemas, event/API generation
│   ├── policy/              # PEP/PDP types and action catalogue
│   ├── knowledge/           # provenance, temporal, relation/impact algorithms
│   ├── intelligence/        # framework-neutral run/tool/context interfaces
│   ├── experience-build/    # intent, prototype graph, mock data, change-set and validation domain
│   ├── coding-intelligence/ # archaeology, AC-gated review, change-class, graph query ports
│   ├── evaluation/          # datasets, graders, experiment/release evidence
│   ├── observability/       # safe telemetry conventions
│   ├── testkit/             # factories, clocks, IDs, fake ports, invariant suites
│   └── adapters-aws/        # AWS implementations; domain never imports this
├── schemas/                 # JSON Schema source of truth + compatibility fixtures
├── prompts/                 # versioned prompt components and metadata
├── policies/                # engine-neutral PDP, guardrail, content and tool policies/tests
├── domain-packs/            # non-customer sample packs and semantic tests
├── evaluations/             # synthetic/public cases; restricted data external
├── infra/                   # CDK/CloudFormation, account/cell/environment stacks
├── migrations/              # expand/migrate/contract SQL with verification
├── docs/                    # this corpus, ADRs, runbooks, threat/system cards
└── tools/                   # generators and validators, not runtime logic
```

Python packages use `src` layout, locked reproducible environments, strict typing and linting. TypeScript uses project references and generated contract clients. One root task runner exposes stable commands. Architecture tests reject imports from domain/application into adapters/frameworks.

## Bounded contexts

| Context | Aggregates / services | Owns transactions |
|---|---|---|
| Tenancy | tenant, membership, entitlement, residency, policy binding | onboarding/access/tier change |
| Engagement | engagement, charter, work item, gate, baseline | lifecycle and approval |
| Collaboration | stakeholder, participation, session, survey, comment/action | session and response |
| Evidence | source, source version, evidence span, consent/retention | ingest/promotion/deletion |
| Knowledge | knowledge item/version, assertion, relation, conflict, domain pack | semantic proposal/release |
| Analysis | goal, process, rule, requirement, design, option, risk, decision | item-specific transitions |
| Prototype | prototype/version/element/state/transition/finding | publish/feedback |
| Experience build | experience project, intent graph, mock data, workspace binding, change set, build/validation run | fidelity progression and patch proposal lifecycle |
| Intelligence | run, step, context manifest, tool receipt, memory proposal | bounded run ledger |
| Integration | connection, credential ref, cursor, mapping, webhook/inbox | sync/reconciliation |
| Evaluation | dataset, case, experiment, result, release evidence | immutable experiment |
| Operations | incident, audit export, deletion job, usage/cost allocation | control workflows |
| Service management | service tier, support case, incident/problem/change, status notice, runbook | customer/service lifecycle |
| Commercial | plan, entitlement, usage ledger, quota, allocation, invoice evidence | metering and commercial reconciliation |

Contexts communicate through application ports and versioned events. Direct cross-context table writes are prohibited. Start in one database with schema-per-context and one deployable application; boundaries exist before service extraction.

## Command execution template

1. Authenticate and derive immutable actor/tenant/session context.
2. Validate request schema, size, content type and idempotency key.
3. Authorise action/resource/context at PEP/PDP; apply tenant isolation.
4. Load aggregate under tenant scope and expected version.
5. Execute pure domain transition; collect domain events.
6. In one transaction persist state/version, audit fact, outbox and idempotency response.
7. Publish outbox asynchronously; consumers use inbox dedupe.
8. Return resource version, correlation and stable problem details.

No handler calls Bedrock, S3 or SaaS inside a database transaction. Long work becomes a workflow/activity.

## Database conventions

UUIDv7/ULID-like sortable IDs generated application-side; UTC timestamptz; lower snake case; no business meaning in primary keys. Every tenant row includes non-null `tenant_id`; mutable aggregate includes `version`; soft deletion is not a retention strategy. Use explicit status lookup/check constraints and transition functions in domain code. Financial/cost values carry currency and decimal precision. JSONB is limited to extension metadata or schema-versioned payloads—not core queryable domain fields.

Bitemporal tables use exclusion/uniqueness constraints to prevent overlapping active validity where required. RLS policy uses transaction-local tenant/actor claims set through a hardened connection wrapper. Background/system jobs enumerate authorised tenant scopes; missing tenant context denies access. Migrations run with a role distinct from runtime.

## Workflow coding rules

Workflow code is deterministic: no network, random, wall-clock or unversioned branching. Activities own external I/O and carry idempotency keys. Workflow history stores identifiers and small encrypted metadata, not source documents/prompts. Use workflow version markers for compatible code changes; continue-as-new bounds history. Signals validate actor/authority and correlation. Queries do not mutate. Cancellation propagates and compensations are explicit.

## Cognitive-runtime interface

```text
CognitiveRuntime.run(
  capability_version,
  goal,
  context_manifest_id,
  input_schema_version,
  output_schema_version,
  policy_snapshot_id,
  budget,
  parent_run_id?
) -> RunResult[proposals, citations, uncertainty, terminal_reason]
```

Framework adapters implement this interface. Nodes are pure transforms or invoke typed tools; state is JSON-serialisable and size-bounded. Parallel branches merge using explicit reducers. No agent writes canonical domain state. The application validates proposals and presents/commits them under normal commands.

## Frontend architecture

Feature slices use generated clients, query cache for server state and an explicit local-edit buffer. Collaborative edits use server-assigned versions and conflict UI; do not silently last-write-wins. Stable entity/element IDs support deep links and annotations. Streams are resumable from sequence/cursor. Canvas layouts are user projections separate from semantic graph. Every workflow has empty/loading/partial/stale/permission/error/offline/retry states and keyboard/screen-reader behaviour.

The [enterprise frontend experience](../experience/enterprise-frontend-experience.md) governs routes, role journeys, visual/interaction semantics and UI qualification. The [experience-generation/coding-agent specification](../intelligence/experience-generation-and-coding-agent.md) governs generated frontend and repository patches. Code workers operate only on an authorised snapshot/worktree, apply structured exact-base patches, preserve unrelated changes and emit validation/tool receipts; external version-control or deployment effects require separate commands and authority.

## Definition of implementation-ready

A work item must link to capability, user journey, domain objects/transitions, command/query/API/event schemas, authority and tenant model, data classification/retention, UI states, algorithm/prompt/tool policy, failure/idempotency/concurrency, telemetry/SLO, migration/rollback, unit/contract/integration/E2E/security/accessibility/evaluation tests, and acceptance examples. If any is unknown, the task is a spike or specification task—not implementation.

For customer-facing or production work, implementation-ready also requires service tier, support/incident owner, entitlement/metering effect, customer communication, training/adoption impact, portability/offboarding and evidence expiry. These may be explicitly non-applicable with rationale; they may not be silently omitted.
