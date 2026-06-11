import React, { useState, useEffect } from 'react';
import { Ship, Globe, Menu, X, Phone } from 'lucide-react';
import { translations, Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activePage: string;
  onChangePage: (page: string) => void;
}

export default function Navbar({ currentLang, onLanguageChange, activePage, onChangePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll style trigger
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    setIsOpen(false);
    onChangePage(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: t.navHome, id: 'home' },
    { label: t.navAbout, id: 'about' },
    { label: t.navServices, id: 'services' },
    { label: t.navClients, id: 'clients' },
    { label: t.vendorTitle, id: 'vendor' },
    { label: t.navContact, id: 'contact' },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-2.5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavigate('home')} 
            className="flex items-center gap-2.5 cursor-pointer group"
            id="nav-logo-trigger"
          >
            <Logo size="sm" showText={false} className="h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="leading-tight">
              <span className="text-lg font-black tracking-wider text-slate-900 block">
                CAHOTA <span className="text-teal-600 font-extrabold text-[10px] border border-teal-500/30 px-1 rounded ml-1 bg-teal-50">LDA</span>
              </span>
              <span className="text-[8px] text-slate-500 font-mono uppercase tracking-widest block -mt-0.5">
                {currentLang === 'pt' ? 'Comércio & Prestação de Serviços' : 'Commerce and service provision'}
              </span>
            </div>
          </div>
 
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    id={`nav-item-${item.id}`}
                    className={`text-sm font-semibold transition-all duration-200 cursor-pointer relative py-2 ${
                      isActive 
                        ? 'text-teal-600 font-bold' 
                        : 'text-slate-600 hover:text-teal-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
 
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-slate-200 bg-white/80 rounded-full p-1">
              <button
                onClick={() => onLanguageChange('pt')}
                id="lang-pt"
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currentLang === 'pt' 
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-sm font-black' 
                    : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                id="lang-en"
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currentLang === 'en' 
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-sm font-black' 
                    : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                EN
              </button>
            </div>
 
            {/* Instant Estimate Button */}
            <button
              onClick={() => handleNavigate('quote')}
              id="nav-quote-btn"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide shadow-md transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <Ship className="h-4 w-4" />
              {t.navQuote}
            </button>
          </div>
 
          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Quick Lang Switch for Mobile */}
            <button
              onClick={() => onLanguageChange(currentLang === 'pt' ? 'en' : 'pt')}
              id="mobile-lang-switcher"
              className="text-xs font-bold text-slate-650 border border-slate-200 bg-white rounded px-2.5 py-1.5 flex items-center gap-1.5 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <Globe className="h-3 w-3 text-teal-500" />
              {currentLang.toUpperCase()}
            </button>
 
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-trigger"
              className="text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
              <div className="flex flex-col gap-1.5 pt-2">
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`text-left py-2.5 px-4 rounded-lg font-semibold transition-all text-sm flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-teal-50/70 text-teal-600 border-l-4 border-teal-500 pl-3'
                          : 'text-slate-650 hover:bg-slate-50 hover:text-teal-600'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="pt-2 px-4 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => handleNavigate('quote')}
                  className="w-full bg-amber-500 text-slate-950 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md"
                >
                  <Ship className="h-4 w-4" />
                  {t.navQuote}
                </button>
                <div className="flex items-center justify-between text-xs text-slate-600 font-mono py-2 bg-slate-50 px-3 rounded-lg border border-slate-200">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3 w-3 text-teal-600" />
                    +244 929 071 923
                  </span>
                  <span>NIF: 5001273264</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
