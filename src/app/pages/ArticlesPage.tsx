import { Button } from "@/app/components/ui/button";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";

interface ArticlesPageProps {
  onNavigate?: (page: string) => void;
}

export function ArticlesPage({ onNavigate }: ArticlesPageProps) {
  const handleNavigate = (sectionId: string) => {
    sessionStorage.setItem("scrollTo", sectionId);
    window.location.assign("/");
  };
  const featuredArticle = {
    title: "Como Criar um Currículo que se Destaca em 2026",
    excerpt: "Descubra as estratégias mais eficazes para criar um currículo que chama atenção de recrutadores e passa pelos sistemas ATS.",
    image: "https://images.unsplash.com/photo-1767190041030-f2f3a6654c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwYXJ0aWNsZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg5NTc0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "15 de Janeiro, 2026",
    readTime: "8 min",
    category: "Currículo",
  };

  const articles = [
    {
      title: "10 Dicas para Otimizar seu Perfil no LinkedIn",
      excerpt: "Aprenda a transformar seu perfil do LinkedIn em uma ferramenta poderosa para atrair oportunidades.",
      image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY4OTE0ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "12 de Janeiro, 2026",
      readTime: "6 min",
      category: "LinkedIn",
    },
    {
      title: "Preparação para Entrevistas: O Guia Completo",
      excerpt: "Tudo o que você precisa saber para se preparar e ter sucesso em qualquer tipo de entrevista de emprego.",
      image: "https://images.unsplash.com/photo-1758520144417-e1c432042dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcmVwYXJhdGlvbnxlbnwxfHx8fDE3Njg5NTc0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "8 de Janeiro, 2026",
      readTime: "10 min",
      category: "Entrevistas",
    },
    {
      title: "Como Fazer uma Transição de Carreira Bem-Sucedida",
      excerpt: "Estratégias comprovadas para mudar de área ou setor sem perder momentum na sua carreira.",
      image: "https://images.unsplash.com/photo-1603195827187-459ab02554a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY4OTU3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "5 de Janeiro, 2026",
      readTime: "7 min",
      category: "Transição",
    },
    {
      title: "Personal Branding: Construindo sua Marca Profissional",
      excerpt: "Aprenda a se posicionar como especialista e atrair as oportunidades certas através do personal branding.",
      image: "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODk0NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2 de Janeiro, 2026",
      readTime: "9 min",
      category: "Branding",
    },
    {
      title: "Networking Estratégico: Como Fazer da Forma Certa",
      excerpt: "Descubra como construir relacionamentos profissionais autênticos que geram oportunidades reais.",
      image: "https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4OTU3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "28 de Dezembro, 2025",
      readTime: "5 min",
      category: "Networking",
    },
    {
      title: "Salário: Como Negociar e Conseguir o que Você Merece",
      excerpt: "Técnicas e estratégias para negociar salário com confiança e conseguir a remuneração adequada.",
      image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY4OTE0ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "22 de Dezembro, 2025",
      readTime: "8 min",
      category: "Negociação",
    },
  ];

  const categories = [
    "Todos",
    "Currículo",
    "LinkedIn",
    "Entrevistas",
    "Transição",
    "Branding",
    "Networking",
    "Negociação",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2e8e0] to-white" id= "ArticlesPage">
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
            Artigos e Recursos
          </h1>
          
          <p className="text-xl text-[#1a2e4a]/70 max-w-3xl" style={{ fontFamily: 'var(--font-body)' }}>
            Aprenda com nossos especialistas através de conteúdo prático e atualizado sobre desenvolvimento de carreira
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#1a2e4a]/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f5424a] text-white px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block w-fit mb-4">
                  <span className="text-[#1fa6a8] font-medium text-sm bg-[#1fa6a8]/10 px-3 py-1 rounded-full" style={{ fontFamily: 'var(--font-body)' }}>
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {featuredArticle.title}
                </h2>
                <p className="text-[#1a2e4a]/70 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#1a2e4a]/60 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{featuredArticle.readTime} de leitura</span>
                  </div>
                </div>
                <Button className="w-fit bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white">
                  Ler Artigo Completo
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] text-white"
                    : "bg-white text-[#1a2e4a]/70 hover:bg-[#f2e8e0] border border-[#1a2e4a]/10"
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer border border-[#1a2e4a]/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-[#1a2e4a] px-3 py-1 rounded-full text-xs font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2e4a] mb-3 group-hover:text-[#1fa6a8] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {article.title}
                </h3>
                <p className="text-[#1a2e4a]/70 mb-4 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#1a2e4a]/60" style={{ fontFamily: 'var(--font-body)' }}>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] rounded-3xl p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Receba Novos Artigos Direto no seu E-mail
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Cadastre-se em nossa newsletter e receba semanalmente conteúdo exclusivo sobre desenvolvimento de carreira.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-3 rounded-full text-[#1a2e4a] focus:outline-none focus:ring-2 focus:ring-white"
              style={{ fontFamily: 'var(--font-body)' }}
            />
            <Button className="bg-white text-[#1fa6a8] hover:bg-white/90 rounded-full px-8">
              Inscrever-se
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#e5d9d1] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a2e4a] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Precisa de Ajuda Personalizada?
          </h2>
          <p className="text-xl text-[#1a2e4a]/70 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Nossos artigos são ótimos, mas nada substitui uma consultoria personalizada. Agende uma conversa gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white"
              onClick={() => handleNavigate("contato")}>
              Agendar Consulta Gratuita
            </Button>
            <Button className="bg-white text-[#1a2e4a] border-2 border-[#1a2e4a]/20 hover:bg-white/50"
                onClick={() => handleNavigate("ebook")}>
                Baixar E-book Grátis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
