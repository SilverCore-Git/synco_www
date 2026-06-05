'use client';

import { useState } from 'react';
import Button from './Button';
import Section from './Section';

interface SolutionTab {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface SolutionContent {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function SolutionsSection() {
  const tabs: SolutionTab[] = [
    {
      id: 'enterprise',
      title: 'Entreprises',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 'startup',
      title: 'Startups',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'government',
      title: 'Secteur Public',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
    },
    {
      id: 'healthcare',
      title: 'Santé',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const solutions: SolutionContent[] = [
    {
      id: 'enterprise',
      title: 'Solutions Entreprise',
      description: 'Des solutions robustes et scalables conçues pour répondre aux besoins complexes des grandes organisations.',
      features: [
        'Infrastructure cloud sécurisée',
        'Intégration ERP et CRM',
        'Analytique avancée et BI',
        'Automatisation des processus métiers',
        'Solutions de collaboration d\'entreprise',
      ],
      image: '/synco_icons/banner_h500_synco.png',
    },
    {
      id: 'startup',
      title: 'Solutions Startup',
      description: 'Des solutions agiles et économiques pour aider les startups à démarrer rapidement et à évoluer sans limites.',
      features: [
        'MVP rapide et validation',
        'Développement full-stack',
        'Architecture scalable',
        'Conseil en levée de fonds',
        'Support technique dédié',
      ],
      image: '/synco_icons/banner_h500_synco.png',
    },
    {
      id: 'government',
      title: 'Solutions Secteur Public',
      description: 'Des solutions conformes aux normes gouvernementales, axées sur la sécurité et l\'accessibilité citoyenne.',
      features: [
        'Portails citoyens sécurisés',
        'Gestion électronique de documents',
        'Interopérabilité des systèmes',
        'Conformité RGPD et normatives',
        'Services en ligne accessibles',
      ],
      image: '/synco_icons/banner_h500_synco.png',
    },
    {
      id: 'healthcare',
      title: 'Solutions Santé',
      description: 'Des solutions conformes aux normes médicales pour améliorer les soins aux patients et l\'efficacité opérationnelle.',
      features: [
        'Dossiers patients électroniques',
        'Télémédecine et consultation en ligne',
        'Gestion des rendez-vous',
        'Analytique des données de santé',
        'Conformité HIPAA/GDPR',
      ],
      image: '/synco_icons/banner_h500_synco.png',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('enterprise');
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <Section id="solutions">
      <div className="text-center mb-3xl">
        <div className="inline-block bg-primary-subtle rounded-full px-md py-sm mb-md">
          <span className="text-primary font-semibold text-sm">Solutions Sectorielles</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-md">
          Des solutions adaptées à votre secteur d\'activité
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Chaque secteur a ses défis uniques. Nous comprenons vos besoins spécifiques et proposons des solutions sur mesure.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-sm mb-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-sm px-lg py-md rounded-lg font-semibold transition-all
              ${activeTab === tab.id
                ? 'bg-primary text-white shadow-primary'
                : 'bg-background text-muted-foreground hover:bg-muted border border-border'
              }
            `}
          >
            {tab.icon}
            {tab.title}
          </button>
        ))}
      </div>

      {/* Solution Content */}
      <div className="grid lg:grid-cols-2 gap-xl items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-md">{activeSolution.title}</h3>
          <p className="text-lg text-muted-foreground mb-lg">{activeSolution.description}</p>
          
          <div className="space-y-sm mb-xl">
            {activeSolution.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-md">
                <div className="w-8 h-8 bg-primary-subtle rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button href="/solutions" variant="primary" size="lg">
            Explorer les solutions
          </Button>
        </div>

        <div className="relative">
          <img
            src={activeSolution.image}
            alt={activeSolution.title}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary opacity-20 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary opacity-10 rounded-full blur-3xl" />
        </div>
      </div>
    </Section>
  );
}
