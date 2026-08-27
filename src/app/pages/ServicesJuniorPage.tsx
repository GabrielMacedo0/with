import { CheckCircle2, ArrowLeft } from "lucide-react";
import Junior from "@/assets/junior.png";
import { Button } from "@/app/components/ui/button";
import { CallToAction  } from "@/app/components/CallToAction";
import { openTypeformPopup } from "@/app/components/TypeformPopup";

interface ServicesJuniorPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ServicesJuniorPage({ onNavigate }: ServicesJuniorPageProps) {
  const features = [
    {
      title: "Currículo Completo",
      description: "Currículo estruturado para traduzir experiências e projetos em valor de mercado, alinhar o perfil às vagas certas e melhorar a performance em sistemas de triagem.",
    },
    {
      title: "LinkedIn Reformulado",
      description: "Otimização do perfil com palavras-chave, clareza de objetivo e alinhamento com as vagas-alvo.",
    },
    {
      title: "Treinamento de LinkedIn em Grupo",
      description: "Aprenda como buscar vagas, se candidatar melhor e se conectar com recrutadores de forma estratégica.",
    },
    {
      title: "Suporte via WhatsApp (30 dias)",
      description: "Acompanhamento para tirar dúvidas, ajustar estratégias e orientar os próximos passos.",
    },
  ];

  const plans = [

    {
      name: "Júnior",
      price: "Solicitar análise da carreira",
      link: "https://www.asaas.com/c/v34qe6mdygsfrgrq",
      features: [
        "Currículo + LinkedIn",
        "Treinamento em Grupo",
        "Suporte por 30 dias",
      ],
      highlight: false,
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2e8e0] to-white">
      {/* Hero Section */}
      <div className="bg-white border-b border-[#1a2e4a]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => onNavigate && onNavigate("/")}
            className="flex items-center gap-2 text-[#1a2e4a]/70 hover:text-[#1a2e4a] mb-6 transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft size={20} />
            Voltar ao Início
          </button>
          
          <div className="inline-block px-3 py-1 bg-[#45bab0]/10 text-[#1fa6a8] rounded-full text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Nível Júnior
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Serviços para Profissionais Júnior
          </h1>
          
          <p className="text-xl text-[#1a2e4a]/70 max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
            Dê os primeiros passos da sua carreira com confiança e direcionamento estratégico
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id = "junior">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2e4a] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Estrutura e posicionamento para o início da carreira
            </h2>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              O Plano Júnior foi pensado para quem está no início da carreira, em transição ou buscando a primeira recolocação de forma estruturada. 
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              O principal desafio nessa fase não é a falta de esforço, mas a ausência de um posicionamento claro: o profissional faz muita coisa, porém o mercado não consegue identificar exatamente onde ele se encaixa.
            </p>
          </div>
          
          <div className="relative">
            <img
              src= {Junior}
              alt="Consultoria de Carreira"
              className="rounded-2xl shadow-2xl w-full max-h-[420px] object-cover"
            />
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a2e4a] text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            O que está incluído
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#45bab0]/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-[#1fa6a8]" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2e4a] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{feature.title}</h3>
                  <p className="text-[#1a2e4a]/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a2e4a] text-center mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Plano Disponível
          </h2>
          
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 ${
                    plan.highlight
                      ? "border-2 border-[#1fa6a8] shadow-xl relative"
                      : "border border-[#1a2e4a]/10 shadow-lg"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-[#f5424a] text-white px-4 py-1 rounded-full text-sm font-medium">
                        Mais Vendido
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#1a2e4a] mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#1a2e4a]">
                      {plan.price}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2
                          className="text-[#1fa6a8] flex-shrink-0 mt-0.5"
                          size={20}
                        />
                        <span className="text-[#1a2e4a]/70">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={openTypeformPopup}
                      className={`w-full ${
                        plan.highlight
                        ? "bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] text-white"
                        : "bg-white text-[#1a2e4a] border-2 border-[#1a2e4a]/20"
                      }`}
                  >
                    Agendar Conversa
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CallToAction />
      </div>
    </div>
  );
}
