import React from 'react';
import { Shield, Quote, Star } from 'lucide-react';
import { translations, Language } from '../types';

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
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 32 C 25 18, 40 18, 55 26 C 65 32, 75 28, 85 16" stroke="#0ea5e9" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M15 39 C 28 28, 43 25, 58 33 C 68 39, 78 34, 88 22" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
          <text x="96" y="26" fill="#0f172a" fontWeight="900" fontSize="13" letterSpacing="0.5">NAVI</text>
          <text x="96" y="37" fill="#0ea5e9" fontWeight="705" fontSize="10.5" letterSpacing="0.8">TRANS</text>
        </svg>
      );
    }
    
    if (n.includes('telford')) {
      return (
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="8" width="34" height="34" rx="6" fill="#1e293b" />
          <path d="M20 20 H34 M27 20 V32" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
          <circle cx="27" cy="15" r="2.5" fill="#f97316" />
          <text x="54" y="25" fill="#1e293b" fontWeight="800" fontSize="12.5" letterSpacing="0.2">TELFORD</text>
          <text x="54" y="37" fill="#64748b" fontWeight="700" fontSize="8.5" letterSpacing="0.5">OFFSHORE</text>
        </svg>
      );
    }

    if (n.includes('executive')) {
      return (
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 38 L27 10 L42 38 Z" fill="#d97706" />
          <path d="M20 38 L27 21 L34 38 Z" fill="#ffffff" opacity="0.85" />
          <text x="50" y="25" fill="#111827" fontWeight="900" fontSize="12" fontStyle="italic" letterSpacing="0.3">EXECUTIVE</text>
          <text x="50" y="37" fill="#d97706" fontWeight="700" fontSize="9" letterSpacing="1">SHIPPING</text>
        </svg>
      );
    }

    if (n.includes('plus')) {
      return (
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="25" r="15" fill="#0891b2" />
          <path d="M21 25 H31 M26 20 V30" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="36" cy="15" r="4" fill="#f97316" />
          <text x="52" y="26" fill="#0f172a" fontWeight="800" fontSize="13.5" letterSpacing="0.5">PLUS</text>
          <text x="52" y="37" fill="#0891b2" fontWeight="700" fontSize="9.5" letterSpacing="1">SHIPPING</text>
        </svg>
      );
    }

    if (n.includes('bfa')) {
      return (
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 25 L21 11 L36 11 L45 25 L36 39 L21 39 Z" fill="#f97316" />
          <circle cx="28.5" cy="25" r="6" fill="#ffffff" />
          <text x="55" y="26" fill="#f97316" fontWeight="950" fontSize="18" letterSpacing="-0.5">BFA</text>
          <text x="56" y="38" fill="#dc2626" fontWeight="800" fontSize="9.5" letterSpacing="1.5">SOLIDÁRIO</text>
        </svg>
      );
    }

    if (n.includes('sos') || n.includes('criança')) {
      return (
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="34" height="34" rx="17" fill="#1d4ed8" />
          <path d="M25 15 L32 21 V31 H18 V21 Z" fill="#ffffff" opacity="0.3" />
          <path d="M25 18 L19 23 L20 24 L25 20 L30 24 L31 23 Z" fill="#ffffff" />
          <circle cx="21" cy="26" r="2.5" fill="#ffffff" />
          <circle cx="29" cy="26" r="2.5" fill="#ffffff" />
          <text x="50" y="25" fill="#1d4ed8" fontWeight="900" fontSize="16" letterSpacing="0.5">SOS</text>
          <text x="50" y="37" fill="#475569" fontWeight="700" fontSize="7.5" letterSpacing="0.1">ALDEIAS DE CRIANÇAS</text>
        </svg>
      );
    }

    if (n.includes('wiliet')) {
      return (
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8 H36 V26 C36 34, 23 41, 23 41 C 23 41, 10 34, 10 26 Z" fill="#1e3a8a" />
          <text x="23" y="27" fill="#f59e0b" fontWeight="900" fontSize="15" textAnchor="middle">W</text>
          <text x="46" y="25" fill="#1e3a8a" fontWeight="900" fontSize="13.5" letterSpacing="0.3">WILIET</text>
          <text x="46" y="37" fill="#f59e0b" fontWeight="800" fontSize="10" letterSpacing="2.5">CRÉDITO</text>
        </svg>
      );
    }

    if (n.includes('politécnico') || n.includes('ispo')) {
      return (
        <svg viewBox="0 0 160 50" className="h-11 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 8 L40 16 L25 24 L10 16 Z" fill="#0f766e" />
          <path d="M15 21.5 V31 C15 35, 25 38, 25 38 C25 38, 35 35, 35 31 V21.5" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" />
          <text x="48" y="26" fill="#0f766e" fontWeight="900" fontSize="15">ISPO</text>
          <text x="48" y="37" fill="#64748b" fontWeight="700" fontSize="7.5" letterSpacing="0.2">OMBAKA POLITÉCNICO</text>
        </svg>
      );
    }

    if (n.includes('yango')) {
      return (
        <svg viewBox="0 0 160 50" className="h-10 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="152" height="30" rx="15" fill="#facc15" />
          <text x="80" y="31.5" fill="#000000" fontWeight="900" fontSize="20" fontStyle="italic" textAnchor="middle" letterSpacing="2">YANGO</text>
        </svg>
      );
    }

    if (n.includes('heetch')) {
      return (
        <svg viewBox="0 0 160 50" className="h-10 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heetchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect x="4" y="10" width="152" height="30" rx="8" fill="url(#heetchGrad)" />
          <text x="80" y="31.5" fill="#ffffff" fontWeight="900" fontSize="19" textAnchor="middle" letterSpacing="0.5">heetch</text>
        </svg>
      );
    }

    if (n.includes('bolt')) {
      return (
        <svg viewBox="0 0 160 50" className="h-10 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="25" r="14" fill="#10b981" />
          <path d="M24 21 L33 25 L22 27 L31 31" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="51" y="33" fill="#111827" fontWeight="900" fontSize="22" letterSpacing="-0.5">bolt</text>
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 160 50" className="h-10 w-auto max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {clientsList.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-350 transition-all text-center flex flex-col justify-between items-center shadow-sm hover:shadow-md group relative overflow-hidden min-h-[190px]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500/0 group-hover:bg-amber-500 transition-all duration-300" />
              
              {/* Partner Logo Wrapper */}
              <div className="flex-1 flex items-center justify-center w-full py-2">
                <div className="duration-300 group-hover:scale-[1.04] transition-transform flex items-center justify-center w-full">
                  {renderPartnerLogo(client.name)}
                </div>
              </div>

              {/* Inner details */}
              <div className="w-full mt-4">
                <h4 className="text-xs font-bold text-slate-800 transition-colors line-clamp-1">
                  {client.name}
                </h4>
                <p className="text-[9px] text-slate-450 mt-1 uppercase tracking-wider font-mono line-clamp-1 border-t border-slate-100 pt-2.5">
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
