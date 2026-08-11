# Milestone 4 — Collaborative discovery, validation and governed baseline

Status: delivery control · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: product, design and BA councils · Maps to: R3 / T7–T8 and T9.01–T9.04

## Outcome and decision

Prove that approved intelligence improves real collaborative discovery: people can contribute safely, understand status/authority, correct the system, validate low-fidelity designs and publish an immutable baseline through explicit human approval. This milestone qualifies user journeys, not production operations.

Read: [facilitation](../product/conversation-survey-and-facilitation.md), [discovery/prototyping](../experience/discovery-and-prototyping.md), [information architecture](../experience/information-architecture-and-design-system.md), [artefacts/gates](../product/artefacts-traceability-and-gates.md), [NFRs](../engineering/non-functional-requirements.md), and T7–T9 in the [build sequence](../delivery/build-sequence-and-dependency-graph.md).

## Entry and constraints

- Entry: M3-approved capability releases and limitations; representative-user recruitment/consent; accessibility, research and support owners.
- All AI content is visibly proposed, cited/unsupported and correctable. Confirmation and approval are exact-version human acts.
- External invitations/messages require preview and scoped approval. Prototype sandboxes have no production data, credentials or general network.
- Study burden, participant harm or critical accessibility defects stop the affected journey.

## Existing work-package coverage

| Milestone task | Existing work packages |
|---|---|
| M4.01 | T8.01 plus cross-cutting T7.11 |
| M4.02 | T7.01 |
| M4.03 | T7.02 |
| M4.04 | T7.03 |
| M4.05 | T7.04 |
| M4.06 | T7.05 |
| M4.07 | T7.07 |
| M4.08 | T7.08 |
| M4.09 | T7.09, T8.02–T8.05 |
| M4.10 | T8.06–T8.08 |
| M4.11 | T8.09 |
| M4.12 | T8.10–T8.11 |
| M4.13 | T9.01–T9.04 |
| M4.14 | T7.06, T7.10–T7.12, T8.12 |
| M4.15–M4.19 | T8.13–T8.17 respectively |
| M4.20 | M4 release qualification |

All T7.01–T8.17 and baseline-readiness T9.01–T9.04 packages are covered.

## Work plan

### M4.01 — Implement role-based information architecture and design system

1. Build portfolio/engagement navigation, task workspace, inspector, readiness rail and activity panel.
2. Implement canonical status/authority/evidence/conflict/version components with non-colour semantics.
3. Support desktop/tablet/mobile and accessible table/tree alternatives to graphs.
4. Test empty/loading/partial/stale/permission/error/offline/recovery states.

Accept: all critical screens meet WCAG 2.2 AA automated/manual checks; status meaning is consistent with schemas; no inaccessible graph-only task.

### M4.02 — Implement stakeholder, authority and inclusion topology

1. Capture role/expertise/impact/influence/authority/incentive/accessibility/language/timezone with effective dates.
2. Build decision/data/RACI matrices and delegated authority checks.
3. Compute coverage gaps across frontline, dissenting, impacted and low-power classes without sensitive-trait inference.
4. Support secure invite, absence, expiry, anonymous channel and escalation policies.

Accept: all study decisions route to a valid authority; unrepresented critical class blocks discovery readiness unless a valid waiver exists.

### M4.03 — Implement discovery planning and evidence requests

1. Define decision, coverage graph, evidence inventory, stakeholder plan, techniques, schedule and risks.
2. Recommend activities based on information need/burden/sensitivity/availability.
3. Track source requests, access denials, unanswered questions and diminishing returns.
4. Evaluate G1 and explain blockers/warnings/waivers.

Accept: independent BA can reconstruct why every planned activity exists; unsafe/out-of-purpose activity is rejected; G1 never auto-approves.

### M4.04 — Implement adaptive question planner/controller

1. Generate typed question candidates linked to unknown/claim, technique, information gain, authority, sensitivity and stop outcome.
2. Deterministically reject leading premise, repetition, secret solicitation, authority overreach and purpose breach.
3. Calibrate priority weights and fatigue/recap/stop policy using M1/M3 evidence.
4. Display concise rationale and allow skip/defer/private/source/authority routing.

