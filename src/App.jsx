import React from "react";
import "./styles.css";

const WORDS = {
  pt: ["Contabilistas", "Escritórios", "Empresas", "Gestores"],
  en: ["Accountants", "Offices", "Companies", "Managers"],
  es: ["Contadores", "Oficinas", "Empresas", "Gestores"]
};

const TRANSLATIONS = {
  pt: {
    nav: { inicio: "Início", solucoes: "Soluções", sobre: "Sobre", contact: "Fale Connosco" },
    hero: {
      badge: "Conciliação Bancária com IA",
      title: ["Transforme", "Conciliação em", "Segundos", "para"],
      subtitle: "Automatize o cruzamento entre contabilidade e extractos bancários. Reduza 60-90% do tempo operacional com inteligência artificial.",
      cta1: "Agendar Demonstração",
      cta2: "Ver Como Funciona"
    },
    stats: {
      time: "Redução de Tempo",
      result: "Primeiro Resultado",
      ai: "Matching Inteligente"
    },
    problem: {
      tag: "O Problema",
      title: "Conciliação Manual Consome Horas",
      subtitle: "Processos manuais geram custos ocultos e limitam crescimento",
      card1: { title: "Conferência Linha a Linha", desc: "Horas gastas em planilhas comparando extractos manualmente" },
      card2: { title: "Alto Risco de Erro", desc: "Erros humanos impactam fecho e geram retrabalho" },
      card3: { title: "Tempo Operacional Elevado", desc: "Dificuldade em escalar sem aumentar equipa" },
      card4: { title: "Pouca Visibilidade", desc: "Difícil acompanhar estado e pendências em tempo real" }
    },
    solution: {
      tag: "A Solução",
      title: "Hive - Conciliação Automática",
      subtitle: "Inteligência artificial aplicada à contabilidade",
      step1: { title: "Importação", desc: "Integração automática com sistema contábil e extractos bancários" },
      step2: { title: "Cruzamento IA", desc: "Matching inteligente baseado em padrões e regras" },
      step3: { title: "Validação", desc: "Dashboard com conciliado, pendente e divergente" }
    },
    benefits: {
      tag: "Benefícios",
      title: "Porquê Escolher a Hive?",
      item1: "Redução significativa de tempo operacional",
      item2: "Menor dependência de tarefas manuais",
      item3: "Redução de erros e retrabalho",
      item4: "Maior capacidade para novos clientes",
      item5: "Aumento de rentabilidade",
      item6: "Dashboard em tempo real"
    },
    demo: {
      tag: "Próximo Passo",
      title: "Agende uma Demonstração",
      subtitle: "Descubra quanto tempo pode poupar já no próximo mês",
      feature1: "Demo gratuita de 15 minutos",
      feature2: "Visualização de impacto operacional",
      feature3: "Piloto rápido com baixo risco",
      form: {
        name: "Nome completo",
        email: "Email profissional",
        company: "Empresa",
        profile: "Selecione o perfil",
        option1: "Escritório contábil",
        option2: "BPO financeiro",
        option3: "Financeiro interno",
        option4: "Outro",
        submit: "Agendar Demonstração Gratuita"
      }
    },
    footer: {
      brand: "Conciliação automática para contabilidade",
      problem: "Problema",
      solution: "Solução",
      benefits: "Benefícios",
      demo: "Demo",
      rights: "Todos os direitos reservados"
    }
  },
  en: {
    nav: { inicio: "Home", solucoes: "Solutions", sobre: "About", contact: "Contact Us" },
    hero: {
      badge: "Bank Reconciliation with AI",
      title: ["Transform", "Reconciliation in", "Seconds", "for"],
      subtitle: "Automate the matching between accounting and bank statements. Reduce 60-90% of operational time with artificial intelligence.",
      cta1: "Schedule Demo",
      cta2: "See How It Works"
    },
    stats: {
      time: "Time Reduction",
      result: "First Result",
      ai: "Smart Matching"
    },
    problem: {
      tag: "The Problem",
      title: "Manual Reconciliation Consumes Hours",
      subtitle: "Manual processes generate hidden costs and limit growth",
      card1: { title: "Line by Line Review", desc: "Hours spent on spreadsheets comparing statements manually" },
      card2: { title: "High Error Risk", desc: "Human errors impact closing and generate rework" },
      card3: { title: "High Operational Time", desc: "Difficulty scaling without increasing team" },
      card4: { title: "Low Visibility", desc: "Difficult to track status and pending items in real time" }
    },
    solution: {
      tag: "The Solution",
      title: "Hive - Automatic Reconciliation",
      subtitle: "Artificial intelligence applied to accounting",
      step1: { title: "Import", desc: "Automatic integration with accounting system and bank statements" },
      step2: { title: "AI Matching", desc: "Smart matching based on patterns and rules" },
      step3: { title: "Validation", desc: "Dashboard with reconciled, pending and divergent" }
    },
    benefits: {
      tag: "Benefits",
      title: "Why Choose Hive?",
      item1: "Significant reduction in operational time",
      item2: "Less dependence on manual tasks",
      item3: "Reduction of errors and rework",
      item4: "Greater capacity for new clients",
      item5: "Increased profitability",
      item6: "Real-time dashboard"
    },
    demo: {
      tag: "Next Step",
      title: "Schedule a Demo",
      subtitle: "Discover how much time you can save next month",
      feature1: "Free 15-minute demo",
      feature2: "Operational impact visualization",
      feature3: "Quick pilot with low risk",
      form: {
        name: "Full name",
        email: "Professional email",
        company: "Company",
        profile: "Select profile",
        option1: "Accounting office",
        option2: "Financial BPO",
        option3: "Internal finance",
        option4: "Other",
        submit: "Schedule Free Demo"
      }
    },
    footer: {
      brand: "Automatic reconciliation for accounting",
      problem: "Problem",
      solution: "Solution",
      benefits: "Benefits",
      demo: "Demo",
      rights: "All rights reserved"
    }
  },
  es: {
    nav: { inicio: "Inicio", solucoes: "Soluciones", sobre: "Acerca", contact: "Contáctenos" },
    hero: {
      badge: "Conciliación Bancaria con IA",
      title: ["Transforme", "Conciliación en", "Segundos", "para"],
      subtitle: "Automatice el cruce entre contabilidad y extractos bancarios. Reduzca 60-90% del tiempo operativo con inteligencia artificial.",
      cta1: "Agendar Demostración",
      cta2: "Ver Cómo Funciona"
    },
    stats: {
      time: "Reducción de Tiempo",
      result: "Primer Resultado",
      ai: "Matching Inteligente"
    },
    problem: {
      tag: "El Problema",
      title: "Conciliación Manual Consume Horas",
      subtitle: "Procesos manuales generan costos ocultos y limitan crecimiento",
      card1: { title: "Revisión Línea por Línea", desc: "Horas gastadas en hojas de cálculo comparando extractos manualmente" },
      card2: { title: "Alto Riesgo de Error", desc: "Errores humanos impactan cierre y generan retrabajo" },
      card3: { title: "Tiempo Operacional Elevado", desc: "Dificultad para escalar sin aumentar equipo" },
      card4: { title: "Poca Visibilidad", desc: "Difícil seguir estado y pendientes en tiempo real" }
    },
    solution: {
      tag: "La Solución",
      title: "Hive - Conciliación Automática",
      subtitle: "Inteligencia artificial aplicada a la contabilidad",
      step1: { title: "Importación", desc: "Integración automática con sistema contable y extractos bancarios" },
      step2: { title: "Cruce IA", desc: "Matching inteligente basado en patrones y reglas" },
      step3: { title: "Validación", desc: "Dashboard con conciliado, pendiente y divergente" }
    },
    benefits: {
      tag: "Beneficios",
      title: "¿Por Qué Elegir Hive?",
      item1: "Reducción significativa de tiempo operacional",
      item2: "Menor dependencia de tareas manuales",
      item3: "Reducción de errores y retrabajo",
      item4: "Mayor capacidad para nuevos clientes",
      item5: "Aumento de rentabilidad",
      item6: "Dashboard en tiempo real"
    },
    demo: {
      tag: "Próximo Paso",
      title: "Agende una Demostración",
      subtitle: "Descubra cuánto tiempo puede ahorrar el próximo mes",
      feature1: "Demo gratuita de 15 minutos",
      feature2: "Visualización de impacto operacional",
      feature3: "Piloto rápido con bajo riesgo",
      form: {
        name: "Nombre completo",
        email: "Email profesional",
        company: "Empresa",
        profile: "Seleccione el perfil",
        option1: "Oficina contable",
        option2: "BPO financiero",
        option3: "Financiero interno",
        option4: "Otro",
        submit: "Agendar Demostración Gratuita"
      }
    },
    footer: {
      brand: "Conciliación automática para contabilidad",
      problem: "Problema",
      solution: "Solución",
      benefits: "Beneficios",
      demo: "Demo",
      rights: "Todos los derechos reservados"
    }
  }
};

