import React from 'react';
import { Calendar, CheckCircle2, ShieldAlert, Award, Compass, Warehouse } from 'lucide-react';
import { translations, Language } from '../types';
import { motion } from 'motion/react';
import { getSetting } from '../config';

interface StatsProps {
  currentLang: Language;
}

export default function Stats({ currentLang }: StatsProps) {
  const t = translations[currentLang];

  const highlights = [
    {
      icon: <Calendar className="h-7 w-7 text-teal-600" />,
      value: getSetting('stat3Value'), // Ex: "+120"
      label: currentLang === 'pt' ? getSetting('stat3LabelPt') : getSetting('stat3LabelEn'),
      desc: currentLang === 'pt' ? 'Experiência robusta em múltiplos setores.' : 'Robust experience in multiple sectors.',
      accent: 'text-teal-600'
    },
    {
      icon: <CheckCircle2 className="h-7 w-7 text-emerald-600" />,
      value: getSetting('stat1Value'), // Ex: "98%"
      label: currentLang === 'pt' ? getSetting('stat1LabelPt') : getSetting('stat1LabelEn'),
      desc: currentLang === 'pt' ? 'Processamento seguro sob rígido contrato de conformidade.' : 'Secure processing under strict compliance contracts.',
      accent: 'text-emerald-650'
    },
    {
      icon: <Compass className="h-7 w-7 text-amber-600" />,
      value: getSetting('stat2Value'), // Ex: "24/7"
      label: currentLang === 'pt' ? getSetting('stat2LabelPt') : getSetting('stat2LabelEn'),
      desc: currentLang === 'pt' ? 'Prontidão permanente para os nossos parceiros comerciais.' : 'Always at your service across all active divisions.',
      accent: 'text-amber-650'
    },
    {
      icon: <Warehouse className="h-7 w-7 text-teal-600" />,
      value: getSetting('stat4Value'), // Ex: "100%"
      label: currentLang === 'pt' ? getSetting('stat4LabelPt') : getSetting('stat4LabelEn'),
      desc: currentLang === 'pt' ? 'Presença física e apoio de logística de alcance nacional.' : 'Physical presence and logistical support with country-wide reach.',
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
                <span><strong>{currentLang === 'pt' ? 'Atuação Multissetorial:' : 'Multisector Scope:'}</strong> {currentLang === 'pt' ? 'Capacidade técnica comprovada em 10 divisões complementares de negócio, da Engenharia Civil e TI até Seguros e Mobilidade.' : 'Proven operational competence across 10 distinct divisions, from Civil Engineering and IT to Corporate Insurance and Mobility.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span><strong>{currentLang === 'pt' ? 'Presença Regional:' : 'Regional Presence:'}</strong> {currentLang === 'pt' ? 'Suporte em tempo real com sede em Luanda e filial em Lobito/Benguela, oferecendo alcance nacional flexível.' : 'Headquartered in Luanda with active presence in Lobito/Benguela, offering flexible country-wide operational support.'}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                <span><strong>{currentLang === 'pt' ? 'Excelência & Pós-Venda:' : 'Excellence & After-sales:'}</strong> {currentLang === 'pt' ? 'Assistência pós-venda contínua, faturamento unificado para frotas de aplicativos e rigor de auditoria.' : 'Continuous user assistance, unified corporate billing for transport platforms, and rigorous procurement compliance.'}</span>
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
