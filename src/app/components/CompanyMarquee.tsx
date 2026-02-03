import { useEffect, useRef } from "react";
import Bauducco from "@/assets/logos/Logo_Bauducco.svg";
import Bradesco from "@/assets/logos/Logo_Bradesco.svg";
import Claro from "@/assets/logos/Logo_Claro.svg";
import Dhl from "@/assets/logos/Logo_Dhl.svg";
import Gm from "@/assets/logos/Logo_Gm.svg";
import Gympass from "@/assets/logos/Logo_Gympass.svg";
import Heineken from "@/assets/logos/Logo_Heineken.svg";
import Ibm from "@/assets/logos/Logo_Ibm.svg";
import Localiza from "@/assets/logos/Logo_Localiza.svg";
import Byd from "@/assets/logos/Logo_Byd.svg";
import MercadoLivre from "@/assets/logos/Logo_Mercado_Livre.svg";
import Natura from "@/assets/logos/Logo_Natura.svg";
import Nestle from "@/assets/logos/Logo_Nestle.svg";
import Oracle from "@/assets/logos/Logo_Oracle.svg";
import RedeDor from "@/assets/logos/Logo_RedeDor.svg";
import Salesforce from "@/assets/logos/Logo_Salesforce.svg";
import Santander from "@/assets/logos/Logo_Santander.svg";
import Sicredi from "@/assets/logos/Logo_Sicredi.svg";
import Simpar from "@/assets/logos/Logo_Simpar.svg";
import Votorantim from "@/assets/logos/Logo_Votorantim.svg";

export function CompanyMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Array de empresas com logos estilizados
  const companies: Company [] = [
    { name: 'Bauducco', logo: Bauducco},
    { name: 'Bradesco', logo: Bradesco},
    { name: 'Claro', logo: Claro},
    { name: 'Dhl', logo: Dhl},
    { name: 'Gm', logo: Gm},
    { name: 'Gympass', logo: Gympass},
    { name: 'Heineken', logo: Heineken},
    { name: 'Ibm', logo: Ibm},
    { name: 'Localiza', logo: Localiza},
    { name: 'Byd', logo: Byd},
    { name: 'MercadoLivre', logo: MercadoLivre},
    { name: 'Natura', logo: Natura},
    { name: 'Nestle', logo: Nestle},
    { name: 'Oracle', logo: Oracle},
    { name: 'RedeDor', logo: RedeDor},
    { name: 'Salesforce', logo: Salesforce},
    { name: 'Santander', logo: Santander},
    { name: 'Sicredi', logo: Sicredi},
    { name: 'Simpar', logo: Simpar},
    { name: 'Votorantim', logo: Votorantim},
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
    let lastTime = performance.now();
    const speed = 20; // pixels POR SEGUNDO (bem mais intuitivo)

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000; // segundos
      lastTime = currentTime;

      x -= speed * deltaTime;

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
                key={`second-${index}`}
                className="flex items-center justify-center min-w-[160px] h-20 px-4 rounded-lg"
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