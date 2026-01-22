export function Footer() {
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
                <li><a href="#" className="hover:text-white transition">Mentoria Individual</a></li>
                <li><a href="#" className="hover:text-white transition">Transição de Carreira</a></li>
                <li><a href="#" className="hover:text-white transition">Preparação para Processos</a></li>
                <li><a href="#" className="hover:text-white transition">Personal Branding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Depoimentos</a></li>
                <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 With Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
  );
}