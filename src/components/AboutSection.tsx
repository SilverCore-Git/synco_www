import Button from './Button';
import Section from './Section';

export default function AboutSection() {
  return (
    <Section id="about" className="py-3xl">
      <div className="grid lg:grid-cols-2 gap-xl items-center">
        {/* Left Content */}
        <div>
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">À propos de Synco</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Nous sommes des passionnés de technologie dédiés à votre succès
          </h2>
          
          <p className="text-lg text-muted-foreground mb-lg">
            Fondée en 2014, Synco a pour mission d\'accompagner les entreprises dans leur transformation digitale en leur fournissant des solutions technologiques innovantes, fiables et adaptées à leurs besoins spécifiques.
          </p>
          
          <p className="text-lg text-muted-foreground mb-xl">
            Notre équipe d\'experts combine expertise technique et vision stratégique pour vous aider à atteindre vos objectifs business. Nous croyons en une approche collaborative et transparente pour créer des partenariats durables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-md">
            <Button href="/about" variant="primary">
              En savoir plus
            </Button>
            <Button href="/team" variant="outline">
              Rencontrer l\'équipe
            </Button>
          </div>
        </div>

        {/* Right Image/Illustration */}
        <div className="relative">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-xl text-white">
            <div className="space-y-lg">
              <div className="flex items-center gap-md">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vision innovante</h3>
                  <p className="text-white/80">Nous anticipons les tendances technologiques pour vous maintenir en tête de la concurrence.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-md">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sécurité renforcée</h3>
                  <p className="text-white/80">La protection de vos données est au cœur de toutes nos solutions et processus.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-md">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Résultats rapides</h3>
                  <p className="text-white/80">Des solutions efficaces déployées dans les meilleurs délais pour un ROI maximal.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary opacity-50 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-30 rounded-full blur-2xl" />
        </div>
      </div>
    </Section>
  );
}
