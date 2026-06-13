import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import navitransImg from '../assets/images/navitrans_logo_1781194178590.jpg';
import boltImg from '../assets/images/bolt_logo_1781196206964.jpg';
import wilieteImg from '../assets/images/wiliete_logo_1781196614139.jpg';
import yangoImg from '../assets/images/yango_logo_1781196786847.jpg';
import heetchImg from '../assets/images/heetch_logo_1781196947000.jpg';
import bfaImg from '../assets/images/bfa_logo_1781197264558.jpg';
import telfordImg from '../assets/images/telford_logo_1781197553373.jpg';
import plusImg from '../assets/images/plus_logo_1781198063497.jpg';
import aldeiasImg from '../assets/images/aldeias_logo_1781198667123.jpg';
import ombakaImg from '../assets/images/ombaka_logo_1781198885035.jpg';
import adppImg from '../assets/images/adpp_clean_logo_1781345463497.jpg';

interface LogoCarouselProps {
  currentLang: Language;
}

export default function LogoCarousel({ currentLang }: LogoCarouselProps) {
  const logos = [
    {
      id: 'navitrans',
      name: 'NAVITRANS Angola',
      element: (
        <img 
          src={navitransImg} 
          alt="NAVITRANS Angola" 
          className="h-14 sm:h-16 w-auto max-w-[200px] object-contain select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'telford',
      name: 'Telford Offshore',
      element: (
        <img 
          src={telfordImg} 
          alt="Telford Offshore" 
          className="h-14 sm:h-16 w-auto max-w-[200px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'executive',
      name: 'Executive Shipping',
      element: (
        <svg viewBox="0 0 160 50" className="h-12 sm:h-14 w-auto max-w-[160px] select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 38 L27 10 L42 38 Z" fill="#d97706" />
          <path d="M20 38 L27 21 L34 38 Z" fill="#ffffff" opacity="0.85" />
          <text x="50" y="25" fill="#111827" fontWeight="900" fontSize="12" fontStyle="italic" letterSpacing="0.3">EXECUTIVE</text>
          <text x="50" y="37" fill="#d97706" fontWeight="700" fontSize="9" letterSpacing="1">SHIPPING</text>
        </svg>
      )
    },
    {
      id: 'plus',
      name: 'Plus Shipping',
      element: (
        <img 
          src={plusImg} 
          alt="Plus Shipping" 
          className="h-14 sm:h-16 w-auto max-w-[200px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'bfa',
      name: 'BFA',
      element: (
        <img 
          src={bfaImg} 
          alt="BFA" 
          className="h-13 sm:h-15 w-auto max-w-[200px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'adpp',
      name: 'ADPP Angola',
      element: (
        <img 
          src={adppImg} 
          alt="ADPP Angola" 
          className="h-14 sm:h-16 w-auto max-w-[200px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'aldeias',
      name: 'Aldeias de Crianças SOS',
      element: (
        <img 
          src={aldeiasImg} 
          alt="Aldeias de Crianças SOS Angola" 
          className="h-14 sm:h-16 w-auto max-w-[210px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'wiliete',
      name: 'Wiliete Crédito',
      element: (
        <img 
          src={wilieteImg} 
          alt="Wiliete Crédito" 
          className="h-16 sm:h-18 w-auto max-w-[215px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'ombaka',
      name: 'Instituto Superior Politécnico Ombaka',
      element: (
        <img 
          src={ombakaImg} 
          alt="Instituto Superior Politécnico Ombaka (ISPO)" 
          className="h-16 sm:h-18 w-auto max-w-[220px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'yango',
      name: 'Yango',
      element: (
        <img 
          src={yangoImg} 
          alt="Yango" 
          className="h-11 sm:h-12 w-auto max-w-[150px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'heetch',
      name: 'Heetch',
      element: (
        <img 
          src={heetchImg} 
          alt="Heetch" 
          className="h-11 sm:h-12 w-auto max-w-[150px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: 'bolt',
      name: 'Bolt',
      element: (
        <img 
          src={boltImg} 
          alt="Bolt" 
          className="h-12 sm:h-14 w-auto max-w-[160px] object-contain mix-blend-multiply select-none"
          referrerPolicy="no-referrer"
        />
      )
    }
  ];

  // Duplicate logos array twice to create a seamless infinite loop feeling
  const carouselTrack = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-white border-b border-slate-200 overflow-hidden relative">
      <style>{`
        @keyframes marquee-infinite {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 5rem;
          animation: marquee-infinite 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-teal-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
          {currentLang === 'pt' ? 'PARCEIROS & CLIENTES' : 'PARTNERS & CUSTOMERS'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {currentLang === 'pt' 
            ? 'Marcas que Confiam no Nosso Ecossistema' 
            : 'Brands that Trust Our Ecosystem'}
        </h2>
        <div className="h-1 w-10 bg-teal-500 mx-auto mt-4 rounded"></div>
      </div>

      {/* Outer wrapper with left and right gradient fades for high-end aesthetic */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="w-full flex">
          <div className="marquee-track">
            {carouselTrack.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:scale-[1.06] transition-all duration-300 cursor-pointer py-2 shrink-0 px-2"
                title={logo.name}
              >
                {logo.element}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
