import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClientProvider } from '@/components/providers/ClientProvider'
import { WaitlistProvider } from '@/contexts/WaitlistContext'
import Footer from '@/components/sections/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dukka - La Meilleure Alternative à Shopify en Afrique',
  description: 'Dukka réinvente l\'e-commerce pour l\'adapter à la réalité africaine, en permettant aux commerçants et marques de créer des boutiques en ligne où la conversation est au cœur de l\'expérience d\'achat.',
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