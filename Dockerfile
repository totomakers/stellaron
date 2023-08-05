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

## db
FROM base as db-api
COPY --from=build /monorepo/apps/db-api/dist /monorepo/apps/db-api/dist
COPY --from=prod-deps /monorepo/node_modules /monorepo/node_modules
COPY --from=prod-deps /monorepo/apps/db-api/node_modules /monorepo/apps/db-api/node_modules

WORKDIR /monorepo/apps/db-api
EXPOSE 3000
CMD [ "pnpm", "start:prod" ]

# meta
FROM pierrezemb/gostatic as meta
COPY --from=build /monorepo/apps/meta/dist /srv/http

