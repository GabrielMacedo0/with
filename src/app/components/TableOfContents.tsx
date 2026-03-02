interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-6 sticky top-6">
      <h3 className="font-['Varela_Round'] text-lg text-[#1a2e4a] mb-4">
        Índice
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className="font-['Quicksand'] text-sm text-gray-600 hover:text-[#1fa6a8] transition-colors block"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
