import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowUp,
  Info,
  LayoutGrid,
  Menu,
  MessageSquare,
  Moon,
  MoreHorizontal,
  RefreshCcw,
  Settings,
  ShieldBan,
  Sun,
  Users,
  X
} from "lucide-react";
import { submitLeadCapture } from "./lib/leadCapture";
import "./styles-new.css";
import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";

const LANG_OPTIONS = [
  { key: "en", label: "EN" },
  { key: "es", label: "ES" },
  { key: "pt", label: "PT-PT" }
];

const TRANSLATIONS = {
  pt: {
    nav: {
      solutions: "Soluções",
      benefits: "Benefícios",
      contact: "Contacto"
    },
    theme: {
      dark: "Modo Escuro",
      light: "Modo Claro"
    },
    hero: {
      badge: "HIVE - Conciliação Automática para Contabilistas",
      title: "Reduza horas de conciliação bancária",
      subtitle: "a segundos.",
      description: "Automatize o cruzamento entre contabilidade e extratos bancários com a Hive.",
      bullets: [
        "Identificação automática de movimentos correspondentes",
        "Sinalização imediata de divergências",
        "Redução de erros manuais",
        "Mais tempo para tarefas estratégicas"
      ],
      ctaContact: "Agendar demonstração gratuita",
      watch: "Ver como funciona"
    },
    stats: [
      { value: "Segundos", label: "Tempo médio de conciliação" },
      { value: "Automático", label: "Matching entre movimentos" },
      { value: "Escalável", label: "Operação pronta para crescer" }
    ],
    problem: {
      tag: "O Problema",
      title: "A conciliação bancária ainda consome horas da sua equipa?",
      note: "Cada hora gasta na conciliação é margem perdida.",
      cards: [
        { icon: "📄", title: "Conferência linha a linha", desc: "Processo manual e repetitivo para cada lançamento." },
        { icon: "⚠️", title: "Alto risco de erro", desc: "Divergências e retrabalho impactam o fecho contabilístico." },
        { icon: "⏱️", title: "Tempo operacional elevado", desc: "A equipa fica presa em tarefas de baixo valor." },
        { icon: "📉", title: "Dificuldade em escalar carteira de clientes", desc: "Mais clientes exigem mais esforço manual." }
      ]
    },
    reconciliation: {
      tag: "A Solução",
      title: "Apresentamos a Hive - Conciliação Automática",
      subtitle: "A Hive utiliza inteligência artificial para cruzar automaticamente lançamentos contabilísticos e movimentos de extratos bancários. Em segundos, identifica:",
      cards: [
        { icon: "🤝", title: "Valores que coincidem", desc: "Identificação automática de movimentos correspondentes." },
        { icon: "📌", title: "Movimentos pendentes", desc: "Visibilidade imediata do que ainda precisa de ação." },
        { icon: "⚠️", title: "Divergências", desc: "Sinalização clara de inconsistências e diferenças." },
        { icon: "🔎", title: "Inconsistências", desc: "Deteção rápida de anomalias no processo de conciliação." }
      ],
      note: "Sem necessidade de validação manual exaustiva."
    },
    solution: {
      tag: "Como Funciona",
      title: "Fluxo simples do início ao fim",
      subtitle: "Três etapas para automatizar a conciliação com segurança.",
      steps: [
        { num: "01", title: "Importação", desc: "Integração com o sistema contabilístico e extratos bancários." },
        { num: "02", title: "Cruzamento Inteligente", desc: "Matching automático com base em padrões e regras." },
        { num: "03", title: "Validação e Ação", desc: "Visualização clara do que está conciliado e do que necessita de intervenção." }
      ],
      note: "Simples. Rápido. Seguro."
    },
    benefits: {
      tag: "Benefícios",
      title: "Benefícios para o seu gabinete",
      items: [
        { icon: "⏳", title: "Redução de tempo operacional", desc: "Menos horas gastas na conciliação manual." },
        { icon: "🧠", title: "Menor dependência de tarefas manuais", desc: "A equipa foca-se em trabalho estratégico." },
        { icon: "✅", title: "Redução de erros", desc: "Maior consistência no fecho contabilístico." },
        { icon: "📈", title: "Capacidade para novos clientes", desc: "Escale a carteira sem aumentar fricção operacional." },
        { icon: "💼", title: "Aumento de rentabilidade", desc: "Automatize uma das tarefas mais repetitivas da contabilidade." }
      ]
    },
    showcase: {
      tag: "Porque HIVE",
      title: "A Hive é uma plataforma de agentes inteligentes desenvolvida pela Beefirst para automatizar operações empresariais.",
      subtitle: "A conciliação é apenas o primeiro passo. Expanda para gestão documental, relatórios inteligentes, automação de processos e comunicação com clientes. Cresce com o seu gabinete."
    },
    dashboard: {
      title: "Dashboard",
      live: "AO VIVO",
      overview: "Visão Geral",
      advanced: "Métricas Avançadas",
      weekly: "Atividade Semanal",
      growth: "Crescimento de Utilizadores",
      weekDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      months: ["Jan", "Mar", "Mai", "Jul", "Set", "Nov"]
    },
    contact: {
      tag: "CTA Final",
      title: "Está pronto para automatizar a conciliação bancária?",
      subtitle: "Agende uma demonstração gratuita e descubra quanto tempo pode poupar já no próximo mês.",
      nameLabel: "Nome",
      namePlaceholder: "Nome completo",
      emailLabel: "Email profissional",
      emailPlaceholder: "nome@empresa.com",
      companyLabel: "Empresa",
      companyPlaceholder: "Nome da empresa",
      messageLabel: "Mensagem",
      messagePlaceholder: "Explique o seu contexto e objetivo.",
      button: "Agendar demonstração",
      note: "Resposta em até 1 dia útil."
    },
    footer: {
      links: {
        solution: "Solução",
        benefits: "Benefícios",
        contact: "Contacto",
        privacy: "Privacidade"
      },
      rights: "© 2026 BeeFirst • Hive - Todos os direitos reservados"
    }
  },
  en: {
    nav: {
      solutions: "Solution",
      benefits: "Benefits",
      contact: "Contact"
    },
    theme: {
      dark: "Dark Mode",
      light: "Light Mode"
    },
    hero: {
      badge: "AI for Accounting",
      title: "Cut bank reconciliation hours",
      subtitle: "to seconds",
      description: "Automate matching between accounting records and bank statements with Hive.",
      bullets: [
        "Automatic matching of corresponding transactions",
        "Instant divergence flagging",
        "Fewer manual errors",
        "More time for strategic tasks"
      ],
      ctaContact: "Book free demo",
      watch: "See How It Works"
    },
    stats: [
      { value: "Seconds", label: "Average reconciliation time" },
      { value: "Automated", label: "Transaction matching" },
      { value: "Scalable", label: "Operation ready to grow" }
    ],
    problem: {
      tag: "The Problem",
      title: "Is bank reconciliation still consuming hours from your team?",
      note: "Every hour spent reconciling is lost margin.",
      cards: [
        { icon: "📄", title: "Line-by-line checks", desc: "Manual review for every transaction." },
        { icon: "⚠️", title: "High error risk", desc: "Divergences and rework hurt close cycles." },
        { icon: "⏱️", title: "High operational time", desc: "Your team is stuck in repetitive work." },
        { icon: "📉", title: "Limited scalability", desc: "Hard to grow client portfolio efficiently." }
      ]
    },
    reconciliation: {
      tag: "The Solution",
      title: "Meet Hive - Automatic Reconciliation",
      subtitle: "Hive uses AI to automatically cross-check accounting entries and bank statement movements. In seconds, it identifies:",
      cards: [
        { icon: "🤝", title: "Matching values", desc: "Automatic identification of corresponding movements." },
        { icon: "📌", title: "Pending items", desc: "Immediate visibility into what needs action." },
        { icon: "⚠️", title: "Divergences", desc: "Clear signals for mismatches and differences." },
        { icon: "🔎", title: "Inconsistencies", desc: "Fast anomaly detection across reconciliation flows." }
      ],
      note: "No exhaustive manual validation required."
    },
    solution: {
      tag: "How It Works",
      title: "Simple flow from start to finish",
      subtitle: "Three steps to automate reconciliation with confidence.",
      steps: [
        { num: "01", title: "Import", desc: "Integration with accounting system and bank statements." },
        { num: "02", title: "Smart Matching", desc: "Automatic matching based on patterns and rules." },
        { num: "03", title: "Validate and Act", desc: "Clear view of reconciled items and what needs intervention." }
      ],
      note: "Simple. Fast. Secure."
    },
    benefits: {
      tag: "Benefits",
      title: "Benefits for your firm",
      items: [
        { icon: "⏳", title: "Operational time reduction", desc: "Less time spent on manual reconciliation." },
        { icon: "🧠", title: "Lower manual dependency", desc: "Team can focus on strategic work." },
        { icon: "✅", title: "Error reduction", desc: "More reliable financial closing." },
        { icon: "📈", title: "Capacity for new clients", desc: "Scale your portfolio with less friction." },
        { icon: "💼", title: "Higher profitability", desc: "Automate one of accounting's most repetitive tasks." }
      ]
    },
    showcase: {
      tag: "Why Hive",
      title: "Hive is an intelligent-agents platform built by BeeFirst to automate business operations.",
      subtitle: "Reconciliation is only the first step. Expand into document management, smart reporting, process automation, and client communication."
    },
    dashboard: {
      title: "Dashboard",
      live: "LIVE",
      overview: "Overview",
      advanced: "Advanced Metrics",
      weekly: "Weekly Activity",
      growth: "User Growth",
      weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"]
    },
    contact: {
      tag: "Final CTA",
      title: "Ready to automate bank reconciliation?",
      subtitle: "Book a free demo and discover how much time you can save as early as next month.",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      emailLabel: "Work email",
      emailPlaceholder: "name@company.com",
      companyLabel: "Company",
      companyPlaceholder: "Company name",
      messageLabel: "Message",
      messagePlaceholder: "Tell us your context and goals.",
      button: "Book demo",
      note: "Reply within 1 business day."
    },
    footer: {
      links: {
        solution: "Solution",
        benefits: "Benefits",
        contact: "Contact",
        privacy: "Privacy"
      },
      rights: "© 2026 BeeFirst • Hive - All rights reserved"
    }
  },
  es: {
    nav: {
      solutions: "Solucion",
      benefits: "Beneficios",
      contact: "Contacto"
    },
    theme: {
      dark: "Modo Oscuro",
      light: "Modo Claro"
    },
    hero: {
      badge: "IA para Contabilidad",
      title: "Reduce horas de conciliacion bancaria",
      subtitle: "a segundos",
      description: "Automatiza el cruce entre contabilidad y extractos bancarios con Hive.",
      bullets: [
        "Identificacion automatica de movimientos correspondientes",
        "Senalizacion inmediata de divergencias",
        "Reduccion de errores manuales",
        "Mas tiempo para tareas estrategicas"
      ],
      ctaContact: "Agendar demostracion gratuita",
      watch: "Ver Como Funciona"
    },
    stats: [
      { value: "Segundos", label: "Tiempo medio de conciliacion" },
      { value: "Automatico", label: "Matching entre movimientos" },
      { value: "Escalable", label: "Operacion lista para crecer" }
    ],
    problem: {
      tag: "El Problema",
      title: "La conciliacion bancaria aun consume horas de tu equipo?",
      note: "Cada hora dedicada a conciliar es margen perdido.",
      cards: [
        { icon: "📄", title: "Revision linea por linea", desc: "Proceso manual y repetitivo por movimiento." },
        { icon: "⚠️", title: "Alto riesgo de error", desc: "Las diferencias y el retrabajo afectan el cierre." },
        { icon: "⏱️", title: "Tiempo operativo elevado", desc: "El equipo se queda en tareas de bajo valor." },
        { icon: "📉", title: "Dificultad para escalar", desc: "Cuesta crecer la cartera de clientes." }
      ]
    },
    reconciliation: {
      tag: "La Solucion",
      title: "Presentamos Hive - Conciliacion Automatica",
      subtitle: "Hive usa inteligencia artificial para cruzar automaticamente asientos contables y movimientos bancarios. En segundos, identifica:",
      cards: [
        { icon: "🤝", title: "Valores coincidentes", desc: "Identificacion automatica de movimientos correspondientes." },
        { icon: "📌", title: "Movimientos pendientes", desc: "Visibilidad inmediata de lo que requiere accion." },
        { icon: "⚠️", title: "Divergencias", desc: "Senales claras de diferencias e inconsistencias." },
        { icon: "🔎", title: "Inconsistencias", desc: "Deteccion rapida de anomalias del proceso." }
      ],
      note: "Sin validacion manual exhaustiva."
    },
    solution: {
      tag: "Como Funciona",
      title: "Flujo simple de principio a fin",
      subtitle: "Tres etapas para automatizar la conciliacion de forma segura.",
      steps: [
        { num: "01", title: "Importacion", desc: "Integracion con sistema contable y extractos bancarios." },
        { num: "02", title: "Cruce Inteligente", desc: "Matching automatico con base en patrones y reglas." },
        { num: "03", title: "Validacion y Accion", desc: "Vista clara de lo conciliado y de lo que requiere intervencion." }
      ],
      note: "Simple. Rapido. Seguro."
    },
    benefits: {
      tag: "Beneficios",
      title: "Beneficios para tu despacho",
      items: [
        { icon: "⏳", title: "Reduccion de tiempo operativo", desc: "Menos horas en conciliacion manual." },
        { icon: "🧠", title: "Menor dependencia manual", desc: "El equipo se enfoca en tareas estrategicas." },
        { icon: "✅", title: "Reduccion de errores", desc: "Mayor consistencia en el cierre contable." },
        { icon: "📈", title: "Capacidad para nuevos clientes", desc: "Escala la cartera con menos friccion." },
        { icon: "💼", title: "Mayor rentabilidad", desc: "Automatiza una de las tareas mas repetitivas." }
      ]
    },
    showcase: {
      tag: "Por Que Hive",
      title: "Hive es una plataforma de agentes inteligentes creada por BeeFirst para automatizar operaciones empresariales.",
      subtitle: "La conciliacion es solo el primer paso. Expande a gestion documental, reportes inteligentes, automatizacion de procesos y comunicacion con clientes."
    },
    dashboard: {
      title: "Dashboard",
      live: "EN VIVO",
      overview: "Vision General",
      advanced: "Metricas Avanzadas",
      weekly: "Actividad Semanal",
      growth: "Crecimiento de Usuarios",
      weekDays: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"],
      months: ["Ene", "Mar", "May", "Jul", "Sep", "Nov"]
    },
    contact: {
      tag: "CTA Final",
      title: "Listo para automatizar la conciliacion bancaria?",
      subtitle: "Agenda una demostracion gratuita y descubre cuanto tiempo puedes ahorrar ya el proximo mes.",
      nameLabel: "Nombre",
      namePlaceholder: "Nombre completo",
      emailLabel: "Email profesional",
      emailPlaceholder: "nombre@empresa.com",
      companyLabel: "Empresa",
      companyPlaceholder: "Nombre de la empresa",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos tu contexto y objetivo.",
      button: "Agendar demostracion",
      note: "Respuesta en 1 dia habil."
    },
    footer: {
      links: {
        solution: "Solucion",
        benefits: "Beneficios",
        contact: "Contacto",
        privacy: "Privacidad"
      },
      rights: "© 2026 BeeFirst • Hive - Todos los derechos reservados"
    }
  }
};

