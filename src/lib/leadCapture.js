const LOCAL_LEADS_STORAGE_KEY = "hive-landing-leads";
const LOCAL_LEADS_STORAGE_LIMIT = 50;

const MESSAGES = {
  pt: {
    invalidCalendly: "Link do Calendly inválido no `.env`.",
    missingRequired: "Preencha nome, email e empresa para continuar.",
    crmSuccess: "Lead enviado ao CRM com sucesso.",
    calendlySuccess: "Lead enviado. Abrimos o agendamento no Calendly.",
    whatsappSuccess: "Lead enviado. Abrimos o WhatsApp para concluir o contacto.",
    emailSuccess: "Lead preparado por e-mail. O cliente de e-mail foi aberto.",
    localSavedClipboard:
      "Lead salvo localmente no navegador e resumo copiado para a área de transferência.",
    localSavedOnly:
      "Lead salvo localmente no navegador. Configure CRM/Calendly/WhatsApp/e-mail para envio externo.",
    genericError: "Não foi possível enviar o pedido agora.",
    spamAccepted: "Pedido recebido.",
    title: "Novo pedido de contacto - BeeFirst",
    labels: {
      name: "Nome",
      email: "Email",
      company: "Empresa",
      phone: "Telefone",
      message: "Mensagem",
      source: "Origem",
    },
  },
  en: {
    invalidCalendly: "Invalid Calendly URL in `.env`.",
    missingRequired: "Please fill in name, email and company to continue.",
    crmSuccess: "Lead sent to CRM successfully.",
    calendlySuccess: "Lead sent. We opened Calendly scheduling.",
    whatsappSuccess: "Lead sent. We opened WhatsApp to complete contact.",
    emailSuccess: "Lead prepared by email. Your mail client was opened.",
    localSavedClipboard:
      "Lead was saved locally in the browser and the summary was copied to your clipboard.",
    localSavedOnly:
      "Lead was saved locally in the browser. Configure CRM/Calendly/WhatsApp/email for external delivery.",
    genericError: "We could not send your request right now.",
    spamAccepted: "Request received.",
    title: "New contact request - BeeFirst",
    labels: {
      name: "Name",
      email: "Email",
      company: "Company",
      phone: "Phone",
      message: "Message",
      source: "Source",
    },
  },
  es: {
    invalidCalendly: "URL de Calendly inválida en `.env`.",
    missingRequired: "Completa nombre, email y empresa para continuar.",
    crmSuccess: "Lead enviado al CRM con éxito.",
    calendlySuccess: "Lead enviado. Abrimos la agenda en Calendly.",
    whatsappSuccess: "Lead enviado. Abrimos WhatsApp para completar el contacto.",
    emailSuccess: "Lead preparado por correo. Se abrió el cliente de email.",
    localSavedClipboard:
      "Lead guardado localmente en el navegador y resumen copiado al portapapeles.",
    localSavedOnly:
      "Lead guardado localmente en el navegador. Configura CRM/Calendly/WhatsApp/email para envío externo.",
    genericError: "No fue posible enviar la solicitud ahora.",
    spamAccepted: "Solicitud recibida.",
    title: "Nueva solicitud de contacto - BeeFirst",
    labels: {
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      phone: "Teléfono",
      message: "Mensaje",
      source: "Origen",
    },
  },
};

function getLocaleMessages(locale = "pt") {
  return MESSAGES[locale] ?? MESSAGES.pt;
}

export function getLeadIntegrationConfig() {
  return {
    crmWebhookUrl: import.meta.env.VITE_CRM_WEBHOOK_URL?.trim() ?? "",
    calendlyUrl: import.meta.env.VITE_CALENDLY_URL?.trim() ?? "",
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? "",
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "",
  };
}

export function normalizeLeadPayload(entries) {
  const message = String(entries.message ?? "").trim();

  return {
    name: String(entries.name ?? "").trim(),
    email: String(entries.email ?? "").trim(),
    company: String(entries.company ?? "").trim(),
    phone: String(entries.phone ?? "").trim(),
    message,
    website: String(entries.website ?? "").trim(),
    profile: String(entries.profile ?? "").trim(),
    volume: String(entries.volume ?? "").trim(),
    goal: String(entries.goal ?? message).trim(),
  };
}

