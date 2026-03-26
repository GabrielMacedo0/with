import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ServicesHomePage } from "@/app/pages/ServicesHomePage";
import { ServicesJuniorPage } from "@/app/pages/ServicesJuniorPage";
import { ServicesPlenoPage } from "@/app/pages/ServicesPlenoPage";
import { ServicesSeniorPage } from "@/app/pages/ServicesSeniorPage";
import { ServicesJobHunterPage } from "@/app/pages/ServicesJobHunterPage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ArticlesPage } from "@/app/pages/ArticlesPage";
import { ContactForm } from "@/app/pages/ContactForm";
import { ArticlesPageOne } from "@/app/pages/ArticlesPageOne";
import { Policy } from "@/app/pages/Policy";

// 🛠️ Interface para o TypeScript reconhecer o Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// 🎯 Componente Auxiliar de Redirecionamento com UTMs
// Ele transforma "/junior-v1-bio" em "/services-junior?utm_source=..."
function UtmRedirect({ destination, utms }: { destination: string; utms: string }) {
  return <Navigate to={`${destination}?${utms}`} replace />;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // 📊 Monitoramento Automático para o Google Analytics
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    
    // Envia o pageview sempre que a URL mudar (incluindo as UTMs)
    window.dataLayer.push({
      event: "pageview",
      page_path: location.pathname,
      page_search: location.search,
      page_location: window.location.href
    });
      if (location.search.includes("utm_")) {
    localStorage.setItem("utms", location.search);
  }
  }, [location]);

  const handleNavigate = (path: string, sectionId?: string) => {
    navigate(path);

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-1">
        <Routes>
          {/* 🏠 Rotas Originais do Seu Site */}
          <Route path="/" element={<ServicesHomePage onNavigate={handleNavigate} />} />
          <Route path="/services-junior" element={<ServicesJuniorPage onNavigate={handleNavigate} />} />
          <Route path="/services-pleno" element={<ServicesPlenoPage onNavigate={handleNavigate} />} />
          <Route path="/services-senior" element={<ServicesSeniorPage onNavigate={handleNavigate} />} />
          <Route path="/services-jobhunter" element={<ServicesJobHunterPage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/articles" element={<ArticlesPage onNavigate={handleNavigate} />} />
          <Route path="/articles/1" element={<ArticlesPageOne onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactForm onNavigate={handleNavigate} />} />
          <Route path="/policy" element={<Policy onNavigate={handleNavigate} />} />

          {/* 🔗 REDIRECIONAMENTOS DA PLANILHA (MAPEAMENTO DE UTMs) */}
          
          {/* Instagram Bio */}

                    <Route 
            path="/junior-v1" 
            element={<UtmRedirect destination="/" utms="utm_source=Instagram_Org&utm_campaign=JUNIORV2&utm_medium=Bio&utm_content=organico&utm_term=QUENTE" />} 
          />
          <Route 
            path="/junior-v1-bio" 
            element={<UtmRedirect destination="/" utms="utm_source=Instagram_Org&utm_campaign=JUNIORV2&utm_medium=Bio&utm_content=organico&utm_term=QUENTE" />} 
          />

          {/* Instagram Stories */}
          <Route 
            path="/junior-v1-stories" 
            element={<UtmRedirect destination="/" utms="utm_source=Instagram_Org&utm_campaign=JUNIORV2&utm_medium=Stories&utm_content=organico&utm_term=QUENTE" />} 
          />

          {/* Instagram Direct */}
          <Route 
            path="/junior-v1-direct" 
            element={<UtmRedirect destination="/" utms="utm_source=Instagram_Org&utm_campaign=JUNIORV2&utm_medium=Direct&utm_content=organico&utm_term=QUENTE" />} 
          />

          {/* LinkedIn Bio */}
          <Route 
            path="/junior-v1-linkedin-capa" 
            element={<UtmRedirect destination="/" utms="utm_source=LinkedIn_Org&utm_campaign=JUNIORV2&utm_medium=Bio&utm_content=organico&utm_term=QUENTE" />} 
          />

          {/* E-mail Automação Boas Vindas */}
          <Route 
            path="/junior-v1-email-boas-vindas" 
            element={<UtmRedirect destination="/" utms="utm_source=Automacao_Email&utm_campaign=JUNIORV2&utm_medium=Email_BoasVindas&utm_content=organico&utm_term=QUENTE" />} 
          />

          {/* Rota de fallback (Opcional): Se digitar algo errado, volta pra Home */}
          <Route path="/junior-v1-*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
