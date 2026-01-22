import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface ServicesSeniorPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesSeniorPage({ onNavigate }: ServicesSeniorPageProps) {
  const features = [
    {
      title: "Currículo Executivo Premium",
      description: "Documentos de classe executiva que destacam liderança estratégica e resultados de alto impacto.",
    },
    {
      title: "Posicionamento Executivo no LinkedIn",
      description: "Construa influência e visibilidade como líder de pensamento na sua indústria.",
    },
    {
      title: "Estratégia de Carreira Executiva",
      description: "Planejamento de longo prazo para C-Level, board positions e empreendedorismo.",
    },
    {
      title: "Negociação de Pacotes Executivos",
      description: "Maximize sua remuneração total incluindo equity, bônus e benefícios executivos.",
    },
    {
      title: "Executive Presence & Branding",
      description: "Desenvolva presença executiva e marca pessoal de alto impacto.",
    },
    {
      title: "Transição para C-Level ou Board",
      description: "Estratégias para posições de alta liderança, conselho ou sucessão executiva.",
    },
  ];

  const plans = [
    {
      name: "Executivo",
      price: "R$ 4.997",
      period: "3 meses",
      features: [
        "Currículo + LinkedIn Executivo",
        "10 sessões de 2h",
        "Estratégia de carreira C-Level",
        "Executive presence coaching",
        "Suporte por 90 dias",
      ],
      highlight: false,
    },
    {
      name: "C-Level Premium",
      price: "R$ 9.997",
      period: "6 meses",
      features: [
        "Tudo do Executivo",
        "16 sessões personalizadas",
        "Negociação de pacotes executivos",
        "Preparação para board positions",
        "Network estratégico",
        "Suporte por 180 dias",
      ],
      highlight: true,
    },
    {
      name: "Elite",
      price: "Sob Consulta",
      period: "customizado",
      features: [
        "Programa totalmente personalizado",
        "Sessões ilimitadas",
        "Consultoria estratégica contínua",
        "Suporte executivo 24/7",
        "Acesso vitalício ao consultor",
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
          
          <div className="inline-block px-3 py-1 bg-[#1a2e4a]/10 text-[#1a2e4a] rounded-full text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Nível Sênior / Executivo
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Serviços para Executivos e C-Level
          </h1>
          
          <p className="text-xl text-[#1a2e4a]/70 max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
            Consultoria estratégica premium para líderes que buscam posições de alto impacto
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2e4a] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Liderança Estratégica de Alto Nível
            </h2>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Executivos e profissionais sênior enfrentam desafios únicos: navegação política corporativa complexa, negociação de pacotes de remuneração executiva, transição para C-Level ou posições em conselhos, e construção de legado profissional duradouro.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Nossa consultoria executiva oferece orientação estratégica personalizada, desenvolvida por especialistas com experiência em alta liderança. Trabalhamos confidencialmente para posicionar você nas oportunidades mais significativas da sua carreira.
            </p>
            
            <Button className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white">
              Agendar Consulta Executiva
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODkzMzIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Liderança Executiva"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a2e4a] text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            Serviços Executivos Premium
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#1a2e4a]/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-[#1a2e4a]" size={20} />
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
            Programas Executivos
          </h2>
          <p className="text-center text-[#1a2e4a]/70 mb-12" style={{ fontFamily: 'var(--font-body)' }}>
            Investimento estratégico no seu sucesso de longo prazo
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
                      Mais Procurado
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-[#1a2e4a] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1a2e4a]" style={{ fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
                  {plan.period !== "customizado" && (
                    <span className="text-[#1a2e4a]/60 ml-2" style={{ fontFamily: 'var(--font-body)' }}>{plan.period}</span>
                  )}
                  {plan.period === "customizado" && (
                    <div className="text-[#1a2e4a]/60 text-sm mt-1" style={{ fontFamily: 'var(--font-body)' }}>{plan.period}</div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#1a2e4a] flex-shrink-0 mt-0.5" size={20} />
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
                  {plan.name === "Elite" ? "Solicitar Proposta" : "Escolher Programa"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Confidentiality Note */}
        <div className="bg-[#e5d9d1] rounded-2xl p-8 mb-12 text-center max-w-4xl mx-auto">
          <p className="text-[#1a2e4a]/80" style={{ fontFamily: 'var(--font-body)' }}>
            <span className="font-semibold text-[#1a2e4a]" style={{ fontFamily: 'var(--font-heading)' }}>Confidencialidade Garantida:</span> Todas as consultorias executivas são conduzidas com total discrição e sigilo profissional. Seu processo é confidencial e personalizado.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Próximo Passo na sua Jornada Executiva
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Agende uma consulta executiva confidencial de 60 minutos para discutir seus objetivos estratégicos de carreira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#1fa6a8] hover:bg-white/90">
              Agendar Consulta Confidencial
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              Baixar White Paper Executivo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
