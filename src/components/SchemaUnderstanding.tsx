
import React from 'react';
import { Briefcase, Cpu } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';
import { BusinessTechSync } from './BusinessTechSync';

const SchemaUnderstanding: React.FC = () => {
  const { t } = useLanguage();
  const { title, highlight, sub1, desc1, sub2, desc2 } = t.technology;

  // Split title to highlight the specific part
  const parts = title.split(highlight);
  const before = parts[0];
  const after = parts[1] || "";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative group">
             {/* Abstract Glow behind image */}
             <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-yellow opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
             
             <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform transition-transform duration-500 hover:scale-[1.02] bg-brand-ice">
                {/* Replaced generic image with Custom SVG */}
                <BusinessTechSync className="w-full h-full" />
             </div>
        </div>
        
        <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-brand-anthracite font-display leading-tight">
                {before}
                <span className="bg-brand-blue text-white px-3 py-1 rounded-lg inline-block transform -rotate-1 mr-2 ml-1 shadow-lg shadow-brand-blue/30">{highlight}</span> 
                {after}
            </h2>
            <div className="space-y-6">
                <div>
                    <h4 className="text-xl font-bold text-brand-anthracite mb-2 flex items-center gap-2 font-display">
                        <Briefcase className="w-5 h-5 text-brand-blue" />
                        {sub1}
                    </h4>
                    <p className="text-brand-gray font-sans">
                        {desc1}
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-brand-anthracite mb-2 flex items-center gap-2 font-display">
                        <Cpu className="w-5 h-5 text-brand-yellow" />
                        {sub2}
                    </h4>
                    <p className="text-brand-gray font-sans">
                        {desc2}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SchemaUnderstanding;
