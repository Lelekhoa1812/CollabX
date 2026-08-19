# BA and coding intelligence gap review

Status: research control · Baseline: `design-v4` · Effective: 2026-08-19 · Owner: product, AI and research councils · Supersedes: none (companion to [enterprise-gap-assessment.md](enterprise-gap-assessment.md))

## Purpose

This note records the 2026-08 gap review of CollabX against (1) a fully intelligent Business Analyst bar and (2) a fully intelligent multi-agent coding/review solution for brownfield enterprise systems (ERP/CRM/SAP and customizations). Findings drive Capability 18, experiments X11–X12, and milestone contracts. Conclusions remain hypotheses until evaluation gates pass.

## Verdict

design-v3 specifies a governed BA operating system and an L0–L5 coding collaborator, but is frontend/git-biased. It does not yet cover BA-on-existing ERP/CRM/SAP codebases or a first-class AC-gated multi-agent code-review layer. Proof of BA competence is zero; X01–X10 are preregistered only.

| Layer | Status |
|---|---|
| Epistemic BA spine | Spec-strong; proof zero |
| Experience gen L0–L5 + exact-base patch | Spec-strong; frontend-slice biased |
| Multi-agent coding / PR review vs requirements | Under-specified |
| Brownfield archaeology (ERP/CRM/SAP) | Missing (SAP/ERP never mentioned; CRM = portfolio connector) |
| Code↔requirement↔test knowledge graph | Partial trace vocabulary; not a versioned code graph with reindex |
| Method engines (WSJF, CATWOE, MCDA, mining) | Spec-deepened 2026-08-19: Decision Methods port, assumption mapping, even-swaps assist, optional bounded AHP/BWM; proof still zero |

## Product context

Businesses already run ERP/CRM/SAP (and customizations). CollabX must BA on top of that reality: discover as-is from code/config/process evidence, shape change options (configure vs customize vs integrate vs process), then propose and review governed patches—not only greenfield frontend prototypes.

## BA intelligence scorecard (docs depth)

Scale 0–5: Spec / Epistemic / Eval / Impl.

| # | Domain | Spec | Epist | Eval | Impl | Key missing method engines |
|---|---|---:|---:|---:|---:|---|
| 1 | Portfolio & engagement | 2.5 | 3 | 1.5 | 1.5 | BA approach selection; benefits map |
| 2 | Stakeholder intelligence | 3.5 | 4 | 2.5 | 2 | Dynamic power/interest |
| 3 | Discovery & elicitation | 4.5 | 4.5 | 3.5 | 2.5 | Ethnography; workshop controllers |
| 4 | Domain learning | 4 | 4.5 | 3 | 2 | DMN executable validation; pack ROI |
| 5 | Strategy & problem | 2.5 | 3 | 1.5 | 1 | CATWOE/SSM; force-field |
| 6 | Requirements & design | 3.5 | 4 | 2.5 | 2 | Event storming; IEEE 29148 schema |
| 7 | Optioning & decisions | 4 | 3.5 | 1.5 | 1 | X13/X14 not yet run; TCO fields only |
| 8 | Interactive design | 4.5 | 4.5 | 3.5 | 2.5 | SUS/SEQ protocols |
| 9 | Prioritisation & release | 3.5 | 3 | 1.5 | 1 | WSJF/MoSCoW field-complete; bind to T9.06 |
| 10 | Review & baselining | 4 | 4.5 | 1.5 | 2 | SoD catalogue; waiver taxonomy |
| 11 | Delivery bridge | 3 | 3.5 | 2 | 1.5 | Drift detectors; sync conflict rules |
| 12 | Solution evaluation | 2.5 | 3.5 | 2.5 | 1 | Benefits realisation protocol |
| 13 | Artefact studio | 2.5 | 3 | 2.5 | 1.5 | Template DSL; export fidelity |
| 14 | Agent admin | 3 | 3.5 | 3 | 2 | Autonomy DSL; canary criteria |
| 15 | Enterprise admin | 2.5 | 2 | 1 | 1 | BA-domain connector semantics |
| 16 | Service lifecycle | 3 | 2.5 | 2 | 1.5 | Training curriculum |
| 17 | Experience + code gen | 5 | 4.5 | 4 | 2.5 | Ablation thresholds; polyglot L5 |
| 18 | Code archaeology & review | 0 | 0 | 0 | 0 | **New** — see Capability 18 |

## External BA bar (2026)

