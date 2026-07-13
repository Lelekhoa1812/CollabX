from axion_api.main import create_app
from fastapi.testclient import TestClient


def test_health_live() -> None:
    client = TestClient(create_app())
    assert client.get("/health/live").json() == {"status": "ok"}

