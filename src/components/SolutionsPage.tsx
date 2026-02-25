
import React from 'react';
import { useLanguage } from '../lib/languageContext';
import { DottedSurface } from './ui/dotted-surface';
import DashboardMockup from './DashboardMockup';
import { Bot, Layers, BarChart3, Settings, BrainCircuit, Code, Server, ArrowRight, CheckCircle2 } from 'lucide-react';
import FinalCTA from './FinalCTA';

interface SolutionsPageProps {
    onNavigate?: (page: 'home' | 'about' | 'solutions' | 'contact') => void;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
    const { t } = useLanguage();
    const { hero, hive_deep_dive, custom_deep_dive } = t.solutions_page;

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 bg-brand-anthracite text-white overflow-hidden min-h-[50vh] flex flex-col justify-center">
                <DottedSurface className="opacity-30" />
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6 font-display">
                        {hero.badge}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight leading-tight">
                        {hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto">
                        {hero.subtitle}
                    </p>
                </div>
            </section>

            {/* Hive Section - Light Theme */}
            <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-brand-anthracite rounded-xl flex items-center justify-center text-brand-yellow shadow-lg">
                                    <Layers size={20} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-anthracite font-display">
                                    {hive_deep_dive.title}
                                </h2>
                            </div>
                            <p className="text-2xl text-brand-blue font-display mb-6">
                                {hive_deep_dive.subtitle}
                            </p>
                            <p className="text-lg text-brand-gray mb-10 leading-relaxed font-sans">
                                {hive_deep_dive.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {hive_deep_dive.features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 flex-shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-brand-yellow fill-brand-yellow/20" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-anthracite font-display leading-tight mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-500 font-sans leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                                <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                                    <DashboardMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tailor-Made Section - Dark Theme */}
            <section className="py-24 bg-brand-anthracite text-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full mb-6 border border-white/10 backdrop-blur-sm">
                            <BrainCircuit className="w-4 h-4 text-brand-yellow" />
                            <span className="text-xs font-bold uppercase tracking-wider font-display">High-End Engineering</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
                            {custom_deep_dive.title}
                        </h2>
                        <p className="text-xl text-gray-300 font-sans leading-relaxed">
                            {custom_deep_dive.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {custom_deep_dive.steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-4xl font-bold group-hover:opacity-20 transition-opacity">0{i + 1}</div>
                                <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mb-6 text-brand-anthracite shadow-[0_0_15px_rgba(250,204,0,0.3)]">
                                    {i === 0 && <Settings size={20} />}
                                    {i === 1 && <Code size={20} />}
                                    {i === 2 && <Bot size={20} />}
                                    {i === 3 && <Server size={20} />}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-display">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-sans">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA onNavigate={onNavigate} />
        </div>
    );
};

export default SolutionsPage;
