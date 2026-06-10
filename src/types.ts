export type Language = 'pt' | 'en';

export interface TranslationDict {
  navHome: string;
  navServices: string;
  navAbout: string;
  navClients: string;
  navQuote: string;
  navContact: string;
  
  heroTitle: string;
  heroSubtitle: string;
  heroCTAQuote: string;
  heroCTAServices: string;
  heroBadge: string;
  
  aboutTitle: string;
  aboutSubtitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutYears: string;
  aboutYearsText: string;
  aboutLocationTitle: string;
  aboutLocationText: string;
  
  servicesTitle: string;
  servicesSubtitle: string;
  service1Name: string;
  service1Desc: string;
  service1Points: string[];
  service2Name: string;
  service2Desc: string;
  service2Points: string[];
  service3Name: string;
  service3Desc: string;
  service3Points: string[];
  service4Name: string;
  service4Desc: string;
  service4Points: string[];
  
  statsTitle: string;
  statsVessels: string;
  statsReliability: string;
  statsSupport: string;
  
  clientsTitle: string;
  clientsSubtitle: string;
  clientsNote: string;
  
  quoteTitle: string;
  quoteSubtitle: string;
  quoteFormName: string;
  quoteFormEmail: string;
  quoteFormPhone: string;
  quoteFormCompany: string;
  quoteFormService: string;
  quoteFormUrgency: string;
  quoteFormDetails: string;
  quoteFormSubmit: string;
  quoteSuccessTitle: string;
  quoteSuccessMessage: string;
  
  vendorTitle: string;
  vendorSubtitle: string;
  vendorDocHeading: string;
  vendorNifText: string;
  vendorDocIntro: string;
  vendorDocObjective: string;
  vendorDocLetterHeader: string;
  vendorContactCTA: string;
  
  contactTitle: string;
  contactSubtitle: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  contactHours: string;
  contactHoursValue: string;
  officeLobito: string;
  officeLuanda: string;
}

