from axion_domain.states import APPENDIX_A_STATE_ENUMS


def test_appendix_a_vocabularies_are_unique() -> None:
    values = [state.value for enum in APPENDIX_A_STATE_ENUMS for state in enum]
    assert "DISCOVERY_PLANNED" in values
    assert "INSUFFICIENT" in values
    namespaced = {
        (enum.__name__, state.value) for enum in APPENDIX_A_STATE_ENUMS for state in enum
    }
    assert len(values) == len(namespaced)
