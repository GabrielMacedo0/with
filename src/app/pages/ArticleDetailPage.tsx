import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthorBio } from "@/app/components/AuthorBio";
import { CategoryTag } from "@/app/components/CategoryTag";
import { CallToAction } from "@/app/components/CallToAction";
import { TableOfContents } from "@/app/components/TableOfContents";
import { RelatedArticleCard } from "@/app/components/RelatedArticleCard";
import { getArticleById, getRelatedArticles } from "@/app/data/articles";

interface ArticleDetailPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

// Converte **negrito** dentro de um texto em <strong>, mantendo o resto como texto normal.
function renderRichText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function ArticleDetailPage({ onNavigate }: ArticleDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  // Sempre que o artigo mudar (ex: clicou em um relacionado), volta pro topo da página.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
            Artigo não encontrado
          </h1>
          <p className="font-['Quicksand'] text-gray-600 mb-8">
            O artigo que você procura não existe ou foi removido.
          </p>
          <button
            onClick={() => onNavigate("/articles")}
            className="bg-[#1fa6a8] text-white px-6 py-3 rounded-full font-['Quicksand'] font-semibold"
          >
            Voltar para Artigos
          </button>
        </div>
      </div>
    );
  }

  const tocItems = article.sections
    .filter((section) => section.heading)
    .map((section) => ({ id: section.id, title: section.heading }));

  const relatedArticles = getRelatedArticles(article);

  return (
    <div className="min-h-screen bg-white">
      {/* Article Hero Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <button
              onClick={() => onNavigate("/articles")}
              className="flex items-center gap-2 text-[#1a2e4a]/70 hover:text-[#1a2e4a] mb-6 transition-colors font-['Quicksand']"
            >
              ← Voltar para Artigos
            </button>

            <CategoryTag color={article.categoryColor ?? "aqua"}>
              {article.category}
            </CategoryTag>

            <h1 className="font-['Varela_Round'] text-4xl md:text-5xl text-[#1a2e4a] mt-6 mb-4">
              {article.title}
            </h1>

            <p className="font-['Quicksand'] text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-['Quicksand'] font-semibold text-[#1a2e4a]">
                  {article.author.name}
                </div>
                <div className="font-['Quicksand'] text-sm text-gray-600">
                  {article.date} · {article.readTime} de leitura
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Body with Sidebar */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article className="max-w-3xl">
              {article.sections.map((section) => (
                <div id={section.id} className="mb-12" key={section.id}>
                  {section.heading && (
                    <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-['Quicksand'] text-gray-700 leading-relaxed mb-4"
                    >
                      {renderRichText(paragraph)}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                      {section.list.map((item, i) => (
                        <li className="flex items-start" key={i}>
                          <span className="text-[#1fa6a8] mr-2">{i + 1}.</span>
                          <span>{renderRichText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.quote && (
                    <blockquote className="border-l-4 border-[#1fa6a8] pl-6 py-4 my-8 bg-[#f2e8e0] rounded-r-lg">
                      <p className="font-['Quicksand'] text-lg text-[#1a2e4a] italic">
                        {renderRichText(section.quote.text)}
                      </p>
                      {section.quote.cite && (
                        <cite className="font-['Quicksand'] text-sm text-gray-600 not-italic mt-2 block">
                          — {section.quote.cite}
                        </cite>
                      )}
                    </blockquote>
                  )}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-[320px] space-y-8">
              {tocItems.length > 0 && <TableOfContents items={tocItems} />}

              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="font-['Varela_Round'] text-xl text-[#1a2e4a] mb-4">
                    Artigos Relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <RelatedArticleCard
                        key={related.id}
                        title={related.title}
                        excerpt={related.excerpt}
                        category={related.category}
                        imageUrl={related.image}
                        readTime={`${related.readTime} de leitura`}
                        onClick={() => onNavigate(`/articles/${related.id}`)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

      {/* Author Bio */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[720px] mx-auto space-y-8">
            <AuthorBio
              name={article.author.name}
              bio={article.author.bio}
              avatarUrl={article.author.avatar}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
