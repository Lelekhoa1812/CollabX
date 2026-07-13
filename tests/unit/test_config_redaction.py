import pytest
from axion_infrastructure.config import (
    AppSettings,
    Environment,
    FeatureFlagPort,
    FeatureFlagSettings,
)
from axion_observability.redaction import redact


def test_production_rejects_unsafe_debug() -> None:
    with pytest.raises(ValueError):
        AppSettings(environment=Environment.PROD, debug=True, foundry={"endpoint": "https://example.openai.azure.com"})


def test_redaction_hides_secrets_and_personal_data() -> None:
    payload = {"token": "abc", "note": "Contact jane@example.com\nnow"}
    assert redact(payload) == {"token": "***REDACTED***", "note": "Contact ***EMAIL*** now"}


def test_feature_flags_default_off_and_kill_switch() -> None:
    flags = FeatureFlagPort(FeatureFlagSettings(enabled={"x": True}))
    assert flags.evaluate("missing", tenant_id="t")[0] is False
    assert flags.evaluate("x", tenant_id="t", project_id="p")[0] is True
    killed = FeatureFlagPort(FeatureFlagSettings(kill_switch=True, enabled={"x": True}))
    assert killed.evaluate("x", tenant_id="t")[1] == "global_kill_switch"

