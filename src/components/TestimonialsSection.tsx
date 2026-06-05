import Section from './Section';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

function TestimonialCard({ quote, author, position, company, avatar }: TestimonialProps) {
  return (
    <div className="card testimonial">
      <div className="flex items-center gap-md mb-lg">
        <img
          src={avatar}
          alt={author}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
          <p className="text-sm text-primary font-medium">{company}</p>
        </div>
      </div>
      <p className="text-muted-foreground italic">
        "{quote}"
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Synco a transformé notre infrastructure IT. Leur approche professionnelle et leur expertise technique nous ont permis de gagner en efficacité et en productivité.',
      author: 'Jean Martin',
      position: 'Directeur Technique',
      company: 'TechCorp',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote: 'Grâce à Synco, nous avons pu lancer notre plateforme en un temps record. Leur équipe a su comprendre nos besoins et proposer des solutions adaptées.',
      author: 'Sophie Laurent',
      position: 'CEO & Founder',
      company: 'StartUp Innov',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote: 'Leur solution de sécurité nous a protégé contre plusieurs attaques majeures. Nous nous sentons maintenant en sécurité et pouvons nous concentrer sur notre cœur de métier.',
      author: 'Pierre Dubois',
      position: 'Directeur des Systèmes',
      company: 'Banque Nationale',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote: 'L\'expertise de Synco en data analytics nous a permis de prendre des décisions plus éclairées. Leurs insights ont directement impacté notre croissance.',
      author: 'Marie Claude',
      position: 'Directrice Marketing',
      company: 'Retail Plus',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote: 'Une collaboration exceptionnelle. Synco a su s\'adapter à nos contraintes et livrer un produit qui dépasse toutes nos attentes.',
      author: 'Thomas Moreau',
      position: 'Directeur de Projet',
      company: 'Industrie Solutions',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote: 'Leur approche agile et leur réactivité nous ont impressionnés. Synco est devenu un partenaire de confiance pour tous nos projets technologiques.',
      author: 'Élodie Fontain',
      position: 'CTO',
      company: 'Digital Media',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    },
  ];

  return (
    <Section id="testimonials">
      <div className="text-center mb-3xl">
        <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
          <span className="text-primary font-semibold text-sm">Témoignages</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-md">
          Ce que nos clients disent de nous
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          La satisfaction de nos clients est notre priorité absolue. Découvrez ce qu\'ils pensent de notre collaboration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}
