import { readPersistedNumber, resolveNumberFilePath } from "./storage";
import { DoubleServerNumberValue } from "./value";
import { DoubleServerNumberForm } from "./form";
import { DoubleServerNumberShell } from "./shell";
import { DoubleServerNumberActionProvider } from "./action-provider";

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

  return (
    <DoubleServerNumberActionProvider>
      {(action) => (
        <DoubleServerNumberShell title={title} description={description}>
          <DoubleServerNumberValue filePath={resolvedFilePath} />

          <DoubleServerNumberForm
            action={action}
            filePath={resolvedFilePath}
            fieldName={fieldName}
            initialValue={persistedNumber}
          />
        </DoubleServerNumberShell>
      )}
    </DoubleServerNumberActionProvider>
  );
}

export type { DoubleServerNumberProps };
export { DoubleServerNumber };
