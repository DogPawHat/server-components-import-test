import { createFileRoute } from "@tanstack/react-router";
import { getDoubleNumber } from "~/server/double-number";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => {
    const doubleNumber = await getDoubleNumber();
    return { doubleNumber };
  },
});

function Home() {
  const { doubleNumber } = Route.useLoaderData();

  return (
    <main className="page-shell">
      <div className="copy-block">
        <p className="eyebrow">TanStack Start + experimental RSC</p>
        <h1>Direct shared RSC import attempt</h1>
        <p>
          This route intentionally imports and renders the shared package
          directly, even though `use server` interop is expected to fail.
        </p>
      </div>

      <>{doubleNumber}</>
    </main>
  );
}
