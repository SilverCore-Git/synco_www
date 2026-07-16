import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Synco",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
          <p>Chez Synco, le respect de votre vie privée et la sécurité de vos données sont au cœur de notre mission. Cette politique décrit comment nous traitons vos informations.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Chiffrement de bout en bout (E2EE)</h2>
          <p>L'intégralité des communications, fichiers et données stockés sur Synco bénéficient d'un chiffrement de bout en bout par défaut. Cela signifie que <strong>nous n'avons aucun moyen technique de lire ou d'accéder à vos contenus</strong>.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Données collectées</h2>
          <p>Afin d'assurer le bon fonctionnement du service, nous collectons uniquement les métadonnées techniques strictement nécessaires (adresses IP de connexion, informations de facturation, adresses email pour l'authentification).</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Hébergement et Souveraineté</h2>
          <p>Toutes nos infrastructures sont situées physiquement sur le territoire de l'Union Européenne. Synco est une entreprise européenne, non soumise au CLOUD Act américain.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
