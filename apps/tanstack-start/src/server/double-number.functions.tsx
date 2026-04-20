import { createServerFn } from "@tanstack/react-start";
import {
  renderServerComponent,
  createCompositeComponent,
} from "@tanstack/react-start/rsc";
import {
  DoubleServerNumber,
  DoubleServerNumberShell,
  DoubleServerNumberValue,
  submitDoubleServerNumber,
} from "double-server-number/rsc";

export const submitDoubleNumber = createServerFn({ method: "POST" })
  .inputValidator((data: FormData) => {
    if (!(data instanceof FormData)) {
      throw new Error("Expected FormData");
    }

    return data;
  })
  .handler(async ({ data }) => {
    await submitDoubleServerNumber({}, data);
  });

export const getDoubleNumber = createServerFn({ method: "GET" }).handler(
  async () => {
    return renderServerComponent(<DoubleServerNumber />);
  },
);

export const getDoubleNumberFormShell = createServerFn({
  method: "GET",
}).handler(async () => {
  const src = await createCompositeComponent(
    (props: { children?: React.ReactNode }) => (
      <DoubleServerNumberShell>
        <DoubleServerNumberValue />
        {props.children}
      </DoubleServerNumberShell>
    ),
  );
  return { src };
});
