import { Logo } from "./Logo";
import { Globe, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Logo className="text-3xl mb-6" />
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              L'alternative européenne sécurisée à Slack et Teams. Centralisez vos échanges, réunions et fichiers dans un espace chiffré de bout en bout.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors p-2.5 bg-white rounded-full shadow-sm border border-border" title="Site Web">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2.5 bg-white rounded-full shadow-sm border border-border" title="Communauté">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2.5 bg-white rounded-full shadow-sm border border-border" title="Contact">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Produit</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Avantages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Modules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comparaison</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Nous sommes aussi</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Silvercore</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Silvernote</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Silvertransfert</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Légal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conditions Générales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conformité RGPD</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Synco. Fabriqué en France 🇫🇷.</p>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2 hover:text-foreground cursor-pointer transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Tous les systèmes opérationnels
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
