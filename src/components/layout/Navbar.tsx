'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { WaitlistButton } from '@/components/WaitlistButton'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Fonctionnalités', href: '/fonctionnalites' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'À propos', href: '/a-propos' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setHasScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        hasScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto py-4 lg:py-6">
        <div className="flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <div className="flex flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <Image
                src="/images/logo/logo_blue.svg"
                alt="Dukka"
                width={160}
                height={64}
                className="h-10 w-auto sm:h-12 lg:h-14"
                priority
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium leading-6 transition-colors ${
                    isActive 
                      ? 'text-dukka-primary'
                      : 'text-gray-700 hover:text-dukka-primary'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <WaitlistButton />
          </div>

          {/* Menu mobile button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Menu principal"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 z-[110]' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        className={`fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out z-[120] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <a href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/logo/logo_blue.svg"
              alt="Dukka"
              width={120}
              height={48}
              className="h-8 w-auto"
              priority
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-dukka-primary/10 text-dukka-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-dukka-primary'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
          <div className="mt-8">
            <WaitlistButton className="w-full justify-center" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar