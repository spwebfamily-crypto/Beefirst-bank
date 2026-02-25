import React from "react";
import dashboardShot from "./assets/dashboard.svg";
import brandLogoFull from "./assets/branding/logo-full.svg";
import brandLogoMark from "./assets/branding/logo-mark.svg";
import "./styles.css";
import { UI_COPY } from "./uiCopy";
import { Canvas } from "@react-three/fiber";
import { ShaderPlane } from "./components/ui/background-paper-shaders";
import { WordRotate } from "./components/ui/word-rotate";
import { TypingAnimation } from "./components/ui/typing-animation";

const NAV_ITEMS = [
  { id: "problema", key: "problema" },
  { id: "solucao", key: "solucao" },
  { id: "como", key: "como" },
  { id: "beneficios", key: "beneficios" },
  { id: "precos", label: "Porque Hive" },
  { id: "demo", label: "Demo" },
];

const LANG_OPTIONS = ["pt", "en", "es"];
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
const FOCUSABLE_SELECTOR = [
  'a[href]:not([tabindex="-1"])',
  'button:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])',
  'select:not([disabled]):not([tabindex="-1"])',
  'textarea:not([disabled]):not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");
const LOCAL_LEADS_STORAGE_KEY = "hive-landing-leads";
const LOCAL_LEADS_STORAGE_LIMIT = 50;
const HYBRID_HERO_ROTATE = {
  pt: ["CONCILIAÇÃO", "FECHAMENTO", "ESCALA", "MARGEM"],
  en: ["RECONCILIATION", "CLOSING", "SCALE", "MARGIN"],
  es: ["CONCILIACIÓN", "CIERRE", "ESCALA", "MARGEN"],
};
const HYBRID_HERO_COMMAND = {
  pt: "matching + extratos | fila de exceções | rastreabilidade | piloto guiado",
  en: "matching + statements | exception queue | traceability | guided pilot",
  es: "matching + extractos | cola de excepciones | trazabilidad | piloto guiado",
};
const HYBRID_STACK_LOGOS = [
  { src: "/logos/openai.svg", label: "OpenAI" },
  { src: "/logos/gemini.svg", label: "Gemini" },
  { src: "/logos/react.svg", label: "React" },
  { src: "/logos/postgres.svg", label: "Postgres" },
  { src: "/logos/aws.svg", label: "AWS" },
  { src: "/logos/meta.svg", label: "Meta" },
];

function normalizeLeadPayload(entries) {
  return {
    name: String(entries.name ?? "").trim(),
    email: String(entries.email ?? "").trim(),
    company: String(entries.company ?? "").trim(),
    profile: String(entries.profile ?? "").trim(),
    volume: String(entries.volume ?? "").trim(),
    goal: String(entries.goal ?? "").trim(),
    website: String(entries.website ?? "").trim(),
  };
}

function saveLeadLocally(payload) {
  if (typeof window === "undefined") return null;

  const record = {
    id: window.crypto?.randomUUID?.() ?? `lead-${Date.now()}`,
    source: "hive-landing",
    createdAt: new Date().toISOString(),
    ...payload,
  };

  try {
    const raw = window.localStorage.getItem(LOCAL_LEADS_STORAGE_KEY);
    const current = raw ? JSON.parse(raw) : [];
    const next = Array.isArray(current) ? current : [];
    next.unshift(record);
    window.localStorage.setItem(
      LOCAL_LEADS_STORAGE_KEY,
      JSON.stringify(next.slice(0, LOCAL_LEADS_STORAGE_LIMIT)),
    );
  } catch {
    // Keep the form usable if localStorage is blocked.
  }

  return record;
}

const focusPills = [
  "Conciliação bancária com IA aplicada à contabilidade",
  "Implementação guiada",
  "Piloto rápido (sem travar a operação)",
];

const painComparison = [
  {
    before: "Conferência linha a linha em planilhas e extratos",
    after: "Matching automático com fila de exceções priorizada",
  },
  {
    before: "Horas gastas em retrabalho e validações repetitivas",
    after: "Tempo operacional reduzido e revisão focada no que importa",
  },
  {
    before: "Dificuldade para escalar clientes sem contratar mais equipa",
    after: "Mais capacidade com a mesma equipa e processo padronizado",
  },
  {
    before: "Pouca visibilidade do status por cliente/período",
    after: "Dashboard com conciliado, pendente e divergente em tempo real",
  },
];

const problemItems = [
  "Conferência linha a linha",
  "Alto risco de erro",
  "Tempo operacional elevado",
  "Dificuldade em escalar carteira de clientes",
];

const solutionInputs = [
  "Lançamentos contabilísticos",
  "Movimentos de extratos bancários",
];

const solutionOutputs = [
  "Valores que coincidem",
  "Movimentos pendentes",
  "Divergências",
  "Inconsistências",
];

const processSteps = [
  {
    n: "01",
    title: "Importação",
    text: "Integração com o sistema contabilístico e extratos bancários.",
  },
  {
    n: "02",
    title: "Cruzamento Inteligente",
    text: "Matching automático com base em padrões e regras.",
  },
  {
    n: "03",
    title: "Validação e Ação",
    text: "Visualização clara do que está conciliado e do que necessita de intervenção.",
  },
];

const benefitsList = [
  "Redução significativa de tempo operacional",
  "Menor dependência de tarefas manuais",
  "Redução de erros",
  "Maior capacidade para assumir novos clientes",
  "Aumento de rentabilidade",
];

const hiveExpansion = [
  "Gestão documental",
  "Relatórios inteligentes",
  "Automação de processos",
  "Comunicação com clientes",
];

const benefitTiles = [
  {
    title: "Matching inteligente com contexto",
    text: "Combina valor, data, histórico e regras para elevar acerto e reduzir revisão manual.",
    className: "span-2 accent",
    kicker: "Motor de conciliação",
  },
  {
    title: "Fila de divergências priorizada",
    text: "Veja primeiro o que bloqueia fechamento, com sinais claros de inconsistência.",
    className: "tall",
    kicker: "Produtividade",
  },
  {
    title: "Dashboard por cliente e período",
    text: "Acompanhe status, volumes e pendências em uma visualização única.",
    className: "",
    kicker: "Visibilidade",
  },
  {
    title: "Regras reutilizáveis",
    text: "Transforme decisões recorrentes em automações para reduzir retrabalho futuro.",
    className: "dark",
    kicker: "Escala",
  },
  {
    title: "Rastreabilidade completa",
    text: "Cada ação fica registrada para auditoria, revisão e treinamento da equipa.",
    className: "",
    kicker: "Governança",
  },
  {
    title: "Operação pronta para crescer",
    text: "Mais clientes sem aumentar a complexidade operacional na mesma proporção.",
    className: "span-2 soft",
    kicker: "Rentabilidade",
  },
];

const proofCards = [
  {
    label: "Ganho de tempo (meta de projeto)",
    value: "60–90%",
    text: "Redução de esforço na conciliação manual quando o fluxo está configurado e a equipa adota regras de automação.",
  },
  {
    label: "Primeiro valor percebido",
    value: "1ª semana",
    text: "Normalmente a equipa já visualiza pendências, divergências e oportunidades de padronização logo nas primeiras cargas.",
  },
  {
    label: "Modelo de adoção",
    value: "Piloto guiado",
    text: "Implementação por amostra de clientes para provar ROI antes de ampliar para toda a carteira.",
  },
];

const planCards = [
  {
    badge: "Entrada",
    name: "Pilot",
    price: "Sob diagnóstico",
    subtitle: "Validar rápido o ROI em parte da carteira",
    features: [
      "Setup guiado do fluxo inicial",
      "Dashboard de conciliação por período",
      "Matching + fila de exceções",
      "Reunião de revisão e plano de expansão",
    ],
    cta: "Quero validar em piloto",
    tone: "ghost",
  },
  {
    badge: "Mais escolhido",
    name: "Growth",
    price: "Proposta mensal",
    subtitle: "Escalar com automação e padronização da equipa",
    features: [
      "Tudo do Pilot",
      "Regras de automação reutilizáveis",
      "Priorização de divergências",
      "Suporte prioritário para operação",
      "Onboarding da equipa",
    ],
    cta: "Agendar diagnóstico comercial",
    tone: "primary",
    featured: true,
  },
  {
    badge: "Escala",
    name: "Enterprise",
    price: "Projeto + recorrência",
    subtitle: "Integrações, governança e rollout em grande volume",
    features: [
      "Integrações dedicadas",
      "Permissões e governança avançadas",
      "SLA e acompanhamento executivo",
      "Plano de rollout por unidades / equipas",
    ],
    cta: "Falar com especialista",
    tone: "ghost",
  },
];

const faqItems = [
  {
    q: "Preciso de trocar o meu sistema contabilístico?",
    a: "Não necessariamente. A Hive pode operar por integração ou importação de dados, dependendo da configuração atual e do nível de automação pretendido.",
  },
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "Num piloto bem delimitado, a equipa costuma perceber ganho de visibilidade e redução de retrabalho logo nas primeiras cargas. O ROI completo depende do volume e da padronização das regras.",
  },
  {
    q: "A solução é segura para dados financeiros?",
    a: "Sim. A operação pode ser estruturada com controle de acesso, trilha de ações e processos de compliance definidos no onboarding.",
  },
  {
    q: "A Hive serve só para conciliação?",
    a: "Não. A conciliação é uma frente de alto impacto inicial. A plataforma BeeFirst Hive pode ser expandida para outros fluxos operacionais do escritório.",
  },
];

