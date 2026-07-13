#!/usr/bin/env python3
from __future__ import annotations

import os

from axion_infrastructure.config import AppSettings
from axion_infrastructure.model_gateway import ModelGateway, TaskComplexity
from dotenv import load_dotenv
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.tools import tool
from langchain_openai import AzureChatOpenAI


def main() -> int:
    load_dotenv()
    settings = AppSettings()
    gateway = ModelGateway(settings)
    api_key = os.getenv("AZURE_OPENAI_API_KEY")
    endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
    if not api_key or not endpoint:
        print("BLOCKED: AZURE_OPENAI_API_KEY and AZURE_OPENAI_ENDPOINT are required.")
        return 2

    tracing = bool(os.getenv("LANGSMITH_API_KEY")) and os.getenv(
        "LANGSMITH_TRACING", "true"
    ).lower() == "true"
    if tracing:
        os.environ.setdefault("LANGCHAIN_TRACING_V2", "true")
        os.environ.setdefault("LANGCHAIN_PROJECT", "axion-task-001-010-live")
    else:
        print("LangSmith tracing unavailable: LANGSMITH_API_KEY was not supplied.")

    @tool
    def route_task(complexity: str) -> str:
        """Return the configured model deployment for a task complexity."""
        return gateway.deployment_for(TaskComplexity(complexity))

    prompt = ChatPromptTemplate.from_messages([
        ("system", "Use route_task, then return only a concise JSON object with status and route."),
        ("human", "Confirm the configured route for a {complexity} task."),
        MessagesPlaceholder("agent_scratchpad"),
    ])
    for complexity in TaskComplexity:
        model = AzureChatOpenAI(
            azure_endpoint=endpoint,
            api_key=api_key,
            azure_deployment=gateway.deployment_for(complexity),
            api_version="2025-04-01-preview",
            max_tokens=2048,
        )
        agent = create_tool_calling_agent(model, [route_task], prompt)
        response = AgentExecutor(agent=agent, tools=[route_task], max_iterations=3).invoke(
            {"complexity": complexity.value}
        )
        if not response.get("output"):
            print(f"FAILED: LangChain returned no output for {complexity.value}")
            return 1
        print(f"agent_route={complexity.value}:{gateway.deployment_for(complexity)}")
    print("LangChain Azure Foundry live agent inference succeeded for all routes.")
    print(f"langsmith_tracing={'enabled' if tracing else 'disabled'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
