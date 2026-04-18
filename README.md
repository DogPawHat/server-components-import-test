# server-components-import-test

A pnpm workspace + Turborepo monorepo for comparing how several React frameworks consume a shared React Server Component package.

## Verified versions

Verified on 2026-04-18 from official docs / npm registry:

| Package | Version |
| --- | --- |
| pnpm | `10.33.0` |
| turbo | `2.9.6` |
| react | `19.2.5` |
| react-dom | `19.2.5` |
| next | `16.2.4` |
| waku | `1.0.0-alpha.7` |
| react-router | `7.14.1` |
| @react-router/dev | `7.14.1` |
| @tanstack/react-start | `1.167.41` |
| @tanstack/react-router | `1.168.22` |
| @vitejs/plugin-rsc | `0.5.24` |
| vite | `8.0.8` |

## Workspace layout

- `packages/double-server-number` - shared server-component package
- `apps/next` - Next.js App Router demo
- `apps/waku` - Waku demo
- `apps/react-router` - React Router Framework Mode + experimental RSC demo
- `apps/tanstack-start` - TanStack Start + experimental RSC demo

## Shared package behavior

`double-server-number` exports server components that:

- read a persisted number from a local text file
- default missing state to `0`
- render a form with a number input
- submit to a `use server` action that doubles the submitted number, persists it, and returns it

By default the number is stored in `double-server-number.txt` in the current app directory.

## Notes

- The apps are intentionally lightweight demo shells.
- No builds or tests were run while creating this repo.
- The TanStack Start app intentionally attempts a direct import/render of the shared RSC package even though `use server` interop is expected to fail.
- `TASKS.md` tracks the staged implementation plan and completion.
