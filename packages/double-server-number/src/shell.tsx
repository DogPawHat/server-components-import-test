import path from "node:path";

import { resolveNumberFilePath } from "./storage";
import { styles } from "./styles";

interface DoubleServerNumberShellProps extends React.PropsWithChildren {
  title?: string;
  description?: string;
  filePath?: string;
}

async function DoubleServerNumberShell({
  title = "double-server-number",
  description = "A shared React Server Component that persists a number to a local text file and doubles it through a `use server` action.",
  filePath,
  children,
}: DoubleServerNumberShellProps) {
  const resolvedFilePath = resolveNumberFilePath(filePath);

  return (
    <section style={styles.section}>
      <header>
        <p style={{ margin: 0, color: "#52525b", fontSize: 14 }}>
          Shared package
        </p>
        <h2 style={{ margin: "0.25rem 0 0.5rem" }}>{title}</h2>
        <p style={{ margin: 0, color: "#3f3f46" }}>{description}</p>
      </header>

      {children}

      <p style={{ margin: 0, color: "#52525b", fontSize: 14 }}>
        Store file:{" "}
        <code style={styles.code}>{path.basename(resolvedFilePath)}</code>
      </p>
    </section>
  );
}

export type { DoubleServerNumberShellProps };
export { DoubleServerNumberShell };
