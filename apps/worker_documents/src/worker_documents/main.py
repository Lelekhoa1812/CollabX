from axion_infrastructure.config import AppSettings


def main() -> None:
    AppSettings()
    raise SystemExit(
        "Document worker entrypoint ready; configure Temporal queue before processing jobs"
    )
