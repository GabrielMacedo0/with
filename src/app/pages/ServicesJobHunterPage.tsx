import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CallToAction  } from "@/app/components/CallToAction";
import { useState } from 'react';
import { MessageSquare } from "lucide-react";
import { CareerConsultationForm } from '@/app/components/career-consultation-form';

interface ServicesJobHunterPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ServicesJobHunterPage({ onNavigate }: ServicesJobHunterPageProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      title: "Avaliação comportamental",
      description: "Posicionamento estratégico para acelerar o crescimento com menos desgaste.",
    },
    {
      title: "Planejamento de carreira",
      description: "Definição estratégica de cargos-alvo, perfil de empresas, faixa salarial e estratégia de movimentação.",
    },
    {
      title: "Currículo e LinkedIn estratégicos",
      description: "Construídos para evidenciar resultados e maturidade profissional.",
    },
    {
      title: "Circulação ativa do seu perfil na nossa rede",
      description: "Seu nome passa a chegar a recrutadores, líderes e decisores, indo além da dependência de algoritmos.",
    },
    {
      title: "Busca ativa de oportunidades",
      description: "Buscamos oportunidades alinhadas aos seus objetivos, com inteligência de mercado e estratégia.",
    },
    {
      title: "Adequação do currículo a cada candidatura",
      description: "Nada de currículo genérico. Cada envio é estrategicamente pensado pela nossa equipe para a vaga em questão.",
    },
    {
      title: "Acesso a oportunidades fora do mercado aberto",
      description: "Oportunidades que não aparecem nos portais, mas circulam nas mesas de decisão",
    },
    {
      title: "Preparação para entrevistas e tomadas de decisão",
      description: "Para avançar com clareza, segurança e poder de escolha",
    },
  ];

  const plans = [
    {
      name: "Job Hunting",
      price: "Solicitar análise da carreira",
      period: "",
      features: [
      "Avaliação comportamental",
      "Estratégia de carreira",
      "Currículo + LinkedIn estratégicos",
      "Ativação do perfil na rede",
      "Busca ativa de oportunidades",
      "Candidaturas personalizadas",
      "Acesso ao mercado oculto",
      "Preparação para entrevistas"
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
          
          <div className="inline-block px-3 py-1 bg-[#1a2e4a]/10 text-[#1a2e4a] rounded-full text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Nível JobHunter
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Job hunting estratégico
          </h1>
          
          <p className="text-xl text-[#1a2e4a]/70 max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
            Consultoria premium para posicionamento, performance e avanço em processos seletivos
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2e4a] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Estratégia para transformar resultado em oportunidade
            </h2>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              O Job Hunter é para profissionais que já entregam resultados, mas sentem que o mercado não está devolvendo isso em oportunidades.
              Para quem quer crescer, mas não tem tempo — ou espaço — para conduzir essa estratégia sozinho.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Aqui, o foco é assumir a parte estratégica da sua carreira, reposicionar sua experiência e ampliar o acesso às oportunidades certas.
            </p>

            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Nossa atuação funciona como um agente de carreira: cuidamos do posicionamento, da narrativa e da abordagem ao mercado para que seus resultados cheguem a quem decide.
            </p>            
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
                Agendar Job Hunting
            </Button>
            <CareerConsultationForm
              open={isFormOpen}
              onOpenChange={setIsFormOpen}
            />
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
            Serviços de Job Hunting
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
                    <span className="text-[#1a2e4a]/60 ml-2" style={{ fontFamily: 'var(--font-body)' }}>{plan.period}</span>
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
                   onClick={(e) => { e.preventDefault(); onNavigate("contact");}}
                    className={`w-full ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] text-white"
                        : "bg-white text-[#1a2e4a] border-2 border-[#1a2e4a]/20"
                    }`}
                  >
                    Escolher Plano
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CallToAction onNavigate={onNavigate}/>
      </div>
    </div>
  );
}
