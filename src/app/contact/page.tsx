import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | Synco",
  description: "Contactez l'équipe Synco pour une démo ou une question.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
