import {
  queryOptions,
  useSuspenseQueries,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CompositeComponent } from "@tanstack/react-start/rsc";
import { DoubleServerNumberForm } from "double-server-number";

import {
  getDoubleNumber,
  getDoubleNumberFormShell,
  submitDoubleNumber,
} from "~/server/double-number.functions";

const doubleNumberInternalOpts = queryOptions({
  queryKey: ["doubleNumber", "internal"] as const,
  queryFn: getDoubleNumber,
});

const doubleNumberFormShellOpts = queryOptions({
  queryKey: ["doubleNumber", "formShell"] as const,
  queryFn: getDoubleNumberFormShell,
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async ({ context: { queryClient } }) => {
    await Promise.all([
      queryClient.ensureQueryData(doubleNumberInternalOpts),
      queryClient.ensureQueryData(doubleNumberFormShellOpts),
    ]);
  },
});

function ForceRevalidateButton() {
  const { invalidateQueries } = useQueryClient();
  async function invalidate() {
    await invalidateQueries({ queryKey: ["doubleNumber"] });
  }
  return (
    <button
      type="button"
      style={{
        appearance: "none",
        border: "none",
        borderRadius: 8,
        padding: "10px 14px",
        background: "#111827",
        color: "#ffffff",
        fontSize: 15,
        cursor: "pointer",
        width: "fit-content",
      }}
      onClick={invalidate}
    >
      Force Revalidate
    </button>
  );
}

function Home() {
  const [{ data: doubleNumber }, { data: doubleNumberFormShell }] =
    useSuspenseQueries({
      queries: [doubleNumberInternalOpts, doubleNumberFormShellOpts],
    });

  const { mutateAsync: formMutate } = useMutation({
    mutationFn: async (formData: FormData) =>
      submitDoubleNumber({ data: formData }),
    onSuccess: async (_0, _1, _2, ctx) => {
      await ctx.client.invalidateQueries({ queryKey: ["doubleNumber"] });
    },
  });

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
      <ForceRevalidateButton />
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
          <CompositeComponent src={doubleNumberFormShell.src}>
            <DoubleServerNumberForm action={formMutate} />
          </CompositeComponent>
        </div>
      </div>
    </main>
  );
}
