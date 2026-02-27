import React, { useEffect, useState } from "react";
import "./styles.css";

const CONTENT = {
  pt: {
    nav: {
      hero: "Início",
      problem: "Problema",
      solution: "Solução",
      flow: "Como funciona",
      benefits: "Benefícios",
      contact: "Fale connosco"
    },
    hero: {
      badge: "Hive • Conciliação automática para contabilistas",
      title: "Reduza horas de conciliação bancária a segundos.",
      highlight: "Dashboard inteligente para clientes e equipa",
      subtitle:
        "Automatize o cruzamento entre lançamentos contábeis e extratos bancários com IA. Menos erros, mais escala e mais margem por cliente.",
      chips: [
        "Identificação automática de movimentos",
        "Sinalização imediata de divergências",
        "Integração com ERP e bancos",
        "Alertas e trilhas de auditoria"
      ],
      metrics: [
        { label: "Tempo poupado", value: "-78%", desc: "média por empresa" },
        { label: "Clientes conciliados", value: "120+", desc: "já em produção" },
        { label: "Primeiro resultado", value: "1 semana", desc: "para ver ROI" }
      ],
      primaryCta: "Agendar demonstração",
      secondaryCta: "Ver o dashboard",
      note: "Demonstração guiada de 15 minutos"
    },
    problem: {
      title: "Conciliação manual ainda consome horas?",
      subtitle:
        "Processos linha a linha aumentam risco de erro, atrasam o fecho e impedem o crescimento da carteira.",
      cards: [
        { title: "Conferência linha a linha", desc: "Horas gastas em planilhas e extratos paralelos." },
        { title: "Risco de erro e retrabalho", desc: "Divergências surgem tarde, impactando o cliente." },
        { title: "Tempo operacional elevado", desc: "Equipa presa em tarefas repetitivas de baixo valor." },
        { title: "Escalabilidade limitada", desc: "Carteira não cresce sem aumentar headcount." }
      ]
    },
    solution: {
      title: "Apresentamos a Hive – Conciliação Automática",
      subtitle: "IA cruza lançamentos e extratos, destaca exceções e aprende os padrões do seu gabinete.",
      bullets: [
        "Matching inteligente de movimentos, valores parciais e datas aproximadas.",
        "Orquestração com bancos e ERPs para importar e devolver lançamentos conciliados.",
        "Portal para clientes acompanharem pendências, enviar comprovativos e aprovar ações.",
        "Alertas, trilhas de auditoria e governança para cada conciliação."
      ],
      stats: ["+4.3x retorno médio", "< 7 dias para gerar valor", "Segurança e privacidade LGPD"]
    },
    flow: {
      title: "Como funciona na prática",
      steps: [
        { title: "Importação", desc: "Integração com o sistema contábil e extratos bancários." },
        { title: "Cruzamento inteligente", desc: "Matching automático com IA, regras e aprendizagem contínua." },
        { title: "Validação e ação", desc: "Dashboard destaca pendências, divergências e próximos passos." }
      ]
    },
    benefits: {
      title: "Resultados para o gabinete e clientes",
      items: [
        "Redução significativa de tempo operacional",
        "Menor dependência de tarefas manuais",
        "Redução de erros e retrabalho",
        "Maior capacidade para assumir novos clientes",
        "Aumento de rentabilidade do serviço",
        "Visibilidade em tempo real para a equipa e clientes"
      ]
    },
    expansion: {
      title: "Por que Hive",
      bullets: [
        "Plataforma de agentes inteligentes criada pela BeeFirst",
        "Conciliação é o primeiro passo: expanda para gestão documental e automação",
        "Time de produto focado em escritórios contábeis",
        "Suporte dedicado durante onboarding e operação"
      ]
    },
    cta: {
      title: "Pronto para automatizar a conciliação bancária?",
      subtitle: "Agende uma demonstração gratuita e descubra quanto tempo pode poupar já no próximo mês.",
      primary: "Agendar demonstração",
      secondary: "Falar com especialista",
      note: "Resposta em menos de 1 dia útil"
    }
  },
  en: {
    nav: {
      hero: "Home",
      problem: "Problem",
      solution: "Solution",
      flow: "How it works",
      benefits: "Benefits",
      contact: "Contact"
    },
    hero: {
      badge: "Hive • Automatic bank reconciliation for accounting teams",
      title: "Cut bank reconciliation hours down to seconds.",
      highlight: "Smart dashboard for accountants and clients",
      subtitle:
        "Automate the match between accounting entries and bank statements with AI. Fewer errors, more scale and margin per client.",
      chips: [
        "Automatic movement detection",
        "Instant flagging of divergences",
        "ERP + bank integrations",
        "Alerts and audit trails"
      ],
      metrics: [
        { label: "Time saved", value: "-78%", desc: "average per company" },
        { label: "Clients reconciled", value: "120+", desc: "already in production" },
        { label: "First results", value: "1 week", desc: "to see ROI" }
      ],
      primaryCta: "Book a demo",
      secondaryCta: "See the dashboard",
      note: "15-minute guided walkthrough"
    },
    problem: {
      title: "Is manual reconciliation still draining hours?",
      subtitle:
        "Line-by-line work increases error risk, delays closing and blocks portfolio growth.",
      cards: [
        { title: "Line-by-line checks", desc: "Hours lost in spreadsheets and parallel statements." },
        { title: "Error and rework risk", desc: "Divergences appear late and impact clients." },
        { title: "High operational time", desc: "Team stuck in repetitive low-value tasks." },
        { title: "Limited scalability", desc: "Portfolio only grows by hiring more people." }
      ]
    },
    solution: {
      title: "Meet Hive – Automatic Reconciliation",
      subtitle: "AI matches entries and statements, highlights exceptions and learns your patterns.",
      bullets: [
        "Smart matching for partial values, dates and references.",
        "Orchestration with banks and ERPs to import and return reconciled entries.",
        "Client portal to track pending items, upload evidence and approve actions.",
        "Alerts, audit trail and governance across every reconciliation."
      ],
      stats: ["+4.3x average ROI", "< 7 days to show value", "Security & privacy first"]
    },
    flow: {
      title: "How it works",
      steps: [
        { title: "Import", desc: "Connect accounting system and bank statements." },
        { title: "Smart matching", desc: "AI + rules match transactions and learn your patterns." },
        { title: "Validate & act", desc: "Dashboard highlights pending items, divergences and next steps." }
      ]
    },
    benefits: {
      title: "Outcomes for your firm and clients",
      items: [
        "Significant reduction in operational time",
        "Less dependence on manual tasks",
        "Fewer errors and rework",
        "More capacity to onboard new clients",
        "Higher profitability per client",
        "Real-time visibility for team and clients"
      ]
    },
    expansion: {
      title: "Why Hive",
      bullets: [
        "Intelligent agents platform built by BeeFirst",
        "Reconciliation is the first step: expand to documents and automation",
        "Product team focused on accounting firms",
        "Dedicated support during onboarding and beyond"
      ]
    },
    cta: {
      title: "Ready to automate bank reconciliation?",
      subtitle: "Book a free demo and see how much time you can save next month.",
      primary: "Book a demo",
      secondary: "Talk to an expert",
      note: "Response within one business day"
    }
  },
  es: {
    nav: {
      hero: "Inicio",
      problem: "Problema",
      solution: "Solución",
      flow: "Cómo funciona",
      benefits: "Beneficios",
      contact: "Contáctenos"
    },
    hero: {
      badge: "Hive • Conciliación bancaria automática para despachos",
      title: "Reduzca horas de conciliación bancaria a segundos.",
      highlight: "Panel inteligente para contadores y clientes",
      subtitle:
        "Automatice el cruce entre asientos contables y extractos bancarios con IA. Menos errores y más escala por cliente.",
      chips: [
        "Identificación automática de movimientos",
        "Señalización inmediata de divergencias",
        "Integraciones con ERP y bancos",
        "Alertas y trazabilidad"
      ],
      metrics: [
        { label: "Tiempo ahorrado", value: "-78%", desc: "promedio por empresa" },
        { label: "Clientes conciliados", value: "120+", desc: "ya en producción" },
        { label: "Primer resultado", value: "1 semana", desc: "para ver ROI" }
      ],
      primaryCta: "Agendar demo",
      secondaryCta: "Ver el panel",
      note: "Recorrido guiado de 15 minutos"
    },
    problem: {
      title: "¿La conciliación manual sigue consumiendo horas?",
      subtitle:
        "El trabajo línea por línea aumenta el riesgo de error, retrasa el cierre y limita el crecimiento de la cartera.",
      cards: [
        { title: "Revisión línea por línea", desc: "Horas en hojas de cálculo y extractos paralelos." },
        { title: "Riesgo de error y retrabajo", desc: "Las divergencias aparecen tarde y afectan al cliente." },
        { title: "Tiempo operativo alto", desc: "Equipo atrapado en tareas repetitivas de bajo valor." },
        { title: "Escalabilidad limitada", desc: "La cartera crece solo contratando más gente." }
      ]
    },
    solution: {
      title: "Presentamos Hive – Conciliación Automática",
      subtitle: "IA cruza asientos y extractos, destaca excepciones y aprende tus patrones.",
      bullets: [
        "Matching inteligente de valores parciales, fechas y referencias.",
        "Orquestación con bancos y ERPs para importar y devolver asientos conciliados.",
        "Portal para clientes: pendientes, envío de evidencias y aprobaciones.",
        "Alertas, trazabilidad y gobierno en cada conciliación."
      ],
      stats: ["+4.3x retorno medio", "< 7 días para entregar valor", "Seguridad y privacidad"]
    },
    flow: {
      title: "Cómo funciona",
      steps: [
        { title: "Importación", desc: "Integración con sistema contable y extractos bancarios." },
        { title: "Cruce inteligente", desc: "IA + reglas concilian y aprenden tus patrones." },
        { title: "Validación y acción", desc: "Panel señala pendientes, divergencias y próximos pasos." }
      ]
    },
    benefits: {
      title: "Resultados para tu despacho y clientes",
      items: [
        "Reducción significativa de tiempo operativo",
        "Menor dependencia de tareas manuales",
        "Menos errores y retrabajo",
        "Más capacidad para nuevos clientes",
        "Mayor rentabilidad por cliente",
        "Visibilidad en tiempo real para equipo y clientes"
      ]
    },
    expansion: {
      title: "Por qué Hive",
      bullets: [
        "Plataforma de agentes inteligentes creada por BeeFirst",
        "Conciliación es el primer paso: expande a documentos y automatización",
        "Equipo de producto enfocado en despachos contables",
        "Soporte dedicado durante onboarding y operación"
      ]
    },
    cta: {
      title: "¿Listo para automatizar la conciliación bancaria?",
      subtitle: "Agenda una demo gratuita y descubre cuánto tiempo puedes ahorrar el próximo mes.",
      primary: "Agendar demo",
      secondary: "Hablar con un experto",
      note: "Respuesta en menos de 1 día hábil"
    }
  }
};

