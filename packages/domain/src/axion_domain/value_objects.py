from datetime import UTC, datetime
from typing import Annotated, NewType
from uuid import UUID

from pydantic import AfterValidator, BaseModel, ConfigDict, Field

TenantId = NewType("TenantId", UUID)
ProjectId = NewType("ProjectId", UUID)
ActorId = NewType("ActorId", UUID)


def ensure_utc(value: datetime) -> datetime:
    if value.tzinfo is None:
        raise ValueError("datetime must be timezone-aware")
    return value.astimezone(UTC)


UtcDateTime = Annotated[datetime, AfterValidator(ensure_utc)]


class CorrelationContext(BaseModel):
    model_config = ConfigDict(frozen=True)

    correlation_id: str = Field(min_length=8, max_length=128)
    causation_id: str | None = Field(default=None, max_length=128)
    traceparent: str | None = Field(default=None, max_length=256)


class EntityRef(BaseModel):
    model_config = ConfigDict(frozen=True)

    id: UUID
    version: int = Field(ge=1)
    etag: str = Field(min_length=3, max_length=128)