- IIBA/BABOK six knowledge areas plus underlying competencies; interpersonal/political judgment remains human-primary ([IIBA BA4AI](https://www.iiba.org/business-analysis-blogs/ba-for-ai-agentic-ai-and-the-future-of-business-analysis/)).
- ReqElicitGym (2026): best models elicit under ~half of implicit requirements; interview competence ceiling is harsh.
- Process intelligence: enterprise AI without process-mining grounding fails ([van der Aalst — No AI Without PI](https://arxiv.org/html/2508.00116v1)).
- LLMs are strong on structural requirement quality; weak on semantic/contextual correctness.

## Coding-agent competitive synthesis

| Platform | Index / context | Multi-agent | Review agent | BA↔code |
|---|---|---|---|---|
| Cursor | Dual semantic + Instant Grep; Merkle sync; team index reuse | Explore/Bash/Browser + custom agents | Bugbot: PR review, incremental, Autofix, CI | Diff quality ≠ AC coverage |
| Codex | AGENTS.md hierarchy; threads; MCP | Subagents + Agents SDK | GitHub Codex review + rules | Issue→PR only |
| Claude Code | CLAUDE.md + memory; compaction; optional LSP | Explore/Plan; Agent Teams; Workflows | ReportFindings; custom review agents | Strong plan; no AC graph |
| Copilot Cloud | Opaque + Memory preview | Custom agents + skills | Copilot review | GitHub-only |
| Aider | AST repo map + PageRank | Architect mode | — | Local git |
| SWE-agent / Devin | ACI / Devbox long loops | Planner→executor | PR-centric | Docker test ground truth |

Sources: [Cursor indexing](https://cursor.com/blog/secure-codebase-indexing), [Bugbot](https://cursor.com/docs/bugbot), [Codex AGENTS.md](https://developers.openai.com/codex/guides/agents-md), [Claude Code](https://code.claude.com/docs/en/how-claude-code-works), [Aider repo map](https://aider.chat/docs/repomap.html).

### Full coding checklist CollabX must cover

A. Versioned CodeKnowledgeGraph (AST/LSP + req/test/deploy/ERP nodes)  
B. Hybrid retrieval (semantic + lexical + structural) with ACL pre-filter  
C. Tool catalog (inspect/patch/shell/VCS/LSP/review/MCP) with receipts  
D. Context persistence + Merkle reindex + dirty-buffer fusion  
E. Multi-agent topology: Orchestrator, Planner, Explorer, Archaeologist, Implementer, **Reviewer (AC-gated)**, Security, Tester  
F. PR/diff review vs acceptance criteria (mapped/missing ACs)  
G. Test generation & impact-set regression  
H. Exact-base patch + rollback  
I. Repo hygiene (dirty preserve, CODEOWNERS)  
J. Enterprise connectors (SCM + Jira/ADO + ERP/CRM/SAP read)  
K. Eval harnesses (SWE-bench-style + BA AC coverage + ERP golden tasks)

### CollabX differentiation

Market agents review *code quality*. CollabX must review **decision readiness**: does this diff satisfy traced ACs, preserve dissent/assumptions, and stay inside the authorised change class for regulated ERP change?

## Gap disposition GAP-27

| ID | Severity | Gap | Enterprise consequence | Disposition |
|---|---|---|---|---|
| GAP-27 | critical | No brownfield archaeology, CodeKnowledgeGraph/reindex, AC-gated review agent, or ERP/CRM/SAP process/config evidence path | CollabX cannot BA existing enterprise systems or govern code change against requirements | Capability 18; [coding-intelligence-and-review-agent.md](../intelligence/coding-intelligence-and-review-agent.md); X11/X12; milestone M1–M5 tasks |

## Residual hypotheses (evidence decisions)

Senior-BA benchmark superiority; domain-pack TCO; multi-agent implementer value (Reviewer is always-on read-only); classed challenge vs critic-only after cost (X13); MCDA lite vs bounded AHP/BWM (X14); NLI precision on CollabX claim language; whether assumption-mapping importance becomes dashboard theatre if model-scored; cross-domain transfer; Azure≠Bedrock qualification; ERP adapter TCO per pilot stack; AC-gated review precision/recall in field; process-mining connector yield vs steward burden; commercial WTP for governed coding+BA.

## Related normative and delivery updates

- Capability map §18; agents/memory; data model CodeKnowledgeGraph; integrations; API catalogue
- [ba-method-engines-and-sufficiency.md](../product/ba-method-engines-and-sufficiency.md); [augmentation-boundary.md](../product/augmentation-boundary.md)
- Experiments X11, X12, specified X13/X14; [decision-intelligence-and-deliberation.md](decision-intelligence-and-deliberation.md); risk register additions; milestones M1–M5; roadmap/backlog/build-sequence crosswalk
