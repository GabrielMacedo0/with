import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "home" },
    {
      label: "Serviços",
      value: "services",
      hasSubmenu: true,
      submenu: [
        { label: "Júnior", value: "services-junior" },
        { label: "Pleno", value: "services-pleno" },
        { label: "Sênior", value: "services-senior" },
        { label: "JobHunter", value: "services-jobhunter" },
      ],
    },
    { label: "Sobre Nós", value: "about" },
    { label: "Artigos", value: "articles" },
  ];

  const handleNavClick = (value: string) => {
    onNavigate?.(value);
    setServicesDropdownOpen(false);
  };


  const isServicesActive = currentPage?.startsWith("services");

  return (
    <header className="bg-white border-b border-[#1a2e4a]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex flex-col shrink-0">
            <h1 className="text-2xl text-[#1a2e4a]">With</h1>
            <p className="text-xs text-[#1a2e4a]/60">
              Consultoria de Carreira
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <div
                key={item.value}
                className={item.hasSubmenu ? "relative" : ""}
                onMouseEnter={() => item.hasSubmenu && setServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasSubmenu && setServicesDropdownOpen(false)}
              >
                {item.hasSubmenu ? (
                  <div>
                    <button
                      className={`text-sm transition-colors flex items-center gap-1 ${
                        isServicesActive
                          ? "text-[#1fa6a8] font-medium"
                          : "text-[#1a2e4a]/70 hover:text-[#1a2e4a]"
                      }`}>
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl border border-[#1a2e4a]/10 py-2 z-10">
                        {item.submenu?.map((subItem) => (
                          <button
                            key={subItem.value}
                            onClick={() => handleNavClick(subItem.value)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              currentPage === subItem.value
                                ? "text-[#1fa6a8] font-medium bg-[#1fa6a8]/5"
                                : "text-[#1a2e4a]/70 hover:bg-[#f2e8e0] hover:text-[#1a2e4a]"
                            }`}>
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.value)}
                    className={`text-sm transition-colors ${
                      currentPage === item.value
                        ? "text-[#1fa6a8] font-medium"
                        : "text-[#1a2e4a]/70 hover:text-[#1a2e4a]"
                    }`}>
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}