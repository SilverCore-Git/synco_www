import Button from './Button';
import Section from './Section';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="card group feature-card">
      <div className="w-16 h-16 bg-primary-subtle rounded-xl flex items-center justify-center mb-lg text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-md">{title}</h3>
      <p className="text-muted-foreground mb-lg">{description}</p>
      <Button href={href} variant="outline" size="sm">
        En savoir plus
      </Button>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Conseil Stratégique',
      description: 'Nos experts analysent vos besoins et vous accompagnent dans la définition d\'une stratégie technologique alignée sur vos objectifs business.',
      href: '/services#consulting',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Développement Sur Mesure',
      description: 'Création d\'applications web et mobile personnalisées, des interfaces utilisateurs intuitives aux systèmes backend robustes.',
      href: '/services#development',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Intégration Système',
      description: 'Connectez vos systèmes existants avec de nouvelles technologies. Nous assurons une intégration fluide et sécurisée de vos infrastructures.',
      href: '/services#integration',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Migration vers le cloud, optimisation des infrastructures et mise en place de pipelines CI/CD pour une livraison continue.',
      href: '/services#cloud',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Data & Analytics',
      description: 'Transformez vos données en informations actionnables avec nos solutions de Big Data, Data Warehousing et Business Intelligence.',
      href: '/services#data',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Sécurité Informatique',
      description: 'Protection complète de vos systèmes et données contre les cybermenaces avec des solutions de sécurité proactives.',
      href: '/services#security',
    },
  ];

  return (
    <Section id="services" background="gray">
      <div className="text-center mb-3xl">
        <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
          <span className="text-primary font-semibold text-sm">Nos Services</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-md">
          Des solutions complètes pour votre transformation digitale
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Que vous soyez une startup ou une grande entreprise, nous avons les compétences et l\'expertise pour répondre à vos défis technologiques.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="text-center mt-3xl">
        <Button href="/services" variant="primary" size="lg">
          Voir tous nos services
        </Button>
      </div>
    </Section>
  );
}
