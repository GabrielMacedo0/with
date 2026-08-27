import { MessageCircle } from "lucide-react";
import { openTypeformPopup } from "@/app/components/TypeformPopup";

// ⚠️ TEMPORÁRIO: ainda não temos o número de WhatsApp definido.
// Por enquanto, o botão leva para o formulário de contato existente.
// Quando o número estiver definido, trocar o onClick abaixo por algo como:
//
// const WHATSAPP_NUMBER = "5511999999999"; // com DDI + DDD, sem espaços/símbolos
// const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de saber mais sobre a consultoria.";
// 
//   href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
//   target="_blank"
//   rel="noopener noreferrer"
//   ...
// >

export function FloatingWhatsAppButton() {
  return (
    <button
      onClick={openTypeformPopup}
      aria-label="Fale conosco"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </button>
  );
}