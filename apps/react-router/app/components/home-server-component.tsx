import { DoubleServerNumber } from "double-server-number";

export function HomeServerComponent() {
  return (
    <main className="page-shell">
      <div className="copy-block">
        <p className="eyebrow">React Router 7 Framework Mode + RSC</p>
        <h1>Shared React Server Component import</h1>
        <p>
          This route renders the workspace package through React Router&apos;s
          experimental framework-mode RSC support.
        </p>
      </div>

      <DoubleServerNumber title="double-server-number in React Router" />
    </main>
  );
}
