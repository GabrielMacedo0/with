import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface ServicesPlenoPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPlenoPage({ onNavigate }: ServicesPlenoPageProps) {
  const features = [
    {
      title: "Revisão Estratégica de Currículo",
      description: "Destaque suas conquistas e resultados mensuráveis para posições de nível médio e especialista.",
    },
    {
      title: "LinkedIn Avançado com Estratégia de Conteúdo",
      description: "Fortaleça sua presença digital e construa autoridade na sua área de atuação.",
    },
    {
      title: "Planejamento de Carreira de Médio Prazo",
      description: "Defina metas claras para os próximos 2-5 anos e estratégias para alcançá-las.",
    },
    {
      title: "Negociação Salarial e Benefícios",
      description: "Aprenda técnicas avançadas para negociar pacotes de remuneração competitivos.",
    },
    {
      title: "Desenvolvimento de Liderança",
      description: "Prepare-se para assumir posições de liderança com confiança e competência.",
    },
    {
      title: "Transição de Carreira Estruturada",
      description: "Mude de área ou empresa com estratégia e minimizando riscos profissionais.",
    },
  ];

  const plans = [
    {
      name: "Profissional",
      price: "R$ 1.297",
      period: "5 sessões",
      features: [
        "Currículo + LinkedIn Avançado",
        "5 sessões de 1h30",
        "Planejamento de carreira",
        "Suporte por 60 dias",
      ],
      highlight: false,
    },
    {
      name: "Executivo",
      price: "R$ 2.497",
      period: "3 meses",
      features: [
        "Tudo do Profissional",
        "8 sessões de mentoria",
        "Negociação salarial",
        "Desenvolvimento de liderança",
        "Suporte por 90 dias",
      ],
      highlight: true,
    },
    {
      name: "Transformação",
      price: "R$ 3.997",
      period: "6 meses",
      features: [
        "Tudo do Executivo",
        "12 sessões personalizadas",
        "Transição de carreira",
        "Acompanhamento contínuo",
        "Suporte por 180 dias",
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
            onClick={() => onNavigate && onNavigate("home")}
            className="flex items-center gap-2 text-[#1a2e4a]/70 hover:text-[#1a2e4a] mb-6 transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft size={20} />
            Voltar ao Início
          </button>
          
          <div className="inline-block px-3 py-1 bg-[#387ad6]/10 text-[#387ad6] rounded-full text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Nível Pleno
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Serviços para Profissionais Pleno
          </h1>
          
          <p className="text-xl text-[#1a2e4a]/70 max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
            Acelere sua carreira e prepare-se para posições de maior responsabilidade e impacto
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2e4a] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Impulsione sua carreira para o próximo nível
            </h2>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Profissionais de nível pleno enfrentam desafios únicos: como se destacar em um mercado competitivo, preparar-se para posições de liderança, negociar promoções e aumentos salariais, e decidir quando e como fazer uma transição de carreira.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Nossa consultoria especializada ajuda você a navegar essas questões com estratégias comprovadas, desenvolvendo habilidades de liderança e construindo um plano de carreira sólido para alcançar suas ambições profissionais.
            </p>
            
            <Button className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white">
              Agendar Avaliação Gratuita
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1758599543378-ba892b220c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBncm93dGglMjBidXNpbmVzc3xlbnwxfHx8fDE3NjkwMTE5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Crescimento Profissional"
              className="rounded-2xl shadow-2xl w-full"
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
                  <div className="w-10 h-10 bg-[#387ad6]/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-[#387ad6]" size={20} />
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
            Planos Disponíveis
          </h2>
          <p className="text-center text-[#1a2e4a]/70 mb-12" style={{ fontFamily: 'var(--font-body)' }}>
            Invista no seu crescimento profissional com o plano ideal
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#f5424a] text-white px-4 py-1 rounded-full text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      Mais Vendido
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-[#1a2e4a] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1a2e4a]" style={{ fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
                  <span className="text-[#1a2e4a]/60 ml-2" style={{ fontFamily: 'var(--font-body)' }}>{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#387ad6] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-[#1a2e4a]/70" style={{ fontFamily: 'var(--font-body)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white"
                      : "bg-white text-[#1a2e4a] border-2 border-[#1a2e4a]/20 hover:bg-[#f2e8e0]"
                  }`}
                >
                  Escolher Plano
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Pronto para Acelerar sua Carreira?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Agende uma sessão estratégica gratuita de 45 minutos para discutir seus objetivos e criar um plano personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#1fa6a8] hover:bg-white/90">
              Agendar Sessão Estratégica
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              Baixar Guia de Crescimento
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
