# Experience generation and governed coding-agent specification

Status: normative · Baseline: `design-v3` · Effective: 2026-08-12 · Owner: product design, AI and engineering councils

## Capability promise

CollabX can turn governed business intent into a progressive, testable experience: journey and information architecture, mock data, wireframe, stateful frontend prototype and—only when authorised—a patch to a bounded codebase (polyglot and non-UI change classes included). It behaves as a product/design/engineering collaborator, not a one-shot site generator. Every visual or code change explains the user need, evidence, assumption, affected scenario, validation and rollback.

Brownfield archaeology, CodeKnowledgeGraph, AC-gated review and ERP promotion paths are normative in [coding intelligence and review agent](coding-intelligence-and-review-agent.md). This document remains the L0–L5 experience and exact-base patch contract.

The capability serves two separate surfaces:

1. **Prototype mode:** produces disposable or versioned mock experiences in a credential-free sandbox to learn and validate intent.
2. **Repository mode:** inspects an authorised workspace, plans and applies minimal patches through governed tools, then verifies the real application boundary.

Prototype acceptance is not production-code approval. Repository mode is unavailable until code scope, branch/worktree, tool policy, data classification and human authority are explicit.

Generated L5 changes follow the same secure-development lifecycle as human code. The [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) is a control reference for preparing the organisation, protecting software, producing well-secured software and responding to vulnerabilities; it does not itself certify generated code.

## User outcomes

| User | Needed outcome | CollabX contribution | Human authority retained |
|---|---|---|---|
| Sponsor/product owner | see a strategy as a believable workflow | comparable experience options tied to outcomes/risks | choose direction and investment |
| SME/frontline user | validate real scenarios and exceptions | realistic mock data and interactive paths | confirm/correct domain behaviour |
| BA | convert evidence into testable intent | question plan, journey, rules, requirements and trace | steward meaning and readiness |
| Designer | accelerate exploration without losing craft | IA, variants, tokens, accessible components and research instrumentation | select/refine design and research conclusion |
| Engineer | receive or co-create a coherent thin slice | repository context, patch, tests, rationale and constraints | accept/change implementation and architecture |
| Security/risk/data owner | prevent unsafe generated behaviour | threat/privacy/data/tool gates and inspectable receipts | approve risk/purpose/exceptions |
| Approver | understand exactly what changed | semantic/visual/code diff and evidence bundle | approve baseline/release |

## Fidelity ladder and permitted claims

| Level | Deliverable | Purpose | Must not imply | Exit evidence |
|---|---|---|---|---|
| L0 narrative | scenario, actors, steps, content hierarchy | align on job/outcome | UI feasibility | stakeholder playback |
| L1 sketch | low-fidelity screens/flow | test structure and vocabulary | visual quality or technical feasibility | task-flow comprehension |
| L2 stateful mock | interactive screens, mock data, validation/errors | test behaviour/exception/recovery | integration, security or scale readiness | scenario usability results |
| L3 contract prototype | component/state graph plus API/event schemas | align product/design/engineering | production implementation | contract/threat/accessibility review |
| L4 sandbox thin slice | executable frontend with fake/sandbox adapters | test coded experience/performance | production service/data readiness | browser/E2E/visual/accessibility evidence |
| L5 repository patch | bounded change in real codebase (UI, API, rule, config, integration, migration, or security class) | implement approved slice | release acceptance | repository CI, **AC-gated review**, deployment/transport gate |

CollabX chooses the lowest fidelity that resolves the current uncertainty. Higher fidelity requires explicit rationale; visual polish does not compensate for weak task evidence.

## Experience-generation workspace

The studio is one coherent workspace, not separate chat and code generators:

- **Brief rail:** outcome, target users, decision, constraints, success metrics, fidelity and scope.
- **Conversation/intent panel:** one active question, rationale, answer controls, recap and open assumptions.
- **Journey/story map:** personas/jobs, scenarios, steps, exceptions and coverage.
- **Prototype viewport:** device/theme/locale/data-scenario selector and interactive output.
- **Structure inspector:** routes, components, states, data, permissions, accessibility tree and trace links.
- **Change set:** proposed visual/behaviour/code diffs grouped by rationale and impact.
- **Validation drawer:** task, schema, browser, visual, accessibility, security, performance and evaluation results.
- **Run controls:** current goal/plan/stage, budget, tool activity, pause/cancel/resume and required authority.

Participant testing can open a distraction-free prototype URL containing only purpose/consent, scenario, viewport, progress, feedback and exit controls.

