/** Business portal page bodies (00–09) */
export function buildBusinessPages({ shell, barePage, MOCK }) {
  const pages = {};

  pages["00_portal_home.html"] = barePage({
    title: "Portal home",
    body: `<main class="main" style="max-width:980px;margin:0 auto;width:100%">
  <div class="hero">
    <h1>Choose how you want to work</h1>
    <p>CollabX helps business and delivery teams turn messy overnight exceptions into a clear, approved path. Start in the portal that matches your job.</p>
  </div>
  <div class="grid-2">
    <a class="choice" href="02_business_home.html">
      <h2>Business</h2>
      <p>For sponsors, analysts, participants, and approvers. Understand the issue, design a better path, and decide with evidence.</p>
      <div class="row"><span class="badge info">Plain language</span><span class="badge">Assistant guided</span></div>
    </a>
    <a class="choice" href="10_developer_home.html">
      <h2>Build</h2>
      <p>For engineers and reviewers. Open the approved package, change the code safely, and prove the done checks.</p>
      <div class="row"><span class="badge info">Delivery package</span><span class="badge">Coverage review</span></div>
    </a>
  </div>
  <div class="card" style="margin-top:16px">
    <h2>Quick starts</h2>
    <div class="grid-3">
      <a href="01_business_access.html">Sign in or open an invite</a>
      <a href="04_business_contribute.html">Answer as a participant</a>
      <a href="07_business_decision.html">Make a five minute decision</a>
      <a href="05_business_understand.html">Review a disagreement</a>
      <a href="11_developer_workspace.html">Propose a code change</a>
      <a href="12_developer_review.html">Check coverage before merge</a>
    </div>
  </div>
  <div class="card">
    <h2>Board story</h2>
    <ol style="margin:0;padding-left:1.2rem;color:var(--ink)">
      <li><a href="04_business_contribute.html">Frontline correction</a></li>
      <li><a href="05_business_understand.html">Compare policy and practice</a></li>
      <li><a href="06_business_solution.html">Test the overnight path</a></li>
      <li><a href="07_business_decision.html">Approve an item by item decision</a></li>
      <li><a href="10_developer_home.html">Hand off the approved package</a></li>
      <li><a href="12_developer_review.html">Block a missing test</a></li>
      <li><a href="08_business_track.html">Track results</a></li>
    </ol>
  </div>
</main>`,
  });

  pages["01_business_access.html"] = barePage({
    title: "Access",
    body: `<header class="topbar"><a class="logo" href="00_portal_home.html">CollabX</a><div class="spacer"></div><span class="crumb">Secure access</span></header>
<main class="main" style="max-width:860px;margin:0 auto;width:100%">
  <div class="tabs">
    <button class="active" type="button" onclick="switchTab('access','signin',this)">Sign in</button>
    <button type="button" onclick="switchTab('access','invite',this)">Invitation</button>
  </div>
  <div class="panel active" data-tab-group="access" data-tab="signin">
    <div class="card" style="max-width:420px">
      <h1>Sign in</h1>
      <p>Use your work account to open ${MOCK.org}.</p>
      <div class="field"><label for="email">Work email</label><input id="email" type="email" value="jordan.lee@meridianmutual.example" /></div>
      <div class="field"><label for="org">Organisation</label><select id="org"><option>${MOCK.org}</option></select></div>
      <button class="btn primary" style="width:100%" type="button" onclick="location.href='02_business_home.html'">Continue with company sign in</button>
      <p style="margin-top:12px;font-size:12px">We only show organisations you already belong to.</p>
    </div>
  </div>
  <div class="panel" data-tab-group="access" data-tab="invite">
    <div class="card" style="max-width:560px">
      <span class="badge info">Invite from ${MOCK.ba}</span>
      <h1 style="margin-top:8px">Help us understand overnight claim exceptions</h1>
      <div class="stack" style="color:var(--ink)">
        <div><strong>Why you</strong><div class="muted">You handle after hours claims and know what really happens.</div></div>
        <div><strong>What we will ask</strong><div class="muted">A few short questions and one simple scenario. About 8 minutes.</div></div>
        <div><strong>How we use your answers</strong><div class="muted">Your answers help the team improve the overnight process. They are not used for performance scoring.</div></div>
      </div>
      <div class="field"><label>Language and accessibility</label>
        <div class="row">
          <select><option>English (Australia)</option><option>Easy English</option></select>
          <label><input type="checkbox" /> Larger text</label>
        </div>
      </div>
      <label class="row" style="align-items:flex-start;margin:12px 0">
        <input id="consent" type="checkbox" />
        <span>I understand why I was invited and how my answers will be used.</span>
      </label>
      <div class="row">
        <button class="btn primary" type="button" onclick="if(!document.getElementById('consent').checked){toast('Please confirm consent first');return;} location.href='04_business_contribute.html'">Start</button>
        <button class="btn" type="button" onclick="toast('We will remind you later')">Remind me later</button>
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
    primaryAction: `<a class="btn primary" href="07_business_decision.html">Open top decision</a>`,
    showAssistant: true,
    assistantContext: "Prioritise the overnight exception decision and the missing night shift voice.",
    body: `
    <div class="attention">
      <div class="row" style="justify-content:space-between">
        <div>
          <h2>Needs attention</h2>
          <p style="margin:0;color:var(--ink)">Policy and overnight practice disagree. ${MOCK.sponsor} needs a clear decision.</p>
        </div>
        <a class="btn primary" href="05_business_understand.html">Review disagreement</a>
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
            <div class="row" style="margin-top:6px"><span class="badge disputed">Disputed</span><span class="badge review">Decision waiting</span></div>
          </div>
        </div>
        <div class="list-item">
          <div><strong>New customer onboarding</strong><div class="muted">On track · research in progress</div></div>
          <span class="badge approved">Healthy</span>
        </div>
      </div>
    </div>`,
  });

  pages["03_business_initiative.html"] = shell({
    title: MOCK.initiative,
    active: "03_business_initiative.html",
    lead: MOCK.outcome,
    primaryAction: `<a class="btn primary" href="05_business_understand.html">Continue recommended work</a>`,
    showAssistant: true,
    body: `
    <div class="grid-3">
      <div class="card tight"><div class="kpi-label">Status</div><div class="kpi" style="font-size:1.1rem">Ready to decide</div><p>One disagreement blocks progress.</p></div>
      <div class="card tight"><div class="kpi-label">Main issue</div><div style="color:var(--ink);font-weight:600">4 hour supervisor rule vs overnight parking</div></div>
      <div class="card tight"><div class="kpi-label">Decision owner</div><div style="color:var(--ink);font-weight:600">${MOCK.sponsor}</div><p>Analyst: ${MOCK.ba}</p></div>
    </div>
    <div class="card">
      <h2>Recommended next step</h2>
      <p style="color:var(--ink)">Compare the written policy with what overnight teams actually do, then prepare a decision brief.</p>
      <div class="row">
        <a class="btn primary" href="05_business_understand.html">Open Understand</a>
        <a class="btn" href="04_business_contribute.html">Ask night shift</a>
        <a class="btn" href="06_business_solution.html">Test a simple design</a>
      </div>
    </div>
    <div class="card">
      <h2>Recent changes</h2>
      <div class="stack" style="color:var(--ink)">
        <div><strong>Today</strong> · ${MOCK.participant} corrected the overnight interpretation</div>
        <div><strong>Yesterday</strong> · Interactive mock published for participant testing</div>
        <div><strong>Monday</strong> · Initiative brief accepted</div>
      </div>
    </div>`,
  });

  pages["04_business_contribute.html"] = barePage({
    title: "Contribute",
    body: `<header class="topbar">
  <a class="logo" href="00_portal_home.html">CollabX</a>
  <div class="spacer"></div>
  <span class="crumb">Contribution · about 8 minutes</span>
  <a class="icon" href="03_business_initiative.html">Exit</a>
</header>
<main class="main" style="max-width:720px;margin:0 auto;width:100%">
  <div class="card">
    <span class="badge info">Focused session</span>
    <h1 style="margin-top:8px">When a claim arrives after 8 pm and no supervisor is online, what do you do?</h1>
    <p>We ask because the written policy and overnight practice seem to disagree. Answer from your real work.</p>
    <div class="stack">
      <label class="card tight"><input type="radio" name="a" /> Create the claim, mark an exception, and continue without waiting</label>
      <label class="card tight"><input type="radio" name="a" checked /> Park the claim until the morning supervisor queue</label>
      <label class="card tight"><input type="radio" name="a" /> Call on-call informally</label>
      <label class="card tight"><input type="radio" name="a" /> Something else</label>
    </div>
    <div class="field"><label>Optional detail</label>
      <textarea>We park unless leakage risk looks high. Then we call on-call informally. The written 4 hour rule is not followed overnight.</textarea>
    </div>
    <div class="suggestion" id="contrib-suggest">
      <div class="meta"><span class="badge ai">Assistant suggestion</span><span class="badge">Not approved</span></div>
      <p style="color:var(--ink);margin:0">Draft finding: after 8 pm, claims are parked until morning unless leakage risk triggers an informal on-call contact.</p>
      <div class="row" style="margin-top:10px">
        <button class="btn sm primary" type="button" onclick="useDraft('contrib-suggest')">Use as draft</button>
        <button class="btn sm" type="button" onclick="notRight('contrib-suggest')">Not right</button>
        <button class="btn sm ghost" type="button" onclick="toast('Marked as I am not sure')">I am not sure</button>
      </div>
    </div>
    <div class="divider"></div>
    <h2>Optional scenario</h2>
    <div class="wire">
      <div class="bar"></div>
      <p style="color:var(--ink)"><strong>Claim FNOL-88421</strong> arrived at 9:14 pm. Leakage risk is low. No supervisor is online.</p>
      <div class="block"></div>
      <div class="row">
        <button class="btn primary" type="button" onclick="toast('You chose Park until morning')">Park until morning</button>
        <button class="btn" type="button" onclick="toast('You chose Contact on-call')">Contact on-call</button>
      </div>
    </div>
    <div class="row" style="margin-top:14px">
      <button class="btn primary" type="button" onclick="toast('Thanks. Your answers were saved.'); location.href='05_business_understand.html'">Submit and see recap</button>
      <button class="btn ghost" type="button" onclick="toast('Progress saved')">Save and finish later</button>
    </div>
  </div>
</main>`,
  });

  pages["05_business_understand.html"] = shell({
    title: "Understand",
    active: "05_business_understand.html",
    lead: "Compare sources around one issue. Keep disagreement visible until a decision owner resolves it.",
    primaryAction: `<a class="btn primary" href="07_business_decision.html">Prepare decision</a><button class="btn" type="button" onclick="toggleAssistant()">Ask assistant</button>`,
    showAssistant: true,
    assistantContext: "Help compare the written 4 hour rule with overnight practice and prepare options.",
    body: `
    <div class="attention">
      <h2>Selected issue</h2>
      <p style="margin:0;color:var(--ink)">${MOCK.issue}</p>
    </div>
    <div class="tabs">
      <button class="active" type="button" onclick="switchTab('u','disagree',this)">Disagreement</button>
      <button type="button" onclick="switchTab('u','sources',this)">Sources</button>
      <button type="button" onclick="switchTab('u','people',this)">People</button>
      <button type="button" onclick="switchTab('u','process',this)">Policy vs actual work</button>
      <button type="button" onclick="switchTab('u','options',this)">Options</button>
      <button type="button" onclick="switchTab('u','terms',this)">Shared terms</button>
    </div>
    <div class="panel active" data-tab-group="u" data-tab="disagree">
      <div class="compare">
        <div class="side">
          <div class="row"><span class="badge approved">Policy view</span><span class="badge">Decision owner: Policy team</span></div>
          <h3 style="margin-top:10px">Exceptions need supervisor approval within 4 hours</h3>
          <div class="source"><div><strong>Claims operations policy</strong><div class="muted">Current · section on exception handling</div></div></div>
        </div>
        <div class="side disputed">
          <div class="row"><span class="badge disputed">Practice view</span><span class="badge">Shared by ${MOCK.participant}</span></div>
          <h3 style="margin-top:10px">After 8 pm, claims are parked until morning unless leakage risk triggers an informal on-call contact</h3>
          <div class="source"><div><strong>Interview with ${MOCK.participant}</strong><div class="muted">28 July 2026 · night shift adjuster</div></div></div>
        </div>
      </div>
      <div class="suggestion" id="u-suggest">
        <div class="meta"><span class="badge ai">Assistant suggestion</span><span class="badge">Not approved</span></div>
        <p style="color:var(--ink)">Recommended next step: keep the 4 hour rule in business hours, and create a formal overnight park path with a governed on-call option.</p>
        <div class="row">
          <button class="btn sm primary" type="button" onclick="useDraft('u-suggest')">Use as draft</button>
          <button class="btn sm" type="button" onclick="notRight('u-suggest')">Not right</button>
          <button class="btn sm ghost" type="button" onclick="toast('Asked ' + MOCK.sponsor)">Ask decision owner</button>
        </div>
      </div>
    </div>
    <div class="panel" data-tab-group="u" data-tab="sources">
      <div class="card">
        <table class="data">
          <thead><tr><th>Source</th><th>Freshness</th><th>Status</th><th></th></tr></thead>
          <tbody>
            <tr><td>Claims operations policy</td><td>Current</td><td><span class="badge approved">Ready</span></td><td><button class="btn sm" type="button" onclick="toast('Opened exact passage')">Open passage</button></td></tr>
            <tr><td>Interview with ${MOCK.participant}</td><td>14 days</td><td><span class="badge approved">Ready</span></td><td><button class="btn sm" type="button">Open notes</button></td></tr>
            <tr><td>Overnight call logs</td><td>Waiting</td><td><span class="badge review">Needs consent</span></td><td><button class="btn sm" type="button">Request access</button></td></tr>
            <tr><td>Current claims system behaviour</td><td>Recent</td><td><span class="badge info">From Build</span></td><td><a class="btn sm" href="10_developer_home.html">Open in Build</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel" data-tab-group="u" data-tab="people">
      <div class="card">
        <table class="data">
          <thead><tr><th>Person or group</th><th>Role</th><th>Coverage</th><th></th></tr></thead>
          <tbody>
            <tr><td>${MOCK.sponsor}</td><td>Decision owner</td><td><span class="badge approved">Covered</span></td><td></td></tr>
            <tr><td>${MOCK.participant}</td><td>Frontline adjuster</td><td><span class="badge approved">Covered</span></td><td></td></tr>
            <tr><td>Night shift adjusters</td><td>Missing perspective</td><td><span class="badge block">Must fix first</span></td><td><a class="btn sm" href="04_business_contribute.html">Invite</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel" data-tab-group="u" data-tab="process">
      <div class="grid-2">
        <div class="card"><h3>Written policy</h3><p style="color:var(--ink)">Intake → exception → supervisor within 4 hours → continue</p></div>
        <div class="card"><h3>Actual overnight work</h3><p style="color:var(--ink)">Intake → park overnight → morning queue (most cases). Informal on-call when leakage risk looks high.</p></div>
      </div>
      <p>This difference is shown as a disagreement. CollabX will not hide it or average it away.</p>
    </div>
    <div class="panel" data-tab-group="u" data-tab="options">
      <div class="card">
        <table class="data">
          <thead><tr><th>Option</th><th>Speed</th><th>Cost</th><th>Concern</th></tr></thead>
          <tbody>
            <tr><td>Keep current practice</td><td>18 hours</td><td>Low</td><td>Informal workarounds remain</td></tr>
            <tr style="background:var(--brand-soft)"><td>Formal park path plus governed on-call</td><td>About 4 to 6 hours</td><td>Medium</td><td>On-call roster needed</td></tr>
            <tr><td>Staff night supervisors</td><td>About 4 hours</td><td>High</td><td>Higher ongoing cost</td></tr>
          </tbody>
        </table>
        <a class="btn primary" href="07_business_decision.html" style="margin-top:12px">Open decision brief</a>
      </div>
    </div>
    <div class="panel" data-tab-group="u" data-tab="terms">
      <div class="card">
        <table class="data">
          <thead><tr><th>Term</th><th>Meaning</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Exception</td><td>A claim that cannot follow the standard overnight path</td><td><span class="badge disputed">Disputed</span></td></tr>
            <tr><td>Park overnight</td><td>Hold the claim until the next morning supervisor queue</td><td><span class="badge draft">Draft</span></td></tr>
            <tr><td>On-call contact</td><td>Reach the duty manager for high leakage risk</td><td><span class="badge draft">Draft</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>`,
  });

  pages["06_business_solution.html"] = shell({
    title: "Design",
    active: "06_business_solution.html",
    lead: "Test the overnight path with a simple mock before anyone builds software.",
    primaryAction: `<a class="btn primary" href="04_business_contribute.html">Run participant test</a>`,
    showAssistant: true,
    body: `
    <div class="grid-2">
      <div class="card">
        <div class="row"><span class="badge info">Interactive mock</span><span class="badge">Scenario: after 8 pm</span></div>
        <div class="wire" style="margin-top:12px">
          <div class="bar"></div>
          <h3>What should happen to this claim?</h3>
          <p style="color:var(--ink)">Claim arrived at 9:14 pm. Leakage risk is low. No supervisor is online.</p>
          <div class="block"></div>
          <div class="row">
            <button class="btn primary" type="button">Park until morning</button>
            <button class="btn" type="button">Contact on-call</button>
          </div>
        </div>
        <details style="margin-top:12px">
          <summary class="muted">Advanced design details</summary>
          <p>Story → sketch → interactive mock → technical prototype → sandbox build → code change. Keep advanced structure closed until needed.</p>
        </details>
      </div>
      <div class="card">
        <h2>Findings</h2>
        <div class="list-item">
          <div><strong>On-call feels unofficial</strong><div class="muted">From participant test · high importance</div></div>
          <span class="badge disputed">Needs design change</span>
        </div>
        <div class="list-item">
          <div><strong>Park until morning is clear</strong><div class="muted">From participant test · medium importance</div></div>
          <span class="badge approved">Useful</span>
        </div>
        <div class="suggestion" id="design-suggest">
          <div class="meta"><span class="badge ai">Assistant suggestion</span></div>
          <p style="color:var(--ink);margin:0">Make on-call a visible, governed action with a short reason, not a hidden workaround.</p>
          <div class="row" style="margin-top:8px">
            <button class="btn sm primary" type="button" onclick="useDraft('design-suggest')">Use as draft</button>
            <button class="btn sm" type="button" onclick="notRight('design-suggest')">Not right</button>
          </div>
        </div>
      </div>
    </div>`,
  });

  pages["07_business_decision.html"] = shell({
    title: "Decide",
    active: "07_business_decision.html",
    lead: "Review meaning changes item by item. There is no approve all action.",
    primaryAction: `<button class="btn primary" type="button" onclick="openModal('sign-modal')">Sign selected items</button>`,
    showAssistant: false,
    user: "PS",
    body: `
    <div class="grid-2">
      <div class="card">
        <h2>Decision brief</h2>
        <p style="color:var(--ink)">Recommend a formal overnight park path plus a governed on-call option for high leakage risk. Keep the 4 hour supervisor rule in business hours.</p>
        <div class="row">
          <span class="badge approved">Supported by policy and interview</span>
          <span class="badge disputed">Risk team wants one rule for all hours</span>
          <span class="badge needed">Source needed for overnight volume</span>
        </div>
      </div>
      <div class="card">
        <h2>If we decide this</h2>
        <ul style="margin:0;padding-left:1.1rem;color:var(--ink)">
          <li>Expected behaviour for overnight parking becomes clear</li>
          <li>Informal on-call becomes a governed action</li>
          <li>Delivery can start from an approved package</li>
        </ul>
      </div>
    </div>
    <div class="card">
      <h2>Sign-off items</h2>
      <table class="data">
        <thead><tr><th></th><th>Item</th><th>Meaning change</th><th>Your choice</th></tr></thead>
        <tbody>
          <tr>
            <td><input type="checkbox" checked /></td>
            <td>Overnight expected behaviour</td>
            <td>Adds park path and governed on-call</td>
            <td><select><option>Approve</option><option>Reject</option><option>Ask for more evidence</option></select></td>
          </tr>
          <tr>
            <td><input type="checkbox" checked /></td>
            <td>Decision on the disagreement</td>
            <td>Splits day and night rules</td>
            <td><select><option>Approve</option><option>Reject</option></select></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Overnight volume claim</td>
            <td>Excluded until source is available</td>
            <td><select><option>Leave out</option></select></td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:8px">Each item needs its own choice. Technical version details stay under Technical details.</p>
      <details><summary>Technical details</summary><p class="muted">Approved version identifiers and change history are available here for audit. They are not required to understand the decision.</p></details>
    </div>
    <div class="modal-backdrop" id="sign-modal">
      <div class="modal" role="dialog" aria-labelledby="sign-title">
        <h2 id="sign-title">Confirm before you continue</h2>
        <p>You are approving 2 selected items for ${MOCK.initiative}. This creates an approved delivery package for Build.</p>
        <p>Effect: Business can track delivery. Build can implement the overnight path. Excluded items stay open.</p>
        <div class="acts">
          <button class="btn" type="button" onclick="closeModal('sign-modal')">Cancel</button>
          <a class="btn primary" href="10_developer_home.html" onclick="closeModal('sign-modal')">Sign and open Build package</a>
        </div>
      </div>
    </div>`,
  });

  pages["08_business_track.html"] = shell({
    title: "Track",
    active: "08_business_track.html",
    lead: "Follow delivery, clarifications, and results without leaving the business view.",
    primaryAction: `<a class="btn primary" href="10_developer_home.html">Open delivery package</a>`,
    body: `
    <div class="grid-3">
      <div class="card tight"><div class="kpi-label">Delivery status</div><div class="kpi" style="font-size:1.1rem">In review</div></div>
      <div class="card tight"><div class="kpi-label">Open clarifications</div><div class="kpi">1</div></div>
      <div class="card tight"><div class="kpi-label">Pilot cycle time</div><div class="kpi" style="font-size:1.3rem">6.2h</div><p>Target 4 hours · baseline 18 hours</p></div>
    </div>
    <div class="card">
      <h2>Clarifications and differences</h2>
      <div class="list-item">
        <div><strong>Does parking pause customer response time?</strong><div class="muted">Asked by ${MOCK.engineer} · needs business confirmation</div></div>
        <button class="btn sm primary" type="button" onclick="toast('Answer saved. Approved package is unchanged until a meaning change is reviewed.')">Confirm answer</button>
      </div>
      <div class="list-item">
        <div><strong>Patch paused only the internal timer</strong><div class="muted">Matches the confirmed answer · coverage review still needs a test</div></div>
        <a class="btn sm" href="12_developer_review.html">View in Build</a>
      </div>
    </div>
    <div class="card">
      <h2>Results so far</h2>
      <p style="color:var(--ink)">Pilot week improved cycle time from 18 hours to 6.2 hours. Night shift sample is still small, so keep that limitation visible.</p>
      <div class="row"><span class="badge approved">No open harm flags</span><span class="badge review">Sample size still limited</span></div>
    </div>`,
  });

  pages["09_business_admin.html"] = shell({
    title: "Settings",
    active: "09_business_admin.html",
    lead: "Manage people, connections, data policy, assistant controls, support, and privacy in one place.",
    primaryAction: `<button class="btn danger" type="button" onclick="openModal('revoke-modal')">Review a risky change</button>`,
    body: `
    <div class="tabs">
      <button class="active" type="button" onclick="switchTab('a','people',this)">People and access</button>
      <button type="button" onclick="switchTab('a','connections',this)">Connections</button>
      <button type="button" onclick="switchTab('a','policy',this)">Data policy</button>
      <button type="button" onclick="switchTab('a','assistant',this)">Assistant controls</button>
      <button type="button" onclick="switchTab('a','support',this)">Support</button>
      <button type="button" onclick="switchTab('a','privacy',this)">Privacy</button>
    </div>
    <div class="panel active card" data-tab-group="a" data-tab="people">
      <table class="data"><thead><tr><th>Group</th><th>Access</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Business analysts</td><td>Business portal</td><td><span class="badge approved">Synced</span></td></tr>
        <tr><td>Sponsors</td><td>Decide and track</td><td><span class="badge approved">Synced</span></td></tr>
        <tr><td>Engineers</td><td>Build portal</td><td><span class="badge approved">Synced</span></td></tr>
      </tbody></table>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="connections">
      <table class="data"><thead><tr><th>Connection</th><th>Status</th><th>Used for</th></tr></thead>
      <tbody>
        <tr><td>Work tracking</td><td><span class="badge approved">Healthy</span></td><td>Delivery packages</td></tr>
        <tr><td>Code hosting</td><td><span class="badge review">Needs attention</span></td><td>Claims service repository</td></tr>
        <tr><td>Policy library</td><td><span class="badge approved">Healthy</span></td><td>Source documents</td></tr>
      </tbody></table>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="policy">
      <p style="color:var(--ink)">Keep records for 7 years. Store Australian customer data in Australia. Ask for a fresh confirmation before high risk approvals.</p>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="assistant">
      <table class="data"><thead><tr><th>Capability</th><th>Status</th><th>Control</th></tr></thead>
      <tbody>
        <tr><td>Question helper</td><td><span class="badge approved">On</span></td><td><button class="btn sm" type="button">Pilot rollout</button></td></tr>
        <tr><td>Design helper</td><td><span class="badge review">Limited pilot</span></td><td><button class="btn sm" type="button">View test results</button></td></tr>
        <tr><td>Code helper</td><td><span class="badge draft">Shadow only</span></td><td><button class="btn sm danger" type="button" onclick="toast('Capability turned off')">Turn off capability</button></td></tr>
      </tbody></table>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="support">
      <h3>Code hosting connection needs attention</h3>
      <p>Indexing is slow. Content stays hidden from support. Safe actions: reconnect, reindex, or publish a status note.</p>
      <button class="btn sm" type="button" onclick="toast('Status note drafted without private content')">Publish status note</button>
    </div>
    <div class="panel card" data-tab-group="a" data-tab="privacy">
      <div class="list-item"><div><strong>Export request for ${MOCK.participant}</strong><div class="muted">In progress</div></div><button class="btn sm" type="button">View progress</button></div>
      <div class="list-item"><div><strong>Delete personal preferences</strong><div class="muted">Ready for confirmation</div></div><button class="btn sm danger" type="button" onclick="toast('Deletion confirmed. Certificate available.')">Confirm delete</button></div>
    </div>
    <div class="modal-backdrop" id="revoke-modal"><div class="modal">
      <h2>Confirm before you continue</h2>
      <p>Turning off the code hosting connection stops indexing and cancels open code tasks. You can reconnect later.</p>
      <div class="acts">
        <button class="btn" type="button" onclick="closeModal('revoke-modal')">Cancel</button>
        <button class="btn danger" type="button" onclick="closeModal('revoke-modal');toast('Connection turned off')">Turn off connection</button>
      </div>
    </div></div>`,
  });

  return pages;
}
