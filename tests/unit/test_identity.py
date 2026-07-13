from datetime import UTC, datetime, timedelta

import jwt
import pytest
from axion_infrastructure.identity import SessionCodec, TokenValidator


def test_local_token_validation_checks_issuer_audience_and_expiry() -> None:
    token = jwt.encode(
        {
            "iss": "issuer",
            "aud": "audience",
            "sub": "subject",
            "exp": datetime.now(UTC) + timedelta(minutes=5),
        },
        key="dev",
        algorithm="HS256",
    )
    validator = TokenValidator(issuer="issuer", audience="audience")
    claims = validator.validate_unverified_for_local_dev(token)
    assert claims["sub"] == "subject"
    with pytest.raises(ValueError):
        TokenValidator(issuer="wrong", audience="audience").validate_unverified_for_local_dev(token)


def test_session_codec_round_trip_and_rejects_bad_token() -> None:
    codec = SessionCodec(SessionCodec.generate_key())
    encoded = codec.encode(b"session")
    assert codec.decode(encoded) == b"session"
    with pytest.raises(ValueError):
        codec.decode("not-a-session")
