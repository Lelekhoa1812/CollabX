from axion_infrastructure.config import AppSettings


def main() -> None:
    AppSettings()
    raise SystemExit(
        "Integration worker entrypoint ready; configure connector mappings before jobs"
    )
