import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
      badge: "IA para Contabilidade",
      title: "Conciliação Bancária",
      subtitle: "em Segundos",
      description: "Automatize o cruzamento entre contabilidade e extratos bancários. Reduza 60-90% do tempo operacional.",
      ctaContact: "Entrar em Contacto",
      watch: "Ver Como Funciona"
    },
    stats: [
      { value: "60-90%", label: "Redução de Tempo" },
      { value: "1 Semana", label: "Implementação" },
      { value: "99%", label: "Precisão IA" }
    ],
    problem: {
      tag: "O Desafio",
      title: "Horas Perdidas em Conciliação Manual",
      cards: [
        { icon: "⏱️", title: "Tempo Operacional", desc: "Horas gastas a comparar extratos linha a linha." },
        { icon: "❌", title: "Erros Humanos", desc: "Retrabalho constante impacta o fecho contabilístico." },
        { icon: "📊", title: "Falta de Visibilidade", desc: "Difícil acompanhar pendências em tempo real." },
        { icon: "📈", title: "Limite de Crescimento", desc: "Impossível escalar sem aumentar equipa." }
      ]
    },
    solution: {
      tag: "A Solução",
      title: "Hive - IA Aplicada à Contabilidade",
      subtitle: "Plataforma completa de conciliação automática",
      steps: [
        { num: "01", title: "Importação", desc: "Integração automática com ERP e bancos." },
        { num: "02", title: "Matching IA", desc: "Cruzamento inteligente de lançamentos." },
        { num: "03", title: "Validação", desc: "Dashboard com estado em tempo real." }
      ]
    },
    benefits: {
      tag: "Benefícios",
      title: "Transforme a Sua Operação",
      items: [
        { icon: "⚡", title: "Velocidade", desc: "Reduza 60-90% do tempo de conciliação." },
        { icon: "🎯", title: "Precisão", desc: "99% de acerto com IA treinada." },
        { icon: "📊", title: "Visibilidade", desc: "Dashboard de controlo em tempo real." },
        { icon: "💰", title: "ROI Rápido", desc: "Retorno em menos de 3 meses." },
        { icon: "🔁", title: "Automação", desc: "Matching automático de padrões." },
        { icon: "🚀", title: "Escalabilidade", desc: "Cresça sem aumentar equipa." }
      ]
    },
    showcase: {
      tag: "Dashboard",
      title: "Interface Intuitiva e Poderosa",
      subtitle: "Visualize tudo num único local"
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
      tag: "Próximo Passo",
      title: "Fale com a BeeFirst",
      subtitle: "Preencha o formulário e a nossa equipa entra em contacto.",
      nameLabel: "Nome",
      namePlaceholder: "Nome completo",
      emailLabel: "Email profissional",
      emailPlaceholder: "nome@empresa.com",
      companyLabel: "Empresa",
      companyPlaceholder: "Nome da empresa",
      messageLabel: "Mensagem",
      messagePlaceholder: "Explique o seu contexto e objetivo.",
      button: "Enviar Contacto",
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
      title: "Bank Reconciliation",
      subtitle: "in Seconds",
      description: "Automate matching between accounting records and bank statements. Reduce 60-90% of operational time.",
      ctaContact: "Contact Sales",
      watch: "See How It Works"
    },
    stats: [
      { value: "60-90%", label: "Time Reduction" },
      { value: "1 Week", label: "Implementation" },
      { value: "99%", label: "AI Accuracy" }
    ],
    problem: {
      tag: "The Challenge",
      title: "Hours Lost in Manual Reconciliation",
      cards: [
        { icon: "⏱️", title: "Operational Time", desc: "Hours spent comparing statements line by line." },
        { icon: "❌", title: "Human Errors", desc: "Constant rework affects financial closing." },
        { icon: "📊", title: "Low Visibility", desc: "Hard to track pending items in real time." },
        { icon: "📈", title: "Growth Limit", desc: "Impossible to scale without increasing headcount." }
      ]
    },
    solution: {
      tag: "The Solution",
      title: "Hive - AI for Accounting",
      subtitle: "Complete automatic reconciliation platform",
      steps: [
        { num: "01", title: "Import", desc: "Automated integration with ERP and banks." },
        { num: "02", title: "AI Matching", desc: "Intelligent matching of transactions." },
        { num: "03", title: "Validation", desc: "Dashboard with real-time status." }
      ]
    },
    benefits: {
      tag: "Benefits",
      title: "Transform Your Operation",
      items: [
        { icon: "⚡", title: "Speed", desc: "Reduce reconciliation time by 60-90%." },
        { icon: "🎯", title: "Accuracy", desc: "99% precision with trained AI." },
        { icon: "📊", title: "Visibility", desc: "Live dashboard for full control." },
        { icon: "💰", title: "Fast ROI", desc: "Payback in less than 3 months." },
        { icon: "🔁", title: "Automation", desc: "Automatic pattern matching." },
        { icon: "🚀", title: "Scalability", desc: "Grow without adding headcount." }
      ]
    },
    showcase: {
      tag: "Dashboard",
      title: "Intuitive and Powerful Interface",
      subtitle: "See everything in one place"
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
      tag: "Next Step",
      title: "Talk to BeeFirst",
      subtitle: "Fill the form and our team will contact you.",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      emailLabel: "Work email",
      emailPlaceholder: "name@company.com",
      companyLabel: "Company",
      companyPlaceholder: "Company name",
      messageLabel: "Message",
      messagePlaceholder: "Tell us your context and goals.",
      button: "Send Contact",
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
      title: "Conciliacion Bancaria",
      subtitle: "en Segundos",
      description: "Automatiza el cruce entre registros contables y extractos bancarios. Reduce 60-90% del tiempo operativo.",
      ctaContact: "Hablar con Ventas",
      watch: "Ver Como Funciona"
    },
    stats: [
      { value: "60-90%", label: "Reduccion de Tiempo" },
      { value: "1 Semana", label: "Implementacion" },
      { value: "99%", label: "Precision IA" }
    ],
    problem: {
      tag: "El Desafio",
      title: "Horas Perdidas en Conciliacion Manual",
      cards: [
        { icon: "⏱️", title: "Tiempo Operativo", desc: "Horas comparando extractos linea por linea." },
        { icon: "❌", title: "Errores Humanos", desc: "El retrabajo impacta el cierre contable." },
        { icon: "📊", title: "Poca Visibilidad", desc: "Dificil seguir pendientes en tiempo real." },
        { icon: "📈", title: "Limite de Crecimiento", desc: "Escalar sin mas equipo es dificil." }
      ]
    },
    solution: {
      tag: "La Solucion",
      title: "Hive - IA para Contabilidad",
      subtitle: "Plataforma completa de conciliacion automatica",
      steps: [
        { num: "01", title: "Importacion", desc: "Integracion automatica con ERP y bancos." },
        { num: "02", title: "Matching IA", desc: "Cruce inteligente de movimientos." },
        { num: "03", title: "Validacion", desc: "Dashboard con estado en tiempo real." }
      ]
    },
    benefits: {
      tag: "Beneficios",
      title: "Transforma tu Operacion",
      items: [
        { icon: "⚡", title: "Velocidad", desc: "Reduce 60-90% del tiempo de conciliacion." },
        { icon: "🎯", title: "Precision", desc: "99% de exactitud con IA entrenada." },
        { icon: "📊", title: "Visibilidad", desc: "Dashboard en tiempo real." },
        { icon: "💰", title: "ROI Rápido", desc: "Retorno en menos de 3 meses." },
        { icon: "🔁", title: "Automatizacion", desc: "Matching automatico de patrones." },
        { icon: "🚀", title: "Escalabilidad", desc: "Crece sin aumentar plantilla." }
      ]
    },
    showcase: {
      tag: "Dashboard",
      title: "Interfaz Intuitiva y Potente",
      subtitle: "Visualiza todo en un solo lugar"
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
      tag: "Proximo Paso",
      title: "Habla con BeeFirst",
      subtitle: "Completa el formulario y nuestro equipo te contactara.",
      nameLabel: "Nombre",
      namePlaceholder: "Nombre completo",
      emailLabel: "Email profesional",
      emailPlaceholder: "nombre@empresa.com",
      companyLabel: "Empresa",
      companyPlaceholder: "Nombre de la empresa",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos tu contexto y objetivo.",
      button: "Enviar Contacto",
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

export default function App() {
  const [lang, setLang] = React.useState("pt");
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [contactStatus, setContactStatus] = React.useState("idle");
  const [contactMessage, setContactMessage] = React.useState("");
  const t = TRANSLATIONS[lang];

  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const contentYBase = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const contentOpacityBase = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const heroBgYBase = useTransform(scrollYProgress, [0, 1], [0, 48]);

  const y = useSpring(contentYBase, { stiffness: 85, damping: 28, mass: 0.45 });
  const opacity = useSpring(contentOpacityBase, { stiffness: 90, damping: 30, mass: 0.4 });
  const heroBgY = useSpring(heroBgYBase, { stiffness: 70, damping: 30, mass: 0.6 });

  const orb1Y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -72]), { stiffness: 65, damping: 26, mass: 0.65 });
  const orb2Y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 56]), { stiffness: 65, damping: 26, mass: 0.65 });
  const orb3Y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), { stiffness: 65, damping: 26, mass: 0.65 });

  const orb1Scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.06]), { stiffness: 62, damping: 24, mass: 0.7 });
  const orb2Scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.96]), { stiffness: 62, damping: 24, mass: 0.7 });
  const orb3Scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.04]), { stiffness: 62, damping: 24, mass: 0.7 });

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
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
        <motion.div className="hero-bg" style={{ y: heroBgY }}>
          <div className="hero-bg-grid" />
          <div className="hero-bg-vignette" />
          <div className="hero-bg-fade" />
          <div className="hero-bg-orbs">
            <motion.div className="gradient-orb orb-1" style={{ y: orb1Y, scale: orb1Scale }} />
            <motion.div className="gradient-orb orb-2" style={{ y: orb2Y, scale: orb2Scale }} />
            <motion.div className="gradient-orb orb-3" style={{ y: orb3Y, scale: orb3Scale }} />
          </div>
        </motion.div>

        <div className="container-new">
          <motion.div className="hero-content-new" style={{ y, opacity }}>
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
              <span className="gradient-text-new">{t.hero.subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-description-new"
            >
              {t.hero.description}
            </motion.p>

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
              <a href="#solution" className="btn-secondary-large-new">{t.hero.watch}</a>
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
                  whileHover={{ y: -5, scale: 1.02 }}
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
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="card-icon-new">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="section-new solution-section">
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
              <React.Fragment key={i}>
                <motion.div
                  className="process-card-new"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="process-number-new">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
                {i < t.solution.steps.length - 1 && (
                  <motion.div
                    className="process-arrow-new"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                  >
                    →
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section-new showcase-section">
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

          <motion.div
            className="dashboard-preview"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <aside className="dashboard-sidebar-new" aria-hidden="true">
              <a href="#" className="dashboard-side-logo-new">
                <img src="/logo_hex.svg" alt="BeeFirst" />
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
                whileHover={{ y: -5, scale: 1.02 }}
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
            <span className="section-tag-new yellow">{t.contact.tag}</span>
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
              <img src="/logo_hex.svg" alt="BeeFirst" className="footer-brand-img-new" />
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
                <img src={instagramIcon} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/beefirst-ai/posts/?feedView=all"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="" />
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





