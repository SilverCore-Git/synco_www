import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../types';

interface FAQProps { t: TranslationSet; }

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);
  const items = t.faq.items;

  return (
    <section id="faq" className="py-20 md:py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            <HelpCircle className="w-4 h-4" /> FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-text tracking-tight mb-6">{t.faq.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-3xl mx-auto">{t.faq.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className={`bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden ${openIndex === index ? 'border-primary/30 shadow-primary/10' : ''}`} onClick={() => toggleFAQ(index)}>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-text group-hover:text-primary transition-colors">{item.q}</h3>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300">
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
                </div>
              </div>
              <div className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">{item.a}</p>
              </div>
              {openIndex === index && <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Besoin d'aide ?</span>
          </div>
          <h3 className="text-2xl font-bold text-text mb-4">Vous avez d'autres questions ?</h3>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-2xl mx-auto mb-8">Notre équipe d'experts en cybersécurité et souveraineté numérique est à votre disposition</p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
            Contacter le support<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
