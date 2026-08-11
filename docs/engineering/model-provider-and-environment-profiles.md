# Model provider and environment profiles

Status: normative · Baseline: `design-v3` · Effective: 2026-08-11 · Owner: AI platform, security and evaluation councils

This document defines how CollabX validates against real models without confusing a developer configuration with the production architecture. Current local configuration exposes Azure OpenAI-compatible deployment variables. The AWS production candidate remains Bedrock behind the same `ModelGateway` port until the applicable ADR and regional qualification are accepted.

## Configuration boundary

Only environment-variable **names and presence** may appear in logs or evidence. Secret values, bearer headers, full endpoints containing credentials, prompts with restricted content and raw model responses are prohibited from CI artefacts. `.env` is local-only and ignored; `.env.example` contains non-secret placeholders/default deployment names.

| Variable | Purpose | Required for |
|---|---|---|
| `AZURE_OPENAI_API_KEY` | local/evaluation provider credential | real Azure model tests |
| `AZURE_OPENAI_ENDPOINT` | approved Azure resource endpoint | real Azure model tests |
| `AZURE_OPENAI_API_VERSION` | pinned API contract | real Azure model tests |
| `OPENAI_LLM` | high-capability deployment name | complex BA/evaluation tasks |
| `OPENAI_MLM` | medium deployment name | routing/latency/cost experiments |
| `OPENAI_SLM` | small deployment name | classification/extraction baseline |
| `OPENAI_TRANSCRIBE` | transcription deployment name | consented audio tests only |
| `AZURE_EMBEDDING` | embedding deployment name | retrieval/index experiments |

Deployment names are configuration, not claims that a public model identifier is available. Preflight must query or invoke the configured deployment safely and record provider, deployment alias, API version, Region/residency metadata supplied out-of-band, request ID, latency, token usage and result classification.

## Environment profiles

| Profile | Data | Real model | External effects | Evidence use |
|---|---|---:|---:|---|
| `unit` | synthetic fixtures | no | no | every change |
| `contract` | synthetic, non-sensitive | recorded/fake plus schema probes | no | PR/merge |
| `eval-real` | synthetic/public or approved restricted set | Azure configured deployments | model calls only | milestone intelligence gates |
| `integration` | synthetic tenant-separated | optional real provider | approved sandbox services | foundation integration |
| `staging` | production-shaped, policy-approved | release-candidate route | sandbox/read-only first | release qualification |
| `shadow` | consented sampled inputs | candidate and control | no candidate effects | semantic comparison |
| `canary` | approved cohort | approved route | action-class policy | production evidence |

Real-model tests are opt-in and budgeted. The test runner must fail closed when required variables are absent, unless the suite is explicitly running in fake-only mode. It must never silently substitute a different deployment.

## Mandatory real-model validation layers

1. **Preflight:** verify variable presence, TLS endpoint form, API-version pin, authentication, deployment reachability and embedding dimensionality; emit redacted diagnostics.
2. **Contract:** validate strict structured output, refusal/error parsing, timeout, cancellation, rate-limit handling, usage capture and bounded repair.
3. **Capability:** execute frozen benchmark cases with pinned prompt/policy/schema/retrieval manifests and repeated stochastic runs.
4. **Safety:** run injection, data-exfiltration, unsupported-claim, authority and tool-denial cases; no real external tool is enabled.
5. **Routing:** prove LLM/MLM/SLM eligibility, no unqualified semantic fallback, quotas, circuit breaker and cost accounting.
6. **Regression:** compare distributions and critical failures to the approved baseline; a changed deployment or API version invalidates stale evidence.
7. **Provider portability:** replay the provider-neutral conformance set against Azure now and Bedrock before AWS production acceptance; record semantic differences and approved constraints.

## Reproducibility manifest

Every real-model run stores a non-sensitive manifest: execution ID; git commit; environment profile; provider adapter/version; deployment alias and provider-returned model/version where available; API version; prompt/policy/schema/tool/domain-pack versions; dataset and case IDs; deterministic parameters/seed where supported; retrieval/context manifest IDs; timestamps; latency; input/output token counts; estimated cost; validation/guardrail results; redacted error category; grader versions; and result hashes.

Raw responses are retained only when dataset policy permits. Otherwise store structured scores, failure labels and hashes. Credentials are never part of the manifest.

## Success and stop criteria

A suite passes only when its preregistered sample size and thresholds are met, confidence intervals are reported for probabilistic metrics, zero-tolerance safety tests have no failures, cost/latency budgets hold, and all cases are attributable to the intended deployment. Authentication success alone is not model qualification.

Stop on missing/ambiguous deployment, unapproved data transfer, provider version drift, leaked secret/content, rate-limit behaviour that invalidates sample completeness, schema bypass, unexpected external action, or a critical safety/grounding failure. Preserve redacted evidence and require model-risk review before continuing.
