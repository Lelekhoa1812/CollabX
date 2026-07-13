from enum import StrEnum
from typing import Any

from axion_infrastructure.config import AppSettings


class TaskComplexity(StrEnum):
    HARD = "hard"
    MEDIUM = "medium"
    EASY = "easy"


class ModelGateway:
    """Selects a Foundry deployment; it never commits domain state."""

    def __init__(self, settings: AppSettings):
        self.settings = settings

    def deployment_for(self, complexity: TaskComplexity) -> str:
        foundry = self.settings.foundry
        deployment = {
            TaskComplexity.HARD: foundry.llm_deployment,
            TaskComplexity.MEDIUM: foundry.mlm_deployment,
            TaskComplexity.EASY: foundry.slm_deployment,
        }[complexity]
        if not deployment:
            raise ValueError(f"No Foundry deployment configured for {complexity.value} tasks")
        return deployment

    def request_metadata(
        self, complexity: TaskComplexity, *, tenant_id: str, project_id: str
    ) -> dict[str, Any]:
        return {
            "tenant_id": tenant_id,
            "project_id": project_id,
            "complexity": complexity.value,
            "deployment": self.deployment_for(complexity),
        }
