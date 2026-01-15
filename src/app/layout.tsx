import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
})

export const metadata: Metadata = {
  title: 'DEV Portfolio - Full-Stack Developer & 3D Pixel Artist',
  description: 'Portfolio de desenvolvedor full-stack com design pixel art retrô',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${pressStart2P.variable} size-full min-h-screen bg-[#1a1c2e] overflow-x-hidden`}>
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  )
}
