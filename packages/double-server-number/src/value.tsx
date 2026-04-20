import { readPersistedNumber } from "./storage";

interface DoubleServerNumberValueProps {
  filePath?: string;
  label?: string;
}

async function DoubleServerNumberValue({
  filePath,
  label = "Persisted number",
}: DoubleServerNumberValueProps) {
  const persistedNumber = await readPersistedNumber(filePath);

  return (
    <p>
      <strong>{`${label}:`}</strong> <span>{persistedNumber}</span>
    </p>
  );
}

export type { DoubleServerNumberValueProps };
export { DoubleServerNumberValue };
