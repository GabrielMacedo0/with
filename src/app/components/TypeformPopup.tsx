import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";

const TYPEFORM_ID = "BcSXBGBp"; // ex: se o link é typeform.com/to/ABC123, o ID é ABC123

// Lê as UTMs salvas (mesma lógica já usada no career-consultation-form.tsx)
function getStoredUtms(): Record<string, string> {
  const saved = localStorage.getItem("utms");
  if (!saved) return {};

  const params = new URLSearchParams(saved);
  const utms: Record<string, string> = {};

  ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"].forEach((key) => {
    const value = params.get(key);
    if (value) utms[key] = value;
  });

  return utms;
}

export function openTypeformPopup() {
  const utms = getStoredUtms();

  const popup = createPopup(TYPEFORM_ID, {
    hidden: utms, // repassa as UTMs como hidden fields do Typeform
    onSubmit: () => {
      // Espaço reservado pra disparar evento de conversão no GTM, se quiser
      // window.dataLayer?.push({ event: "typeform_submit" });
    },
  });

  popup.open();
}