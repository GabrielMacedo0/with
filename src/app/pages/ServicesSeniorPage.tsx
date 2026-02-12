import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CallToAction  } from "@/app/components/CallToAction";

interface ServicesSeniorPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ServicesSeniorPage({ onNavigate }: ServicesSeniorPageProps) {
  const features = [
    {
      title: "Currículo Executivo Premium + LinkedIn ",
      description: "Documentos de padrão executivo que destacam liderança estratégica e resultados de alto impacto, com visão de negócio e aderência a empresas nacionais e multinacionais."   },
    {
      title: "Treinamento de LinkedIn (Grupo + Individual)",
      description: "Construa influência e visibilidade como líder de pensamento, usando o LinkedIn como um canal ativo para ampliar oportunidades e acesso a processos seletivos.",
    },
    {
      title: "Simulações de Entrevistas (Grupo e Individual)",
      description: "Simulação de entrevista focada em postura executiva, clareza estratégica e leitura de ambiente para entrevistas mais maduras e bem conduzidas.",
    },
    {
      title: "Executive Presence & Branding",
      description: "Desenvolva presença executiva e marca pessoal de alto impacto.",
    },
    {
      title: "Transição para C-Level ou Board",
      description: "Estratégias para posições de alta liderança, conselho ou sucessão executiva.",
    },
    {
      title: "Suporte WhatsApp (60 dias)",
      description: "Acompanhamento estratégico durante a fase mais crítica da busca, com ajustes finos e correções de rota baseadas no retorno do mercado.",
    },
  ];

  const plans = [
    {
      name: "Sênior",
      price: "R$ 990,90",
      period: "12x de 82,57",
      link: "https://www.asaas.com/c/pzlql9fbpm28j1y9",
      features: [
        "Currículo + LinkedIn Executivo",
        "Treinamento de LinkedIn",
        "Simulações de Entrevistas",
        "Executive Presence & Branding",
        "Estratégia de Transição para C-Level / Board",
        "Suporte por 60 dias"
      ],
      highlight: false,
    },
    {
      name: "Sênior Tradução",
      price: "R$ 1.299,90",
      period: "12x de 108,32",
      link: "https://www.asaas.com/c/3hylysgh01dnakep",
      features: [
        "Currículo + LinkedIn Executivo (PT + EN)",
        "Treinamento de LinkedIn",
        "Simulações de Entrevistas",
        "Executive Presence & Branding",
        "Estratégia de Transição para C-Level / Board",
        "Suporte por 60 dias"
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
              Executivos e profissionais sênior enfrentam um mercado cada vez mais restrito, político e exigente, onde avançar exige estratégia, clareza e proteção de carreira.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              O Plano Sênior oferece orientação estratégica confidencial para reposicionar sua trajetória e conduzir decisões críticas com segurança.
            </p>
            <a href="#">                
            <Button className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white"
              onClick={(e) => { e.preventDefault(); onNavigate("contact");}}>
              Agendar Consulta Executiva
            </Button></a>
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
            Plano Disponível
          </h2>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 w-[320px] flex flex-col ${
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

                  <div className="mb-6 min-h-[88px]">
                    <span className="text-4xl font-bold text-[#1a2e4a] block">
                      {plan.price}
                    </span>
                    <span className="text-[#1a2e4a]/60 text-sm">
                      12x de {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 min-h-[220px]">
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
                    asChild
                    className={`w-full mt-auto ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] text-white"
                        : "bg-white text-[#1a2e4a] border-2 border-[#1a2e4a]/20"
                    }`}
                  >
                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escolher Plano
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confidentiality Note */}
        <div className="bg-[#e5d9d1] rounded-2xl p-8 mb-12 text-center max-w-4xl mx-auto">
          <p className="text-[#1a2e4a]/80" style={{ fontFamily: 'var(--font-body)' }}>
            <span className="font-semibold text-[#1a2e4a]" style={{ fontFamily: 'var(--font-heading)' }}>Confidencialidade Garantida:</span> Todas as consultorias executivas são conduzidas com total discrição e sigilo profissional. Seu processo é confidencial e personalizado.
          </p>
        </div>

        {/* CTA Section */}
        <CallToAction onNavigate={onNavigate}/>
      </div>
    </div>
  );
}
