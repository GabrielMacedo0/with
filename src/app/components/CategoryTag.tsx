interface CategoryTagProps {
  children: React.ReactNode;
  color?: 'aqua' | 'purple' | 'watermelon' | 'navy';
}

export function CategoryTag({ children, color = 'aqua' }: CategoryTagProps) {
  const colorStyles = {
    aqua: "bg-[#1fa6a8] text-white",
    purple: "bg-[#387ad6] text-white",
    watermelon: "bg-[#f5424a] text-white",
    navy: "bg-[#1a2e4a] text-white"
  };

  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-['Quicksand'] font-semibold ${colorStyles[color]}`}>
      {children}
    </span>
  );
}
