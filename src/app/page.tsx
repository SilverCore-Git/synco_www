import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Modules } from "@/components/Modules";
import { Comparison } from "@/components/Comparison";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Features />
      <Modules />
      <Comparison />
      <Cta />
      <Footer />
    </main>
  );
}
