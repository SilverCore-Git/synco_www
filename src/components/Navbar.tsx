import { Sun, Moon, ArrowUpRight, Terminal, Globe } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ darkMode, setDarkMode, activeSection, scrollToSection }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-mistral-border-light bg-[#faf9f5]/85 py-3 transition-colors duration-200 dark:border-mistral-border-dark dark:bg-[#050505]/95 mistral-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center space-x-3">
          <a href="#" className="group flex items-center space-x-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-sm border border-primary-brand/35 bg-primary-brand/10 transition-transform group-hover:scale-105">
              {/* Dynamic Connecting Dot Logo */}
              <div className="h-3 w-3 rounded-full bg-primary-brand" />
              <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-primary-brand/50" />
              <div className="absolute bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-primary-brand/50" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-mistral-charcoal transition-colors group-hover:text-primary-brand dark:text-zinc-50 uppercase">
              synco<span className="text-primary-brand">.</span>
            </span>
          </a>
          
          {/* Subtle Technical Label */}
          <span className="hidden rounded-sm bg-primary-brand-light px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase text-primary-brand dark:bg-primary-brand/15 sm:inline-block">
            v3.2_stable
          </span>
        </div>

        {/* Center: Navigation Options */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { id: "hero", label: "Plateforme" },
            { id: "playground", label: "Console" },
            { id: "models", label: "Modèles" },
            { id: "developers", label: "Documentation" },
            { id: "benchmarks", label: "Performances" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 font-mono text-xs tracking-tight transition-all duration-150 relative ${
                activeSection === item.id
                  ? "text-primary-brand"
                  : "text-zinc-600 hover:text-mistral-charcoal dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-brand" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Side: Tools & Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Indicator */}
          <div className="hidden items-center space-x-2 rounded-sm border border-mistral-border-light bg-mistral-cream-dark/50 px-2.5 py-1 font-mono text-[10px] font-medium dark:border-mistral-border-dark dark:bg-[#080808] lg:flex">
            <Globe className="h-3 w-3 text-zinc-400" />
            <span className="text-primary-brand">FR</span>
            <span className="text-zinc-450 text-[8px]/none">|</span>
            <span className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer">EN</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-mistral-border-light bg-white text-zinc-600 transition-all hover:bg-mistral-cream-dark/50 hover:text-primary-brand active:scale-95 dark:border-mistral-border-dark dark:bg-[#080808] dark:text-zinc-400 dark:hover:bg-[#111]"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Direct Platform CTA Button */}
          <button
            onClick={() => scrollToSection("playground")}
            className="flex h-9 items-center justify-center space-x-2 rounded-sm bg-primary-brand px-4 font-mono text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#0d7a54] active:scale-95"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Tester Synco Chat</span>
            <span className="sm:hidden">Tester</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
