# base
FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /monorepo
WORKDIR /monorepo

## prod-deps
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# build
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# ==============
# Apps =========
# ==============

## api
FROM base as api
COPY --from=build /monorepo/apps/api/dist /monorepo/apps/api/dist
COPY --from=prod-deps /monorepo/node_modules /monorepo/node_modules
COPY --from=prod-deps /monorepo/apps/api/node_modules /monorepo/apps/api/node_modules

WORKDIR /monorepo/apps/api
EXPOSE 3000
CMD [ "pnpm", "start:prod" ]

# frontend
FROM pierrezemb/gostatic as frontend
COPY --from=build /monorepo/apps/frontend/dist /srv/http

