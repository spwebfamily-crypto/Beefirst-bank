import React from "react";
import "./styles.css";

const WORDS = ["Contabilistas", "Escritórios", "Empresas", "Gestores"];

export default function App() {
  const [theme, setTheme] = React.useState("dark");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [currentWord, setCurrentWord] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [theme]);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="bg-gradient" />
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
              <div class="logo-hex"></div>
            </div>

            <div className="nav-links desktop">
              <a href="#problema">Problema</a>
              <a href="#solucao">Solução</a>
              <a href="#beneficios">Benefícios</a>
            </div>

            <div className="nav-actions">
              <button className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <a href="#demo" className="btn-primary desktop">Agendar Demo</a>
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
            <a href="#problema" onClick={() => setMenuOpen(false)}>Problema</a>
            <a href="#solucao" onClick={() => setMenuOpen(false)}>Solução</a>
            <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a>
            <a href="#demo" onClick={() => setMenuOpen(false)}>Agendar Demo</a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot" />
              Conciliação Bancária com IA
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Transforme</span>
              <span className="title-line">Conciliação em</span>
              <span className="title-line gradient-text">Segundos</span>
              <span className="title-line">para</span>
              <span className="word-rotate">{WORDS[currentWord]}</span>
            </h1>

            <p className="hero-subtitle">
              Automatize o cruzamento entre contabilidade e extratos bancários.
              Reduza 60-90% do tempo operacional com inteligência artificial.
            </p>

            <div className="hero-cta">
              <a href="#demo" className="btn-primary large">
                <span>Agendar Demonstração</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#solucao" className="btn-secondary large">Ver Como Funciona</a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">60-90%</div>
                <div className="stat-label">Redução de Tempo</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">1 Semana</div>
                <div className="stat-label">Primeiro Resultado</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">IA</div>
                <div className="stat-label">Matching Inteligente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section id="problema" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">O Problema</span>
            <h2>Conciliação Manual Consome Horas</h2>
            <p>Processos manuais geram custos ocultos e limitam crescimento</p>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <div className="card-icon red">⚠️</div>
              <h3>Conferência Linha a Linha</h3>
              <p>Horas gastas em planilhas comparando extratos manualmente</p>
            </div>
            <div className="feature-card">
              <div className="card-icon orange">❌</div>
              <h3>Alto Risco de Erro</h3>
              <p>Erros humanos impactam fechamento e geram retrabalho</p>
            </div>
            <div className="feature-card">
              <div className="card-icon yellow">⏱️</div>
              <h3>Tempo Operacional Elevado</h3>
              <p>Dificuldade em escalar sem aumentar equipe</p>
            </div>
            <div className="feature-card">
              <div className="card-icon blue">📊</div>
              <h3>Pouca Visibilidade</h3>
              <p>Difícil acompanhar status e pendências em tempo real</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="section dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag yellow">A Solução</span>
            <h2>Hive - Conciliação Automática</h2>
            <p>Inteligência artificial aplicada à contabilidade</p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Importação</h3>
              <p>Integração automática com sistema contábil e extratos bancários</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-card">
              <div className="process-number">02</div>
              <h3>Cruzamento IA</h3>
              <p>Matching inteligente baseado em padrões e regras</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Validação</h3>
              <p>Dashboard com conciliado, pendente e divergente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Benefícios</span>
            <h2>Por Que Escolher a Hive?</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>Redução significativa de tempo operacional</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>Menor dependência de tarefas manuais</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>Redução de erros e retrabalho</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>Maior capacidade para novos clientes</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>Aumento de rentabilidade</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <span>Dashboard em tempo real</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="section demo">
        <div className="container">
          <div className="demo-wrapper">
            <div className="demo-content">
              <span className="section-tag yellow">Próximo Passo</span>
              <h2>Agende uma Demonstração</h2>
              <p>Descubra quanto tempo pode poupar já no próximo mês</p>
              <ul className="demo-features">
                <li>✓ Demo gratuita de 15 minutos</li>
                <li>✓ Visualização de impacto operacional</li>
                <li>✓ Piloto rápido com baixo risco</li>
              </ul>
            </div>

            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nome completo" required />
              <input type="email" placeholder="Email profissional" required />
              <input type="text" placeholder="Empresa" required />
              <select required>
                <option value="">Selecione o perfil</option>
                <option>Escritório contábil</option>
                <option>BPO financeiro</option>
                <option>Financeiro interno</option>
                <option>Outro</option>
              </select>
              <button type="submit" className="btn-primary full">
                Agendar Demonstração Gratuita
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/logototal.svg" alt="BeeFirst Hive" className="logo-img-small" />
              <div>
                <strong>BeeFirst Hive</strong>
                <p>Conciliação automática para contabilidade</p>
              </div>
            </div>
            <div className="footer-links">
              <a href="#problema">Problema</a>
              <a href="#solucao">Solução</a>
              <a href="#beneficios">Benefícios</a>
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
