import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Synco",
};

export default function MentionsPage() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Éditeur du site</h2>
          <p>Le site Synco est édité par la société <strong>Silvercore</strong>, dont le siège social est situé en France.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Hébergement</h2>
          <p>Le site et la plateforme Synco sont hébergés sur des serveurs souverains situés exclusivement dans l'Union Européenne, garantissant une protection maximale contre l'extraterritorialité de lois étrangères (comme le CLOUD Act).</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
          <p>Pour toute demande juridique ou technique, veuillez nous contacter via la page de contact dédiée ou par courriel à legal@synco.silvercore.fr.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
