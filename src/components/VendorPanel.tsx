import React, { useState } from 'react';
import { Copy, Check, FileText, Download, Mail, ExternalLink, Ship } from 'lucide-react';
import { translations, Language } from '../types';
import suppliesImage from '../assets/images/marine_supplies_1781037405066.png';
import Logo from './Logo';

interface VendorPanelProps {
  currentLang: Language;
}

export default function VendorPanel({ currentLang }: VendorPanelProps) {
  const t = translations[currentLang];
  const [buyerCompany, setBuyerCompany] = useState('');
  const [copied, setCopied] = useState(false);

  const displayCompany = buyerCompany.trim() || (currentLang === 'pt' ? 'Vossa Prestigiada Empresa' : 'Your Prestigious Organization');

  const letterText = `Assunto: APRESENTAÇÃO CORPORATIVA - CAHOTA LDA (NIF: 5001273264)
Para: Departamento de Aprovisionamento / Equipa de Compras de ${displayCompany}

Prezada Equipe,

A CAHOTA LDA é uma empresa angolana com sede em Luanda, no Ed. W5, Centralidade do Kilamba, com filial operacional ativa em Benguela (Lobito) e nos principais portos do país. Operamos no fornecimento técnico qualificado e na prestação de serviços especializados, abrangendo construção civil, suprimentos e logística aos setores marítimo, offshore e industrial angolano.

O nosso escopo de atuação inclui:
1. Ship Chandling (Material de Convés, Cabina e Peças Homologadas)
2. Abastecimento Técnico (Maquinaria, Válvulas, Hidráulica e Equipamentos Offshore)
3. Abastecimento Alimentar (Provisões frescas, congeladas e secas sob cadeia de frio)
4. Cadeia de Suprimentos & Logística (Armazenamento, Desembaraço Aduaneiro e Porto)

Comprovamos a excelência do nosso serviço através do suporte contínuo a navios e petroleiras de renome que operam em Angola, incluindo NAVITRANS Angola, Telford Offshore (Angola) Limitada, Executive Shipping e Plus Shipping Lda.

Solicitamos respeitosamente a oportunidade de nos registar como fornecedor oficial aprovado (Approved Vendor) sob o vosso portal corporativo, visando apoiar as vossas necessidades e requisições quotidianas de forma fiável e profissional.

Atenciosamente,

CAHOTA LDA
NIF: 5001273264
Email: geral@cahota.ao | Website: www.cahota.ao
Contactos: +244 929 071 923 / +244 935 325 219`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadLetter = () => {
    const element = document.createElement("a");
    const file = new Blob([letterText], {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = `CAHOTA-Apresentacao-${buyerCompany.replace(/\s+/g, '-') || 'Parceria'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="vendor" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
            {currentLang === 'pt' ? "HOMOLOGAÇÃO DE FORNECEDORES" : "VENDOR COMPLIANCE & PORTAL"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.vendorTitle}
          </h2>
          <div className="h-1 w-12 bg-teal-500 mx-auto my-5 rounded"></div>
          <p className="text-slate-500 text-sm">
            {t.vendorSubtitle}
          </p>
        </div>
 
        {/* Split Grid: Generator Left, Supplies Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Presenter and Copier */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                  {currentLang === 'pt' ? 'Nome do Seu Organismo / Empresa' : 'Name of Your Procurement Organization'}
                </label>
                <input 
                  type="text" 
                  value={buyerCompany}
                  onChange={(e) => setBuyerCompany(e.target.value)}
                  placeholder="e.g. Chevron Angola, Sonangol, BP, Saipem..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none transition-all"
                />
              </div>
 
              {/* Dynamic Letter box */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 font-bold">
                    <FileText className="h-3.5 w-3.5 text-teal-600" />
                    {t.vendorDocHeading}
                  </span>
                  <span className="text-[10px] text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-500/20 font-bold">
                    {t.vendorNifText}
                  </span>
                </div>
                
                <div className="p-4 sm:p-5 h-[280px] overflow-y-auto font-mono text-[11px] text-slate-700 whitespace-pre-line leading-relaxed selection:bg-amber-500/30">
                  {letterText}
                </div>
              </div>
            </div>
 
            {/* Document Action toolbar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-200">
              <button
                onClick={copyToClipboard}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md transform hover:scale-[1.01]"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? (currentLang === 'pt' ? 'Copiado!' : 'Copied!') : (currentLang === 'pt' ? 'Copiar Carta' : 'Copy Letter')}</span>
              </button>
 
              <button
                onClick={downloadLetter}
                className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Download className="h-4 w-4 text-slate-500" />
                <span>{currentLang === 'pt' ? 'Descarregar TXT' : 'Download TXT'}</span>
              </button>
 
              <a
                href={`mailto:geral@cahota.ao?subject=Registo%20de%20Fornecedor%20-%20Cahota%20Lda&body=Prezada%20Equipa%20Cahota,%20gostariamos%20de%20receber%20a%20vossa%20proposta%20e%20NIF%20para%20homologacao%20comercial%20na%20nossa%20empresa:`}
                className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all text-center"
              >
                <Mail className="h-4 w-4 text-slate-500" />
                <span>{currentLang === 'pt' ? 'Enviar para Compras' : 'Email to Buy Desk'}</span>
              </a>
            </div>
 
          </div>
 
          {/* Right Column: Beautiful Supplies Photo & Procurement Card */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col md:flex-row lg:flex-col justify-between gap-6">
            
            {/* Supplies Custom Image Wrapper with rounded borders */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm group flex-1 min-h-[220px]">
              <img 
                src={suppliesImage} 
                alt="CAHOTA Offshore and Ship Chandling Supplies" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/25 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[9px] font-mono uppercase bg-teal-600 text-white font-extrabold px-2 py-1 rounded">
                  {currentLang === 'pt' ? 'QUALIDADE ASSEGURADA' : 'QUALITY ASSURED'}
                </span>
                <h4 className="text-sm font-bold text-white mt-2 drop-shadow">
                  {currentLang === 'pt' ? 'Suprimentos Técnicos e Marítimos' : 'Technical & Maritime Products'}
                </h4>
              </div>
            </div>
 
            {/* Quick credentials card with Brand Logo integration inside */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between flex-1 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold text-slate-500 tracking-wider font-mono uppercase">
                    {currentLang === 'pt' ? 'DADOS CADASTRAIS' : 'PROCURMENT DETAILS'}
                  </h4>
                  <Logo size="sm" showText={false} className="h-6 w-auto" />
                </div>
 
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="text-slate-400 text-[9px] block uppercase">NIF (Tax ID)</span>
                    <span className="text-slate-800 font-semibold">5001273264</span>
                  </div>
 
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="text-slate-400 text-[9px] block uppercase">HQ (Sede)</span>
                    <span className="text-slate-800 font-semibold truncate block">Luanda, Angola</span>
                  </div>
 
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="text-slate-400 text-[9px] block uppercase">E-Mail Oficial</span>
                    <span className="text-slate-800 font-semibold truncate block font-sans">geral@cahota.ao</span>
                  </div>
 
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="text-slate-400 text-[9px] block uppercase">Operação</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      3+ Anos Ativo
                    </span>
                  </div>
                </div>
              </div>
 
              <div className="pt-4 border-t border-slate-200 flex items-center justify-center">
                <Logo size="sm" showText={true} textColor="text-slate-600" subtitleColor="text-slate-500" className="opacity-90 max-w-[155px]" />
              </div>
            </div>
 
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
