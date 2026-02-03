import { Button } from "@/app/components/ui/button";

export function CallToAction() {
    const handleNavigate = (sectionId: string) => {
    sessionStorage.setItem("scrollTo", sectionId);
    window.location.assign("/");
    };
  return (
    <div className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] rounded-3xl p-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        Pronto para Começar sua Jornada?
      </h2>

      <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
        Agende uma conversa gratuita de 30 minutos para entender suas necessidades e como podemos ajudar você a decolar na sua carreira.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-white text-[#1fa6a8] hover:bg-white/90"
            onClick={() => handleNavigate("contato")}>
            Agendar Conversa Gratuita
        </Button>

        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10"
            onClick={() => handleNavigate("ebook")}>
            Baixar E-book Gratuito
        </Button>
      </div>
    </div>
  );
}