const decisionSignals = [
  {
    title: "Quando a compra tende a avançar",
    points: [
      "Fechamento mensal atrasa por excesso de conferência manual",
      "Equipa sénior gasta tempo excessivo em validação repetitiva",
      "Crescimento da carteira exige contratação constante",
    ],
    tone: "good",
  },
  {
    title: "Objeções que travam (e como responder)",
    points: [
      "\"Preciso trocar tudo\" → não: dá para começar por piloto/importação",
      "\"A minha equipa não vai usar\" → o fluxo prioriza exceções e mantém controlo",
      "\"Não sei se compensa\" → diagnóstico com simulação de ROI",
    ],
    tone: "neutral",
  },
  {
    title: "Mensagem que mais converte",
    points: [
      "Vender redução de custo operacional + ganho de margem",
      "Entrar com piloto de baixo risco e expansão por dados",
      "Prometer visibilidade e priorização, não só automação",
    ],
    tone: "highlight",
  },
];

const testimonials = [
  {
    quote:
      "O que fez sentido para nós não foi só a automação, foi finalmente conseguir priorizar exceções e tirar a equipa do trabalho repetitivo.",
    role: "Gestão operacional",
    company: "Escritório contabilístico (cenário típico)",
    accent: "mint",
  },
  {
    quote:
      "A conversa mudou quando vimos o impacto em horas e margem. O piloto foi decisivo porque reduziu risco de decisão.",
    role: "Sócio / decisor",
    company: "BPO financeiro (cenário típico)",
    accent: "sun",
  },
  {
    quote:
      "Ter dashboard por cliente e período ajudou a padronizar o processo e acelerar revisão sem perder controlo.",
    role: "Coordenação de equipa",
    company: "Operação contabilística (cenário típico)",
    accent: "ink",
  },
];

const fitBadges = [
  "Escritórios contábeis com volume mensal recorrente",
  "BPO financeiro com equipa operacional sobrecarregada",
  "Operações que querem crescer sem aumentar headcount",
  "Gestão que precisa mostrar ROI da automação internamente",
];

export default function App() {
  return <Landing />;
}

