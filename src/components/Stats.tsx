import React from 'react';
import { Calendar, CheckCircle2, ShieldAlert, Award, Compass, Warehouse } from 'lucide-react';
import { translations, Language } from '../types';
import { motion } from 'motion/react';

interface StatsProps {
  currentLang: Language;
}

export default function Stats({ currentLang }: StatsProps) {
  const t = translations[currentLang];

  const highlights = [
    {
      icon: <Calendar className="h-7 w-7 text-teal-600" />,
      value: "3+",
      label: currentLang === 'pt' ? 'Anos de Atuação em Angola' : 'Years Operating in Angola',
      desc: currentLang === 'pt' ? 'Experiência robusta em águas angolanas.' : 'Robust experience in Angolan waters.',
      accent: 'text-teal-600'
    },
    {
      icon: <CheckCircle2 className="h-7 w-7 text-emerald-600" />,
      value: "100%",
      label: currentLang === 'pt' ? 'Confiabilidade de Suprimentos' : 'Supply Chain Reliability',
      desc: currentLang === 'pt' ? 'Garantia de entrega perfeita sob contrato.' : 'Guaranteed perfect deliveries under contract.',
      accent: 'text-emerald-650'
    },
    {
      icon: <Compass className="h-7 w-7 text-amber-600" />,
      value: "24/7",
      label: currentLang === 'pt' ? 'Suporte em Emergências' : 'Emergency Assistance',
      desc: currentLang === 'pt' ? 'Prontidão permanente para navios e tripulações.' : 'Always ready for vessel crew and port queries.',
      accent: 'text-amber-650'
    },
    {
      icon: <Warehouse className="h-7 w-7 text-teal-600" />,
      value: "2+",
      label: currentLang === 'pt' ? 'Bases de Apoio' : 'Operational Bases',
      desc: currentLang === 'pt' ? 'Cobertura no Porto de Lobito e Luanda.' : 'Full coverage across Lobito Port and Luanda.',
      accent: 'text-teal-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 border-y border-slate-200/80 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Block: Presentation of Company */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
              // {t.aboutTitle.toUpperCase()}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              CAHOTA LDA · {currentLang === 'pt' ? 'Força, Agilidade e Eficiência' : 'Strength, Agility & Efficiency'}
            </h2>
            <p className="text-slate-650 text-base leading-relaxed mb-4">
              {t.aboutText1}
            </p>
            <p className="text-slate-650 text-base leading-relaxed">
              {t.aboutText2}
            </p>
          </div>
          
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-amber-500" />
              {currentLang === 'pt' ? 'Por que a Cahota?' : 'Why Choose Cahota?'}
            </h3>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                <span><strong>{currentLang === 'pt' ? 'Conhecimento Local:' : 'Local Knowledge:'}</strong> {currentLang === 'pt' ? 'Profundo entendimento dos trâmites alfandegários e regulamentações marítimas angolanas.' : 'Profounded understanding of Angolan port protocols and custom clearances.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span><strong>{currentLang === 'pt' ? 'Logística Ágil:' : 'Agile Logistics:'}</strong> {currentLang === 'pt' ? 'Frota de apoio terrestre e galpão de armazenamento estratégico no Lobito para despacho rápido.' : 'Ground fleet and strategic warehouse hubs in Lobito for instant ship-side dispatch.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                <span><strong>{currentLang === 'pt' ? 'Suporte Pós-Venda:' : 'After-sales Support:'}</strong> {currentLang === 'pt' ? 'Assistência de engenharia marítima e acompanhamento até a partida do porto.' : 'Marine engineering support and rigorous tracing until vessel port departure.'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-teal-500/40 transition-all flex flex-col justify-between"
            >
              <div className="mb-4 bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-100">
                {item.icon}
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono block tracking-tight">
                  {item.value}
                </span>
                <span className={`text-sm font-semibold ${item.accent} block mt-2`}>
                  {item.label}
                </span>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
