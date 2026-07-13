# Domain Dependencies

```mermaid
flowchart TB
  Identity["identity_access"] --> Project["project"]
  Project --> Stakeholder["stakeholder"]
  Project --> Discovery["discovery"]
  Stakeholder --> Discovery
  Source["source"] --> Evidence["evidence"]
  Evidence --> Knowledge["knowledge"]
  Knowledge --> Requirements["requirements"]
  Knowledge --> Analysis["analysis"]
  Requirements --> Governance["governance"]
  Analysis --> Governance
  Governance --> Artefact["artefact"]
  Artefact --> Delivery["delivery"]
  Platform["platform"] --> Identity
  Integration["integration"] --> Source
  Operations["operations"] --> Platform
```

Dependency direction follows evidence accumulation and governance. Lower-level shared modules may expose ports and value objects, but domain modules do not import HTTP, SQL, Azure SDKs, mutable globals or provider-specific code.

