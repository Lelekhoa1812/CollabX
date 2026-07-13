from pathlib import Path

from scripts.validate_traceability import validate


def test_traceability_matrix_passes() -> None:
    assert validate(Path("docs/traceability/specification-matrix.yaml")) == []

