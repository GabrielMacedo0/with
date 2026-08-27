import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FloatingWhatsAppButton } from "@/app/components/FloatingWhatsAppButton";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
const Policy = lazy(() => import("@/app/pages/Policy").then(m => ({ default: m.Policy })));
const AboutPage = lazy(() => import("@/app/pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactForm = lazy(() => import("@/app/pages/ContactForm").then(m => ({ default: m.ContactForm })));
const ArticlesPage = lazy(() => import("@/app/pages/ArticlesPage").then(m => ({ default: m.ArticlesPage })));
const ServicesHomePage = lazy(() => import("@/app/pages/ServicesHomePage").then(m => ({ default: m.ServicesHomePage })));
const ArticleDetailPage = lazy(() => import("@/app/pages/ArticleDetailPage").then(m => ({ default: m.ArticleDetailPage })));
const ServicesPlenoPage = lazy(() => import("@/app/pages/ServicesPlenoPage").then(m => ({ default: m.ServicesPlenoPage })));
const ServicesJuniorPage = lazy(() => import("@/app/pages/ServicesJuniorPage").then(m => ({ default: m.ServicesJuniorPage })));
const ServicesSeniorPage = lazy(() => import("@/app/pages/ServicesSeniorPage").then(m => ({ default: m.ServicesSeniorPage })));
const ServicesJobHunterPage = lazy(() => import("@/app/pages/ServicesJobHunterPage").then(m => ({ default: m.ServicesJobHunterPage })));

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
        <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {/* 🏠 Rotas Originais do Seu Site */}
          <Route path="/" element={<ServicesHomePage onNavigate={handleNavigate} />} />
          <Route path="/services-junior" element={<ServicesJuniorPage onNavigate={handleNavigate} />} />
          <Route path="/services-pleno" element={<ServicesPlenoPage onNavigate={handleNavigate} />} />
          <Route path="/services-senior" element={<ServicesSeniorPage onNavigate={handleNavigate} />} />
          <Route path="/services-jobhunter" element={<ServicesJobHunterPage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/articles" element={<ArticlesPage onNavigate={handleNavigate} />} />
          <Route path="/articles/:id" element={<ArticleDetailPage onNavigate={handleNavigate} />} />
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
          <Route path="/junior-v1-/*" element={<Navigate to="/" replace />} />

        </Routes>
        </Suspense>
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingWhatsAppButton />
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
