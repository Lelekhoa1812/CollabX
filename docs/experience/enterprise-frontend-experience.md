# Enterprise frontend experience specification

Status: normative · Baseline: `design-v4` · Effective: 2026-08-19 · Owner: product and design councils

## Experience promise

CollabX must feel like a familiar Microsoft-style enterprise product: calm, clear, and decision-first. An executive should understand the main risk in one minute. A participant should contribute in two minutes. An analyst should inspect every source without losing orientation. An engineer should open an approved package and know exactly what to build.

The product is split into two portals over the same initiative and approved delivery package:

- **Business** for sponsors, participants, analysts, approvers, and authorised administrators.
- **Build** for engineers and reviewers.

The assistant is a common helper inside both portals. It is not a separate magical destination and never replaces human approval.

This document owns the frontend product surface, role journeys, plain-language standards, responsive behaviour, and measurable UX gates. The [information architecture](information-architecture-and-design-system.md) owns portal navigation and the shared design system. The [discovery experience](discovery-and-prototyping.md) owns contribution and design-test behaviour. Coding and review surfaces are owned with the [experience generation](../intelligence/experience-generation-and-coding-agent.md) and [coding intelligence](../intelligence/coding-intelligence-and-review-agent.md) specifications.

Accessibility baseline: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). Complex widgets use semantic HTML first and [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) as implementation guidance. Performance reports Core Web Vitals (LCP, INP, CLS) at p75 by device.

## Experience outcomes by audience

| Audience | Portal | Immediate answer | Primary action | Success |
|---|---|---|---|---|
| Sponsor | Business | What needs me, why, and what should I decide? | Decide, delegate, ask for evidence | Decision with evidence in ≤5 minutes |
| Participant / SME | Business (focused) | Why am I here and how is my answer used? | Answer, correct, defer | First useful contribution in ≤2 minutes |
| Business analyst | Business | What is known, disputed, missing, and next? | Understand, design, prepare decision | Highest-value issue identified in ≤30 seconds |
| Approver | Business | What changed, what is excluded, what risk remains? | Approve or reject item by item | No accidental sign-off of stale content |
| Administrator | Business Settings | Is the organisation configured safely? | Configure, review, turn off | Risky changes use confirm-before-continue |
| Engineer | Build | What behaviour is approved and how do I prove it? | Open package, change, test | Expected behaviour and done checks in ≤60 seconds |
| Reviewer | Build | What is missing before merge? | Block, request exception, accept review | Critical missing tests cannot merge silently |

## Usability laws

1. **Role before capability:** Home shows the user’s work, not the full product map.
2. **Decision before navigation:** Every page names the outcome, main issue, owner, and one primary action.
3. **Progressive depth:** Summary → sources → relationships → history → technical details.
4. **One plain vocabulary:** Draft, Needs review, Approved, Disputed, Source needed. Technical synonyms stay under Technical details.
5. **One primary action:** Secondary actions stay available but visually quieter.
6. **Sources one gesture away:** Any material claim opens its source without page hunting.
7. **Corrections beat agreement:** “Not right”, “I am not sure”, and “Ask decision owner” are easy.
8. **No dashboard theatre:** Metrics need definition, timeframe, source, and action.
9. **Assistant stays bounded:** Suggestions are labelled, sourced, and never equal to approval.
10. **Accessible equivalence:** Keyboard, screen reader, zoom, low bandwidth, and non-canvas alternatives keep the same decision power.

## Dual-portal surface catalogue

The pilot surface catalogue replaces the former Tier A / Tier B page list. Related work becomes tabs, drawers, and modes inside these surfaces.

### Shared entry

| Surface | Purpose | Primary action |
|---|---|---|
| Portal home | Choose Business or Build | Enter the right portal |
| Access | Sign in, invitation, consent, accessibility | Continue or start contribution |

### Business portal

