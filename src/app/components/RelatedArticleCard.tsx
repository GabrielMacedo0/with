import { CategoryTag } from './CategoryTag';

interface RelatedArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  readTime: string;
  onClick?: () => void; 
}

export function RelatedArticleCard({ title, excerpt, category, imageUrl, readTime }: RelatedArticleCardProps) {
  return (
    <article className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <CategoryTag color="aqua">{category}</CategoryTag>
        <h3 className="font-['Varela_Round'] text-lg mt-3 mb-2 text-[#1a2e4a]">
          {title}
        </h3>
        <p className="font-['Quicksand'] text-sm text-gray-600 mb-3">
          {excerpt}
        </p>
        <div className="font-['Quicksand'] text-xs text-gray-500">
          {readTime}
        </div>
      </div>
    </article>
  );
}