function Landing() {
  const [leadSent, setLeadSent] = React.useState(false);
  const [lang, setLang] = React.useState("pt");
  const [theme, setTheme] = React.useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(SECTION_IDS[0]);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [submitState, setSubmitState] = React.useState("idle");
  const [submitError, setSubmitError] = React.useState("");
  const [submitSuccessMessage, setSubmitSuccessMessage] = React.useState("");
  const drawerRef = React.useRef(null);
  const menuToggleRef = React.useRef(null);
  const previousFocusRef = React.useRef(null);
  const restoreFocusOnCloseRef = React.useRef(true);

  const copy = UI_COPY[lang] ?? UI_COPY.pt;
  const heroRotateWords = HYBRID_HERO_ROTATE[lang] ?? HYBRID_HERO_ROTATE.pt;
  const heroCommandLine = HYBRID_HERO_COMMAND[lang] ?? HYBRID_HERO_COMMAND.pt;
  const a11yCopy = React.useMemo(() => {
    if (lang === "en") {
      return {
        skipToContent: "Skip to main content",
        mainNavigation: "Main navigation",
        quickNavigation: "Quick navigation",
        sectionOverview: "Section overview",
        drawerNavigation: "Mobile menu navigation",
        closingHighlights: "What you get in the demo",
        closeMenuTitle: "Close menu",
      };
    }
    if (lang === "es") {
      return {
        skipToContent: "Saltar al contenido principal",
        mainNavigation: "Navegación principal",
        quickNavigation: "Navegación rápida",
        sectionOverview: "Resumen de secciones",
        drawerNavigation: "Navegación del menú móvil",
        closingHighlights: "Qué recibes en la demo",
        closeMenuTitle: "Cerrar menú",
      };
    }
    return {
      skipToContent: "Saltar para o conteúdo principal",
      mainNavigation: "Navegação principal",
      quickNavigation: "Navegação rápida",
      sectionOverview: "Resumo das secções",
      drawerNavigation: "Navegação do menu mobile",
      closingHighlights: "O que recebe na demonstração",
      closeMenuTitle: "Fechar menu",
    };
  }, [lang]);
  const integrationConfig = React.useMemo(
    () => ({
      crmWebhookUrl: import.meta.env.VITE_CRM_WEBHOOK_URL?.trim() ?? "",
      calendlyUrl: import.meta.env.VITE_CALENDLY_URL?.trim() ?? "",
      contactEmail: import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? "",
      whatsappNumber:
        import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "",
    }),
    [],
  );
  const hasAnyIntegration =
    !!integrationConfig.crmWebhookUrl ||
    !!integrationConfig.calendlyUrl ||
    !!integrationConfig.contactEmail ||
    !!integrationConfig.whatsappNumber;

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTheme = window.localStorage.getItem("hive-theme");
    const savedLang = window.localStorage.getItem("hive-lang");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")
      ?.matches;

    if (savedLang && UI_COPY[savedLang]) {
      setLang(savedLang);
    }
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("hive-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenuOpen);
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 940) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    const onHashChange = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang =
      lang === "pt" ? "pt-PT" : lang === "en" ? "en" : "es";
    window.localStorage.setItem("hive-lang", lang);
  }, [lang]);

  React.useEffect(() => {
    if (!mobileMenuOpen) {
      const shouldRestore =
        restoreFocusOnCloseRef.current &&
        previousFocusRef.current instanceof HTMLElement &&
        document.activeElement !== previousFocusRef.current;
      if (shouldRestore) {
        previousFocusRef.current.focus({ preventScroll: true });
      }
      restoreFocusOnCloseRef.current = true;
      return;
    }

    const drawer = drawerRef.current;
    const target = drawer?.querySelector(FOCUSABLE_SELECTOR);
    if (target instanceof HTMLElement) {
      target.focus({ preventScroll: true });
    }
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key !== "Tab") return;
      const drawer = drawerRef.current;
      if (!(drawer instanceof HTMLElement)) return;

      const focusable = [...drawer.querySelectorAll(FOCUSABLE_SELECTOR)].filter(
        (node) =>
          node instanceof HTMLElement &&
          !node.hasAttribute("disabled") &&
          node.getAttribute("aria-hidden") !== "true" &&
          (node.offsetParent !== null || node === document.activeElement),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop;
        const maxScroll = doc.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
        setShowBackToTop(scrollTop > 520);

        const marker = scrollTop + window.innerHeight * 0.34;
        let nextActive = SECTION_IDS[0];
        for (const sectionId of SECTION_IDS) {
          const sectionEl = document.getElementById(sectionId);
          if (sectionEl && sectionEl.offsetTop <= marker) {
            nextActive = sectionId;
          }
        }
        setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
        rafId = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setSubmitState("submitting");
    setSubmitError("");
    setSubmitSuccessMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = normalizeLeadPayload(Object.fromEntries(formData.entries()));
    if (payload.website) {
      setLeadSent(true);
      setSubmitState("success");
      setSubmitSuccessMessage("Pedido recebido.");
      form.reset();
      setMobileMenuOpen(false);
      return;
    }

    if (!payload.name || !payload.email || !payload.company) {
      setSubmitState("error");
      setSubmitError("Preencha nome, email e empresa para continuar.");
      return;
    }

    const summaryMessage = [
      "Novo pedido de demonstração - Hive",
      `Nome: ${payload.name ?? ""}`,
      `Email: ${payload.email ?? ""}`,
      `Empresa: ${payload.company ?? ""}`,
      `Perfil: ${payload.profile ?? ""}`,
      `Volume: ${payload.volume ?? ""}`,
      `Objetivo: ${payload.goal ?? ""}`,
      `Origem: landing-page`,
    ].join("\n");
    const crmPayload = {
      source: "hive-landing",
      createdAt: new Date().toISOString(),
      ...payload,
    };
    delete crmPayload.website;

    let externalTargetUrl = "";
    if (integrationConfig.calendlyUrl) {
      try {
        const calendly = new URL(integrationConfig.calendlyUrl);
        calendly.searchParams.set("name", payload.name);
        calendly.searchParams.set("email", payload.email);
        calendly.searchParams.set("a1", payload.company);
        calendly.searchParams.set("a2", payload.profile);
        calendly.searchParams.set("a3", payload.volume);
        calendly.searchParams.set("a4", payload.goal);
        externalTargetUrl = calendly.toString();
      } catch {
        setSubmitState("error");
        setSubmitError("Link do Calendly inválido no `.env`.");
        return;
      }
    } else if (integrationConfig.whatsappNumber) {
      externalTargetUrl = `https://wa.me/${
        integrationConfig.whatsappNumber
      }?text=${encodeURIComponent(summaryMessage)}`;
    }

    const popupWindow = externalTargetUrl
      ? window.open("", "_blank", "noopener,noreferrer")
      : null;

    try {
      let delivered = false;
      let successMessage = copy.closing.noteSuccess;

      if (integrationConfig.crmWebhookUrl) {
        const response = await fetch(integrationConfig.crmWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(crmPayload),
        });

        if (!response.ok) {
          throw new Error("Falha ao enviar lead para o CRM.");
        }
        delivered = true;
        successMessage = "Lead enviado ao CRM com sucesso.";
      }

      if (externalTargetUrl) {
        if (popupWindow && !popupWindow.closed) {
          popupWindow.location.href = externalTargetUrl;
        } else {
          window.open(externalTargetUrl, "_blank", "noopener,noreferrer");
        }
        delivered = true;
        successMessage = integrationConfig.calendlyUrl
          ? "Lead enviado. Abrimos o agendamento no Calendly."
          : "Lead enviado. Abrimos o WhatsApp para concluir o contacto.";
      }

      if (!externalTargetUrl && integrationConfig.contactEmail) {
        const mailtoUrl = `mailto:${encodeURIComponent(
          integrationConfig.contactEmail,
        )}?subject=${encodeURIComponent(
          "Novo pedido de demonstração - Hive",
        )}&body=${encodeURIComponent(summaryMessage)}`;
        window.location.href = mailtoUrl;
        delivered = true;
        successMessage =
          "Lead preparado por e-mail. O cliente de e-mail foi aberto.";
      }

      if (!delivered) {
        saveLeadLocally(payload);
        try {
          await window.navigator.clipboard?.writeText?.(summaryMessage);
          successMessage =
            "Lead salvo localmente no navegador e resumo copiado para a área de transferência.";
        } catch {
          successMessage =
            "Lead salvo localmente no navegador. Configure CRM/Calendly/WhatsApp/e-mail para envio externo.";
        }
      }

      setLeadSent(true);
      setSubmitState("success");
      setSubmitSuccessMessage(successMessage);
      form.reset();
    } catch (error) {
      if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
      }
      setSubmitState("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar o pedido agora.",
      );
    }
    setMobileMenuOpen(false);
  };

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleChangeLang = (nextLang) => {
    setLang(nextLang);
    setMobileMenuOpen(false);
  };

  const openMobileMenu = (event) => {
    previousFocusRef.current = event.currentTarget;
    restoreFocusOnCloseRef.current = true;
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    restoreFocusOnCloseRef.current = true;
    setMobileMenuOpen(false);
  };

  const closeMobileMenuFromNavigation = () => {
    restoreFocusOnCloseRef.current = false;
    setMobileMenuOpen(false);
  };

  const handleBackToTop = () => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="page-shell layout-vendus-hybrid">
      <a className="skip-link" href="#main-content">
        {a11yCopy.skipToContent}
      </a>
      <div id="top" className="top-anchor" aria-hidden="true" />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="ambient ambient-c" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div
        className="scroll-progress"
        role="progressbar"
        aria-label={copy.ui.scrollProgress}
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="BeeFirst Hive início">
            <span className="brand-mark" aria-hidden="true">
              <img src={brandLogoMark} alt="" />
            </span>
            <span className="brand-copy">
              <strong>BeeFirst</strong>
              <small>Hive</small>
            </span>
          </a>

          <nav className="menu" aria-label={a11yCopy.mainNavigation}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label ?? copy.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="header-tools desktop-only">
              <LanguageSwitcher
                current={lang}
                onChange={handleChangeLang}
                ariaLabel={copy.ui.langSwitcherAria}
              />
              <ThemeToggle
                theme={theme}
                onToggle={toggleTheme}
                ariaLabel={copy.ui.themeToggleAria}
                lightLabel={copy.theme.light}
                darkLabel={copy.theme.dark}
              />
            </div>

            <a className="btn primary nav-cta" href="#demo">
              {copy.buttons.headerCta}
            </a>

            <button
              ref={menuToggleRef}
              className="icon-btn menu-toggle mobile-only"
              type="button"
              aria-label={copy.ui.mobileMenuAria}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={openMobileMenu}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-shell ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          className="mobile-drawer-backdrop"
          aria-label={copy.ui.closeMenuAria}
          onClick={closeMobileMenu}
        />
        <aside
          id="mobile-menu"
          ref={drawerRef}
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          tabIndex={-1}
        >
          <div className="mobile-drawer-head">
            <div>
              <small>{copy.menuTitle}</small>
              <strong id="mobile-menu-title">{copy.drawer.title}</strong>
              <p>{copy.drawer.subtitle}</p>
            </div>
            <button
              className="icon-btn"
              type="button"
              aria-label={copy.ui.closeMenuAria}
              title={a11yCopy.closeMenuTitle}
              onClick={closeMobileMenu}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mobile-drawer-tools">
            <LanguageSwitcher
              current={lang}
              onChange={handleChangeLang}
              ariaLabel={copy.ui.langSwitcherAria}
            />
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
              ariaLabel={copy.ui.themeToggleAria}
              lightLabel={copy.theme.light}
              darkLabel={copy.theme.dark}
              compact
            />
          </div>

          <nav className="mobile-drawer-nav" aria-label={a11yCopy.drawerNavigation}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={closeMobileMenuFromNavigation}
              >
                <span>{item.label ?? copy.nav[item.key]}</span>
                <ArrowRightIcon />
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-cta">
            <a
              className="btn primary wide"
              href="#demo"
              onClick={closeMobileMenuFromNavigation}
            >
              {copy.drawer.primary}
            </a>
            <a
              className="btn ghost wide"
              href="#precos"
              onClick={closeMobileMenuFromNavigation}
            >
              {copy.drawer.secondary}
            </a>
          </div>
        </aside>
      </div>

      <div className="mobile-quick-rail-wrap mobile-only">
        <div className="container">
          <nav className="mobile-quick-rail" aria-label={a11yCopy.quickNavigation}>
            <a
              href="#solucao"
              className={activeSection === "solucao" ? "active" : ""}
              aria-current={activeSection === "solucao" ? "page" : undefined}
            >
              {copy.nav.solucao}
            </a>
            <a
              href="#beneficios"
              className={activeSection === "beneficios" ? "active" : ""}
              aria-current={activeSection === "beneficios" ? "page" : undefined}
            >
              {copy.nav.beneficios}
            </a>
            <a
              href="#precos"
              className={activeSection === "precos" ? "active" : ""}
              aria-current={activeSection === "precos" ? "page" : undefined}
            >
              {copy.nav.precos}
            </a>
            <a
              href="#demo"
              className={activeSection === "demo" ? "active" : ""}
              aria-current={activeSection === "demo" ? "page" : undefined}
            >
              {copy.buttons.headerCta}
            </a>
          </nav>
        </div>
      </div>

      <main id="main-content" tabIndex={-1} aria-labelledby="hero-title">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-tech-bg" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.65} />
              <ShaderPlane color1="#0b1320" color2="#1e293b" />
            </Canvas>
            <div className="hero-tech-overlay" />
          </div>
          <div className="hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow">
                <span className="pulse-dot" aria-hidden="true" />
                <span>HIVE • AI Ops Command Layer para Contabilistas</span>
              </div>

              <h1 id="hero-title">
                {copy.hero.titleBefore} <span>{copy.hero.titleAccent}</span>{" "}
                {copy.hero.titleAfter}
              </h1>

              <div className="hero-rotate-shell" aria-hidden="true">
                <span className="hero-rotate-label">AI OPS</span>
                <WordRotate
                  words={heroRotateWords}
                  duration={2100}
                  className="hero-rotate-word"
                />
              </div>

              <p className="hero-sub">{copy.hero.sub}</p>

              <div className="hero-command-line" aria-hidden="true">
                <span className="hero-command-label">$ hive.command</span>
                <TypingAnimation
                  text={heroCommandLine}
                  duration={22}
                  className="hero-command-typing !text-left !text-sm !leading-relaxed !font-normal !min-h-0"
                />
              </div>

              <div className="hero-bullets">
                {[
                  "Identificação automática de movimentos correspondentes",
                  "Sinalização imediata de divergências",
                  "Redução de erros manuais",
                  "Mais tempo para tarefas estratégicas",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </div>

              <div className="cta-stack">
                <a className="btn primary large" href="#demo">
                  Agendar demonstração gratuita
                </a>
                <a className="btn ghost large" href="#solucao">
                  Ver como funciona
                </a>
              </div>

              <div className="micro-note">{copy.hero.micro}</div>

              <div className="hero-stack-signals" aria-label="Tecnologias e ecossistema">
                {HYBRID_STACK_LOGOS.map((item) => (
                  <span className="hero-stack-chip" key={item.label}>
                    <img src={item.src} alt="" aria-hidden="true" loading="lazy" />
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>

              <div className="hero-stats">
                {copy.hero.metrics.map((metric) => (
                  <MetricCard
                    key={`${metric.value}-${metric.label}`}
                    value={metric.value}
                    label={metric.label}
                  />
                ))}
              </div>
            </div>

            <div className="hero-stage reveal-up delay-1">
              <div className="panel top-panel">
                <div className="panel-head">
                  <div className="dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="panel-title">{copy.hero.panelTitle}</span>
                  <span className="panel-badge">{copy.hero.today}</span>
                </div>

                <div className="panel-screen">
                  <img
                    src={dashboardShot}
                    alt="Preview do dashboard Hive"
                    decoding="async"
                    fetchPriority="high"
                  />

                  <div className="float-card float-a">
                    <div className="float-label">{copy.hero.conciliated}</div>
                    <div className="float-value">82%</div>
                    <div className="float-meta positive">{copy.hero.vsManual}</div>
                  </div>

                  <div className="float-card float-b">
                    <div className="float-label">{copy.hero.pendingCritical}</div>
                    <div className="float-value">13</div>
                    <div className="float-meta">{copy.hero.prioritized}</div>
                  </div>
                </div>
              </div>

              <div className="hero-bottom-grid">
                <div className="offer-card">
                  <div className="offer-top">
                    <span className="offer-tag">Hive</span>
                    <span className="offer-badge">Conciliação Automática</span>
                  </div>
                  <h3>
                    Cruzamento inteligente entre contabilidade e extratos{" "}
                    <span>bancários.</span>
                  </h3>
                  <p>
                    Visualize rapidamente o que está conciliado, pendente e
                    divergente num dashboard claro para a sua equipa.
                  </p>
                  <a className="btn dark" href="#solucao">
                    Ver a solução
                  </a>
                </div>

                <div className="proof-stack">
                  <div className="proof-chip">
                    <span className="proof-chip-title">Como funciona</span>
                    <p>Importação • Cruzamento inteligente • Validação e ação</p>
                  </div>
                  <div className="proof-chip">
                    <span className="proof-chip-title">Demonstração</span>
                    <p>Gratuita, rápida e focada no fluxo real do gabinete.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="container trust-band reveal-up delay-2"
          aria-labelledby="trust-title"
        >
          <div className="trust-head">
            <small>HIVE | Conciliação Automática para Contabilistas</small>
            <h2 id="trust-title">
              Automatize a conciliação bancária com controlo e velocidade.
            </h2>
          </div>
          <div className="trust-grid">
            <div className="trust-ticker">
              {focusPills.map((pill) => (
                <span className="ticker-pill" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
            <div className="trust-metrics">
              <StatPill label="Fluxo" value="Importação" />
              <StatPill label="IA" value="Cruzamento Inteligente" />
              <StatPill label="Resultado" value="Validação e Ação" />
            </div>
          </div>

          <div className="trust-stack-strip" aria-label="Stack e integrações suportadas">
            {HYBRID_STACK_LOGOS.map((item) => (
              <span className="trust-stack-chip" key={`trust-${item.label}`}>
                <img src={item.src} alt="" aria-hidden="true" loading="lazy" />
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </section>

        <section className="container section" id="problema" aria-labelledby="problema-title">
          <div className="section-surface problem-surface">
            <SectionHeader
              eyebrow="02 | O PROBLEMA"
              titleId="problema-title"
              title="A conciliação bancária ainda consome horas da sua equipa?"
              lead="Processos manuais implicam:"
              side={
                <div className="side-tag warning">
                  Cada hora gasta na conciliação é margem perdida.
                </div>
              }
            />

            <div className="problem-layout">
              <div className="problem-card">
                <ul className="problem-list">
                  {problemItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="problem-card problem-visual">
                <div className="problem-visual-head">
                  <span className="mini-badge">Custos ocultos</span>
                  <strong>
                    Tempo operacional elevado e dificuldade em escalar
                  </strong>
                </div>
                <div className="problem-bars">
                  {painComparison.map((row) => (
                    <div key={row.before} className="problem-bar-row">
                      <span>{row.before}</span>
                      <div className="problem-bar-track">
                        <div className="problem-bar-fill" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container section" id="solucao" aria-labelledby="solucao-title">
          <div className="section-surface solution-surface">
            <SectionHeader
              eyebrow="03 | A SOLUÇÃO"
              titleId="solucao-title"
              title="Apresentamos a Hive - Conciliação Automática"
              lead="A Hive utiliza inteligência artificial para cruzar automaticamente:"
            />

            <div className="solution-grid">
              <div className="solution-panel">
                <div className="solution-subtitle">Entradas</div>
                <div className="solution-stack">
                  {solutionInputs.map((item) => (
                    <div className="solution-chip" key={item}>
                      <span className="solution-chip-icon" aria-hidden="true">
                        ↳
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="solution-subtitle">Em segundos, identifica:</div>
                <div className="solution-checks">
                  {solutionOutputs.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </div>

                <div className="solution-note">
                  Sem necessidade de validação manual exaustiva.
                </div>
              </div>

              <div className="solution-panel solution-preview">
                <div className="panel-head compact">
                  <div className="dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="panel-title">Hive Dashboard</span>
                  <span className="panel-badge">Automático</span>
                </div>
                <div className="panel-screen">
                  <img
                    src={dashboardShot}
                    alt="Dashboard Hive de conciliação automática"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="solution-preview-meta">
                  <div className="result-tile highlight">
                    <small>Matching automático</small>
                    <strong>Ativo</strong>
                  </div>
                  <div className="result-tile">
                    <small>Divergências</small>
                    <strong>Sinalizadas</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container section" id="como" aria-labelledby="como-title">
          <div className="section-surface flow-surface">
            <SectionHeader
              eyebrow="04 | COMO FUNCIONA"
              titleId="como-title"
              title="Simples. Rápido. Seguro."
              lead="Fluxo de conciliação em 3 etapas"
            />

            <div className="steps-grid steps-grid-3">
              {processSteps.map((step) => (
                <StepCard key={step.n} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="container section"
          id="beneficios"
          aria-labelledby="beneficios-title"
        >
          <div className="section-surface benefits-surface">
            <SectionHeader
              eyebrow="05 | BENEFÍCIOS PARA O SEU GABINETE"
              titleId="beneficios-title"
              title="Automatize uma das tarefas mais repetitivas da contabilidade."
              lead="Benefícios para o seu gabinete:"
            />

            <div className="benefits-exact-grid">
              {benefitsList.map((item) => (
                <article key={item} className="benefit-exact-card">
                  <div className="benefit-exact-icon" aria-hidden="true">
                    ✓
                  </div>
                  <strong>{item}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container section" id="precos" aria-labelledby="precos-title">
          <div className="section-surface why-surface">
            <SectionHeader
              eyebrow="06 | PORQUE HIVE"
              titleId="precos-title"
              title="A Hive é uma plataforma de agentes inteligentes desenvolvida pela Beefirst"
              lead="para automatizar operações empresariais. A conciliação é apenas o primeiro passo."
            />

            <div className="why-hive-layout">
              <div className="why-hive-card">
                <h3>A plataforma permite expandir para:</h3>
                <div className="why-hive-grid">
                  {hiveExpansion.map((item) => (
                    <div key={item} className="why-hive-item">
                      <span className="why-hive-dot" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="why-hive-footer">Cresce com o seu gabinete.</div>
              </div>

              <div className="why-hive-card why-hive-side">
                <div className="mini-badge">BeeFirst • Hive</div>
                <h3>Conciliação automática hoje. Plataforma de automação amanhã.</h3>
                <p>
                  Estruture a operação de conciliação com IA e evolua para outras
                  rotinas empresariais no mesmo ecossistema.
                </p>
                <a className="btn dark" href="#demo">
                  Agendar demonstração gratuita
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container closing" id="demo" aria-labelledby="demo-title">
          <div className="closing-panel">
            <div className="closing-copy">
              <span className="mini-badge">07 | CTA FINAL</span>
              <h2 id="demo-title">Está pronto para automatizar a conciliação bancária?</h2>
              <p>
                Agende uma demonstração gratuita e descubra quanto tempo pode
                poupar já no próximo mês.
              </p>
              <div
                className="closing-checklist"
                role="list"
                aria-label={a11yCopy.closingHighlights}
              >
                <div className="closing-check-item" role="listitem">
                  <span aria-hidden="true">✓</span>
                  <span>Demonstração gratuita focada no seu fluxo real</span>
                </div>
                <div className="closing-check-item" role="listitem">
                  <span aria-hidden="true">✓</span>
                  <span>Visualização de impacto operacional e próximos passos</span>
                </div>
                <div className="closing-check-item" role="listitem">
                  <span aria-hidden="true">✓</span>
                  <span>Ponto de partida para piloto rápido com baixo risco</span>
                </div>
              </div>
            </div>

            <form
              className="closing-card closing-form"
              onSubmit={handleLeadSubmit}
              aria-busy={submitState === "submitting"}
              aria-describedby="demo-integrations demo-form-note"
            >
              <div className="closing-card-top">
                <span className="offer-tag">Agendar demonstração</span>
                <span className="panel-badge">Gratuita</span>
              </div>

              <label className="sr-only" aria-hidden="true">
                Não preencher
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>

              <div className="form-grid">
                <FormField label={copy.closing.form.name}>
                  <input
                    type="text"
                    name="name"
                    placeholder={copy.closing.form.namePlaceholder}
                    autoComplete="name"
                    minLength={2}
                    required
                  />
                </FormField>
                <FormField label={copy.closing.form.email}>
                  <input
                    type="email"
                    name="email"
                    placeholder={copy.closing.form.emailPlaceholder}
                    autoComplete="email"
                    inputMode="email"
                    required
                  />
                </FormField>
                <FormField label={copy.closing.form.company}>
                  <input
                    type="text"
                    name="company"
                    placeholder={copy.closing.form.companyPlaceholder}
                    autoComplete="organization"
                    minLength={2}
                    required
                  />
                </FormField>
                <FormField label={copy.closing.form.profile}>
                  <select name="profile" defaultValue="escritorio" required>
                    <option value="escritorio">
                      {copy.closing.form.profileOptions.escritorio}
                    </option>
                    <option value="bpo">{copy.closing.form.profileOptions.bpo}</option>
                    <option value="financeiro">
                      {copy.closing.form.profileOptions.financeiro}
                    </option>
                    <option value="outro">
                      {copy.closing.form.profileOptions.outro}
                    </option>
                  </select>
                </FormField>
                <FormField label={copy.closing.form.volume} className="span-2">
                  <select name="volume" defaultValue="medio" required>
                    <option value="baixo">
                      {copy.closing.form.volumeOptions.baixo}
                    </option>
                    <option value="medio">
                      {copy.closing.form.volumeOptions.medio}
                    </option>
                    <option value="alto">
                      {copy.closing.form.volumeOptions.alto}
                    </option>
                    <option value="enterprise">
                      {copy.closing.form.volumeOptions.enterprise}
                    </option>
                  </select>
                </FormField>
                <FormField
                  label={copy.closing.form.goal}
                  className="span-2"
                >
                  <textarea
                    name="goal"
                    rows={3}
                    placeholder={copy.closing.form.goalPlaceholder}
                    maxLength={500}
                  />
                </FormField>
              </div>

              <div className="closing-grid">
                <MiniField
                  label={copy.closing.mini.format}
                  value={copy.closing.mini.formatValue}
                />
                <MiniField
                  label={copy.closing.mini.output}
                  value={copy.closing.mini.outputValue}
                />
                <MiniField
                  label={copy.closing.mini.time}
                  value={copy.closing.mini.timeValue}
                />
                <MiniField
                  label={copy.closing.mini.focus}
                  value={copy.closing.mini.focusValue}
                />
              </div>

              <button
                className="btn primary large wide"
                type="submit"
                disabled={submitState === "submitting"}
              >
                {submitState === "submitting"
                  ? "A enviar..."
                  : "Agendar demonstração"}
              </button>
              <a className="btn ghost wide" href="#precos">
                Porque Hive
              </a>
              <div
                className="integration-row"
                id="demo-integrations"
                aria-label="Canais de integração disponíveis"
              >
                {integrationConfig.calendlyUrl ? (
                  <a
                    className="mini-link"
                    href={integrationConfig.calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir Calendly
                  </a>
                ) : null}
                {integrationConfig.whatsappNumber ? (
                  <a
                    className="mini-link"
                    href={`https://wa.me/${integrationConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir WhatsApp
                  </a>
                ) : null}
                {integrationConfig.crmWebhookUrl ? (
                  <span className="mini-link static">CRM Webhook ativo</span>
                ) : null}
                {integrationConfig.contactEmail ? (
                  <a
                    className="mini-link"
                    href={`mailto:${integrationConfig.contactEmail}`}
                  >
                    Abrir e-mail
                  </a>
                ) : null}
                {!hasAnyIntegration ? (
                  <span className="mini-link static">
                    Sem integração externa: lead é salvo localmente no navegador
                  </span>
                ) : null}
              </div>
              <div
                id="demo-form-note"
                className={`closing-note ${
                  submitState === "error"
                    ? "error"
                    : leadSent
                      ? "success"
                      : ""
                }`.trim()}
                role={submitState === "error" ? "alert" : "status"}
                aria-live={submitState === "error" ? "assertive" : "polite"}
              >
                {submitState === "error"
                  ? submitError || "Erro ao enviar pedido."
                  : leadSent
                    ? submitSuccessMessage || copy.closing.noteSuccess
                    : copy.closing.noteIdle}
              </div>
            </form>
          </div>
        </section>
      </main>

      <div className={`floating-actions ${showBackToTop ? "visible" : ""}`}>
        <button
          type="button"
          className="floating-btn"
          aria-label={copy.ui.themeToggleAria}
          onClick={toggleTheme}
        >
          <ThemeIcon mode={theme} />
        </button>
        <button
          type="button"
          className="floating-btn"
          aria-label={copy.buttons.backToTop}
          onClick={handleBackToTop}
        >
          <ArrowUpIcon />
        </button>
      </div>

      <div className="mobile-cta">
        <div className="mobile-cta-copy">
          <strong>{copy.mobileCta.title}</strong>
          <span>{copy.mobileCta.subtitle}</span>
        </div>
        <a className="btn primary" href="#demo">
          {copy.buttons.mobileCta}
        </a>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-brand-logo" aria-hidden="true">
              <img src={brandLogoFull} alt="" />
            </span>
            <div>
              <strong>BeeFirst • Hive</strong>
              <small>{copy.footer.subtitle}</small>
            </div>
          </div>
          <div className="footer-links">
            <a href="#problema">{copy.nav.problema}</a>
            <a href="#solucao">{copy.nav.solucao}</a>
            <a href="#precos">Porque Hive</a>
            <a href="#demo">Demo</a>
          </div>
          <div className="footer-copy">{copy.footer.copyright}</div>
        </div>
      </footer>
    </div>
  );
}

function LanguageSwitcher({ current, onChange, ariaLabel }) {
  return (
    <div className="lang-switcher" role="group" aria-label={ariaLabel}>
      {LANG_OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={`lang-btn ${current === option ? "active" : ""}`}
          aria-pressed={current === option}
          onClick={() => onChange(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle({ theme, onToggle, ariaLabel, lightLabel, darkLabel, compact }) {
  return (
    <button
      type="button"
      className={`theme-toggle ${compact ? "compact" : ""}`.trim()}
      onClick={onToggle}
      aria-label={ariaLabel}
      title={theme === "dark" ? darkLabel : lightLabel}
    >
      <ThemeIcon mode={theme} />
      <span>{theme === "dark" ? darkLabel : lightLabel}</span>
    </button>
  );
}

function ThemeIcon({ mode }) {
  return mode === "dark" ? <MoonIcon /> : <SunIcon />;
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12.5 6.5L18 12L12.5 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 19V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M6.5 11.5L12 6L17.5 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2.5V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 19V21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2.5 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 12H21.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.3 5.3L7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 17L18.7 18.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 7L18.7 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.3 18.7L7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.2A8 8 0 1 1 9.8 4a7 7 0 1 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, lead, side, titleId }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
        <h2 id={titleId}>{title}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
      {side ? <div className="section-side">{side}</div> : null}
    </div>
  );
}

function Bullet({ children }) {
  return (
    <div className="bullet">
      <span className="bullet-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none">
          <path d="M4.5 10.5L8.3 14.1L15.5 6.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </div>
  );
}

function MetricCard({ value, label }) {
  return <div className="metric-card"><strong>{value}</strong><span>{label}</span></div>;
}

function StatPill({ label, value }) {
  return <div className="stat-pill"><small>{label}</small><strong>{value}</strong></div>;
}

function CompareRow({ tone, text }) {
  return <div className={`compare-row ${tone}`}><span className="compare-dot" aria-hidden="true" /><p>{text}</p></div>;
}

function AssumptionRow({ label, value }) {
  return <div className="assumption-row"><span>{label}</span><strong>{value}</strong></div>;
}

function RangeControl({ label, value, min, max, step, unit, onChange }) {
  const isCurrency = ["R$", "BRL", "USD", "EUR"].includes(unit);
  return (
    <label className="range-control">
      <div className="range-labels">
        <span>{label}</span>
        <strong>
          {isCurrency ? `${unit} ${value}` : `${value} ${unit}`}
        </strong>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <div className="range-scale">
        <small>{min}</small>
        <small>{max}</small>
      </div>
    </label>
  );
}

function ResultTile({ label, value, highlight }) {
  return (
    <div className={`result-tile ${highlight ? "highlight" : ""}`}>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

function StepCard({ n, title, text }) {
  return (
    <article className="step-card">
      <div className="step-top"><span className="step-n">{n}</span><span className="step-line" aria-hidden="true" /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function BenefitTile({ kicker, title, text, className }) {
  return (
    <article className={`benefit-tile ${className}`.trim()}>
      <span className="tile-kicker">{kicker}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="tile-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13.5 6.5L19 12L13.5 17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </article>
  );
}

function DecisionCard({ title, points, tone }) {
  return (
    <article className={`decision-card ${tone}`.trim()}>
      <h3>{title}</h3>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function TestimonialCard({ quote, role, company, accent }) {
  return (
    <article className={`testimonial-card ${accent}`.trim()}>
      <div className="quote-mark" aria-hidden="true">
        “
      </div>
      <p>{quote}</p>
      <div className="testimonial-meta">
        <span className="avatar" aria-hidden="true">
          {role[0]}
        </span>
        <div>
          <strong>{role}</strong>
          <small>{company}</small>
        </div>
      </div>
    </article>
  );
}

function PricingCard({ badge, name, price, subtitle, features, cta, tone, featured }) {
  return (
    <article className={`price-card ${featured ? "featured" : ""}`.trim()}>
      <div className="price-top">
        <span className={`price-badge ${featured ? "featured" : ""}`}>{badge}</span>
        {featured ? <span className="ribbon">Melhor equilíbrio de conversão</span> : null}
      </div>
      <h3>{name}</h3>
      <div className="price-value">{price}</div>
      <p className="price-sub">{subtitle}</p>
      <ul className="price-list">{features.map((item) => <li key={item}>{item}</li>)}</ul>
      <a className={`btn ${tone === "primary" ? "primary" : "ghost"} wide`} href="#demo">{cta}</a>
    </article>
  );
}

function FaqItem({ q, a, defaultOpen }) {
  return (
    <details className="faq-item" open={defaultOpen}>
      <summary><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
      <p>{a}</p>
    </details>
  );
}

function FormField({ label, children, className = "" }) {
  return (
    <label className={`form-field ${className}`.trim()}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function MiniField({ label, value }) {
  return <div className="mini-field"><small>{label}</small><strong>{value}</strong></div>;
}

