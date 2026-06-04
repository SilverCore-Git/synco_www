import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { TranslationSet } from '../types';

interface FAQProps {
  t: TranslationSet;
}

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-lg border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary/30 bg-primary/3'
                    : 'border-border hover:border-primary/20'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-primary' : 'text-text-secondary group-hover:text-primary'
                    }`} />
                    <span className={`text-base font-medium transition-colors ${
                      isOpen ? 'text-primary' : 'text-text group-hover:text-primary'
                    }`}>
                      {item.q}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                    isOpen
                      ? 'bg-primary text-white rotate-180'
                      : 'bg-bg-secondary text-text-secondary group-hover:text-primary'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-7">
                      <p className="text-base text-text-secondary leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
