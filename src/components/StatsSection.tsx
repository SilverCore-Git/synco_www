import Section from './Section';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="card text-center">
      <div className="w-16 h-16 bg-primary-subtle rounded-xl flex items-center justify-center mx-auto mb-md text-primary">
        {icon}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold mb-sm">{number}</h3>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Clients satisfaits',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: '1000+',
      label: 'Projets livrés',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '150+',
      label: 'Experts certifiés',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '99%',
      label: 'Taux de satisfaction',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-1.9 3.8z" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="stats" background="gray">
      <div className="text-center mb-3xl">
        <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
          <span className="text-primary font-semibold text-sm">Nos Réalisations</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-md">
          Des chiffres qui parlent
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Depuis notre création, nous avons accompagné des centaines d\'entreprises dans leur transformation digitale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-xl">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </Section>
  );
}
