

export type Language = 'en' | 'es' | 'pt';

export const content = {
  en: {
    navbar: {
      home: "Home",
      solutions: "Solutions",
      about: "About",
      cta: "Contact Us"
    },
    hero: {
      cta: "Start Training",
      title_lines: ["Generative", "AI", "FOR"],
      rotating_words: ["PROFIT", "SCALE", "FUTURE", "POWER", "GROWTH"],
      subtitle: "Balance organic efficiency with AI precision. BeeFirst automates support tickets, boosts CSAT, and empowers your team."
    },
    chat: {
      initial_message: "Hello! I am BeeFirst's AI assistant. How can I help you transform your business today?",
      placeholder: "Type your message...",
      send: "Send",
      powered_by: "Powered by BeeFirst"
    },
    logo_marquee: {
      title: "pioneers in innovation"
    },
    solutions: {
      header: {
        title: "Our Solutions",
        subtitle: "Cutting-edge technology to solve real problems.",
        intro: "We don't just deliver software. We deliver operational results. From initial diagnosis to continuous evolution, our methodology ensures AI works for your business, not the other way around.",
      },
      hive: {
        badge: "SaaS Platform",
        title: "BeeFirst Hive",
        description: "The Operating System for AI Agents. Create, manage, and analyze your AI workforce in one central platform.",
        features: [
          { title: "Agent Builder", desc: "No-code configuration." },
          { title: "Omnichannel Hub", desc: "WhatsApp, Instagram & Web." },
          { title: "CRM Sync", desc: "HubSpot, Salesforce, Zendesk." },
          { title: "Live Analytics", desc: "Real-time cost & performance." }
        ],
        cta: "Explore Hive Platform"
      },
      custom: {
        badge: "Enterprise Engineering",
        title: "Tailor-Made Projects",
        description: "For complex operations requiring deep integration and custom architecture.",
        items: [
          { title: "Process Automation", desc: "We automate high-volume operational flows - support, back-office, scheduling, and admin tasks. Reduces manual effort, eliminates bottlenecks, and expands efficiency 24/7." },
          { title: "24x7 AI Agents", desc: "Intelligent agents that understand, respond, and execute tasks across multiple channels (WhatsApp, Web, CRM). They solve repetitive demands and deliver superior CX." },
          { title: "Predictive AI", desc: "Models that anticipate patterns and suggest high-precision actions, enabling faster and more assertive decisions in retention, sales, and resource allocation." },
          { title: "Omnichannel Smart Support", desc: "AI integrated into your channels for continuous, instant support. Auto-responses, smart routing, lead capture, and fluid processes with consistency." },
          { title: "Integrations & Orchestration", desc: "We connect AI to your existing systems (CRM, ERP, Helpdesk). Unify data, synchronize processes, and ensure automation acts across the entire customer journey." },
          { title: "Operational Intel & Dashboards", desc: "Daily dashboards showing interaction volume, auto-resolutions, response times, and critical flows. Clear data for quick decisions and continuous improvement." }
        ],
        disclaimer: "* All solutions are built on our proprietary frameworks, accelerating implementation and maximizing ROI.",
        cta_button: "Schedule Free Diagnosis"
      }
    },
    solutions_page: {
      hero: {
        badge: "Complete Ecosystem",
        title: "Your path to AI maturity.",
        subtitle: "Whether you need a robust SaaS platform to manage agents or a custom engineering squad for complex challenges, we provide the flexible infrastructure to scale your operation."
      },
      hive_deep_dive: {
        title: "BeeFirst Hive",
        subtitle: "The Operating System for Autonomous Agents",
        description: "Hive is our proprietary SaaS platform designed to orchestrate your AI workforce. It provides a centralized command center to build, deploy, monitor, and optimize your agents across all channels.",
        features: [
          { title: "Multi-Agent Orchestration", desc: "Agents communicate with each other to solve complex tasks collaboratively." },
          { title: "Universal Integrations", desc: "Seamlessly connects with your ERP, CRM, and external software ecosystem." },
          { title: "Humanized Experience", desc: "Natural Language Processing ensuring empathetic and context-aware interactions." },
          { title: "Rapid ROI", desc: "Fast implementation with adaptable results that impact the bottom line immediately." }
        ]
      },
      custom_deep_dive: {
        title: "Tailor-Made Engineering",
        subtitle: "For challenges that SaaS can't solve.",
        description: "We build bespoke solutions in all forms: Internal Products, API-first microservices, and Headless Architectures. If your operation requires specific security protocols or unique AI logic, we build it.",
        process_title: "Engineering Process",
        steps: [
          { title: "Discovery", desc: "Deep dive into your API and data structure." },
          { title: "Architecture", desc: "Designing secure, scalable pipelines." },
          { title: "Development", desc: "Building custom models and connectors." },
          { title: "Deployment", desc: "On-premise or Private Cloud options." }
        ]
      }
    },
    integrations: {
      title: "Universal Connectivity",
      desc: "BeeFirst connects natively to major market players. For complex scenarios, our engineering team builds custom integrations with your internal systems, legacy databases, or proprietary CRMs.",
      cta: "Talk to an Engineer",
      badge: "SOC 2 TYPE II COMPLIANT",
      tree: {
        root: "BeeFirst Core",
        middle: [
          { label: "Your CRM", desc: "Salesforce, HubSpot..." },
          { label: "Your Chat", desc: "WhatsApp, Slack..." },
          { label: "Internal Sys", desc: "Legacy & ERP" },
          { label: "Databases", desc: "SQL, NoSQL, Vector" }
        ],
        bottom: [
          { label: "End Customers", desc: "Better Experience" },
          { label: "Your Workforce", desc: "Higher Efficiency" }
        ]
      }
    },
    technology: {
      title: "Business and Technology expertise in sync to drive real results.",
      highlight: "in sync",
      sub1: "Business Strategy",
      desc1: "We are not just developers. We understand your KPIs and market challenges to build solutions that deliver financial returns and operational efficiency.",
      sub2: "Market Connection",
      desc2: "We bridge your operation with the state-of-the-art in technology. We bring the latest market innovations in AI into your company securely.",
      card1: { title: "Result Focus", desc: "Optimization targeted at ROI growth." },
      card2: { title: "High Tech", desc: "Integration with SOTA models." }
    },
    metrics: {
      items: [
        { value: "+26%", label: "CAGR until 2030", desc: "Global AI customer service market grows over 26% annually." },
        { value: "80%", label: "Automated Interactions", desc: "By 2029, most Tier 1 support will be handled by AI." },
        { value: "30%", label: "Cost Reduction", desc: "Immediate OPEX reduction for companies adopting 24x7 AI." },
        { value: "+20%", label: "CSAT Increase", desc: "Instant 24x7 support improves experience, retention, and conversion." },
        { value: "3x - 8x", label: "Average ROI", desc: "Depends on process (back-office, sales, support). Based on public cases." },
        { value: "3-6 mo", label: "Typical Payback", desc: "Short-term return on investment for most intelligent automation cases." },
      ],
      source: "Benchmark sources: Gartner, McKinsey, Public AI Case Studies."
    },
    process: {
      title: "How We Work",
      subtitle: "From diagnosis to continuous evolution.",
      steps: [
        { title: "Diagnosis & Blueprint", subtitle: "5-Day Sprint", desc: "We map processes, identify automation opportunities, and define the solution blueprint. Deliverable: clear scope, automatable flows, roadmap, and ROI indicators." },
        { title: "Development & Customization", subtitle: "Upfront", desc: "We build the solution using our proprietary AI frameworks and adapt it to your operation's context. Deliverable: trained agents, configured integrations, custom flows, ready-to-use environment." },
        { title: "Go Live & Performance Boost", subtitle: "First Month", desc: "Assisted deployment, fine-tuning, and real-world testing. Deliverable: 24x7 operation running, initial metrics on cost reduction and support impact." },
        { title: "Continuous Evolution", subtitle: "Monthly", desc: "Monitoring, recurring improvements, and new modules. Includes: agent performance tuning, flow evolution, new models/skills, governance, security, and integrated GDPR. Deliverable: always updated, efficient operation with increasing returns." },
        { title: "Reports & Dashboard", subtitle: "Daily", desc: "Continuous agent performance monitoring with daily operational reports. Dashboard with essential metrics: volume, auto-resolutions, response times, and engagement. Deliverable: daily updated data and insights without needing financial data access." }
      ]
    },
    differentials: {
      title: "Why BeeFirst?",
      subtitle: "Differentials that put your company ahead.",
      description: "We prioritize your data privacy. BeeFirst is built for enterprises that demand the highest security standards.",
      items: [
        { title: "Practical & Modular AI", desc: "Proprietary frameworks that accelerate implementation and maximize ROI." },
        { title: "Operational Efficiency", desc: "End-to-end automation to reduce operational load and eliminate rework." },
        { title: "Revenue Acceleration", desc: "Increased conversion, higher retention, and sales funnel optimization." },
        { title: "Decision Intelligence", desc: "Actionable insights from real data, supporting high-assertiveness decisions." },
        { title: "Scalable Architecture", desc: "Reusable modules, adaptable to multiple verticals, delivered with speed." },
        { title: "Profit-Centric Approach", desc: "Technology is the means, profit is the end. We design every flow to directly impact the P&L, maximizing financial returns." }
      ]
    },
    testimonial: {
      quote: "\"We used to drown in support tickets during peak season. BeeFirst's AI agents handled 60% of volume instantly. It's not just efficient; it's transformed our customer happiness.\"",
      author: "Sarah Jenkins",
      role: "Head of CX at Nova Retail",
      chat: {
        ai: "I've processed your refund.",
        user: "That was fast! Thanks."
      }
    },
    pricing: {
      title: "Our Prices",
      subtitle: "Transparent investment for measurable results.",
      cta_button: "Get Custom Proposal",
      cards: [
        { title: "Setup", subtitle: "Development & Customization", price: "From €500", subPrice: "(R$ 1.500)", note: "Tailored projects based on scope" },
        { title: "Monthly", subtitle: "Operation & Continuous Evolution", price: "From €400", subPrice: "(R$ 875)", note: "Includes daily reports, adjustments, new flows & agent evolution" }
      ],
      footer: "Values vary based on complexity, integrations, volume, and specific needs."
    },
    cta: {
      title: "Ready to apply practical AI to your business?",
      desc: "Schedule a free diagnostic session and receive an AI opportunity blueprint for your operation.",
      button: "Schedule Diagnosis"
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What exactly does BeeFirst deliver?", a: "We deliver AI agents that automate support and processes 24/7, reducing operational costs, increasing efficiency, and improving customer experience. We develop, customize, and operate the solution continuously." },
        { q: "How long does implementation take?", a: "Typical cycle: Diagnosis (5 days), Development & Customization (2-6 weeks), Go-Live (1st month). After that, the operation remains active with continuous evolution." },
        { q: "Does it really work 24x7?", a: "Yes. Agents operate continuously without breaks, offering instant responses and reducing reliance on human teams for repetitive tasks." },
        { q: "Do I need to change my systems?", a: "No. We integrate AI into the systems and channels you already use (WhatsApp, Site, CRM, ERP, Helpdesk). We avoid complex changes." },
        { q: "How much does it reduce costs?", a: "Depends on volume, but clients reduce manual effort in up to 70% of repetitive interactions, lowering support costs and operational load." },
        { q: "Does it replace my team?", a: "It doesn't replace—it frees the team for strategic tasks. Agents handle high-volume repetitive work; your team handles high-value situations." },
        { q: "How does pricing work?", a: "Our model consists of: Upfront (dev, customization, integrations) and Monthly (continuous operation, agent evolution, maintenance, reporting)." },
        { q: "Which sectors can use this?", a: "Gyms, hotels, clinics, retail, e-commerce, telecom, education, etc. Any sector with high volume or repetitive processes benefits." },
        { q: "How do you ensure quality?", a: "We train the AI with your data/docs. Post go-live, we monitor results daily and adjust continuously to improve precision." },
        { q: "Do we need to provide financial data?", a: "No. We work with operational data and business rules. You track impact via operational reports without sharing financial info." },
        { q: "Is it GDPR/LGPD compliant?", a: "Yes. We use data minimization principles and secure processing at all stages, ensuring compliance and security best practices." },
        { q: "How are you different from others?", a: "We are an AI boutique focused on: fast implementation, real customization, performance-oriented approach, and continuous 24x7 operation with incremental intelligence. Not just a 'chatbot'." },
        { q: "Can I start small?", a: "Yes. We start with an initial module or specific flow and expand as impact is proven. We adopt a progressive approach." },
        { q: "How do we measure success?", a: "We track: automated interaction volume, resolution rate, response time, peaks, engagement, and user flow. All data is available in the dashboard." },
      ]
    },
    about: {
      title: "About BeeFirst",
      subtitle: "High-end engineering and executive vision.",
      badge: "Our Story",
      stats: {
        focus: "Business Focus",
        eng: "Engineering"
      },
      mission: {
        p1: "We operate at the intersection of cutting-edge engineering and executive vision to deliver AI solutions that solve real problems.",
        p2: "We are not just software developers. We are strategic partners who understand business, finance, and operations. Our mission is clear: transform advanced technology into measurable results of efficiency, cost reduction, and growth."
      },
      team: {
        title: "Leadership",
        members: [
          {
            name: "Fabio Castanheira",
            role: "Founder & CEO",
            focus: "Strategic Vision & Execution",
            bio: [
              "Executive with international career and experience in strategy, finance, operations, and digital transformation in sectors such as telecom, investment banking, strategic consulting, energy, and manufacturing. He has held C-level positions in multinationals, leading agendas of growth, efficiency, and high-impact restructuring.",
              "With a strong commercial base and focus on results, he combines strategic vision and rapid execution, transforming technology and automation into real performance. His corporate experience in different markets allows deep understanding of needs, priorities, and challenges faced by companies.",
              "At BeeFirst, he applies this trajectory to develop AI solutions that increase efficiency, reduce costs, and accelerate client growth."
            ]
          },
          {
            name: "Lucas Miyazawa",
            role: "Founder & CTO",
            focus: "Technology & Innovation",
            bio: [
              "Technology specialist with experience in high-paced startups and international operations in Asia. Graduated in Data Science with 2x Microsoft certifications (Azure Data & AI) and 2x Databricks Associate. Possesses deep domain knowledge in modern AI and Analytics solutions, acting in architecture and scalability of 24x7 intelligent systems, focusing on robustness, delivery speed, and continuous evolution.",
              "At BeeFirst, he applies this experience in developing high-impact applications, prioritizing security, clear metrics, and real value generation for the business."
            ]
          }
        ]
      },
      dna: {
        title: "Our DNA",
        items: [
          { title: "Speed", desc: "Fast and agile implementation." },
          { title: "Impact", desc: "Total focus on ROI and results." },
          { title: "Customization", desc: "Real solutions, not generic ones." }
        ]
      },
      conclusion: "We create customized solutions using reusable AI assets. This allows us to generate immediate impact, build credibility, and develop a scalable product with strong market potential."
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Choose the best way to connect with us.",
      whatsapp: {
        title: "Talk to our AI Agent",
        desc: "Chat with Beea, our virtual assistant who will help you find the ideal BeeFirst solution for your company and understand our services.",
        button: "Start WhatsApp Chat"
      },
      form: {
        title: "Contact Specialists",
        desc: "Fill out the form below and our engineering team will contact you.",
        fields: {
          name: "Name",
          email: "Email",
          phone: "Phone Number",
          company: "Company",
          message: "Message"
        },
        submit: "Send Message"
      }
    },
    footer: {
      description: "We unite elite software engineering with strategic business vision. Transforming your operation with AI Agents that generate real efficiency and financial return.",
      nav: {
        product: "Product",
        integrations: "Integrations",
        pricing: "Pricing",
        resources: "Resources",
        enterprise: "Enterprise"
      },
      social: {
        email: "Email"
      },
      rights: "All rights reserved.",
      crafted: "Crafted by"
    },
    dashboard: {
      title: "Dashboard",
      live: "Live",
      overview: "Overview",
      metrics: {
        total_msg: "Total Messages",
        active_users: "Active Users",
        leads: "Leads Generated",
        total_users: "Total Users",
        escalations: "Escalations",
        esc_rate: "Escalation Rate",
        retention: "Retention Rate",
        avg_msg: "Avg Msg/User"
      },
      advanced: "Advanced Metrics",
      charts: {
        weekly: "Weekly Activity",
        growth: "User Growth"
      },
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      solutions: "Soluciones",
      about: "Nosotros",
      cta: "Contáctanos"
    },
    hero: {
      cta: "Comenzar Entrenamiento",
      title_lines: ["IA", "Generativa", "PARA"],
      rotating_words: ["LUCRO", "ESCALA", "FUTURO", "PODER", "CRECIMIENTO"],
      subtitle: "Equilibre eficiencia orgánica con precisión de IA. BeeFirst automatiza tickets de soporte, aumenta el CSAT y empodera a su equipo."
    },
    logo_marquee: {
      title: "pioneros en innovación"
    },
    solutions: {
      header: {
        title: "Nuestras Soluciones",
        subtitle: "Tecnología de punta para resolver problemas reales.",
        intro: "No solo entregamos software. Entregamos resultados operativos. Desde el diagnóstico inicial hasta la evolución continua, nuestra metodología garantiza que la IA trabaje para su negocio, y no al revés.",
      },
      hive: {
        badge: "Plataforma SaaS",
        title: "BeeFirst Hive",
        description: "El Sistema Operativo para Agentes de IA. Cree, gestione y analice su fuerza de trabajo de IA en una plataforma central.",
        features: [
          { title: "Constructor de Agentes", desc: "Configuración no-code." },
          { title: "Hub Omnichannel", desc: "WhatsApp, Instagram y Web." },
          { title: "Sincronización CRM", desc: "HubSpot, Salesforce, Zendesk." },
          { title: "Analítica en Vivo", desc: "Costos y rendimiento real." }
        ],
        cta: "Explorar Plataforma Hive"
      },
      custom: {
        badge: "Ingeniería Enterprise",
        title: "Proyectos a Medida",
        description: "Para operaciones complejas que requieren integración profunda y arquitectura personalizada.",
        items: [
          { title: "Automatización de Procesos", desc: "Automatizamos flujos de alto volumen: soporte, backoffice, agenda y tareas administrativas. Reduzimos esfuerzo manual y ampliamos eficiencia 24/7." },
          { title: "Agentes de IA 24x7", desc: "Agentes inteligentes que entienden y ejecutan tareas en múltiples canales (WhatsApp, Web, CRM). Resuelven demandas repetitivas y mejoran la CX." },
          { title: "IA Predictiva", desc: "Modelos que anticipan patrones y sugieren acciones de alta precisión para decisiones rápidas en retención, ventas y recursos." },
          { title: "Atención Omnichannel", desc: "IA integrada a sus canales para atención continua. Respuestas automáticas, enrutamiento inteligente y captura de leads." },
          { title: "Integraciones y Orquestación", desc: "Conectamos la IA a sus sistemas actuales (CRM, ERP). Unificamos datos y aseguramos que la automatización actúe en todo el viaje del cliente." },
          { title: "Inteligencia Operacional", desc: "Dashboards y reportes diarios de volumen, resoluciones y tiempos. Datos claros para decisiones rápidas y mejora continua." }
        ],
        disclaimer: "* Todas las soluciones se construyen sobre nuestros frameworks propietarios, acelerando la implementación y maximizando el ROI.",
        cta_button: "Agendar Diagnóstico Gratuito"
      }
    },
    solutions_page: {
      hero: {
        badge: "Ecosistema Completo",
        title: "Su camino hacia la madurez de la IA.",
        subtitle: "Desde una plataforma SaaS robusta hasta un equipo de ingeniería dedicado, ofrecemos la infraestructura flexible para escalar su operación."
      },
      hive_deep_dive: {
        title: "BeeFirst Hive",
        subtitle: "El Sistema Operativo para Agentes Autónomos",
        description: "Hive es nuestra plataforma SaaS patentada diseñada para orquestar su fuerza laboral de IA. Proporciona un centro de comando centralizado para crear, implementar, monitorear y optimizar sus agentes en todos los canales.",
        features: [
          { title: "Orquestación Multi-Agente", desc: "Los agentes se comunican entre sí para resolver tareas complejas de forma colaborativa." },
          { title: "Integraciones Universales", desc: "Se conecta a la perfección con su ERP, CRM y ecosistema de software externo." },
          { title: "Experiencia Humanizada", desc: "Procesamiento de lenguaje natural que garantiza interacciones empáticas y contextuales." },
          { title: "ROI Rápido", desc: "Implementación rápida con resultados adaptables que impactan el resultado final de inmediato." }
        ]
      },
      custom_deep_dive: {
        title: "Ingeniería a Medida",
        subtitle: "Para desafíos que el SaaS no puede resolver.",
        description: "Construimos soluciones a medida en todas sus formas: Productos Internos, microservicios API-first y Arquitecturas Headless. Si su operación requiere protocolos de seguridad específicos o lógica de IA única, nosotros la construimos.",
        process_title: "Proceso de Ingeniería",
        steps: [
          { title: "Discovery", desc: "Análisis profundo de su API y estructura de datos." },
          { title: "Arquitectura", desc: "Diseño de pipelines seguros y escalables." },
          { title: "Desarrollo", desc: "Construcción de modelos y conectores personalizados." },
          { title: "Implementación", desc: "Opciones on-premise o nube privada." }
        ]
      }
    },
    integrations: {
      title: "Conectividad Universal",
      desc: "BeeFirst se conecta nativamente con los principales actores del mercado. Para escenarios complejos, nuestra ingeniería desarrolla integraciones a medida con sus sistemas internos, bases de datos heredadas o CRMs propietarios.",
      cta: "Hable con un Ingeniero",
      badge: "CUMPLIMIENTO SOC 2 TIPO II",
      tree: {
        root: "Núcleo BeeFirst",
        middle: [
          { label: "Su CRM", desc: "Salesforce, HubSpot..." },
          { label: "Su Chat", desc: "WhatsApp, Slack..." },
          { label: "Sistemas Internos", desc: "Legacy & ERP" },
          { label: "Bases de Datos", desc: "SQL, NoSQL, Vector" }
        ],
        bottom: [
          { label: "Cliente Final", desc: "Mejor Experiencia" },
          { label: "Su Equipo", desc: "Mayor Eficiencia" }
        ]
      }
    },
    technology: {
      title: "Experiencia de Negocios y Tecnología en sintonía para generar resultados.",
      highlight: "en sintonía",
      sub1: "Estrategia de Negocio",
      desc1: "No somos solo desarrolladores. Entendemos sus KPIs y desafíos de mercado para crear soluciones que traen retorno financiero y eficiencia.",
      sub2: "Conexión con el Mercado",
      desc2: "Conectamos su operación con el estado del arte de la tecnología. Llevamos las innovaciones más recientes del mercado de IA a su empresa con seguridad.",
      card1: { title: "Foco en Resultados", desc: "Optimización enfocada en el crecimiento del ROI." },
      card2: { title: "Alta Tecnología", desc: "Integración con modelos SOTA." }
    },
    metrics: {
      items: [
        { value: "+26%", label: "CAGR hasta 2030", desc: "El mercado global de IA para atención al cliente crece más del 26% anual." },
        { value: "80%", label: "Interacciones Automatizadas", desc: "Para 2029, la mayoría del soporte de primer nivel será por IA." },
        { value: "30%", label: "Reducción de Costos", desc: "Reducción inmediata de OPEX para empresas que adoptan IA 24x7." },
        { value: "+20%", label: "Aumento de CSAT", desc: "Atención instantánea 24x7 mejora experiencia, retención y conversión." },
        { value: "3x - 8x", label: "ROI Promedio", desc: "Depende del proceso (back-office, ventas, atención). Casos públicos." },
        { value: "3-6 m", label: "Payback Típico", desc: "Retorno de inversión a corto plazo para la mayoría de los casos de automatización." },
      ],
      source: "Fuentes de referencia: Gartner, McKinsey, Casos públicos de IA."
    },
    process: {
      title: "Cómo Trabajamos",
      subtitle: "Del diagnóstico a la evolución continua.",
      steps: [
        { title: "Diagnóstico y Blueprint", subtitle: "Sprint de 5 días", desc: "Mapeamos procesos, identificamos oportunidades y definimos o blueprint. Entregable: alcance claro, flujos automatizables, roadmap e indicadores de ROI." },
        { title: "Desarrollo y Personalización", subtitle: "Upfront", desc: "Construimos la solución con nuestros frameworks de IA y la adaptamos a su contexto. Entregable: agentes entrenados, integraciones, flujos personalizados, ambiente listo." },
        { title: "Go Live y Mejora de Rendimiento", subtitle: "Primer Mes", desc: "Implementación asistida, ajustes finos y pruebas reales. Entregable: operación 24x7 activa, métricas iniciales de reducción de costos e impacto." },
        { title: "Evolución Continua", subtitle: "Mensualidad", desc: "Seguimiento, mejoras recurrentes y nuevos módulos. Incluye: ajuste de agentes, nuevos modelos/habilidades, gobernanza y seguridad. Entregable: operación siempre actualizada y eficiente." },
        { title: "Informes y Dashboard", subtitle: "Diario", desc: "Monitoreo continuo con informes diarios. Dashboard con métricas esenciales: volumen, auto-resolutions, tiempos de respuesta. Entregable: datos actualizados sin acceso a información financiera." }
      ]
    },
    differentials: {
      title: "¿Por qué BeeFirst?",
      subtitle: "Diferenciales que ponen a su empresa adelante.",
      description: "Priorizamos la privacidad de sus datos. BeeFirst está construido para empresas que exigen los más altos estándares.",
      items: [
        { title: "IA Práctica y Modular", desc: "Frameworks propietarios que aceleran la implementación y maximizan el ROI." },
        { title: "Eficiencia Operacional", desc: "Automatización punta a punta para reducir carga operativa y eliminar retrabajo." },
        { title: "Aceleración de Ingresos", desc: "Aumento de conversión, mayor retención y optimización de embudos comerciales." },
        { title: "Inteligencia de Decisión", desc: "Insights accionables basados en datos reales para decisiones acertadas." },
        { title: "Arquitectura Escalable", desc: "Módulos reutilizables, adaptables a múltiples verticales, entregados con velocidad." },
        { title: "Enfoque en Rentabilidad", desc: "La tecnología es el medio, el lucro es el fin. Diseñamos cada flujo para impactar directamente en el P&L, maximizando el retorno financiero." }
      ]
    },
    testimonial: {
      quote: "\"Nos ahogábamos en tickets de soporte en temporada alta. Los agentes de BeeFirst manejaron el 60% del volumen al instante. No es solo eficiente; transformó la felicidad del cliente.\"",
      author: "Sarah Jenkins",
      role: "Head de CX en Nova Retail",
      chat: {
        ai: "He procesado su reembolso.",
        user: "¡Qué rápido! Gracias."
      }
    },
    pricing: {
      title: "Nuestros Precios",
      subtitle: "Inversión transparente para resultados medibles.",
      cta_button: "Recibir Propuesta",
      cards: [
        { title: "Setup", subtitle: "Desarrollo y Personalización", price: "Desde €500", subPrice: "(R$ 1.500)", note: "Proyectos a medida según alcance" },
        { title: "Mensualidad", subtitle: "Operación y Evolución", price: "Desde €400", subPrice: "(R$ 875)", note: "Incluye reportes diarios, ajustes y nuevos flujos" }
      ],
      footer: "Valores varían según complejidad, integraciones, volumen y necesidades."
    },
    cta: {
      title: "¿Listo para aplicar IA práctica?",
      desc: "Agende una sesión gratuita de diagnóstico y reciba un blueprint de oportunidades de IA.",
      button: "Agendar Diagnóstico"
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Qué entrega exactamente BeeFirst?", a: "Entregamos agentes de IA que automatizam atención y procesos 24/7, reduzindo costos y mejorando la CX. Desarrollamos, personalizamos y operamos la solución." },
        { q: "¿Cuánto tiempo toma implementar?", a: "Ciclo típico: Diagnóstico (5 días), Desarrollo (2-6 semanas), Go-Live (1er mes). Luego, operación continua." },
        { q: "¿Funciona realmente 24x7?", a: "Sí. Los agentes operan sin pausas, ofreciendo respuestas instantáneas y reduciendo dependencia humana." },
        { q: "¿Necesito cambiar mis sistemas?", a: "No. Integramos la IA a los sistemas y canales que ya usa (WhatsApp, Sitio, CRM, ERP). Evitamos cambios complejos." },
        { q: "¿Cuánto reduce el costo operativo?", a: "Depende del volumen, pero clientes reducen esfuerzo manual hasta en un 70% de interacciones repetitivas." },
        { q: "¿Sustituye a mi equipo?", a: "No, libera al equipo para tareas estratégicas. Los agentes cuidan el volumen repetitivo; su equipo las situaciones de valor." },
        { q: "¿Cómo funcionan los precios?", a: "Modelo: Upfront (dev, personalización) y Mensualidad (operación continua, evolución, mantenimiento)." },
        { q: "¿Qué sectores pueden usarlo?", a: "Gimnasios, hoteles, clínicas, retail, e-commerce, telecom, educación, etc. Cualquier sector con alto volumen o procesos repetitivos." },
        { q: "¿Cómo garantizan la calidad?", a: "Entrenamos la IA con sus datos. Post go-live, monitoreamos resultados diariamente y ajustamos para mejorar precisión." },
        { q: "¿Necesitamos dar datos financieros?", a: "No. Trabajamos con datos operativos. Usted sigue el impacto vía reportes operativos." },
        { q: "¿Cumple con LGPD/GDPR?", a: "Sí. Usamos principios de minimización de datos y seguridad en todas las etapas." },
        { q: "¿En qué se diferencian?", a: "Somos una boutique de IA: implementación rápida, personalización real, enfoque en desempeño y operación continua. No solo un 'chatbot'." },
        { q: "¿Puedo empezar pequeño?", a: "Sí. Empezamos con un módulo inicial y ampliamos conforme aparece el impacto." },
        { q: "¿Cómo medimos el éxito?", a: "Monitoreamos volumen, tasa de resolución, tiempos, picos y engagement en el dashboard." },
      ]
    },
    about: {
      title: "Sobre BeeFirst",
      subtitle: "Ingeniería de punta y visión ejecutiva.",
      badge: "Nuestra Historia",
      stats: {
        focus: "Enfoque de Negocios",
        eng: "Ingeniería"
      },
      mission: {
        p1: "Operamos en la intersección entre ingeniería de punta y visión ejecutiva para entregar soluciones de IA que resuelven problemas problemas reales.",
        p2: "No somos solo desarrolladores de software. Somos socios estratégicos que entienden de negocios, finanzas y operaciones. Nuestra misión es clara: transformar tecnología avanzada en resultados medibles de eficiencia, costo y crecimiento."
      },
      team: {
        title: "Liderazgo",
        members: [
          {
            name: "Fabio Castanheira",
            role: "Founder & CEO",
            focus: "Visión Estratégica y Ejecución",
            bio: [
              "Ejecutivo con carrera internacional y experiencia en estrategia, finanzas, operaciones y transformación digital en sectores de telecom, banca de inversión, consultoría estratégica, energía y manufactura. Actuó en cargos C-level en multinacionales, liderando agendas de crecimiento, eficiencia y reestructuraciones de alto impacto.",
              "Con fuerte base comercial y foco en resultados, combina visión estratégica y ejecución rápida, transformando tecnología y automatización en performance real. Su vivencia corporativa en diferentes mercados permite comprender profundamente las necesidades, prioridades y desafíos enfrentados por las empresas.",
              "En BeeFirst, aplica esa trayectoria para desarrollar soluciones de IA que aumentan eficiencia, reducen costos y aceleran el crecimiento de los clientes."
            ]
          },
          {
            name: "Lucas Miyazawa",
            role: "Founder & CTO",
            focus: "Tecnología e Innovación",
            bio: [
              "Especialista en tecnología con experiencia en startups de alto ritmo y actuación internacional en Asia. Graduado en Ciencia de Datos y posee certificaciones 2x Microsoft (Azure Data & AI) y 2x Databricks Associate. Posee dominio profundo en soluciones modernas de IA y Analytics, actuando en la arquitectura y escalabilidade de sistemas inteligentes 24×7, con foco en robustez, velocidad de entrega y evolución continua.",
              "En BeeFirst, aplica esa experiencia en el desarrollo de aplicaciones de alto impacto, priorizando seguridad, métricas claras y generación de valor real para el negocio."
            ]
          }
        ]
      },
      dna: {
        title: "Nuestro ADN",
        items: [
          { title: "Velocidad", desc: "Implementación rápida y ágil." },
          { title: "Impacto", desc: "Foco total en ROI y resultados." },
          { title: "Personalización", desc: "Soluciones reales, no genéricas." }
        ]
      },
      conclusion: "Creamos soluciones personalizadas usando assets reutilizables de IA. Esto nos permite generar impacto inmediato, construir credibilidad y desarrollar un producto escalable con fuerte potencial de mercado."
    },
    contact: {
      title: "Hablemos",
      subtitle: "Elija la mejor manera de conectarse con nosotros.",
      whatsapp: {
        title: "Hablar con nuestra agente de IA",
        desc: "Hable con Beea, nuestra asistente virtual que le ayudará a encontrar la solución ideal de BeeFirst para su empresa y entender nuestros servicios.",
        button: "Iniciar Chat en WhatsApp"
      },
      form: {
        title: "Contactar Especialistas",
        desc: "Complete el formulario a continuación y nuestro equipo de ingeniería se comunicará con usted.",
        fields: {
          name: "Nombre",
          email: "Email",
          phone: "Número de Teléfono",
          company: "Empresa",
          message: "Mensaje"
        },
        submit: "Enviar Mensaje"
      }
    },
    footer: {
      description: "Unimos ingeniería de software de élite y visión estratégica de negocios. Transformamos su operación con Agentes de IA que generan eficiencia real y retorno financiero.",
      nav: {
        product: "Producto",
        integrations: "Integraciones",
        pricing: "Precios",
        resources: "Recursos",
        enterprise: "Empresarial"
      },
      social: {
        email: "E-mail"
      },
      rights: "Todos los derechos reservados.",
      crafted: "Creado por"
    },
    dashboard: {
      title: "Dashboard",
      live: "En Vivo",
      overview: "Visión General",
      metrics: {
        total_msg: "Total Mensajes",
        active_users: "Usuarios Activos",
        leads: "Leads Generados",
        total_users: "Total Usuarios",
        escalations: "Escalamientos",
        esc_rate: "Tasa Escalamiento",
        retention: "Tasa Retención",
        avg_msg: "Prom Msj/Usuario"
      },
      advanced: "Métricas Avanzadas",
      charts: {
        weekly: "Actividad Semanal",
        growth: "Crecimiento Usuarios"
      },
      days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    }
  },
  pt: {
    navbar: {
      home: "Início",
      solutions: "Soluções",
      about: "Sobre",
      cta: "Fale Conosco"
    },
    hero: {
      cta: "Iniciar Treinamento",
      title_lines: ["IA", "Generativa", "PARA"],
      rotating_words: ["LUCRO", "ESCALA", "FUTURO", "PODER", "CRESCIMENTO"],
      subtitle: "Equilibre eficiência orgânica com precisão de IA. BeeFirst automatiza chamados de suporte, aumenta o CSAT e empodera sua equipe."
    },
    logo_marquee: {
      title: "pioneiros em inovação"
    },
    solutions: {
      header: {
        title: "Nossas Soluções",
        subtitle: "Tecnologia de ponta para resolver problemas reais.",
        intro: "Não entregamos apenas software. Entregamos resultados operacionais. Do diagnóstico inicial à evolução contínua, nossa metodologia garante que a IA trabalhe para o seu negócio, e não o contrário.",
      },
      hive: {
        badge: "",
        title: "BeeFirst Hive",
        description: "O Sistema Operacional para Agentes de IA. Crie, gerencie e analise sua força de trabalho de IA em uma plataforma central.",
        features: [
          { title: "Gerenciador de Agentes", desc: "Diversos agentes executando ações em seus sistemas e atendendo clientes." },
          { title: "Hub Omnichannel", desc: "WhatsApp, Instagram e Facebook." },
          { title: "Sincronización CRM", desc: "Integração com seu CRM e softwares para comunicação total." },
          { title: "Análise em Tempo Real", desc: "Analytics e dados ao vivo." }
        ],
        cta: "Explorar Plataforma Hive"
      },
      custom: {
        badge: "Engenharia Enterprise",
        title: "Projetos Sob Medida",
        description: "Para operações complexas que exigem integração profunda e arquitetura personalizada.",
        items: [
          { title: "Automatização de Processos", desc: "Automatizamos fluxos operacionais de alto volume - atendimento, suporte, backoffice, agendamentos e tarefas administrativas. Reduzimos esforço manual, eliminamos gargalos e ampliamos eficiência com execução consistente e 24×7." },
          { title: "Agentes de IA 24×7", desc: "Criamos agentes inteligentes que entendem, respondem e executam tarefas em múltiplos canais (WhatsApp, Web, CRM e sistemas internos). Eles resolvem demandas repetitivas, ampliam capacidade operacional e entregam experiência superior ao cliente." },
          { title: "IA Preditiva", desc: "Construímos modelos que antecipam padrões e sugerem ações de alta precisão, permitindo decisões mais rápidas e assertivas em retenção, vendas, operação e alocação de recursos." },
          { title: "Atendimento Inteligente Omnichannel", desc: "Integramos IA aos seus canais de comunicação para oferecer atendimento contínuo e instantâneo. Respostas automáticas, roteamento inteligente, captura de leads e processos fluidos, tudo com consistência e autonomia." },
          { title: "Integrações & Orquestração", desc: "Conectamos a IA aos sistemas que você já utiliza (CRMs, ERPs, plataformas de atendimento, bases internas). Unificamos dados, sincronizamos processos e garantimos que a automação atue em toda a jornada do cliente." },
          { title: "Inteligência Operacional & Dashboards", desc: "Criamos dashboards e relatórios diários que mostram volume de interações, resoluções automáticas, tempos de resposta, fluxos críticos e performance geral. Dados claros para decisões rápidas e melhoria contínua." }
        ],
        disclaimer: "* Todas as soluções são construídas sobre nossos frameworks proprietários, acelerando a implementação e maximizando o ROI.",
        cta_button: "Agendar Diagnóstico Gratuito"
      }
    },
    solutions_page: {
      hero: {
        badge: "Ecosistema Completo",
        title: "Seu caminho para a maturidade em IA.",
        subtitle: "Seja uma plataforma SaaS robusta ou um esquadrão de engenharia dedicado, oferecemos a infraestrutura flexível para escalar sua operação."
      },
      hive_deep_dive: {
        title: "BeeFirst Hive",
        subtitle: "O Sistema Operacional para Agentes Autônomos",
        description: "Hive é nossa plataforma SaaS proprietária desenhada para orquestrar sua força de trabalho de IA. Oferece um comando centralizado para criar, implantar, monitorar e otimizar seus agentes em todos os canais.",
        features: [
          { title: "Orquestração Multi-Agente", desc: "Agentes comunicam-se entre si para resolver tarefas complexas colaborativamente." },
          { title: "Integrações Universales", desc: "Conecta-se perfeitamente ao seu ERP, CRM e ecossistema de software externo." },
          { title: "Atendimento Humanizado", desc: "Processamento de linguagem natural garantindo interações empáticas e contextuais." },
          { title: "Impacto Rápido", desc: "Implementação veloz com resultados adaptáveis que impactam o bottom line imediatamente." }
        ]
      },
      custom_deep_dive: {
        title: "Engenharia Sob Medida",
        subtitle: "Para desafios que o SaaS não resolve.",
        description: "Desenvolvemos soluções sob medida em todas as formas: Produtos Internos, microsserviços API-first e Arquiteturas Headless. Se sua operação exige protocolos de segurança específicos ou lógica de IA única, nós construímos.",
        process_title: "Processo de Engenharia",
        steps: [
          { title: "Discovery", desc: "Mergulho profundo na sua API e estrutura de dados." },
          { title: "Arquitetura", desc: "Design de pipelines seguros e escaláveis." },
          { title: "Desenvolvimento", desc: "Construção de modelos e conectores customizados." },
          { title: "Implantação", desc: "Opções On-premise ou Private Cloud." }
        ]
      }
    },
    integrations: {
      title: "Conectividade sem limites",
      desc: "A BeeFirst conecta-se nativamente aos principais players do mercado. Para cenários complexos, nossa engenharia desenvolve integrações sob medida com seus sistemas internos, legados ou CRMs proprietários.",
      cta: "Fale com um Engenheiro",
      badge: "COMPLIANCE SOC 2 TIPO II",
      tree: {
        root: "BeeFirst Core",
        middle: [
          { label: "Seu CRM", desc: "Salesforce, HubSpot..." },
          { label: "Seu Chat", desc: "WhatsApp, Slack..." },
          { label: "Sistemas Internos", desc: "Legacy & ERP" },
          { label: "Base de Dados", desc: "SQL, NoSQL, Vector" }
        ],
        bottom: [
          { label: "Cliente Final", desc: "Melhor Experiência" },
          { label: "Colaboradores", desc: "Maior Eficiência" }
        ]
      }
    },
    technology: {
      title: "Expertise de Negócio e Tecnologia em sintonia para gerar resultados.",
      highlight: "em sintonia",
      sub1: "Estratégia de Negocio",
      desc1: "Não somos apenas desenvolvedores. Entendemos seus KPIs e desafios de mercado para criar soluções que trazem retorno financeiro e eficiência.",
      sub2: "Conexão com o Mercado",
      desc2: "Conectamos sua operação ao estado da arte da tecnologia. Trazemos as inovações mais recentes do mercado de IA para dentro da sua empresa com segurança.",
      card1: { title: "Foco em Resultado", desc: "Otimização voltada para crescimento de ROI." },
      card2: { title: "Alta Tecnologia", desc: "Integração com modelos SOTA." }
    },
    metrics: {
      items: [
        { value: "+26%", label: "CAGR até 2030", desc: "O mercado global de IA para atendimento ao cliente cresce acima de 26% ao ano." },
        { value: "80%", label: "Interações Automatizadas", desc: "Até 2029, a maioria dos atendimentos de primeira linha será feita por IA." },
        { value: "30%", label: "Redução de Custo", desc: "Empresas que adotam IA 24×7 reduzem despesas operacionais de maneira imediata." },
        { value: "+20%", label: "Aumento na Satisfação", desc: "Atendimentos instantâneos 24×7 melhoram experiência, retenção e conversão." },
        { value: "3x - 8x", label: "ROI Médio", desc: "Dependendo do processo (back-office, vendas, atendimento). Casos públicos de IA." },
        { value: "3-6 meses", label: "Payback Típico", desc: "Retorno do investimento em automação inteligente em curto prazo." },
      ],
      source: "Fontes de referência: Gartner, McKinsey, Public AI Case Studies."
    },
    process: {
      title: "Como Trabalhamos",
      subtitle: "Do diagnóstico à evolução contínua.",
      steps: [
        { title: "Diagnóstico e Blueprint", subtitle: "Sprint de 5 dias", desc: "Mapeamos processos, identificamos oportunidades e definimos o blueprint. Entregável: escopo claro, fluxos automatizáveis, roadmap e indicadores de ROI." },
        { title: "Desenvolvimento e Customização", subtitle: "Upfront", desc: "Construímos a solução com nossos frameworks e adaptamos ao contexto da sua operação. Entregável: agentes treinados, integrações, fluxos personalizados, ambiente pronto." },
        { title: "Go Live e Performance Boost", subtitle: "Primeiro mês", desc: "Implantação assistida, ajustes finos e testes em ambiente real. Entregável: operação 24×7 rodando, métricas iniciais de redução de custo e impacto." },
        { title: "Evolução Contínua", subtitle: "Mensalidade", desc: "Acompanhamento, melhorias recorrentes e novos módulos. Inclui: ajustes de performance, novos modelos, governança e LGPD. Entregável: operação sempre atualizada e eficiente." },
        { title: "Relatórios e Dashboard", subtitle: "Diario", desc: "Monitoramento contínuo com relatórios diários. Dashboard com métricas: volume, resoluções automáticas, tempos de resposta. Entregável: dados atualizados sem acesso a dados financeiros." }
      ]
    },
    differentials: {
      title: "Por que a BeeFirst?",
      subtitle: "Diferenciais que colocam sua empresa à frente.",
      description: "Priorizamos a privacidade dos seus dados. A BeeFirst é construída para empresas que exigem os mais altos padrões de segurança.",
      items: [
        { title: "IA Prática e Modular", desc: "Frameworks proprietários que aceleram implementação e maximizam ROI." },
        { title: "Eficiência Operacional", desc: "Automação ponta a ponta para reduzir carga operacional e eliminar retrabajo." },
        { title: "Aceleração de Receita", desc: "Aumento de conversão, maior retenção e otimização de funis comerciais." },
        { title: "Inteligência Decisória", desc: "Insights acionáveis a partir de dados reais, suportando decisões de alta assertividade." },
        { title: "Arquitectura Escalável", desc: "Módulos reutilizáveis, adaptáveis a múltiplas verticais, entregues com velocidade." },
        { title: "Foco em Lucratividade", desc: "Tecnologia é meio, lucro é fim. Desenhamos cada fluxo para impactar diretamente o P&L, maximizando o retorno financeiro da operação." }
      ]
    },
    testimonial: {
      quote: "\"Costumávamos nos afogar em chamados de suporte na alta temporada. Os agentes da BeeFirst lidaram com 60% do volume instantaneamente. Não é apenas eficiente; transformou a felicidade do nosso cliente.\"",
      author: "Sarah Jenkins",
      role: "Head de CX na Nova Retail",
      chat: {
        ai: "Processei seu reembolso.",
        user: "Isso foi rápido! Obrigado."
      }
    },
    pricing: {
      title: "Nossos Preços",
      subtitle: "Investimento transparente para resultados mensuráveis.",
      cta_button: "Receba Proposta",
      cards: [
        { title: "Setup", subtitle: "Desenvolvimento & Customização", price: "A partir de R$ 1.500", subPrice: "(EUR 500)", note: "Projetos sob medida conforme escopo" },
        { title: "Mensalidade", subtitle: "Operação & Evolução Contínua", price: "A partir de R$ 875", subPrice: "(EUR 400)", note: "Inclui: relatório diário, ajustes, novos fluxos e evolução" }
      ],
      footer: "Valores variam conforme complexidade, integrações, volume e necessidades específicas."
    },
    cta: {
      title: "Pronto para aplicar IA de forma prática?",
      desc: "Agende uma sessão gratuita de diagnóstico e receba um blueprint de oportunidades de IA para sua operação.",
      button: "Agendar Diagnóstico"
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { q: "O que exatamente a BeeFirst entrega?", a: "Entregamos agentes de IA que automatizam atendimento e processos 24/7, reduzindo custos e melhorando a experiência. Desenvolvemos, customizamos e operamos a solução." },
        { q: "Quanto tempo leva para implementar?", a: "Ciclo típico: Diagnóstico (5 dias); Desenvolvimento (2-6 semanas); Go-Live (primeiro mês). Após isso, evolução contínua." },
        { q: "A solução funciona realmente 24x7?", a: "Sim. Os agentes operam continuamente, sem pausas, oferecendo respostas instantâneas e reduzindo a dependência humana." },
        { q: "Preciso mudar meus sistemas?", a: "Não. Integramos a IA aos sistemas e canais que você já usa (WhatsApp, site, CRM, ERP). Evitamos mudanças complexas." },
        { q: "Quanto a IA reduz do custo?", a: "Depende do volume, mas clientes reduzem esforço manual em até 70% das interações repetitivas." },
        { q: "A solução substitui minha equipe?", a: "Não substitui - libera a equipe para tarefas estratégicas. Os agentes cuidam do volume repetitivo; su equipe atua no valor." },
        { q: "Como funciona o modelo de preços?", a: "Composto por: Upfront (desenvolvimento e customização) e Mensualidad (operação contínua e evolução)." },
        { q: "Quais setores podem usar?", a: "Academias, hotéis, clínicas, varejo, e-commerce, telecom, educação. Qualquer setor com alto volumen ou processos repetitivos." },
        { q: "Como garantem qualidade?", a: "Treinamos a IA com seus dados. Após o go-live, acompanhamos diariamente os resultados e ajustamos para melhorar precisão." },
        { q: "Precisamos fornecer dados financeiros?", a: "Não. Trabalhamos com dados operacionais. Você acompanha impacto via relatórios sem fornecer informações financeiras." },
        { q: "A solução segue LGPD?", a: "Sim. Usamos princípios de minimización de dados e segurança, garantindo conformidade com a LGPD." },
        { q: "Qual a diferença para outras empresas?", a: "Somos uma boutique de IA: implementação rápida, customização real, foco em performance e operação contínua 24/7. Não apenas um 'chatbot'." },
        { q: "Posso começar com algo pequeno?", a: "Sim. Começamos com um módulo inicial e ampliamos conforme o impacto aparece." },
        { q: "Como medimos sucesso?", a: "Acompanhamos: volume, taxa de resolução, tempo de resposta, picos e engajamento. Tudo disponível no dashboard." },
      ]
    },
    about: {
      title: "Sobre a BeeFirst",
      subtitle: "Engenharia de ponta e visão executiva.",
      badge: "Nossa História",
      stats: {
        focus: "Foco em Negócios",
        eng: "Engenharia"
      },
      mission: {
        p1: "Operamos no cruzamento entre engenharia de ponta e visão executiva para entregar soluções de IA que resolvem problemas reais.",
        p2: "Não somos apenas desenvolvedores de software. Somos parceiros estratégicos que entendem de negócios, finanzas e operações. Nossa missão é clara: transformar tecnologia avançada em resultados mensuráveis de eficiência, custo e crescimento."
      },
      team: {
        title: "Liderança",
        members: [
          {
            name: "Fabio Castanheira",
            role: "Founder & CEO",
            focus: "Visão Estratégica & Execução",
            bio: [
              "Executivo com carreira internacional e experiência em estratégia, finanças, operações e transformação digital nos setores de telecom, bancos de investimento, consultoria estratégica, energia e manufactura. Atuou em cargos C-level em multinacionais, liderando agendas de crescimento, eficiência y reestruturações de alto impacto.",
              "Com forte base comercial e foco em resultados, combina visão estratégica e execução rápida, transformando tecnologia e automação em performance real. Sua vivencia corporativa em diferentes mercados permite compreender profundamente las necessidades, prioridades e desafios enfrentados pelas empresas.",
              "Na BeeFirst, aplica essa trajetória para desenvolver soluções de IA que aumentan eficiência, reduzem custos e aceleran o crescimento dos clientes."
            ]
          },
          {
            name: "Lucas Miyazawa",
            role: "Founder & CTO",
            focus: "Tecnologia & Inovação",
            bio: [
              "Especialista en tecnologia com experiência em startups de alto ritmo e atuação internacional na Ásia. É graduado em Ciência de Dados e possui certificações 2x Microsoft (Azure Data & AI) e 2x Databricks Associate. Possui domínio profundo em soluções modernas de IA y Analytics, atuando na arquitetura e escalabilidade de sistemas inteligentes 24×7, com foco en robustez, velocidade de entrega e evolução contínua.",
              "Na BeeFirst, aplica essa experiência no desenvolvimento de aplicações de alto impacto, priorizando segurança, métricas claras e geração de valor real para o negócio."
            ]
          }
        ]
      },
      dna: {
        title: "Nosso DNA",
        items: [
          { title: "Velocidad", desc: "Implementação rápida e ágil." },
          { title: "Impacto", desc: "Foco total en ROI e resultados." },
          { title: "Customização", desc: "Soluções reais, não genéricas." }
        ]
      },
      conclusion: "Criamos soluções customizadas usando assets reutilizáveis de IA. Isso nos permite gerar impacto imediato, construir credibilidad e desenvolver um produto escalável com forte potencial de mercado."
    },
    contact: {
      title: "Fale Conosco",
      subtitle: "Escolha a melhor forma de se conectar conosco.",
      whatsapp: {
        title: "Falar com nossa agente de IA",
        desc: "Fale com a Beea, nossa assistente virtual que vai te ajudar a encontrar a solucao ideal da beefirst para sua empresa e enteder nossos servicos.",
        button: "Iniciar Chat no WhatsApp"
      },
      form: {
        title: "Contatar Especialistas",
        desc: "Preencha o formulário abaixo e nosso time de engenharia entrará em contato.",
        fields: {
          name: "Nome",
          email: "Email",
          phone: "Número de Telefone",
          company: "Empresa",
          message: "Mensagem"
        },
        submit: "Enviar Mensagem"
      }
    },
    footer: {
      description: "Unimos engenharia de software de elite e visão estratégica de negócios. Transformamos sua operação com Agentes de IA que geram eficiência real e retorno financeiro.",
      nav: {
        product: "Produto",
        integrations: "Integrações",
        pricing: "Preços",
        resources: "Recursos",
        enterprise: "Corporativo"
      },
      social: {
        email: "E-mail"
      },
      rights: "Todos os direitos reservados.",
      crafted: "Criado por"
    },
    dashboard: {
      title: "Dashboard",
      live: "Ao Vivo",
      overview: "Visão Geral",
      metrics: {
        total_msg: "Total de Mensagens",
        active_users: "Usuários Ativos",
        leads: "Leads Gerados",
        total_users: "Total de Usuários",
        escalations: "Escalonamentos",
        esc_rate: "Taxa Escalonamento",
        retention: "Taxa de Retenção",
        avg_msg: "Média Msg/Usuário"
      },
      advanced: "Métricas Avançadas",
      charts: {
        weekly: "Atividade Semanal",
        growth: "Crescimento de Usuários"
      },
      days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    }
  }
};
