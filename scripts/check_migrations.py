#!/usr/bin/env python3
from pathlib import Path

FORBIDDEN = ["drop column", "drop table", "alter column", "access exclusive"]


def main() -> int:
    errors: list[str] = []
    for path in Path("migrations/versions").glob("*.py"):
        text = path.read_text(encoding="utf-8").lower()
        if "def downgrade" not in text:
            errors.append(f"{path}: missing downgrade")
        for token in FORBIDDEN:
            if token in text and "0001_foundation" not in path.name:
                errors.append(f"{path}: destructive DDL token {token!r}")
    for error in errors:
        print(error)
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())

