import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Section from '@/components/Section';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container relative">
          <div className="py-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-md">
              Nos Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Des solutions technologiques complètes pour répondre à tous vos besoins.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path d="M0 64V0C200 40 400 20 600 32C800 44 1000 32 1200 0V64H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <Section id="overview" className="py-3xl">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Notre Offre</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Des solutions pour chaque étape de votre transformation digitale
            </h2>
            <p className="text-lg text-muted-foreground mb-lg">
              Que vous ayez besoin de conseil stratégique, de développement d\'applications, d\'intégration de systèmes ou de solutions cloud, nous avons l\'expertise nécessaire pour vous accompagner.
            </p>
            <p className="text-lg text-muted-foreground mb-xl">
              Notre approche holistique garantit que toutes nos solutions s\'intègrent parfaitement dans votre écosystème existant et soutiennent vos objectifs à long terme.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Obtenir un devis personnalisé
            </Button>
          </div>
          <div className="relative">
            <img
              src="/synco_icons/banner_h500_synco.png"
              alt="Nos services technologiques"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Service Categories */}
      <Section id="categories" background="gray">
        <div className="text-center mb-3xl">
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">Catégories de Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Découvrez nos domaines d\'expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous offrons une large gamme de services pour répondre à tous vos besoins technologiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-xl">
          {[
            {
              id: 'consulting',
              title: 'Conseil & Stratégie',
              description: 'Conseil expert pour définir et mettre en œuvre votre stratégie technologique.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              services: [
                'Audit technologique',
                'Stratégie de transformation digitale',
                'Roadmap technologique',
                'Analyse des coûts/bénéfices',
                'Veille technologique',
              ],
            },
            {
              id: 'development',
              title: 'Développement',
              description: 'Création d\'applications web et mobile sur mesure pour vos besoins spécifiques.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              services: [
                'Applications web',
                'Applications mobiles',
                'API et Microservices',
                'UI/UX Design',
                'Maintenance et évolution',
              ],
            },
            {
              id: 'integration',
              title: 'Intégration',
              description: 'Connection et intégration fluide de vos systèmes et applications.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              ),
              services: [
                'Intégration ERP/CRM',
                'Middleware et ESB',
                'Migration de données',
                'Automatisation des processus',
                'Services web',
              ],
            },
            {
              id: 'cloud',
              title: 'Cloud & Infrastructure',
              description: 'Solutions cloud sécurisées et scalables pour votre entreprise.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              ),
              services: [
                'Migration vers le cloud',
                'Architecture cloud',
                'Gestion des infrastructures',
                'DevOps et CI/CD',
                'Conteneurs et orchestration',
              ],
            },
            {
              id: 'data',
              title: 'Data & Analytics',
              description: 'Transformez vos données en insights actionnables pour une prise de décision éclairée.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              services: [
                'Data Warehousing',
                'Business Intelligence',
                'Big Data Analytics',
                'Data Visualization',
                'Machine Learning',
              ],
            },
            {
              id: 'security',
              title: 'Sécurité',
              description: 'Protection complète de vos systèmes, données et applications.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
              services: [
                'Audit de sécurité',
                'Protection des données',
                'Sécurité réseau',
                'Gestion des identités',
                'Conformité RGPD',
              ],
            },
          ].map((category, index) => (
            <div key={index} className="card group">
              <div className="w-16 h-16 bg-primary-subtle rounded-xl flex items-center justify-center mb-lg text-primary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-md">{category.title}</h3>
              <p className="text-muted-foreground mb-lg">{category.description}</p>
              <ul className="space-y-sm mb-lg">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center gap-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
              <Button href={`/services#${category.id}`} variant="outline" size="sm">
                En savoir plus
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section id="why-choose-us" className="py-3xl">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Pourquoi nous choisir ?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Ce qui nous différencie
            </h2>
            <p className="text-lg text-muted-foreground mb-xl">
              Avec de nombreuses options disponibles, voici ce qui fait de Synco le partenaire idéal pour votre transformation digitale.
            </p>

            <div className="space-y-lg">
              {[
                {
                  title: 'Expertise Multidisciplinaire',
                  description: 'Notre équipe possède des compétences dans divers domaines technologiques, garantissant des solutions complètes et intégrées.',
                },
                {
                  title: 'Approche Client-Centrique',
                  description: 'Nous plaçons vos besoins au centre de tout ce que nous faisons, garantissant que nos solutions répondent parfaitement à vos objectifs.',
                },
                {
                  title: 'Méthodologie Agile',
                  description: 'Notre approche agile nous permet de nous adapter rapidement aux changements et de livrer des résultats dans les meilleurs délais.',
                },
                {
                  title: 'Qualité Garantie',
                  description: 'Nous nous engageons à fournir la plus haute qualité dans tous nos services, avec des processus rigoureux de test et d\'assurance qualité.',
                },
                {
                  title: 'Support Continu',
                  description: 'Notre relation ne s\'arrête pas à la livraison. Nous offrons un support continu pour garantir le succès à long terme de vos solutions.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-md">
                  <div className="w-12 h-12 bg-primary-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-sm">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-xl text-white">
              <h3 className="text-2xl font-bold mb-md">Parlons de votre projet</h3>
              <p className="text-white/80 mb-xl">
                Vous avez un projet en tête ? Contactez-nous pour une consultation gratuite et découvrez comment Synco peut vous aider.
              </p>
              <Button href="/contact" variant="secondary" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                Demander une consultation
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" background="gray">
        <div className="text-center mb-3xl">
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services et processus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-xl">
          {[
            {
              question: 'Combien de temps prend un projet typique ?',
              answer: 'La durée d\'un projet varie considérablement en fonction de sa complexité et de ses exigences. Un projet simple peut prendre quelques semaines, tandis qu\'un projet complexe peut prendre plusieurs mois. Nous fournissons une estimation précise après l\'analyse de vos besoins.',
            },
            {
              question: 'Offrez-vous un support après la livraison ?',
              answer: 'Oui, nous offrons divers niveaux de support après la livraison pour garantir le succès continu de vos solutions. Cela peut inclure la maintenance, les mises à jour, et l\'assistance technique.',
            },
            {
              question: 'Comment garantissez-vous la sécurité de mes données ?',
              answer: 'La sécurité est une priorité absolue pour nous. Nous utilisons les meilleures pratiques de l\'industrie, des protocoles de cryptage, des audits de sécurité réguliers et nous conformons à toutes les réglementations pertinentes pour protéger vos données.',
            },
            {
              question: 'Pouvez-vous travailler avec nos équipes internes ?',
              answer: 'Absolument ! Nous collaborons régulièrement avec les équipes internes de nos clients. Nous pouvons compléter vos ressources existantes ou travailler de manière autonome selon vos préférences.',
            },
            {
              question: 'Quelles technologies utilisez-vous ?',
              answer: 'Nous sommes agnostiques en matière de technologie et utilisons les outils les plus adaptés à chaque projet. Notre stack inclut JavaScript/TypeScript, Python, Java, .NET, React, Angular, Vue, Node.js, Django, Spring, AWS, Azure, Google Cloud, et bien d\'autres.',
            },
            {
              question: 'Proposez-vous des solutions sur mesure ?',
              answer: 'Oui, toutes nos solutions sont conçues sur mesure pour répondre à vos besoins spécifiques. Nous ne croyons pas aux solutions génériques et travaillons en étroite collaboration avec vous pour créer des solutions qui vous correspondent parfaitement.',
            },
          ].map((item, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-bold mb-md flex items-center gap-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item.question}
              </h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
