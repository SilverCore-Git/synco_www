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
      <Header currentLang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <Hero t={t} />
        <E2EEDemo t={t} />
        <FeatureGrid t={t} />
        <ComparisonTable t={t} />
        <Pricing t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
