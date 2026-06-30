import React from 'react';
import { Shield, Quote, Star } from 'lucide-react';
import { translations, Language } from '../types';

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

interface ClientsProps {
  currentLang: Language;
}

export default function Clients({ currentLang }: ClientsProps) {
  const t = translations[currentLang];

  const clientsList = [
    { name: "NAVITRANS Angola", type: currentLang === 'pt' ? "Agente de Navegação Marítima" : "Maritime Shipping Agent" },
    { name: "Telford Offshore (Angola) Limitada", type: currentLang === 'pt' ? "Empreiteiro Offshore de Petróleo & Gás" : "Oil & Gas Offshore Contractor" },
    { name: "Executive Shipping", type: currentLang === 'pt' ? "Operador de Navios de Carga" : "Vessel Carrier Operator" },
    { name: "Plus Shipping Lda", type: currentLang === 'pt' ? "Logística Portuária de Petroleiros" : "Specialized Tanker & Port Logistics" },
    { name: "BFA Solidário", type: currentLang === 'pt' ? "Responsabilidade Social & Filantropia" : "Social Responsibility & Philanthropy" },
    { name: "ADPP Angola", type: currentLang === 'pt' ? "ONG / Desenvolvimento Comunitário & Educação" : "NGO / Community Development & Education" },
    { name: "Aldeias de Criança SOS", type: currentLang === 'pt' ? "Apoio Social & Desenvolvimento Infantil" : "Social Support & Child Development" },
    { name: "WILIET Crédito", type: currentLang === 'pt' ? "Instituição de Microcrédito & Finanças" : "Microcredit & Financial Services" },
    { name: "Instituto Superior Politécnico Ombaka (ISPO)", type: currentLang === 'pt' ? "Educação & Formação Superior" : "Higher Education & Academic Centre" },
    { name: "Yango", type: currentLang === 'pt' ? "Parceiro de Mobilidade & Transporte" : "Mobility & Ride-Hailing Partner" },
    { name: "Heetch", type: currentLang === 'pt' ? "Parceiro de Mobilidade & Transporte" : "Mobility & Ride-Hailing Partner" },
    { name: "Bolt", type: currentLang === 'pt' ? "Parceiro de Mobilidade & Transporte" : "Mobility & Ride-Hailing Partner" }
  ];

  const renderPartnerLogo = (name: string) => {
    const n = name.toLowerCase();

    if (n.includes('navitrans')) {
      return (
        <img 
          src={navitransImg} 
          alt="NAVITRANS Angola" 
          className="h-18 sm:h-22 md:h-[92px] w-auto max-w-full object-contain transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }
    
    if (n.includes('telford')) {
      return (
        <img 
          src={telfordImg} 
          alt="Telford Offshore" 
          className="h-18 sm:h-22 md:h-[92px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('executive')) {
      return (
        <svg viewBox="0 0 160 50" className="h-16 sm:h-18 md:h-[78px] w-auto max-w-full transition-all" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 38 L27 10 L42 38 Z" fill="#d97706" />
          <path d="M20 38 L27 21 L34 38 Z" fill="#ffffff" opacity="0.85" />
          <text x="50" y="25" fill="#111827" fontWeight="900" fontSize="12" fontStyle="italic" letterSpacing="0.3">EXECUTIVE</text>
          <text x="50" y="37" fill="#d97706" fontWeight="700" fontSize="9" letterSpacing="1">SHIPPING</text>
        </svg>
      );
    }

    if (n.includes('plus')) {
      return (
        <img 
          src={plusImg} 
          alt="Plus Shipping" 
          className="h-18 sm:h-22 md:h-[92px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('bfa')) {
      return (
        <img 
          src={bfaImg} 
          alt="BFA" 
          className="h-18 sm:h-22 md:h-[84px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('adpp')) {
      return (
        <img 
          src={adppImg} 
          alt="ADPP Angola" 
          className="h-18 sm:h-22 md:h-[92px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('sos') || n.includes('criança')) {
      return (
        <img 
          src={aldeiasImg} 
          alt="Aldeias de Crianças SOS Angola" 
          className="h-18 sm:h-22 md:h-[90px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('wiliet')) {
      return (
        <img 
          src={wilieteImg} 
          alt="Wiliete Crédito" 
          className="h-20 sm:h-24 md:h-[104px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('politécnico') || n.includes('ispo')) {
      return (
        <img 
          src={ombakaImg} 
          alt="Instituto Superior Politécnico Ombaka (ISPO)" 
          className="h-20 sm:h-24 md:h-[108px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('yango')) {
      return (
        <img 
          src={yangoImg} 
          alt="Yango" 
          className="h-15 sm:h-17 md:h-[68px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('heetch')) {
      return (
        <img 
          src={heetchImg} 
          alt="Heetch" 
          className="h-15 sm:h-17 md:h-[68px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (n.includes('bolt')) {
      return (
        <img 
          src={boltImg} 
          alt="Bolt" 
          className="h-16 sm:h-18 md:h-[72px] w-auto max-w-full object-contain mix-blend-multiply transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    return (
      <svg viewBox="0 0 160 50" className="h-12 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="34" height="34" rx="17" fill="#64748b" opacity="0.1" />
        <text x="27" y="30" fill="#475569" fontWeight="800" fontSize="16" textAnchor="middle">★</text>
        <text x="52" y="29" fill="#1e293b" fontWeight="800" fontSize="12" letterSpacing="0.5">{name.toUpperCase()}</text>
      </svg>
    );
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {clientsList.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-350 transition-all text-center flex flex-col justify-between items-center shadow-sm hover:shadow-md group relative overflow-hidden min-h-[230px]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500/0 group-hover:bg-amber-500 transition-all duration-300" />
              
              {/* Partner Logo Wrapper */}
              <div className="flex-1 flex items-center justify-center w-full py-5">
                <div className="duration-300 group-hover:scale-[1.05] transition-transform flex items-center justify-center w-full">
                  {renderPartnerLogo(client.name)}
                </div>
              </div>

              {/* Inner details */}
              <div className="w-full mt-4 border-t border-slate-100 pt-3">
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono line-clamp-2">
                  {client.type}
                </p>
              </div>
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
