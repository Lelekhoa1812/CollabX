from collections.abc import Mapping, Sequence
from dataclasses import asdict, is_dataclass
from re import compile as re_compile
from typing import Any

from pydantic import BaseModel

SECRET_KEYS = {
    "authorization",
    "api_key",
    "password",
    "secret",
    "token",
    "refresh_token",
    "access_token",
    "prompt",
    "completion",
    "audio",
    "transcript",
}
EMAIL_RE = re_compile(r"(?i)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}")
CONTROL_RE = re_compile(r"[\r\n\t\x00-\x1f\x7f]+")


def redact(value: Any, *, _depth: int = 0) -> Any:
    if _depth > 12:
        return "***REDACTED_DEPTH***"
    if isinstance(value, BaseModel):
        return redact(value.model_dump(mode="python"), _depth=_depth + 1)
    if is_dataclass(value) and not isinstance(value, type):
        return redact(asdict(value), _depth=_depth + 1)
    if isinstance(value, Mapping):
        return {
            str(k): (
                "***REDACTED***"
                if str(k).lower() in SECRET_KEYS
                else redact(v, _depth=_depth + 1)
            )
            for k, v in value.items()
        }
    if isinstance(value, str):
        cleaned = CONTROL_RE.sub(" ", value)
        return EMAIL_RE.sub("***EMAIL***", cleaned)
    if isinstance(value, Sequence) and not isinstance(value, (bytes, bytearray)):
        return [redact(item, _depth=_depth + 1) for item in value]
    if isinstance(value, BaseException):
        return {"type": type(value).__name__, "message": redact(str(value), _depth=_depth + 1)}
    return value