export const translations: Record<Language, TranslationDict> = {
  pt: {
    navHome: "Início",
    navServices: "Serviços",
    navAbout: "Sobre Nós",
    navClients: "Clientes",
    navQuote: "Solicitar Cotação",
    navContact: "Contatos",
    
    heroTitle: "Soluções Confiáveis e Suprimentos de Alta Qualidade para Setores Marítimo e Industrial",
    heroSubtitle: "A CAHOTA LDA é sua parceira estratégica em Angola para Ship Chandling, Fornecimento Técnico, Alimentos e Logística integrada com suporte pós-venda premium.",
    heroCTAQuote: "Solicitar Cotação Agora",
    heroCTAServices: "Conhecer Serviços",
    heroBadge: "Parceiro Offshore & Industrial em Angola",
    
    aboutTitle: "Apresentação Corporativa",
    aboutSubtitle: "Operando com padrões de excelência há mais de 3 anos nos principais portos de Angola.",
    aboutText1: "A CAHOTA LDA é uma empresa angolana sediada no Lobito, estrategicamente localizada na Estrada Nacional Nº 100, com representação ativa na província de Luanda. Há mais de três anos, fornecemos suprimentos técnicos qualificados e serviços especializados de alto nível.",
    aboutText2: "A nossa missão é garantir a continuidade das suas operações marítimas e industriais através de entregas pontuais, conformidade com os mais rigorosos padrões de segurança internacional e assistência técnica contínua. Nos destacamos pela eficiência logística e suporte pós-venda inigualável.",
    aboutYears: "3+",
    aboutYearsText: "Anos de Operação Sólida em Angola",
    aboutLocationTitle: "Presença Estratégica",
    aboutLocationText: "Benguela (Sede no Lobito) & Representação em Luanda",
    
    servicesTitle: "Nossas Áreas de Atuação",
    servicesSubtitle: "Conheça o nosso escopo completo de suprimentos e serviços técnicos especializados.",
    service1Name: "Ship Chandling",
    service1Desc: "Abastecimento completo e atendimento personalizado para todos os tipos de embarcações comerciais, rebocadores e plataformas offshore.",
    service1Points: [
      "Material de convés, cabine e casa de máquinas (Deck, Cabin & Engine Stores)",
      "Peças sobressalentes e consumíveis marítimos homologados",
      "Equipamentos de segurança e combate a incêndio de alta qualidade",
      "Abastecimento de água doce potável para navios"
    ],
    service2Name: "Abastecimento Técnico (Technical Supply)",
    service2Desc: "Disponibilização de ferramentas de alta performance, maquinários e peças sobressalentes de engenharia para plantas industriais e plataformas offshore.",
    service2Points: [
      "Válvulas industriais, tubulações e conexões hidráulicas de alta pressão",
      "Ferramental de corte, soldagem e equipamentos pneumáticos",
      "Componentes elétricos, cabos náuticos e iluminação de segurança",
      "Controle de corrosão, tintas marítimas e solventes especializados"
    ],
    service3Name: "Abastecimento Alimentar (Food Supply)",
    service3Desc: "Provisão de alimentos frescos, congelados e secos sob rígidos protocolos de higiene, suprindo as necessidades de tripulações marítimas e complexos industriais.",
    service3Points: [
      "Alimentos frescos, carnes selecionadas, peixes e vegetais de qualidade",
      "Provisões secas, enlatados e mercearia importada de alta escala",
      "Serviços de catering customizados para equipes offshore e rurais",
      "Certificação de cadeia de frio rigorosa do transporte até a entrega"
    ],
    service4Name: "Cadeia de Suprimentos & Logística",
    service4Desc: "Armazenamento confiável, desembaraço aduaneiro rápido e transporte pontual para salvaguardar a integridade de qualquer carga crítica.",
    service4Points: [
      "Armazenamento estratégico seguro de cargas com controle climático",
      "Desembaraço aduaneiro rápido e assessoria portuária completa",
      "Logística integrada e acompanhamento em tempo real",
      "Entrega direta 'last-mile' integrada até o porto ou instalação industrial"
    ],
    
    statsTitle: "Cahota em Números",
    statsVessels: "Embarcações Atendidas",
    statsReliability: "Confiabilidade de Entrega",
    statsSupport: "Suporte Técnico Ativo",
    
    clientsTitle: "Empresas que Confiam",
    clientsSubtitle: "Temos o orgulho de apoiar alguns dos principais operadores logísticos e de navegação de Angola.",
    clientsNote: "Comprometidos com padrões internacionais e processos de auditoria rigorosos de ponta a ponta.",
    
    quoteTitle: "Solicite um Orçamento Online",
    quoteSubtitle: "Preencha o formulário abaixo para receber uma proposta comercial em até 24 horas. Focado em agilidade operacional.",
    quoteFormName: "Nome do Solicitante / Cargo",
    quoteFormEmail: "Email Corporativo",
    quoteFormPhone: "Telefone de Contato",
    quoteFormCompany: "Empresa / Nome do Navio",
    quoteFormService: "Serviço Solicitado",
    quoteFormUrgency: "Grau de Urgência",
    quoteFormDetails: "Detalhes do Pedido & Especificações Técnicas",
    quoteFormSubmit: "Enviar Pedido de Cotação",
    quoteSuccessTitle: "Pedido Recebido com Sucesso!",
    quoteSuccessMessage: "Obrigado por contactar a CAHOTA LDA. A nossa equipe comercial já está a processar a sua solicitação de suprimentos/serviços e responderá em até 12 horas.",
    
    vendorTitle: "Registo de Fornecedor Aprovado",
    vendorSubtitle: "Facilitamos o processo de homologação técnica da nossa empresa no seu portal de compras.",
    vendorDocHeading: "Carta Oficial de Apresentação (Gerada Dinamicamente)",
    vendorNifText: "NIF Legal: 5001273264",
    vendorDocIntro: "Somos a CAHOTA LDA, empresa de direito angolano com sede no Lobito operando nos setores marítimo, portuário e offshore. Apresentamos este documento para expressar formalmente o nosso interesse em ser registados como um fornecedor oficial aprovado para apoiar as vossas operações contínuas em Angola.",
    vendorDocObjective: "O nosso escopo abrange o fornecimento rápido de Ship Chandling, Suprimentos Técnicos Industriais de alta precisão, Provisões de Alimentos de excelente qualidade e soluções de Logística integrada.",
    vendorDocLetterHeader: "À Equipe de Gestão de Fornecedores / Compras",
    vendorContactCTA: "Contactar Gestor e Enviar NIF",
    
    contactTitle: "Fale Conosco",
    contactSubtitle: "Estamos estrategicamente posicionados no Lobito e Luanda para responder imediatamente às suas necessidades.",
    contactAddress: "Morada da Sede: Av. Governador Sousa Coutinho, Cotel, Lobito, Benguela, Angola (Estrada Nacional nº 100)",
    contactPhone: "Telefones",
    contactEmail: "Email Geral",
    contactHours: "Horário de Atendimento",
    contactHoursValue: "Segunda a Sábado - 24/7 para Emergências e Abastecimento de Navios",
    officeLobito: "Sede - Lobito, Benguela",
    officeLuanda: "Representação - Província de Luanda"
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About Us",
    navClients: "Clients",
    navQuote: "Request Quote",
    navContact: "Contacts",
    
    heroTitle: "Reliable Solutions and High-Quality Supplies for Marine & Industrial Sectors",
    heroSubtitle: "CAHOTA LDA is your strategic partner in Angola for Ship Chandling, Technical Supply, Food Supply, and integrated Logistics with premium after-sales support.",
    heroCTAQuote: "Request a Quote Now",
    heroCTAServices: "Explore Services",
    heroBadge: "Offshore & Industrial Partner in Angola",
    
    aboutTitle: "Corporate Presentation",
    aboutSubtitle: "Operating with standards of excellence for over 3 years in the main Angolan ports.",
    aboutText1: "CAHOTA LDA is an Angolan company based in Lobito, strategically located on National Road No. 100, with additional active representation in Luanda Province. For over three years, we have been supplying qualified technical products and top-tier specialized services.",
    aboutText2: "Our mission is to guarantee the continuity of your marine and industrial operations through on-time deliveries, compliance with strict international safety standards, and ongoing technical support. We stand out for our supply chain efficiency and matchless after-sales assistance.",
    aboutYears: "3+",
    aboutYearsText: "Years of Solid Operations in Angola",
    aboutLocationTitle: "Strategic Presence",
    aboutLocationText: "Benguela (Lobito Headquarters) & Luanda Province Representation",
    
    servicesTitle: "Our Areas of Expertise",
    servicesSubtitle: "Explore our complete scope of professional marine and industrial supplies.",
    service1Name: "Ship Chandling",
    service1Desc: "Complete vessel supply and customized support for all commercial vessels, tugboats, and offshore rigs.",
    service1Points: [
      "Deck, Cabin & Engine Stores of top specifications",
      "Approved marine spare parts and operational consumables",
      "High-grade safety, survival, and firefighting equipment",
      "Freshwater supply directly delivered to vessels"
    ],
    service2Name: "Technical Supply",
    service2Desc: "Provision of high-performance tools, specialized machinery, and engineering spare parts for industrial plants and offshore systems.",
    service2Points: [
      "Industrial valves, steel piping, and high-pressure hydraulic connections",
      "Cutting instruments, welding gear, and pneumatic equipment",
      "Marine-grade electrical cables, components, and safety lighting",
      "Corrosion protection, marine coatings, and specialized solvents"
    ],
    service3Name: "Food Supply",
    service3Desc: "Provision of fresh, frozen, and dry foods managed under strict hygiene standards to satisfy offshore crews and industrial catering operations.",
    service3Points: [
      "Fresh meats, selected seafood, fruits, and quality local vegetables",
      "Bulk dry provisions, shelf-stable canned products, and imported foods",
      "Tailor-made catering solutions for offshore crews and remote sites",
      "Strict cold-chain logistics from cold-storage facilities to final delivery"
    ],
    service4Name: "Supply Chain & Logistics",
    service4Desc: "Secure warehousing, streamlined customs clearance, and prompt shipping designed to handle critical industrial cargoes.",
    service4Points: [
      "Strategic secure warehousing with climate control capabilities",
      "Fast customs clearance and expert port agency assistance",
      "Integrated logistics design with real-time transit tracking",
      "Dedicated last-mile delivery to terminal berths or industrial sites"
    ],
    
    statsTitle: "Cahota in Numbers",
    statsVessels: "Vessels Served",
    statsReliability: "Delivery Reliability Rate",
    statsSupport: "Active Technical Support",
    
    clientsTitle: "Trusted By Global Operators",
    clientsSubtitle: "We are proud to support some of the leading logistics, offshore, and shipping lines operating in Angola.",
    clientsNote: "Committed to international standards and rigorous end-to-end procurement compliance.",
    
    quoteTitle: "Request an Online Estimate",
    quoteSubtitle: "Fill out the form below to receive a formal quotation within 24 hours. Focused on maximizing operational speed.",
    quoteFormName: "Requestor Name / Title",
    quoteFormEmail: "Corporate Email",
    quoteFormPhone: "Contact Phone Number",
    quoteFormCompany: "Company Name / Vessel",
    quoteFormService: "Requested Service",
    quoteFormUrgency: "Urgency Level",
    quoteFormDetails: "Scope Details & Technical Specifications",
    quoteFormSubmit: "Submit Quotation Request",
    quoteSuccessTitle: "Request Received Successfully!",
    quoteSuccessMessage: "Thank you for contacting CAHOTA LDA. Our commercial desk is already processing your supply request and will respond within 12 hours.",
    
    vendorTitle: "Approved Supplier Registration",
    vendorSubtitle: "We simplify our vendor onboarding process for your corporate purchasing portal.",
    vendorDocHeading: "Official Presentation Letter (Dynamically Generated)",
    vendorNifText: "Legal NIF (Tax ID): 5001273264",
    vendorDocIntro: "We are CAHOTA LDA, an Angolan company based in Lobito operating in the marine, port, and offshore sectors. We introduce this letter to formally register our credentials as an approved supplier for your onshore/offshore supply requirements in Angola.",
    vendorDocObjective: "Our operational capabilities span reliable Ship Chandling, specialized Industrial/Technical Supplies, safe Food Provisions, and synchronized Logistics.",
    vendorDocLetterHeader: "To the Vendor Management & Procurement Team",
    vendorContactCTA: "Contact Procurement Manager & Send NIF",
    
    contactTitle: "Contact Us",
    contactSubtitle: "Strategically located in Lobito and Luanda for immediate support and continuous deliveries.",
    contactAddress: "Head Office: Av. Governor Sousa Coutinho, Cotel, Lobito, Benguela, Angola (National Highway No. 100)",
    contactPhone: "Phones",
    contactEmail: "General Email",
    contactHours: "Operating Hours",
    contactHoursValue: "Monday to Saturday - 24/7 for Emergencies & Ship Abastecimento",
    officeLobito: "Lobito HQ, Benguela",
    officeLuanda: "Luanda Representative Office"
  }
};
