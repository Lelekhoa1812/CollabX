#!/usr/bin/env python3
from axion_infrastructure.config import AppSettings


def main() -> int:
    settings = AppSettings()
    print(f"configuration ok for environment={settings.environment}")
    print(settings.safe_dump())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

