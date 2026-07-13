from axion_infrastructure.config import AppSettings


def main() -> None:
    settings = AppSettings()
    if not settings.foundry.endpoint:
        raise SystemExit("AI worker requires AXION_FOUNDRY__ENDPOINT before processing jobs")
    print("AI worker configuration validated")