Accept: 100% hard-reject fixtures blocked; critical exception discovery and leading/bias thresholds meet X01 confirmatory protocol; question budget always respected.

### M4.05 — Implement resilient live/async text sessions

1. Build ordered session events, resumable stream, autosave, local draft, reconnect, pause/resume and correction.
2. Keep dialogue, canvas, evidence, conflicts and readiness synchronised to versioned candidates.
3. Support confidential response scope, async expiry and low-bandwidth form alternative.
4. Inject network, duplicate/reorder, model outage, concurrent edit and expired authority.

Accept: no acknowledged response lost; resume does not repeat accepted questions; conflicts are visible; human workflow survives model outage.

### M4.06 — Implement consented voice/transcription

1. Record granular consent for transcription/audio retention and allow text-only participation.
2. Use configured transcription deployment only for approved synthetic/consented data.
3. Show confidence and permit correction before extraction; diarisation never proves identity.
4. Apply shorter audio retention/deletion and caption/accessibility tests.

Accept: 100% extracted material links to confirmed transcript version; consent withdrawal/expiry enforced; word error and critical-term error thresholds are preregistered by locale/domain.

### M4.07 — Implement adaptive surveys and sampling controls

1. Version sections/items/schema/branching/randomisation/quota/eligibility/anonymity/consent/expiry.
2. Freeze published definitions and preserve in-progress version; migrate explicitly.
3. Validate questions for bias, double-barrel, accessibility and small-group deanonymisation.
4. Report response/non-response, sample coverage and uncertainty.

Accept: branch/property tests pass; zero small-cell identity disclosure; abandonment/resume works; reports never label sample count as consensus.

### M4.08 — Implement workshop, canvas and conflict facilitation

1. Support agenda, collaborative models, breakout synthesis, parking lot, action/decision and timebox.
2. Present competing claims/evidence/scope/time/authority symmetrically.
3. Capture dissent and named decision method/owner; never auto-resolve.
4. Test dominant sponsor, strategic silence, circular debate and authority disagreement.

Accept: critical dissent remains visible through baseline decision; conflicts require explicit disposition; contribution channels meet inclusion requirements.

### M4.09 — Implement analysis workbench and collaborative edit semantics

1. Render evidence, glossary, temporal knowledge, process/state/rule/data, requirements and traces from canonical versions.
2. Add version-precondition edits, semantic conflict comparison and stable comments/mentions.
3. Separate canvas layout/presence from semantic truth/approval.
4. Add search with pre-ranking ACL/purpose/as-of filters and accessible result explanations.

Accept: no lost semantic edit under concurrency; search leaks zero inaccessible name/content; every AI proposal opens its source/rationale/version.

### M4.10 — Implement progressive prototype graph and sandbox

1. Define screens/elements/states/transitions/fixtures/rules/permissions/accessibility/annotations as versioned graph.
2. Generate lowest fidelity needed for the uncertainty, with explicit variant hypothesis.
3. Render in resource-limited, network-denied, secret-free sandbox with synthetic fixtures.
4. Run hostile code/content, escape, resource exhaustion and accessibility tests.

Accept: zero sandbox escape/network/secret access; deterministic graph/version render; keyboard/screen-reader completion of critical scenarios.

### M4.11 — Implement element-level scenario feedback

1. Capture participant role, consent, scenario, prototype/element/state/action, outcome, observation/opinion and severity.
2. Link finding to evidence, requirement, design, decision and proposed change.
3. Compare variants and preserve contradictory findings/sample context.
4. Run semantic impact traversal after accepted correction.

Accept: 100% material finding traces to exact prototype and scenario; no finding becomes approved requirement automatically; affected descendants are correctly flagged.

### M4.12 — Implement artefact projections and visual QA

1. Create versioned template/section-anchor DSL over canonical items.
2. Render accessible DOCX/PDF/XLSX/CSV/JSON/OpenAPI/BPMN/SVG as applicable.
3. Validate citations, unsupported labels, classification/watermark, pagination and visual accessibility.
4. Round-trip supported imports without silent canonical overwrite.

