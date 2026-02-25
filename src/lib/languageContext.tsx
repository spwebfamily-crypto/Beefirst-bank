import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { content, Language } from './content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof content['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const LANG_STORAGE_KEY = 'beefirst-site-lang';

const bankOverrides: Record<Language, any> = {
  pt: {
    hero: {
      title_lines: ['Conciliação', 'Bancária com IA', 'PARA'],
      rotating_words: ['MARGEM', 'ESCALA', 'CONTABILIDADE', 'EFICIÊNCIA', 'ROI'],
      subtitle:
        'A BeeFirst Hive automatiza matching entre lançamentos e extratos, reduz retrabalho e prioriza exceções para acelerar o fechamento.',
    },
    cta: {
      title: 'Pronto para automatizar a conciliação bancária?',
      desc: 'Agende um diagnóstico comercial e veja como a Hive pode reduzir tempo operacional e aumentar margem.',
      button: 'Agendar Diagnóstico',
    },
    contact: {
      title: 'Agendar Diagnóstico',
      subtitle: 'Escolha o melhor canal para falar com a BeeFirst sobre a Hive.',
      whatsapp: {
        title: 'Falar via WhatsApp',
        desc: 'Abra uma conversa rápida e compartilhe seu cenário. Se preferir, use o formulário para enviar detalhes da operação.',
        button: 'Abrir WhatsApp',
      },
      form: {
        title: 'Receber contato comercial',
        desc: 'Preencha os dados e nós retornamos com próximos passos para piloto/diagnóstico.',
        submit: 'Enviar Pedido',
      },
    },
  },
  en: {
    hero: {
      title_lines: ['Bank', 'Reconciliation AI', 'FOR'],
      rotating_words: ['MARGIN', 'SCALE', 'ACCOUNTING', 'EFFICIENCY', 'ROI'],
      subtitle:
        'BeeFirst Hive automates matching between accounting records and bank statements, reducing rework and prioritizing exceptions.',
    },
    cta: {
      title: 'Ready to automate bank reconciliation?',
      desc: 'Book a commercial assessment and see how Hive can reduce operational effort and improve margins.',
      button: 'Book Assessment',
    },
    contact: {
      title: 'Book Assessment',
      subtitle: 'Choose the best channel to talk to BeeFirst about Hive.',
      whatsapp: {
        title: 'Talk on WhatsApp',
        desc: 'Open a quick chat and share your scenario. If you prefer, use the form to send operation details.',
        button: 'Open WhatsApp',
      },
      form: {
        title: 'Request commercial contact',
        desc: 'Fill in your details and we will reply with the next steps for a pilot/assessment.',
        submit: 'Send Request',
      },
    },
  },
  es: {
    hero: {
      title_lines: ['Conciliación', 'Bancaria con IA', 'PARA'],
      rotating_words: ['MARGEN', 'ESCALA', 'CONTABILIDAD', 'EFICIENCIA', 'ROI'],
      subtitle:
        'BeeFirst Hive automatiza el cruce entre registros contables y extractos bancarios, reduce reprocesos y prioriza excepciones.',
    },
    cta: {
      title: '¿Listo para automatizar la conciliación bancaria?',
      desc: 'Agenda un diagnóstico comercial y descubre cómo Hive puede reducir esfuerzo operativo y mejorar márgenes.',
      button: 'Agendar Diagnóstico',
    },
    contact: {
      title: 'Agendar Diagnóstico',
      subtitle: 'Elige el mejor canal para hablar con BeeFirst sobre Hive.',
      whatsapp: {
        title: 'Hablar por WhatsApp',
        desc: 'Abre un chat rápido y comparte tu escenario. Si prefieres, usa el formulario para enviar detalles.',
        button: 'Abrir WhatsApp',
      },
      form: {
        title: 'Recibir contacto comercial',
        desc: 'Completa los datos y responderemos con próximos pasos para piloto/diagnóstico.',
        submit: 'Enviar Solicitud',
      },
    },
  },
};

function mergeContent(base: typeof content['en'], override: any) {
  if (!override) return base;

  return {
    ...base,
    ...override,
    hero: { ...base.hero, ...(override.hero ?? {}) },
    cta: { ...base.cta, ...(override.cta ?? {}) },
    contact: {
      ...base.contact,
      ...(override.contact ?? {}),
      whatsapp: {
        ...base.contact.whatsapp,
        ...(override.contact?.whatsapp ?? {}),
      },
      form: {
        ...base.contact.form,
        ...(override.contact?.form ?? {}),
        fields: {
          ...base.contact.form.fields,
          ...(override.contact?.form?.fields ?? {}),
        },
      },
    },
  };
}

function readStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return stored === 'pt' || stored === 'en' || stored === 'es' ? stored : 'pt';
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_STORAGE_KEY, language);
    }
  }, [language]);

  const t = mergeContent(content[language], bankOverrides[language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
