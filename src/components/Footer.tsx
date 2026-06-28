import React from 'react';
import { ShieldAlert, Heart } from 'lucide-react';
import { translations, Language } from '../types';
import Logo from './Logo';

interface FooterProps {
  currentLang: Language;
  onNavigateHome?: () => void;
}

export default function Footer({ currentLang, onNavigateHome }: FooterProps) {
  const t = translations[currentLang];
  const year = new Date().getFullYear();

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-150">
          
          {/* Logo element */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleLogoClick}>
            <Logo size="sm" showText={false} className="h-8 w-auto text-teal-600" />
            <div>
              <span className="text-slate-900 font-black text-lg tracking-wider">CAHOTA <span className="text-teal-600 text-xs font-bold">LDA</span></span>
              <p className="text-[9px] uppercase font-mono tracking-tighter text-slate-450">
                {currentLang === 'pt' ? 'Comércio & Prestação de Serviços' : 'Commerce and service provision'}
              </p>
            </div>
          </div>

          {/* Quick legal verification numbers */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-500">
            <span>NIF: 5001273264</span>
            <span className="text-slate-300">•</span>
            <span>Est. 2022 - Kilamba, Luanda</span>
            <span className="text-slate-300">•</span>
            <span className="text-teal-600 font-bold">www.cahota.ao</span>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-450">
          <p>
            &copy; {year} CAHOTA LDA. {currentLang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>

      </div>
    </footer>
  );
}
