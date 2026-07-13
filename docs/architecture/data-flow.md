# Data Flow

```mermaid
sequenceDiagram
  participant U as User
  participant API as FastAPI
  participant DB as PostgreSQL
  participant T as Temporal
  participant W as Worker
  participant AI as Foundry OpenAI
  participant S as Azure AI Search
  U->>API: Command with tenant/project/actor context
  API->>API: Validate contract, policy and idempotency
  API->>DB: Commit domain change and audit/outbox transaction
  API->>T: Start or signal deterministic workflow
  T->>W: Activity execution
  W->>AI: Bounded model request via Model Gateway
  W->>S: Rebuildable retrieval projection
  W->>DB: Store proposals/evidence references only through app ports
  API-->>U: Correlated response or progress reference
```

Authoritative data lives in PostgreSQL and immutable blob versions. Search indexes, Redis caches, provider threads, LangGraph checkpoints and generated summaries are rebuildable projections.

