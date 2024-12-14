'use client'

import { Navbar } from '@/components/layout/Navbar'  // Chemin corrigé

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}