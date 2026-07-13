from collections import defaultdict, deque
from dataclasses import dataclass
from typing import Any


class RetryableProviderError(RuntimeError):
    """Provider failure that callers may retry."""


class NonRetryableProviderError(RuntimeError):
    """Provider failure that callers must not retry unchanged."""


@dataclass(frozen=True)
class FakePage:
    items: list[dict[str, Any]]
    continuation_token: str | None


class FakeServiceBus:
    def __init__(self) -> None:
        self._queues: dict[str, deque[dict[str, Any]]] = defaultdict(deque)
        self._seen: set[str] = set()

    def send(self, queue: str, message_id: str, body: dict[str, Any]) -> bool:
        if message_id in self._seen:
            return False
        self._seen.add(message_id)
        self._queues[queue].append({"message_id": message_id, "body": body})
        return True

    def receive(self, queue: str) -> dict[str, Any] | None:
        if not self._queues[queue]:
            return None
        return self._queues[queue].popleft()


class FakeSearch:
    def __init__(self) -> None:
        self._docs: list[dict[str, Any]] = []
        self.fail_next_retryable = False

    def index(self, doc: dict[str, Any]) -> None:
        self._docs.append(doc)

    def search(
        self, tenant_id: str, query: str, *, continuation_token: str | None = None
    ) -> FakePage:
        if self.fail_next_retryable:
            self.fail_next_retryable = False
            raise RetryableProviderError("throttled")
        start = int(continuation_token or "0")
        filtered = []
        for doc in self._docs:
            if doc.get("tenant_id") == tenant_id and query.lower() in str(doc).lower():
                filtered.append(doc)
        page = filtered[start : start + 2]
        next_token = str(start + 2) if start + 2 < len(filtered) else None
        return FakePage(page, next_token)


class FakeFoundry:
    def complete(self, *, prompt: str, schema_name: str) -> dict[str, Any]:
        if "forbidden" in prompt.lower():
            raise NonRetryableProviderError("content policy")
        return {
            "schema_name": schema_name,
            "status": "INSUFFICIENT" if "unknown" in prompt.lower() else "SUCCEEDED",
            "content": (
                "Insufficient information" if "unknown" in prompt.lower() else "Bounded proposal"
            ),
            "citations": [],
        }
