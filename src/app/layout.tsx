import type { Metadata } from 'next'
import './globals.css'
import { Fira_Code } from 'next/font/google'
const fira_code = Fira_Code({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Alejandro Palmar - SWE',
  description: 'Portfolio Website - Alejandro Palmar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira_code.className}>{children}</body>
    </html>
  )
}
