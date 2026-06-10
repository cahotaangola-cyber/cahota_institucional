import React from 'react';
import { Ship, Cpu, Utensils, Route, ArrowUpRight, CheckCircle, Palette, Laptop, ShieldCheck, HeartPulse, Hammer } from 'lucide-react';
import { translations, Language } from '../types';
import { motion } from 'motion/react';

interface ServicesProps {
  currentLang: Language;
  onSelectServiceAndQuote: (serviceName: string) => void;
}

export default function Services({ currentLang, onSelectServiceAndQuote }: ServicesProps) {
  const t = translations[currentLang];

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Ship className="h-6 w-6 text-amber-500" />;
      case 1: return <Cpu className="h-6 w-6 text-amber-500" />;
      case 2: return <Utensils className="h-6 w-6 text-amber-500" />;
      case 3: return <Route className="h-6 w-6 text-amber-500" />;
      case 4: return <Palette className="h-6 w-6 text-amber-500" />;
      case 5: return <Laptop className="h-6 w-6 text-amber-500" />;
      case 6: return <ShieldCheck className="h-6 w-6 text-amber-500" />;
      case 7: return <HeartPulse className="h-6 w-6 text-amber-500" />;
      case 8: return <Hammer className="h-6 w-6 text-amber-500" />;
      default: return <Ship className="h-6 w-6 text-amber-500" />;
    }
  };

  const getServiceNameKey = (index: number) => {
    switch (index) {
      case 0: return 'Ship Chandling';
      case 1: return 'Technical Supply';
      case 2: return 'Food Supply';
      case 3: return 'Logistics';
      case 4: return 'Corporate Image Management';
      case 5: return 'Technological Solutions';
      case 6: return 'Insurance Services';
      case 7: return 'Occupational Health & Medicine';
      case 8: return 'Civil Construction & Maintenance';
      default: return '';
    }
  };

  const serviceList = [
    {
      name: t.service1Name,
      desc: t.service1Desc,
      points: t.service1Points,
      technicalTag: currentLang === 'pt' ? "Suprimentos de Bordo" : "Onboard Supplies",
      keyName: 'Ship Chandling'
    },
    {
      name: t.service2Name,
      desc: t.service2Desc,
      points: t.service2Points,
      technicalTag: currentLang === 'pt' ? "Equipamentos Náuticos" : "Nautical Gear",
      keyName: 'Technical Supply'
    },
    {
      name: t.service3Name,
      desc: t.service3Desc,
      points: t.service3Points,
      technicalTag: currentLang === 'pt' ? "Alimentação & Catering" : "Food Provisions & Catering",
      keyName: 'Food Supply'
    },
    {
      name: t.service4Name,
      desc: t.service4Desc,
      points: t.service4Points,
      technicalTag: currentLang === 'pt' ? "Operação de Armazém" : "Terminal Operation",
      keyName: 'Logistics'
    },
    {
      name: t.service5Name,
      desc: t.service5Desc,
      points: t.service5Points,
      technicalTag: currentLang === 'pt' ? "Imagem & Branding" : "Image & Branding",
      keyName: 'Corporate Image Management'
    },
    {
      name: t.service6Name,
      desc: t.service6Desc,
      points: t.service6Points,
      technicalTag: currentLang === 'pt' ? "TI & Inovação" : "IT & Innovation",
      keyName: 'Technological Solutions'
    },
    {
      name: t.service7Name,
      desc: t.service7Desc,
      points: t.service7Points,
      technicalTag: currentLang === 'pt' ? "Proteção & Riscos" : "Risk & Coverage",
      keyName: 'Insurance Services'
    },
    {
      name: t.service8Name,
      desc: t.service8Desc,
      points: t.service8Points,
      technicalTag: currentLang === 'pt' ? "Saúde & Segurança" : "Health & Safety",
      keyName: 'Occupational Health & Medicine'
    },
    {
      name: t.service9Name,
      desc: t.service9Desc,
      points: t.service9Points,
      technicalTag: currentLang === 'pt' ? "Infraestrutura" : "Infrastructure",
      keyName: 'Civil Construction & Maintenance'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
            {currentLang === 'pt' ? "SOLUÇÕES INTEGRADAS" : "INTEGRATED SOLUTIONS"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.servicesTitle}
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto my-5 rounded"></div>
          <p className="text-slate-500 text-base">
            {t.servicesSubtitle}
          </p>
        </div>
 
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header of service card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 shadow-inner">
                    {getIcon(index)}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2.5 py-1.5 rounded-full border border-slate-200/80">
                    {service.technicalTag}
                  </span>
                </div>
 
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
 
                {/* Scope Points */}
                <div className="space-y-3.5 mb-8">
                  {service.points.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Card Action */}
              <button
                onClick={() => onSelectServiceAndQuote(service.keyName)}
                className="w-full bg-slate-50 hover:bg-amber-500 text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-amber-500 font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>{currentLang === 'pt' ? "Solicitar Orçamento Deste Serviço" : "Request Quote For This Service"}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
