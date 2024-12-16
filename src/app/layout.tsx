import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClientProvider } from '@/components/providers/ClientProvider'
import { WaitlistProvider } from '@/contexts/WaitlistContext'
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
  const segment = (children as any)?.props?.segment

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/images/logo/fav.png" />
      </head>
      <body className={inter.className}>
        <WaitlistProvider>
          <ClientProvider>
            {children}
            {segment !== 'dashboard' && <Footer />}
          </ClientProvider>
        </WaitlistProvider>
      </body>
    </html>
  )
}