Build a TurboRepo + pnpm workspaces monorepo in this directory that will test how different frameworks use React Server Components.

The repository will consided of a library in `packages` called `double-server-number` that exports a few test components and 4 apps in `apps`: one for the latest versions of Next.js, Waku, React Router (in Framework Mode) and Tanstack React Start (with experimental rsc). Use web search to verify the latest versions of each package.

## `packages/double-server-number`

`double-server-number` will export a React Server Component (no `use client`) that renders a number persisted on a local text file (default 0). It will also have a form with a number input and a submit button. On form submission, It will call as an action a Server Function (`use server`) that takes a number, doubles it, persistes it to the local file and then returns that number.

# The apps

Each app should just be a demo shell that imports `double-server-number` and hosts it at the index.

Do not do any tests or building of the code.

Note that we expect the Tanstack React Start import to fail because it apparenlty does not support `use server`. Try to import and render the RSC anyway, I am trying to see what what happens

Run this prompt as a chain: researcher to look up the online docs and learn how to set up rsc and react-server exports, how to scaffold each framework and how each handles rsc, then planner to create a list of tasks in `TASKS.md`. then worker agents for each task, marking completion along the way.
