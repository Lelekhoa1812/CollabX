/** Neutral product journey guidebook (99) */
export function buildJourneyPages({ barePage, MOCK, icon, badge, demoBanner }) {
  const pages = {};

  const chapters = [
    {
      id: "ch0",
      num: "0",
      title: "How to use this guide",
      phase: "Overview",
      href: "00_portal_home.html",
      shot: null,
      summary:
        "This guide walks the Meridian Mutual overnight claim exceptions story across Business and Build. The assistant drafts. Named people decide. Open each linked screen to explore the live prototype.",
      notes: [
        "Prefer a local static server from the prototype folder so relative screenshots and links load cleanly.",
        "Use Reset demo on any page if leftover browser state makes the story confusing.",
        "The seven walkthrough steps on portal home match the chapters below.",
      ],
    },
    {
      id: "ch1",
      num: "1",
      title: "Portal home",
      phase: "Entry",
      href: "00_portal_home.html",
      shot: "journey-shots/01_portal_home.png",
      summary:
        "Entry point for the dual-portal product. Business is for sponsors, analysts, and participants. Build is for engineers and reviewers. Both share the same overnight exceptions initiative.",
      notes: [
        "Hero states the outcome: clearer overnight claim handling with evidence and approval.",
        "Walkthrough lists the end-to-end path from frontline input to measured results.",
        "Quick starts jump into common surfaces. Presenter guide returns here.",
      ],
      steps: [
        "Open portal home.",
        "Choose Business, Build, or Start demo.",
      ],
    },
    {
      id: "ch2",
      num: "2",
      title: "Access and invitation",
      phase: "Collect",
      href: "01_business_access.html",
      shot: "journey-shots/02_access_invite.png",
      summary:
        "Participants enter through a focused invitation rather than full enterprise navigation. The invite explains why they were asked and how answers will be used.",
      notes: [
        "Invitation is prepared for Maya Ortiz by Jordan Lee because policy and overnight practice disagree.",
        "Consent, language, and larger text controls sit before the contribution session.",
        "Assistant suggestions in the later session remain drafts only.",
      ],
      steps: [
        "Open the Invitation tab.",
        "Confirm consent and continue to Contribute.",
      ],
    },
    {
      id: "ch3",
      num: "3",
      title: "Contribute",
      phase: "Collect",
      href: "04_business_contribute.html",
      shot: "journey-shots/03_contribute.png",
      summary:
        "Frontline input for overnight claim handling. The participant answers from real work. The assistant drafts a finding that is not approved.",
      notes: [
        "Core question: what happens after 8 pm when no supervisor is online.",
        "Use as draft, Not right, and I am not sure are available on the suggestion.",
        "Optional synthetic claim scenario uses fixture FNOL-88421.",
        "Submitted answers carry into Understand for this browser demo.",
      ],
      steps: [
        "Select an overnight action.",
        "Use as draft or mark Not right.",
        "Submit to continue.",
      ],
      extraShot: {
        src: "journey-shots/04_contribute_draft.png",
        caption: "After Use as draft — labelled draft, not approved truth.",
      },
    },
    {
      id: "ch4",
      num: "4",
      title: "Understand",
      phase: "Sort",
      href: "05_business_understand.html",
      shot: "journey-shots/05_understand.png",
      summary:
        "Compare sources around one issue. Policy and practice stay side by side until a decision owner resolves the disagreement.",
      notes: [
        "Selected issue: four-hour supervisor rule versus overnight parking.",
        "Sources used shows included evidence and excluded call logs waiting on consent.",
        "Tabs cover Disagreement, Sources, People, Policy vs actual work, Options, and Shared terms.",
        "Assistant recommendations remain drafts with Use as draft / Not right.",
      ],
      steps: [
        "Review the disagreement pair.",
        "Open Sources and People.",
        "Ask the assistant about uncertainty if useful.",
      ],
      extraShot: {
        src: "journey-shots/06_understand_sources.png",
        caption: "Sources tab — freshness, consent gates, and Build-linked behaviour.",
      },
    },
    {
      id: "ch5",
      num: "5",
      title: "Home and Initiative",
      phase: "Orient",
      href: "02_business_home.html",
      shot: "journey-shots/15_home_alerts.png",
      summary:
        "Day-to-day Business orientation. Home shows what needs attention. Initiative summarises status, coverage, and the recommended next step.",
      notes: [
        "Alerts connect participant correction, blocked merge, and sample-size limits.",
        "My work lists short tasks with owners and effort.",
        "Initiative keeps readiness and recent changes in one place.",
      ],
      steps: [
        "Open Home from Business navigation.",
        "Optionally open Initiative for coverage and history.",
      ],
      extraShot: {
        src: "journey-shots/16_initiative.png",
        caption: "Initiative overview — status, coverage, recommended next step.",
      },
    },
    {
      id: "ch6",
      num: "6",
      title: "Design",
      phase: "Preview",
      href: "06_business_solution.html",
      shot: "journey-shots/07_design.png",
      summary:
        "Test the overnight path with a simple interactive mock before production work. Findings from participant tests feed the decision brief.",
      notes: [
        "Mock is labelled as a preview, not production code.",
        "Findings show park path as clear and on-call as unofficial.",
        "Assistant suggestion proposes a governed on-call action as a draft.",
      ],
      steps: [
        "Try Park until morning and Contact on-call in the mock.",
        "Review findings, then continue to Decide.",
      ],
    },
    {
      id: "ch7",
      num: "7",
      title: "Decide",
      phase: "Approve",
      href: "07_business_decision.html",
      shot: "journey-shots/08_decide.png",
      summary:
        "Item-by-item sign-off for meaning changes. There is no approve-all action. Unsupported claims stay excluded.",
      notes: [
        "Decision owner is Priya Shah.",
        "Brief recommends a formal overnight park path plus governed on-call, keeping the four-hour rule in business hours.",
        "Risk dissent and overnight volume source-needed remain visible.",
        "Signing creates an approved delivery package for Build.",
      ],
      steps: [
        "Review before/after meaning on each item.",
        "Sign selected items and confirm.",
        "Open the approval receipt, then Build.",
      ],
      extraShot: {
        src: "journey-shots/09_decide_signed.png",
        caption: "Signed receipt with package version and Build handoff.",
      },
    },
    {
      id: "ch8",
      num: "8",
      title: "Build delivery package",
      phase: "Hand off",
      href: "10_developer_home.html",
      shot: "journey-shots/10_build_package.png",
      summary:
        "Engineers start from the approved package: outcome, expected behaviour, done checks, constraints, and open questions.",
      notes: [
        "Package version matches the Business decision receipt.",
        "Why this exists links back to the approved overnight decision and frontline correction.",
        "Clarifications can confirm wording but do not silently change the package.",
      ],
      steps: [
        "Switch to Build or follow Open in Build.",
        "Read expected behaviour and done checks.",
        "Open Workspace.",
      ],
    },
    {
      id: "ch9",
      num: "9",
      title: "Workspace",
      phase: "Hand off",
      href: "11_developer_workspace.html",
      shot: "journey-shots/11_workspace.png",
      summary:
        "Discover current code, plan a bounded change, draft a patch and tests, and clarify questions without changing approved meaning.",
      notes: [
        "Discovery shows observed supervisor pending behaviour and no park overnight path yet.",
        "Plan, Patch, Tests, and Clarification are tabs in one workspace.",
        "Deploy remains a separate authority and is blocked in the prototype.",
      ],
      steps: [
        "Review Discover and Plan.",
        "Open Patch for the proposed change and receipt.",
        "Send to review.",
      ],
      extraShot: {
        src: "journey-shots/12_workspace_patch.png",
        caption: "Patch view with proposed change and receipt preview.",
      },
    },
    {
      id: "ch10",
      num: "10",
      title: "Review",
      phase: "Govern",
      href: "12_developer_review.html",
      shot: "journey-shots/13_review_blocked.png",
      summary:
        "Requirements coverage review before merge. Critical missing tests block merge. Exceptions need a named owner.",
      notes: [
        "Finding REV-104 is a critical missing test against the approved done check.",
        "Force merge is denied.",
        "Exception requests route to the decision owner and never silently approve the change.",
      ],
      steps: [
        "Read the coverage table and findings.",
        "Try Force merge to see the block.",
        "Return to Business Track or add a test draft.",
      ],
    },
    {
      id: "ch11",
      num: "11",
      title: "Track",
      phase: "Outcomes",
      href: "08_business_track.html",
      shot: "journey-shots/14_track.png",
      summary:
        "Follow delivery, clarifications, and early results from the Business view without leaving the initiative.",
      notes: [
        `Pilot cycle time moved from ${MOCK.baselineHours}h to ${MOCK.pilotHours}h. Target ${MOCK.targetHours}h is not claimed yet.`,
        "Metric notes include definition, source, and sample-size limits.",
        "Clarification history keeps Business, Build, and assistant drafts connected.",
      ],
      steps: [
        "Review delivery status and results.",
        "Open linked Build review if needed.",
      ],
    },
    {
      id: "ch12",
      num: "12",
      title: "End-to-end path",
      phase: "Summary",
      href: "00_portal_home.html",
      shot: "journey-shots/01_portal_home.png",
      summary:
        "The full path in one line: frontline input → visible disagreement → preview → item-level approval → approved package → code proposal → blocked missing test → measured results with limits.",
      notes: [
        "Assistant proposes and explains. People approve meaning and exceptions.",
        "Business and Build share one overnight exceptions package.",
        "Settings covers assistant controls and risky-change confirmation if needed later.",
      ],
      steps: [
        "Return to portal home.",
        "Reset demo state before the next review pass.",
      ],
    },
  ];

  const toc = chapters
    .map(
      (c) =>
        `<a class="journey-toc-item" href="#${c.id}"><span class="n">${c.num}</span><span>${c.title}</span></a>`
    )
    .join("");

  const chapterHtml = chapters
    .map((c) => {
      const shot = c.shot
        ? `<figure class="journey-shot">
        <img src="${c.shot}" alt="${c.title}" loading="lazy" />
        <figcaption><a href="${c.href}">${c.href}</a> · ${c.phase}</figcaption>
      </figure>`
        : "";
      const extra = c.extraShot
        ? `<figure class="journey-shot">
        <img src="${c.extraShot.src}" alt="${c.extraShot.caption}" loading="lazy" />
        <figcaption>${c.extraShot.caption}</figcaption>
      </figure>`
        : "";
      const steps = c.steps?.length
        ? `<div class="journey-block">
            <h3>Try this</h3>
            <ol>${c.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
          </div>`
        : "";
      return `<section class="journey-chapter card" id="${c.id}">
      <div class="journey-chapter-head">
        <div class="row">
          <span class="journey-num">${c.num}</span>
          ${badge("info", c.phase, "info")}
        </div>
        <h2>${c.title}</h2>
        <p class="text-primary journey-summary">${c.summary}</p>
        <div class="row mt-2">
          <a class="btn primary" href="${c.href}">${icon("external")} Open screen</a>
          <a class="btn ghost" href="#toc">Contents</a>
        </div>
      </div>
      <div class="journey-block">
        <h3>Notes</h3>
        <ul>${c.notes.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
      ${steps}
      <div class="journey-shots">${shot}${extra}</div>
    </section>`;
    })
    .join("\n");

  pages["99_user_journey_helper.html"] = barePage({
    title: "User journey guide",
    body: `<style>
.journey-shell { max-width: 980px; margin: 0 auto; width: 100%; }
.journey-hero {
  background: linear-gradient(145deg, #171614 0%, #1f1e1d 55%, #151413 100%);
  color: #f3f2f1; border-radius: var(--radius-lg); padding: 28px 24px; margin-bottom: 16px;
}
.journey-hero h1 { color: #fff; font-size: clamp(1.5rem, 2.2vw, 2rem); max-width: 20ch; margin-bottom: .5rem; }
.journey-hero p { color: #c8c6c4; max-width: 62ch; margin: 0; }
.journey-toc {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px;
  margin: 12px 0 0;
}
.journey-toc-item {
  display: flex; gap: 10px; align-items: flex-start; padding: 10px 12px;
  border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface);
  text-decoration: none; color: inherit;
}
.journey-toc-item:hover { border-color: var(--brand); text-decoration: none; }
.journey-toc-item .n {
  width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center;
  background: var(--brand-soft); color: var(--brand); font-size: 11px; font-weight: 700; flex: 0 0 auto;
}
.journey-chapter { padding: 20px; scroll-margin-top: 64px; }
.journey-chapter-head { margin-bottom: 12px; }
.journey-num {
  display: inline-grid; place-items: center; min-width: 34px; height: 26px; padding: 0 8px;
  border-radius: var(--radius-pill); background: #1b1a19; color: #fff; font-weight: 700; font-size: 12px;
}
.journey-summary { font-size: 15px; line-height: 1.5; margin-bottom: 0; }
.journey-block {
  border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 14px;
  background: var(--surface-2); margin: 12px 0;
}
.journey-block h3 { font-size: 13px; text-transform: uppercase; letter-spacing: .04em; color: var(--muted); margin-bottom: 8px; }
.journey-block ol, .journey-block ul { margin: 0; padding-left: 1.15rem; color: var(--ink); }
.journey-block li { margin: 0 0 8px; }
.journey-shots { display: flex; flex-direction: column; gap: 14px; margin-top: 14px; }
.journey-shot {
  margin: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden;
  background: #fff; box-shadow: var(--shadow-1); width: 100%;
}
.journey-shot img {
  display: block; width: 100%; height: auto; background: var(--surface-3);
  border-bottom: 1px solid var(--line);
}
.journey-shot figcaption {
  padding: 10px 12px; font-size: 12.5px; color: var(--muted); background: var(--surface-2);
}
.journey-sticky {
  position: sticky; top: 0; z-index: 40; background: rgba(243,242,241,.94);
  backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); padding: 10px 0; margin-bottom: 12px;
}
.journey-sticky .logo-mark {
  width: 22px; height: 22px; border-radius: 6px;
  background: linear-gradient(135deg, #0f6cbd, #5b5fc7);
  display: inline-grid; place-items: center; font-size: 11px; font-weight: 800; color: #fff;
}
.journey-sticky .inner {
  max-width: 980px; margin: 0 auto; width: 100%; padding: 0 16px;
  display: flex; gap: 8px; flex-wrap: wrap; align-items: center; justify-content: space-between;
}
.journey-path {
  display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px;
}
</style>
<header class="journey-sticky">
  <div class="inner">
    <div class="row">
      <a class="logo" href="00_portal_home.html" style="display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--ink);text-decoration:none">
        <span class="logo-mark">CX</span> CollabX
      </a>
      <span class="badge info">${icon("understand")} Journey guide</span>
    </div>
    <div class="row">
      <a class="btn sm primary" href="00_portal_home.html">Open prototype</a>
      <a class="btn sm" href="#toc">Contents</a>
      <button class="btn sm ghost" type="button" onclick="resetDemo()">${icon("reset")} Reset</button>
    </div>
  </div>
</header>
<main class="main journey-shell" id="main">
  ${demoBanner()}
  <div class="journey-hero">
    <div class="row mb-0">
      ${badge("info", MOCK.org, "info")}
      ${badge("draft", MOCK.initiative, "initiative")}
    </div>
    <h1 class="mt-3">User journey guide</h1>
    <p>A simple walkthrough of the CollabX prototype. Use it while exploring the product or when reviewing the story later. Each chapter has short notes, optional steps, and a full-width screenshot.</p>
  </div>

  <div class="card">
    <h2>Story path</h2>
    <p class="text-primary mb-0">Frontline input → disagreement → preview → item-level approval → approved package → code change → blocked missing test → tracked results.</p>
    <div class="journey-path">
      ${badge("info", "Business + Build", "package")}
      ${badge("ai", "Assistant drafts", "assistant")}
      ${badge("approved", "People decide", "decide")}
    </div>
  </div>

  <div class="card" id="toc">
    <h2>Contents</h2>
    <p class="mb-0">Follow in order, or jump to any chapter.</p>
    <nav class="journey-toc" aria-label="Journey chapters">${toc}</nav>
  </div>

  ${chapterHtml}

  <div class="card">
    <h2>Related screens</h2>
    <div class="grid-3">
      <a href="00_portal_home.html">Portal home</a>
      <a href="09_business_admin.html">Settings</a>
      <a href="12_developer_review.html">Review</a>
    </div>
    <div class="row mt-3">
      <a class="btn primary" href="00_portal_home.html">Back to portal home</a>
      <button class="btn ghost" type="button" onclick="resetDemo()">Reset demo state</button>
    </div>
  </div>
</main>`,
  });

  return pages;
}
