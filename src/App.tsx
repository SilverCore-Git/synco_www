import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import E2EEDemo from './components/E2EEDemo';
import FeatureGrid from './components/FeatureGrid';
import ComparisonTable from './components/ComparisonTable';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import { translations } from './data';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('FR');
  const t = translations[lang];

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-primary/10">
      
      {/* Dynamic Header */}
      <Header currentLang={lang} setLang={setLang} t={t} />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Hero Section with custom product preview & E2EE simulation switch */}
        <Hero t={t} />

        {/* E2EE Live Code/Interactive Encryptor Simulator */}
        <E2EEDemo t={t} />

        {/* Complete Features Suite Grid (Voice, Chat, Locks) */}
        <FeatureGrid t={t} />

        {/* Slack, Teams, Synco Side-by-side Technical comparison block */}
        <ComparisonTable t={t} />

        {/* Pricing Matrix (Standard, Pro, Dedicated Sector / On-Premise option) */}
        <Pricing t={t} />

        {/* Security & Cryptographic Frequently Asked Questions Accordion */}
        <FAQ t={t} />

      </main>

      {/* Corporate compliant France location footer */}
      <Footer t={t} />

    </div>
  );
}

