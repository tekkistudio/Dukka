'use client'

import { Navbar } from '@/components/layout/Navbar'
import { usePathname } from 'next/navigation'

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
    </>
  )
}