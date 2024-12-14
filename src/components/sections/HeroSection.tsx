'use client'

import Image from 'next/image'
import { WaitlistButton } from '@/components/WaitlistButton'

export function HeroSection() {
  return (
    <div className="relative isolate min-h-[85vh] flex items-start sm:items-center pt-24 sm:pt-10">
      {/* Gradient de fond */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-dukka-light to-dukka-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto lg:flex lg:items-center lg:gap-x-20">
          {/* Texte à gauche */}
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Vendez comme{' '}
              <span className="text-dukka-primary block mt-2 sm:inline sm:mt-0">l'Afrique achète</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Créez une boutique en ligne où vos clients se sentent en confiance,
              et transformez chaque conversation en vente. Sans avoir à coder.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <WaitlistButton />
              <a href="#demo" className="text-sm font-semibold leading-6 text-gray-900 hover:text-dukka-primary">
                Voir une démo <span aria-hidden="true">→</span>
              </a>
            </div>
            
            {/* Stats rapides */}
            <div className="mt-16 grid grid-cols-3 gap-x-8 gap-y-4">
              <div>
                <p className="text-3xl font-bold tracking-tight text-dukka-primary">+45%</p>
                <p className="mt-1 text-base leading-7 text-gray-600">de ventes en moyenne</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight text-dukka-primary">60%</p>
                <p className="mt-1 text-base leading-7 text-gray-600">de temps gagné</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight text-dukka-primary">0 FCFA</p>
                <p className="mt-1 text-base leading-7 text-gray-600">pour démarrer</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-8 sm:mt-12 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
            <div className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] lg:w-[320px] lg:h-[640px]">
              <Image
                src="/images/hero/mockup-tablet.png"
                alt="Interface mobile Dukka"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection