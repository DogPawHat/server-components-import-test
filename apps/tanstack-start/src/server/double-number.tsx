import {
  DoubleServerNumber,
  DoubleServerNumberShell,
  DoubleServerNumberValue,
} from "double-server-number/rsc";
import { createServerFn } from "@tanstack/react-start";
import {
  renderServerComponent,
  createCompositeComponent,
} from "@tanstack/react-start/rsc";

export const getDoubleNumber = createServerFn({ method: "GET" }).handler(
  async () => {
    return renderServerComponent(<DoubleServerNumber />);
  },
);

export const getDoubleNumberFormShell = createServerFn({
  method: "GET",
}).handler(async () => {
  return createCompositeComponent((props: { children?: React.ReactNode }) => (
    <DoubleServerNumberShell>
      <DoubleServerNumberValue />
      {props.children}
    </DoubleServerNumberShell>
  ));
});
