import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conformité RGPD | Synco",
};

export default function RgpdPage() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-8">Conformité RGPD & Sécurité</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Synco a été conçu dès sa fondation autour du principe de <strong>Privacy by Design</strong>, en stricte conformité avec le Règlement Général sur la Protection des Données (RGPD).</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Zéro Connaissance (Zero-Knowledge)</h2>
          <p>Vos discussions, fichiers, vocaux et données de projets sont chiffrés de bout en bout (E2EE) directement sur vos appareils avant d'être transmis à nos serveurs. L'application du RGPD sur les contenus est par essence absolue, puisque nous n'y avons pas accès.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Vos droits</h2>
          <p>Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité des métadonnées de votre compte. Vous pouvez exercer ces droits directement depuis les paramètres administrateur de votre instance Synco.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Sous-traitance et Transferts</h2>
          <p>Synco s'engage à n'opérer <strong>aucun transfert de données en dehors de l'Union Européenne</strong>. L'intégralité de la chaîne de sous-traitance est auditée pour garantir sa non-soumission au CLOUD Act américain ou équivalent.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
