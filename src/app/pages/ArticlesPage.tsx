import { useState } from "react";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { articles as allArticles } from "@/app/data/articles";
import { openTypeformPopup } from "@/app/components/TypeformPopup";


  interface ArticlesPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ArticlesPage({ onNavigate }: ArticlesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const featuredArticle = allArticles.find((a) => a.id === "curriculo-destaca-2026")!;
  const articles = allArticles.filter((a) => a.id !== featuredArticle.id);
  const categories = ["Todos", ...Array.from(new Set(articles.map((a) => a.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2e8e0] to-white" id= "ArticlesPage">
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
                <Button onClick={() => onNavigate(`/articles/${featuredArticle.id}`)}
                  className="w-fit bg-gradient-to-r from-[#1fa6a8] to-[#45bab0] hover:from-[#1fa6a8]/90 hover:to-[#45bab0]/90 text-white">
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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
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
          {articles
            .filter((article) => selectedCategory === "Todos" || article.category === selectedCategory)
            .map((article) => (
            <div
              key={article.id}
              onClick={() => onNavigate(`/articles/${article.id}`)}
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
              onClick={(e) => { e.preventDefault(); openTypeformPopup(); }}>
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
