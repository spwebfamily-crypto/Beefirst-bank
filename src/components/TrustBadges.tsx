import React from 'react';
import { ShieldCheck, Database, Layers, Code, DollarSign } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8 font-display">Built on strong foundations</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 text-slate-500">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="font-bold font-display">SOC 2 Type II</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Database className="w-6 h-6" />
                    <span className="font-bold font-display">ClickHouse</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Layers className="w-6 h-6" />
                    <span className="font-bold font-display">Radix UI</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    <span className="font-bold font-display">OpenAI</span>
                </div>
            </div>
        </div>

        <div>
             <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8 font-display">Backed by the best</h3>
             <div className="flex justify-center items-center gap-4">
                <div className="px-6 py-3 border border-slate-200 rounded-lg flex items-center gap-2 bg-slate-50">
                     <DollarSign className="w-5 h-5 text-slate-800" />
                     <span className="font-bold text-slate-800 font-display">Form Capital</span>
                </div>
                 <div className="px-6 py-3 border border-slate-200 rounded-lg flex items-center gap-2 bg-slate-50">
                     <span className="font-bold text-slate-800 font-display">Y Combinator</span>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBadges;