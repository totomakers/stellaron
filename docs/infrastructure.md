# Structure

Currently

- Apps are on [Fly.io](https://fly.io/)
- Databases are on [Neon](https://neon.tech/)

# FlyIO

App is naming like following [domain|environment]-[app-name]

Cmd for create all apps

```
flyctl apps create prod-stellaron
flyctl ips allocate-v6 -a prod-stellaron

flyctl apps create dev-stellaron
flyctl ips allocate-v6 -a dev-stellaron

flyctl apps create prod-stellaron-api
flyctl ips allocate-v6 -a prod-stellaron-api

flyctl apps create dev-stellaron-api
flyctl ips allocate-v6 -a dev-stellaron-api

flyctl apps create dev-meta
flyctl ips allocate-v6 -a dev-meta

flyctl apps create prod-meta
flyctl ips allocate-v6 -a prod-meta
```

# Neon

Each Apps is a `Project` with two branches - "main" & "dev"