| Surface | Nav label | Absorbs former work | Primary action |
|---|---|---|---|
| Home | Home | Portfolio, inbox, notifications | Open top decision or task |
| Initiative | Initiative | Engagement overview, stage summary | Continue recommended work |
| Contribute | Contribute (task) | Session room, surveys, participant prototype | Answer, correct, submit |
| Understand | Understand | Analysis room, evidence, conflicts, people, process vs policy, options, shared terms, Conflict Resolution Brief | Compare sources and prepare decision |
| Design | Design | Prototype studio, experience studio | Test a scenario and capture findings |
| Decide | Decide | Executive brief, review/approval, approved version, change impact | Sign selected items |
| Track | Track | Delivery bridge, clarifications, outcome evaluation | Confirm answers and follow results |
| Settings | Settings | Tenant admin, AI admin, support, privacy | Configure safely |

Business primary navigation is at most: **Home, Initiative, Understand, Design, Decide, Track**.

### Build portal

| Surface | Nav label | Absorbs former work | Primary action |
|---|---|---|---|
| Delivery package | Home | Developer question context, delivery brief | Open workspace |
| Workspace | Workspace | Coding workspace, code discovery, clarification thread | Propose bounded change |
| Review | Review | Requirements coverage review, findings, release readiness | Block, request exception, or accept review |

Build primary navigation is at most: **Home, Workspace, Review**.

Search is a global overlay. Sources, history, hashes, run details, and model names are disclosures or drawers, not top-level pages.

## Role journeys

### Sponsor five-minute decision

1. Home names the decision, why now, and expected effort.
2. Decide opens a brief with recommendation, competing option, dissent, excluded claims, named method, `unassessed` flags, tornado table, open assumptions, and a Decision Quality weak-link sentence.
3. One uncertain claim opens its source without leaving the brief.
4. Sponsor approves, rejects, asks for more evidence, leaves out, accepts divergence, splits scope, or delegates with scope and end date. The assistant cannot sign.
5. Receipt and delivery-package effect appear immediately.

### Participant two-minute contribution

1. Invitation explains purpose, inviter, data use, effort, and alternatives.
2. Participant sets language or accessibility preferences and consents.
3. One neutral question appears with short rationale and progress.
4. Participant answers, corrects the assistant interpretation, or says they are not sure.
5. Recap shows what will be used and how to finish.

Participants use a distraction-free Contribute experience without enterprise navigation.

### Analyst deep-work loop

1. Home or Initiative identifies the highest-value unresolved issue.
2. Understand opens that issue with disagreement, sources, people, and options as tabs. Options show method, per-criterion scores, `unassessed`, tornado table, dissent by stakeholder and assumption map (important+unknown first). Disagreement shows conflict type, both evidence sets, scope/time test result and any blocking SOP/code/policy node. People show the decision owner, missing perspective and “will not average.”
3. Assistant suggests a next step with sources and uncertainty.
4. Analyst saves a draft, corrects it, or asks the decision owner.
5. Design tests uncertainty; Decide prepares item-level sign-off.

### Engineer delivery loop

1. Build Home opens the approved package: outcome, expected behaviour, exceptions, constraints, done checks, open questions.
2. Workspace discovers current code, plans a bounded change, and drafts tests.
3. Clarifications can confirm wording but cannot silently change the approved package.
4. Review checks coverage and findings.
5. Merge and deploy remain separate authorised actions.

## Assistant interaction contract

The assistant appears as:

- a header button and contextual side pane
- inline suggestion cards
- focused questions in Contribute
- a progress strip for long tasks

Every assistant response includes:

1. What I found
2. Why it matters
3. Sources used
4. What remains uncertain
5. Recommended next step
6. Decision owner

Visible actions on a suggestion: **Use as draft** and **Not right**. Secondary menu actions: edit, compare, show sources, add example, ask decision owner. “Use as draft” never means confirmed or approved.

Long tasks show stage, elapsed time, safe partial output, pause, and cancel. Hidden reasoning, prompts, and token logs stay out of the normal experience.

## Plain-language standards

| Internal concept | User-facing language |
|---|---|
| Engagement | Initiative |
| Elicitation | Questions and research |
| Work graph | Linked project record |
| Candidate | Draft |
| AI-generated candidate | Assistant suggestion |
| Contested | Disputed |
| Unsupported | Source needed |
| Gate / blocker | Readiness check / Must fix first |
| Authority | Decision owner |
| Baseline / baseline bundle | Approved version / Approved delivery package |
| Traceability | Why this exists |
| Requirement / acceptance criteria | Expected behaviour / Done checks |
| Process deviation | Difference between policy and actual work |
| Archaeology | Code discovery |
| AC-gated review | Requirements coverage review |
| Agent run | Assistant task |

