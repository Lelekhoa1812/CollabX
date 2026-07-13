#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

SEED = {
    "version": 1,
    "tenants": [
        {"slug": "axion-alpha", "name": "Axion Pilot", "canary": "tenant-alpha-only"},
        {"slug": "axion-beta", "name": "Axion Pilot", "canary": "tenant-beta-only"},
    ],
}


def main() -> int:
    path = Path(".local/seed.json")
    path.parent.mkdir(exist_ok=True)
    path.write_text(json.dumps(SEED, indent=2) + "\n", encoding="utf-8")
    print(f"seeded {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

