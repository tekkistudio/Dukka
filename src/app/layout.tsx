// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClientProvider } from '@/components/providers/ClientProvider'
import { WaitlistProvider } from '@/contexts/WaitlistContext'
import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/sections/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dukka - L\'e-commerce repensé pour l\'Afrique',
  description: 'Dukka | La solution e-commerce adaptée à l\'Afrique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-white`}>
        <WaitlistProvider>
          <ClientProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </ClientProvider>
        </WaitlistProvider>
      </body>
    </html>
  )
}