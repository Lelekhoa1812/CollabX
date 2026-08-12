/** Developer portal page bodies (10–12) */
export function buildDeveloperPages({ shell, MOCK, icon, badge }) {
  const pages = {};

  pages["10_developer_home.html"] = shell({
    title: "Delivery package",
    portal: "developer",
    active: "10_developer_home.html",
    user: "AC",
    lead: "Start from approved intent. Know what to build, what must not change, and how you will prove it.",
    primaryAction: `<a class="btn primary" href="11_developer_workspace.html">${icon("workspace")} Open workspace</a>`,
    showAssistant: true,
    assistantContext: "Explain the overnight park path and point to the current claims service behaviour.",
    demoStep: "build",
    body: `
    <div class="attention">
      <div class="row-between">
        <div>
          <h2>Package ready</h2>
          <p class="text-primary mb-0">${MOCK.outcome}</p>
        </div>
        <div class="stack" style="align-items:flex-end">
          ${badge("approved", "Approved", "check")}
          <span class="provenance">${icon("package")} <span data-package-version>${MOCK.packageVersion}</span></span>
        </div>
      </div>
    </div>

    <div class="card accent" data-unless="decisionSigned">
      <div class="row">${badge("review", "Awaiting approval", "clock")}</div>
      <p class="text-primary mb-0">Open Decide to sign selected items. Build can still inspect context, but the package is not approved yet.</p>
      <a class="btn sm mt-2" href="07_business_decision.html">Open Decide</a>
    </div>

    <div class="receipt" data-if="decisionSigned">
      <div class="row">${badge("approved", "From Business approval", "decide")}<span class="provenance">Return path: Business Track</span></div>
      <p class="text-primary mb-0">Signed by ${MOCK.sponsor}. Trace: participant correction → disagreement → item-level approval → this package.</p>
    </div>

    <div class="card">
      <div class="row-between">
        <h2>${icon("spark")} Carried from Business</h2>
        <span class="session-phase"><span data-learning-score>8%</span> learned</span>
      </div>
      <p class="text-sm">Build starts from confirmed answers and the signed package. Clarifications cannot silently rewrite meaning.</p>
      <div id="remembered-build"></div>
      <div id="growth-timeline" class="growth-timeline"></div>
    </div>

    <div class="grid-2">
      <div class="card">
        <h2>Expected behaviour</h2>
        <p class="text-primary">${MOCK.expectedBehaviour}</p>
        <div class="source">${icon("source")}<div><strong>Why this exists</strong><div class="muted">Linked to the approved overnight decision and frontline correction from ${MOCK.participant}</div></div></div>
        <div class="source">${icon("source")}<div><strong>Policy</strong><div class="muted">§4.2 remains for business hours: “${MOCK.policyPassage}”</div></div></div>
      </div>
      <div class="card">
        <h2>Done checks</h2>
        <ul class="text-primary" style="margin:0;padding-left:1.1rem">
          <li>${MOCK.doneCheck}</li>
          <li>On-call contact records an outcome within 30 minutes for high overnight risk.</li>
          <li>No silent change to the approved package when clarifying questions are answered.</li>
        </ul>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <h2>Constraints</h2>
        <div class="stack text-primary">
          <div><strong>Must support</strong> · Park overnight when no supervisor is online</div>
          <div><strong>Must support</strong> · Formal on-call for high overnight risk</div>
          <div><strong>Must not change</strong> · Business hours 4 hour supervisor rule</div>
          <div><strong>Excluded</strong> · Overnight volume claim until source arrives</div>
        </div>
      </div>
      <div class="card">
        <h2>Open questions</h2>
        <div class="list-item">
          <div><strong>Does parking pause customer response time?</strong><div class="muted">Answer confirmed: no, unless an approved exception is logged · package unchanged</div></div>
          ${badge("approved", "Answered", "check")}
        </div>
        <a class="btn sm" href="03_business_initiative.html">View Business</a>
        <a class="btn sm" href="08_business_track.html">Back to Track</a>
      </div>
    </div>`,
  });

  pages["11_developer_workspace.html"] = shell({
    title: "Workspace",
    portal: "developer",
    active: "11_developer_workspace.html",
    user: "AC",
    lead: "Discover the current code, plan a bounded change, and keep tests next to the behaviour.",
    primaryAction: `<button class="btn primary" type="button" onclick="proposePatch(); location.href='12_developer_review.html'">${icon("code")} Propose change</button><button class="btn danger" type="button" onclick="denyAction('Deploy needs separate approval')">Deploy</button>`,
    showAssistant: true,
    assistantOpen: true,
    assistantContext: "Find where supervisor pending status is handled and propose a park overnight path.",
    demoStep: "build",
    body: `
    <div class="progress-strip" id="workspace-progress">
      <div class="meta"><span>${icon("spark")} Discovery in progress</span><span>Exploring → change ready</span></div>
      <div class="progress"><span style="width:72%"></span></div>
    </div>

    <div class="card">
      <div class="row-between">
        <h2>${icon("spark")} From Business</h2>
        <span class="provenance">Adapted over the session · not silently approved</span>
      </div>
      <p class="text-sm">This workspace reuses confirmed answers and the signed package. It does not invent new business meaning.</p>
      <div id="remembered-build"></div>
      <div id="insight-feed" class="insight-feed mt-3"></div>
    </div>

    <div class="tabs" role="tablist" aria-label="Workspace" data-tabs="w">
      <button role="tab" aria-selected="true" class="active" type="button" data-tab-target="discover" onclick="switchTab('w','discover',this)">Discovery</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="plan" onclick="switchTab('w','plan',this)">Plan</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="patch" onclick="switchTab('w','patch',this)">Patch</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="tests" onclick="switchTab('w','tests',this)">Tests</button>
      <button role="tab" aria-selected="false" type="button" data-tab-target="ask" onclick="switchTab('w','ask',this)">Clarification</button>
    </div>

    <div class="panel active" data-tab-group="w" data-tab="discover" role="tabpanel">
      <div class="card">
        <div class="row">${badge("info", "Found in code", "code")}${badge("draft", "claims-service", "package")}<span class="provenance">${icon("warn")} Index current</span></div>
        <p class="text-primary">Current code supports a supervisor pending status only. There is no park overnight path yet.</p>
        <div class="source">${icon("code")}<div><strong>ExceptionHandler.java · L184</strong><div class="muted">Observed behaviour · not an approved business rule by itself</div></div></div>
        <div class="source">${icon("spark")}<div><strong>Discovery note</strong><div class="muted">Overnight parking looks like a workaround outside code</div></div></div>
        <div class="activity mt-3">
          <div class="activity-item done"><span class="activity-dot"></span><div>Scoped claims-service paths</div></div>
          <div class="activity-item done"><span class="activity-dot"></span><div>Found supervisor pending status</div></div>
          <div class="activity-item active"><span class="activity-dot"></span><div>Drafting park overnight change</div></div>
        </div>
        <div class="suggestion" id="code-suggest">
          <div class="meta">${badge("ai", "Suggestion", "spark")}<span class="confidence high">${icon("check")} Matches package</span></div>
          <p class="text-primary mb-0">Add a park overnight status and pause only the internal supervisor timer.</p>
          <div class="row mt-2">
            <button class="btn sm primary" type="button" onclick="useDraft('code-suggest')">Use draft</button>
            <button class="btn sm" type="button" onclick="notRight('code-suggest')">Not right</button>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" data-tab-group="w" data-tab="plan" role="tabpanel" hidden>
      <div class="card">
        <h2>Change plan</h2>
        <ol class="text-primary" style="margin:0;padding-left:1.1rem">
          <li>Add park overnight status when no supervisor is online after 8 pm.</li>
          <li>Pause only the internal supervisor timer.</li>
          <li>Leave customer response time running unless an approved exception is logged.</li>
          <li>Add a test for the paused internal timer.</li>
        </ol>
        <p class="metric-note">Preview only: nothing changes until you propose.</p>
      </div>
    </div>

    <div class="panel" data-tab-group="w" data-tab="patch" role="tabpanel" hidden>
      <div class="card">
        <div class="code"><span class="add">+ if (afterHours && !supervisorOnline) {
+   claim.setStatus(PARKED_OVERNIGHT);
+   slaClock.pause(INTERNAL_SUPERVISOR);
+ }</span></div>
        <div class="receipt mt-3">
          <h3>Change receipt</h3>
          <div class="stack text-primary">
            <div><strong>Base</strong> · commit a18c92e · exact base required</div>
            <div><strong>Files</strong> · ExceptionHandler.java · SlaClock.java</div>
            <div><strong>Rollback</strong> · Revert restores previous behaviour</div>
          </div>
        </div>
        <div class="row mt-3">
          <button class="btn sm" type="button" onclick="toast('Local change reverted')">Revert</button>
          <button class="btn sm primary" type="button" onclick="proposePatch(); location.href='12_developer_review.html'">Send to review</button>
        </div>
      </div>
    </div>

    <div class="panel" data-tab-group="w" data-tab="tests" role="tabpanel" hidden>
      <div class="card">
        <div class="list-item">
          <div><strong>Internal timer pauses when parked</strong><div class="muted">Needed for the approved done check</div></div>
          <span data-missing-test>${badge("block", "Missing test", "block")}</span>
        </div>
        <button class="btn sm primary" type="button" onclick="addTestDraft()">Add test</button>
      </div>
    </div>

    <div class="panel" data-tab-group="w" data-tab="ask" role="tabpanel" hidden>
      <div class="card">
        <h3>Clarification</h3>
        <div class="stack">
          <div class="msg user"><div class="who">${MOCK.engineer} · 09:14</div><div class="text-primary">Does parking pause customer response time?</div></div>
          <div class="msg agent"><div class="who">${icon("spark")} Draft · 09:14</div><div class="text-primary">No. Only the internal supervisor timer pauses. Customer response time keeps running unless an approved exception is logged.</div><div class="row mt-2"><span class="confidence high">${icon("check")} Matches done check</span></div></div>
          <div class="msg user"><div class="who">${MOCK.ba} · 09:21</div><div class="text-primary">Confirmed. Do not change the approved package silently.</div></div>
          <div class="msg agent"><div class="who">${icon("spark")} Assistant · 09:21</div><div class="text-primary">Logged as clarification. Package ${MOCK.packageVersion} remains unchanged. I cannot approve meaning changes.</div></div>
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
    primaryAction: `<button class="btn" type="button" onclick="toast('Needs owner and reason')">${icon("warn")} Request exception</button><button class="btn danger" type="button" onclick="denyAction('Missing test. Merge blocked.')">Force merge</button>`,
    showAssistant: true,
    assistantContext: "Explain AC coverage gaps. I can draft an exception request, but I cannot force merge.",
    demoStep: "review",
    body: `
    <div class="grid-3">
      <div class="card tight"><div class="kpi-label">Change</div><div class="text-primary" style="font-weight:600">Park overnight path</div></div>
      <div class="card tight"><div class="kpi-label">Coverage</div><div data-unless="testAdded">${badge("block", "Missing test", "block")}</div><div class="hidden" data-if="testAdded">${badge("review", "Test added", "clock")}</div></div>
      <div class="card tight"><div class="kpi-label">Release</div><div>${badge("review", "Not ready", "clock")}</div></div>
    </div>

    <div class="attention">
      <div class="row-between">
        <div>
          <h2>${icon("block")} Merge blocked</h2>
          <p class="text-primary mb-0">Review finding <strong>REV-104</strong>: critical missing test. Force merge is denied.</p>
        </div>
        <span class="badge block">${icon("block")} Blocked</span>
      </div>
    </div>

    <div class="card">
      <h2>Coverage</h2>
      <table class="data">
        <thead><tr><th>Done check</th><th>Code</th><th>Test</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Parking pauses only the internal supervisor timer</td><td>ExceptionHandler</td><td>—</td><td><span data-missing-test>${badge("block", "Missing test", "block")}</span></td></tr>
          <tr><td>On-call records an outcome within 30 minutes</td><td>—</td><td>—</td><td>${badge("review", "Not started", "clock")}</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card">
      <h2>Findings</h2>
      <div class="list-item">
        <div>
          <strong>No test proves the internal timer pauses overnight</strong>
          <div class="muted">Type: missing test · Severity: Critical · Blocks merge while this remains open</div>
          <div class="row mt-2">${badge("ai", "Review finding", "review")}<span class="provenance">Tied to ${MOCK.packageVersion}</span></div>
        </div>
        <button class="btn sm" type="button" onclick="openModal('exception-modal')">Request exception</button>
      </div>
      <div class="list-item">
        <div>
          <strong>Comment mentions informal on-call</strong>
          <div class="muted">Type: wording mismatch · Keep wording aligned with the approved action</div>
        </div>
        <button class="btn sm" type="button" onclick="toast('Comment opened')">Open</button>
      </div>
      <div class="row mt-3">
        <a class="btn primary" href="11_developer_workspace.html">Back to workspace</a>
        <a class="btn" href="08_business_track.html">Update Business</a>
        <button class="btn" type="button" onclick="addTestDraft()">Add missing test</button>
      </div>
    </div>

    <div class="modal-backdrop" id="exception-modal" aria-hidden="true"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="exception-title">
      <h2 id="exception-title">Request exception</h2>
      <p>Critical coverage gaps need a named owner, reason, and end date. This never silently approves the change. Routed to decision owner ${MOCK.sponsor}.</p>
      <div class="field"><label for="exception-reason">Reason</label><select id="exception-reason"><option>Test will follow in the next change</option><option>Risk accepted by decision owner</option></select></div>
      <div class="acts">
        <button class="btn" type="button" onclick="closeModal('exception-modal')">Cancel</button>
        <button class="btn primary" type="button" onclick="closeModal('exception-modal');toast('Sent to decision owner')">Send</button>
      </div>
    </div></div>`,
  });

  return pages;
}
