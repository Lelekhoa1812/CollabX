from datetime import datetime
from typing import Any
from uuid import UUID

from axion_domain.states import Classification
from axion_domain.value_objects import UtcDateTime
from pydantic import BaseModel, ConfigDict, Field


class DomainEventEnvelope(BaseModel):
    model_config = ConfigDict(extra="forbid")

    event_id: UUID
    schema_name: str = Field(min_length=3)
    schema_version: int = Field(ge=1)
    occurred_at: UtcDateTime
    tenant_id: UUID
    project_id: UUID | None = None
    classification: Classification
    correlation_id: str
    causation_id: str | None = None
    payload: dict[str, Any]


class CommandMetadata(BaseModel):
    model_config = ConfigDict(extra="forbid")

    idempotency_key: str = Field(min_length=8, max_length=128)
    correlation_id: str = Field(min_length=8, max_length=128)
    requested_at: datetime

