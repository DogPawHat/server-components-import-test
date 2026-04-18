import { DoubleServerNumber } from 'double-server-number'

export default async function HomePage() {
  return (
    <>
      <title>Waku RSC import test</title>
      <div className="copy-block">
        <p className="eyebrow">Waku</p>
        <h1>Shared React Server Component import</h1>
        <p>
          This page renders the workspace package directly from a Waku server component.
        </p>
      </div>

      <DoubleServerNumber title="double-server-number in Waku" />
    </>
  )
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const
}
