#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Any

import yaml

KNOWN_TASKS = {f"TASK-{i:03d}" for i in range(1, 81)}
REQUIRED_IDS = {f"FR-{i:03d}" for i in range(10, 170, 10)}
REQUIRED_IDS |= {f"NFR-{i:03d}" for i in range(1, 19)}
REQUIRED_IDS |= {f"AC-{i:02d}" for i in range(1, 15)}
REQUIRED_IDS |= {f"G{i}" for i in range(0, 8)}


def load_records(path: Path) -> list[dict[str, Any]]:
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict) or not isinstance(data.get("requirements"), list):
        raise ValueError("traceability file must contain a requirements list")
    return data["requirements"]


def validate(path: Path) -> list[str]:
    errors: list[str] = []
    records = load_records(path)
    seen: dict[str, int] = {}
    aliases: dict[str, str] = {}
    for index, record in enumerate(records):
        req_id = str(record.get("id", ""))
        if not re.match(r"^(FR-\d{3}|NFR-\d{3}|AC-\d{2}|G[0-7])$", req_id):
            errors.append(f"record {index}: invalid id {req_id!r}")
            continue
        seen[req_id] = seen.get(req_id, 0) + 1
        for task in record.get("planned_task_ids", []):
            if task not in KNOWN_TASKS:
                errors.append(f"{req_id}: unknown task reference {task}")
        if not record.get("owning_module"):
            errors.append(f"{req_id}: missing owning_module")
        if not record.get("test_evidence_owner"):
            errors.append(f"{req_id}: missing test_evidence_owner")
        for alias in record.get("aliases", []):
            aliases[str(alias)] = req_id

    missing = REQUIRED_IDS - set(seen)
    for req_id in sorted(missing):
        errors.append(f"missing primary record {req_id}")
    for req_id, count in sorted(seen.items()):
        if count != 1:
            errors.append(f"duplicate primary record {req_id}")
    for alias, target in aliases.items():
        visited = {target}
        current = aliases.get(target)
        while current:
            if current in visited:
                errors.append(f"cyclic alias involving {alias}")
                break
            visited.add(current)
            current = aliases.get(current)
    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("path", nargs="?", default="docs/traceability/specification-matrix.yaml")
    args = parser.parse_args()
    errors = validate(Path(args.path))
    for error in errors:
        print(error, file=sys.stderr)
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())

