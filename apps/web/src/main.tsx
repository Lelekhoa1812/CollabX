import React from "react";
import ReactDOM from "react-dom/client";
import { Activity, CheckCircle2, Database, GitBranch, ShieldCheck } from "lucide-react";
import "./styles.css";

const tasks = [
  "TASK-001 Traceability and ADR baseline",
  "TASK-002 Buildable monorepo shell",
  "TASK-003 Typed configuration and feature flags",
  "TASK-004 Canonical contracts and states",
  "TASK-005 Local infrastructure harness",
  "TASK-006 CI/CD evidence skeleton",
  "TASK-007 Azure landing zone IaC",
  "TASK-008 Observability and redaction",
  "TASK-009 PostgreSQL/RLS foundation",
  "TASK-010 Identity and session foundation"
];

export function App() {
  return (
    <main className="app-shell">
      <section className="toolbar" aria-label="Workspace status">
        <div>
          <p className="eyebrow">Axion Stakeholder CRM</p>
          <h1>Foundation Workbench</h1>
        </div>
        <div className="status-pill">
          <CheckCircle2 size={18} aria-hidden />
          <span>Foundations loaded</span>
        </div>
      </section>

      <section className="status-grid" aria-label="Foundation services">
        <article>
          <Activity aria-hidden />
          <h2>API</h2>
          <p>FastAPI health and contracts on port 8000.</p>
        </article>
        <article>
          <Database aria-hidden />
          <h2>Data</h2>
          <p>PostgreSQL 17 schemas, RLS conventions and migrations.</p>
        </article>
        <article>
          <ShieldCheck aria-hidden />
          <h2>Security</h2>
          <p>Entra/BFF session model, redaction and managed identity posture.</p>
        </article>
        <article>
          <GitBranch aria-hidden />
          <h2>Governance</h2>
          <p>ADR, traceability, CI evidence and release controls.</p>
        </article>
      </section>

      <section className="task-list" aria-label="Implemented task checklist">
        <h2>Foundation Scope</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task}>
              <CheckCircle2 size={16} aria-hidden />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const root = typeof document === "undefined" ? null : document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
