import React from 'react';
import { useLanguage } from '../lib/languageContext';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-brand-ice">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-anthracite mb-12 text-center font-display">
            {t.faq.title}
        </h2>
        
        <div className="space-y-4">
            {t.faq.items.map((item, index) => (
                <div key={index} className="border border-brand-ice rounded-xl overflow-hidden bg-slate-50">
                    <button 
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-white transition-colors"
                    >
                        <span className="text-lg font-bold text-brand-anthracite font-display pr-8">{item.q}</span>
                        {openIndex === index ? (
                            <Minus className="w-5 h-5 text-brand-blue flex-shrink-0" />
                        ) : (
                            <Plus className="w-5 h-5 text-brand-gray flex-shrink-0" />
                        )}
                    </button>
                    <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 text-brand-gray leading-relaxed font-sans border-t border-brand-ice/50 bg-white">
                            {item.a}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;