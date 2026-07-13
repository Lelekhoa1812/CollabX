#!/usr/bin/env python3
from __future__ import annotations

import json
import os
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from dotenv import load_dotenv


def main() -> int:
    load_dotenv()
    required = ["AZURE_OPENAI_ENDPOINT", "AZURE_OPENAI_LLM"]
    missing = [name for name in required if not os.getenv(name)]
    if missing:
        print(f"BLOCKED: missing real Azure Foundry OpenAI configuration: {', '.join(missing)}")
        print(
            "Set managed-identity capable environment or AZURE_OPENAI_API_KEY "
            "for a live provider run."
        )
        return 2
    api_key = os.getenv("AZURE_OPENAI_API_KEY")
    if not api_key:
        print("BLOCKED: AZURE_OPENAI_API_KEY is required for this local live check.")
        return 2
    endpoint = os.environ["AZURE_OPENAI_ENDPOINT"].rstrip("/")
    deployment = os.environ["AZURE_OPENAI_LLM"]
    url = (
        f"{endpoint}/openai/deployments/{deployment}/chat/completions"
        "?api-version=2025-04-01-preview"
    )
    body = {
        "messages": [
            {"role": "system", "content": "Return a concise JSON object only."},
            {
                "role": "user",
                "content": (
                    "For Axion Stakeholder CRM foundation testing, return "
                    '{"status":"ok","risk":"none"}.'
                ),
            },
        ],
        "max_completion_tokens": 80,
    }
    request = Request(
        url,
        data=json.dumps(body).encode("utf-8"),
        method="POST",
        headers={"Content-Type": "application/json", "api-key": api_key},
    )
    try:
        with urlopen(request, timeout=30) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except HTTPError as exc:
        print(f"FAILED: Azure Foundry returned HTTP {exc.code}")
        print(exc.read().decode("utf-8")[:500])
        return 1
    except URLError as exc:
        print(f"FAILED: Azure Foundry network error: {exc.reason}")
        return 1
    choice = payload.get("choices", [{}])[0].get("message", {}).get("content", "")
    if not choice:
        print("FAILED: Azure Foundry returned no message content")
        return 1
    print("Azure Foundry live inference succeeded.")
    print(f"deployment={deployment}")
    if os.getenv("LANGSMITH_API_KEY"):
        print("LangSmith tracing configuration detected.")
    else:
        print(
            "LangSmith tracing not configured; only OpenTelemetry local evidence "
            "can be captured."
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
