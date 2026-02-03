
// Defina a interface para o TypeScript não reclamar
  interface FooterProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
    const handleNavigate = (sectionId: string) => {
    sessionStorage.setItem("scrollTo", sectionId);
    window.location.assign("/");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">With Consultoria</h3>
              <p className="text-gray-400 text-sm">
                Consultoria especializada em desenvolvimento e transição de carreira.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate("services-junior"); }}
                className="hover:text-white transition">Junior</a></li>
                <li><a href="#" 
                  onClick={(e) => { e.preventDefault(); onNavigate("services-pleno"); }}
                  className="hover:text-white transition">Pleno</a></li>
                <li><a href="#" 
                  onClick={(e) => { e.preventDefault(); onNavigate("services-senior"); }}
                  className="hover:text-white transition">Sênior</a></li>
                <li><a href="#" 
                  onClick={(e) => { e.preventDefault(); onNavigate("services-jobhunter"); }}
                  className="hover:text-white transition">Job Hunter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        onNavigate("home", "sobre"); // "home" é a página, "contato" é o ID
                      }} className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        onNavigate("home", "blog"); 
                      }} className="hover:text-white transition">Blog</a></li>
                <li><a href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        onNavigate("home", "depoimentos"); 
                      }} className="hover:text-white transition">Depoimentos</a></li>
                <li><a href="#" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        onNavigate("home", "contato"); 
                      }} className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.linkedin.com/in/stephany-borowiec/" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/withconsultoria/" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 With Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
  );
}