import { useEffect, useRef } from "react";
import Magazineluiza from "@/assets/logos/Logo_Magazineluiza.svg";
import Ambev from "@/assets/logos/Logo_Ambev.svg";
import Natura from "@/assets/logos/Logo_Natura.svg";
import Itau from "@/assets/logos/Logo_Itau.svg";
import Bradesco from "@/assets/logos/Logo_Bradesco.svg";
import Nubank from "@/assets/logos/Logo_Nubank.svg";
import Google from "@/assets/logos/Logo_Google.svg";
import Microsoft from "@/assets/logos/Logo_Microsoft.svg";
import MercadoLivre from "@/assets/logos/Logo_Mercado_Livre.svg";
import Ifood from "@/assets/logos/Logo_Ifood.svg";
import Pagbank from "@/assets/logos/Logo_Pagbank.svg";
import Santander from "@/assets/logos/Logo_Santander.svg";
import Vivo from "@/assets/logos/Logo_Vivo.svg";
import Claro from "@/assets/logos/Logo_Claro.svg";
import Tim from "@/assets/logos/Logo_Tim.svg";
import Petrobras from "@/assets/logos/Logo_Petrobras.svg";
import Vale from "@/assets/logos/Logo_Vale.svg";
import JBS from "@/assets/logos/Logo_JBS.svg";
import B3 from "@/assets/logos/Logo_B3.svg";
import XP from "@/assets/logos/Logo_XP_inc.svg";

export function CompanyMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Array de empresas com logos estilizados
  const companies: Company [] = [
    { name: 'Magazine Luiza', logo: Magazineluiza},
    { name: 'Ambev', logo: Ambev},
    { name: 'Natura', logo: Natura},
    { name: 'Itau', logo: Itau},
    { name: 'Bradesco', logo: Bradesco},
    { name: 'Nubank', logo: Nubank},
    { name: 'Google', logo: Google},
    { name: 'Microsoft', logo: Microsoft},
    { name: 'Mercado Livre', logo: MercadoLivre},
    { name: 'iFood', logo: Ifood},
    { name: 'PagBank', logo: Pagbank},
    { name: 'Santander', logo: Santander},
    { name: 'Vivo', logo: Vivo},
    { name: 'Claro', logo: Claro},
    { name: 'TIM', logo: Tim},
    { name: 'Petrobras', logo: Petrobras},
    { name: 'Vale', logo: Vale},
    { name: 'JBS', logo: JBS},
    { name: 'B3', logo: B3},
    { name: 'XP Inc', logo: XP},
  ];

  interface Company {
    name: string;
    logo: string;
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstGroup = track.children[0] as HTMLElement;
    let x = 0;
    const speed = 0.6;

    const animate = () => {
      x -= speed;

      // quando o 1º grupo saiu totalmente da tela
      if (x <= -firstGroup.scrollWidth) {
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