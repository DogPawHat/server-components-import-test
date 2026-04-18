import { DoubleServerNumber } from 'double-server-number'

export default async function HomePage() {
  return (
    <main className="page-shell">
      <div className="copy-block">
        <p className="eyebrow">Next.js 16 App Router</p>
        <h1>Shared React Server Component import</h1>
        <p>
          This page renders the workspace package directly from a Next.js server component.
        </p>
      </div>

      <DoubleServerNumber title="double-server-number in Next.js" />
    </main>
  )
}
