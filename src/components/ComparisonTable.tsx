import { Check, X, ShieldCheck, AlertTriangle, Crown } from 'lucide-react';
import { TranslationSet } from '../types';

interface ComparisonTableProps { t: TranslationSet; }

export default function ComparisonTable({ t }: ComparisonTableProps) {
  const rows = t.comparison.rows;

  const renderCell = (value: boolean | string, highlight?: boolean) => {
    if (value === true) return <div className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg ${highlight ? 'bg-primary/10' : 'bg-green-50/50'}`}><Check className="w-5 h-5 text-primary" /><span className="font-medium text-text">Oui</span></div>;
    if (value === false) return <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-red-50/50"><X className="w-5 h-5 text-red-500" /><span className="font-medium text-text-muted">Non</span></div>;
    return <div className="py-3 px-4 rounded-lg bg-amber-50/50 text-center"><span className="text-sm font-medium text-amber-700">{value}</span></div>;
  };

  return (
    <section id="comparison" className="py-20 md:py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            <Crown className="w-4 h-4" /> Comparaison
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-text tracking-tight mb-6">{t.comparison.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-3xl mx-auto">{t.comparison.subtitle}</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-4 gap-2 mb-2">
              <div className="col-span-1" />
              <div className="bg-white rounded-t-2xl rounded-b-none border border-border/50 p-6 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Slack_logo.svg" alt="Slack" className="h-8 mx-auto mb-3" />
                <h4 className="font-bold text-text">{t.comparison.slackCol}</h4>
              </div>
              <div className="bg-white rounded-t-2xl rounded-b-none border border-border/50 p-6 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft Teams" className="h-8 mx-auto mb-3" />
                <h4 className="font-bold text-text">{t.comparison.teamsCol}</h4>
              </div>
              <div className="bg-white rounded-t-2xl rounded-b-none border border-border/50 p-6 text-center relative">
                <img src="/assets/synco_icons/banner_synco.svg" alt="Synco" className="h-8 mx-auto mb-3" />
                <h4 className="font-bold text-primary">{t.comparison.SyncoCol}</h4>
                <div className="absolute -top-4 right-4"><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-semibold uppercase">Recommandé</span></div>
              </div>
            </div>

            {rows.map((row, index) => (
              <div key={index} className={`grid grid-cols-4 gap-2 mb-2 ${row.highlight ? 'bg-primary/5 rounded-xl p-1' : ''}`}>
                <div className={`p-4 flex items-center gap-3 font-medium text-text ${row.highlight ? 'text-primary' : 'text-text-secondary'}`}>
                  {row.highlight ? <ShieldCheck className="w-5 h-5 text-primary" /> : <span className="w-5 h-5 rounded-full bg-border/50 flex items-center justify-center text-xs font-bold text-text-muted">{index + 1}</span>}
                  <span>{row.name}</span>
                </div>
                <div className="flex items-center justify-center">{renderCell(row.slack, row.highlight)}</div>
                <div className="flex items-center justify-center">{renderCell(row.teams, row.highlight)}</div>
                <div className="flex items-center justify-center">{renderCell(row.Synco, row.highlight)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-border/50 shadow-sm p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4"><AlertTriangle className="w-6 h-6 text-orange-600" /></div>
            <h4 className="font-bold text-text mb-2">Slack</h4>
            <p className="text-sm text-text-secondary">Chiffrement limité, hébergement US, soumis au Cloud Act</p>
          </div>
          <div className="bg-white rounded-2xl border border-border/50 shadow-sm p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4"><AlertTriangle className="w-6 h-6 text-orange-600" /></div>
            <h4 className="font-bold text-text mb-2">Microsoft Teams</h4>
            <p className="text-sm text-text-secondary">Chiffrement partiel, hébergement Azure US/EU, Cloud Act</p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-primary/30 shadow-sm p-6 text-center bg-primary/5">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-6 h-6 text-primary" /></div>
            <h4 className="font-bold text-primary mb-2">Synco</h4>
            <p className="text-sm text-text-secondary">Chiffrement E2EE par défaut, 100% France, immunité Cloud Act</p>
          </div>
        </div>
      </div>
    </section>
  );
}
