import { createFileRoute } from "@tanstack/react-router";
import { CompositeComponent } from "@tanstack/react-start/rsc";
import {
  getDoubleNumber,
  getDoubleNumberFormShell,
} from "~/server/double-number";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => {
    const doubleNumber = await getDoubleNumber();
    const doubleNumberFormShellSrc = await getDoubleNumberFormShell();

    return { doubleNumber, doubleNumberFormShellSrc };
  },
});

function Home() {
  const { doubleNumber, doubleNumberFormShellSrc } = Route.useLoaderData();

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <div>
          <h2>Exported with internal action</h2>
          {doubleNumber}
        </div>
        <div>
          <h2>Decomposed with invalidating cache</h2>
          <CompositeComponent src={doubleNumberFormShellSrc}>
            TODO
          </CompositeComponent>
        </div>
      </div>
    </main>
  );
}
