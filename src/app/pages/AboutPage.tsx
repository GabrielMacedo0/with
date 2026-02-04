import { Button } from "@/app/components/ui/button";
import { Target, Users, Award, TrendingUp, ArrowLeft } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Capacitar profissionais a alcançarem seus objetivos de carreira através de consultoria personalizada e estratégica.",
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Oferecemos suporte individual focado nas necessidades únicas de cada cliente para garantir resultados reais.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Mantemos os mais altos padrões de qualidade em todos os nossos serviços e processos de consultoria.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Acreditamos no desenvolvimento contínuo, tanto dos nossos clientes quanto da nossa equipe.",
    },
  ];

  const team = [
    {
      name: "Ana Silva",
      role: "Consultora Sênior de Carreira",
      bio: "15+ anos de experiência em RH e desenvolvimento profissional em multinacionais.",
    },
    {
      name: "Carlos Mendes",
      role: "Especialista em LinkedIn",
      bio: "Expert em personal branding digital com mais de 5.000 profissionais assessorados.",
    },
    {
      name: "Marina Costa",
      role: "Coach de Entrevistas",
      bio: "Ex-recrutadora executiva, especializada em preparação para processos seletivos.",
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
            Transformando carreiras através de consultoria estratégica e personalizada desde 2020
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
              Fundada em 2020, a Consultoria de Carreira nasceu da necessidade de oferecer orientação profissional de qualidade e acessível para profissionais em todos os estágios de suas carreiras.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Ao longo dos anos, desenvolvemos metodologias comprovadas que combinam as melhores práticas de recursos humanos, coaching e desenvolvimento profissional para entregar resultados reais.
            </p>
            
            <p className="text-[#1a2e4a]/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Hoje, somos orgulhosos de ter ajudado mais de 2.800 profissionais a alcançarem seus objetivos de carreira, desde a primeira oportunidade até transições executivas.
            </p>
            
            <Button className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white"
              onClick={(e) => { e.preventDefault(); onNavigate("contact");}}>
              Agendar Conversa
            </Button>
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-[#1a2e4a]/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1fa6a8] to-[#45bab0] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name.charAt(0)}
                  </span>
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
            <Button className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white"
                onClick={(e) => { e.preventDefault(); onNavigate("services"); }}>
                Agendar Consulta Gratuita
            </Button>
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
