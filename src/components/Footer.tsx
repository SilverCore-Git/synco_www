import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Logo className="text-2xl justify-center" />
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Plus qu'un "énième outil de discussion", Synco est un espace de travail tout-en-un pensé pour les équipes qui exigent de la rapidité sans compromis sur la sécurité.
        </p>
        <div className="flex justify-center gap-6 mb-12 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a>
          <a href="#" className="hover:text-primary transition-colors">Sécurité</a>
          <a href="#" className="hover:text-primary transition-colors">Tarifs</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="text-sm text-muted-foreground/40">
          © {new Date().getFullYear()} Synco. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