export default function App() {
  const [theme, setTheme] = React.useState("light");
  const [lang, setLang] = React.useState("pt");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [currentWord, setCurrentWord] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);

  const t = TRANSLATIONS[lang];

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % WORDS[lang].length);
    }, 2500);
    return () => clearInterval(interval);
  }, [theme, lang]);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* SVG Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <pattern id="cartoon-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
      </svg>

      {/* Animated Background */}
      <div className="bg-gradient" />
      <svg className="bg-cartoon-grid" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="url(#cartoon-grid)" opacity="0.5"></rect>
      </svg>
      <div className="bg-grid" />
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Navigation */}
      <nav className={`nav ${scrollY > 50 ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-inner">
            <div className="logo">
              <img src="/logo_hex.svg" alt="BeeFirst" className="logo-img" />
              <span className="logo-text">Bee<span className="logo-highlight">First</span></span>
            </div>

            <div className="nav-links desktop">
              <a href="#problema">{t.nav.inicio}</a>
              <a href="#solucao">{t.nav.solucoes}</a>
              <a href="#beneficios">{t.nav.sobre}</a>
            </div>

            <div className="nav-actions">
              <div className="lang-selector desktop">
                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>en</button>
                <button className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>pt</button>
                <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>es</button>
              </div>
              <a href="#demo" className="btn-primary desktop">{t.nav.contact}</a>
              <button className="menu-btn mobile" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
            <a href="#problema" onClick={() => setMenuOpen(false)}>{t.nav.inicio}</a>
            <a href="#solucao" onClick={() => setMenuOpen(false)}>{t.nav.solucoes}</a>
            <a href="#beneficios" onClick={() => setMenuOpen(false)}>{t.nav.sobre}</a>
            <a href="#demo" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot" />
              {t.hero.badge}
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">{t.hero.title[0]}</span>
              <span className="title-line">{t.hero.title[1]}</span>
              <span className="title-line gradient-text">{t.hero.title[2]}</span>
              <span className="title-line">{t.hero.title[3]}</span>
              <span className="word-rotate">{WORDS[lang][currentWord]}</span>
            </h1>

            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>

            <div className="hero-cta">
              <a href="#demo" className="btn-primary large">
                <span>{t.hero.cta1}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#solucao" className="btn-secondary large">{t.hero.cta2}</a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">60-90%</div>
                <div className="stat-label">{t.stats.time}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">1 {lang === 'en' ? 'Week' : lang === 'es' ? 'Semana' : 'Semana'}</div>
                <div className="stat-label">{t.stats.result}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">IA</div>
                <div className="stat-label">{t.stats.ai}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section id="problema" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.problem.tag}</span>
            <h2>{t.problem.title}</h2>
            <p>{t.problem.subtitle}</p>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <div className="card-icon red">⚠️</div>
              <h3>{t.problem.card1.title}</h3>
              <p>{t.problem.card1.desc}</p>
            </div>
            <div className="feature-card">
              <div className="card-icon orange">❌</div>
              <h3>{t.problem.card2.title}</h3>
              <p>{t.problem.card2.desc}</p>
            </div>
            <div className="feature-card">
              <div className="card-icon yellow">⏱️</div>
              <h3>{t.problem.card3.title}</h3>
              <p>{t.problem.card3.desc}</p>
            </div>
            <div className="feature-card">
              <div className="card-icon blue">📊</div>
              <h3>{t.problem.card4.title}</h3>
              <p>{t.problem.card4.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="section dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag yellow">{t.solution.tag}</span>
            <h2>{t.solution.title}</h2>
            <p>{t.solution.subtitle}</p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>{t.solution.step1.title}</h3>
              <p>{t.solution.step1.desc}</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-card">
              <div className="process-number">02</div>
              <h3>{t.solution.step2.title}</h3>
              <p>{t.solution.step2.desc}</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-card">
              <div className="process-number">03</div>
              <h3>{t.solution.step3.title}</h3>
              <p>{t.solution.step3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.benefits.tag}</span>
            <h2>{t.benefits.title}</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>{t.benefits.item1}</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>{t.benefits.item2}</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>{t.benefits.item3}</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>{t.benefits.item4}</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>{t.benefits.item5}</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>{t.benefits.item6}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="section demo">
        <div className="container">
          <div className="demo-wrapper">
            <div className="demo-content">
              <span className="section-tag yellow">{t.demo.tag}</span>
              <h2>{t.demo.title}</h2>
              <p>{t.demo.subtitle}</p>
              <ul className="demo-features">
                <li>✓ {t.demo.feature1}</li>
                <li>✓ {t.demo.feature2}</li>
                <li>✓ {t.demo.feature3}</li>
              </ul>
            </div>

            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder={t.demo.form.name} required />
              <input type="email" placeholder={t.demo.form.email} required />
              <input type="text" placeholder={t.demo.form.company} required />
              <select required>
                <option value="">{t.demo.form.profile}</option>
                <option>{t.demo.form.option1}</option>
                <option>{t.demo.form.option2}</option>
                <option>{t.demo.form.option3}</option>
                <option>{t.demo.form.option4}</option>
              </select>
              <button type="submit" className="btn-primary full">
                {t.demo.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo_hex.svg" alt="BeeFirst" className="footer-logo-img" />
                <span className="footer-logo-text">Bee<span className="footer-logo-highlight">First</span></span>
              </div>
              <p className="footer-tagline">{t.footer.brand}</p>
            </div>
            
            <div className="footer-links-group">
              <h4>{lang === 'pt' ? 'Navegação' : lang === 'en' ? 'Navigation' : 'Navegación'}</h4>
              <a href="#problema">{t.footer.problem}</a>
              <a href="#solucao">{t.footer.solution}</a>
              <a href="#beneficios">{t.footer.benefits}</a>
              <a href="#demo">{t.footer.demo}</a>
            </div>
            
            <div className="footer-contact">
              <h4>{lang === 'pt' ? 'Contacto' : lang === 'en' ? 'Contact' : 'Contacto'}</h4>
              <p>info@beefirst.com</p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn">🔗</a>
                <a href="#" aria-label="Twitter">🐦</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 BeeFirst • Hive</p>
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