const SAMPLE_ROWS = [
  { company: "Loja Atlas", matched: "98%", pending: 2, value: "R$ 482k" },
  { company: "Grupo Norte", matched: "94%", pending: 4, value: "R$ 1,2M" },
  { company: "Terra Azul", matched: "91%", pending: 5, value: "R$ 317k" }
];

export default function App() {
  const [lang, setLang] = useState("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <div className="bg-blur bg-1" />
      <div className="bg-blur bg-2" />
      <div className="bg-grid" />

      <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
        <div className="container nav-row">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
            <img src="/logo_hex.svg" alt="BeeFirst" className="brand-mark" />
            <div>
              <div className="brand-name">Bee<span>First</span></div>
              <div className="brand-sub">Hive</div>
            </div>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#problema" onClick={() => setMenuOpen(false)}>{t.nav.problem}</a>
            <a href="#solucao" onClick={() => setMenuOpen(false)}>{t.nav.solution}</a>
            <a href="#fluxo" onClick={() => setMenuOpen(false)}>{t.nav.flow}</a>
            <a href="#beneficios" onClick={() => setMenuOpen(false)}>{t.nav.benefits}</a>
          </nav>

          <div className="nav-actions">
            <div className="lang-switch">
              {["pt", "en", "es"].map((code) => (
                <button
                  key={code}
                  className={code === lang ? "active" : ""}
                  onClick={() => {
                    setLang(code);
                    setMenuOpen(false);
                  }}
                >
                  {code}
                </button>
              ))}
            </div>
            <a className="btn ghost small desktop" href="#demo" onClick={() => setMenuOpen(false)}>
              {t.nav.contact}
            </a>
            <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span />
              <span />
            </button>
          </div>
        </div>
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
      </header>

      <main id="top">
        <section className="section hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">{t.hero.badge}</div>
              <h1>
                {t.hero.title}
                <span className="gradient-text"> {t.hero.highlight}</span>
              </h1>
              <p className="lede">{t.hero.subtitle}</p>

              <div className="cta-row">
                <a className="btn primary" href="#demo">{t.hero.primaryCta}</a>
                <a className="btn outline" href="#dashboard">{t.hero.secondaryCta}</a>
              </div>
              <p className="note">{t.hero.note}</p>

              <div className="chip-row">
                {t.hero.chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>

              <div className="metrics-grid">
                {t.hero.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-desc">{metric.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual" id="dashboard">
              <div className="dashboard">
                <div className="dashboard-header">
                  <div>
                    <p className="dash-label">Hive dashboard</p>
                    <p className="dash-title">Conciliação em tempo real</p>
                  </div>
                  <span className="status success">Ao vivo</span>
                </div>

                <div className="status-cards">
                  <div className="status-card">
                    <p className="status-label">Movimentos conciliados</p>
                    <p className="status-value">97,6%</p>
                    <p className="status-sub">IA + regras proprietárias</p>
                  </div>
                  <div className="status-card">
                    <p className="status-label">Pendências críticas</p>
                    <p className="status-value warn">3</p>
                    <p className="status-sub">clientes aguardam evidência</p>
                  </div>
                </div>

                <div className="table">
                  <div className="table-head">
                    <span>Cliente</span>
                    <span>Match</span>
                    <span>Pendências</span>
                    <span>Volume</span>
                  </div>
                  {SAMPLE_ROWS.map((row) => (
                    <div key={row.company} className="table-row">
                      <span>{row.company}</span>
                      <span>{row.matched}</span>
                      <span>{row.pending}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="floating-card">
                <p className="floating-title">Alerta inteligente</p>
                <p className="floating-text">2 divergências sinalizadas hoje</p>
              </div>
              <div className="floating-card success">
                <p className="floating-title">ROI previsto</p>
                <p className="floating-text">+4.3x em 3 meses</p>
              </div>
            </div>
          </div>
        </section>

        <section id="problema" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.problem.title}</div>
              <h2>{t.problem.subtitle}</h2>
            </div>
            <div className="card-grid">
              {t.problem.cards.map((card) => (
                <div key={card.title} className="card">
                  <div className="card-icon" />
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solucao" className="section split">
          <div className="container split-grid">
            <div className="split-copy">
              <div className="eyebrow">{t.solution.title}</div>
              <h2>{t.solution.subtitle}</h2>
              <ul className="bullet-list">
                {t.solution.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="split-panel">
              <div className="pill-row">
                {t.solution.stats.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
              <div className="glow-card">
                <p className="dash-label">Workflow Hive</p>
                <div className="progress">
                  <div className="progress-fill" />
                </div>
                <p className="glow-text">Conciliado, pendente e divergente em tempo real</p>
              </div>
            </div>
          </div>
        </section>

        <section id="fluxo" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.flow.title}</div>
            </div>
            <div className="timeline">
              {t.flow.steps.map((step, index) => (
                <div key={step.title} className="timeline-item">
                  <div className="timeline-bullet">0{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.benefits.title}</div>
            </div>
            <div className="benefits-grid">
              {t.benefits.items.map((item) => (
                <div key={item} className="benefit">
                  <span className="tick">?</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">{t.expansion.title}</div>
            </div>
            <div className="card-grid two">
              {t.expansion.bullets.map((item) => (
                <div key={item} className="card">
                  <div className="card-icon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="section cta">
          <div className="container cta-card">
            <div>
              <div className="eyebrow">{t.cta.title}</div>
              <h2>{t.cta.subtitle}</h2>
              <div className="cta-actions">
                <a className="btn primary" href="#demo-form">{t.cta.primary}</a>
                <a className="btn outline" href="#demo-form">{t.cta.secondary}</a>
              </div>
              <p className="note">{t.cta.note}</p>
            </div>
            <form id="demo-form" className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder={lang === "pt" ? "Nome completo" : lang === "en" ? "Full name" : "Nombre completo"} required />
              <input type="email" name="email" placeholder={lang === "pt" ? "Email profissional" : lang === "en" ? "Work email" : "Email profesional"} required />
              <input type="text" name="company" placeholder={lang === "pt" ? "Empresa" : lang === "en" ? "Company" : "Empresa"} required />
              <button type="submit" className="btn primary full">{t.cta.primary}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <div className="brand-name">Bee<span>First</span> • Hive</div>
            <p className="footer-sub">Conciliação automática para escritórios contábeis</p>
          </div>
          <div className="footer-links">
            <a href="#problema">{t.nav.problem}</a>
            <a href="#solucao">{t.nav.solution}</a>
            <a href="#fluxo">{t.nav.flow}</a>
            <a href="#beneficios">{t.nav.benefits}</a>
          </div>
          <div className="footer-contact">
            <p>info@beefirst.com</p>
            <p>© 2026 BeeFirst • Hive</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
