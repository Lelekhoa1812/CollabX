# Container View

```mermaid
flowchart LR
  Browser["Browser SPA"] --> APIM["APIM"]
  APIM --> API["apps/api FastAPI"]
  API --> Domain["packages/domain"]
  API --> Application["packages/application"]
  API --> Infrastructure["packages/infrastructure"]
  API --> Contracts["packages/contracts"]
  API --> Observability["packages/observability"]
  API --> DB[("PostgreSQL")]
  API --> Outbox[("Outbox tables")]
  Outbox --> ServiceBus["Azure Service Bus"]
  API --> Temporal["Temporal"]
  Temporal --> WorkerAI["apps/worker_ai"]
  Temporal --> WorkerDocs["apps/worker_documents"]
  Temporal --> WorkerExports["apps/worker_exports"]
  Temporal --> WorkerIntegrations["apps/worker_integrations"]
```

The first deployable shape is a modular monolith for synchronous HTTP with independently deployable workers. Domain packages remain provider-free; infrastructure packages hold database, Azure, Temporal and identity adapters.

