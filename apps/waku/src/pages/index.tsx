import { DoubleServerNumberForm } from "double-server-number";
import {
  DoubleServerNumberShell,
  DoubleServerNumberValue,
  DoubleServerNumber,
  submitDoubleServerNumber,
} from "double-server-number/rsc";
import { unstable_rerenderRoute } from "waku/router/server";

async function formAction(data: FormData) {
  "use server";
  await submitDoubleServerNumber({}, data);
  unstable_rerenderRoute("/");
}

async function forceRevalidate() {
  "use server";
  unstable_rerenderRoute("/");
}

export default async function HomePage() {
  return (
    <>
      <title>Waku RSC import test</title>
      <div className="copy-block">
        <p className="eyebrow">Waku</p>
        <h1>Shared React Server Component import</h1>
        <p>
          This page renders the workspace package directly from a Waku server
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
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const;
};
