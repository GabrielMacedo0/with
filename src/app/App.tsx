import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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

function AppContent() {
  const navigate = useNavigate();

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