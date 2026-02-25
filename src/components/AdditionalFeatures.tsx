import React from 'react';
import { Terminal, Zap, MessageSquare, Workflow, BrainCircuit, Headphones, BarChart3, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';

// Mapping icons to service indices
const icons = [
  Workflow, // Process Automation
  MessageSquare, // 24x7 Agents
  BrainCircuit, // Predictive AI
  Headphones, // Omnichannel
  Terminal, // Integrations
  BarChart3 // Operational Intel
];

// Color styles for the icons to match the AIChat aesthetic
const iconStyles = [
    { bg: "bg-brand-yellow", text: "text-brand-anthracite" },
    { bg: "bg-brand-blue", text: "text-white" },
    { bg: "bg-gray-700", text: "text-white" },
    { bg: "bg-brand-yellow", text: "text-brand-anthracite" },
    { bg: "bg-brand-blue", text: "text-white" },
    { bg: "bg-gray-700", text: "text-white" },
];

const AdditionalFeatures: React.FC = () => {
  const { t } = useLanguage();
  const { title, description: subtitle, items, disclaimer, cta_button } = t.solutions.custom;

  return (
    <section className="py-24 bg-brand-anthracite text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
                {title}
             </h2>
             <p className="text-xl md:text-2xl text-gray-300 font-display mb-8">
                 {subtitle}
             </p>
             <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-8"></div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const style = iconStyles[index % iconStyles.length];
            
            return (
              <div key={index} className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                <div className={`w-14 h-14 ${style.bg} rounded-xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${style.text}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-sans text-base">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer Section */}
        <div className="flex flex-col items-center text-center pt-12 border-t border-gray-800">
            <p className="text-sm text-gray-500 italic font-sans mb-8 max-w-2xl">
                {disclaimer}
            </p>
            <button className="flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-blue/30 font-display text-lg group">
                {cta_button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;