Interface copy uses short sentences, active voice, and no em dashes. Technical identifiers stay under Technical details, Build, or Settings.

## Visual character

Familiar Microsoft enterprise composition without copying proprietary assets:

- 48px global header with portal switcher
- compact left navigation with icon and label
- neutral grey canvas and white work surfaces
- one restrained blue brand accent
- Segoe UI / system sans stack
- 4px base spacing, 4 to 6px corner radius
- borders and spacing before shadows
- status by text and icon, never colour alone
- assistant origin uses a subtle violet label only

Avoid gradients as status, glass effects behind data, anthropomorphic avatars, permanent three-column clutter, and dashboard theatre.

## Shell anatomy

### Global header

CollabX mark, Business/Build switcher, organisation and initiative context, search, Assistant, alerts, user menu.

### Business and Build shells

- Left navigation limited to the portal’s primary destinations
- Main workspace with title, lead sentence, and one primary action
- Optional assistant pane
- Confirm-before-continue dialogs for risky actions
- Reviewer-only empty/loading/error/stale demonstrations behind `?review=1`

Participant Contribute and some Access modes hide portal navigation.

### Cross-portal handoff

The shared object is an approved delivery package containing outcome, expected behaviour, exceptions, done checks, sources, decision owners, open questions, and version identity. Switching portals preserves initiative, selected item, version, and return path.

## Responsive behaviour

- Wide desktop: navigation, workspace, optional assistant
- Compact desktop/tablet: collapsed navigation, assistant as drawer
- Mobile: Home, Contribute, Decide, Track alerts, evidence reading, Review
- Complex models become guided lists or tables on narrow widths
- At 200% zoom, primary reading and decisions do not require horizontal scrolling

## Safeguards that cannot be simplified away

- Evidence and Source needed labels remain visible
- Disagreement stays symmetric until a decision owner resolves it
- Sign-off is item by item; no approve all
- Dispositions are Approve, Reject, Ask for more evidence, Leave out, Accept divergence, Split scope — not a single binary override
- Tornado sensitivity is a table; issue trees are outlines; pairwise matrix canvas remains out of scope
- The assistant cannot approve, publish a baseline, or contact stakeholders
- Stale or changed versions cannot be signed accidentally
- Critical missing tests block merge when policy requires it
- Deploy, production release, and ERP transport remain separate authorities
- Support and status communication must not leak private content

## Measurable success contract

| Dimension | Target |
|---|---|
| Learnability | ≥90% first-time primary journey without help |
| Sponsor clarity | Outcome, main risk, and required decision identified in ≤60 seconds |
| Participant activation | Purpose understood in ≤45 seconds; contribution in ≤2 minutes |
| Analyst focus | Highest-value unresolved issue identified in ≤30 seconds |
| Engineer clarity | Expected behaviour and done checks reached in ≤60 seconds |
| Status comprehension | ≥95% distinguish Assistant suggestion, human-confirmed information, and approved decision |
| Source access | ≥95% open the relevant source in ≤20 seconds |
| Navigation simplicity | ≤6 primary nav items; ≤1 primary action per normal screen |
| Language safety | No business-facing default view exposes internal codes, model names, hashes, unexplained acronyms, or em dashes |
| Approval safety | Zero accidental sign-off of stale content; no approve-all |
| Accessibility | WCAG 2.2 AA; zero critical/high defects on critical journeys |
| Safety/privacy | Zero cross-tenant UI/cache/search leak |

## Board demonstration contract

Use one coherent overnight-exceptions story:

1. Participant corrects overnight practice.
2. Understand shows policy and practice side by side.
3. Design tests park versus on-call.
4. Decide signs selected items, records dissent, and excludes unsupported volume claims. The PRD is a rendering of that approved package, not a generated source of truth.
5. Build opens the same approved package.
6. Review blocks a missing timer test.
7. Track shows improved cycle time with sample-size limits still visible.

The demonstration includes one correction, one blocked action, and one graceful assistant limitation. It never uses fake production metrics.
