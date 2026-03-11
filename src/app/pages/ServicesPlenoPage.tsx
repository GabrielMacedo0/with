import { useState } from 'react';
import { Button } from "@/app/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CallToAction  } from "@/app/components/CallToAction";
import { MessageSquare } from "lucide-react";
import { CareerConsultationForm } from '@/app/components/career-consultation-form';

interface ServicesPlenoPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ServicesPlenoPage({ onNavigate }: ServicesPlenoPageProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const features = [
    {
      title: "Currículo Estratégico com foco em impacto",
      description: "Transforme sua experiência em conquistas e resultados mensuráveis, posicionando seu currículo no nível pleno.",
    },
    {
      title: "LinkedIn Estratégico Alinhado às Vagas-Alvo",
      description: "Ajuste seu perfil para refletir sua senioridade real, atrair os recrutadores certos e gerar mais conversas qualificadas.",
    },
    {
      title: "Treinamento de LinkedIn em Grupo",
      description: "Use o LinkedIn como um canal ativo para melhorar suas candidaturas e ampliar o acesso a processos seletivos.",
    },
    {
      title: "Simulação de Entrevista Individual",
      description: "Ajuste seu discurso, corrija falhas invisíveis e prepare-se para perguntas difíceis, aumentando sua taxa de avanço e segurança nas entrevistas.",
    },
    {
      title: "Suporte WhatsApp (45 dias)",
      description: "Acompanhamento estratégico durante a fase mais crítica da busca, com ajustes finos e correções de rota baseadas no retorno do mercado.",
    },
  ];

  const plans = [
    {
      name: "Pleno",
      price: "R$ 629,90",
      period: "12x de R$ 52,49",
      link: "https://www.asaas.com/c/ti8gi68gacwlx6ka",
      features: [
        "Currículo Estratégico + LinkedIn Estratégico",
        "Treinamento em Grupo",
        "Simulação de Entrevista Individual",
        "Suporte por 45 dias",
      ],
      highlight: true,
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
              O Plano Pleno é para profissionais experientes que sentem que currículo, LinkedIn e entrevistas ainda não refletem seu verdadeiro nível de entrega.
              Aqui, o foco é reposicionar sua carreira e aumentar sua performance.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Nossa consultoria especializada ajuda você a navegar essas questões com estratégias comprovadas, desenvolvendo habilidades de liderança e construindo um plano de carreira sólido para alcançar suas ambições profissionais.
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Agendar Avaliação Gratuita
            </Button>
              <CareerConsultationForm
                open={isFormOpen}
                onOpenChange={setIsFormOpen}
              />
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

        {/* CTA Section */}
        <CallToAction onNavigate={onNavigate}/>
      </div>
    </div>
  );
}
