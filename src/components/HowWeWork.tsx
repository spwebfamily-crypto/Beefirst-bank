
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';
import { TechnicalBlueprint } from './TechnicalBlueprint';

interface HowWeWorkProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'contact') => void;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { steps, title, subtitle } = t.process;

  const handleNav = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="relative bg-white border-b border-brand-ice">
      <div className="flex flex-col md:flex-row">

        {/* Left Side - Sticky Header */}
        <div className="w-full md:w-[35%] bg-white border-r border-brand-ice relative">
          <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-between p-8 md:p-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-brand-anthracite tracking-tight mb-6 font-display">
                {title}
              </h2>
              <p className="text-xl text-brand-gray mb-8 leading-relaxed font-sans">
                {subtitle}
              </p>
              <div
                onClick={handleNav}
                className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all cursor-pointer font-sans group"
              >
                <span>Start</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="hidden md:block mt-8 rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative h-64 w-full bg-brand-anthracite group">
              <TechnicalBlueprint
                className="w-full h-full text-brand-ice/20 group-hover:text-brand-ice/40 transition-colors duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-anthracite/50 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-white/50 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></div>
                  <span className="text-xs font-bold text-brand-anthracite font-display">System Architecture v2.0</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="w-full md:w-[65%] bg-slate-50">
          {steps.map((step, index) => (
            <div key={index} className="min-h-[50vh] flex flex-col justify-center p-8 md:p-24 border-b border-gray-200 last:border-b-0 group hover:bg-white transition-colors duration-500">
              <span
                className="text-8xl font-bold text-transparent mb-6 block opacity-10 select-none font-display group-hover:opacity-20 transition-opacity"
                style={{ WebkitTextStroke: '2px #212529' }}
              >
                0{index + 1}
              </span>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-wider mb-6 w-fit font-display">
                {step.subtitle}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-anthracite mb-6 font-display">
                {step.title}
              </h3>
              <p className="text-xl text-brand-gray leading-relaxed max-w-2xl font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
