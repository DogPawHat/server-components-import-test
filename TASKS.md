# TASKS

## Verified versions and approach

Verified from official docs and npm registry on 2026-04-18:

- pnpm: `10.33.0`
- Turbo (`turbo`): `2.9.6`
- React / React DOM: `19.2.5`
- Next.js: `16.2.4`
- Waku: `1.0.0-alpha.7`
- React Router: `7.14.1`
- TanStack Start (`@tanstack/react-start`): `1.167.41`
- `@vitejs/plugin-rsc`: `0.5.24`
- Vite: `8.0.8`

Scaffolding / interop strategy:

- Build a pnpm workspace + Turborepo root without running builds/tests.
- Keep `packages/double-server-number` source-only so apps compile the workspace package directly.
- Export the shared library with a `react-server` condition and a shared default export path.
- Use one app each for Next.js App Router, Waku file-based routing, React Router Framework Mode with its unstable RSC plugin, and TanStack Start with experimental RSC enabled.
- For TanStack Start, intentionally import/render the shared RSC directly even though `use server` support is expected to break.

## Tasks

- [x] Scaffold the pnpm workspace + Turborepo root config, shared scripts, and repo docs.
- [x] Implement `packages/double-server-number` with a persisted file-backed server component and `use server` action.
- [x] Scaffold `apps/next` and render the shared package at `/`.
- [x] Scaffold `apps/waku` and render the shared package at `/`.
- [x] Scaffold `apps/react-router` in Framework Mode with RSC support and render the shared package at `/`.
- [x] Scaffold `apps/tanstack-start` with experimental RSC enabled and intentionally attempt to render the shared package at `/`.
- [x] Finalize repo documentation and mark all completed tasks.
