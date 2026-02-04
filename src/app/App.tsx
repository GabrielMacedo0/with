import { useState } from "react";
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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string, sectionId?: string) => {
    setCurrentPage(page);

    if (sectionId) {
      // Usamos um pequeno delay (0ms ou 100ms) para garantir que o React 
      // termine de renderizar a Home antes de procurarmos o ID
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <ServicesHomePage onNavigate={handleNavigate} />;
      case "services-junior":
        return <ServicesJuniorPage onNavigate={handleNavigate} />;
      case "services-pleno":
        return <ServicesPlenoPage onNavigate={handleNavigate} />;
      case "services-senior":
        return <ServicesSeniorPage onNavigate={handleNavigate} />;
      case "services-jobhunter":
        return <ServicesJobHunterPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "articles":
        return <ArticlesPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactForm onNavigate={handleNavigate} />;
      default:
        return <ServicesHomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate}/>
    </div>
  );
}