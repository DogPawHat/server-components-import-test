import {
  submitDoubleServerNumber,
  DoubleServerNumberShell,
  DoubleServerNumberValue,
  DoubleServerNumber,
} from "double-server-number/rsc";
import { DoubleServerNumberForm } from "double-server-number";
import { revalidatePath } from "next/cache";

export default async function HomePage() {
  async function action(data: FormData) {
    "use server";
    await submitDoubleServerNumber({}, data);
    revalidatePath("/");
  }

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
            <DoubleServerNumberForm action={action} />
          </DoubleServerNumberShell>
        </div>
      </div>
    </main>
  );
}
