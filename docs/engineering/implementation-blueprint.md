# Implementation blueprint

Status: normative · Baseline: `design-v2` · Effective: 2026-08-11 · Owner: engineering and architecture councils

This document constrains future code generation. It defines dependency direction and delivery mechanics; it is not product code.

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
│   └── worker-connectors/   # external integration adapters
├── packages/
│   ├── domain/              # pure aggregates, value types, transition rules
│   ├── application/         # commands, queries, ports, unit of work
│   ├── contracts/           # canonical schemas, event/API generation
│   ├── policy/              # PEP/PDP types and action catalogue
│   ├── knowledge/           # provenance, temporal, relation/impact algorithms
│   ├── intelligence/        # framework-neutral run/tool/context interfaces
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
| Intelligence | run, step, context manifest, tool receipt, memory proposal | bounded run ledger |
| Integration | connection, credential ref, cursor, mapping, webhook/inbox | sync/reconciliation |
| Evaluation | dataset, case, experiment, result, release evidence | immutable experiment |
| Operations | incident, audit export, deletion job, usage/cost allocation | control workflows |

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

## Definition of implementation-ready

A work item must link to capability, user journey, domain objects/transitions, command/query/API/event schemas, authority and tenant model, data classification/retention, UI states, algorithm/prompt/tool policy, failure/idempotency/concurrency, telemetry/SLO, migration/rollback, unit/contract/integration/E2E/security/accessibility/evaluation tests, and acceptance examples. If any is unknown, the task is a spike or specification task—not implementation.
