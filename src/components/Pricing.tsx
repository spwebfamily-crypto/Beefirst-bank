
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';

interface PricingProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'contact') => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { title, subtitle, cards, footer, cta_button } = t.pricing;

  const handleNav = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-24 bg-brand-ice relative overflow-hidden">

      {/* Subtle Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-anthracite font-display">
            <span className="bg-brand-yellow px-4 py-1 rounded-lg inline-block transform -rotate-1 mr-3 shadow-md">{title}</span>
          </h2>
          <p className="text-lg text-brand-gray mt-4 font-sans">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className={`bg-white p-10 rounded-2xl shadow-xl border ${index === 1 ? 'border-brand-yellow/50 ring-2 ring-brand-yellow/20' : 'border-gray-200'} flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-display ${index === 1 ? 'bg-brand-yellow text-brand-anthracite' : 'bg-brand-blue/10 text-brand-blue'}`}>
                  {card.title}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-anthracite mb-2 font-display">{card.subtitle}</h3>

              <div className="flex flex-col mb-8 font-display">
                <span className="text-4xl font-extrabold text-brand-anthracite">{card.price}</span>
                <span className="text-brand-gray text-xl">{card.subPrice}</span>
              </div>

              <div className="flex-1">
                <p className="text-brand-gray text-base mb-8 font-sans border-t border-gray-100 pt-4">
                  {card.note}
                </p>
              </div>

              <button
                onClick={handleNav}
                className={`w-full py-4 px-6 font-bold rounded-xl transition-colors font-display shadow-lg ${index === 1 ? 'bg-brand-yellow text-brand-anthracite hover:bg-[#e6bb00] shadow-brand-yellow/20' : 'bg-brand-anthracite text-white hover:bg-gray-800 shadow-gray-900/20'}`}
              >
                {cta_button}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-brand-gray text-sm font-sans italic">{footer}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
