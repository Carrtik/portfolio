import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import LayoutContent from '@/components/LayoutContent'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Kartik Nair — Cybersecurity Researcher & Security Tool Developer',
  description:
    'Engineering offensive security tooling, automating threat intelligence pipelines, and building infrastructure that defends itself.',
  keywords: [
    'cybersecurity',
    'security research',
    'offensive security',
    'threat intelligence',
    'SIEM',
    'SOAR',
    'vulnerability management',
  ],
  authors: [{ name: 'Kartik Nair' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
