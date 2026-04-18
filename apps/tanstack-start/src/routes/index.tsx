import { createFileRoute } from '@tanstack/react-router'
import { DoubleServerNumber } from 'double-server-number'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="page-shell">
      <div className="copy-block">
        <p className="eyebrow">TanStack Start + experimental RSC</p>
        <h1>Direct shared RSC import attempt</h1>
        <p>
          This route intentionally imports and renders the shared package directly, even
          though `use server` interop is expected to fail.
        </p>
      </div>

      <DoubleServerNumber title="double-server-number in TanStack Start" />
    </main>
  )
}
