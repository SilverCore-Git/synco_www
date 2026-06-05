import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Section from '@/components/Section';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container relative">
          <div className="py-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-md">
              Solutions Sectorielles
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Des solutions sur mesure pour chaque secteur d\'activité.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path d="M0 64V0C200 40 400 20 600 32C800 44 1000 32 1200 0V64H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <Section id="enterprise" className="py-3xl">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Entreprises</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Solutions pour les Entreprises
            </h2>
            <p className="text-lg text-muted-foreground mb-lg">
              Des solutions robustes et scalables conçues pour répondre aux besoins complexes des grandes organisations.
            </p>
            <p className="text-lg text-muted-foreground mb-xl">
              Nous comprenons les défis uniques auxquels sont confrontées les grandes entreprises. Nos solutions sont conçues pour s\'intégrer parfaitement dans vos infrastructures existantes tout en vous permettant d\'évoluer et de vous adapter aux changements du marché.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Demander une consultation
            </Button>
          </div>
          <div className="relative">
            <img
              src="/synco_icons/banner_h500_synco.png"
              alt="Solutions Entreprise"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Startup Solutions */}
      <Section id="startup" background="gray">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/synco_icons/light_banner_h500_synco.png"
              alt="Solutions Startup"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Startups</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Solutions pour les Startups
            </h2>
            <p className="text-lg text-muted-foreground mb-lg">
              Des solutions agiles et économiques pour aider les startups à démarrer rapidement et à évoluer sans limites.
            </p>
            <p className="text-lg text-muted-foreground mb-xl">
              Nous savons que les startups ont des besoins uniques et des ressources limitées. Nos solutions sont conçues pour être flexibles, scalables et rentables, vous permettant de vous concentrer sur ce qui compte vraiment : développer votre activité.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Discuter de votre projet
            </Button>
          </div>
        </div>
      </Section>

      {/* Government Solutions */}
      <Section id="government" className="py-3xl">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Secteur Public</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Solutions pour le Secteur Public
            </h2>
            <p className="text-lg text-muted-foreground mb-lg">
              Des solutions conformes aux normes gouvernementales, axées sur la sécurité et l\'accessibilité citoyenne.
            </p>
            <p className="text-lg text-muted-foreground mb-xl">
              Nous travaillons avec les organismes gouvernementaux pour fournir des solutions technologiques qui respectent les normes les plus strictes en matière de sécurité, d\'accessibilité et de conformité. Nos solutions aident à moderniser les services publics et à améliorer l\'expérience citoyenne.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              En savoir plus
            </Button>
          </div>
          <div className="relative">
            <img
              src="/synco_icons/banner_h500_synco.png"
              alt="Solutions Secteur Public"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Healthcare Solutions */}
      <Section id="healthcare" background="gray">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/synco_icons/light_banner_h500_synco.png"
              alt="Solutions Santé"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Santé</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Solutions pour la Santé
            </h2>
            <p className="text-lg text-muted-foreground mb-lg">
              Des solutions conformes aux normes médicales pour améliorer les soins aux patients et l\'efficacité opérationnelle.
            </p>
            <p className="text-lg text-muted-foreground mb-xl">
              Nos solutions pour le secteur de la santé sont conçues pour répondre aux normes les plus strictes en matière de confidentialité des patients et de conformité réglementaire. Nous aidons les organisations de santé à améliorer leurs opérations, à fournir de meilleurs soins aux patients et à réduire les coûts.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Explorer nos solutions
            </Button>
          </div>
        </div>
      </Section>

      {/* Other Industries */}
      <Section id="other-industries" className="py-3xl">
        <div className="text-center mb-3xl">
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">Autres Secteurs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Nous servons également
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En plus de nos secteurs principaux, nous avons de l\'expérience dans de nombreux autres domaines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-xl">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: 'Finance',
              description: 'Solutions bancaires et financières sécurisées.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              ),
              title: 'Éducation',
              description: 'Solutions technologiques pour les institutions éducatives.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              ),
              title: 'Immobilier',
              description: 'Solutions pour les agents et promoteurs immobiliers.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'E-commerce',
              description: 'Solutions complètes pour les entreprises de commerce électronique.',
            },
          ].map((industry, index) => (
            <div key={index} className="card text-center">
              <div className="w-16 h-16 bg-primary-subtle rounded-xl flex items-center justify-center mx-auto mb-md text-primary">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold mb-md">{industry.title}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl">
          <Button href="/contact" variant="outline" size="lg">
            Vous ne voyez pas votre secteur ? Contactez-nous
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
