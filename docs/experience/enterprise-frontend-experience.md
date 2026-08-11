# Enterprise frontend experience specification

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: product and design councils

## Experience promise

CollabX must feel like a calm, elite enterprise instrument: authoritative without bureaucracy, intelligent without theatre, and powerful without exposing organisational complexity all at once. The product should impress an executive in five minutes, let a participant contribute in one minute, and let a professional analyst inspect every assumption for hours without losing orientation.

The visual “wow” is not animation or dashboard density. It is the immediate recognition that fragmented conversations, sources, decisions, requirements and delivery evidence have become one coherent, living and trustworthy model. The interface makes the next decision obvious, preserves dissent, and never makes an AI proposal look more authoritative than its evidence.

This document owns the frontend product surface. The [information architecture](information-architecture-and-design-system.md) owns canonical navigation vocabulary; the [discovery experience](discovery-and-prototyping.md) owns facilitation/prototype semantics; the [experience-generation and coding-agent specification](../intelligence/experience-generation-and-coding-agent.md) owns generated client experiences.

The accessibility baseline is [WCAG 2.2](https://www.w3.org/TR/WCAG22/); complex widgets use semantic HTML first and the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) as implementation guidance, not as a substitute for user testing. Web performance reports laboratory and field evidence; current [Core Web Vitals](https://web.dev/articles/vitals) are LCP, INP and CLS measured at p75 and segmented by device.

## Experience outcomes by audience

| Audience | Situation | Immediate answer the UI must provide | Primary action | Success |
|---|---|---|---|---|
| Executive/sponsor | deciding whether a change is healthy | Are we solving the right problem; what decision or risk needs me? | decide, unblock, inspect value | decision completed with evidence in ≤5 minutes |
| Business participant/SME | invited to contribute briefly | Why am I here; what is being asked; what will happen to my answer? | answer, correct, challenge, defer | first meaningful contribution in ≤2 minutes |
| Frontline/affected user | validating actual work | Does this represent my reality, including exceptions? | walk scenario, annotate prototype | valid exception/correction captured without analyst mediation |
| BA/product lead | running an engagement | What is known, contested, missing and ready? | plan, facilitate, model, review | complete a daily workflow without tool/context switching |
| Designer | turning intent into testable experience | Which scenario/uncertainty should design resolve? | model journey, generate/edit/test | every finding traces to scenario and requirement |
| Engineer/vendor | implementing approved intent | What exact behaviour is expected and what changed? | inspect contract, ask question, report deviation | answer is versioned, authoritative and test-linked |
| Approver/risk/data owner | exercising authority | What changed, why, evidence, impacts and residual risk? | approve/reject/waive | no accidental or uninformed approval |
| Tenant administrator | operating access/policy/integrations | Is the tenant configured safely and within contract? | configure, review, revoke | high-risk state visible and recoverable |
| Service/support operator | diagnosing a failure | Who/what is affected and what is safe to do? | triage, contain, communicate | restore without content leakage or state ambiguity |

## Product-wide usability laws

1. **Decision before navigation:** every landing view identifies the current objective, blockers, next decisions and owner.
2. **Progressive depth:** summary → evidence → history/technical detail; a novice is not forced through expert controls, and an expert is never trapped in a summary.
3. **One semantic vocabulary:** candidate, confirmed, contested, approved, baselined, superseded and unsupported mean exactly the same everywhere.
4. **One primary action per state:** secondary actions remain available but never compete visually with the next meaningful decision.
5. **Evidence one gesture away:** a material claim reveals source, scope/time, authority and counterevidence without page hunting.
6. **Corrections beat confirmations:** correcting, challenging or declaring “unknown” is at least as easy as agreeing.
7. **No dashboard theatre:** every metric has definition, timeframe, provenance, trend and action; decorative scores are prohibited.
8. **Work survives interruption:** drafts, filters, selection, panel layout and resumable streams persist within policy.
9. **AI stays visibly bounded:** show proposal status, concise rationale, checks, cost/time where useful and required human act; never expose hidden reasoning.
10. **Accessible equivalence:** keyboard, screen reader, zoom, low bandwidth and non-canvas alternatives deliver the same decision capability.

## Visual character and design language

The default theme is quiet, precise and high-contrast: generous whitespace, strong typographic hierarchy, restrained neutral surfaces, one brand accent and semantic colours that always include icon/text. Dense professional views use alignment and rhythm, not smaller unreadable type. Avoid gradients as status, glass effects behind data, gratuitous shadows, excessive rounding, animated charts, anthropomorphic agent avatars and permanent three-column clutter.

| Layer | Contract |
|---|---|
| Typography | highly legible variable sans for UI; optional editorial display face only for portfolio/brief titles; tabular figures for measures; minimum 16px body equivalent |
| Spacing | 4/8px rhythm; density modes change vertical spacing, never target size or semantics |
| Colour | neutral canvas/surfaces, accessible brand accent, semantic success/warning/blocker/info; WCAG contrast enforced after tenant theming |
| Shape | modest radius; cards only for real grouping; borders and whitespace establish hierarchy before shadows |
| Motion | 120–240ms purposeful transitions, reduced-motion equivalent; no motion required to understand state |
| Iconography | consistent line family with visible labels for unfamiliar actions; AI icon means origin only |
| Data visuals | direct labels, accessible table alternative, confidence/unknowns visible, no truncated axes or pseudo-precision |
| Tone | concise, respectful, evidence-oriented; no fake empathy, celebration for approvals, blame or “magic” language |

An executive-quality screen should have a clear title and decision sentence, at most four headline indicators, one primary visual narrative, visible risks/unknowns and one unmistakable action. Operational/analytical detail opens in place or in a stable inspector.

## Global product shell

### Global bar

- CollabX mark and product home.
- tenant and engagement switcher with classification/residency indicator;
- universal search/command palette, recent items only after permission filtering;
- create/contribute action appropriate to role;
- notifications/inbox with unread reason and quiet-hours policy;
- help, service status and safe support handoff;
- user menu with role/delegation, locale, accessibility, sessions and sign-out.

### Engagement header

Shows outcome sentence, lifecycle stage, current baseline, classification, responsible sponsor/BA, last meaningful change and health—not a generic project title alone. A sticky stage rail exposes current gate and next decision. Breadcrumbs show semantic location, not implementation routes.

### Workspace anatomy

- primary task canvas occupies visual priority;
- context inspector opens source/version/relations without navigation loss;
- readiness rail shows blockers, unknowns, coverage and decisions, collapsible by default for participants;
- activity drawer contains comments/actions/run progress, never canonical meaning;
- command bar supports role-valid actions and keyboard access;
- URL preserves engagement, object, version, view and safe filters for deep links.

### Desktop reference frame

```text
┌──────────────────────────────── Global bar · tenant · search · inbox · user ────────────────────────────────┐
├──────────────────────── Engagement outcome · stage · baseline · classification · owner ─────────────────────┤
│  Discover                 │                                                                                  │
│  Understand               │  Page title + one-sentence decision                                             │
│  Analyse                  │  Status / changed-since / primary action                                         │
│  Prototype                │  ┌──────────────────── Primary task canvas ────────────────────┐ ┌─ Inspector ─┐ │
│  Govern                   │  │ model, brief, table, session, prototype or review           │ │ evidence    │ │
│  Deliver                  │  │ with contextual AI proposal/change and inline recovery      │ │ history     │ │
│  Evaluate                 │  └──────────────────────────────────────────────────────────────┘ │ relations   │ │
│                           │  Blockers · unknowns · decisions appear as a collapsible rail     │ versions    │ │
└───────────────────────────┴──────────────────────────────────────────────────────────────────┴─────────────┘
```

The desktop rail is approximately 224px and collapsible; the inspector is approximately 360px and opens only when context is requested. The task canvas keeps a readable maximum line length for prose and uses available width for tables/models. Do not show left rail, permanent inspector and permanent activity panel together below wide-screen breakpoints. Executive briefs replace the navigation rail with a focused return path when opened from a decision notification; participant sessions hide enterprise navigation entirely.

## Page and route delivery catalogue

### Tier A — indispensable pilot journeys

| Page/route | Purpose and hero state | Core components | Primary action | Quality target |
|---|---|---|---|---|
| Sign-in and tenant discovery | enter correct organisation safely | enterprise SSO, tenant chooser, recovery, service notice | continue with SSO | ≥98% first-attempt success excluding IdP failure; no tenant-name leakage |
| Invitation/contribution landing | explain purpose, consent, time and authority | inviter, purpose, data use, estimate, accessibility/language, defer | start contribution | median time-to-understand ≤45s; ≥95% purpose comprehension |
| Portfolio home | show outcome portfolio and decisions needing attention | outcome cards/table, decision inbox, risks, value trend, recent change | open highest-priority decision | target item found ≤30s in usability study |
| Engagement overview | establish shared truth and next move | outcome, stage, readiness, decisions, latest evidence, timeline, team | continue recommended work | ≥90% users correctly identify stage/blocker/owner |
| Discovery plan | organise stakeholders, sources, sessions and gaps | coverage map, stakeholder/source matrix, calendar, risk/consent | schedule/request next evidence | missing critical class/source always visible |
| Live/async session room | conduct safe focused elicitation | question+rationale, answer, canvas preview, evidence, progress, pause/privacy | answer or correct | no lost acknowledged response; first contribution ≤2 min |
| Evidence library/viewer | inspect originals and exact spans | facets, document viewer, anchor, provenance, access/freshness, related claims | cite/challenge span | material source reachable from claim in ≤1 interaction |
| Analysis room | synthesise goals, process, rules, data and requirements | model canvas/table, dialogue, inspector, readiness, change markers | resolve highest-value unknown | expert retains context across model changes |
| Conflict review | understand competing interpretations | symmetric claim/evidence cards, scope/time/authority diff, options, decision owner | request evidence or decide | ≥90% users identify unresolved conflict correctly |
| Prototype studio | create/test linked experience | journey rail, viewport, scenario controls, element tree, properties, feedback | run next uncertainty scenario | finding links to exact element/state/version |
| Requirement/trace view | prepare implementable baseline | requirement editor, scenarios, evidence, design/test trace, quality lint | resolve blocker/review | ≥95% critical trace coverage; no hidden unsupported material fact |
| Review and approval | exercise informed authority | semantic diff, evidence/risks, comments, waivers, signer scope | approve/reject/request change | exact changed version understood; no one-click approve-all |
| Baseline viewer | consume immutable approved package | manifest summary, artefact tabs, trace, signatures, open items, export | share/export authorised bundle | displayed/rendered hashes match manifest 100% |
| Developer question | resolve delivery ambiguity | requirement context, source/decision, question thread, authority, SLA | ask/answer with evidence | response never silently edits baseline |

### Tier B — enterprise operation and continuous value

| Page/route | Purpose | Core components and primary action |
|---|---|---|
| Executive decision brief | approve or steer in minutes | outcome/value trend, changed assumptions, top risks, options, recommended decision, evidence drill-down |
| Stakeholders and authority | manage coverage and decision rights | topology/table, authority matrix, inclusion gaps, delegation/expiry, invite/revoke |
| Sessions and surveys | plan/operate participation | calendar/list, status, response/sample coverage, burden, consent, create/run/close |
| Glossary/domain pack | steward enterprise meaning | terms/concepts/rules, conflicts, impact, branch/review/release/rollback |
| Options and decision | compare alternatives honestly | criteria/weights, sensitivity, costs/harms, dissent, decide/revisit |
| Change impact | understand semantic downstream effect | before/after, traversal, invalidated/suspect/unaffected, owners, rebaseline |
| Delivery bridge | monitor implementation fidelity | slices, questions, deviations, tests, release evidence, trace gaps |
| Outcome evaluation | decide enhance/retire/close | baseline vs actual, confidence, adoption, harms, limitations, recommendation |
| Personal work inbox | focus cross-engagement responsibilities | reviews, questions, actions, expiring delegation/waiver, notifications |
| Universal search | retrieve permitted knowledge/action | grouped results, reason matched, scope/time/status, saved view |
| Tenant administration | operate tenant safely | identity/groups, policy, data/retention, integrations, models, usage, audit, branding |
| AI and domain administration | govern capability releases | provider/model, prompt/tool/policy, evaluations, canary, kill switch, pack stewardship |
| Service/support console | operate health without content exposure | cases/incidents, affected versions/tenants, SLO, runbook, safe trace, communicate |
| Rights and offboarding | fulfil governed lifecycle | request scope, identity/authority, export/hold/deletion progress, certificate |

### Page coherence rules

- Do not create a new page when a contextual panel, mode or saved view completes the same job.
- Do not put creation, review and administration controls together merely because they share an entity.
- A page owns one user decision and no more than two persistent secondary panels.
- Tabs represent peer views of one object; workflow steps use a stage rail; filters never masquerade as tabs.
- Tables default to the columns needed for the current decision and offer saved role views; no horizontal-scroll dependency for primary actions.
- Dashboards link every signal to the underlying work and owner. “View all” is never the main journey.

## Cross-user journeys

### Executive five-minute decision

1. Notification names the decision, why now and expected review time.
2. Decision brief opens on outcome, changed context and material consequences.
3. Executive inspects recommendation, competing option, evidence strength, dissent and risk.
4. A single uncertain claim opens its exact evidence and scope without losing the brief.
5. Executive approves, rejects, requests evidence or delegates with scope/expiry; receipt and downstream impact appear immediately.

Target: ≥90% critical decision comprehension; median completion ≤5 minutes; zero approval of a changed/stale version in test suite.

### Participant two-minute contribution

1. Invitation explains purpose, inviter, data use, estimated effort and alternatives.
2. Participant selects language/accessibility/privacy path and consents.
3. One neutral question appears with short rationale and progress.
4. Participant answers, chooses MCQ/checklist/rank/free-form as appropriate, corrects the live interpretation or declares unknown.
5. Recap shows what will be used, open question and retention/control options.

Target: first valid response ≤2 minutes median; ≥95% purpose/data-use comprehension; abandonment and burden segmented and reviewed.

### BA deep-work loop

1. Overview identifies the most decision-relevant unknown, gap or conflict.
2. BA enters analysis room with canvas, evidence and dialogue aligned to that focus.
3. CollabX proposes a model delta and explains evidence, uncertainty and impact.
4. BA edits or challenges directly; related views update as candidates, not approved truth.
5. BA routes the unresolved point to the right source/authority and returns later without rebuilding context.

Target: ≥90% daily benchmark tasks completed without external tracking document; context-recovery after interruption ≤60 seconds.

### Frontline prototype validation

1. Participant receives scenario, role and synthetic starting state in plain language.
2. Prototype runs in distraction-free mode with accessible alternative.
3. Behaviour and explicit feedback bind to element/state/version with consent.
4. Participant corrects rule/flow, marks severity and explains a real exception.
5. CollabX shows resulting candidate change and asks for confirmation, never approval.

Target: ≥90% scenario completion; valid-correction yield beats interview-only baseline without higher anchoring/harm.

### Engineer delivery clarification

1. Engineer opens work item and sees exact baseline requirement/scenario/API/test relation.
2. Ambiguity is submitted with affected interpretation and urgency.
3. CollabX retrieves sources and proposes an answer, clearly marking required authority.
4. Authority/BA confirms or corrects; response version is immutable.
5. If meaning changes, change impact/rebaseline begins rather than silently overwriting delivery work.

Target: median time to authoritative answer set per pilot; ≥95% material answers cited and authority-valid; zero silent baseline mutation.

## Components and interaction primitives

### Foundation components

Button/link/menu, text/number/date/time input, combobox, searchable multi-select, checkbox/radio/switch, file upload, date range, table, tree, tabs, disclosure, dialog/drawer/popover, tooltip, toast/inline alert, progress/skeleton, pagination/virtual list, chart with table alternative and command palette. Every component documents keyboard model, focus, screen-reader state, validation, responsive, localisation and destructive behaviour.

### CollabX semantic components

- `EpistemicBadge`: proposed/observed/inferred/confirmed/contested/rejected/superseded.
- `EvidenceCitation`: source, exact span, freshness, authority, scope and access state.
- `UnsupportedMarker`: explicit missing evidence plus route to request/label/resolve.
- `VersionChip` and `SemanticDiff`: exact version/hash, changed meaning and approval invalidation.
- `ConflictPair`: balanced representations, common/different scope and decision route.
- `AuthorityCard`: role, decision scope, delegation, effective dates and conflict of interest.
- `GateSummary`: blockers, warnings, waivers and next authorised decision.
- `AgentRun`: capability/version, plan summary, stage, elapsed/budget, partial result, pause/cancel.
- `TracePath`: outcome through evidence/requirement/design/test/release, with broken-link status.
- `ImpactMap`: invalidated, suspect, added and unchanged descendants with owners.
- `PrototypeViewport`: device, scenario, data fixture, accessibility tree and safe execution status.
- `DestructivePreview`: exact scope, affected objects/people, reversibility, authority and receipt.

## AI interaction contract

AI appears as contextual assistance, never a separate magical destination. A proposal card shows what changed, why it matters, evidence for/against, assumptions, confidence method, checks, affected items, model/capability version and required next human act. Long work provides acknowledgment in <1 second, stage/progress, safe partial output, cancel and completion notification.

The user can always accept as candidate, edit, compare, reject with reason, ask why/source, add counterexample, route to authority or report harm. Acceptance of wording never equals confirmation of fact or approval of baseline. Suggestions are ranked by decision value and burden; tips can be dismissed and do not repeatedly return unless context materially changes.

## Collaboration and notification contract

Presence and cursors indicate activity, not agreement. Optimistic edits use server version and semantic conflict UI. Comments anchor to stable object/element/version, have open/resolved/stale state and never alter canonical content. Mentions create notifications, not authority.

Notifications are bundled by decision, not emitted per low-level event. Each says what changed, why the recipient, urgency/expiry, estimated effort and one primary action. Users control channel, digest, quiet hours and delegation; security/incident notices follow policy. Email/chat messages reveal no restricted project names or content before authentication.

## Responsive, offline and localisation behaviour

- Desktop ≥1280px: task canvas plus one inspector; readiness/activity uses switchable drawer or wide-screen rail.
- Compact desktop/tablet 768–1279px: single primary canvas, inspector drawer, persistent stage context.
- Mobile <768px: contribution, review, evidence, notifications and light edits; complex authoring becomes guided form/table, not miniaturised canvas.
- Offline/intermittent: safe read cache and encrypted local drafts where policy allows; approvals, external actions and authority changes require online revalidation.
- Localisation: externalised strings, expansion-safe layouts, RTL, locale numbers/dates/timezones, canonical term mapping and translation provenance.

No device tier loses the ability to understand evidence, correct a proposal or decline participation.

## Frontend quality, security and privacy

- CSP, trusted types where applicable, dependency integrity, output encoding, CSRF/session protection, secure upload and sandboxed untrusted render.
- Authorisation is server-side; hiding controls is usability only. Cached/query/prefetch data is tenant/purpose scoped and cleared on tenant/session switch.
- URLs, analytics, errors and client logs contain no secrets or restricted content. Replay/session analytics are opt-in, redacted and disabled on sensitive fields.
- Destructive/action approvals are bound to exact diff, target, scope, actor and expiry; reauthentication/step-up where policy requires.
- Browser back/refresh, double submit, stale tab, multi-tab and clock/locale differences are tested explicitly.

## Measurable success contract

| Dimension | High target before broad production | Evidence |
|---|---|---|
| Learnability | ≥90% first-time users complete their primary journey without facilitator help | role-based moderated/unmoderated study |
| Executive clarity | ≥90% correctly identify outcome, top blocker, evidence status and required decision | five-minute brief test |
| Participant activation | median ≤2 minutes invite-to-valid-contribution; ≥95% understand purpose/data use | instrumented study/pilot |
| Professional efficiency | ≥30% less stakeholder/BA time for equal-or-better validated coverage | controlled/pilot comparison |
| Task success | ≥95% critical journey completion; ≥90% non-critical | E2E plus representative-user study |
| Error recovery | ≥95% recover without support; zero acknowledged-input loss | failure-injection/usability tests |
| Status comprehension | ≥95% distinguish proposed, confirmed and approved; ≥90% understand contested/unsupported | comprehension test |
| Evidence access | ≥95% locate supporting/challenging span in ≤20 seconds | task study/telemetry |
| Accessibility | WCAG 2.2 AA, zero critical/high defect; 100% critical journeys with affected-user evidence | automated/manual/AT audit |
| Performance | meet all PERF NFRs; local interaction response <100ms; no interaction long task >50ms p75 on target device | RUM and lab |
| Visual quality | zero critical visual regression at supported viewport/locale/theme; ≥95% design-token/component conformance | screenshot/DOM/design audit |
| Trust/calibration | users accept supported and reject/challenge unsupported propositions materially better than prose baseline | X04/pilot study |
| Safety/privacy | zero cross-tenant UI/cache/search leak, unauthorised action or sensitive analytics capture | adversarial E2E/security suite |
| Adoption | ≥80% target-role activation and ≥60% retained core-journey use at pilot-defined interval | governed product analytics |

No aggregate UX score can offset a critical accessibility, authority, privacy, loss-of-work or misleading-status failure.

## Design and frontend delivery evidence

Every page ships with: user/job/decision; route and permission; content hierarchy; normal/empty/loading/partial/stale/offline/error/denied states; responsive wireframes; keyboard/focus/screen-reader specification; copy; analytics with data classification; API/event dependencies; visual snapshots at supported themes/locales; unit/component/E2E/accessibility/security/performance tests; and owner/removal path.

The design review sequence is task flow → low-fidelity usability → content/status comprehension → component/interaction specification → high-fidelity visual system → coded component → browser/assistive-technology/visual/performance verification. A polished mockup cannot skip the earlier gates.

## Board-quality demonstration contract

A board demonstration uses real product behaviour on synthetic, internally coherent data and tells one end-to-end story: business outcome arrives; frontline exception is elicited; conflicting policy appears with evidence; a low-fidelity prototype tests the uncertainty; requirement and test update as candidates; authorised baseline is reviewed; delivery deviation returns; value is measured. The demonstration includes one correction, one denied/guarded action and one graceful model failure. It never uses fake production metrics, hidden scripted state or claims beyond the release evidence.
