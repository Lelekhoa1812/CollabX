from typing import Any

from pydantic import BaseModel, ConfigDict, Field


class ProblemDetails(BaseModel):
    model_config = ConfigDict(extra="forbid")

    type: str = "about:blank"
    title: str
    status: int = Field(ge=400, le=599)
    detail: str
    code: str = Field(pattern=r"^[a-z0-9_.-]+$")
    instance: str | None = None
    correlation_id: str | None = None
    errors: list[dict[str, Any]] = Field(default_factory=list)


class CursorPage[T](BaseModel):
    model_config = ConfigDict(extra="forbid")

    items: list[T]
    next_cursor: str | None = None
    has_more: bool = False
