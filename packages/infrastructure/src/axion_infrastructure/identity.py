from dataclasses import dataclass
from datetime import UTC, datetime, timedelta
from typing import Any, cast
from uuid import UUID

import jwt
from cryptography.fernet import Fernet, InvalidToken


@dataclass(frozen=True)
class ActorContext:
    actor_id: UUID
    issuer: str
    subject: str
    active_tenant_id: UUID
    memberships: tuple[str, ...]
    auth_time: datetime
    methods: tuple[str, ...]
    locale: str = "en-AU"
    timezone: str = "Australia/Melbourne"
    step_up: bool = False
    impersonation_grant: str | None = None


class TokenValidator:
    def __init__(self, *, issuer: str, audience: str, leeway_seconds: int = 60):
        self.issuer = issuer
        self.audience = audience
        self.leeway_seconds = leeway_seconds

    def validate_unverified_for_local_dev(self, token: str) -> dict[str, Any]:
        claims = jwt.decode(token, options={"verify_signature": False, "verify_exp": False})
        if claims.get("iss") != self.issuer:
            raise ValueError("invalid issuer")
        aud = claims.get("aud")
        if aud != self.audience and self.audience not in (aud if isinstance(aud, list) else []):
            raise ValueError("invalid audience")
        exp = datetime.fromtimestamp(int(claims.get("exp", 0)), tz=UTC)
        if exp + timedelta(seconds=self.leeway_seconds) < datetime.now(UTC):
            raise ValueError("expired token")
        if not claims.get("sub"):
            raise ValueError("missing subject")
        return cast(dict[str, Any], claims)


class SessionCodec:
    def __init__(self, key: bytes):
        self._fernet = Fernet(key)

    @staticmethod
    def generate_key() -> bytes:
        return Fernet.generate_key()

    def encode(self, payload: bytes) -> str:
        return self._fernet.encrypt(payload).decode("ascii")

    def decode(self, token: str) -> bytes:
        try:
            return self._fernet.decrypt(token.encode("ascii"), ttl=60 * 60 * 8)
        except InvalidToken as exc:
            raise ValueError("invalid session") from exc
