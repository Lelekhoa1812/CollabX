import pytest
from axion_infrastructure.config import AppSettings
from axion_infrastructure.model_gateway import ModelGateway, TaskComplexity


def test_model_gateway_routes_each_complexity() -> None:
    settings = AppSettings(
        foundry={
            "llm_deployment": "hard-deployment",
            "mlm_deployment": "medium-deployment",
            "slm_deployment": "easy-deployment",
        }
    )
    gateway = ModelGateway(settings)
    assert gateway.deployment_for(TaskComplexity.HARD) == "hard-deployment"
    assert gateway.deployment_for(TaskComplexity.MEDIUM) == "medium-deployment"
    assert gateway.deployment_for(TaskComplexity.EASY) == "easy-deployment"


def test_model_gateway_requires_route() -> None:
    with pytest.raises(ValueError, match="No Foundry deployment"):
        ModelGateway(AppSettings(_env_file=None)).deployment_for(TaskComplexity.HARD)
