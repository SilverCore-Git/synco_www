import { Check, X, Shield } from 'lucide-react';
import { TranslationSet } from '../types';

interface ComparisonTableProps {
  t: TranslationSet;
}

export default function ComparisonTable({ t }: ComparisonTableProps) {
  return (
    <section id="comparison" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-4 block">
            Comparatif
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="min-w-[700px] bg-white rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-secondary border-b border-border">
                  <th className="p-4 text-left">
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                      {t.comparison.featureCol}
                    </span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                      Slack
                    </span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                      Teams
                    </span>
                  </th>
                  <th className="p-4 text-center bg-primary/5">
                    <div className="flex items-center justify-center gap-1.5">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {t.comparison.SyncoCol}
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {t.comparison.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-primary/5 transition-all duration-300 transform hover:scale-x-100 ${row.highlight ? 'bg-primary/2' : ''}`}
                  >
                    {/* Feature name */}
                    <td className="p-4">
                      <span className={`text-sm transition-all duration-300 ${row.highlight ? 'font-semibold text-text' : 'text-text-secondary'}`}>
                        {row.name}
                      </span>
                    </td>

                    {/* Slack */}
                    <td className="p-4 text-center">
                      {typeof row.slack === 'boolean' ? (
                        row.slack ? (
                          <Check className="w-5 h-5 text-text-secondary mx-auto transition-transform duration-300" />
                        ) : (
                          <X className="w-5 h-5 text-border mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-text-secondary">{row.slack}</span>
                      )}
                    </td>

                    {/* Teams */}
                    <td className="p-4 text-center">
                      {typeof row.teams === 'boolean' ? (
                        row.teams ? (
                          <Check className="w-5 h-5 text-text-secondary mx-auto transition-transform duration-300" />
                        ) : (
                          <X className="w-5 h-5 text-border mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-text-secondary">{row.teams}</span>
                      )}
                    </td>

                    {/* Synco */}
                    <td className="p-4 text-center bg-primary/3">
                      {typeof row.Synco === 'boolean' ? (
                        row.Synco ? (
                          <Check className="w-5 h-5 text-primary mx-auto font-bold transition-transform duration-300" />
                        ) : (
                          <X className="w-5 h-5 text-border mx-auto" />
                        )
                      ) : (
                        <span className="text-sm font-semibold text-primary transition-all duration-300">{row.Synco}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-text-secondary">
          * Comparatif basé sur les spécifications techniques publiques de chaque plateforme.
        </p>

      </div>
    </section>
  );
}
