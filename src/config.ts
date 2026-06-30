/**
 * Configurações Gerais do Website Cahota Lda.
 */

export interface SiteSettings {
  phoneLuanda: string;
  phoneLobito: string;
  whatsappLuanda: string;
  whatsappLobito: string;
  email: string;
  nif: string;
  addressLuanda: string;
  addressLobito: string;
  
  // Hero Section
  heroTitlePt: string;
  heroTitleEn: string;
  heroSubtitlePt: string;
  heroSubtitleEn: string;

  // Stats Section
  stat1Value: string;
  stat1LabelPt: string;
  stat1LabelEn: string;
  stat2Value: string;
  stat2LabelPt: string;
  stat2LabelEn: string;
  stat3Value: string;
  stat3LabelPt: string;
  stat3LabelEn: string;
  stat4Value: string;
  stat4LabelPt: string;
  stat4LabelEn: string;
}

// Configurações padrão do site
const defaultSettings: SiteSettings = {
  phoneLuanda: "+244 929 071 923",
  phoneLobito: "+244 935 325 219",
  whatsappLuanda: "244929071923",
  whatsappLobito: "244935325219",
  email: "geral@cahota.ao",
  nif: "5001273264",
  addressLuanda: "Ed. W5, Centralidade do Kilamba, Luanda - Angola.",
  addressLobito: "Filial e Apoio de Logística de Ship Chandling e Suporte Técnico em Benguela. Porto do Lobito & Estrada Nacional Nº 100",
  
  heroTitlePt: "Soluções Marítimas & Suprimentos Industriais de Alta Performance em Angola",
  heroTitleEn: "High-Performance Maritime Solutions & Industrial Supplies in Angola",
  heroSubtitlePt: "Líder em Ship Chandling, Suporte Logístico Portuário, Fornecimento Técnico e Medicina Ocupacional nos principais portos comerciais de Angola.",
  heroSubtitleEn: "Leading Ship Chandling, Port Logistics, Technical Marine Supplies and Occupational Medicine across strategic Angolan commercial ports.",

  stat1Value: "98%",
  stat1LabelPt: "Taxa de Sucesso em Entregas Rápidas",
  stat1LabelEn: "On-Time Dispatch & Success Rate",
  
  stat2Value: "24/7",
  stat2LabelPt: "Suporte Técnico & Logística Naval Activa",
  stat2LabelEn: "Technical Desk & Marine Support",
  
  stat3Value: "+120",
  stat3LabelPt: "Operadores e Navios Atendidos",
  stat3LabelEn: "Vessels & Fleet Managers Served",

  stat4Value: "100%",
  stat4LabelPt: "Empresa Angolana de Conteúdo Local",
  stat4LabelEn: "Angolan Local Content Certified",
};

export const getSetting = <K extends keyof SiteSettings>(key: K): string => {
  return defaultSettings[key] || "";
};