Accept: semantic hashes/trace manifest match baseline; critical visual defects zero; lossy import is blocked or explicitly reviewed.

### M4.13 — Implement review, approval, waiver and immutable baseline

1. Route item/element/model reviews by authority/risk with comment/disposition.
2. Enforce separation, exact version/hash, delegation/expiry and typed waiver.
3. Evaluate G2–G5 blockers and require named human decisions.
4. Sign immutable baseline bundle; compare/supersede without mutation.

Accept: content mutation invalidates pending approval; unauthorised/self-conflicted approval denied; baseline manifest is signature/hash verifiable and exactly reproducible.

### M4.14 — Run confirmatory X01/X04/X05 and E2E journeys

1. Test sponsor charter, facilitator discovery, SME conflict, frontline prototype, analyst evidence edit, engineer trace question, approver baseline and data-rights journeys.
2. Randomise/compare approved conditions against baseline workflow; include disability, locale, role/power and device slices.
3. Measure coverage/hour, burden, correction, trust calibration, prototype valid corrections/anchoring, task success/time/error and support need.
4. Run multi-tenant/browser accessibility/security/resilience E2E and retain redacted evidence.

Accept: ≥95% critical needs/exceptions discovered; ≥30% stakeholder-time improvement remains a pilot hypothesis but direction/CI is reported; trust calibration and valid-correction yield improve without material burden/anchoring; zero critical harm/accessibility/security failure.

### M4.15 — Deliver the coherent enterprise frontend page surface

1. Deliver every Tier-A route from the [enterprise frontend specification](../experience/enterprise-frontend-experience.md): sign-in/invitation, portfolio, engagement, discovery, session, evidence, analysis, conflict, prototype, requirement/trace, review, baseline and developer question.
2. Deliver the Tier-B pages required for the pilot roles: executive brief, stakeholders/authority, sessions/surveys, domain pack, options/decision, change impact, delivery, outcome, inbox/search and administration/support/lifecycle.
3. Enforce page coherence, one-primary-decision hierarchy, role/density modes, evidence inspector, responsive/mobile alternatives, safe deep links and every applicable empty/loading/partial/stale/denied/conflict/error/offline/recovery state.
4. Validate the executive five-minute, participant two-minute, BA deep-work, frontline prototype and engineer clarification journeys using representative data and users.

Accept: ≥95% critical journey completion; ≥90% first-time unassisted completion; ≥95% proposed/confirmed/approved comprehension; evidence found in ≤20 seconds for ≥95% tasks; WCAG 2.2 AA with zero critical/high defect; all PERF frontend targets pass.

### M4.16 — Deliver progressive intention and Q&A studio

1. Build the integrated brief, intent graph, conversation/question, journey, viewport, structure inspector, change set, validation and run-control workspace.
2. Render question forms for free-form, MCQ, multi-select, checklist, ranking, scale, scenario and diff confirmation with rationale, “unknown”, add option, skip/defer, privacy and authority routing.
3. Synchronise collective answers without false consensus; show aligned/divergent/missing perspectives, scope/time/authority conflicts and the next smallest experiment/decision.
4. Show rationale/motivation, assumption, blocker/risk/conflict, affected trace, validation, contextual dismissible tip and required next decision for every material proposal.

Accept: 100% format/branch/authority/accessibility fixtures pass; no hard-reject question; ≥80% decision-relevant question rate; users correctly explain why/what-changed/what-needs-decision in ≥90% study tasks.

### M4.17 — Deliver coherent mock data and progressive fidelity

1. Implement versioned mock-data schema/seed/scenario packs with happy, empty, loading, stale, denied, validation, conflict, error/recovery, boundary, Unicode/RTL/timezone and accessibility cases.
2. Implement L0 narrative through L4 sandbox-thin-slice progression, explicit fidelity claim/limitation and evidence-driven promotion.
3. Generate journey/IA/route/component/state/data/permission/accessibility graphs using stable IDs and bind every material element to scenario/requirement/evidence or explicit assumption.
4. Validate dashboard mathematical consistency, deterministic reproduction, synthetic labelling, no real-person imitation and variant hypotheses through representative scenario tests.

