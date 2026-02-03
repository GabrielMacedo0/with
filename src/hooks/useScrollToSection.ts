import { useEffect } from "react";

export function useScrollToSection() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTo");
    if (!target) return;

    const interval = setInterval(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        sessionStorage.removeItem("scrollTo");
        clearInterval(interval);
      }
    }, 110); // menor = mais rápido, maior = mais suave

    return () => clearInterval(interval);
  }, []);
}