const DASHBOARD_OVERVIEW_METRICS = [
  { label: { pt: "Total de Mensagens", en: "Total Messages", es: "Mensajes Totales" }, value: "12,543", change: "+15.2%", Icon: Activity },
  { label: { pt: "Utilizadores Ativos", en: "Active Users", es: "Usuarios Activos" }, value: "4,567", change: "+8.4%", Icon: Users },
  { label: { pt: "Leads Gerados", en: "Leads Generated", es: "Leads Generados" }, value: "890", change: "+22.1%", Icon: MoreHorizontal },
  { label: { pt: "Total de Utilizadores", en: "Total Users", es: "Total de Usuarios" }, value: "10,000", change: "+12.0%", Icon: ArrowUp }
];

const DASHBOARD_ADVANCED_METRICS = [
  { label: { pt: "Escalonamentos", en: "Escalations", es: "Escalamientos" }, value: "54", change: "+2.5%", Icon: AlertCircle },
  { label: { pt: "Taxa de Escalonamento", en: "Escalation Rate", es: "Tasa de Escalamiento" }, value: "2.8%", change: "+0.3%", Icon: AlertCircle },
  { label: { pt: "Taxa de Retenção", en: "Retention Rate", es: "Tasa de Retención" }, value: "91.5%", change: "+4.0%", Icon: Activity },
  { label: { pt: "Média Msg/Utilizador", en: "Avg Msg/User", es: "Media Msg/Usuario" }, value: "2.75", change: "+0.2%", Icon: MessageSquare }
];