Accept: 100% material elements traced; mock totals/denominators consistent; same seed/manifest reproduces equivalent state; zero production data/credential/network use; valid correction yield beats static baseline without increased anchoring.

### M4.18 — Deliver governed repository coding-agent mode

1. Bind an explicitly authorised repository/ref/base revision/path/tool policy and compile the immutable context/instruction/repository/validation manifest.
2. Expose inspect/plan/change-set/patch/diff/rebase/revert/test tools through the gateway; preserve dirty/unrelated work and keep commit/push/PR/deploy separately disabled unless explicitly authorised.
3. Show file/semantic/visual deltas grouped by user need and rationale, plus assumptions, risks, tests, affected contracts and rollback before review.
4. Exercise one production-like bounded frontend slice through exact-base patch, generated/updated tests, browser render, critic findings, bounded repair and human review.

Accept: ≥95% changed lines/files attributable to scope; zero unrelated loss/path escape/unauthorised external effect; stale base cannot silently apply; all required repository/visual/accessibility/security tests pass; reviewer understands bounded change/risk in ≤5 minutes.

### M4.19 — Run full frontend and experience-generation E2E qualification

1. Run board-quality synthetic story from business outcome through elicited exception, evidence conflict, generated mock, repository patch proposal, scenario feedback, requirement change, approval and delivery question.
2. Include correction, denial, model/tool failure, cancellation/resume, stale patch, mobile/keyboard/screen-reader/RTL, slow network and tenant isolation.
3. Execute deterministic and repeated real-model suites with pinned provider, prompts, context, tools, data seed, base repository and graders; compare manual and generic-model baselines.
4. Inspect screenshots and DOM/accessibility tree across all supported viewports/themes/locales/states, not pixel diffs alone; publish failure examples and limitations.

Accept: all critical frontend/generation targets pass, zero critical security/privacy/accessibility/authority/patch issue, no fabricated metric/test, and independent product/design/engineering reviewers approve evidence rather than presentation polish.

### M4.20 — Hold collaboration and baseline release decision

1. Compile UX, accessibility, research, security, sandbox, artefact and baseline evidence.
2. Independently audit status/authority comprehension, consent, dissent preservation and approval integrity.
3. Decide each journey `pilot`, `constrain`, `rework` or `reject`; document training/support and known limitations.
4. Pin release manifests and hand pilot only approved paths.

Accept: signed evidence manifest; WCAG 2.2 AA audit; all critical participant harms resolved; no pilot path relies on a disabled/unqualified M3 capability.

## Success metrics

Task gates are controlling. Report task success/time/error; correction success; evidence inspection; authority/status comprehension; critical fact/exception coverage; question yield and burden; dissent representation; prototype correction yield/anchoring; intent/trace coverage; mock-data coherence; patch precision/unrelated change; component reuse; visual/responsive/locale regression; reviewer comprehension; approval cycle; accessibility defects by severity; and support requests. Metrics include numerator/denominator, role/device/language/disability/framework slices, confidence interval and missing-data rate.

## Runnable validation contract

```bash
task docs:check
task test:ui test:e2e test:collaboration test:concurrency test:session-resume
task test:accessibility-automated test:accessibility-manual
task test:sandbox test:artefact-render test:baseline-signature test:authority
task test:frontend-pages test:component-states test:visual test:responsive-locale
task test:experience-intent test:mock-data test:code-workspace test:patch-integrity
task eval:preflight --profile eval-real --redact
task eval:run --experiment X01,X04,X05,X09,X10 --stage confirmatory --profile eval-real
task evidence:verify --milestone M4
```

## Exit and handoff

M5 receives an immutable pilot release bundle, supported journeys/roles/locales, training and support needs, workload/cost envelope, participant/research limitations, approved connector scopes and explicit pilot stop/rollback criteria. Pilot data/use cannot expand beyond these without new review.
