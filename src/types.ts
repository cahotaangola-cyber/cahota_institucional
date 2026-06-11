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
  service5Name: string;
  service5Desc: string;
  service5Points: string[];
  service6Name: string;
  service6Desc: string;
  service6Points: string[];
  service7Name: string;
  service7Desc: string;
  service7Points: string[];
  service8Name: string;
  service8Desc: string;
  service8Points: string[];
  service9Name: string;
  service9Desc: string;
  service9Points: string[];
  service10Name: string;
  service10Desc: string;
  service10Points: string[];
  
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
  officeHeadOffice: string;
  officeBranchOffice: string;
}

export const translations: Record<Language, TranslationDict> = {
  pt: {
    navHome: "Início",
    navServices: "Serviços",
    navAbout: "Sobre Nós",
    navClients: "Parceiros",
    navQuote: "Solicitar Cotação",
    navContact: "Contactos",
    
    heroTitle: "Soluções Confiáveis e Suprimentos de Alta Qualidade para Setores Marítimo e Industrial",
    heroSubtitle: "A CAHOTA LDA é sua parceira estratégica em Angola para Ship Chandling, Fornecimento Técnico, Alimentos e Logística integrada com suporte pós-venda premium.",
    heroCTAQuote: "Solicitar Cotação Agora",
    heroCTAServices: "Conhecer Serviços",
    heroBadge: "Parceiro Offshore & Industrial em Angola",
    
    aboutTitle: "Apresentação Corporativa",
    aboutSubtitle: "Operando com padrões de excelência há mais de 3 anos nos principais portos de Angola.",
    aboutText1: "A CAHOTA LDA é uma empresa angolana com sede em Luanda, estrategicamente localizada no Ed. W5, Centralidade do Kilamba, com representação activa nos principais portos e províncias do país. Desde 2022 a fornecer suprimentos técnicos qualificados e serviços especializados de alto nível.",
    aboutText2: "A nossa missão é garantir a continuidade das suas operações marítimas e industriais através de entregas pontuais, conformidade com os mais rigorosos padrões de segurança internacional e assistência técnica contínua. Nos destacamos pela eficiência logística e suporte pós-venda inigualável.",
    aboutYears: "3+",
    aboutYearsText: "Anos de Operação Sólida em Angola",
    aboutLocationTitle: "Presença Estratégica",
    aboutLocationText: "Luanda (Sede no Kilamba) & Representação no Lobito e principais portos",
    
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
      "Serviços de catering customizados para equipas offshore e rurais",
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
    service5Name: "Gestão de Imagem Corporativa",
    service5Desc: "Criação, fortalecimento e posicionamento estratégico da identidade visual e reputação da sua marca no mercado angolano.",
    service5Points: [
      "Design de identidade visual, logótipos e manuais de marca completos",
      "Planeamento de comunicação e presença corporativa em media",
      "Produção de fardamentos e materiais promocionais com personalização de alta qualidade",
      "Organização de eventos corporativos e branding institucional"
    ],
    service6Name: "Soluções Tecnológicas",
    service6Desc: "Infraestrutura de TI moderna, software corporativo, redes seguras e sistemas inteligentes de suporte para otimizar suas operações diárias.",
    service6Points: [
      "Desenvolvimento de softwares, plataformas web e gestão integrada de dados (Sistemas ERP)",
      "Instalação e otimização de infraestrutura de rede, servidores e sistemas Wi-Fi",
      "Cibersegurança avançada, backups e soluções de armazenamento na nuvem",
      "Instalação e manutenção de sistemas de segurança biométrica, CCTV e controle de acessos"
    ],
    service7Name: "Serviço de Seguros",
    service7Desc: "Consultoria de seguros abrangente e parcerias estratégicas para proteger os ativos, logística e colaboradores da sua empresa contra riscos operacionais.",
    service7Points: [
      "Seguros de frota de veículos, fardos logísticos e transporte de carga",
      "Seguros de responsabilidade civil para operações marítimas, industriais e portuárias",
      "Planos de saúde corporativos personalizados e seguros de acidentes de trabalho",
      "Análise de gerenciamento de risco e parcerias com as melhores seguradoras de Angola"
    ],
    service8Name: "Medicina Ocupacional",
    service8Desc: "Programas completos de saúde ocupacional conduzidos por especialistas, garantindo conformidade com a regulamentação em vigor em Angola e bem-estar para suas tripulações e operários.",
    service8Points: [
      "Exames admissionais, demissionais, periódicos e de aptidão física (Fit-for-Duty)",
      "Programas de Prevenção de Riscos Profissionais (PPRA) e relatórios de conformidade de Higiene e Segurança",
      "Treino de primeiros socorros nas instalações e assistência médica de emergência offshore",
      "Gestão integrada de licenças de saúde, exames toxicológicos e campanhas de prevenção"
    ],
    service9Name: "Construção Civil",
    service9Desc: "Execução de obras civis de excelência, instalações estruturais, ampliações e manutenção de plantas industriais, armazéns e escritórios.",
    service9Points: [
      "Desenho de projetos civis, cálculo estrutural e fiscalização técnica especializada",
      "Construção e expansão de armazéns industriais, bases logísticas e escritórios modernos",
      "Serviços de reabilitação estrutural, pavimentação asfáltica e engenharia de solos",
      "Manutenção corretiva, pintura industrial e instalações hidráulicas de alta escala"
    ],
    service10Name: "Mobilidade & Táxi por Aplicativo (Yango, Heetch, Bolt)",
    service10Desc: "Soluções integradas de transporte privado corporativo e pessoal utilizando as principais plataformas digitais registradas (Yango, Heetch, Bolt).",
    service10Points: [
      "Operação com motoristas credenciados nas principais capitais de províncias",
      "Faturamento unificado de viagens corporativas e frotas dedicadas",
      "Logística de mobilidade ágil de tripulações entre aeroportos, portos e hotéis",
      "Disponibilidade 24/7 com suporte monitorado em tempo real e veículos modernos"
    ],
    
    statsTitle: "Cahota em Números",
    statsVessels: "Embarcações Atendidas",
    statsReliability: "Confiabilidade de Entrega",
    statsSupport: "Suporte Técnico Ativo",
    
    clientsTitle: "Parceiros que Confiam",
    clientsSubtitle: "Temos o orgulho de apoiar alguns dos principais operadores logísticos e de navegação de Angola.",
    clientsNote: "Comprometidos com padrões internacionais e processos de auditoria rigorosos de ponta a ponta.",
    
    quoteTitle: "Solicite um Orçamento Online",
    quoteSubtitle: "Preencha o formulário abaixo para receber uma proposta comercial em até 24 horas. Focado em agilidade operacional.",
    quoteFormName: "Nome do Solicitante / Cargo",
    quoteFormEmail: "Email Corporativo",
    quoteFormPhone: "Telefone de Contacto",
    quoteFormCompany: "Empresa / Nome do Navio",
    quoteFormService: "Serviço Solicitado",
    quoteFormUrgency: "Grau de Urgência",
    quoteFormDetails: "Detalhes do Pedido & Especificações Técnicas",
    quoteFormSubmit: "Enviar Pedido de Cotação",
    quoteSuccessTitle: "Pedido Recebido com Sucesso!",
    quoteSuccessMessage: "Obrigado por contactar a CAHOTA LDA. A nossa equipa comercial já está a processar a sua solicitação de suprimentos/serviços e responderá em até 12 horas.",
    
    vendorTitle: "Registo de Fornecedor Aprovado",
    vendorSubtitle: "Facilitamos o processo de homologação técnica da nossa empresa no seu portal de compras.",
    vendorDocHeading: "Carta Oficial de Apresentação (Gerada Dinamicamente)",
    vendorNifText: "NIF Legal: 5001273264",
    vendorDocIntro: "Somos a CAHOTA LDA, empresa de direito angolano com sede no Ed. W5, Centralidade do Kilamba, Luanda, operando nos setores de construção civil, marítimo, portuário e offshore. Apresentamos este documento para expressar formalmente o nosso interesse em ser registados como um fornecedor oficial aprovado para apoiar as vossas operações contínuas em Angola.",
    vendorDocObjective: "O nosso escopo abrange o fornecimento rápido de Ship Chandling, Suprimentos Técnicos Industriais de alta precisão, Provisões de Alimentos de excelente qualidade e soluções de Logística integrada.",
    vendorDocLetterHeader: "À Equipa de Gestão de Fornecedores / Compras",
    vendorContactCTA: "Contactar Gestor e Enviar NIF",
    
    contactTitle: "Fale Connosco",
    contactSubtitle: "Estamos estrategicamente posicionados no Kilamba (Luanda) e no Lobito para responder imediatamente às suas necessidades.",
    contactAddress: "Morada da Sede: Ed. W5, Centralidade do Kilamba, Luanda - Angola",
    contactPhone: "Telefones",
    contactEmail: "Email Geral",
    contactHours: "Horário de Atendimento",
    contactHoursValue: "Segunda a Sábado - 24/7 para Emergências e Abastecimento",
    officeHeadOffice: "Sede - Centralidade do Kilamba, Luanda",
    officeBranchOffice: "Filial - Lobito, Benguela"
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About Us",
    navClients: "Partners",
    navQuote: "Request Quote",
    navContact: "Contacts",
    
    heroTitle: "Reliable Solutions and High-Quality Supplies for Marine & Industrial Sectors",
    heroSubtitle: "CAHOTA LDA is your strategic partner in Angola for Ship Chandling, Technical Supply, Food Supply, and integrated Logistics with premium after-sales support.",
    heroCTAQuote: "Request a Quote Now",
    heroCTAServices: "Explore Services",
    heroBadge: "Offshore & Industrial Partner in Angola",
    
    aboutTitle: "Corporate Presentation",
    aboutSubtitle: "Operating with standards of excellence for over 3 years in the main Angolan ports.",
    aboutText1: "CAHOTA LDA is an Angolan company headquartered in Luanda, strategically located at Ed. W5, Centralidade do Kilamba, with active branch representation in the main Angolan ports and provinces. Since 2022, we have been supplying qualified technical products and top-tier services.",
    aboutText2: "Our mission is to guarantee the continuity of your marine and industrial operations through on-time deliveries, compliance with strict international safety standards, and ongoing technical support. We stand out for our supply chain efficiency and matchless after-sales assistance.",
    aboutYears: "3+",
    aboutYearsText: "Years of Solid Operations in Angola",
    aboutLocationTitle: "Strategic Presence",
    aboutLocationText: "Luanda (Kilamba Headquarters) & Branch Office in Lobito, Benguela",
    
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
    service5Name: "Corporate Image Management",
    service5Desc: "Branding, creation, and positioning of your corporate visual identity and brand reputation in the Angolan market.",
    service5Points: [
      "Visual identity design, logos, and comprehensive brand books",
      "Strategic communication planning and corporate media presence",
      "Production of high-quality customized corporate uniforms and promotional gear",
      "Curation of corporate events and institutional branding support"
    ],
    service6Name: "Technological Solutions",
    service6Desc: "Modern IT infrastructure, custom software, secure networks, and smart support systems to optimize daily industrial operations.",
    service6Points: [
      "Custom software planning, web portals, and ERP database design",
      "Network infrastructure hardware setup, secure servers, and high-speed Wi-Fi",
      "Cybersecurity defense audits, automatic backups, and cloud storage systems",
      "Installation and upkeep of biometric access controls and CCTV surveillance networks"
    ],
    service7Name: "Insurance Services",
    service7Desc: "Comprehensive insurance consultancies and strategic placements ensuring safety/mitigation for company assets and workforce.",
    service7Points: [
      "Commercial fleet insurance, logistic cargo coverage, and asset security",
      "Marine, industrial, and major port operations liability coverage",
      "Tailor-made health insurance plans and work accident protections",
      "Active risk management assessments matching top Angolan insurance firms"
    ],
    service8Name: "Occupational Health & Medicine",
    service8Desc: "Complete occupational health programs conducted by specialists to ensure safety compliance and crew physical readiness.",
    service8Points: [
      "Pre-employment, specialized periodical, exit, and fit-for-duty medical tests",
      "Workplace Professional Risks Prevention Programs (PPRA) and hygiene reports",
      "Bespoke first aid training and emergency medical backstop on active sites",
      "Integrated sick leave administration, clinical tox tests, and health events"
    ],
    service9Name: "Civil Construction & Maintenance",
    service9Desc: "Erecting premium structures, site modifications, expansions, and structural updates for factories, depots, and corporate offices.",
    service9Points: [
      "Drafting civil blueprint diagrams, structural calculus, and site audits",
      "Building and expanding high-grade industrial warehouses and modern offices",
      "Structural rehabilitation, asphalt concrete laying, and soil stability services",
      "Corrective repairs, industrial protection paints, and water/drainage plumbing"
    ],
    service10Name: "App-Based Ride-Hailing & Taxi Service (Yango, Heetch, Bolt)",
    service10Desc: "Comprehensive corporate and personal ride-hailing solutions using registered leading digital platforms (Yango, Heetch, Bolt).",
    service10Points: [
      "Vetted, professional local drivers in major city centers and capital portals",
      "Unified billing for corporate travel, employees, and dedicated fleets",
      "Fast crew transit logistics connecting airports, seaport terminals, and hotels",
      "24/7 availability backed by real-time tracking, custom support, and modern vehicles"
    ],
    
    statsTitle: "Cahota in Numbers",
    statsVessels: "Vessels Served",
    statsReliability: "Delivery Reliability Rate",
    statsSupport: "Active Technical Support",
    
    clientsTitle: "Trusted Partners",
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
    vendorDocIntro: "We are CAHOTA LDA, an Angolan company headquartered at Ed. W5, Centralidade do Kilamba, Luanda, operating in the construction, marine, port, and offshore sectors. We introduce this letter to formally register our credentials as an approved supplier for your onshore/offshore supply requirements in Angola.",
    vendorDocObjective: "Our operational capabilities span reliable Ship Chandling, specialized Industrial/Technical Supplies, safe Food Provisions, and synchronized Logistics.",
    vendorDocLetterHeader: "To the Vendor Management & Procurement Team",
    vendorContactCTA: "Contact Procurement Manager & Send NIF",
    
    contactTitle: "Contact Us",
    contactSubtitle: "Strategically located in Kilamba (Luanda) and Lobito for immediate support and continuous deliveries.",
    contactAddress: "Head Office: Ed. W5, Centralidade do Kilamba, Luanda - Angola",
    contactPhone: "Phones",
    contactEmail: "General Email",
    contactHours: "Operating Hours",
    contactHoursValue: "Monday to Saturday - 24/7 for Emergencies & Supplies",
    officeHeadOffice: "Head Office - Centralidade do Kilamba, Luanda",
    officeBranchOffice: "Branch Office - Lobito, Benguela"
  }
};
