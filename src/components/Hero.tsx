import React from 'react';
import { ArrowRight, ShieldCheck, Ship, Clock, Award } from 'lucide-react';
import { translations, Language } from '../types';
import { motion } from 'motion/react';
import heroImage from '../assets/images/marine_logistics_hero_1781037387912.png';

interface HeroProps {
  currentLang: Language;
  onNavigateToQuote: () => void;
  onNavigateToServices: () => void;
}

export default function Hero({ currentLang, onNavigateToQuote, onNavigateToServices }: HeroProps) {
  const t = translations[currentLang];

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-slate-50 pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glowing Ambient light */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Trust badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-amber-600 text-xs font-semibold tracking-wider uppercase mb-6 self-start"
            >
              <Award className="h-4 w-4 shrink-0" />
              <span>{t.heroBadge}</span>
            </motion.div>
 
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight md:leading-tight"
            >
              {t.heroTitle.split(' ').map((word, i) => {
                const isHighlight = word === 'Marítimo' || word === 'Marine' || word === 'Confiáveis' || word === 'Reliable';
                return (
                  <span 
                    key={i} 
                    className={isHighlight ? 'bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent font-black' : ''}
                  >
                    {word}{' '}
                  </span>
                );
              })}
            </motion.h1>
 
            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              {t.heroSubtitle}
            </motion.p>
 
            {/* Buttons / Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onNavigateToQuote}
                id="hero-quote-trigger"
                className="bg-gradient-to-r from-amber-550 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-md flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(245,158,11,0.2)] transition-all duration-200 transform hover:scale-[1.01]"
              >
                <Ship className="h-5 w-5" />
                {t.heroCTAQuote}
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={onNavigateToServices}
                id="hero-services-trigger"
                className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-xl text-md flex items-center justify-center gap-2 transition-all hover:text-slate-950"
              >
                {t.heroCTAServices}
              </button>
            </motion.div>
 
            {/* Key trust bullets */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-500"
            >
              <div className="flex items-start gap-2.5" id="hero-trust-nif">
                <ShieldCheck className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">NIF Legal</h4>
                  <p className="text-xs text-slate-500 font-mono">5001273264</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5" id="hero-trust-support">
                <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Suporte 24/7</h4>
                  <p className="text-xs text-slate-500">Atendimento Marítimo</p>
                </div>
              </div>
 
              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1" id="hero-trust-presence">
                <Award className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Benguela & Luanda</h4>
                  <p className="text-xs text-slate-500">Presença Integrada</p>
                </div>
              </div>
            </motion.div>
 
          </div>
 
          {/* Right: Immersive Custom Graphic Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Image Frame with Double border and glowing background elements using Brand logo colors Teal, Green, Amber */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={heroImage} 
                  alt="CAHOTA LDA Terminal Supply" 
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/5 to-transparent" />
                
                {/* Floating identity card with logo instead of telemetries */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-teal-550/10 border border-teal-500/20 rounded-lg flex items-center justify-center text-teal-600">
                      <AnchorIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">CAHOTA LDA</p>
                      <p className="text-xs font-bold text-slate-800">Lobito • Luanda • Angola</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 bg-slate-50 py-1 px-2.5 rounded border border-slate-200">
                    NIF 5001273264
                  </div>
                </div>
              </div>
            </div>
            
            {/* Secondary Floating Port Activity Indicator */}
            <div className="absolute -top-4 -right-4 bg-white/95 border border-slate-200 rounded-lg py-2 px-3.5 shadow-md hidden sm:flex items-center gap-2">
              <span className="text-[10px] text-teal-600 font-bold uppercase tracking-widest">Lobito Port</span>
              <span className="text-xs text-slate-700">Base Principal</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Custom simple inline Anchor icon to stay extremely distinct
function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="22" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <path d="M5 12a7 7 0 0 0 14 0" />
    </svg>
  );
}
