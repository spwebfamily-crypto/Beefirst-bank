import React from "react";
import {
  Building2,
  CheckCircle2,
  CircleAlert,
  FileText,
  LayoutGrid,
  Menu,
  Plus,
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
      subtitle: "a segundos",
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
        { icon: "", title: "Conferência linha a linha", desc: "Processo manual e repetitivo para cada lançamento." },
        { icon: "", title: "Alto risco de erro", desc: "Divergências e retrabalho impactam o fecho contabilístico." },
        { icon: "", title: "Tempo operacional elevado", desc: "A equipa fica presa em tarefas de baixo valor." },
        { icon: "", title: "Dificuldade em escalar carteira de clientes", desc: "Mais clientes exigem mais esforço manual." }
      ]
    },
    reconciliation: {
      tag: "A Solução",
      title: "Apresentamos a Hive",
      titleLine2: "Conciliação Automática",
      subtitle: "A Hive utiliza inteligência artificial para cruzar automaticamente lançamentos contabilísticos e movimentos de extratos bancários. Em segundos, identifica:",
      cards: [
        { icon: "", title: "Valores que coincidem", desc: "Identificação automática de movimentos correspondentes." },
        { icon: "", title: "Movimentos pendentes", desc: "Visibilidade imediata do que ainda precisa de ação." },
        { icon: "", title: "Divergências", desc: "Sinalização clara de inconsistências e diferenças." },
        { icon: "", title: "Inconsistências", desc: "Deteção rápida de anomalias no processo de conciliação." }
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
        { icon: "", title: "Redução de tempo operacional", desc: "Menos horas gastas na conciliação manual." },
        { icon: "", title: "Menor dependência de tarefas manuais", desc: "A equipa foca-se em trabalho estratégico." },
        { icon: "", title: "Redução de erros", desc: "Maior consistência no fecho contabilístico." },
        { icon: "", title: "Capacidade para novos clientes", desc: "Escale a carteira sem aumentar fricção operacional." },
        { icon: "", title: "Aumento de rentabilidade", desc: "Automatize uma das tarefas mais repetitivas da contabilidade." },
        { icon: "", title: "Maior controlo financeiro", desc: "Tenha visão clara do estado das conciliações em tempo real." }
      ]
    },
    showcase: {
      tag: "Porque HIVE",
      title: "A Hive é uma plataforma de agentes inteligentes desenvolvida pela BeeFirst para automatizar operações empresariais.",
      subtitle: "A conciliação é apenas o primeiro passo. Expanda para gestão documental, relatórios inteligentes, automação de processos e comunicação com clientes. Cresce com o seu gabinete."
    },
    dashboard: {
      greeting: "Olá, Admin!",
      summary: "Aqui está um resumo da sua contabilidade",
      sidebar: {
        dashboard: "Dashboard",
        companies: "Empresas",
        reconciliations: "Conciliações"
      },
      metrics: {
        companies: "Empresas",
        reconciliations: "Conciliações",
        reconciled: "Conciliadas",
        pending: "Pendentes"
      },
      actions: {
        newReconciliation: "Nova Conciliação",
        manageCompanies: "Gerenciar Empresas"
      },
      recentTitle: "Conciliações Recentes",
      viewAll: "Ver todas",
      reconciled: "Conciliada"
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
        { icon: "", title: "Line-by-line checks", desc: "Manual review for every transaction." },
        { icon: "", title: "High error risk", desc: "Divergences and rework hurt close cycles." },
        { icon: "", title: "High operational time", desc: "Your team is stuck in repetitive work." },
        { icon: "", title: "Limited scalability", desc: "Hard to grow client portfolio efficiently." }
      ]
    },
    reconciliation: {
      tag: "The Solution",
      title: "Meet Hive",
      titleLine2: "Automatic Reconciliation",
      subtitle: "Hive uses AI to automatically cross-check accounting entries and bank statement movements. In seconds, it identifies:",
      cards: [
        { icon: "", title: "Matching values", desc: "Automatic identification of corresponding movements." },
        { icon: "", title: "Pending items", desc: "Immediate visibility into what needs action." },
        { icon: "", title: "Divergences", desc: "Clear signals for mismatches and differences." },
        { icon: "", title: "Inconsistencies", desc: "Fast anomaly detection across reconciliation flows." }
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
        { icon: "", title: "Operational time reduction", desc: "Less time spent on manual reconciliation." },
        { icon: "", title: "Lower manual dependency", desc: "Team can focus on strategic work." },
        { icon: "", title: "Error reduction", desc: "More reliable financial closing." },
        { icon: "", title: "Capacity for new clients", desc: "Scale your portfolio with less friction." },
        { icon: "", title: "Higher profitability", desc: "Automate one of accounting's most repetitive tasks." },
        { icon: "", title: "Greater financial control", desc: "Track reconciliation status with clear real-time visibility." }
      ]
    },
    showcase: {
      tag: "Why Hive",
      title: "Hive is an intelligent-agents platform built by BeeFirst to automate business operations.",
      subtitle: "Reconciliation is only the first step. Expand into document management, smart reporting, process automation, and client communication."
    },
    dashboard: {
      greeting: "Hello, Admin!",
      summary: "Here is an overview of your accounting",
      sidebar: {
        dashboard: "Dashboard",
        companies: "Companies",
        reconciliations: "Reconciliations"
      },
      metrics: {
        companies: "Companies",
        reconciliations: "Reconciliations",
        reconciled: "Reconciled",
        pending: "Pending"
      },
      actions: {
        newReconciliation: "New Reconciliation",
        manageCompanies: "Manage Companies"
      },
      recentTitle: "Recent Reconciliations",
      viewAll: "View all",
      reconciled: "Reconciled"
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
        { icon: "", title: "Revision linea por linea", desc: "Proceso manual y repetitivo por movimiento." },
        { icon: "", title: "Alto riesgo de error", desc: "Las diferencias y el retrabajo afectan el cierre." },
        { icon: "", title: "Tiempo operativo elevado", desc: "El equipo se queda en tareas de bajo valor." },
        { icon: "", title: "Dificultad para escalar", desc: "Cuesta crecer la cartera de clientes." }
      ]
    },
    reconciliation: {
      tag: "La Solucion",
      title: "Presentamos Hive",
      titleLine2: "Conciliacion Automatica",
      subtitle: "Hive usa inteligencia artificial para cruzar automaticamente asientos contables y movimientos bancarios. En segundos, identifica:",
      cards: [
        { icon: "", title: "Valores coincidentes", desc: "Identificacion automatica de movimientos correspondientes." },
        { icon: "", title: "Movimientos pendientes", desc: "Visibilidad inmediata de lo que requiere accion." },
        { icon: "", title: "Divergencias", desc: "Senales claras de diferencias e inconsistencias." },
        { icon: "", title: "Inconsistencias", desc: "Deteccion rapida de anomalias del proceso." }
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
        { icon: "", title: "Reduccion de tiempo operativo", desc: "Menos horas en conciliacion manual." },
        { icon: "", title: "Menor dependencia manual", desc: "El equipo se enfoca en tareas estrategicas." },
        { icon: "", title: "Reduccion de errores", desc: "Mayor consistencia en el cierre contable." },
        { icon: "", title: "Capacidad para nuevos clientes", desc: "Escala la cartera con menos friccion." },
        { icon: "", title: "Mayor rentabilidad", desc: "Automatiza una de las tareas mas repetitivas." },
        { icon: "", title: "Mayor control financiero", desc: "Sigue el estado de conciliacion con visibilidad en tiempo real." }
      ]
    },
    showcase: {
      tag: "Por Que Hive",
      title: "Hive es una plataforma de agentes inteligentes creada por BeeFirst para automatizar operaciones empresariales.",
      subtitle: "La conciliacion es solo el primer paso. Expande a gestion documental, reportes inteligentes, automatizacion de procesos y comunicacion con clientes."
    },
    dashboard: {
      greeting: "Hola, Admin!",
      summary: "Aquí tienes un resumen de tu contabilidad",
      sidebar: {
        dashboard: "Panel",
        companies: "Empresas",
        reconciliations: "Conciliaciones"
      },
      metrics: {
        companies: "Empresas",
        reconciliations: "Conciliaciones",
        reconciled: "Conciliadas",
        pending: "Pendientes"
      },
      actions: {
        newReconciliation: "Nueva Conciliación",
        manageCompanies: "Gestionar Empresas"
      },
      recentTitle: "Conciliaciones Recientes",
      viewAll: "Ver todas",
      reconciled: "Conciliada"
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

const DASHBOARD_RECENT_RECONCILIATIONS = {
  pt: [
    { id: "empresa-1-a", title: "Empresa 1: 05/03/2026", date: "05/03/2026, 17:14" },
    { id: "empresa-2-a", title: "Empresa 2: 05/03/2026", date: "05/03/2026, 16:02" },
    { id: "empresa-1-b", title: "Empresa 1: 04/03/2026", date: "04/03/2026, 15:50" },
    { id: "empresa-2-b", title: "Empresa 2: 04/03/2026", date: "04/03/2026, 14:49", reconciled: true },
    { id: "empresa-3-a", title: "Empresa 3: 04/03/2026", date: "04/03/2026, 13:20" }
  ],
  en: [
    { id: "company-1-a", title: "Company 1: 03/05/2026", date: "03/05/2026, 17:14" },
    { id: "company-2-a", title: "Company 2: 03/05/2026", date: "03/05/2026, 16:02" },
    { id: "company-1-b", title: "Company 1: 03/04/2026", date: "03/04/2026, 15:50" },
    { id: "company-2-b", title: "Company 2: 03/04/2026", date: "03/04/2026, 14:49", reconciled: true },
    { id: "company-3-a", title: "Company 3: 03/04/2026", date: "03/04/2026, 13:20" }
  ],
  es: [
    { id: "empresa-1-a", title: "Empresa 1: 05/03/2026", date: "05/03/2026, 17:14" },
    { id: "empresa-2-a", title: "Empresa 2: 05/03/2026", date: "05/03/2026, 16:02" },
    { id: "empresa-1-b", title: "Empresa 1: 04/03/2026", date: "04/03/2026, 15:50" },
    { id: "empresa-2-b", title: "Empresa 2: 04/03/2026", date: "04/03/2026, 14:49", reconciled: true },
    { id: "empresa-3-a", title: "Empresa 3: 04/03/2026", date: "04/03/2026, 13:20" }
  ]
};

const DASHBOARD_METRIC_CARDS = [
  { id: "companies", value: 3, tone: "neutral", icon: Building2 },
  { id: "reconciliations", value: 46, tone: "warning", icon: FileText },
  { id: "reconciled", value: 6, tone: "success", icon: CheckCircle2 },
  { id: "pending", value: 4, tone: "danger", icon: CircleAlert }
];

const DASHBOARD_SIDE_ITEMS = [
  { id: "dashboard", icon: LayoutGrid, active: true },
  { id: "companies", icon: Building2, active: false },
  { id: "reconciliations", icon: FileText, active: false }
];

const MOBILE_BREAKPOINT = 768;
const NAV_SCROLL_THRESHOLD = 50;

export default function App() {
  const [lang, setLang] = React.useState("pt");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [shouldRenderShowcase, setShouldRenderShowcase] = React.useState(false);
  const [isNavScrolled, setIsNavScrolled] = React.useState(false);
  const [contactStatus, setContactStatus] = React.useState("idle");
  const [contactMessage, setContactMessage] = React.useState("");
  const t = TRANSLATIONS[lang];
  const dashboardText = TRANSLATIONS.pt.dashboard;
  const dashboardRecentItems = DASHBOARD_RECENT_RECONCILIATIONS.pt;
  const dashboardMetricCards = DASHBOARD_METRIC_CARDS;
  const dashboardSideItems = DASHBOARD_SIDE_ITEMS;

  const showcaseRef = React.useRef(null);

  React.useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      rafId = 0;
      const currentScroll = window.scrollY || window.pageYOffset || 0;
      const nextIsScrolled = currentScroll > NAV_SCROLL_THRESHOLD;
      setIsNavScrolled((prevIsScrolled) => (prevIsScrolled === nextIsScrolled ? prevIsScrolled : nextIsScrolled));
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
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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

  const dashboardPreviewContent = (
    <>
      <aside className="dashboard-sidebar-new">
        <div className="dashboard-side-logo-new">
          <img src="/logo_hex.svg" alt="" width="28" height="28" />
          <span>BeeFirst</span>
        </div>

        <nav className="dashboard-side-nav-new">
          {dashboardSideItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={`dashboard-side-item-new ${item.active ? "active" : ""}`}
              >
                <Icon size={14} />
                <span>{dashboardText.sidebar[item.id]}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="dashboard-main-new">
        <div className="dashboard-main-header-new">
          <h3 className="dashboard-greeting-new">{dashboardText.greeting}</h3>
        </div>
        <p className="dashboard-summary-new">{dashboardText.summary}</p>

        <div className="dashboard-metrics-new">
          {dashboardMetricCards.map((metric) => {
            const Icon = metric.icon;

            return (
              <article key={metric.id} className="dashboard-stat-new">
                <div className="dashboard-stat-content-new">
                  <span>{dashboardText.metrics[metric.id]}</span>
                  <strong>{metric.value}</strong>
                </div>
                <span className={`dashboard-stat-icon-new tone-${metric.tone}`}>
                  <Icon size={18} />
                </span>
              </article>
            );
          })}
        </div>

        <div className="dashboard-actions-new">
          <button type="button" className="dashboard-action-new primary">
            <Plus size={16} />
            {dashboardText.actions.newReconciliation}
          </button>
          <button type="button" className="dashboard-action-new secondary">
            <Building2 size={16} />
            {dashboardText.actions.manageCompanies}
          </button>
        </div>

        <div className="dashboard-main-new dashboard-main-recent-new">
          <div className="dashboard-main-header-new">
            <h3 className="dashboard-recent-title-new">{dashboardText.recentTitle}</h3>
            <button type="button" className="dashboard-view-all-new">{dashboardText.viewAll}</button>
          </div>

          <div className="dashboard-recent-list-new">
            {dashboardRecentItems.map((item) => (
              <article className="dashboard-recent-item-new" key={item.id}>
                <div className="dashboard-recent-content-new">
                  <h4>{item.title}</h4>
                  <p>{item.date}</p>
                </div>
                {item.reconciled ? (
                  <span className="dashboard-status-new">
                    <CheckCircle2 size={16} />
                    {dashboardText.reconciled}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
        <div className="app-new dark-mode">
      <nav
        className={`nav-new ${isNavScrolled ? "scrolled" : ""}`}
      >
        <div className="container-new">
          <div className="nav-content">
            <div className="logo-new">
              <img src="/logo_hex.svg" alt="BeeFirst" className="logo-img-new" width="40" height="40" />
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

              <a href="#demo" className="btn-primary-new" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero-new">
        <div className="container-new">
          <div
            className="hero-content-new"
          >
            <h1
              className="hero-title-new"
            >
              {t.hero.title}
              <span className="hero-subtitle-static-new">{t.hero.subtitle}</span>
            </h1>

            <p
              className="hero-description-new"
            >
              {t.hero.description}
            </p>

            {t.hero.bullets?.length > 0 && (
              <div
                className="hero-bullets-new"
              >
                {t.hero.bullets.map((bullet) => (
                  <span key={bullet} className="hero-bullet-new">✔ {bullet}</span>
                ))}
              </div>
            )}

            <div
              className="hero-cta-new"
            >
              <a href="#demo" className="btn-primary-large-new">
                {t.hero.ctaContact}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary-large-new">{t.hero.watch}</a>
            </div>

          </div>
        </div>
      </section>

      <section className="section-new problem-section">
        <div className="container-new">
          <div
            className="section-header-new"
          >
            <h2>{t.problem.title}</h2>
            {t.problem.note && <p>{t.problem.note}</p>}
          </div>

          <div className="cards-grid-new">
            {t.problem.cards.map((card, i) => (
              <div
                key={i}
                className="feature-card-new"
              >
                <div className="card-icon-new">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="section-new reconciliation-section">
        <div className="container-new">
          <div
            className="section-header-new"
          >
            <h2>
              {t.reconciliation.title}
              {t.reconciliation.titleLine2 ? (
                <span className="section-title-break-new">{t.reconciliation.titleLine2}</span>
              ) : null}
            </h2>
            <p>{t.reconciliation.subtitle}</p>
          </div>

          <div className="cards-grid-new reconciliation-grid-new">
            {t.reconciliation.cards.map((card, i) => (
              <div
                key={i}
                className="feature-card-new reconciliation-card-new"
              >
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          {t.reconciliation.note && <p className="section-note-new">{t.reconciliation.note}</p>}
        </div>
      </section>

      <section id="how-it-works" className="section-new solution-section">
        <div className="container-new">
          <div
            className="section-header-new"
          >
            <h2>{t.solution.title}</h2>
            <p>{t.solution.subtitle}</p>
          </div>

          <div className="process-grid-new">
            {t.solution.steps.map((step, i) => (
              <div
                key={i}
                className="process-card-new"
              >
                <div className="process-number-new">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {t.solution.note && <p className="section-note-new">{t.solution.note}</p>}
        </div>
      </section>

      <section className="section-new showcase-section" ref={showcaseRef}>
        <div className="container-new">
          <div
            className="section-header-new"
          >
            <h2>{t.showcase.title}</h2>
            <p>{t.showcase.subtitle}</p>
          </div>

          {shouldRenderShowcase ? (
            <div
              className="dashboard-preview dashboard-preview-recent-new"
              aria-hidden="true"
            >
              {dashboardPreviewContent}
            </div>
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
          <div
            className="section-header-new"
          >
            <h2>{t.benefits.title}</h2>
          </div>

          <div className="benefits-grid-new">
            {t.benefits.items.map((item, i) => (
              <div
                key={i}
                className="benefit-card-new"
              >
                <div className="benefit-icon-new">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="section-new cta-section">
        <div className="container-new">
          <div
            className="cta-card"
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
                  <textarea id="contact-message" name="message" rows="3" placeholder={t.contact.messagePlaceholder} required />
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

          </div>
        </div>
      </section>

      <footer className="footer-new">
        <div className="container-new">
          <div className="footer-stack-new">
            <a href="#" className="footer-brand-mark-new" aria-label="BeeFirst">
              <img src="/logo_hex.svg" alt="BeeFirst" className="footer-brand-img-new" loading="lazy" decoding="async" width="42" height="42" />
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
                <img src={instagramIcon} alt="" loading="lazy" decoding="async" width="18" height="18" />
              </a>
              <a
                href="https://www.linkedin.com/company/beefirst-ai/posts/?feedView=all"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="" loading="lazy" decoding="async" width="18" height="18" />
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



