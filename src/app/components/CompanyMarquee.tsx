import { useEffect, useRef } from "react";

export function CompanyMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Array de empresas com logos estilizados
  const companies: Company [] = [
    { name: 'Magazine Luiza', logo: '../../../logos/Logo_Magazineluiza.svg'},
    { name: 'Ambev', logo: '../../../logos/Logo_Ambev.svg'},
    { name: 'Natura', logo: '../../../logos/Logo_Natura.svg'},
    { name: 'Itau', logo: '../../../logos/Logo_Itau.svg'},
    { name: 'Bradesco', logo: '../../../logos/Logo_Bradesco.svg'},
    { name: 'Nubank', logo: '../../../logos/Logo_Nubank.svg'},
    { name: 'Google', logo: '../../../logos/Logo_Google.svg'},
    { name: 'Microsoft', logo: '../../../logos/Logo_Microsoft.svg'},
    { name: 'Mercado Livre', logo: '../../../logos/Logo_Mercado_Livre.svg'},
    { name: 'iFood', logo: '../../../logos/Logo_Ifood.svg'},
    { name: 'PagBank', logo: '../../../logos/Logo_Pagbank.svg'},
    { name: 'Santander', logo: '../../../logos/Logo_Santander.svg'},
    { name: 'Vivo', logo: '../../../logos/Logo_Vivo.svg'},
    { name: 'Claro', logo: '../../../logos/Logo_Claro.svg'},
    { name: 'TIM', logo: '../../../logos/Logo_Tim.svg'},
    { name: 'Petrobras', logo: '../../../logos/Logo_Petrobras.svg'},
    { name: 'Vale', logo: '../../../logos/Logo_Vale.svg'},
    { name: 'JBS', logo: '../../../logos/Logo_JBS.svg'},
    { name: 'B3', logo: '../../../logos/Logo_B3.svg'},
    { name: 'XP Inc', logo: '../../../logos/Logo_XP_inc.svg'},
  ];

  interface Company {
    name: string;
    logo: string;
  }

    useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    const speed = 1.4;

    const animate = () => {
      x -= speed;

      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#f2e8e0' }}>
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-center mb-2" style={{ color: '#1a2e4a', fontFamily: "'Varela Round', sans-serif" }}>
          EMPRESAS ONDE CLIENTES FORAM RECOLOCADOS
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays nas bordas - usando cores da marca */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to right, #f2e8e0, transparent)' }}></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to left, #f2e8e0, transparent)' }}></div>
        
        {/* Container do carrossel */}
        <div className="marquee-track" ref={trackRef}>
          {/* Primeira sequência de logos */}
          <div  className="marquee-group">
            {companies.map((company, index) => (
              <div 
                key={`first-${index}`}
                className="flex items-center justify-center min-w-[160px] h-20 px-4 rounded-lg"
                style={{ 
                  backgroundColor: 'white',
                }}
              >
                <div className="logo-wrapper">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="logo-marquee"
                    loading="lazy"
                  />
                </div>
                </div>
            ))}
          </div>
          
          {/* Segunda sequência de logos (duplicada para loop contínuo) */}
          <div className="marquee-group" aria-hidden="true">
            {companies.map((company, index) => (
              <div 
                key={`second-${index}`}
                className="flex items-center justify-center min-w-[160px] h-20 px-4 rounded-lg"
                style={{ 
                  backgroundColor: 'white',
                }}
              >
                <div className="logo-wrapper">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="logo-marquee"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}