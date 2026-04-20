import { resolveNumberFilePath } from "./storage";
import { submitDoubleServerNumber } from "./action";

interface DoubleServerNumberActionProviderProps {
  description?: string;
  filePath?: string;
  fieldName?: string;
  children?: (action: (formData: FormData) => Promise<void>) => React.ReactNode;
}

async function DoubleServerNumberActionProvider({
  description = "A shared React Server Component that persists a number to a local text file and doubles it through a `use server` action.",
  filePath,
  children,
  fieldName = "value",
}: DoubleServerNumberActionProviderProps) {
  const resolvedFilePath = resolveNumberFilePath(filePath);

  const action = async (formData: FormData) => {
    "use server";

    void submitDoubleServerNumber(
      { filePath: resolvedFilePath, fieldName },
      formData,
    );
  };

  return children ? children(action) : null;
}

export type { DoubleServerNumberActionProviderProps };
export { DoubleServerNumberActionProvider };
