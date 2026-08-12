/** Developer portal page bodies (10–12) */
export function buildDeveloperPages({ shell, MOCK }) {
  const pages = {};

  pages["10_developer_home.html"] = shell({
    title: "Delivery package",
    portal: "developer",
    active: "10_developer_home.html",
    user: "AC",
    lead: "Start from approved intent. Know what to build, what must not change, and how you will prove it.",
    primaryAction: `<a class="btn primary" href="11_developer_workspace.html">Open workspace</a>`,
    showAssistant: true,
    assistantContext: "Explain the overnight park path and point to the current claims service behaviour.",
    body: `
    <div class="attention">
      <h2>Approved package ready</h2>
      <p style="margin:0;color:var(--ink)">${MOCK.outcome}</p>
    </div>
    <div class="grid-2">
      <div class="card">
        <h2>Expected behaviour</h2>
        <p style="color:var(--ink)">${MOCK.expectedBehaviour}</p>
        <div class="source"><div><strong>Why this exists</strong><div class="muted">Linked to the approved overnight decision and frontline correction from ${MOCK.participant}</div></div></div>
      </div>
      <div class="card">
        <h2>Done checks</h2>
        <ul style="margin:0;padding-left:1.1rem;color:var(--ink)">
          <li>${MOCK.doneCheck}</li>
          <li>On-call contact records an outcome within 30 minutes for high leakage risk.</li>
          <li>No silent change to the approved package when clarifying questions are answered.</li>
        </ul>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <h2>Exceptions and constraints</h2>
        <div class="stack" style="color:var(--ink)">
          <div><strong>Must support</strong> · Park overnight when no supervisor is online</div>
          <div><strong>Must support</strong> · Governed on-call for high leakage risk</div>
          <div><strong>Must not change</strong> · Business hours 4 hour supervisor rule</div>
        </div>
      </div>
      <div class="card">
        <h2>Open questions</h2>
        <div class="list-item">
          <div><strong>Does parking pause customer response time?</strong><div class="muted">Answer confirmed: no, unless an approved exception is logged</div></div>
          <span class="badge approved">Answered</span>
        </div>
        <a class="btn sm" href="03_business_initiative.html">View business context</a>
      </div>
    </div>`,
  });

  pages["11_developer_workspace.html"] = shell({
    title: "Workspace",
    portal: "developer",
    active: "11_developer_workspace.html",
    user: "AC",
    lead: "Discover the current code, plan a bounded change, and keep tests next to the behaviour.",
    primaryAction: `<button class="btn primary" type="button" onclick="toast('Patch proposed for review')">Propose patch</button><button class="btn danger" type="button" onclick="denyAction('Deploy needs a separate release approval')">Deploy</button>`,
    showAssistant: true,
    assistantContext: "Find where supervisor pending status is handled and propose a park overnight path.",
    body: `
    <div class="tabs">
      <button class="active" type="button" onclick="switchTab('w','discover',this)">Code discovery</button>
      <button type="button" onclick="switchTab('w','plan',this)">Plan</button>
      <button type="button" onclick="switchTab('w','patch',this)">Patch</button>
      <button type="button" onclick="switchTab('w','tests',this)">Tests</button>
      <button type="button" onclick="switchTab('w','ask',this)">Clarification</button>
    </div>
    <div class="panel active" data-tab-group="w" data-tab="discover">
      <div class="card">
        <div class="row"><span class="badge info">Observed in code</span><span class="badge">claims-service</span></div>
        <p style="color:var(--ink)">Current code supports a supervisor pending status only. There is no park overnight path yet.</p>
        <div class="source"><div><strong>ExceptionHandler</strong><div class="muted">Observed behaviour · not an approved business rule by itself</div></div></div>
        <div class="suggestion" id="code-suggest">
          <div class="meta"><span class="badge ai">Assistant suggestion</span></div>
          <p style="color:var(--ink);margin:0">Add a park overnight status and pause only the internal supervisor timer.</p>
          <div class="row" style="margin-top:8px">
            <button class="btn sm primary" type="button" onclick="useDraft('code-suggest')">Use as draft</button>
            <button class="btn sm" type="button" onclick="notRight('code-suggest')">Not right</button>
          </div>
        </div>
      </div>
    </div>
    <div class="panel" data-tab-group="w" data-tab="plan">
      <div class="card">
        <ol style="margin:0;padding-left:1.1rem;color:var(--ink)">
          <li>Add park overnight status when no supervisor is online after 8 pm.</li>
          <li>Pause only the internal supervisor timer.</li>
          <li>Leave customer response time running unless an approved exception is logged.</li>
          <li>Add a test for the paused internal timer.</li>
        </ol>
      </div>
    </div>
    <div class="panel" data-tab-group="w" data-tab="patch">
      <div class="card">
        <div class="code">+ if (afterHours && !supervisorOnline) {
+   claim.setStatus(PARKED_OVERNIGHT);
+   slaClock.pause(INTERNAL_SUPERVISOR);
+ }</div>
        <div class="row" style="margin-top:10px">
          <button class="btn sm" type="button" onclick="toast('Local change reverted')">Revert local change</button>
          <a class="btn sm primary" href="12_developer_review.html">Send to review</a>
        </div>
      </div>
    </div>
    <div class="panel" data-tab-group="w" data-tab="tests">
      <div class="card">
        <div class="list-item">
          <div><strong>Internal timer pauses when parked</strong><div class="muted">Needed for the approved done check</div></div>
          <span class="badge block">Missing test</span>
        </div>
        <button class="btn sm primary" type="button" onclick="toast('Test draft added')">Add test draft</button>
      </div>
    </div>
    <div class="panel" data-tab-group="w" data-tab="ask">
      <div class="card">
        <h3>Clarification thread</h3>
        <div class="stack" style="color:var(--ink)">
          <div><strong>${MOCK.engineer}:</strong> Does parking pause customer response time?</div>
          <div><strong>Assistant draft:</strong> No. Only the internal supervisor timer pauses.</div>
          <div><strong>${MOCK.ba}:</strong> Confirmed. Do not change the approved package silently.</div>
        </div>
      </div>
    </div>`,
  });

  pages["12_developer_review.html"] = shell({
    title: "Review",
    portal: "developer",
    active: "12_developer_review.html",
    user: "AC",
    lead: "Check changed behaviour, coverage, and findings before merge. Deploy stays separate.",
    primaryAction: `<button class="btn" type="button" onclick="toast('Exception request needs a named owner and reason')">Request exception</button><button class="btn danger" type="button" onclick="denyAction('Critical missing test. Merge is blocked.')">Force merge</button>`,
    showAssistant: false,
    body: `
    <div class="grid-3">
      <div class="card tight"><div class="kpi-label">Changed behaviour</div><div style="color:var(--ink);font-weight:600">Park overnight path</div></div>
      <div class="card tight"><div class="kpi-label">Coverage</div><div><span class="badge block">Missing test</span></div></div>
      <div class="card tight"><div class="kpi-label">Release readiness</div><div><span class="badge review">Not ready</span></div></div>
    </div>
    <div class="card">
      <h2>Requirements coverage</h2>
      <table class="data">
        <thead><tr><th>Done check</th><th>Code</th><th>Test</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Parking pauses only the internal supervisor timer</td><td>ExceptionHandler</td><td>—</td><td><span class="badge block">Missing test</span></td></tr>
          <tr><td>On-call records an outcome within 30 minutes</td><td>—</td><td>—</td><td><span class="badge review">Not started</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="card">
      <h2>Findings</h2>
      <div class="list-item">
        <div><strong>No test proves the internal timer pauses overnight</strong><div class="muted">Blocks merge while this remains open</div></div>
        <button class="btn sm" type="button" onclick="openModal('exception-modal')">Request exception</button>
      </div>
      <div class="list-item">
        <div><strong>Comment mentions informal on-call</strong><div class="muted">Keep wording aligned with the governed action</div></div>
        <button class="btn sm" type="button" onclick="toast('Comment opened')">Open</button>
      </div>
      <div class="row" style="margin-top:8px">
        <a class="btn primary" href="11_developer_workspace.html">Return to workspace</a>
        <a class="btn" href="08_business_track.html">Tell Business</a>
      </div>
    </div>
    <div class="modal-backdrop" id="exception-modal"><div class="modal">
      <h2>Request an approved exception</h2>
      <p>Critical coverage gaps need a named owner, reason, and end date. This never silently approves the change.</p>
      <div class="field"><label>Reason</label><select><option>Test will follow in the next change</option><option>Risk accepted by decision owner</option></select></div>
      <div class="acts">
        <button class="btn" type="button" onclick="closeModal('exception-modal')">Cancel</button>
        <button class="btn primary" type="button" onclick="closeModal('exception-modal');toast('Exception sent to decision owner')">Send request</button>
      </div>
    </div></div>`,
  });

  return pages;
}
