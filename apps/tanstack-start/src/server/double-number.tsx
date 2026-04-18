import { DoubleServerNumber } from "double-server-number";
import { createServerFn } from "@tanstack/react-start";
import { renderServerComponent } from "@tanstack/react-start/rsc";

export const getDoubleNumber = createServerFn({ method: "GET" }).handler(
  async () => {
    return renderServerComponent(
      <DoubleServerNumber title="double-server-number in TanStack Start" />,
    );
  },
);
