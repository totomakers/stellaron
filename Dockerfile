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

## stellaron-api
FROM base as stellaron-api
COPY --from=build /monorepo/apps/stellaron-api/dist /monorepo/apps/stellaron-api/dist
COPY --from=prod-deps /monorepo/node_modules /monorepo/node_modules
COPY --from=prod-deps /monorepo/apps/stellaron-api/node_modules /monorepo/apps/stellaron-api/node_modules

WORKDIR /monorepo/apps/stellaron-api
EXPOSE 3000
CMD [ "pnpm", "start:prod" ]

# meta
FROM pierrezemb/gostatic as meta
COPY --from=build /monorepo/apps/meta/dist /srv/http

# stellaron
FROM pierrezemb/gostatic as stellaron
COPY --from=build /monorepo/apps/stellaron/dist /srv/http

