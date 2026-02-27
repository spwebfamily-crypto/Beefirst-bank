import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles-new.css";

const TRANSLATIONS = {
  pt: {
    nav: { solutions: "Soluções", benefits: "Benefícios", demo: "Demo" },
    hero: {
      badge: "IA para Contabilidade",
      title: "Conciliação Bancária",
      subtitle: "em Segundos",
      description: "Automatize o cruzamento entre contabilidade e extratos bancários. Reduza 60-90% do tempo operacional.",
      cta: "Agendar Demo Gratuita",
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
        { icon: "⏱️", title: "Tempo Operacional", desc: "Horas gastas comparando extratos linha a linha" },
        { icon: "❌", title: "Erros Humanos", desc: "Retrabalho constante impacta o fecho contábil" },
        { icon: "📊", title: "Falta de Visibilidade", desc: "Difícil acompanhar pendências em tempo real" },
        { icon: "📈", title: "Limite de Crescimento", desc: "Impossível escalar sem aumentar equipa" }
      ]
    },
    solution: {
      tag: "A Solução",
      title: "Hive - IA Aplicada à Contabilidade",
      subtitle: "Plataforma completa de conciliação automática",
      steps: [
        { num: "01", title: "Importação", desc: "Integração automática com ERP e bancos" },
        { num: "02", title: "Matching IA", desc: "Cruzamento inteligente de lançamentos" },
        { num: "03", title: "Validação", desc: "Dashboard com status em tempo real" }
      ]
    },
    benefits: {
      tag: "Benefícios",
      title: "Transforme Sua Operação",
      items: [
        { icon: "⚡", title: "Velocidade", desc: "Reduza 60-90% do tempo de conciliação" },
        { icon: "🎯", title: "Precisão", desc: "99% de acurácia com IA treinada" },
        { icon: "📊", title: "Visibilidade", desc: "Dashboard em tempo real" },
        { icon: "💰", title: "ROI Rápido", desc: "Retorno em menos de 3 meses" },
        { icon: "🔄", title: "Automação", desc: "Matching automático de padrões" },
        { icon: "🚀", title: "Escalabilidade", desc: "Cresça sem aumentar equipa" }
      ]
    },
    showcase: {
      tag: "Dashboard",
      title: "Interface Intuitiva e Poderosa",
      subtitle: "Visualize tudo em um só lugar"
    },
    cta: {
      tag: "Próximo Passo",
      title: "Veja o Hive em Ação",
      subtitle: "Agende uma demonstração personalizada de 15 minutos",
      features: ["✓ Demo gratuita", "✓ Análise de impacto", "✓ Piloto sem compromisso"],
      button: "Agendar Demonstração"
    }
  }
};

export default function App() {
  const [lang] = React.useState("pt");
  const [scrollY, setScrollY] = React.useState(0);
  const t = TRANSLATIONS[lang];

  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-new">
      {/* Navigation */}
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
            <div className="nav-links-new">
              <a href="#solution">{t.nav.solutions}</a>
              <a href="#benefits">{t.nav.benefits}</a>
              <a href="#demo" className="btn-primary-new">{t.nav.demo}</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-new">
        <div className="hero-bg">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>
        
        <div className="container-new">
          <motion.div 
            className="hero-content-new"
            style={{ y, opacity }}
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
                {t.hero.cta}
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

      {/* Problem Section */}
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

      {/* Solution Section */}
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

      {/* Dashboard Showcase */}
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
            <img src="/dashboard.svg" alt="Hive Dashboard" />
            <div className="dashboard-glow" />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* CTA Section */}
      <section id="demo" className="section-new cta-section">
        <div className="container-new">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag-new yellow">{t.cta.tag}</span>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.subtitle}</p>
            <div className="cta-features">
              {t.cta.features.map((feature, i) => (
                <span key={i}>{feature}</span>
              ))}
            </div>
            <a href="#" className="btn-primary-large-new">
              {t.cta.button}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-new">
        <div className="container-new">
          <div className="footer-content">
            <div className="footer-brand-new">
              <div className="logo-new">
                <img src="/logo_hex.svg" alt="BeeFirst" />
                <span>Bee<span>First</span></span>
              </div>
              <p>Conciliação automática com IA</p>
            </div>
            <div className="footer-links-new">
              <a href="#solution">Solução</a>
              <a href="#benefits">Benefícios</a>
              <a href="#demo">Demo</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 BeeFirst • Hive - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
