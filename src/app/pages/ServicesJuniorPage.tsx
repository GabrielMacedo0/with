import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface ServicesJuniorPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesJuniorPage({ onNavigate }: ServicesJuniorPageProps) {
  const features = [
    {
      title: "Revisão e Otimização de Currículo",
      description: "Transforme seu currículo em uma ferramenta poderosa para conseguir entrevistas, mesmo sem prévia experiência.",
    },
    {
      title: "Otimização de Perfil no LinkedIn",
      description: "Otimize o design e o conteúdo profissional digital para atrair recrutadores e oportunidades de trabalho.",
    },
    {
      title: "Orientação de Carreira Inicial",
      description: "Defina sua trajetória profissional com dicas sobre próximos passos e áreas de concentração.",
    },
    {
      title: "Preparação para Entrevistas",
      description: "Técnicas e simulações para que você se saia bem em processos seletivos e conquiste sua vaga.",
    },
    {
      title: "Personal Branding Básico",
      description: "Aprenda a se posicionar e construir seu valor, mesmo no início de carreira.",
    },
    {
      title: "Estratégias de Networking",
      description: "Como construir relacionamentos profissionais que podem abrir portas para oportunidades.",
    },
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 297",
      period: "sessão única",
      features: [
        "Revisão de Currículo",
        "1 sessão de 1h",
        "E-mail de suporte (7 dias)",
      ],
      highlight: false,
    },
    {
      name: "Completo",
      price: "R$ 897",
      period: "3 sessões",
      features: [
        "Currículo + LinkedIn",
        "3 sessões de 1h",
        "Preparação para entrevistas",
        "Suporte por 30 dias",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "R$ 1.497",
      period: "3 meses",
      features: [
        "Tudo do Completo",
        "5 sessões de mentoria",
        "Acompanhamento contínuo",
        "Suporte por 90 dias",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2e4a] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Por que investir em consultoria no início de carreira?
            </h2>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Os primeiros anos de carreira são fundamentais para construir uma base sólida. Muitos profissionais júnior enfrentam desafios como falta de clareza sobre a carreira a seguir, dificuldade em se destacar no mercado competitivo e insegurança nas primeiras entrevistas.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Nossa consultoria especializada pode ajudá-lo a evitar erros comuns, posicionar-se estrategicamente desde o início e acelerar seu crescimento profissional.
            </p>
            
            <Button className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white">
              Baixar E-book Gratuito
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1603195827187-459ab02554a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY4OTU3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Consultoria de Carreira"
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
            Planos Disponíveis
          </h2>
          <p className="text-center text-[#1a2e4a]/70 mb-12" style={{ fontFamily: 'var(--font-body)' }}>
            Escolha o plano ideal para o seu momento de carreira
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
                      <CheckCircle2 className="text-[#1fa6a8] flex-shrink-0 mt-0.5" size={20} />
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
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Agende uma conversa gratuita de 30 minutos para entender suas necessidades e como podemos ajudar você a decolar na sua carreira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#1fa6a8] hover:bg-white/90">
              Agendar Conversa Gratuita
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              Baixar E-book Grátis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
