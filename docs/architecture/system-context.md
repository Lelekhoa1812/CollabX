# System Context

Stakeholder CRM is Axion's AI-assisted consulting operating system for evidence-led discovery, analysis, requirements, delivery handover and controlled change.

```mermaid
flowchart TB
  Consultants["Axion consultants and delivery leads"] --> FrontDoor["Azure Front Door Premium + WAF"]
  Clients["Client users and external contributors"] --> FrontDoor
  Developers["Implementation teams"] --> FrontDoor
  FrontDoor --> APIM["Azure API Management"]
  APIM --> Web["React enterprise workbench"]
  APIM --> API["FastAPI modular monolith"]
  API --> Postgres["PostgreSQL 17 source of truth"]
  API --> Temporal["Temporal durable workflows"]
  Temporal --> Workers["AI, document, export and integration workers"]
  Workers --> Foundry["Microsoft Foundry OpenAI /openai/v1"]
  Workers --> Search["Azure AI Search"]
  Workers --> Blob["Azure Blob Storage"]
  API --> Bus["Transactional outbox -> Azure Service Bus -> inbox"]
  API --> OTel["OpenTelemetry, audit and evaluation"]
  Workers --> OTel
```

Human approval is mandatory for privileged domain transitions including baseline approval, artefact publication, change acceptance and equivalent commercial/security decisions. AI components return bounded proposals and never own authoritative project state.

