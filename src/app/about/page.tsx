import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Section from '@/components/Section';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-[url('/synco_icons/banner_synco.svg')] bg-center bg-no-repeat opacity-20" />
        <div className="container relative">
          <div className="py-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-md">
              À propos de Synco
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Découvrez notre histoire, nos valeurs et notre engagement envers l\'excellence technologique.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path d="M0 64V0C200 40 400 20 600 32C800 44 1000 32 1200 0V64H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <Section id="story" className="py-3xl">
        <div className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
              <span className="text-primary font-semibold text-sm">Notre Histoire</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              Une histoire d\'innovation et de passion
            </h2>
            <p className="text-lg text-muted-foreground mb-lg">
              Fondée en 2014 par une équipe de passionnés de technologie, Synco est née de la conviction que la technologie peut transformer les entreprises de manière significative. Depuis nos humbles débuts dans un petit bureau à Paris, nous avons grandi pour devenir un acteur majeur dans le domaine des solutions technologiques.
            </p>
            <p className="text-lg text-muted-foreground mb-xl">
              Au fil des années, nous avons accompagné des centaines de clients dans leur transformation digitale, des startups aux grandes entreprises. Chaque projet a été une opportunité d\'apprendre, de grandir et d\'innover.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Rejoindre notre aventure
            </Button>
          </div>
          <div className="relative">
            <img
              src="/synco_icons/banner_h500_synco.png"
              alt="Notre équipe Synco"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary opacity-20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-10 rounded-full blur-3xl" />
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section id="values" background="gray">
        <div className="text-center mb-3xl">
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">Nos Valeurs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Ce en quoi nous croyons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos valeurs guident chaque décision et action que nous entreprenons. Elles définissent qui nous sommes et comment nous travaillons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Innovation',
              description: 'Nous repoussons constamment les limites de la technologie pour offrir des solutions avant-gardistes à nos clients.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: 'Excellence',
              description: 'Nous nous engageons à fournir la plus haute qualité dans tout ce que nous faisons, du développement à la livraison.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Collaboration',
              description: 'Nous croyons en la puissance du travail d\'équipe et de la collaboration avec nos clients pour atteindre des résultats exceptionnels.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Intégrité',
              description: 'Nous menons nos affaires avec honneur et honnêteté, en plaçant toujours les intérêts de nos clients au premier plan.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: 'Apprentissage',
              description: 'Nous embrassons le changement et l\'amélioration continue, toujours à la recherche de nouvelles connaissances et compétences.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: 'Passion',
              description: 'Nous sommes passionnés par ce que nous faisons et par l\'impact positif que la technologie peut avoir sur le monde.',
            },
          ].map((value, index) => (
            <div key={index} className="card text-center">
              <div className="w-16 h-16 bg-primary-subtle rounded-xl flex items-center justify-center mx-auto mb-md text-primary">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-md">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" className="py-3xl">
        <div className="text-center mb-3xl">
          <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
            <span className="text-primary font-semibold text-sm">Notre Équipe</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Rencontrez les visages derrière Synco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe diversifiée et talentueuse est notre plus grand atout. Découvrez les personnes qui rendent Synco spécial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-xl">
          {[
            {
              name: 'Jean Dupont',
              position: 'CEO & Fondateur',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
              description: 'Visionnaire avec plus de 20 ans d\'expérience dans le secteur technologique.',
            },
            {
              name: 'Marie Martin',
              position: 'Directrice Technique',
              avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
              description: 'Experte en architecture logicielle et solutions cloud.',
            },
            {
              name: 'Pierre Bernard',
              position: 'Directeur du Développement',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
              description: 'Spécialiste en développement full-stack et DevOps.',
            },
            {
              name: 'Sophie Laurent',
              position: 'Chef de Projet',
              avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
              description: 'Gestionnaire expérimentée avec un talent pour la livraison de projets complexes.',
            },
          ].map((member, index) => (
            <div key={index} className="card text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-md border-4 border-primary-subtle"
              />
              <h3 className="text-xl font-bold mb-sm">{member.name}</h3>
              <p className="text-primary font-medium mb-md">{member.position}</p>
              <p className="text-sm text-muted-foreground">{member.description}</p>
              <div className="flex justify-center gap-sm mt-md">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl">
          <Button href="/careers" variant="outline">
            Rejoindre notre équipe
          </Button>
        </div>
      </Section>

      {/* Partners Section */}
      <Section id="partners" background="gray">
        <div className="text-center mb-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-md">
            Nos partenaires de confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les meilleurs pour vous offrir des solutions de qualité supérieure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-lg">
          {[
            { name: 'Microsoft', logo: 'https://img.icons8.com/color/48/000000/microsoft.png' },
            { name: 'AWS', logo: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
            { name: 'Google Cloud', logo: 'https://img.icons8.com/color/48/000000/google-cloud.png' },
            { name: 'Docker', logo: 'https://img.icons8.com/color/48/000000/docker.png' },
            { name: 'Kubernetes', logo: 'https://img.icons8.com/color/48/000000/kubernetes.png' },
            { name: 'GitHub', logo: 'https://img.icons8.com/color/48/000000/github.png' },
          ].map((partner, index) => (
            <div key={index} className="card flex items-center justify-center h-24 bg-background">
              <img src={partner.logo} alt={partner.name} className="h-10 w-auto opacity-60" />
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
