# Ground-up reset manifest

Status: historical · Baseline event: `design-v2-reset` · Owner: repository maintainers · Not current architecture

Reset executed: 11 August 2026.

## Removed

- All application code: API, web client, AI/document/export/integration workers.
- All Python/TypeScript packages, generated distributions, compiled output and tests.
- Database migrations, infrastructure-as-code, container definitions and CI workflow.
- Package manifests, dependency locks, developer scripts and local seed/configuration.
- Runtime secrets file, example environment, caches, virtual environment, package stores and build artefacts.
- Prior ADRs, architecture stubs, task evidence, 80-task implementation blueprint, runbooks, threat model, traceability schema and commercial drafts.
- Both untracked competitor-analysis Markdown files after their useful thesis and gaps were synthesised into the new corpus.
- Every pre-reset Markdown file; no legacy Markdown was retained verbatim.

## Replaced with

A documentation-only CollabX corpus defining the product promise, senior-BA operating model, experience, temporal knowledge architecture, bounded agent design, memory/context/RAG, contracts, observability, security, empirical evaluation, technology hypotheses, governance, roadmap and executable backlog.

## Recovery

Tracked history remains recoverable from Git. The exact pre-reset working tree, including untracked material and ignored dependencies/caches, was moved to `/tmp/collabx-reset.xyVsC0` as a short-lived safety archive. It is outside the project and may be removed by operating-system cleanup; it is not part of the new design or a durable backup.

## Verification contract

The repository should contain only Markdown design artefacts until R0 accepts implementation. Legacy code paths, dependency manifests, executables and secret/config files are prohibited. References to competitor research are allowed only as labelled research context; the system and all proposed components are named CollabX.
