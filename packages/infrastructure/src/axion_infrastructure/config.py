import os
from enum import StrEnum
from typing import Annotated, Any

from pydantic import (
    AnyHttpUrl,
    BaseModel,
    ConfigDict,
    Field,
    SecretStr,
    field_serializer,
    model_validator,
)
from pydantic_settings import BaseSettings, SettingsConfigDict


class Environment(StrEnum):
    LOCAL = "local"
    DEV = "dev"
    TEST = "test"
    STAGING = "staging"
    PROD = "prod"


class SecretRef(BaseModel):
    model_config = ConfigDict(frozen=True)

    name: str = Field(min_length=1)
    version: str | None = None
    value: SecretStr | None = None

    @field_serializer("value")
    def _hide_value(self, value: SecretStr | None) -> str | None:
        return "***REDACTED***" if self.value else None

    def __repr__(self) -> str:
        return f"SecretRef(name={self.name!r}, version={'set' if self.version else 'latest'})"


class DatabaseSettings(BaseModel):
    dsn: str = "postgresql+asyncpg://axion:axion@localhost:55432/axion"
    pool_size: int = Field(default=10, ge=1, le=100)
    statement_timeout_ms: int = Field(default=5000, ge=100)


class FoundrySettings(BaseModel):
    endpoint: AnyHttpUrl | None = None
    deployment: str | None = None
    api_version: str = "2025-04-01-preview"
    use_managed_identity: bool = True
    api_key: SecretRef | None = None
    llm_deployment: str | None = None
    mlm_deployment: str | None = None
    slm_deployment: str | None = None


class OTelSettings(BaseModel):
    service_name: str = "axion-api"
    exporter_otlp_endpoint: AnyHttpUrl | None = None
    sample_ratio: float = Field(default=1.0, ge=0.0, le=1.0)


class IdentitySettings(BaseModel):
    entra_tenant_id: str | None = None
    entra_client_id: str | None = None
    external_tenant_id: str | None = None
    session_secret: SecretRef = Field(
        default_factory=lambda: SecretRef(name="AXION_SESSION_SECRET")
    )


class FeatureFlagSettings(BaseModel):
    kill_switch: bool = False
    enabled: dict[str, bool] = Field(default_factory=dict)


class AppSettings(BaseSettings):
    model_config = SettingsConfigDict(
        env_prefix="AXION_",
        env_nested_delimiter="__",
        extra="forbid",
        env_file=".env",
    )

    environment: Environment = Environment.LOCAL
    debug: bool = False
    cors_origins: list[str] = Field(default_factory=lambda: ["http://localhost:5173"])
    database: DatabaseSettings = Field(default_factory=DatabaseSettings)
    foundry: FoundrySettings = Field(default_factory=FoundrySettings)
    otel: OTelSettings = Field(default_factory=OTelSettings)
    identity: IdentitySettings = Field(default_factory=IdentitySettings)
    feature_flags: FeatureFlagSettings = Field(default_factory=FeatureFlagSettings)
    azure_openai_api_key: SecretStr | None = Field(
        default=None, validation_alias="AZURE_OPENAI_API_KEY"
    )
    azure_openai_endpoint: AnyHttpUrl | None = Field(
        default=None, validation_alias="AZURE_OPENAI_ENDPOINT"
    )
    azure_openai_llm: str | None = Field(default=None, validation_alias="AZURE_OPENAI_LLM")
    azure_openai_mlm: str | None = Field(default=None, validation_alias="AZURE_OPENAI_MLM")
    azure_openai_slm: str | None = Field(default=None, validation_alias="AZURE_OPENAI_SLM")
    langsmith_tracing: bool = Field(default=False, validation_alias="LANGSMITH_TRACING")
    langsmith_project: str = Field(default="axion", validation_alias="LANGSMITH_PROJECT")
    langsmith_api_key: SecretStr | None = Field(
        default=None, validation_alias="LANGSMITH_API_KEY"
    )

    @model_validator(mode="after")
    def production_is_safe(self) -> "AppSettings":
        if self.environment == Environment.PROD:
            if self.debug:
                raise ValueError("production refuses debug mode")
            if "*" in self.cors_origins:
                raise ValueError("production refuses wildcard CORS")
            if not self.foundry.endpoint:
                raise ValueError("production requires Foundry endpoint")
            if not self.identity.entra_tenant_id or not self.identity.entra_client_id:
                raise ValueError("production requires Entra tenant and client IDs")
        return self

    @model_validator(mode="before")
    @classmethod
    def accept_azure_openai_environment(cls, values: Any) -> Any:
        """Map the provider's standard names into Axion's typed settings boundary."""
        if not isinstance(values, dict):
            return values
        foundry = dict(values.get("foundry") or {})
        mappings = {
            "AZURE_OPENAI_ENDPOINT": "endpoint",
            "AZURE_OPENAI_LLM": "llm_deployment",
            "AZURE_OPENAI_MLM": "mlm_deployment",
            "AZURE_OPENAI_SLM": "slm_deployment",
        }
        for environment_name, field_name in mappings.items():
            source_value = values.get(environment_name) or os.getenv(environment_name)
            if field_name not in foundry and source_value:
                foundry[field_name] = source_value
        api_key = values.get("AZURE_OPENAI_API_KEY") or os.getenv("AZURE_OPENAI_API_KEY")
        if api_key and "api_key" not in foundry:
            foundry["api_key"] = {"name": "AZURE_OPENAI_API_KEY", "value": api_key}
        if foundry:
            values["foundry"] = foundry
        return values

    def safe_dump(self) -> dict[str, Any]:
        return self.model_dump(
            mode="json",
            exclude={
                "database": {"dsn"},
                "azure_openai_api_key": True,
                "langsmith_api_key": True,
            },
        )


FlagScope = Annotated[str, Field(min_length=1, max_length=128)]


class FeatureFlagPort:
    def __init__(self, settings: FeatureFlagSettings):
        self._settings = settings

    def evaluate(
        self, flag: FlagScope, *, tenant_id: str, project_id: str | None = None
    ) -> tuple[bool, str]:
        if self._settings.kill_switch:
            return False, "global_kill_switch"
        if flag not in self._settings.enabled:
            return False, "default_off"
        enabled = self._settings.enabled[flag]
        scope = f"tenant={tenant_id}" + (f";project={project_id}" if project_id else "")
        return enabled, f"configured:{scope}"
