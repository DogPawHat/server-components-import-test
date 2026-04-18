import './globals.css'

import type { ReactNode } from 'react'

export const metadata = {
  title: 'Next.js RSC import test',
  description: 'Imports the shared double-server-number package from a Next.js App Router app.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
