interface AuthorBioProps {
  name: string;
  bio: string;
  avatarUrl: string;
}

export function AuthorBio({ name, bio, avatarUrl }: AuthorBioProps) {
  return (
    <div className="bg-[#f2e8e0] rounded-lg p-6 flex items-start gap-4">
      <img 
        src={avatarUrl} 
        alt={name}
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
      />
      <div>
        <h3 className="font-['Varela_Round'] text-lg text-[#1a2e4a] mb-2">
          Sobre {name}
        </h3>
        <p className="font-['Quicksand'] text-sm text-gray-700">
          {bio}
        </p>
      </div>
    </div>
  );
}
