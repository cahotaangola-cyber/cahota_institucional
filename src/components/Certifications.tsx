import React from 'react';
import { Award, ShieldCheck, FileCheck, Calendar, Bookmark, Landmark, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { motion } from 'motion/react';

interface CertificationsProps {
  currentLang: Language;
}

export default function Certifications({ currentLang }: CertificationsProps) {
  const isPt = currentLang === 'pt';

  const certs = [
    {
      title: isPt ? "Alvará de Construção Civil" : "Civil Construction Licence",
      issuer: isPt ? "Ministério das Obras Públicas, Urbanismo e Habitação" : "Ministry of Public Works, Urbanism & Housing",
      authority: "IRCOP (Instituto Regulador da Construção e Obras Públicas)",
      docNum: "1378/CCOP/IRCOP/SC/2025",
      classification: isPt ? "05ª Classe (Até 550.000.000,00 AKZ)" : "Class 5 (Up to 550,000,000.00 AKZ)",
      issueDate: "19/09/2025",
      expiryDate: "19/09/2028",
      status: isPt ? "VÁLIDO" : "VALID",
      color: "amber",
      scope: isPt ? [
        "Edifícios, estruturas de betão armado e alvenarias",
        "Obras hidráulicas, saneamento e redes de águas",
        "Especialidades, fundações e instalações especiais",
        "Reabilitação, manutenção e infraestruturas industriais"
      ] : [
        "Buildings, reinforced concrete structures & masonry works",
        "Hydraulic engineering, drainage & water supply networks",
        "Specialties, structural foundations & civil utilities",
        "Industrial plants rehabilitation & site maintenance"
      ]
    },
    {
      title: isPt ? "Registo no Sector de Petróleos" : "Oil & Gas Registry Certificate",
      issuer: isPt ? "Agência Nacional de Petróleo, Gás e Biocombustíveis" : "National Agency for Petroleum, Gas & Biofuels",
      authority: "ANPG (Registo de Fornecedor)",
      docNum: "5001273264/CL-ANPG/2026",
      classification: isPt ? "Setor de Petróleo e Gás em Angola" : "Oil & Gas Sector in Angola",
      issueDate: "24/02/2026",
      expiryDate: "24/02/2027",
      status: isPt ? "ACTIVO" : "ACTIVE",
      color: "teal",
      scope: isPt ? [
        "Prestação de serviços sob regime transitório legal",
        "Habilitado para fornecimentos na cadeia de valor offshore/onshore",
        "Conformidade com a legislação petrolífera angolana",
        "Validação de aptidão técnica e idoneidade comercial"
      ] : [
        "Service provisioning under transitional legal framework",
        "Qualified for offshore and onshore value chain supply",
        "Full compliance with Angolan oil and gas sector regulations",
        "Verified technical readiness & corporate integrity standard"
      ]
    },
    {
      title: isPt ? "Certificado de Enquadramento MPME" : "MSME Framework Certificate",
      issuer: isPt ? "Ministério da Indústria e Comércio" : "Ministry of Industry and Commerce",
      authority: "INAPEM (Instituto de Apoio às MPME)",
      docNum: "96/2026",
      classification: isPt ? "Micro Empresa (Lei Nº 30/11)" : "Micro Enterprise (Law No. 30/11)",
      issueDate: "14/01/2026",
      expiryDate: isPt ? "Permanente / Emissão Ativa" : "Permanent / Active Standing",
      status: isPt ? "HOMOLOGADO" : "CERTIFIED",
      color: "blue",
      scope: isPt ? [
        "Fomento do conteúdo local e desenvolvimento nacional",
        "Participação ativa na economia e mercado preferencial",
        "Empresa 100% de capital nacional angolano registrada",
        "Facilitação tarifária e credibilidade institucional"
      ] : [
        "Local content promotion and national economic development",
        "Active standing in domestic markets & preferential tenders",
        "100% Angolan-owned corporate entity registration",
        "Institutional credibility and verified trade standing"
      ]
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
            {isPt ? "GARANTIA DE CONFORMIDADE" : "COMPLIANCE & CREDENTIALS"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isPt ? "Certificações & Habilitações Oficiais" : "Official Licenses & Corporate Registries"}
          </h2>
          <div className="h-1 w-12 bg-teal-500 mx-auto my-5 rounded"></div>
          <p className="text-slate-600 text-sm leading-relaxed">
            {isPt 
              ? "A CAHOTA LDA opera em total consonância com os marcos legais da República de Angola, devidamente licenciada e regulada sob as entidades ministeriais competentes para atuar nos setores de Construção Civil, Logística Marítima e Energia."
              : "CAHOTA LDA operates in perfect synergy with the legal frameworks of the Republic of Angola, fully vetted and licensed by the competent ministerial bodies to execute works in Civil Engineering, Marine Logistics, and Energy."}
          </p>
        </div>

        {/* Certifications Card Fleet */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => {
            const isAmber = cert.color === 'amber';
            const isTeal = cert.color === 'teal';
            const borderAccentClass = isAmber 
              ? "hover:border-amber-500/40" 
              : isTeal 
                ? "hover:border-teal-500/40" 
                : "hover:border-blue-500/40";
                
            const backgroundHeaderClass = isAmber 
              ? "bg-amber-500/5 text-amber-700" 
              : isTeal 
                ? "bg-teal-500/5 text-teal-700" 
                : "bg-blue-500/5 text-blue-700";

            const statusBadgeClass = isAmber 
              ? "bg-amber-100 text-amber-800 border-amber-200" 
              : isTeal 
                ? "bg-emerald-100 text-emerald-800 border-emerald-200" 
                : "bg-blue-100 text-blue-800 border-blue-200";

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all ${borderAccentClass}`}
              >
                {/* Visual Seal Header container */}
                <div>
                  <div className="p-6 border-b border-slate-100 relative">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${statusBadgeClass} tracking-wide font-mono flex items-center gap-1`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {cert.status}
                      </span>
                      <div className={`p-2.5 rounded-xl ${backgroundHeaderClass} border border-slate-100`}>
                        {isAmber && <Landmark className="h-5 w-5" />}
                        {isTeal && <ShieldCheck className="h-5 w-5" />}
                        {!isAmber && !isTeal && <Award className="h-5 w-5" />}
                      </div>
                    </div>
                    
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold block mb-1">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium font-mono mt-2 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1.5 inline-block">
                      Ref: {cert.docNum}
                    </p>
                  </div>

                  {/* Classification details */}
                  <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono block">
                        {isPt ? "Habilitação / Grau" : "Classification"}
                      </span>
                      <span className="font-bold text-slate-900">
                        {cert.classification}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono block">
                        {isPt ? "Entidade Reguladora" : "Regulator body"}
                      </span>
                      <span className="font-semibold text-slate-700 truncate block">
                        {cert.authority}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points scope of work */}
                  <div className="p-6 space-y-3.5">
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">
                      {isPt ? "Âmbito de Actuação" : "Authorized Scope of Works"}
                    </h4>
                    <ul className="space-y-2.5">
                      {cert.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer validation seal */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-450" />
                    <span>
                      {isPt ? "Validade:" : "Valid until:"} <strong className="text-slate-800">{cert.expiryDate}</strong>
                    </span>
                  </div>
                  <span className="text-[9px] text-emerald-600 bg-emerald-50 border border-emerald-100/80 px-2 py-0.5 rounded font-bold">
                    VERIFICADO
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory NIF Notice */}
        <div className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-500/10 text-teal-600 rounded-xl border border-teal-500/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">
                {isPt ? "Conformidade Fiscal Registo e Identidade" : "Tax Compliance, Registration & Trademark Status"}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {isPt 
                  ? "Sede registrada em Luanda (Centralidade do Kilamba) sob o Número de Identificação Fiscal (NIF) 5001273264 em conformidade tributária activa."
                  : "Headquarters registered in Luanda (Centralidade do Kilamba) under Tax Identification Number (NIF) 5001273264 with active fiscal standing."}
              </p>
            </div>
          </div>
          <div className="text-xs font-mono bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-700 shrink-0">
            NIF: <span className="font-bold text-slate-900">5001273264</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// Inline fallback check indicator to prevent compile error with missing standard icon names
function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
