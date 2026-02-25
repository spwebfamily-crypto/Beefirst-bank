
import React from 'react';
import { useLanguage } from '../lib/languageContext';

interface FinalCTAProps {
    onNavigate?: (page: 'contact') => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { title, desc, button } = t.cta;

  const handleClick = () => {
    if (onNavigate) {
        onNavigate('contact');
        window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-brand-anthracite text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1519681393798-2f13fbe54021?q=80&w=2070&auto=format&fit=crop" 
            alt="" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-brand-anthracite via-brand-anthracite/80 to-transparent"></div>
         <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight font-display drop-shadow-xl leading-tight">
            {title}
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            <span className="font-display bg-brand-yellow text-brand-anthracite px-2 py-0.5 rounded transform -rotate-1 inline-block mr-1 font-semibold shadow-[0_0_15px_rgba(250,204,0,0.4)]">Join the hive.</span> {desc}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
             <button 
                onClick={handleClick}
                className="px-8 py-4 bg-brand-yellow text-brand-anthracite rounded-xl font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 font-display"
             >
                {button}
            </button>
        </div>
        
      </div>
    </section>
  );
};

export default FinalCTA;