const DASHBOARD_SIDEBAR_ICONS = [MessageSquare, ShieldBan, RefreshCcw, Info, Settings];
const WEEKLY_ACTIVITY_VALUES = [15, 33, 30, 28, 39, 48, 41];
const USER_GROWTH_VALUES = [18, 24, 30, 38, 44, 56, 62, 70];
const MOBILE_BREAKPOINT = 768;

export default function App() {
  const [lang, setLang] = React.useState("pt");
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileViewport, setIsMobileViewport] = React.useState(
    typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );
  const [shouldRenderShowcase, setShouldRenderShowcase] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [contactStatus, setContactStatus] = React.useState("idle");
  const [contactMessage, setContactMessage] = React.useState("");
  const t = TRANSLATIONS[lang];

  const heroRef = React.useRef(null);
  const showcaseRef = React.useRef(null);

  const shouldUseLiteMotion = isMobileViewport || prefersReducedMotion;

  React.useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      rafId = 0;
      setScrollY(window.scrollY || window.pageYOffset || 0);
    };

    const handleScroll = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateScroll);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleResize = () => {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobileViewport(isMobile);

      if (!isMobile) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleMotionChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    handleResize();
    setPrefersReducedMotion(mediaQuery.matches);

    window.addEventListener("resize", handleResize);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      window.removeEventListener("resize", handleResize);

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  React.useEffect(() => {
    if (shouldRenderShowcase) {
      return;
    }

    const showcaseElement = showcaseRef.current;
    if (!showcaseElement) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldRenderShowcase(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRenderShowcase(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px" }
    );

    observer.observe(showcaseElement);

    return () => observer.disconnect();
  }, [shouldRenderShowcase]);

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formEntries = Object.fromEntries(new FormData(formElement).entries());

    setContactStatus("loading");
    setContactMessage("");

    try {
      const result = await submitLeadCapture(
        {
          ...formEntries,
          goal: formEntries.message ?? "",
          profile: "",
          volume: ""
        },
        { locale: lang }
      );

      if (!result.ok) {
        setContactStatus("error");
        setContactMessage(result.message);
        return;
      }

      setContactStatus("success");
      setContactMessage(result.message);
      formElement.reset();
    } catch (error) {
      setContactStatus("error");
      setContactMessage(
        error instanceof Error
          ? error.message
          : lang === "en"
            ? "We could not send your request right now."
            : lang === "es"
              ? "No fue posible enviar la solicitud ahora."
              : "Não foi possível enviar o pedido agora."
      );
    }
  };

  return (
    <div className={`app-new${isDarkMode ? " dark-mode" : ""}`}>
      <motion.nav
        className={`nav-new ${scrollY > 50 ? "scrolled" : ""}`}
        initial={shouldUseLiteMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: shouldUseLiteMotion ? 0.25 : 0.6 }}
      >
        <div className="container-new">
          <div className="nav-content">
            <div className="logo-new">
              <img src="/logo_hex.svg" alt="BeeFirst" className="logo-img-new" />
              <span className="logo-text-new">Bee<span>First</span></span>
            </div>
            <button
              type="button"
              className={`mobile-menu-toggle-new ${isMobileMenuOpen ? "open" : ""}`}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label={
                isMobileMenuOpen
                  ? lang === "en"
                    ? "Close menu"
                    : lang === "es"
                      ? "Cerrar menú"
                      : "Fechar menu"
                  : lang === "en"
                    ? "Open menu"
                    : lang === "es"
                      ? "Abrir menú"
                      : "Abrir menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="main-navigation-links"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div id="main-navigation-links" className={`nav-links-new ${isMobileMenuOpen ? "open" : ""}`}>
              <a href="#solution" className="nav-anchor-new" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.solutions}</a>
              <a href="#benefits" className="nav-anchor-new" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.benefits}</a>

              <div className="lang-switch-new" role="group" aria-label="Language selector">
                {LANG_OPTIONS.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    className={`lang-btn-new ${lang === option.key ? "active" : ""}`}
                    onClick={() => {
                      setLang(option.key);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="theme-toggle-new"
                onClick={() => {
                  setIsDarkMode((value) => !value);
                  setIsMobileMenuOpen(false);
                }}
                aria-label={isDarkMode ? t.theme.light : t.theme.dark}
              >
                {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
                <span>{isDarkMode ? t.theme.light : t.theme.dark}</span>
              </button>

              <a href="#demo" className="btn-primary-new" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</a>
            </div>
          </div>
        </div>
      </motion.nav>

      <section ref={heroRef} className="hero-new">
        <motion.div
          className="hero-bg"
          initial={shouldUseLiteMotion ? false : { opacity: 0.75, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldUseLiteMotion ? 0.3 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-bg-grid" />
          <div className="hero-bg-vignette" />
          <div className="hero-bg-fade" />
          <div className="hero-bg-orbs">
            <motion.div className="gradient-orb orb-1" />
            <motion.div className="gradient-orb orb-2" />
            <motion.div className="gradient-orb orb-3" />
          </div>
        </motion.div>

        <div className="container-new">
          <motion.div
            className="hero-content-new"
            initial={shouldUseLiteMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldUseLiteMotion ? 0.3 : 0.55, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-badge-new"
            >
              <span className="pulse-dot-new" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-title-new"
            >
              {t.hero.title}
              <span className="hero-subtitle-static-new">{t.hero.subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-description-new"
            >
              {t.hero.description}
            </motion.p>

            {t.hero.bullets?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="hero-bullets-new"
              >
                {t.hero.bullets.map((bullet) => (
                  <span key={bullet} className="hero-bullet-new">✔ {bullet}</span>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-cta-new"
            >
              <a href="#demo" className="btn-primary-large-new">
                {t.hero.ctaContact}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary-large-new">{t.hero.watch}</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-stats-new"
            >
              {t.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-card-new"
                  whileHover={shouldUseLiteMotion ? undefined : { y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-value-new">{stat.value}</div>
                  <div className="stat-label-new">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-new problem-section">
        <div className="container-new">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header-new"
          >
            <span className="section-tag-new">{t.problem.tag}</span>
            <h2>{t.problem.title}</h2>
            {t.problem.note && <p>{t.problem.note}</p>}
          </motion.div>

          <div className="cards-grid-new">
            {t.problem.cards.map((card, i) => (
              <motion.div
                key={i}
                className="feature-card-new"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={shouldUseLiteMotion ? undefined : { y: -8, scale: 1.02 }}
              >
                <div className="card-icon-new">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="section-new reconciliation-section">
        <div className="container-new">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header-new"
          >
            <span className="section-tag-new yellow">{t.reconciliation.tag}</span>
            <h2>{t.reconciliation.title}</h2>
            <p>{t.reconciliation.subtitle}</p>
          </motion.div>

          <div className="cards-grid-new reconciliation-grid-new">
            {t.reconciliation.cards.map((card, i) => (
              <motion.div
                key={i}
                className="feature-card-new reconciliation-card-new"
                initial={shouldUseLiteMotion ? false : { opacity: 0, y: 36, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldUseLiteMotion ? undefined : { y: -8, scale: 1.02 }}
              >
                <div className="reconciliation-card-head-new">
                  <div className="card-icon-new">{card.icon}</div>
                  <span className="reconciliation-chip-new">IA Match</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {t.reconciliation.note && <p className="section-note-new">{t.reconciliation.note}</p>}
        </div>
      </section>

      <section id="how-it-works" className="section-new solution-section">
        <div className="container-new">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header-new"
          >
            <span className="section-tag-new yellow">{t.solution.tag}</span>
            <h2>{t.solution.title}</h2>
            <p>{t.solution.subtitle}</p>
          </motion.div>

          <div className="process-grid-new">
            {t.solution.steps.map((step, i) => (
              <motion.div
                key={i}
                className="process-card-new"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" }}
                whileHover={shouldUseLiteMotion ? undefined : { y: -10, scale: 1.05 }}
              >
                <div className="process-number-new">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {t.solution.note && <p className="section-note-new">{t.solution.note}</p>}
        </div>
      </section>

      <section className="section-new showcase-section" ref={showcaseRef}>
        <div className="container-new">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header-new"
          >
            <span className="section-tag-new">{t.showcase.tag}</span>
            <h2>{t.showcase.title}</h2>
            <p>{t.showcase.subtitle}</p>
          </motion.div>

          {shouldRenderShowcase ? (
            <motion.div
              className="dashboard-preview"
              initial={shouldUseLiteMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldUseLiteMotion ? 0.25 : 0.8 }}
            >
            <aside className="dashboard-sidebar-new" aria-hidden="true">
              <a href="#" className="dashboard-side-logo-new">
                <img src="/logo_hex.svg" alt="BeeFirst" loading="lazy" decoding="async" />
              </a>
              <button type="button" className="dashboard-side-item-new active" aria-label="Overview">
                <LayoutGrid size={13} />
              </button>
              {DASHBOARD_SIDEBAR_ICONS.map((Icon, i) => (
                <button type="button" className="dashboard-side-item-new" aria-label={`Menu ${i + 1}`} key={i}>
                  <Icon size={13} />
                </button>
              ))}
            </aside>

            <div className="dashboard-main-new">
              <div className="dashboard-main-header-new">
                <h3>{t.dashboard.title}</h3>
                <div className="dashboard-live-new">
                  <span />
                  {t.dashboard.live}
                </div>
              </div>

              <p className="dashboard-section-title-new">{t.dashboard.overview}</p>
              <div className="dashboard-metrics-new">
                {DASHBOARD_OVERVIEW_METRICS.map(({ label, value, change, Icon }) => (
                  <article className="dashboard-stat-new" key={label[lang]}>
                    <div className="dashboard-stat-head-new">
                      <span>{label[lang]}</span>
                      <Icon size={12} />
                    </div>
                    <div className="dashboard-stat-value-new">
                      <strong>{value}</strong>
                      <em>{change}</em>
                    </div>
                  </article>
                ))}
              </div>

              <p className="dashboard-section-title-new">{t.dashboard.advanced}</p>
              <div className="dashboard-metrics-new">
                {DASHBOARD_ADVANCED_METRICS.map(({ label, value, change, Icon }) => (
                  <article className="dashboard-stat-new" key={label[lang]}>
                    <div className="dashboard-stat-head-new">
                      <span>{label[lang]}</span>
                      <Icon size={12} />
                    </div>
                    <div className="dashboard-stat-value-new">
                      <strong>{value}</strong>
                      <em>{change}</em>
                    </div>
                  </article>
                ))}
              </div>

              <div className="dashboard-charts-new">
                <article className="dashboard-chart-new">
                  <h4>{t.dashboard.weekly}</h4>
                  <div className="dashboard-line-plot-new">
                    {WEEKLY_ACTIVITY_VALUES.map((value, i) => (
                      <div
                        key={i}
                        className="dashboard-line-point-new"
                        style={{ left: `${(i / (WEEKLY_ACTIVITY_VALUES.length - 1)) * 100}%`, bottom: `${value}%` }}
                      />
                    ))}
                    <svg viewBox="0 0 100 55" preserveAspectRatio="none" aria-hidden="true">
                      <polyline
                        points={WEEKLY_ACTIVITY_VALUES.map((value, i) => `${(i / (WEEKLY_ACTIVITY_VALUES.length - 1)) * 100},${55 - value * 0.8}`).join(" ")}
                      />
                    </svg>
                  </div>
                  <div className="dashboard-axis-new">
                    {t.dashboard.weekDays.map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>
                </article>

                <article className="dashboard-chart-new">
                  <h4>{t.dashboard.growth}</h4>
                  <div className="dashboard-bars-new">
                    {USER_GROWTH_VALUES.map((value, i) => (
                      <span key={i} style={{ height: `${value}%` }} />
                    ))}
                  </div>
                  <div className="dashboard-axis-new">
                    {t.dashboard.months.map((month) => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <div className="dashboard-glow" />
            </motion.div>
          ) : (
            <div className="dashboard-placeholder-new" aria-hidden="true">
              <div className="dashboard-placeholder-bar-new" />
              <div className="dashboard-placeholder-grid-new">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="benefits" className="section-new benefits-section">
        <div className="container-new">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header-new"
          >
            <span className="section-tag-new">{t.benefits.tag}</span>
            <h2>{t.benefits.title}</h2>
          </motion.div>

          <div className="benefits-grid-new">
            {t.benefits.items.map((item, i) => (
              <motion.div
                key={i}
                className="benefit-card-new"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={shouldUseLiteMotion ? undefined : { y: -5, scale: 1.02 }}
              >
                <div className="benefit-icon-new">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="section-new cta-section">
        <div className="container-new">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>

            <form className="contact-form-new" onSubmit={handleContactSubmit}>
              <label className="contact-honeypot-new" aria-hidden="true">
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>

              <div className="contact-grid-new">
                <div className="contact-field-new">
                  <label htmlFor="contact-name">{t.contact.nameLabel}</label>
                  <input id="contact-name" type="text" name="name" placeholder={t.contact.namePlaceholder} required />
                </div>

                <div className="contact-field-new">
                  <label htmlFor="contact-email">{t.contact.emailLabel}</label>
                  <input id="contact-email" type="email" name="email" placeholder={t.contact.emailPlaceholder} required />
                </div>

                <div className="contact-field-new">
                  <label htmlFor="contact-company">{t.contact.companyLabel}</label>
                  <input id="contact-company" type="text" name="company" placeholder={t.contact.companyPlaceholder} required />
                </div>

                <div className="contact-field-new full">
                  <label htmlFor="contact-message">{t.contact.messageLabel}</label>
                  <textarea id="contact-message" name="message" rows="4" placeholder={t.contact.messagePlaceholder} required />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary-large-new contact-submit-new"
                disabled={contactStatus === "loading"}
              >
                {contactStatus === "loading"
                  ? lang === "en"
                    ? "Sending Contact..."
                    : lang === "es"
                      ? "Enviando Contacto..."
                      : "A Enviar Contacto..."
                  : t.contact.button}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {contactMessage && (
                <p className={`contact-feedback-new ${contactStatus === "success" ? "success" : "error"}`}>
                  {contactMessage}
                </p>
              )}
            </form>

          </motion.div>
        </div>
      </section>

      <footer className="footer-new">
        <div className="container-new">
          <div className="footer-stack-new">
            <a href="#" className="footer-brand-mark-new" aria-label="BeeFirst">
              <img src="/logo_hex.svg" alt="BeeFirst" className="footer-brand-img-new" loading="lazy" decoding="async" />
            </a>
            <nav className="footer-links-new" aria-label="Footer">
              <a href="#solution">{t.footer.links.solution}</a>
              <a href="#benefits">{t.footer.links.benefits}</a>
              <a href="#demo">{t.footer.links.contact}</a>
              <a href="#">{t.footer.links.privacy}</a>
            </nav>
            <div className="footer-social-new">
              <a
                href="https://www.instagram.com/beefirst.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="" loading="lazy" decoding="async" />
              </a>
              <a
                href="https://www.linkedin.com/company/beefirst-ai/posts/?feedView=all"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}





