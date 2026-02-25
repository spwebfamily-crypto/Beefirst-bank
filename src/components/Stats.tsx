
import React from 'react';
import { useLanguage } from '../lib/languageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
          {t.metrics.items.map((item, index) => (
             <div key={index} className="space-y-3 p-4 hover:bg-slate-50 rounded-xl transition-colors duration-300">
                <div className="text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tighter">{item.value}</div>
                <p className="text-lg text-brand-anthracite font-bold font-display uppercase tracking-wide">{item.label}</p>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-brand-ice text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-gray font-mono">{t.metrics.source}</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
