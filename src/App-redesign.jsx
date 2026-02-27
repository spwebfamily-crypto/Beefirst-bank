import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Clock,
  TrendingDown,
  Shield,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Banknote,
  FileCheck,
  Brain,
  Sparkles,
  Target,
  Globe,
  MessageSquare,
  Layers,
  AlertCircle,
  Check,
  Star,
  Play,
} from "lucide-react";
import "./styles.css";

const CONTENT = {
  pt: {
    nav: {
      hero: "Início",
      problem: "Problema",
      solution: "Solução",
      flow: "Como funciona",
      benefits: "Benefícios",
      contact: "Fale connosco",
    },
    hero: {
      badge: "🚀 Nova Geração de Conciliação",
      title: "Reduza horas de conciliação bancária a segundos.",
      highlight: "Dashboard inteligente com IA",
      subtitle:
        "Automatize o cruzamento entre lançamentos contábeis e extratos bancários. Menos erros, mais escala e mais margem por cliente.",
      chips: [
        { icon: Brain, text: "IA que aprende seus padrões" },
        { icon: Zap, text: " matching em segundos" },
        { icon: Shield, text: "Segurança LGPD" },
        { icon: BarChart3, text: "ROI em 7 dias" },
      ],
      metrics: [
        {
          label: "Tempo poupado",
          value: "-78%",
          desc: "média por empresa",
          icon: Clock,
        },
        {
          label: "Clientes conciliados",
          value: "120+",
          desc: "já em produção",
          icon: Users,
        },
        {
          label: "Primeiro resultado",
          value: "1 semana",
          desc: "para ver ROI",
          icon: TrendingDown,
        },
      ],
      primaryCta: "Agendar demonstração",
      secondaryCta: "Ver o dashboard",
      note: "Demonstração guiada de 15 minutos",
    },
    problem: {
      title: "O Problema",
      subtitle: "A conciliação bancária ainda consome horas da sua equipa?",
      cards: [
        {
          icon: Clock,
          title: "Conferência linha a linha",
          desc: "Horas gastas em planilhas e extratos paralelos.",
          color: "#ff6b6b",
        },
        {
          icon: AlertCircle,
          title: "Risco de erro e retrabalho",
          desc: "Divergências surgem tarde, impactando o cliente.",
          color: "#ffa726",
        },
        {
          icon: TrendingDown,
          title: "Tempo operacional elevado",
          desc: "Equipa presa em tarefas repetitivas de baixo valor.",
          color: "#ef5350",
        },
        {
          icon: Users,
          title: "Escalabilidade limitada",
          desc: "Carteira não cresce sem aumentar headcount.",
          color: "#7e57c2",
        },
      ],
    },
    solution: {
      title: "A Solução",
      heading: "Hive - Conciliação Automática com IA",
      subtitle:
        "Nossa inteligência artificial cruza lançamentos e extratos, destaca exceções e aprende os padrões do seu gabinete.",
      bullets: [
        {
          icon: Sparkles,
          text: "Matching inteligente de valores parciais, datas e referências",
        },
        {
          icon: Layers,
          text: "Integração com principais ERPs e bancos portugueses",
        },
        {
          icon: MessageSquare,
          text: "Portal para clientes acompanharem pendências",
        },
        {
          icon: Shield,
          text: "Alertas, trilhas de auditoria e governança total",
        },
      ],
      stats: [
        { value: "+4.3x", label: "ROI médio" },
        { value: "< 7 dias", label: "para gerar valor" },
        { value: "100%", label: "LGPD compliant" },
      ],
    },
    flow: {
      title: "Como funciona",
      steps: [
        {
          icon: FileCheck,
          title: "1. Importação",
          desc: "Conecte o sistema contábil e extratos bancários automaticamente.",
          gradient: "from-blue-500 to-cyan-400",
        },
        {
          icon: Brain,
          title: "2. Cruzamento Inteligente",
          desc: "IA + regras match transactions e aprendem seus padrões.",
          gradient: "from-purple-500 to-pink-400",
        },
        {
          icon: Target,
          title: "3. Validação e Ação",
          desc: "Dashboard destaca pendências, divergências e próximos passos.",
          gradient: "from-orange-500 to-amber-400",
        },
      ],
    },
    benefits: {
      title: "Benefícios",
      heading: "Resultados para o gabinete e clientes",
      items: [
        "Redução significativa de tempo operacional",
        "Menor dependência de tarefas manuais",
        "Redução de erros e retrabalho",
        "Maior capacidade para assumir novos clientes",
        "Aumento de rentabilidade do serviço",
        "Visibilidade em tempo real para equipa e clientes",
      ],
    },
    testimonials: {
      title: "O que dizem os clientes",
      heading: "Empresas que já pouparam +78% do tempo",
      items: [
        {
          name: "Pedro Santos",
          role: "Diretor de Escritório Contábil",
          company: "Santos & Associados",
          text: "A Hive revolucionou nossa operação. O que levava horas agora é questão de minutos.",
          rating: 5,
          avatar: "PS",
        },
        {
          name: "Maria Ferreira",
          role: "Gestora Financeira",
          company: "Grupo Norte",
          text: "A integração com nosso ERP foi perfeita. O ROI foi muito rápido.",
          rating: 5,
          avatar: "MF",
        },
        {
          name: "João Silva",
          role: "Sócio",
          company: "Silva Contabilidade",
          text: "Finalmente podemos focar no que importa: crescer o negócio, não fazerconciliações manuais.",
          rating: 5,
          avatar: "JS",
        },
      ],
    },
    logos: {
      title: "Empresas que confiam",
      heading: "Used by leading accounting firms",
    },
    cta: {
      title: "Pronto para automatizar?",
      subtitle:
        "Agende uma demonstração gratuita e descubra quanto tempo pode poupar já no próximo mês.",
      primary: "Agendar demonstração",
      secondary: "Falar com especialista",
      note: "Resposta em menos de 1 dia útil",
    },
    footer: {
      brand: "BeeFirst - Hive",
      subtitle: "Conciliação automática para escritórios contábeis",
      rights: "© 2024 BeeFirst. Todos os direitos reservados.",
    },
  },
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// Navbar Component
function Navbar({ lang, setLang, scrolled, menuOpen, setMenuOpen }) {
  const t = CONTENT[lang];

  return (
    <motion.header
      className={`nav ${scrolled ? "nav-solid" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-row">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <img src="/logo_hex.svg" alt="BeeFirst" className="brand-mark" />
          <div>
            <div className="brand-name">
              Bee<span>First</span>
            </div>
            <div className="brand-sub">Hive</div>
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#problema" onClick={() => setMenuOpen(false)}>
            {t.nav.problem}
          </a>
          <a href="#solucao" onClick={() => setMenuOpen(false)}>
            {t.nav.solution}
          </a>
          <a href="#fluxo" onClick={() => setMenuOpen(false)}>
            {t.nav.flow}
          </a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>
            {t.nav.benefits}
          </a>
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
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="btn primary small desktop" href="#demo">
            Agendar Demo
          </a>
          <button
            className="menu-toggle"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </motion.header>
  );
}

// Hero Section
function Hero({ t }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="section hero">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-grid-bg" />
      </div>

      <div className="container hero-grid">
        <motion.div className="hero-content" style={{ y }}>
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles size={16} />
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t.hero.title}
            <span className="gradient-text"> {t.hero.highlight}</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a className="btn primary" href="#demo">
              {t.hero.primaryCta}
              <ArrowRight size={18} />
            </a>
            <a className="btn outline" href="#dashboard">
              {t.hero.secondaryCta}
              <Play size={16} />
            </a>
          </motion.div>

          <motion.p
            className="hero-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t.hero.note}
          </motion.p>

          <motion.div
            className="hero-chips"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {t.hero.chips.map((chip, i) => (
              <motion.div key={i} className="hero-chip" variants={fadeInUp}>
                <chip.icon size={16} />
                <span>{chip.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero-metrics"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {t.hero.metrics.map((metric, i) => (
              <motion.div key={i} className="metric-card" variants={fadeInUp}>
                <metric.icon className="metric-icon" size={20} />
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-desc">{metric.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" style={{ opacity }}>
          <div className="dashboard-mockup" id="dashboard">
            <div className="dashboard-header">
              <div>
                <p className="dash-label">Hive Dashboard</p>
                <p className="dash-title">Conciliação em tempo real</p>
              </div>
              <span className="status success">
                <span className="status-dot" />
                Ao vivo
              </span>
            </div>

            <div className="status-cards">
              <div className="status-card">
                <p className="status-label">Movimentos conciliados</p>
                <p className="status-value">97,6%</p>
                <div className="status-bar">
                  <div className="status-bar-fill" style={{ width: "97.6%" }} />
                </div>
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
              {[
                {
                  company: "Loja Atlas",
                  matched: "98%",
                  pending: 2,
                  value: "€482k",
                },
                {
                  company: "Grupo Norte",
                  matched: "94%",
                  pending: 4,
                  value: "€1.2M",
                },
                {
                  company: "Terra Azul",
                  matched: "91%",
                  pending: 5,
                  value: "€317k",
                },
              ].map((row, i) => (
                <div key={i} className="table-row">
                  <span>{row.company}</span>
                  <span className="match-high">{row.matched}</span>
                  <span className="pending">{row.pending}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="floating-cards">
              <motion.div
                className="floating-card"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={16} className="floating-icon" />
                <div>
                  <p className="floating-title">Alerta inteligente</p>
                  <p className="floating-text">2 divergências hoje</p>
                </div>
              </motion.div>
              <motion.div
                className="floating-card success"
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <TrendingDown size={16} className="floating-icon" />
                <div>
                  <p className="floating-title">ROI previsto</p>
                  <p className="floating-text">+4.3x em 3 meses</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection({ t }) {
  return (
    <section id="problema" className="section problem-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.problem.title}</span>
          <h2>{t.problem.subtitle}</h2>
        </motion.div>

        <motion.div
          className="problem-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {t.problem.cards.map((card, i) => (
            <motion.div
              key={i}
              className="problem-card"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="problem-icon" style={{ background: card.color }}>
                <card.icon size={24} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection({ t }) {
  return (
    <section id="solucao" className="section solution-section">
      <div className="solution-bg" />
      <div className="container">
        <motion.div
          className="section-header centered"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.solution.title}</span>
          <h2>{t.solution.heading}</h2>
          <p className="section-desc">{t.solution.subtitle}</p>
        </motion.div>

        <div className="solution-grid">
          <motion.div
            className="solution-content"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <ul className="solution-list">
              {t.solution.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  className="solution-item"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="solution-icon">
                    <bullet.icon size={20} />
                  </div>
                  <span>{bullet.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="solution-stats"
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="stats-card">
              <div className="stats-header">
                <Banknote size={24} />
                <span>Métricas Hive</span>
              </div>
              <div className="stats-grid">
                {t.solution.stats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="stats-progress">
                <div className="progress-label">
                  <span>Progresso diário</span>
                  <span>78%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Flow Section
function FlowSection({ t }) {
  return (
    <section id="fluxo" className="section flow-section">
      <div className="container">
        <motion.div
          className="section-header centered"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.flow.title}</span>
          <h2>3 passos para automatizar</h2>
        </motion.div>

        <motion.div
          className="flow-timeline"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {t.flow.steps.map((step, i) => (
            <motion.div key={i} className="flow-step" variants={fadeInUp}>
              <div className={`flow-number ${step.gradient}`}>
                <step.icon size={28} />
              </div>
              <div className="flow-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < t.flow.steps.length - 1 && (
                <div className="flow-connector" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Benefits Section
function BenefitsSection({ t }) {
  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.benefits.title}</span>
          <h2>{t.benefits.heading}</h2>
        </motion.div>

        <motion.div
          className="benefits-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {t.benefits.items.map((item, i) => (
            <motion.div
              key={i}
              className="benefit-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="benefit-check">
                <Check size={16} />
              </div>
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection({ t }) {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <motion.div
          className="section-header centered"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="section-tag">{t.testimonials.title}</span>
          <h2>{t.testimonials.heading}</h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#ffd166" color="#ffd166" />
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.avatar}</div>
                <div>
                  <p className="author-name">{item.name}</p>
                  <p className="author-role">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection({ t }) {
  return (
    <section id="demo" className="section cta-section">
      <div className="cta-glow" />
      <div className="container">
        <motion.div
          className="cta-card"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.subtitle}</p>
            <div className="cta-actions">
              <a className="btn primary large" href="#demo-form">
                {t.cta.primary}
                <ArrowRight size={20} />
              </a>
              <a className="btn outline" href="#">
                {t.cta.secondary}
              </a>
            </div>
            <p className="cta-note">{t.cta.note}</p>
          </div>
          <form
            id="demo-form"
            className="demo-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <input type="text" placeholder="Nome completo" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email profissional" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Empresa / Escritório" required />
            </div>
            <button type="submit" className="btn primary full">
              {t.cta.primary}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo_hex.svg" alt="BeeFirst" className="footer-logo" />
            <div>
              <p className="brand-name">{t.footer.brand}</p>
              <p className="brand-sub">{t.footer.subtitle}</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="#problema">Problema</a>
            <a href="#solucao">Solução</a>
            <a href="#fluxo">Como funciona</a>
            <a href="#beneficios">Benefícios</a>
          </div>
          <div className="footer-contact">
            <p>info@beefirst.com</p>
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function RedesignApp() {
  const [lang, setLang] = useState("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <Navbar
        lang={lang}
        setLang={setLang}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero t={t} />
        <ProblemSection t={t} />
        <SolutionSection t={t} />
        <FlowSection t={t} />
        <BenefitsSection t={t} />
        <TestimonialsSection t={t} />
        <CTASection t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
