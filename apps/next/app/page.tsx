import {
  submitDoubleServerNumber,
  DoubleServerNumberShell,
  DoubleServerNumberValue,
  DoubleServerNumber,
} from "double-server-number/rsc";
import { DoubleServerNumberForm } from "double-server-number";
import { revalidatePath } from "next/cache";

async function formAction(data: FormData) {
  "use server";
  await submitDoubleServerNumber({}, data);
  revalidatePath("/");
}

async function forceRevalidate() {
  "use server";
  revalidatePath("/");
}

export default async function HomePage() {
  return (
    <main className="page-shell">
      <div className="copy-block">
        <p className="eyebrow">Next.js 16 App Router</p>
        <h1>Shared React Server Component import</h1>
        <p>
          This page renders the workspace package directly from a Next.js server
          component.
        </p>
      </div>
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
        onClick={forceRevalidate}
      >
        Force Revalidate
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <div>
          <h2>Exported with internal action</h2>
          <DoubleServerNumber />
        </div>
        <div>
          <h2>Decomposed with invalidating cache</h2>
          <DoubleServerNumberShell>
            <DoubleServerNumberValue />
            <DoubleServerNumberForm action={formAction} />
          </DoubleServerNumberShell>
        </div>
      </div>
    </main>
  );
}
