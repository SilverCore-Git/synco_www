"use client";

import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-6 sm:p-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* On light background, we use the dark text logo */}
        <Logo className="text-3xl" />
        
        <div className="hidden sm:flex items-center gap-6 font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Produit</a>
          <a href="#" className="hover:text-foreground transition-colors">Sécurité</a>
          <a href="#" className="hover:text-foreground transition-colors">Tarifs</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">
            Se connecter
          </a>
        </div>
      </div>
    </header>
  );
}
