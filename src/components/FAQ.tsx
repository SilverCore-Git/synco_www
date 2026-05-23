import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { TranslationSet } from '../types';

interface FAQProps {
  t: TranslationSet;
}

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-xxs font-bold text-brand uppercase tracking-widest bg-brand/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            DES RÉPONSES PRÉCISES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900 mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#fafcfa] border border-slate-150 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-brand flex-shrink-0 group-hover:scale-105 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 font-display group-hover:text-brand transition-colors">
                      {item.q}
                    </span>
                  </div>
                  
                  <div className={`p-1.5 rounded-lg bg-white border border-slate-150 text-slate-400 group-hover:text-brand transition-all duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer block with slide-down style animations */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white/40 block animate-[slideDown_0.25s_ease-out]">
                    <p className="font-normal">{item.a}</p>
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
