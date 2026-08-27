import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate?: (path: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  const navItems = [
    { label: "Home", value: "/" },
    {
      label: "Serviços",
      value: "/services",
      hasSubmenu: true,
      submenu: [
        { label: "Júnior", value: "/services-junior" },
        { label: "Pleno", value: "/services-pleno" },
        { label: "Sênior", value: "/services-senior" },
        { label: "JobHunter", value: "/services-jobhunter" },
      ],
    },
    { label: "Sobre Nós", value: "/about" },
  ];

const handleNavClick = (path: string) => {
  onNavigate?.(path);
  setServicesDropdownOpen(false);
  setMobileMenuOpen(false);
  setMobileServicesOpen(false);
};

  const isServicesActive = currentPath.startsWith("/services");

  return (
    <header className="bg-white border-b border-[#1a2e4a]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex flex-col shrink-0 cursor-pointer"
          >
            <h1 className="text-2xl text-[#1a2e4a]">With</h1>
            <p className="text-xs text-[#1a2e4a]/60">
              Consultoria de Carreira
            </p>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <div
                key={item.value}
                className={item.hasSubmenu ? "relative" : ""}
                onMouseEnter={() =>
                  item.hasSubmenu && setServicesDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.hasSubmenu && setServicesDropdownOpen(false)
                }
              >
                {item.hasSubmenu ? (
                  <div>
                    <button
                      className={`text-sm transition-colors flex items-center gap-1 ${
                        isServicesActive
                          ? "text-[#1fa6a8] font-medium"
                          : "text-[#1a2e4a]/70 hover:text-[#1a2e4a]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl border border-[#1a2e4a]/10 py-2 z-10">
                        {item.submenu?.map((subItem) => (
                          <button
                            key={subItem.value}
                            onClick={() => handleNavClick(subItem.value)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              currentPath === subItem.value
                                ? "text-[#1fa6a8] font-medium bg-[#1fa6a8]/5"
                                : "text-[#1a2e4a]/70 hover:bg-[#f2e8e0] hover:text-[#1a2e4a]"
                            }`}
                          >
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
                      currentPath === item.value
                        ? "text-[#1fa6a8] font-medium"
                        : "text-[#1a2e4a]/70 hover:text-[#1a2e4a]"
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden ml-auto p-2 text-[#1a2e4a]"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-[#1a2e4a]/10 bg-white">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.hasSubmenu ? (
                <div key={item.value}>
                  <button
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className={`w-full flex items-center justify-between py-3 text-base transition-colors ${
                      isServicesActive
                        ? "text-[#1fa6a8] font-medium"
                        : "text-[#1a2e4a]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {item.submenu?.map((subItem) => (
                        <button
                          key={subItem.value}
                          onClick={() => handleNavClick(subItem.value)}
                          className={`text-left py-2 text-sm transition-colors ${
                            currentPath === subItem.value
                              ? "text-[#1fa6a8] font-medium"
                              : "text-[#1a2e4a]/70"
                          }`}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left py-3 text-base transition-colors border-t border-[#1a2e4a]/5 first:border-t-0 ${
                    currentPath === item.value
                      ? "text-[#1fa6a8] font-medium"
                      : "text-[#1a2e4a]"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
