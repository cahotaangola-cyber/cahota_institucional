import React from 'react';
import { Ship, Shield, CheckCircle, Quote, Star } from 'lucide-react';
import { translations, Language } from '../types';

interface ClientsProps {
  currentLang: Language;
}

export default function Clients({ currentLang }: ClientsProps) {
  const t = translations[currentLang];

  const clientsList = [
    { name: "NAVITRANS Angola", type: "Maritime Shipping Agent" },
    { name: "Telford Offshore (Angola) Limitada", type: "Oil & Gas Offshore Contractor" },
    { name: "Executive Shipping", type: "Vessel Carrier Operator" },
    { name: "Plus Shipping Lda", type: "Specialized Tanker & Port Logistics" }
  ];

  const feedbackList = [
    {
      name: "Procurement Lead",
      role: "Telford Offshore (Angola) Lda",
      quote: currentLang === 'pt' 
        ? "Excelente tempo de resposta para suprimentos técnicos na Baía de Lobito. Altamente profissionais e confiáveis." 
        : "Excellent response time for specialized technical supply requests at Lobito Bay. Highly professional and dependable team.",
      rating: 5
    },
    {
      name: "Operations Coordinator",
      role: "NAVITRANS Angola",
      quote: currentLang === 'pt'
        ? "O abastecimento de Ship Chandling da Cahota Lda atende a todos os critérios internacionais de qualidade e conformidade das tripulações."
        : "Cahota Lda's Ship Chandling provisions consistently meet all international quality and crew compliance standards.",
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-24 bg-slate-100/60 border-t border-slate-200 relative">
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
            {currentLang === 'pt' ? "PORTFÓLIO DE PARCEIROS" : "PARTNER PORTFOLIO"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.clientsTitle}
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto my-5 rounded"></div>
          <p className="text-slate-500 text-sm">
            {t.clientsSubtitle}
          </p>
        </div>
 
        {/* Corporate Client logos/tags Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {clientsList.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all text-center flex flex-col justify-center items-center shadow-sm group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500/0 group-hover:bg-amber-500 transition-colors" />
              <div className="bg-slate-50 duration-300 group-hover:scale-105 p-3 rounded-full mb-3 text-slate-500 group-hover:text-amber-600 border border-slate-150">
                <Ship className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {client.name}
              </h4>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tight font-mono">
                {client.type}
              </p>
            </div>
          ))}
        </div>
 
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-8 border-t border-slate-200">
          {feedbackList.map((testi, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:border-slate-350 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-650 text-sm leading-relaxed italic relative z-10 pl-6">
                  <Quote className="h-4 w-4 text-slate-350 absolute top-0.5 left-0 shrink-0 select-none" />
                  "{testi.quote}"
                </p>
              </div>
 
              <div className="flex items-center justify-between border-t border-slate-150 mt-6 pt-4 text-xs font-mono">
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{testi.name}</h5>
                  <p className="text-slate-500 text-[10px] uppercase mt-0.5">{testi.role}</p>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 py-1 px-2.5 rounded-full font-bold">
                  {currentLang === 'pt' ? 'ENTREGA CONCLUÍDA' : 'DELIVERED OK'}
                </span>
              </div>
            </div>
          ))}
        </div>
 
        {/* Quality Assurance Badge */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-amber-550/10 border border-amber-500/20 p-3 rounded-xl text-amber-650 shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {currentLang === 'pt' ? 'Certificação e Conformidade Operacional' : 'Certification and Operational Compliance'}
              </h4>
              <p className="text-xs text-slate-600 leading-normal max-w-2xl mt-1">
                {t.clientsNote}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">TÔNICA REGULATÓRIA</span>
            <p className="text-xs text-slate-900 font-mono mt-0.5">NIF: 5001273264</p>
          </div>
        </div>
      </div>
    </section>
  );
}
