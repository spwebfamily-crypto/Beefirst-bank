import React from 'react';
import { Lock, Zap, TrendingUp, Brain, Layers, Target } from 'lucide-react';
import { TypingAnimation } from './ui/typing-animation';
import { useLanguage } from '../lib/languageContext';

const icons = [
    Layers, // Modular AI
    Zap, // Op Efficiency
    TrendingUp, // Revenue
    Brain, // Decision Intel
    Lock, // Scalable/Secure
    Target // Profit/Results Focus
];

const WarehouseFeature: React.FC = () => {
  const { t } = useLanguage();
  const { title, subtitle, description, items } = t.differentials;

  return (
    <section className="py-24 bg-brand-anthracite text-white relative overflow-hidden">
        
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop" 
            alt="Secure Server Room" 
            className="w-full h-full object-cover opacity-10 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-brand-anthracite via-transparent to-brand-anthracite"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            <span className="bg-brand-yellow text-brand-anthracite px-4 py-1 rounded-lg inline-block transform -rotate-1 mr-3 shadow-[0_0_20px_rgba(250,204,0,0.3)]">
                {title.replace("?", "")}
            </span>
            ?
        </h2>
        <p className="text-2xl font-bold mb-8 text-gray-400 font-display">{subtitle}</p>
        
        <div className="mb-16 min-h-[4rem] max-w-2xl mx-auto">
            <TypingAnimation 
                text={description}
                className="text-xl text-gray-300 font-sans font-normal leading-relaxed drop-shadow-lg"
                duration={20}
            />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left justify-center">
            {items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                    <div key={index} className="bg-[#2B3035]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brand-blue transition-colors group shadow-lg">
                        <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 font-display">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-sans">
                            {item.desc}
                        </p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default WarehouseFeature;