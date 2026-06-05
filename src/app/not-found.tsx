import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative bg-gradient-to-br from-muted via-background to-muted py-3xl">
        <div className="container text-center">
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">Erreur 404</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-md">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-md">
            Page non trouvée
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-xl">
            La page que vous cherchez semble ne pas exister ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Button href="/" variant="primary" size="lg">
              Retour à l\'accueil
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
          
          <div className="mt-3xl">
            <img
              src="/synco_icons/banner_synco.svg"
              alt="Synco - Page non trouvée"
              className="w-full max-w-md mx-auto opacity-50"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