## Progressive intention discovery

### Intake model

The initial brief captures business outcome, target decision, users/affected people, job/scenario, current pain, must-have constraints, data sensitivity, brand/design system, target devices/locales/accessibility, integration assumptions, codebase/repository scope, delivery deadline class and success/harm measures. Unknowns are valid values.

The system constructs an `ExperienceIntent` graph:

`outcome → user/job → scenario → task step → information/action → rule/permission → state/exception → component/route → data/API → measure/test → evidence/decision`.

Each node has proposed/confirmed/contested status, source, scope/time, confidence method, owner and impact. A natural-language answer updates candidates; it never becomes code truth directly.

### Question formats

| Format | Use | Required behaviour |
|---|---|---|
| Free-form | uncover story, motivation, exception or language | one focused prompt; examples optional and non-leading |
| Single-choice MCQ | mutually exclusive decision with understood options | show rationale/trade-off and “not sure”; no false completeness |
| Multi-select | applicable roles/features/constraints | include none/not known; reveal dependencies |
| Checklist | confirm a reviewable set such as states/devices/data | distinguish required/recommended/optional |
| Ranked choice | prioritise outcomes/options | allow ties where method permits; show consequence |
| Pairwise choice | compare design variants or trade-offs | randomise order; avoid style-only preference when testing usability |
| Scale | measure confidence/severity/effort | label every endpoint and interpretation; not a substitute for evidence |
| Matrix | compare repeated items sparingly | mobile/accessibility alternative; cap cognitive load |
| Scenario task | observe behaviour in prototype | success condition and consented telemetry |
| Evidence request | obtain source or authority | explain why needed, acceptable alternatives and sensitivity |
| Confirmation diff | verify interpreted change | show before/after meaning, not prose recap only |

### Question-selection policy

Candidate priority uses decision impact, information gain, risk/uncertainty, dependency unblock, respondent authority, freshness and cost/burden. Hard blockers include leading premise, question beyond purpose/authority, known answer repetition, secret solicitation, unnecessary personal data, inaccessible control, or a choice that conceals a material alternative.

The controller normally asks one question. It may present a short checklist when items are cognitively related and independent. It stops or shifts to a prototype/evidence/tool action when asking is lower-value than observing. Users can answer, skip, defer, mark unknown, add an option, ask why, switch format, invite authority or constrain scope.

### Collective clarification

Questions can be routed to several stakeholders, but responses remain attributed and are never averaged into consensus. CollabX shows aligned, divergent and missing perspectives; detects role/authority/scope/time differences; and proposes the smallest next experiment or decision. Async participants see only necessary context. A facilitator can reorder, edit or suppress an AI question with recorded rationale.

## Mock data and scenario generation

Mock data is a governed artefact with schema, seed, locale, distribution, edge cases, sensitivity class, synthetic label and generation provenance. It must be internally coherent across screens and repeated runs. It never imitates a real identifiable person or uses production content unless separately approved and transformed under policy.

Every prototype data pack includes:

- representative happy-path records;
- empty, first-use, loading, partial, stale, permission-denied and service-error states;
- validation, duplicate, conflict, concurrency and recovery cases;
- boundary sizes, long/Unicode/RTL text, dates/timezones/currencies;
- accessibility-relevant content such as meaningful alt text and non-colour state;
- domain rule exceptions and one deliberately contested/unknown value where relevant;
- deterministic seed plus ability to select named scenarios.

Generated dashboards use mathematically consistent totals, denominators, trends and time windows. Synthetic data is visibly labelled and cannot be presented as customer outcome evidence.

## Artefact and version model

An `ExperienceProject` contains brief, intent graph, question sessions, journeys, IA, design-system binding, mock-data packs, prototype graph, generated workspace versions, repository binding, change sets, validation runs, feedback/findings, approvals and releases.

The prototype graph contains stable IDs for route, screen, region, component, element, state, transition, data binding, permission, analytics event, accessibility semantic and annotation. Each version is immutable. A change set records base/target version, goal, rationale, source evidence, assumptions, semantic delta, visual delta, code patch, affected traces, validation and rollback.

## Context harness

Before any generation or patch, the context compiler builds an immutable, size-bounded `BuildContextManifest`:

1. user goal, task and completion predicate;
2. authorised repository/workspace and exact base revision;
3. instruction hierarchy: user scope, repository instructions, accepted ADRs/contracts, design system and policies;
4. relevant user journeys, scenarios, requirements, evidence and decisions;
5. repository map, architecture boundaries, dependency manifests and nearby patterns;
6. existing routes/components/tokens/schemas/tests and ownership;
7. data classification, tool/network/side-effect policy and sandbox limits;
8. open questions, conflicts, assumptions and deliberately excluded context;
9. budgets for time, tokens, tools, files, diff size, generated output and parallel work;
10. validation matrix and rollback target.

The manifest records why content was included and source hashes. Retrieved files/user content are untrusted data, not executable instructions. Repository instructions apply only within their scope and cannot override security, tenant or human authority.

## Memory and learning boundary

| Memory | Content | Lifetime | Promotion/authority |
|---|---|---|---|
| Run working memory | current goal, plan, inspected files, hypotheses, patches and validation | one build run/checkpoint | runtime only; size bounded |
| Project episodic memory | questions/answers, corrections, findings, decisions and prior change-set outcomes | experience project | append-only with source/actor/version |
| Governed semantic memory | confirmed user vocabulary, design rules, component mappings and repository conventions | effective-dated project/domain release | steward/repository authority; never inferred silently |
| Procedural memory | tool, prompt, workflow, design-system adapter and validation policy versions | capability release | engineering/model-risk release process |
| User preference memory | consented density, device, locale and accessibility preferences | user-controlled | user/policy; portable/deletable |
| Outcome memory | task results, escaped defects, review time and production outcome | governed evaluation retention | evaluation process, not automatic prompt rewrite |

Checkpoint/resume persists identifiers, small typed state and receipts—not raw repositories, secrets or unrestricted prompts. A correction supersedes the affected candidate and becomes a regression fixture where policy permits. A generated coding pattern is not learned across tenants/projects until provenance, licensing, privacy, novelty, security, compatibility and steward approval pass. Production behaviour never self-modifies from successful-looking patches.

## Coding-agent state and lifecycle

State includes `goal`, `user_outcome`, `completion_predicate`, `base_revision`, `context_manifest_id`, `plan`, `current_step`, `files_inspected`, `proposed_changes`, `applied_patch_ids`, `validation_results`, `open_questions`, `assumptions`, `risks`, `budgets`, `required_approvals`, `rollback`, and `terminal_reason`.

Lifecycle:

1. **Frame:** restate user outcome, scope, non-goals, constraints and evidence needed.
2. **Inspect:** read applicable instructions, architecture, contracts, code and current dirty state; never guess file structure.
3. **Clarify:** ask only decision-changing questions; otherwise make and label safe reversible assumptions.
4. **Plan:** define outcome-oriented slices, dependencies, validation and stop conditions.
5. **Design:** update intent/flow/contracts before code when meaning changes.
6. **Patch:** apply the smallest coherent change through structured patch tools against exact base content.
7. **Validate:** run targeted then broader deterministic, visual, browser, accessibility, security and evaluation suites.
8. **Critique:** independently inspect requirement coverage, regressions, code quality, visual coherence and unsupported claims.
9. **Repair:** bounded fixes only; re-plan or ask authority if the fix broadens scope.
10. **Present:** explain outcome, files/change groups, rationale, evidence, screenshots, residual risk and rollback.
11. **Approve/release:** human/repository process reviews and promotes; agent completion never equals deployment approval.

Terminal reasons: success, needs-user-decision, needs-evidence, conflict, policy-denied, approval-required, test-failed, budget-exhausted, cancelled, unsafe, external-dependency-blocked or failed.

## Tool policy and patch application

### Tool classes

| Class | Examples | Default authority |
|---|---|---|
| Inspect | file/search/schema/browser screenshot/test discovery | allowed within scoped workspace; content remains untrusted |
| Transform | format, generate client/types/assets, compile | allowed in sandbox with manifest-pinned tooling |
| Patch | create/update/delete explicitly scoped files | preview or reversible execution within authorised worktree |
| Validate | unit/type/lint/build/E2E/accessibility/visual/security | allowed; external test data/provider policy applies |
| Package | build artefact, bundle prototype, evidence manifest | allowed in non-production destination |
| External effect | install dependency, network API, message, commit/push/PR/deploy | explicit policy; consequential action requires approval |
| Destructive | delete/migrate/overwrite broad state | exact-target preview and explicit authority; prefer recoverable path |

Each tool declares schema, version/hash, working directory, permissions, network/secret access, side effects, timeout, output limit, idempotency and receipt. Model-produced paths/commands are validated; shell metacharacters and unresolved broad targets cannot cross the gateway unchecked.

### Patch contract

