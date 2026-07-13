FROM python:3.13-slim@sha256:7a2a84fd7c87f8c0d9b1ed28d5f99da790ca5f047fdf2c5d4c028ea6d5b604af AS runtime
WORKDIR /app
RUN useradd --create-home --uid 10001 axion
COPY pyproject.toml uv.lock* ./
COPY apps ./apps
COPY packages ./packages
RUN pip install --no-cache-dir uv && uv sync --all-packages --no-dev
USER axion
EXPOSE 8000
HEALTHCHECK CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/health/live', timeout=2)"
CMD ["uv", "run", "axion-api"]

