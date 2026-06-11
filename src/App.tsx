/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Clients from './components/Clients';
import VendorPanel from './components/VendorPanel';
import QuoteForm from './components/QuoteForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [selectedService, setSelectedService] = useState<string>('');
  const [activePage, setActivePage] = useState<string>('home');

  const handleSelectServiceAndQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setActivePage('quote');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigateToQuote = () => {
    setActivePage('quote');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigateToServices = () => {
    setActivePage('services');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <div key="home" className="w-full">
            {/* Hero landing space */}
            <Hero 
              currentLang={currentLang} 
              onNavigateToQuote={handleNavigateToQuote}
              onNavigateToServices={handleNavigateToServices}
            />
            {/* Quick overview of key stats and corporate identity */}
            <Stats currentLang={currentLang} />
          </div>
        );

      case 'about':
        return (
          <div key="about" className="pt-20 w-full animate-fadeIn">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative max-w-4xl mx-auto px-4 z-10">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-[10px] font-mono block mb-3">
                  {currentLang === 'pt' ? 'QUEM SOMOS' : 'CORPORATE PROFILE'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {currentLang === 'pt' ? 'Apresentação Corporativa' : 'About CAHOTA LDA'}
                </h1>
                <div className="h-1 w-12 bg-teal-500 mx-auto my-4 rounded"></div>
                <p className="mt-4 text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
                  {currentLang === 'pt' 
                    ? 'Saiba mais sobre os nossos valores, missão e as bases logísticas de apoio nos principais portos comerciais de Angola.' 
                    : 'Learn about our corporate values, core mission, and logistics support bases across Angola.'}
                </p>
              </div>
            </div>
            
            {/* Main Stats layout */}
            <Stats currentLang={currentLang} />

            {/* Official certifications board */}
            <Certifications currentLang={currentLang} />

            {/* Subpage Info */}
            <div className="py-16 bg-white relative border-t border-slate-200">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {currentLang === 'pt' ? 'Compromisso com Angola (Conteúdo Local)' : 'Commitment to Local Content'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                  {currentLang === 'pt' 
                    ? 'A CAHOTA LDA é uma empresa 100% Angolana, integrando profissionais nacionais altamente qualificados, fomentando a economia e promovendo o desenvolvimento portuário nacional com total respeito pelas normas socioambientais.'
                    : 'CAHOTA LDA is a 100% Angolan-owned corporate citizen, integrating highly skilled local professionals, supporting the domestic economy, and promoting domestic port development with high social-environmental respect.'}
                </p>
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
                >
                  {currentLang === 'pt' ? 'Falar com um Consultor' : 'Talk with an Advisor'}
                </button>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div key="services" className="pt-20 w-full">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative max-w-4xl mx-auto px-4 z-10">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-[10px] font-mono block mb-3">
                  {currentLang === 'pt' ? 'O QUE FAZEMOS' : 'OUR EXPERTISE'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {currentLang === 'pt' ? 'Serviços Especializados' : 'Professional Marine Services'}
                </h1>
                <div className="h-1 w-12 bg-teal-500 mx-auto my-4 rounded"></div>
                <p className="mt-4 text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
                  {currentLang === 'pt' 
                    ? 'Do ship chandling à provisão técnica marinha e industrial qualificada, mantemos as suas frotas em pleno mar com zero interrupção.' 
                    : 'From ship chandling to qualified marine, technical and food supplies, we support your fleets with absolutely zero downtime.'}
                </p>
              </div>
            </div>

            <Services 
              currentLang={currentLang}
              onSelectServiceAndQuote={handleSelectServiceAndQuote}
            />
          </div>
        );

      case 'clients':
        return (
          <div key="clients" className="pt-20 w-full">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative max-w-4xl mx-auto px-4 z-10">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-[10px] font-mono block mb-3">
                  {currentLang === 'pt' ? 'CONFIABILIDADE' : 'TRUST & COMPLIANCE'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {currentLang === 'pt' ? 'Nossos Clientes e Parceiros' : 'Clients & Partners'}
                </h1>
                <div className="h-1 w-12 bg-teal-500 mx-auto my-4 rounded"></div>
                <p className="mt-4 text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
                  {currentLang === 'pt' 
                    ? 'Temos orgulho de apoiar operadores globais e locais com soluções rápidas de fornecimento marítimo e industrial.' 
                    : 'We are proud to serve global and local operators with rapid, secure marine and industrial solutions.'}
                </p>
              </div>
            </div>

            <Clients currentLang={currentLang} />
          </div>
        );

      case 'vendor':
        return (
          <div key="vendor" className="pt-20 w-full">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative max-w-4xl mx-auto px-4 z-10">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-[10px] font-mono block mb-3">
                  {currentLang === 'pt' ? 'HOMOLOGAÇÃO' : 'COMPLIANCE PORTAL'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {currentLang === 'pt' ? 'Credenciamento de Fornecedor' : 'Approved Supplier Registry'}
                </h1>
                <div className="h-1 w-12 bg-teal-500 mx-auto my-4 rounded"></div>
                <p className="mt-4 text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
                  {currentLang === 'pt' 
                    ? 'Simplificamos o cadastramento corporativo da CAHOTA LDA no seu sistema de compras e e-procurement.' 
                    : 'We make onboarding CAHOTA LDA in your purchasing desk and e-procurement systems fast and simple.'}
                </p>
              </div>
            </div>

            <VendorPanel currentLang={currentLang} />
          </div>
        );

      case 'contact':
        return (
          <div key="contact" className="pt-20 w-full">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative max-w-4xl mx-auto px-4 z-10">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-[10px] font-mono block mb-3">
                  {currentLang === 'pt' ? 'FALE CONNOSCO' : 'GET IN TOUCH'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {currentLang === 'pt' ? 'Contactos e Localização' : 'Contacts & Presence'}
                </h1>
                <div className="h-1 w-12 bg-teal-500 mx-auto my-4 rounded"></div>
                <p className="mt-4 text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
                  {currentLang === 'pt' 
                    ? 'Contate o nosso suporte de emergência 24 horas ou visite os nossos escritórios estratégicos no Lobito (HQ) e Luanda.' 
                    : 'Reach out to our round-the-clock emergency desk or visit our strategic locations in Lobito (HQ) and Luanda.'}
                </p>
              </div>
            </div>

            <ContactSection currentLang={currentLang} />
          </div>
        );

      case 'quote':
        return (
          <div key="quote" className="pt-20 w-full">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative max-w-4xl mx-auto px-4 z-10">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-[10px] font-mono block mb-3">
                  {currentLang === 'pt' ? 'COTAÇÕES ONLINE' : 'ONLINE QUOTATION'}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {currentLang === 'pt' ? 'Pedido de Proposta' : 'Free Quotation Enquiry'}
                </h1>
                <div className="h-1 w-12 bg-teal-500 mx-auto my-4 rounded"></div>
                <p className="mt-4 text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
                  {currentLang === 'pt' 
                    ? 'Envie as especificações do seu navio ou projeto industrial para receber uma resposta comercial ágil em até 12 horas.' 
                    : 'Submit your vessel details or industrial specifications to receive a quick commercial quote within 12 hours.'}
                </p>
              </div>
            </div>

            <QuoteForm 
              currentLang={currentLang}
              selectedService={selectedService}
              onServiceReset={() => setSelectedService('')}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-teal-500 selection:text-white font-sans antialiased flex flex-col justify-between">
      {/* Navigation Header bar */}
      <Navbar 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
        activePage={activePage}
        onChangePage={(pageId) => {
          setActivePage(pageId);
          window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
        }}
      />

      {/* Main layout container with active page transitions */}
      <main className="w-full flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate signature & compliance footer */}
      <Footer 
        currentLang={currentLang} 
        onNavigateHome={() => {
          setActivePage('home');
          window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
        }}
      />
    </div>
  );
}
