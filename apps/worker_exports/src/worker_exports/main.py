from axion_infrastructure.config import AppSettings


def main() -> None:
    AppSettings()
    raise SystemExit(
        "Export worker entrypoint ready; configure render sandbox before processing jobs"
    )
