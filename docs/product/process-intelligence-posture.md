# Process intelligence posture

Status: normative · Baseline: `design-v3` · Effective: 2026-08-12 · Owner: BA practice and architecture councils

Enterprise BA claims about as-is process must not rest on SME memory theatre alone when event evidence can be obtained. CollabX treats process mining and conformance checking as a **required grounding path**, not a deferral footnote.

## Required behaviour

1. Material assertions with modality “fact” about as-is process behaviour require one of:
   - cited event-log / observation evidence,
   - cited system/config/code evidence (archaeology),
   - or explicit `UNSUPPORTED` / assumption with owner and expiry.
2. When a pilot authorises systems of record that emit case/activity event logs, CollabX **must** offer a read-only process-mining connector class and conformance check against the process model projection.
3. BPMN/process diagrams remain **projections** of knowledge items; they are not executable truth unless separately verified.
4. Conformance deviations become typed conflicts (`policy-versus-practice`) or observed claims—never silently rewritten into the happy-path model.

## Connector and evidence

| Element | Requirement |
|---|---|
| Event-log slice | case id, activity, timestamp, resource (minimised), lifecycle transition |
| Scope | purpose-bound; PII minimisation; retention class |
| Mining outputs | directly-follows candidates, bottlenecks, rework loops as proposals |
| Conformance | fitness score, deviation list, affected cases sample |
| Authority | read-only by default; no process-engine write |

## Milestone binding

| Milestone | Expectation |
|---|---|
| M1 | Synthetic event-log packs in X12 / domain corpus; rubrics for process claims |
| M2 | Evidence classes and schemas for `event_log_slice` |
| M3 | Conformance/mining proposal tools behind CognitiveRuntime |
| M4 | UX to review deviations alongside dissent |
| M5 | Pilot-required process-mining connector when the pilot’s systems provide logs |

## Non-goals

- Replacing dedicated process-mining suites in v1.
- Auto-rewriting SOPs from mined paths without stewardship.
- Claiming statistical process control certification without assessor evidence.
