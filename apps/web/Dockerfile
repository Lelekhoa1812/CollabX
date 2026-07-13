FROM node:24-alpine@sha256:5e5d61645e9b1626bca6eecb1d9b87f89f40b2d12a57a8bb46d0a784481f8f63 AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/web ./apps/web
RUN corepack enable && pnpm install --frozen-lockfile && pnpm --filter @axion/web build
FROM nginx:1.29-alpine@sha256:91b2f343b5524b28445df0b63724f5108d6420f6fd832d24f8e2c57a440e7907
COPY --from=build /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ || exit 1

