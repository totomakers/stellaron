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
COPY --from=build /monorepo/apps/db/dist /monorepo/apps/db/dist
COPY --from=prod-deps /monorepo/node_modules /monorepo/node_modules
COPY --from=prod-deps /monorepo/apps/db/node_modules /monorepo/apps/db/node_modules

WORKDIR /monorepo/apps/db
EXPOSE 3000
CMD [ "pnpm", "start:prod" ]