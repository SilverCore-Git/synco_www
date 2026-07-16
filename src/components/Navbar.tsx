"use client";

import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo className="text-2xl sm:text-3xl" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
          <a href="#" className="hover:text-primary transition-colors">Accueil</a>
          <a href="#" className="hover:text-primary transition-colors">Avantages</a>
          <a href="#" className="hover:text-primary transition-colors">Modules</a>
          <a href="#" className="hover:text-primary transition-colors">Comparaison</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm active:scale-95">
            Nous contacter
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border shadow-2xl py-4 px-4 flex flex-col gap-2 md:hidden">
          <a href="#" className="font-medium hover:text-primary hover:bg-slate-50 p-3 rounded-lg transition-colors">Accueil</a>
          <a href="#" className="font-medium hover:text-primary hover:bg-slate-50 p-3 rounded-lg transition-colors">Avantages</a>
          <a href="#" className="font-medium hover:text-primary hover:bg-slate-50 p-3 rounded-lg transition-colors">Modules</a>
          <a href="#" className="font-medium hover:text-primary hover:bg-slate-50 p-3 rounded-lg transition-colors">Comparaison</a>
          <hr className="my-2 border-border" />
          <button className="w-full mt-2 px-5 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 active:scale-95 transition-all">
            Nous contacter
          </button>
        </div>
      )}
    </header>
  );
}
