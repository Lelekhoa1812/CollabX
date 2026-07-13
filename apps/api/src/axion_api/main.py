from axion_contracts.problems import ProblemDetails
from axion_infrastructure.config import AppSettings
from axion_observability.redaction import redact
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse


def create_app(settings: AppSettings | None = None) -> FastAPI:
    settings = settings or AppSettings()
    app = FastAPI(
        title="Axion Stakeholder CRM API",
        version="0.1.0",
        openapi_version="3.1.0",
        docs_url="/docs" if settings.environment.value != "prod" else None,
    )
    app.state.settings = settings

    @app.exception_handler(ValueError)
    async def value_error_handler(request: Request, exc: ValueError) -> JSONResponse:
        problem = ProblemDetails(
            title="Invalid request",
            status=400,
            detail="The request could not be processed.",
            code="request.invalid",
            instance=str(request.url.path),
            correlation_id=request.headers.get("x-correlation-id"),
            errors=[{"message": redact(str(exc))}],
        )
        return JSONResponse(
            problem.model_dump(mode="json"),
            status_code=400,
            media_type="application/problem+json",
        )

    @app.get("/health/live", tags=["health"])
    async def live() -> dict[str, str]:
        return {"status": "ok"}

    @app.get("/health/startup", tags=["health"])
    async def startup() -> dict[str, str]:
        return {"status": "ok", "service": "axion-api"}

    @app.get("/health/ready", tags=["health"])
    async def ready() -> dict[str, str]:
        return {"status": "degraded" if settings.environment.value == "local" else "ok"}

    @app.get("/v1/build", tags=["platform"])
    async def build() -> dict[str, str]:
        return {"service": "axion-api", "version": app.version}

    return app


app = create_app()


def main() -> None:
    import uvicorn

    uvicorn.run("axion_api.main:app", host="0.0.0.0", port=8000, reload=False)


if __name__ == "__main__":
    main()
