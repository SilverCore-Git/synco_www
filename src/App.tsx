import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardPlayground from "./components/DashboardPlayground";
import ModelsCatalog from "./components/ModelsCatalog";
import ApiSnippet from "./components/ApiSnippet";
import BenchmarksGrid from "./components/BenchmarksGrid";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true); // Setting default dark mode look
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Sync state with HTML dark class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Section Observer on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "playground", "models", "developers", "benchmarks"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 78;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans antialiased transition-colors duration-200 dark:bg-[#050505] dark:text-[#e0e0e0] selection:bg-primary-brand selection:text-white">
      
      {/* Prime Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Container Section Flow */}
      <main className="relative">
        
        {/* Module 1: The Hero Context Network Animation */}
        <Hero scrollToSection={scrollToSection} />

        {/* Brand Banner / Divider Message */}
        <div className="border-b border-mistral-border-light bg-[#faf9f5] py-5 dark:border-mistral-border-dark dark:bg-[#050505]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-around gap-6 text-center font-mono text-[10px] text-zinc-405 uppercase tracking-widest dark:text-zinc-500">
              <span className="flex items-center space-x-1.5 hover:text-primary-brand transition-colors cursor-default">
                <span>🔐 CONFORME PROTOCOLE SEC-OPS</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5 hover:text-primary-brand transition-colors cursor-default">
                <span>🇪🇺 SECURISE EN EUROPE</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5 hover:text-primary-brand transition-colors cursor-default">
                <span>⚡ DEPLOIEMENT ZERO-FRICTION</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5 hover:text-primary-brand transition-colors cursor-default">
                <span>⚡ LATENCE &lt;14ms</span>
              </span>
            </div>
          </div>
        </div>

        {/* Module 2: The Synco Sandbox Playground / Console */}
        <DashboardPlayground />

        {/* Module 3: Models Spectra Specification Cards */}
        <ModelsCatalog />

        {/* Module 4: Code Block Snippet Switcher */}
        <ApiSnippet />

        {/* Module 5: Comparison graphics and bento blocks */}
        <BenchmarksGrid />

      </main>

      {/* Structural Minimalist Footer */}
      <Footer />

    </div>
  );
}
