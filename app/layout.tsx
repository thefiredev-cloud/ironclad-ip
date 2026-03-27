import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'IronClad IP — Defend Your Ideas',
  description: 'AI patent intelligence — prior art search, application drafting, portfolio management, office action responses.',
  keywords: 'patent intelligence, prior art search, IP management, patent drafting, office action',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