A patch proposal names base file hash, exact hunks, semantic intent, generated/manual origin, affected requirement/scenario, risk, expected tests and reversal. Apply fails on stale base unless a three-way semantic review is safe. Preserve unrelated user changes; never reformat unrelated files, replace a whole file to avoid a precise edit, or weaken tests/types/policies to pass.

After apply, reread changed regions, compute diff, detect unexpected generated/untracked files and run the validation matrix. Deletion reports exact targets and recovery. Repository mode never commits, pushes, creates PRs, deploys or sends messages unless the user or workflow explicitly authorises that action.

## Multi-agent topology

The default is one lead product-engineering agent using deterministic tools. Bounded specialists may operate on independent work only when their context, output schema and merge ownership are explicit:

| Specialist | Scope | Output | Independence safeguard |
|---|---|---|---|
| Research/intent analyst | evidence, users, questions, scenarios | intent delta/open questions | cannot approve own inference |
| Experience architect | IA, flows, content hierarchy, states | prototype graph/design rationale | no production code authority |
| UI systems specialist | tokens/components/responsive/accessibility | component specification | must reuse established system first |
| Frontend engineer | scoped implementation patch | code/tests/build evidence | cannot change product meaning silently |
| Data/API specialist | mock schemas/adapters/contracts | fixtures/contracts/mapping | canonical schema remains authoritative |
| Security/privacy reviewer | threats, data/tool/telemetry | findings/blockers | independent of patch author for high risk |
| Accessibility reviewer | semantics, keyboard, AT, cognitive load | defects/evidence | critical findings block regardless of polish |
| Test/visual critic | browser, screenshots, regression, edge states | result manifest | does not repair and approve same critical result alone |

The lead partitions tasks and budgets, specialists cannot widen repository/data/tool scope, and merge reducers detect overlapping files/semantic conflicts. Parallel agents do not manufacture consensus. Use a single agent when decomposition overhead or correlated context loss outweighs benefit; validate topology through ablation.

## Rationale, notices, tips and change narration

Every proposed change is grouped by motivation:

- **Need:** user/job/problem and evidence.
- **Change:** visible behaviour, information, data/contract and code impact.
- **Reason:** why this option over alternatives; assumptions and trade-offs.
- **Validation:** scenario/tests/checks and result.
- **Attention:** breaking behaviour, unresolved question, accessibility/security/privacy/cost or migration impact.
- **Next decision:** exact owner and choices.

Notices are severity-controlled: blocker, risk, conflict, assumption, information or success. Tips are contextual, dismissible, limited in frequency and must save effort or prevent a real error. They never obscure the primary task, pressure acceptance or celebrate approval. A change timeline supports filters by user need, artefact, agent/human, status and release; it is not a raw token/tool log.

## Generated frontend architecture rules

- Prefer the client’s established framework, design system, component/library patterns and package manager when safe and supported.
- If no codebase exists, generate a minimal documented stack behind adapters; avoid dependencies whose value is only scaffolding convenience.
- Routes, components, tokens, schemas and mock fixtures are typed and versioned; generated API clients come from contracts.
- Server state, local draft state, URL state and prototype scenario state remain explicit.
- Every screen implements normal, empty, loading, partial, stale, denied, validation, conflict, error, offline and recovery as applicable.
- Use semantic HTML and native controls first; complex canvas has tree/table alternative.
- No hard-coded tenant/user/secret, production endpoint, invented analytics or silent network request.
- Generated code follows repository architecture, tests, telemetry and removal/rollback conventions.

## Sandbox and security boundary

Prototype execution uses ephemeral isolated workers with no business credentials, production data, host filesystem or general network. Dependencies come from approved/pinned registries/cache; builds have CPU/memory/time/process/file/output quotas. The output is scanned for malicious code, secret patterns, external resources, trackers, unsafe HTML/script, licence/provenance and dependency risk before browser render.

Preview origin has strong CSP, sandboxed frames, opaque/session-bound URLs, short expiry and no ambient CollabX credentials. Messages between host and preview use versioned origin-checked schemas. Mock APIs are local/sandbox adapters. Downloads are classified/scanned. Prompt injection in repository/source/UI copy cannot alter tool authority.

## Validation lattice

