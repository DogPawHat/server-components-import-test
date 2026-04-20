import path from "node:path";

import { readPersistedNumber, resolveNumberFilePath } from "./storage";
import { DoubleServerNumberValue } from "./value";
import { DoubleServerNumberForm } from "./form";
import { styles } from "./styles";
import { submitDoubleServerNumber } from "./action";
import { DoubleServerNumberShell } from "./shell";

interface DoubleServerNumberProps {
  title?: string;
  description?: string;
  filePath?: string;
  fieldName?: string;
}

async function DoubleServerNumber({
  title = "double-server-number",
  description = "A shared React Server Component that persists a number to a local text file and doubles it through a `use server` action.",
  filePath,
  fieldName = "value",
}: DoubleServerNumberProps) {
  const resolvedFilePath = resolveNumberFilePath(filePath);
  const persistedNumber = await readPersistedNumber(resolvedFilePath);

  const action = async (formData: FormData) => {
    "use server";

    void submitDoubleServerNumber(
      { filePath: resolvedFilePath, fieldName },
      formData,
    );
  };

  return (
    <DoubleServerNumberShell title={title} description={description}>
      <DoubleServerNumberValue filePath={resolvedFilePath} />

      <DoubleServerNumberForm
        action={action}
        filePath={resolvedFilePath}
        fieldName={fieldName}
        initialValue={persistedNumber}
      />
    </DoubleServerNumberShell>
  );
}

export type { DoubleServerNumberProps };
export { DoubleServerNumber };
