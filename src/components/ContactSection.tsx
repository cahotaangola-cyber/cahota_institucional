import React from 'react';
import { Phone, Mail, MapPin, Clock, FileCheck, Compass, MessageSquare, Anchor } from 'lucide-react';
import { translations, Language } from '../types';
import { getSetting } from '../config';

interface ContactSectionProps {
  currentLang: Language;
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const t = translations[currentLang];

  const phonesList = [
    { 
      number: getSetting('phoneLuanda'), 
      label: currentLang === 'pt' ? 'Escritório Luanda (Sede)' : 'Luanda HQ Office', 
      whatsapp: getSetting('whatsappLuanda') 
    },
    { 
      number: getSetting('phoneLobito'), 
      label: currentLang === 'pt' ? 'Atendimento Lobito / Filial Marítima' : 'Lobito Branch / Marine Desk', 
      whatsapp: getSetting('whatsappLobito') 
    }
  ];

  const email = getSetting('email');
  const nif = getSetting('nif');
  const addressLuanda = getSetting('addressLuanda');
  const addressLobito = getSetting('addressLobito');  return (
    <section id="contact" className="py-24 bg-white relative border-t border-slate-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
            {currentLang === 'pt' ? "CANAIS DE COMUNICAÇÃO" : "COMMUNICATION DESK"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto my-5 rounded"></div>
          <p className="text-slate-500 text-sm">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Direct Action Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                     {/* Main Phone card with WhatsApp quick launch triggers */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-900 font-bold text-base mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-600" />
                {t.contactPhone}
              </h3>
              <div className="space-y-4">
                {phonesList.map((ph, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-3 group">
                    <div>
                      <span className="text-[10px] text-slate-500 font-mono block uppercase">{ph.label}</span>
                      <a 
                        href={`tel:${ph.number.replace(/\s+/g, '')}`} 
                        className="text-slate-950 font-bold hover:text-amber-600 transition-colors block text-sm sm:text-base mt-0.5"
                      >
                        {ph.number}
                      </a>
                    </div>
                    
                    <a 
                      href={`https://wa.me/${ph.whatsapp}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-emerald-500/10 hover:bg-emerald-600 text-emerald-600 hover:text-white border border-emerald-500/20 p-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 text-xs font-bold"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email and Corporate ID card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-900 font-bold text-base mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-600" />
                {t.contactEmail}
              </h3>
              <a 
                href={`mailto:${email}`} 
                className="bg-white hover:bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between group transition-colors block"
              >
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block uppercase">E-MAIL GERAL REQUISICÕES</span>
                  <span className="text-slate-950 font-bold text-sm sm:text-base group-hover:text-amber-600 transition-colors">{email}</span>
                </div>
                <div className="bg-amber-500/10 text-amber-600 p-2 rounded-lg border border-amber-500/20">
                  <Mail className="h-4 w-4" />
                </div>
              </a>
            </div>

            {/* Regulatory NIF Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 text-amber-600 border border-amber-500/20 p-2.5 rounded-xl">
                  <FileCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 font-mono uppercase tracking-wider">Identificação Fiscal</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">NIF: {nif}</p>
                </div>
              </div>
              <span className="text-[10px] bg-white border border-slate-200 py-1 px-2.5 rounded-full text-slate-500 font-mono">
                REGISTADO
              </span>
            </div>

          </div>

          {/* Right Side: High-End Geographic Operations Dashboard */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            
            <div className="space-y-6">
              <h3 className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-2">
                <Compass className="h-5 w-5 text-amber-600" />
                {currentLang === 'pt' ? 'Geolocalização das Nossas Bases' : 'Geographic Operational Hubs'}
              </h3>

              {/* Styled Geographic map representation */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                
                {/* Office 1 Sede */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 text-amber-600 border border-amber-500/20 p-2.5 rounded-lg shrink-0 mt-0.5">
                    <Anchor className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 flex items-center gap-2">
                      {t.officeHeadOffice}
                      <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full " />
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {addressLuanda}
                    </p>
                    <p className="text-[10px] text-amber-600 font-semibold font-mono mt-1.5 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {currentLang === 'pt' ? 'Sede Administrativa Geral' : 'General Head Office'}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200" />

                {/* Office 2 Representacao */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 text-blue-600 border border-blue-500/20 p-2.5 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 flex items-center gap-2">
                      {t.officeBranchOffice}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {addressLobito}
                    </p>
                    <p className="text-[10px] text-blue-600 font-semibold font-mono mt-1.5 flex items-center gap-1">
                      <Anchor className="h-3 w-3" />
                      {currentLang === 'pt' ? 'Porto do Lobito & Estrada Nacional Nº 100' : 'Port of Lobito & National Highway No. 100'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating hours */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs">
                <Clock className="h-5 w-5 text-amber-600 shrink-0" />
                <div>
                  <span className="text-slate-500 font-bold block uppercase text-[9px] font-mono">{t.contactHours}</span>
                  <span className="text-slate-700 font-semibold">{t.contactHoursValue}</span>
                </div>
              </div>
              
              <div className="text-left sm:text-right font-mono text-[9px] text-slate-500 uppercase">
                <p>NIF Legal: {nif}</p>
                <p className="mt-0.5">www.cahota.ao</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