export function saveLeadLocally(payload) {
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
    // Keep form usable if localStorage is blocked.
  }

  return record;
}

function buildSummaryMessage(payload, locale = "pt") {
  const m = getLocaleMessages(locale);

  return [
    m.title,
    `${m.labels.name}: ${payload.name ?? ""}`,
    `${m.labels.email}: ${payload.email ?? ""}`,
    `${m.labels.company}: ${payload.company ?? ""}`,
    `${m.labels.phone}: ${payload.phone ?? ""}`,
    `${m.labels.message}: ${payload.message ?? ""}`,
    `${m.labels.source}: website-contact`,
  ].join("\n");
}

export async function submitLeadCapture(entries, options = {}) {
  const locale = options.locale ?? "pt";
  const m = getLocaleMessages(locale);
  const payload = normalizeLeadPayload(entries);
  const integrationConfig = getLeadIntegrationConfig();

  if (payload.website) {
    return { ok: true, message: m.spamAccepted, payload };
  }

  if (!payload.name || !payload.email || !payload.company) {
    return { ok: false, message: m.missingRequired, payload };
  }

  const summaryMessage = buildSummaryMessage(payload, locale);
  const crmPayload = {
    source: "hive-landing",
    createdAt: new Date().toISOString(),
    name: payload.name,
    email: payload.email,
    company: payload.company,
    phone: payload.phone,
    message: payload.message,
    goal: payload.goal,
    profile: payload.profile ?? "",
    volume: payload.volume ?? "",
  };

  let externalTargetUrl = "";
  if (integrationConfig.calendlyUrl) {
    try {
      const calendly = new URL(integrationConfig.calendlyUrl);
      calendly.searchParams.set("name", payload.name);
      calendly.searchParams.set("email", payload.email);
      calendly.searchParams.set("a1", payload.company);
      calendly.searchParams.set("a2", payload.phone);
      calendly.searchParams.set("a3", payload.message);
      externalTargetUrl = calendly.toString();
    } catch {
      return { ok: false, message: m.invalidCalendly, payload };
    }
  } else if (integrationConfig.whatsappNumber) {
    externalTargetUrl = `https://wa.me/${integrationConfig.whatsappNumber}?text=${encodeURIComponent(summaryMessage)}`;
  }

  const popupWindow =
    typeof window !== "undefined" && externalTargetUrl
      ? window.open("", "_blank", "noopener,noreferrer")
      : null;

  try {
    let delivered = false;
    let successMessage = m.localSavedOnly;

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
      successMessage = m.crmSuccess;
    }

    if (externalTargetUrl) {
      if (popupWindow && !popupWindow.closed) {
        popupWindow.location.href = externalTargetUrl;
      } else if (typeof window !== "undefined") {
        window.open(externalTargetUrl, "_blank", "noopener,noreferrer");
      }

      delivered = true;
      successMessage = integrationConfig.calendlyUrl ? m.calendlySuccess : m.whatsappSuccess;
    }

    if (!externalTargetUrl && integrationConfig.contactEmail && typeof window !== "undefined") {
      const mailtoUrl = `mailto:${encodeURIComponent(integrationConfig.contactEmail)}?subject=${encodeURIComponent(m.title)}&body=${encodeURIComponent(summaryMessage)}`;
      window.location.href = mailtoUrl;
      delivered = true;
      successMessage = m.emailSuccess;
    }

    if (!delivered) {
      saveLeadLocally(payload);

      try {
        await window.navigator.clipboard?.writeText?.(summaryMessage);
        successMessage = m.localSavedClipboard;
      } catch {
        successMessage = m.localSavedOnly;
      }
    }

    return { ok: true, message: successMessage, payload };
  } catch (error) {
    if (popupWindow && !popupWindow.closed) {
      popupWindow.close();
    }

    return {
      ok: false,
      message: error instanceof Error ? error.message : m.genericError,
      payload,
    };
  }
}


