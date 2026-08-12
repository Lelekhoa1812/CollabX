/** Business portal page bodies (00–09) */
export function buildBusinessPages({ shell, barePage, MOCK, icon, badge, demoBanner }) {
  const pages = {};

  const storyRail = MOCK.demoSteps
    .map(
      (s, i) => `<a class="story-step" href="${s.href}" data-demo-step="${s.id}">
      <span class="n">${i + 1}</span>
      <strong>${s.label}</strong>
      <span class="muted text-xs">Open</span>
    </a>`
    )
    .join("");

  pages["00_portal_home.html"] = barePage({
    title: "Portal home",
    body: `<main class="main max-980 mx-auto" id="main" style="width:100%">
  ${demoBanner()}
  <div class="hero">
    <div class="row mb-0">
      ${badge("info", "Meridian Mutual demo", "info")}
      ${badge("ai", "Drafts only", "assistant")}
    </div>
    <h1 class="mt-3">Clear overnight claim handling, with evidence and approval</h1>
    <p>CollabX helps business and delivery teams turn disputed overnight practice into an approved path. The assistant drafts. Named people decide.</p>
    <div class="hero-actions row">
      <a class="btn primary" href="01_business_access.html">${icon("play")} Start demo</a>
      <a class="btn" href="04_business_contribute.html">${icon("contribute")} Join as participant</a>
      <button class="btn ghost" type="button" onclick="fastForwardAgentGrowth()">${icon("spark")} Jump ahead</button>
      <button class="btn ghost" type="button" onclick="resetDemo()">${icon("reset")} Reset</button>
    </div>
  </div>

  <div class="card">
    <div class="row-between">
      <div>
        <h2>Progress across the week</h2>
        <p class="mb-0">Starts with policy. Ends with a confirmed preview ready for approval and delivery.</p>
      </div>
      <span class="session-phase"><span data-session-phase>listen</span> · <span data-learning-score>8%</span></span>
    </div>
    <div id="growth-timeline" class="growth-timeline"></div>
    <div id="agent-before-after" class="mt-3"></div>
  </div>

  <div class="grid-2">
    <a class="choice" href="02_business_home.html">
      <h2>${icon("initiative")} Business</h2>
      <p class="text-primary">For sponsors, analysts, participants, and approvers. Understand the issue, design a better path, and decide with evidence.</p>
      <div class="row">${badge("info", "Plain language", "info")}${badge("ai", "Guided", "assistant")}</div>
    </a>
    <a class="choice" href="10_developer_home.html">
      <h2>${icon("code")} Build</h2>
      <p class="text-primary">For engineers and reviewers. Open the approved package, change code safely, and prove the done checks.</p>
      <div class="row">${badge("info", "Approved package", "package")}${badge("block", "Test checks", "review")}</div>
    </a>
  </div>

  <div class="card mt-4">
    <div class="row-between">
      <div>
        <h2>Walkthrough</h2>
        <p class="mb-0">Follow these seven steps. You will see a correction, a draft preview, a human decision, and a blocked merge.</p>
      </div>
      <span class="badge info">${icon("play")} Step by step</span>
    </div>
    <div class="learn-meter mt-3" id="learn-meter"></div>
    <div class="story-rail">${storyRail}</div>
  </div>

  <div class="grid-3 mt-3">
    <div class="card tight inset">
      <div class="kpi-label">Assistant</div>
      <p class="text-primary mb-0">Finds sources, drafts findings, and prepares options.</p>
    </div>
    <div class="card tight inset">
      <div class="kpi-label">People</div>
      <p class="text-primary mb-0">Correct drafts, approve meaning, and own release.</p>
    </div>
    <div class="card tight inset">
      <div class="kpi-label">Demo data</div>
      <p class="text-primary mb-0">${MOCK.org} · overnight exceptions · target ${MOCK.targetHours}h</p>
    </div>
  </div>

  <div class="card">
    <h2>Jump in</h2>
    <div class="grid-3">
      <a href="01_business_access.html">Sign in or open invite</a>
      <a href="04_business_contribute.html">Answer as participant</a>
      <a href="07_business_decision.html">Make a decision</a>
      <a href="05_business_understand.html">See disagreement</a>
      <a href="11_developer_workspace.html">Propose a change</a>
      <a href="12_developer_review.html">Check before merge</a>
    </div>
  </div>
</main>`,
  });

  pages["01_business_access.html"] = barePage({
    title: "Access",
    body: `<header class="topbar">
  <a class="logo" href="00_portal_home.html"><span class="logo-mark">CX</span> CollabX</a>
  <div class="spacer"></div>
  <span class="crumb">Secure access</span>
</header>
<main class="main max-860 mx-auto" id="main" style="width:100%">
  ${demoBanner()}
  <div class="tabs" role="tablist" aria-label="Access modes" data-tabs="access">
    <button role="tab" aria-selected="true" class="active" type="button" data-tab-target="signin" onclick="switchTab('access','signin',this)">Sign in</button>
    <button role="tab" aria-selected="false" type="button" data-tab-target="invite" onclick="switchTab('access','invite',this)">Invitation</button>
  </div>
  <div class="panel active" data-tab-group="access" data-tab="signin" role="tabpanel">
    <div class="card max-560">
      <h1>Sign in</h1>
      <p>Use your work account to open ${MOCK.org}.</p>
      <div class="field"><label for="email">Work email</label><input id="email" type="email" value="jordan.lee@meridianmutual.example" /></div>
      <div class="field"><label for="org">Organisation</label><select id="org"><option>${MOCK.org}</option></select></div>
      <button class="btn primary w-full" type="button" onclick="location.href='02_business_home.html'">Continue</button>
      <p class="mt-3 text-sm">We only show organisations you already belong to.</p>
    </div>
  </div>
  <div class="panel" data-tab-group="access" data-tab="invite" role="tabpanel" hidden>
    <div class="card">
      ${badge("info", "Invite from " + MOCK.ba, "contribute")}
      ${badge("ai", "Prepared for you", "spark")}
      <h1 class="mt-3">Help us understand overnight claim exceptions</h1>
      <div class="suggestion">
        <div class="meta">${badge("ai", "Why you were invited", "assistant")}<span class="confidence low">${icon("warn")} Disagreement found</span></div>
        <p class="text-primary mb-0">${MOCK.ba} asked three questions because the written policy and night-shift practice conflict. The assistant will suggest interpretations. You can mark <strong>Not right</strong>.</p>
      </div>
      <div class="stack text-primary mt-3">
        <div><strong>Why you</strong><div class="muted">You handle after-hours claims and know what really happens.</div></div>
        <div><strong>What we will ask</strong><div class="muted">A few short questions and one simple scenario. About 8 minutes.</div></div>
        <div><strong>How we use your answers</strong><div class="muted">Your answers help the team improve the overnight process. They are not used for performance scoring.</div></div>
        <div><strong>Invite details</strong><div class="muted">Invite INV-884 · expires in 5 days · language preference remembered next visit</div></div>
      </div>
      <div class="field"><label for="lang">Language and accessibility</label>
        <div class="row">
          <select id="lang" onchange="saveState({language:this.value}); toast('Language preference saved for this demo')">
            <option value="en-AU">English (Australia)</option>
            <option value="easy">Easy English</option>
          </select>
          <label class="row"><input id="large-text" type="checkbox" onchange="setLargeText(this.checked)" /> Larger text</label>
        </div>
      </div>
      <label class="row mt-3" style="align-items:flex-start">
        <input id="consent" type="checkbox" />
        <span>I understand why I was invited and how my answers will be used. The assistant suggests drafts only.</span>
      </label>
      <div class="row mt-3">
        <button class="btn primary" type="button" onclick="if(!document.getElementById('consent').checked){toast('Please confirm consent first');return;} location.href='04_business_contribute.html'">Start</button>
        <button class="btn" type="button" onclick="toast('Reminder scheduled in this demo')">Remind me later</button>
        <button class="btn ghost" type="button" onclick="toast('Invitation declined')">Decline</button>
      </div>
    </div>
  </div>
</main>`,
  });

  pages["02_business_home.html"] = shell({
    title: "Home",
    active: "02_business_home.html",
    lead: "See what needs you today. Open one item and finish it.",
    primaryAction: `<a class="btn primary" href="07_business_decision.html">${icon("decide")} Decisions</a>`,
    showAssistant: true,
    assistantOpen: true,
    assistantContext: "Prioritise the overnight exception decision and the missing night shift voice.",
    demoStep: "understand",
    body: `
    <div class="card">
      <div class="row-between">
        <h2>Progress</h2>
        <span class="session-phase"><span data-session-phase>listen</span> · <span data-learning-score>8%</span></span>
      </div>
      <div id="learn-meter" class="learn-meter"></div>
      <div id="insight-feed" class="insight-feed mt-3"></div>
    </div>

    <div class="attention" id="alerts-panel">
      <div class="row-between">
        <div>
          <h2>Needs attention</h2>
          <p class="text-primary mb-0">Policy and overnight practice disagree. ${MOCK.sponsor} needs a clear decision.</p>
        </div>
        <a class="btn primary" href="05_business_understand.html">See disagreement</a>
      </div>
    </div>

    <div class="card alert-panel">
      <div class="row-between">
        <h2>Alerts</h2>
        <span class="badge live">${icon("alert")} 3 open</span>
      </div>
      <div class="alert-item">
        ${icon("contribute")}<div><strong>${MOCK.participant} corrected overnight practice</strong><div class="muted">Human correction · ${MOCK.interviewDate}</div></div>
        <a class="btn sm" href="04_business_contribute.html">Open</a>
      </div>
      <div class="alert-item">
        ${icon("block")}<div><strong>Merge blocked — missing timer test</strong><div class="muted">Build review · Missing test</div></div>
        <a class="btn sm" href="12_developer_review.html">Open</a>
      </div>
      <div class="alert-item">
        ${icon("warn")}<div><strong>Sample size still limited</strong><div class="muted">Track · night shift pilot week</div></div>
        <a class="btn sm" href="08_business_track.html">Open</a>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <h2>My work</h2>
        <div class="list-item">
          <div><strong>Decide overnight path</strong><div class="muted">About 5 minutes · Decision owner: ${MOCK.sponsor}</div></div>
          <a class="btn sm primary" href="07_business_decision.html">Open</a>
        </div>
        <div class="list-item">
          <div><strong>Invite night shift adjusters</strong><div class="muted">About 10 minutes · Missing perspective</div></div>
          <a class="btn sm" href="05_business_understand.html">Open</a>
        </div>
        <div class="list-item">
          <div><strong>Answer engineer question</strong><div class="muted">About 5 minutes · Timer behaviour</div></div>
          <a class="btn sm" href="08_business_track.html">Open</a>
        </div>
      </div>
      <div class="card">
        <h2>Initiatives</h2>
        <div class="list-item">
          <div>
            <a href="03_business_initiative.html"><strong>${MOCK.initiative}</strong></a>
            <div class="muted">${MOCK.outcome}</div>
            <div class="row mt-2">${badge("disputed", "Disputed", "warn")}${badge("review", "Needs decision", "clock")}
              <span class="provenance" data-unless="decisionSigned">${icon("spark")} Draft ready</span>
              <span class="provenance hidden" data-if="decisionSigned">${icon("check")} Approved</span>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div><strong>New customer onboarding</strong><div class="muted">On track · research in progress</div></div>
          ${badge("approved", "Healthy", "check")}
        </div>
        <div class="suggestion mt-3">
          <div class="meta">${badge("ai", "Still waiting", "assistant")}</div>
          <p class="text-primary mb-0">Still waiting: night shift coverage since Monday. Volume claim remains excluded until a source arrives.</p>
        </div>
      </div>
    </div>`,
  });

  pages["03_business_initiative.html"] = shell({
    title: MOCK.initiative,
    active: "03_business_initiative.html",
    lead: MOCK.outcome,
    primaryAction: `<a class="btn primary" href="05_business_understand.html">${icon("understand")} Continue</a>`,
    showAssistant: true,
    demoStep: "understand",
    body: `
    <div class="grid-3">
      <div class="card tight"><div class="kpi-label">Status</div><div class="kpi" style="font-size:1.15rem" data-unless="decisionSigned">Ready to decide</div><div class="kpi hidden" style="font-size:1.15rem" data-if="decisionSigned">Package approved</div><p>One disagreement blocks progress.</p></div>
      <div class="card tight"><div class="kpi-label">Main issue</div><div class="text-primary" style="font-weight:600">4 hour supervisor rule vs overnight parking</div></div>
      <div class="card tight"><div class="kpi-label">Decision owner</div><div class="text-primary" style="font-weight:600">${MOCK.sponsor}</div><p>Analyst: ${MOCK.ba}</p></div>
    </div>

    <div class="grid-3">
      <div class="card tight inset"><div class="kpi-label">Sources</div><div class="kpi" style="font-size:1.2rem">3 / 4</div><p>Call logs waiting on consent</p></div>
      <div class="card tight inset"><div class="kpi-label">People</div><div class="kpi" style="font-size:1.2rem">2 / 3</div><p>Night shift still missing</p></div>
      <div class="card tight inset"><div class="kpi-label">Open conflicts</div><div class="kpi" style="font-size:1.2rem">1</div><p>Day vs night rule</p></div>
    </div>

    <div class="card accent">
      <h2>Recommended next step</h2>
      <p class="text-primary">Compare the written policy with overnight practice, then prepare a decision. Overnight volume is still uncertain and stays out.</p>
      <div class="row">
        <a class="btn primary" href="05_business_understand.html">Open Understand</a>
        <a class="btn" href="04_business_contribute.html">Ask night shift</a>
        <a class="btn" href="06_business_solution.html">Test a preview</a>
      </div>
    </div>

    <div class="card">
      <div class="row-between">
        <h2>Progress on this initiative</h2>
        <span class="session-phase"><span data-learning-score>8%</span> learned</span>
      </div>
      <div id="learn-meter" class="learn-meter"></div>
      <div class="memory-board mt-3">
        <div class="memory-lane">
          <h3>${icon("clock")} Session notes</h3>
          <div id="memory-episodic"></div>
        </div>
        <div class="memory-lane">
          <h3>${icon("spark")} Waiting drafts</h3>
          <div id="memory-candidates"></div>
        </div>
        <div class="memory-lane">
          <h3>${icon("check")} Confirmed</h3>
          <div id="memory-confirmed"></div>
        </div>
        <div class="memory-lane">
          <h3>${icon("warn")} Still open</h3>
          <div id="memory-prospective"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <h2>Recent insights</h2>
      <div id="insight-feed" class="insight-feed"></div>
    </div>`,
  });

  pages["04_business_contribute.html"] = barePage({
    title: "Contribute",
    body: `<header class="topbar">
  <a class="logo" href="00_portal_home.html"><span class="logo-mark">CX</span> CollabX</a>
  <div class="spacer"></div>
  <span class="crumb" id="contribute-crumb">Contribution · adaptive session · Q1 of 3</span>
  <a class="icon-btn" href="03_business_initiative.html" aria-label="Exit">${icon("close", "ico-lg")}</a>
</header>
<main class="main max-720 mx-auto" id="main" style="width:100%">
  ${demoBanner()}
  <div class="card accent">
    <div class="row-between">
      <div>
        <div class="row">${badge("ai", "Guided session", "spark")}${badge("info", "Updates as you answer", "assistant")}</div>
        <h2 class="mt-2">Share what really happens overnight</h2>
        <p class="mb-0 text-primary">Each answer updates the draft and shapes the next question. Nothing is approved until a decision owner confirms later.</p>
      </div>
    </div>
    <div class="progress-strip mt-3">
      <div class="meta"><span id="adapt-note">Starting broad. Later questions will narrow based on your answers.</span><span id="contribute-pct">33%</span></div>
      <div class="progress"><span id="contribute-progress" style="width:33%"></span></div>
    </div>
  </div>

  <div class="card">
    <div class="q-step active" data-q="1">
      <details class="mt-0">
        <summary class="muted">Why we ask this</summary>
        <p class="text-primary">Policy and overnight practice seem to disagree. Your answer seeds the assistant’s first draft finding.</p>
      </details>
      <h1 class="mt-3">When a claim arrives after 8 pm and no supervisor is online, what do you do?</h1>
      <div class="stack">
        <label class="option-card"><input type="radio" name="q1" value="continue" /> <span><strong>Create the claim and continue</strong><div class="muted">Without waiting</div></span></label>
        <label class="option-card"><input type="radio" name="q1" value="park" checked /> <span><strong>Park until the morning supervisor queue</strong><div class="muted">Most common overnight path</div></span></label>
        <label class="option-card"><input type="radio" name="q1" value="oncall" /> <span><strong>Call on-call informally</strong><div class="muted">Often when overnight risk looks high</div></span></label>
      </div>
      <button class="btn primary mt-3" type="button" onclick="advanceContribute('contributionAnswer', document.querySelector('input[name=q1]:checked').value)">Continue</button>
    </div>

    <div class="q-step" data-q="2">
      <div class="suggestion">
        <div class="meta">${badge("ai", "Follow-up", "spark")}<span class="confidence high">${icon("check")} From your answer</span></div>
        <p class="text-primary mb-0">You described parking as the default. I now need the exception path before I draft a rule.</p>
      </div>
      <h2 class="mt-3">When would you contact on-call instead of parking?</h2>
      <div class="stack">
        <label class="option-card"><input type="radio" name="q2" value="never" /> <span><strong>Almost never</strong></span></label>
        <label class="option-card"><input type="radio" name="q2" value="low-park" checked /> <span><strong>Only when overnight risk looks high</strong><div class="muted">Otherwise park</div></span></label>
        <label class="option-card"><input type="radio" name="q2" value="always" /> <span><strong>Most overnight exceptions</strong></span></label>
      </div>
      <button class="btn primary mt-3" type="button" onclick="advanceContribute('leakageAnswer', document.querySelector('input[name=q2]:checked').value)">Continue</button>
    </div>

    <div class="q-step" data-q="3">
      <div class="suggestion">
        <div class="meta">${badge("ai", "For delivery later", "spark")}</div>
        <p class="text-primary mb-0">Delivery will need a done check. I am asking about timers now so the later package does not guess.</p>
      </div>
      <h2 class="mt-3">If a claim is parked overnight, what should happen to timers?</h2>
      <div class="stack">
        <label class="option-card"><input type="radio" name="q3" value="all-pause" /> <span><strong>Pause every timer</strong></span></label>
        <label class="option-card"><input type="radio" name="q3" value="internal-only" checked /> <span><strong>Pause only the internal supervisor timer</strong><div class="muted">Customer response time keeps running</div></span></label>
        <label class="option-card"><input type="radio" name="q3" value="unsure" /> <span><strong>Not sure</strong></span></label>
      </div>
      <div class="suggestion mt-3" id="contrib-suggest">
        <div class="meta">${badge("ai", "Draft reading", "spark")}${badge("draft", "Draft", "info")}</div>
        <p class="text-primary" id="live-draft">Draft finding: park overnight by default, contact on-call for high overnight risk, pause only the internal supervisor timer.</p>
        <div class="row mt-2">
          <button class="btn sm primary" type="button" onclick="useDraft('contrib-suggest')">Use draft</button>
          <button class="btn sm" type="button" onclick="notRight('contrib-suggest')">Not right</button>
        </div>
      </div>
      <button class="btn primary mt-3" type="button" onclick="advanceContribute('timerAnswer', document.querySelector('input[name=q3]:checked').value)">Submit</button>
    </div>
  </div>

  <div class="card">
    <h2>Captured this session</h2>
    <div id="insight-feed" class="insight-feed"></div>
  </div>
</main>`,
  });

  pages["05_business_understand.html"] = shell({
    title: "Understand",
    active: "05_business_understand.html",
    lead: "Compare sources around one issue. Keep disagreement visible until a decision owner resolves it.",
    primaryAction: `<a class="btn primary" href="07_business_decision.html">${icon("decide")} Open Decide</a><button class="btn" type="button" onclick="toggleAssistant(true)">${icon("assistant")} Ask</button>`,
    showAssistant: true,
    assistantOpen: true,
    assistantContext: "Help compare the written 4 hour rule with overnight practice and prepare options.",
    demoStep: "understand",
    body: `
    <div class="attention">
      <h2>Selected issue</h2>
      <p class="text-primary mb-0">${MOCK.issue}</p>
    </div>

    <div class="card">
      <div class="row-between">
        <h2>${icon("spark")} New draft from participant</h2>
        <a class="btn sm" href="04_business_contribute.html">Add more input</a>
      </div>
      <p class="text-sm">Drafts appear after Contribute. Confirm to reuse them in Design and Build. Reject to keep a correction note.</p>
      <div class="memory-board">
        <div class="memory-lane">
          <h3>Waiting</h3>
          <div id="memory-candidates"></div>
        </div>
        <div class="memory-lane">
          <h3>Confirmed</h3>
          <div id="memory-confirmed"></div>
        </div>
      </div>
    </div>

    <div class="card ai-border">
      <div class="row-between">
        <h2>${icon("spark")} Sources used</h2>
        <span class="confidence high">${icon("check")} Includes counterevidence</span>
      </div>
      <div class="grid-2 mt-2">
        <div class="source">${icon("source")}<div><strong>Included</strong><div class="muted">Policy §4.2 · ${MOCK.participant} interview · current claims behaviour</div></div></div>
        <div class="source">${icon("warn")}<div><strong>Excluded by policy</strong><div class="muted">Overnight call logs — needs consent before indexing</div></div></div>
      </div>
    </div>

    <div class="tabs" role="tablist" aria-label="Understand views" data-tabs="u">
      <button role="tab" aria-selected="true" class="active" type="button" data-tab-target="disagree" onclick="switchTab('u','disagree',this)">Disagreement</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="sources" onclick="switchTab('u','sources',this)">Sources</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="people" onclick="switchTab('u','people',this)">People</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="process" onclick="switchTab('u','process',this)">Policy vs actual work</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="options" onclick="switchTab('u','options',this)">Options</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="terms" onclick="switchTab('u','terms',this)">Shared terms</button>
    </div>

    <div class="panel active" data-tab-group="u" data-tab="disagree" role="tabpanel">
      <div class="compare">
        <div class="side">
          <div class="row">${badge("approved", "Policy view", "check")}${badge("draft", "Decision owner: Policy team", "user")}<span class="confidence high">${icon("check")} Well supported</span></div>
          <h3 class="mt-3">Exceptions need supervisor approval within 4 hours</h3>
          <div class="source">${icon("source")}<div><strong>Claims operations policy §4.2</strong><div class="muted">Current · “${MOCK.policyPassage}”</div></div></div>
        </div>
        <div class="side disputed">
          <div class="row">${badge("disputed", "Practice view", "warn")}${badge("info", "Shared by " + MOCK.participant, "contribute")}<span class="confidence high">${icon("check")} Confirmed</span></div>
          <h3 class="mt-3">After 8 pm, claims are parked until morning unless overnight risk triggers an informal on-call contact</h3>
          <div class="source">${icon("source")}<div><strong>Interview with ${MOCK.participant}</strong><div class="muted">${MOCK.interviewDate} · night shift adjuster</div></div></div>
        </div>
      </div>
      <div class="suggestion" id="u-suggest">
        <div class="meta">${badge("ai", "Suggestion", "spark")}${badge("draft", "Draft", "info")}</div>
        <p class="text-primary">Suggested next step: keep the 4 hour rule in business hours, and add a formal overnight park path with a clear on-call option.</p>
        <div class="row">
          <button class="btn sm primary" type="button" onclick="useDraft('u-suggest'); markDemoStep('design'); toast('Park overnight term stays a draft until Decide')">Use draft</button>
          <button class="btn sm" type="button" onclick="notRight('u-suggest')">Not right</button>
          <button class="btn sm ghost" type="button" onclick="toast('Asked ' + MOCK.sponsor)">Ask decision owner</button>
        </div>
      </div>
    </div>

    <div class="panel" data-tab-group="u" data-tab="sources" role="tabpanel" hidden>
      <div class="card">
        <table class="data">
          <thead><tr><th>Source</th><th>Freshness</th><th>Status</th><th></th></tr></thead>
          <tbody>
            <tr><td>Claims operations policy §4.2</td><td>Current</td><td>${badge("approved", "Ready", "check")}</td><td><button class="btn sm" type="button" onclick="toast('Opened exact passage: ${MOCK.policyPassage.replace(/'/g, "\\'")}')">Open</button></td></tr>
            <tr><td>Interview with ${MOCK.participant}</td><td>14 days</td><td>${badge("approved", "Ready", "check")}</td><td><button class="btn sm" type="button" onclick="toast('Opened interview notes')">Open</button></td></tr>
            <tr><td>Overnight call logs</td><td>Waiting</td><td>${badge("review", "Needs consent", "clock")}</td><td><button class="btn sm" type="button" onclick="toast('Access request sent')">Request access</button></td></tr>
            <tr><td>Current claims system behaviour</td><td>Recent</td><td>${badge("info", "From Build", "code")}</td><td><a class="btn sm" href="10_developer_home.html">Open in Build</a></td></tr>
            <tr><td>Overnight volume claim</td><td>—</td><td>${badge("needed", "Needs source", "warn")}</td><td><button class="btn sm" type="button" onclick="toast('Excluded from decision brief')">Leave out</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="panel" data-tab-group="u" data-tab="people" role="tabpanel" hidden>
      <div class="card">
        <table class="data">
          <thead><tr><th>Person or group</th><th>Role</th><th>Coverage</th><th></th></tr></thead>
          <tbody>
            <tr><td>${MOCK.sponsor}</td><td>Decision owner</td><td>${badge("approved", "Covered", "check")}</td><td></td></tr>
            <tr><td>${MOCK.participant}</td><td>Frontline adjuster</td><td>${badge("approved", "Covered", "check")}</td><td></td></tr>
            <tr><td>${MOCK.riskLead}</td><td>Risk dissent</td><td>${badge("disputed", "Divergent", "warn")}</td><td><button class="btn sm" type="button" onclick="toast('Risk wants one rule for all hours')">View</button></td></tr>
            <tr><td>Night shift adjusters</td><td>Missing perspective</td><td>${badge("block", "Must fix", "block")}</td><td><a class="btn sm" href="04_business_contribute.html">Invite</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="panel" data-tab-group="u" data-tab="process" role="tabpanel" hidden>
      <div class="grid-2">
        <div class="card"><h3>Written policy</h3><p class="text-primary">Intake → exception → supervisor within 4 hours → continue</p></div>
        <div class="card"><h3>Actual overnight work</h3><p class="text-primary">Intake → park overnight → morning queue (most cases). Informal on-call when overnight risk looks high.</p></div>
      </div>
      <p>This difference is shown as a disagreement. CollabX will not hide it or average it away.</p>
    </div>

    <div class="panel" data-tab-group="u" data-tab="options" role="tabpanel" hidden>
      <div class="card">
        <table class="data">
          <thead><tr><th>Option</th><th>Speed</th><th>Cost</th><th>Concern</th></tr></thead>
          <tbody>
            <tr><td>Keep current practice</td><td>18 hours</td><td>Low</td><td>Informal workarounds remain</td></tr>
            <tr class="selected"><td>Formal park path plus clear on-call ${badge("ai", "Suggested", "spark")}</td><td>About 4 to 6 hours</td><td>Medium</td><td>On-call roster needed</td></tr>
            <tr><td>Staff night supervisors</td><td>About 4 hours</td><td>High</td><td>Higher ongoing cost</td></tr>
          </tbody>
        </table>
        <p class="metric-note">Dissent preserved: ${MOCK.riskLead} wants one rule for all hours. Volume claim excluded.</p>
        <a class="btn primary mt-3" href="07_business_decision.html">Open Decide</a>
      </div>
    </div>

    <div class="panel" data-tab-group="u" data-tab="terms" role="tabpanel" hidden>
      <div class="card">
        <table class="data">
          <thead><tr><th>Term</th><th>Meaning</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Exception</td><td>A claim that cannot follow the standard overnight path</td><td>${badge("disputed", "Disputed", "warn")}</td></tr>
            <tr><td>Park overnight</td><td>Hold the claim until the next morning supervisor queue</td><td><span id="term-park">${badge("draft", "Draft", "info")}</span></td></tr>
            <tr><td>On-call contact</td><td>Reach the duty manager for high overnight risk</td><td>${badge("draft", "Draft", "info")}</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,
  });

  pages["06_business_solution.html"] = shell({
    title: "Design",
    active: "06_business_solution.html",
    lead: "Create a disposable preview from confirmed answers, adjust it, then confirm a version for Decide.",
    primaryAction: `<button class="btn primary" type="button" onclick="generatePrototype()">${icon("spark")} Create preview</button><button class="btn" type="button" onclick="confirmPrototype()">${icon("check")} Confirm preview</button>`,
    showAssistant: true,
    assistantOpen: true,
    assistantContext: "I can create and revise a disposable preview. I cannot approve production behaviour.",
    demoStep: "design",
    body: `
    <div class="row mb-0">
      ${badge("ai", "Preview", "spark")}
      ${badge("draft", "Not live code", "info")}
      <span class="provenance">${icon("package")} Version <strong data-proto-version>mock-v1</strong></span>
      <span class="badge approved hidden" data-if="prototype.confirmed">${icon("check")} Ready for Decide</span>
    </div>

    <div class="progress-strip mt-3" id="proto-progress" hidden>
      <div class="meta"><span>${icon("spark")} Creating preview</span><span>sandbox</span></div>
      <div class="progress indeterminate"><span></span></div>
    </div>

    <div class="card" id="proto-empty">
      <h2>No preview yet</h2>
      <p class="text-primary">Create an interactive overnight-exception screen from confirmed answers and open questions. Complete Contribute first if little is confirmed yet.</p>
      <div class="row">
        <button class="btn primary" type="button" onclick="generatePrototype()">Create preview</button>
        <a class="btn" href="04_business_contribute.html">Add more input</a>
      </div>
    </div>

    <div id="proto-studio" class="hidden">
      <div class="proto-studio mt-3">
        <div>
          <div class="proto-viewport" aria-label="Generated prototype preview">
            <div class="proto-top">
              <div class="dots row"><span style="width:8px;height:8px;border-radius:50%;background:#ff5f57"></span><span style="width:8px;height:8px;border-radius:50%;background:#febc2e"></span><span style="width:8px;height:8px;border-radius:50%;background:#28c840"></span></div>
              <div class="url">sandbox://claims/overnight/${MOCK.claimId}</div>
              <span class="text-xs">not production</span>
            </div>
            <div class="proto-app" id="proto-app">
              <header>
                <div>
                  <strong>Overnight exception</strong>
                  <div class="claim-id">${MOCK.claimId} · arrived 21:14</div>
                </div>
                <span class="badge info">${icon("clock")} Supervisor offline</span>
              </header>
              <div class="body">
                <div class="proto-nav">
                  <button class="version-pill" type="button" data-proto-screen="queue" onclick="setProtoScreen('queue')">1. Queue</button>
                  <button class="version-pill active" type="button" data-proto-screen="decide" onclick="setProtoScreen('decide')">2. Decide path</button>
                  <button class="version-pill" type="button" data-proto-screen="receipt" onclick="setProtoScreen('receipt')">3. Receipt</button>
                </div>
                <div class="row mb-0">
                  <span class="muted text-xs">Synthetic scenario</span>
                  <button class="version-pill active" type="button" data-scenario="low" onclick="setProtoScenario('low')">Low risk</button>
                  <button class="version-pill" type="button" data-scenario="high" onclick="setProtoScenario('high')">High risk</button>
                </div>

                <div data-screen-panel="queue" class="hidden">
                  <h3 class="mt-3">Overnight queue</h3>
                  <div class="proto-queue-item"><div><strong>${MOCK.claimId}</strong><div class="muted">9:14 pm · awaiting path</div></div><span class="badge review">Open</span></div>
                  <div class="proto-queue-item"><div><strong>FNOL-88390</strong><div class="muted">Parked · morning queue</div></div><span class="badge approved">Parked</span></div>
                  <button class="btn sm primary mt-3" type="button" onclick="setProtoScreen('decide')">Open selected claim</button>
                </div>

                <div data-screen-panel="decide">
                  <div class="risk-banner">High overnight risk for this sample claim</div>
                  <p class="text-primary mt-3">No supervisor is online. Choose the overnight path. This preview stays editable.</p>
                  <div class="action-grid">
                    <button class="action-tile primary" type="button" onclick="toast('Preview action: park path'); setProtoScreen('receipt')">
                      <strong id="proto-label-park">Park until morning</strong>
                      <div class="muted text-sm">Pauses only the internal supervisor timer</div>
                    </button>
                    <button class="action-tile oncall" type="button" onclick="toast('Preview action: on-call path'); setProtoScreen('receipt')">
                      <strong id="proto-label-oncall">Contact on-call</strong>
                      <div class="muted text-sm">For high overnight risk</div>
                    </button>
                  </div>
                  <div class="reason-field field">
                    <label for="oncall-reason">Reason for on-call</label>
                    <textarea id="oncall-reason" placeholder="Required for on-call"></textarea>
                  </div>
                </div>

                <div data-screen-panel="receipt" class="hidden">
                  <h3 class="mt-3">Preview receipt</h3>
                  <p class="text-primary">Synthetic outcome recorded for participant testing. This does not change the approved delivery package.</p>
                  <div class="proto-receipt-box">Path captured · ready for review</div>
                  <button class="btn sm mt-3" type="button" onclick="setProtoScreen('decide')">Back to decision</button>
                </div>
              </div>
            </div>
          </div>
          <div class="tabs mt-3" role="tablist" data-tabs="proto">
            <button role="tab" aria-selected="true" class="active" type="button" data-tab-target="preview" onclick="switchTab('proto','preview',this)">Preview</button>
            <button role="tab" aria-selected="false" type="button" data-tab-target="code" onclick="switchTab('proto','code',this)">Markup</button>
            <button role="tab" aria-selected="false" type="button" data-tab-target="trace" onclick="switchTab('proto','trace',this)">Sources used</button>
          </div>
          <div class="panel active" data-tab-group="proto" data-tab="preview" role="tabpanel">
            <p class="muted mb-0">Try the preview actions. Use adjustments on the right to refine the path.</p>
          </div>
          <div class="panel" data-tab-group="proto" data-tab="code" role="tabpanel" hidden>
            <div class="code" id="proto-code" style="white-space:pre-wrap"></div>
          </div>
          <div class="panel" data-tab-group="proto" data-tab="trace" role="tabpanel" hidden>
            <div id="remembered-build"></div>
          </div>
        </div>
        <div class="stack-lg">
          <div class="card tight">
            <h2>Adjust preview</h2>
            <p class="text-sm">Each adjustment creates a new draft version. Confirm only when the behaviour looks right.</p>
            <div class="adjust-rail">
              <button class="adjust-chip" type="button" data-adjust="oncall" onclick="adjustPrototype('oncall')"><span><strong>Clear on-call</strong><div class="muted text-xs">Make contact a visible action with a reason</div></span><span class="badge ai">${icon("spark")} Draft</span></button>
              <button class="adjust-chip" type="button" data-adjust="risk" onclick="adjustPrototype('risk')"><span><strong>Risk banner</strong><div class="muted text-xs">Show high overnight risk</div></span><span class="badge info">Toggle</span></button>
              <button class="adjust-chip" type="button" data-adjust="labels" onclick="adjustPrototype('labels')"><span><strong>Rewrite park label</strong><div class="muted text-xs">Try clearer wording</div></span><span class="badge draft">Copy</span></button>
            </div>
            <div class="row mt-2">
              <button class="btn sm primary" type="button" onclick="confirmPrototype()">Confirm</button>
              <button class="btn sm" type="button" onclick="generatePrototype()">Regenerate</button>
            </div>
          </div>
          <div class="card tight">
            <h2>Changes so far</h2>
            <div id="proto-adjustments"></div>
          </div>
          <div class="suggestion" id="design-suggest">
            <div class="meta">${badge("ai", "Suggestion", "spark")}</div>
            <p class="text-primary mb-0">Make on-call a visible action with a short reason, not a hidden workaround. Confirm the preview before Decide.</p>
            <div class="row mt-2">
              <button class="btn sm primary" type="button" onclick="adjustPrototype('oncall'); useDraft('design-suggest')">Apply</button>
              <button class="btn sm" type="button" onclick="notRight('design-suggest')">Not right</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-3">
      <h2>Progress on this initiative</h2>
      <div id="learn-meter" class="learn-meter"></div>
      <div id="insight-feed" class="insight-feed mt-3"></div>
    </div>`,
  });

  pages["07_business_decision.html"] = shell({
    title: "Decide",
    active: "07_business_decision.html",
    lead: "Review meaning changes item by item. There is no approve all action.",
    primaryAction: `<button class="btn primary" type="button" onclick="openModal('sign-modal')">${icon("decide")} Sign selected</button>`,
    showAssistant: true,
    assistantContext: "I can explain options and sources. I cannot approve decisions for " + MOCK.sponsor + ".",
    user: "PS",
    demoStep: "decide",
    body: `
    <div class="grid-2">
      <div class="card">
        <h2>Decision brief</h2>
        <p class="text-primary">Recommend a formal overnight park path plus a clear on-call option for high overnight risk. Keep the 4 hour rule in business hours.</p>
        <div class="row">
          ${badge("approved", "Supported by policy and interview", "check")}
          ${badge("disputed", "Risk team wants one rule for all hours", "warn")}
          ${badge("needed", "Needs source for overnight volume", "block")}
        </div>
        <p class="metric-note">Dissent on record from ${MOCK.riskLead}: “One rule reduces training risk.” Revisit trigger: overnight volume source arrives.</p>
      </div>
      <div class="card">
        <h2>What was confirmed before this decision</h2>
        <div id="remembered-build"></div>
        <div class="source mt-2">${icon("design")}<div><strong>Confirmed preview</strong><div class="muted">Version <span data-proto-version>mock-v1</span> · <span data-unless="prototype.confirmed">not confirmed yet</span><span class="hidden" data-if="prototype.confirmed">ready for briefing</span></div></div></div>
        <div class="source">${icon("user")}<div><strong>Decision owner</strong><div class="muted">${MOCK.sponsor} · sponsor</div></div></div>
      </div>
    </div>

    <div id="agent-before-after" class="card"></div>

    <div class="card">
      <h2>If we decide this</h2>
      <ul class="text-primary" style="margin:0;padding-left:1.1rem">
        <li>Expected behaviour for overnight parking becomes clear</li>
          <li>Informal on-call becomes a clear action</li>
          <li>Delivery can start from an approved package</li>
      </ul>
    </div>

    <div class="card">
      <h2>Sign-off items</h2>
      <table class="data">
        <thead><tr><th></th><th>Item</th><th>Meaning change</th><th>Your choice</th></tr></thead>
        <tbody>
          <tr>
            <td><label class="sr-only" for="sign-1">Select overnight expected behaviour</label><input id="sign-1" data-sign-item type="checkbox" value="Overnight expected behaviour" checked /></td>
            <td>Overnight expected behaviour</td>
            <td>
              <div class="diff">
                <div class="before"><strong>Before</strong><div>Supervisor within 4 hours always</div></div>
                <div class="after"><strong>After</strong><div>Adds park path and formal on-call</div></div>
              </div>
            </td>
            <td><label class="sr-only" for="choice-1">Choice for overnight behaviour</label><select id="choice-1"><option>Approve</option><option>Reject</option><option>Ask for more evidence</option></select></td>
          </tr>
          <tr>
            <td><label class="sr-only" for="sign-2">Select disagreement decision</label><input id="sign-2" data-sign-item type="checkbox" value="Decision on the disagreement" checked /></td>
            <td>Decision on the disagreement</td>
            <td>
              <div class="diff">
                <div class="before"><strong>Before</strong><div>One unresolved conflict</div></div>
                <div class="after"><strong>After</strong><div>Splits day and night rules</div></div>
              </div>
            </td>
            <td><label class="sr-only" for="choice-2">Choice for disagreement</label><select id="choice-2"><option>Approve</option><option>Reject</option></select></td>
          </tr>
          <tr>
            <td><label class="sr-only" for="sign-3">Select overnight volume claim</label><input id="sign-3" data-sign-item type="checkbox" value="Overnight volume claim" /></td>
            <td>Overnight volume claim</td>
            <td>Excluded until source is available</td>
            <td><label class="sr-only" for="choice-3">Choice for volume claim</label><select id="choice-3"><option>Leave out</option></select></td>
          </tr>
        </tbody>
      </table>
      <p class="mt-2">Each item needs its own choice. Technical version details stay under Technical details.</p>
      <details><summary>Technical details</summary><p class="muted">Approved version identifiers and change history are available here for audit. They are not required to understand the decision.</p></details>
    </div>

    <div class="receipt hidden" id="decision-receipt" data-if="decisionSigned">
      <div class="row">${badge("approved", "Signed", "check")}<span class="provenance">Approved</span></div>
      <h3 class="mt-2">Signed by ${MOCK.sponsor}</h3>
      <p class="text-primary mb-0">Items: <span data-receipt-items>Overnight expected behaviour, Decision on the disagreement</span></p>
      <p class="text-primary">Package version: <strong data-receipt-version data-package-version>${MOCK.packageVersion}</strong></p>
      <p class="muted mb-0">Excluded: overnight volume claim. Dissent from ${MOCK.riskLead} remains on record. Assistant did not approve this.</p>
      <div class="row mt-3">
        <a class="btn primary" href="10_developer_home.html">${icon("package")} Open in Build</a>
        <a class="btn" href="08_business_track.html">Track delivery</a>
      </div>
    </div>

    <div class="modal-backdrop" id="sign-modal" aria-hidden="true">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="sign-title">
        <h2 id="sign-title">Confirm before you continue</h2>
        <p>You are approving the selected items for ${MOCK.initiative}. This creates an approved delivery package for Build.</p>
        <p>Effect: Business can track delivery. Build can implement the overnight path. Excluded items stay open. This action is reversible only through a new decision.</p>
        <div class="acts">
          <button class="btn" type="button" onclick="closeModal('sign-modal')">Cancel</button>
          <button class="btn primary" type="button" onclick="signDecision()">Sign selected</button>
        </div>
      </div>
    </div>`,
  });

  pages["08_business_track.html"] = shell({
    title: "Track",
    active: "08_business_track.html",
    lead: "Follow delivery, clarifications, and results without leaving the business view.",
    primaryAction: `<a class="btn primary" href="10_developer_home.html">${icon("package")} Open package</a>`,
    showAssistant: true,
    demoStep: "track",
    body: `
    <div class="grid-3">
      <div class="card tight"><div class="kpi-label">Delivery status</div><div class="kpi" style="font-size:1.15rem">In review</div></div>
      <div class="card tight"><div class="kpi-label">Open clarifications</div><div class="kpi">1</div></div>
      <div class="card tight"><div class="kpi-label">Pilot cycle time</div><div class="kpi" style="font-size:1.3rem">${MOCK.pilotHours}h</div><p>Target ${MOCK.targetHours}h · baseline ${MOCK.baselineHours}h</p></div>
    </div>
    <p class="metric-note">Definition: median hours from overnight exception creation to supervisor disposition. Source: pilot week claims extract. Limitation: night shift sample is still small.</p>

    <div class="card">
      <h2>Clarifications and differences</h2>
      <div class="activity">
        <div class="activity-item done">
          <span class="activity-dot"></span>
          <div><strong>${MOCK.engineer}</strong> asked: Does parking pause customer response time?</div>
        </div>
        <div class="activity-item done">
          <span class="activity-dot"></span>
          <div><strong>Draft</strong>: No. Only the internal supervisor timer pauses. ${badge("ai", "Draft", "spark")}</div>
        </div>
        <div class="activity-item active">
          <span class="activity-dot"></span>
          <div>
            <strong>${MOCK.ba}</strong> confirmed. Package unchanged.
            <div class="row mt-2">
              <button class="btn sm primary" type="button" onclick="toast('Answer saved. Approved package is unchanged until a meaning change is reviewed.')">Confirm answer</button>
              <a class="btn sm" href="12_developer_review.html">View in Build</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <h2>Results so far</h2>
      <p class="text-primary">Pilot week improved cycle time from ${MOCK.baselineHours} hours to ${MOCK.pilotHours} hours. Target ${MOCK.targetHours} hours is not yet met.</p>
      <div class="row">${badge("approved", "No open harm flags", "check")}${badge("review", "Sample size still limited", "warn")}</div>
      <div class="suggestion mt-3">
        <div class="meta">${badge("ai", "Suggestion", "spark")}<span class="confidence low">${icon("warn")} Small sample</span></div>
        <p class="text-primary mb-0">Keep the limitation visible. Recommend more night-shift interviews before claiming the 4 hour target.</p>
      </div>
    </div>`,
  });

  pages["09_business_admin.html"] = shell({
    title: "Settings",
    active: "09_business_admin.html",
    lead: "Manage people, connections, data policy, assistant controls, support, and privacy in one place.",
    primaryAction: `<button class="btn danger" type="button" onclick="openModal('revoke-modal')">${icon("warn")} Review risk</button>`,
    showAssistant: true,
    assistantContext: "Explain assistant capability boundaries and kill switches. Never bypass admin confirmation.",
    body: `
    <div class="tabs" role="tablist" aria-label="Settings" data-tabs="a">
      <button role="tab" aria-selected="true" class="active" type="button" data-tab-target="people" onclick="switchTab('a','people',this)">People and access</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="connections" onclick="switchTab('a','connections',this)">Connections</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="policy" onclick="switchTab('a','policy',this)">Data policy</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="assistant" onclick="switchTab('a','assistant',this)">Assistant controls</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="support" onclick="switchTab('a','support',this)">Support</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="privacy" onclick="switchTab('a','privacy',this)">Privacy</button>
    </div>
    <div class="panel active card" data-tab-group="a" data-tab="people" role="tabpanel">
      <table class="data"><thead><tr><th>Group</th><th>Access</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Business analysts</td><td>Business portal</td><td>${badge("approved", "Synced", "check")}</td></tr>
        <tr><td>Sponsors</td><td>Decide and track</td><td>${badge("approved", "Synced", "check")}</td></tr>
        <tr><td>Engineers</td><td>Build portal</td><td>${badge("approved", "Synced", "check")}</td></tr>
      </tbody></table>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="connections" role="tabpanel" hidden>
      <table class="data"><thead><tr><th>Connection</th><th>Status</th><th>Used for</th></tr></thead>
      <tbody>
        <tr><td>Work tracking</td><td>${badge("approved", "Healthy", "check")}</td><td>Delivery packages</td></tr>
        <tr><td>Code hosting</td><td>${badge("review", "Index stale", "clock")}</td><td>Claims service repository</td></tr>
        <tr><td>Policy library</td><td>${badge("approved", "Healthy", "check")}</td><td>Source documents</td></tr>
      </tbody></table>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="policy" role="tabpanel" hidden>
      <p class="text-primary">Keep records for 7 years. Store Australian customer data in Australia. Ask for a fresh confirmation before high risk approvals.</p>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="assistant" role="tabpanel" hidden>
      <table class="data"><thead><tr><th>Capability</th><th>Status</th><th>Control</th></tr></thead>
      <tbody>
        <tr><td>Question helper</td><td>${badge("approved", "On", "check")}</td><td><button class="btn sm" type="button" onclick="toast('Pilot rollout details opened')">Pilot rollout</button></td></tr>
        <tr><td>Design helper</td><td>${badge("review", "Limited pilot", "clock")}</td><td><button class="btn sm" type="button" onclick="toast('Design helper test results opened')">View test results</button></td></tr>
        <tr><td>Code helper</td><td>${badge("draft", "Shadow only", "info")}</td><td><button class="btn sm danger" type="button" onclick="toast('Capability turned off for this demo')">Turn off capability</button></td></tr>
      </tbody></table>
      <div class="suggestion mt-3">
        <div class="meta">${badge("ai", "Waiting draft", "spark")}</div>
        <p class="text-primary mb-0">No drafts waiting for promotion. Corrections stay in session notes until a steward reviews them.</p>
      </div>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="support" role="tabpanel" hidden>
      <h3>Code hosting connection needs attention</h3>
      <p>Indexing is slow. Content stays hidden from support. Safe actions: reconnect, reindex, or publish a status note.</p>
      <button class="btn sm" type="button" onclick="toast('Status note drafted without private content')">Publish status note</button>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="privacy" role="tabpanel" hidden>
      <div class="list-item"><div><strong>Export request for ${MOCK.participant}</strong><div class="muted">In progress</div></div><button class="btn sm" type="button" onclick="toast('Export progress opened')">View progress</button></div>
      <div class="list-item"><div><strong>Delete personal preferences</strong><div class="muted">Ready for confirmation</div></div><button class="btn sm danger" type="button" onclick="toast('Deletion confirmed. Certificate available.')">Confirm delete</button></div>
    </div>
    <div class="modal-backdrop" id="revoke-modal" aria-hidden="true"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="revoke-title">
      <h2 id="revoke-title">Confirm before you continue</h2>
      <p>Turning off the code hosting connection stops indexing and cancels open code tasks. You can reconnect later.</p>
      <div class="acts">
        <button class="btn" type="button" onclick="closeModal('revoke-modal')">Cancel</button>
        <button class="btn danger" type="button" onclick="closeModal('revoke-modal');toast('Connection turned off')">Turn off connection</button>
      </div>
    </div></div>`,
  });

  return pages;
}
