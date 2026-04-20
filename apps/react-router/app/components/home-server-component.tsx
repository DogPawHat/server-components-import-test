import * as React from "react";
import {
  DoubleServerNumber,
  DoubleServerNumberShell,
  DoubleServerNumberValue,
  submitDoubleServerNumber,
} from "double-server-number/rsc";
import { DoubleServerNumberForm } from "double-server-number";
import { ForceRevalidateButton } from "./force-revalidate-button";

async function formAction(data: FormData) {
  "use server";
  await submitDoubleServerNumber({}, data);
}

export function HomeServerComponent() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
