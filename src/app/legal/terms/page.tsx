import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Synco",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Objet</h2>
          <p>Les présentes Conditions Générales d'Utilisation (CGU) encadrent juridiquement l'utilisation de la plateforme de collaboration Synco (ci-après "le Service").</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Accès au Service</h2>
          <p>Le Service est accessible à toute entreprise disposant d'un abonnement actif. L'utilisateur est responsable du maintien de la confidentialité de ses clés de chiffrement et identifiants.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Responsabilité de l'utilisateur</h2>
          <p>En raison du chiffrement de bout en bout, Synco ne modère ni n'analyse les contenus échangés sur la plateforme. L'utilisateur est seul responsable du respect de la législation en vigueur concernant les données qu'il héberge ou transmet.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Disponibilité</h2>
          <p>Synco s'engage à une obligation de moyens pour maintenir un accès au service 24h/24 et 7j/7, avec un objectif de disponibilité de 99,9%.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
