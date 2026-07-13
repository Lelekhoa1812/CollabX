#!/usr/bin/env python3
import json
from pathlib import Path

from axion_api.main import create_app


def main() -> int:
    path = Path("packages/contracts/openapi.json")
    path.write_text(json.dumps(create_app().openapi(), indent=2) + "\n", encoding="utf-8")
    print(f"wrote {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
