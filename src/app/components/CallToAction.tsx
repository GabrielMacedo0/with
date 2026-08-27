import { MessageSquare } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { openTypeformPopup } from "@/app/components/TypeformPopup";

export function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] rounded-3xl p-12 text-center text-white">      
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        Pronto para Começar sua Jornada?
      </h2>

      <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
        Agende uma conversa gratuita de 30 minutos para entender suas necessidades e como podemos ajudar você a decolar na sua carreira.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        {/* BOTÃO 1: Vai para a página de Contato */}
        <Button
          onClick={openTypeformPopup}
          className="bg-white text-[#1fa6a8] hover:bg-white/90 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
           Ir para a página de contato
        </Button>
      </div>
    </div>
  );
}