import { Target, Users, Award, TrendingUp, ArrowLeft } from "lucide-react";
import { CallToAction  } from "@/app/components/CallToAction";
import { useState } from 'react';
import { MessageSquare } from "lucide-react";
import { CareerConsultationForm } from '@/app/components/career-consultation-form';
import { Button } from "@/app/components/ui/button";
import Stephany  from "@/assets/Stephany.jpg";
import Matheus  from "@/assets/Matheus.jpg";
import Brina  from "@/assets/Brina.jpg";
import Guilherme  from "@/assets/Guilherme.jpg";
import Vitor  from "@/assets/Vitor.png";
import Macedo  from "@/assets/Macedo.jpg";
import Aline  from "@/assets/Aline.png";

interface AboutPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Transformar carreiras com estratégias personalizadas e foco em execução, conectando talentos às oportunidades que realmente fazem sentido para seus objetivos e propósito profissional.",
    },
    {
      icon: Users,
      title: "Visão",
      description: "Ser referência nacional em reposicionamento estratégico de carreira, autoridade digital e geração real de entrevistas, ampliando nossa atuação para o mercado internacional.",
    },
    {
      icon: Award,
      title: "Valores",
      description: "Acreditamos que a informação transforma carreiras e que é nosso dever compartilhar aquilo que o mercado muitas vezes não revela.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Acreditamos que cada profissional tem uma trajetória única e merece uma estratégia personalizada, construída com disciplina, foco e visibilidade orientada a resultados.",
    },
  ];

  const team = [
    {
      image: Stephany,
      name: "Stephany Borowiec",
      role: "Founder e Diretora Executiva (CEO)",
      bio: "Profissional com mais de 12 anos de experiência em Recursos Humanos e desenvolvimento profissional, com atuação em multinacionais e forte expertise em estratégia de carreira, posicionamento, recrutamento e empregabilidade.",
    },
    {
      image: Matheus,
      name: "Matheus Procópio",
      role: "Co-founder e Diretor de Marketing e Vendas (CMO/Head Comercial)",
      bio: "Responsável pela estratégia comercial e de posicionamento da With, com foco em crescimento, comunicação, processos de aquisição e relacionamento com clientes. Atua na construção de estratégias práticas para aumentar visibilidade, gerar oportunidades e acelerar resultados.",
    },
    {
      image: Brina,
      name: "Gabriel Brina",
      role: "Jobhunter Operations",
      bio: "Responsável pela gestão dos clientes do Jobhunter, garantindo organização, execução e acompanhamento do processo ponta a ponta. Atua em parceria direta com a Stephany na condução estratégica dos casos, garantindo consistência, qualidade e evolução do cliente ao longo do programa.",
    },
    {
      image: Guilherme,
      name: "Guilherme Domingues",
      role: "Executivo de Desenvolvimento de Negócios (Business Development Executive)",
      bio: "Atua no time comercial da With, com foco em relacionamento, qualificação estratégica e condução consultiva de oportunidades. Responsável por apoiar o crescimento da empresa com abordagem orientada a valor e resultado.",
    },
    {
      image: Vitor,
      name: "Vitor Hugo",
      role: "Coach de Entrevistas",
      bio: "Responsável pela estrutura digital da With, atuando com tráfego pago, CRM, automações, páginas e funis de conversão. Trabalha para transformar demanda em oportunidades reais, com processos, dados e previsibilidade comercial.",
    },
    {
      image: Macedo,
      name: "Gabriel Macedo",
      role: "Especialista em Tecnologia e Infraestrutura (IT & Systems Specialist)",
      bio: "Responsável pelo suporte tecnológico e infraestrutura da With, garantindo estabilidade, organização de ferramentas, integrações e segurança operacional para que o time consiga executar com fluidez.",
    },
    {
      image: Aline,
      name: "Aline Santos",
      role: "Atendimento e Sucesso do Cliente (Customer Success)",
      bio: "Responsável pela experiência do cliente na With, com foco em acolhimento, organização da jornada, acompanhamento e suporte. Atua para garantir clareza, alinhamento e excelência em cada etapa do processo.",
    },
  ];

  const stats = [
    { number: "2.800+", label: "Clientes Atendidos" },
    { number: "85%", label: "Taxa de Sucesso" },
    { number: "6+", label: "Anos de Experiência" },
    { number: "4.8/5", label: "Avaliação Média" },
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Sobre Nós
          </h1>
          
          <p className="text-xl text-[#1a2e4a]/70 max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
            Transformando carreiras com estratégia personalizada, experiência de mercado e foco em resultados reais.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2e4a] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Nossa História
            </h2>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              A With nasceu de um sonho da Stephany: fazer diferença de verdade na vida das pessoas. No meio da pandemia de COVID-19, ela e seu sócio viram uma demanda explodir.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Milhares de profissionais ficaram desamparados. E, ao mesmo tempo, empresas aceleraram substituições, mudanças de estrutura e contratações mais criteriosas.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Foi nesse cenário que a With se consolidou. Ao longo dos anos, desenvolvemos metodologias testadas e aprimoradas na prática, combinando estratégia com as melhores práticas do mercado para fazer o perfil chegar onde importa, inclusive passando por plataformas ATS, que usam filtros e inteligência artificial.
            </p>

            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Hoje, a gente tem orgulho de já ter ajudado milhares de profissionais, de diferentes níveis e áreas, a retomarem o controle da própria carreira e conquistarem oportunidades mais alinhadas com o que merecem.
            </p>
            
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white"
            >
              <MessageSquare className="w-4 h-4" />
                Agendar Conversa
            </Button>
              <CareerConsultationForm
                open={isFormOpen}
                onOpenChange={setIsFormOpen}
              />
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODk0NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nossa Equipe"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] rounded-3xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{stat.number}</div>
                <div className="text-white/80" style={{ fontFamily: 'var(--font-body)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a2e4a] text-center mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Nossos Valores
          </h2>
          <p className="text-center text-[#1a2e4a]/70 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Os princípios que guiam nosso trabalho e relacionamento com clientes
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1fa6a8] to-[#45bab0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-[#1a2e4a] mb-2 text-xl" style={{ fontFamily: 'var(--font-heading)' }}>{value.title}</h3>
                  <p className="text-[#1a2e4a]/70" style={{ fontFamily: 'var(--font-body)' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a2e4a] text-center mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Nossa Equipe
          </h2>
          <p className="text-center text-[#1a2e4a]/70 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Conheça os especialistas que vão ajudar você a transformar sua carreira
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-[#1a2e4a]/10 text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#1fa6a8] shadow-md"
                />
              </div>
                <h3 className="text-xl font-bold text-[#1a2e4a] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{member.name}</h3>
                <p className="text-[#1fa6a8] font-medium mb-3" style={{ fontFamily: 'var(--font-body)' }}>{member.role}</p>
                <p className="text-[#1a2e4a]/70" style={{ fontFamily: 'var(--font-body)' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#e5d9d1] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Pronto para Transformar sua Carreira?
          </h2>
          <p className="text-xl text-[#1a2e4a]/70 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos profissionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white cursor-pointer"
            >
            <MessageSquare className="w-4 h-4" />
              Agendar Conversa
          </Button>
            <CareerConsultationForm
              open={isFormOpen}
              onOpenChange={setIsFormOpen}
            />
          <Button className="bg-white text-[#1a2e4a] border-2 border-[#1a2e4a]/20 hover:bg-white/50"
              onClick={() => onNavigate && onNavigate("home", "services")}>
              Ver Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