| Layer | Required validation |
|---|---|
| Intent | required outcomes/users/scenarios/constraints/unknowns traced and reviewed |
| Structure | IA/route/task coverage, stable IDs, no orphan state/transition |
| Contract | schemas/types/API/event/mock parity; invalid/large/Unicode fixtures |
| Code | format, lint, type, unit, architecture, dependency and build |
| Component | state variants, keyboard/focus, screen reader, theme/locale/responsive |
| Browser E2E | primary, exception, permission, validation, failure/recovery and concurrency journeys |
| Visual | screenshot at supported viewports/themes/locales; clipping/overflow/z-index/font/image detection |
| Accessibility | automated plus manual keyboard, screen reader, zoom/reflow, reduced motion, cognitive review |
| Security/privacy | CSP/XSS/injection, dependency/secret, sandbox escape, network, data/analytics and auth-state tests |
| Performance | bundle, LCP/INP/CLS, long tasks, memory, render scale and slow-network behaviour |
| Product evaluation | task success/time/error, comprehension, correction yield, anchoring, burden and trust calibration |
| Patch integrity | exact scope, no unrelated loss, base/hash, migration/rollback and repository CI |

Visual validation inspects rendered screenshots—not only pixel diffs—and records viewport, browser, device scale, fonts, theme, locale, data scenario and commit. A screenshot that looks good cannot pass a broken keyboard journey or fabricated data contract.

## High-target success metrics

| Dimension | Qualification target |
|---|---|
| Intention accuracy | ≥95% critical user/outcome/scenario constraints represented; zero silently invented critical constraint |
| Question efficiency | ≥80% questions judged decision-relevant; no hard-reject question; declining information gain leads to stop/action |
| Clarification burden | median ≤5 blocking questions to reach L1 for a bounded journey; longer sessions justify information gain |
| Prototype task quality | ≥95% primary and ≥90% exception scenario completion in representative study |
| Valid correction yield | materially exceeds static interview/wireframe baseline without increased anchoring/harm |
| Traceability | 100% material screen/flow/rule change traces to scenario/requirement/evidence or explicit assumption |
| Code correctness | all required repository gates pass; zero known critical/high security/accessibility defect |
| Patch precision | ≥95% changed lines/files attributable to stated scope; zero unrelated user-change loss |
| Visual coherence | ≥95% established component/token reuse when equivalent exists; zero critical responsive/locale/theme regression |
| Accessibility | WCAG 2.2 AA; 100% critical journey manual AT evidence; zero inaccessible canvas-only action |
| Performance | generated L4/L5 slice meets host product PERF targets and agreed bundle budget |
| Agent control | 100% runs terminate within budget; zero unauthorised external/destructive effect |
| Reproducibility | exact manifest/base/seed/tool versions reproduce equivalent build and test result |
| Review efficiency | reviewer can understand scope/rationale/risk/test in ≤5 minutes for a bounded patch |

Targets are evaluated per domain, journey, device, locale and risk slice. Aggregate quality cannot compensate for unsupported critical behaviour, unsafe code, inaccessible journey, lost user work or unauthorised action.

## Failure and recovery behaviour

| Failure | User-visible response | Recovery |
|---|---|---|
| ambiguous intention | show assumption/options and ask smallest blocking question | preserve draft/context; resume after decision |
| model invalid/low confidence | show no fabricated prototype update; bounded retry or simpler deterministic transform | alternate qualified model only by route policy |
| stale repository/base | refuse patch; display conflicting files/changes | refresh manifest and re-plan/three-way review |
| tool/test timeout | preserve receipts/partial safe evidence | retry idempotently or narrow; never declare pass |
| patch applies but test fails | mark change set failed and show affected tests | bounded repair or revert patch set |
| sandbox build/render fails | show exact safe error and last good preview | roll back to last immutable version |
| specialist disagreement/overlap | expose alternatives/conflict | lead/human chooses; no last-writer-wins |
| budget exhausted | stop with completed/remaining work and safe state | user reauthorises budget/scope |
| user cancels | terminate descendants/tools and invalidate pending approval | resumable from committed checkpoint |
| security/privacy finding | block preview/repository promotion | remediate and independently retest |

## Release and evidence contract

An experience/code-generation capability release pins agent graph, roles, prompts, models/routes, tools, schemas, question policy, design-system adapter, sandbox image, dependency policy, context compiler, budget, datasets/evaluations and rollback. Required evidence includes intent/trace coverage; representative before/after journeys; change rationale; code/contract diff; visual snapshots; accessibility/security/performance results; real-model repeated evaluations; tool/patch receipts; known limitations; reviewer/authority; and expiry/requalification trigger.

Prototype publication, repository patch acceptance and production release are three distinct approvals. A change in base architecture, design system, framework, model, prompt, tool, sandbox or policy invalidates only the evidence it affects, but cannot be ignored.
