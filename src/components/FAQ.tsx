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
                className={`bg-white rounded-lg border transition-all duration-300 overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {isOpen && (
                  <style>
                    {`
                      @keyframes slideDown {
                        from {
                          opacity: 0;
                          max-height: 0;
                        }
                        to {
                          opacity: 1;
                          max-height: 500px;
                        }
                      }
                      .faq-answer {
                        animation: slideDown 0.3s ease-out forwards;
                      }
                    `}
                  </style>
                )}
                {/* Question */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className={`w-full text-left p-5 flex justify-between items-center gap-4 group transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'border-primary/30 bg-primary/3'
                      : 'border-border hover:border-primary/20 hover:bg-primary/1'
                  }`}
                  style={{
                    borderColor: isOpen ? '#108e62' : '#e4e4e7'
                  }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'text-primary scale-110' : 'text-text-secondary group-hover:text-primary'
                    }`} />
                    <span className={`text-base font-medium transition-all duration-300 ${
                      isOpen ? 'text-primary' : 'text-text group-hover:text-primary'
                    }`}>
                      {item.q}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isOpen
                      ? 'bg-primary text-white rotate-180'
                      : 'bg-bg-secondary text-text-secondary group-hover:text-primary group-hover:bg-primary/10'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 faq-answer">
                    <div className="pl-7 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
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
