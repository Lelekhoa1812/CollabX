from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
from dataclasses import dataclass

from sqlalchemy import text
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from axion_infrastructure.config import DatabaseSettings


@dataclass(frozen=True)
class DbContext:
    tenant_id: str
    actor_id: str
    project_ids: tuple[str, ...] = ()
    permissions: tuple[str, ...] = ()
    support_grant: str | None = None


def create_engine(settings: DatabaseSettings) -> AsyncEngine:
    return create_async_engine(
        settings.dsn,
        pool_size=settings.pool_size,
        pool_pre_ping=True,
        connect_args={"server_settings": {"application_name": "axion-stakeholder-crm"}},
    )


async def apply_transaction_context(session: AsyncSession, context: DbContext) -> None:
    await session.execute(
        text("select set_config('app.tenant_id', :value, true)"),
        {"value": context.tenant_id},
    )
    await session.execute(
        text("select set_config('app.actor_id', :value, true)"),
        {"value": context.actor_id},
    )
    await session.execute(
        text("select set_config('app.project_ids', :value, true)"),
        {"value": ",".join(context.project_ids)},
    )
    await session.execute(
        text("select set_config('app.permissions', :value, true)"),
        {"value": ",".join(context.permissions)},
    )
    await session.execute(
        text("select set_config('app.support_grant', :value, true)"),
        {"value": context.support_grant or ""},
    )


@asynccontextmanager
async def session_scope(engine: AsyncEngine, context: DbContext) -> AsyncIterator[AsyncSession]:
    factory = async_sessionmaker(engine, expire_on_commit=False)
    async with factory() as session:
        async with session.begin():
            await apply_transaction_context(session, context)
            yield session
