"""foundation schemas, RLS helpers, identity tables

Revision ID: 0001_foundation
Revises:
Create Date: 2026-07-12
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

revision: str = "0001_foundation"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

SCHEMAS = [
    "identity",
    "project",
    "stakeholder",
    "discovery",
    "source",
    "evidence",
    "knowledge",
    "requirements",
    "analysis",
    "governance",
    "artefact",
    "delivery",
    "platform",
    "integration",
    "operations",
]


def upgrade() -> None:
    for schema in SCHEMAS:
        op.execute(sa.text(f"create schema if not exists {schema}"))
    op.execute(
        """
        create table identity.user_profile (
          id uuid primary key,
          tenant_id uuid not null,
          issuer text not null,
          subject text not null,
          verified_email text,
          locale text not null default 'en-AU',
          timezone text not null default 'Australia/Melbourne',
          created_at timestamptz not null default now(),
          updated_at timestamptz not null default now(),
          version integer not null default 1,
          row_etag text not null,
          unique (issuer, subject)
        )
        """
    )
    op.execute(
        """
        create table identity.external_identity (
          id uuid primary key,
          user_profile_id uuid not null references identity.user_profile(id),
          issuer text not null,
          subject text not null,
          verified_email text,
          created_at timestamptz not null default now(),
          unique (issuer, subject)
        )
        """
    )
    op.execute(
        """
        create table identity.service_principal_binding (
          id uuid primary key,
          tenant_id uuid not null,
          principal_id text not null,
          workload_name text not null,
          created_at timestamptz not null default now(),
          unique (tenant_id, principal_id)
        )
        """
    )
    op.execute(
        """
        create table platform.audit_event (
          id uuid primary key,
          tenant_id uuid not null,
          project_id uuid,
          actor_id uuid,
          action text not null,
          target_type text not null,
          target_id uuid,
          classification text not null,
          correlation_id text not null,
          safe_before_ref text,
          safe_after_ref text,
          created_at timestamptz not null default now()
        )
        """
    )
    op.execute("alter table platform.audit_event enable row level security")
    op.execute(
        """
        create policy tenant_isolation_audit on platform.audit_event
        using (tenant_id::text = current_setting('app.tenant_id', true))
        with check (tenant_id::text = current_setting('app.tenant_id', true))
        """
    )


def downgrade() -> None:
    op.execute("drop table if exists platform.audit_event")
    op.execute("drop table if exists identity.service_principal_binding")
    op.execute("drop table if exists identity.external_identity")
    op.execute("drop table if exists identity.user_profile")
    for schema in reversed(SCHEMAS):
        op.execute(sa.text(f"drop schema if exists {schema}"))

