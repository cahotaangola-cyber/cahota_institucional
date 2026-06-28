import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Phone, FileText, Sparkles, User, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface ChatWidgetProps {
  currentLang: Language;
  onChangePage: (pageId: string) => void;
}

interface Message {
  id: string;
  sender: 'clara' | 'user';
  text: string;
  timestamp: Date;
}

export default function ChatWidget({ currentLang, onChangePage }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessageBadge, setHasNewMessageBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome messages
  useEffect(() => {
    const welcomeText = currentLang === 'pt' 
      ? 'Olá! Seja bem-vindo à CAHOTA LDA. Sou a Sónia, sua consultora virtual. Como posso ajudar com os nossos serviços corporativos, de logística civil ou marítimos hoje?'
      : 'Hello! Welcome to CAHOTA LDA. I am Sónia, your virtual corporate consultant. How can I help you with our marine, engineering, or logistics services today?';
      
    setMessages([
      {
        id: 'welcome',
        sender: 'clara',
        text: welcomeText,
        timestamp: new Date()
      }
    ]);
  }, [currentLang]);

  // Handle auto-scroll to the bottom of the messages window
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const parsedText = textToSend || inputValue.trim();
    if (!parsedText) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: parsedText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) {
      setInputValue('');
    }

    // Trigger typing simulation
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      const responseText = currentLang === 'pt'
        ? 'Perfeito! Para dar seguimento imediato ao seu pedido com toda a atenção humana, vou transferi-lo agora mesmo para a nossa página de Contactos Oficiais. Um momento, por favor...'
        : 'Perfect! To give your request immediate human consideration, I am taking you to our official Contacts page right now. One moment, please...';

      const claraMsg: Message = {
        id: Math.random().toString(),
        sender: 'clara',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, claraMsg]);

      // Redirect after a short delay
      setTimeout(() => {
        onChangePage('contact');
        setIsOpen(false);
      }, 2500);

    }, 1200);
  };

  const handleQuickAction = (page: string, label: string) => {
    // Add user selection as a message to make the conversation feel real
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: label,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const actionResponse = currentLang === 'pt'
        ? `Excelente escolha! Redirecionando você de imediato para a secção de: ${label}...`
        : `Excellent choice! Redirecting you right away to: ${label}...`;

      setMessages(prev => [...prev, {
        id: Math.random().toString(),
        sender: 'clara',
        text: actionResponse,
        timestamp: new Date()
      }]);

      setTimeout(() => {
        onChangePage(page);
        setIsOpen(false);
      }, 1000);
    }, 600);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessageBadge(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="live-chat-section">
      <AnimatePresence>
        {/* Chat window bubble */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-[340px] sm:w-[380px] overflow-hidden mb-4 flex flex-col h-[480px] max-h-[80vh]"
            id="chat-window-container"
          >
            {/* Header */}
            <div className="bg-teal-600 text-slate-950 p-4 flex items-center justify-between relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-teal-500/20 rounded-full blur-[30px] pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-950/10 border border-slate-950/20 flex items-center justify-center font-bold text-slate-950">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight flex items-center gap-1.5 text-slate-950">
                    Sónia <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  </h4>
                  <p className="text-[10px] text-slate-800 font-medium">
                    {currentLang === 'pt' ? 'Suporte Comercial Ativo' : 'Active Client Desk'}
                  </p>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="text-slate-950 hover:bg-teal-500/30 p-1.5 rounded-full transition-colors cursor-pointer"
                aria-label="Close Chat"
                id="btn-close-chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle body section containing chat scroll area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4" id="chat-messages-box">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-slate-900 text-slate-100 rounded-br-none shadow-md' 
                        : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span 
                      className={`text-[8px] block mt-1.5 font-mono ${
                        msg.sender === 'user' ? 'text-slate-400 text-right' : 'text-slate-450'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 shadow-sm border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* Interactive choice chips */}
              {messages.length === 1 && (
                <div className="pt-2 space-y-2 animate-fadeIn" id="quick-action-chips">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono mb-2">
                    {currentLang === 'pt' ? 'OPÇÕES DE CAPTAÇÃO RÁPIDA' : 'QUICK CAPTURE OPTIONS'}
                  </p>
                  
                  <button
                    onClick={() => handleQuickAction('contact', currentLang === 'pt' ? '📞 Falar Connosco / Ver Contactos' : '📞 Contact Support')}
                    className="w-full text-left bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 transition-all flex items-center justify-between group shadow-sm cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-teal-600" />
                      {currentLang === 'pt' ? 'Falar Connosco / Contactos' : 'Call & Official Contacts'}
                    </span>
                    <span className="text-slate-400 group-hover:text-teal-600 transition-colors text-[10px] font-bold font-mono">→</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction('quote', currentLang === 'pt' ? '📋 Pedir Cotação de Serviços' : '📋 Request Fast Quotation')}
                    className="w-full text-left bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 transition-all flex items-center justify-between group shadow-sm cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-amber-600" />
                      {currentLang === 'pt' ? 'Solicitar Cotação Comercial' : 'Request Commercial Quote'}
                    </span>
                    <span className="text-slate-400 group-hover:text-amber-500 transition-colors text-[10px] font-bold font-mono">→</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction('services', currentLang === 'pt' ? '🛠️ Áreas de Atuação & Serviços' : '🛠️ Explore Our Divisions')}
                    className="w-full text-left bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 transition-all flex items-center justify-between group shadow-sm cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                      {currentLang === 'pt' ? 'Ver Categorias de Actuação' : 'Explore Strategic Services'}
                    </span>
                    <span className="text-slate-400 group-hover:text-indigo-600 transition-colors text-[10px] font-bold font-mono">→</span>
                  </button>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer containing chat input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0"
              id="chat-input-form"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={currentLang === 'pt' ? 'Escreva uma mensagem ou pergunta...' : 'Type a message or question...'}
                className="flex-1 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-slate-950 p-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
                aria-label="Send Message"
                id="btn-send-chat"
              >
                <Send className="w-4 h-4 text-slate-950" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Circular Button */}
      <div className="relative">
        {/* Pulsating Ring Indicator to attract user engagement */}
        {!isOpen && (
          <span className="absolute -inset-1.5 rounded-full bg-teal-500/40 animate-ping pointer-events-none" />
        )}
        
        {/* Floating Speech bubble tooltip next to button */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-950 text-slate-100 text-[10px] sm:text-xs font-bold px-3.5 py-2 rounded-xl whitespace-nowrap shadow-xl border border-slate-800 pointer-events-none flex items-center gap-1.5"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {currentLang === 'pt' ? 'Dúvidas? Fale Connosco' : 'Questions? Chat with Us'}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-slate-950" />
          </motion.div>
        )}
        
        <button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 focus:outline-none relative group cursor-pointer ${
            isOpen 
              ? 'bg-slate-900 text-white rotate-90 hover:scale-105' 
              : 'bg-teal-500 text-slate-950 hover:bg-teal-600 hover:scale-[1.08]'
          }`}
          id="btn-trigger-chat-widget"
          title={currentLang === 'pt' ? 'Atendimento Rápido' : 'Fast Assistance'}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              {hasNewMessageBadge && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-[8px] font-bold text-white rounded-full flex items-center justify-center animate-bounce shadow">
                  1
                </span>
              )}
              <MessageSquare className="w-6 h-6 text-slate-950" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
