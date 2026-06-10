import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ChevronRight, ListCollapse, Ship, FileSpreadsheet, Hourglass, Trash2 } from 'lucide-react';
import { translations, Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteFormProps {
  currentLang: Language;
  selectedService: string;
  onServiceReset: () => void;
}

interface SavedInquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  urgency: string;
  details: string;
  port: string;
  date: string;
  status: 'Pending' | 'Reviewing' | 'Approved';
}

export default function QuoteForm({ currentLang, selectedService, onServiceReset }: QuoteFormProps) {
  const t = translations[currentLang];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    urgency: 'Standard',
    port: 'Lobito',
    details: ''
  });

  const [inquiries, setInquiries] = useState<SavedInquiry[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmittedInquiry, setLastSubmittedInquiry] = useState<SavedInquiry | null>(null);

  // Sync selected service if changed from parent
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cahota_quotes');
      if (stored) {
        setInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load quotes from storage", e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      return;
    }

    const newInquiry: SavedInquiry = {
      id: "CH-" + Math.floor(100000 + Math.random() * 900000),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service || 'Ship Chandling',
      urgency: formData.urgency,
      port: formData.port,
      details: formData.details,
      date: new Date().toLocaleDateString(currentLang === 'pt' ? 'pt-AO' : 'en-US'),
      status: 'Pending'
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem('cahota_quotes', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setLastSubmittedInquiry(newInquiry);
    setIsSuccess(true);
    onServiceReset(); // Reset parent selection

    // Reset Form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      urgency: 'Standard',
      port: 'Lobito',
      details: ''
    });
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('cahota_quotes', JSON.stringify(updated));
  };

  return (
    <section id="quote" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-3 font-mono">
            {currentLang === 'pt' ? "PROPOSTA COMERCIAL RÁPIDA" : "FAST COMMERCIAL OFFER"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.quoteTitle}
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto my-5 rounded"></div>
          <p className="text-slate-500 text-sm">
            {t.quoteSubtitle}
          </p>
        </div>
 
        {/* Layout split: Form Left, Active Inquiries Right (Simulated CRM Desk) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
 
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="quote-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                        {t.quoteFormName} *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="e.g. Eng. Pedro Santos"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all"
                      />
                    </div>
 
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                        {t.quoteFormCompany} *
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        required
                        placeholder="e.g. NAVITRANS Vessel A"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
 
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                        {t.quoteFormEmail} *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="geral@empresa.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all"
                      />
                    </div>
 
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                        {t.quoteFormPhone}
                      </label>
                      <input 
                        type="text" 
                        name="phone"
                        placeholder="e.g. +244 9..."
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
 
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                        {t.quoteFormService}
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all appearance-none"
                      >
                        <option value="Ship Chandling">Ship Chandling</option>
                        <option value="Technical Supply">Technical Supply</option>
                        <option value="Food Supply">Food Supply</option>
                        <option value="Logistics">Supply Chain & Logistics</option>
                        <option value="Corporate Image Management">{currentLang === 'pt' ? 'Gestão de Imagem Corporativa' : 'Corporate Image Management'}</option>
                        <option value="Technological Solutions">{currentLang === 'pt' ? 'Soluções Tecnológicas' : 'Technological Solutions'}</option>
                        <option value="Insurance Services">{currentLang === 'pt' ? 'Serviços de Seguros' : 'Insurance Services'}</option>
                        <option value="Occupational Health & Medicine">{currentLang === 'pt' ? 'Medicina Ocupacional' : 'Occupational Health & Medicine'}</option>
                        <option value="Civil Construction & Maintenance">{currentLang === 'pt' ? 'Construção Civil' : 'Civil Construction & Maintenance'}</option>
                      </select>
                    </div>
 
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                        Port / Destination
                      </label>
                      <select 
                        name="port"
                        value={formData.port}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all appearance-none"
                      >
                        <option value="Lobito">Port of Lobito (Sede)</option>
                        <option value="Luanda">Port of Luanda</option>
                        <option value="Offshore Zone">Offshore Block Angola</option>
                      </select>
                    </div>
 
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                        {t.quoteFormUrgency}
                      </label>
                      <select 
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all appearance-none"
                      >
                        <option value="Standard">Standard Bid (72h)</option>
                        <option value="Express">Express Supply (12h-24h)</option>
                        <option value="Critical">Immediate / Crew Awaiting (Urgent)</option>
                      </select>
                    </div>
                  </div>
 
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">
                      {t.quoteFormDetails} *
                    </label>
                    <textarea 
                      name="details"
                      required
                      rows={4}
                      placeholder={currentLang === 'pt' ? "Indique a lista de materiais, provimentos de alimentos ou requisitos logísticos específicos do seu navio..." : "Describe the list of stores, engine tools, catering details or logistics criteria needed..."}
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none transition-all"
                    />
                  </div>
 
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-4 rounded-xl text-sm flex items-center justify-center gap-2.5 shadow-sm transition-all transform hover:scale-[1.01]"
                  >
                    <Send className="h-4 w-4" />
                    <span>{t.quoteFormSubmit}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {t.quoteSuccessTitle}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                    {t.quoteSuccessMessage}
                  </p>
 
                  {/* Dynamic invoice card */}
                  {lastSubmittedInquiry && (
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left max-w-sm mx-auto font-mono text-xs text-slate-600 space-y-3 relative mb-8 shadow-sm">
                      <div className="absolute top-3 right-3 bg-amber-500/10 text-amber-600 border border-amber-500/20 py-0.5 px-2 rounded-full text-[9px] font-bold">
                        {lastSubmittedInquiry.status.toUpperCase()}
                      </div>
                      
                      <div className="border-b border-slate-200 pb-3">
                        <p className="text-slate-950 font-bold text-sm tracking-wide">CAHOTA LDA ESTIMATE</p>
                        <p className="text-[10px] text-slate-450 mt-1">Receipt ID: {lastSubmittedInquiry.id}</p>
                      </div>
                      <div className="flex justify-between">
                        <span>Client:</span>
                        <span className="text-slate-800 font-bold">{lastSubmittedInquiry.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Selected Scope:</span>
                        <span className="text-slate-800 font-bold">{lastSubmittedInquiry.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Destination:</span>
                        <span className="text-slate-800 font-bold">Port of {lastSubmittedInquiry.port}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-3">
                        <span>Urgency:</span>
                        <span className={`font-bold ${lastSubmittedInquiry.urgency === 'Critical' ? 'text-red-600' : 'text-amber-600'}`}>{lastSubmittedInquiry.urgency}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 italic mt-2">
                        A dynamic notification has been sent to our dispatchers in Lobito Bay (+244 929 071 923).
                      </p>
                    </div>
                  )}
 
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-amber-600 border border-amber-500/30 hover:bg-amber-500/10 font-bold px-6 py-2.5 rounded-lg text-xs transition-colors"
                  >
                    {currentLang === 'pt' ? 'Fazer Novo Pedido de Cotação' : 'Submit Another Request'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
 
          {/* Right Column: Simulated CRM / Saved Local Quotes Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Live Operational Hotline */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold text-slate-550 tracking-wider font-mono uppercase mb-4">
                {currentLang === 'pt' ? 'Atendimento Prioritário Especial' : 'Priority Port Dispatch Desks'}
              </h4>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/244929071923" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⚓</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Lobito Office (+244 929 071 923)</p>
                      <p className="text-[10px] text-slate-500 font-mono">Central Geral e Orçamentos</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </a>
 
                <a 
                  href="https://wa.me/244935325219" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🚛</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Luanda Desk (+244 935 325 219)</p>
                      <p className="text-[10px] text-slate-500 font-mono">Representação & Operação</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </a>
              </div>
            </div>
 
            {/* Active quote orders tracker (Durable local database visualization) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex-1 flex flex-col shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
                  <ListCollapse className="h-4 w-4 text-amber-500" />
                  {currentLang === 'pt' ? 'Consola de Acompanhamento' : 'My Requests Tracker'}
                </span>
                <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded font-mono">
                  {inquiries.length} {currentLang === 'pt' ? 'Ativo(s)' : 'Active'}
                </span>
              </div>
 
              {inquiries.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center py-10 text-center text-slate-500 font-mono text-xs">
                  <p>No active local inquiries saved.</p>
                  <p className="text-[10px] text-slate-400 mt-2">Submit the form on the left to test the active tracking engine.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {inquiries.map((inq) => (
                    <div 
                      key={inq.id} 
                      className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs text-slate-700"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 font-mono">{inq.id}</span>
                          <span className="text-[9px] text-slate-500">{inq.date}</span>
                        </div>
                        <p className="text-slate-650 font-medium truncate max-w-[200px]">{inq.company} · {inq.service}</p>
                        <div className="flex items-center gap-1.5 text-[9px] text-amber-600">
                          <Hourglass className="h-2.5 w-2.5" />
                          <span>Status: Pendente (em avaliação rápida)</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => deleteInquiry(inq.id)}
                        className="text-slate-400 hover:text-red-500 p-1.5 rounded transition-colors shrink-0"
                        title="Delete record"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
