
import React from 'react';
import { useLanguage } from '../lib/languageContext';
import { Bot, MessageCircle, BarChart, Database, ArrowRight, Settings, Bell, Zap, Terminal, Workflow, BrainCircuit, Headphones, BarChart3, Hexagon } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

const icons = [
    Workflow,
    MessageCircle,
    BrainCircuit,
    Headphones,
    Terminal,
    BarChart3
];

const iconStyles = [
    { bg: "bg-brand-yellow", text: "text-brand-anthracite" },
    { bg: "bg-brand-blue", text: "text-white" },
    { bg: "bg-gray-700", text: "text-white" },
    { bg: "bg-brand-yellow", text: "text-brand-anthracite" },
    { bg: "bg-brand-blue", text: "text-white" },
    { bg: "bg-gray-700", text: "text-white" },
];

interface SolutionsProps {
    onNavigate?: (page: 'home' | 'about' | 'solutions' | 'contact') => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
    const { t } = useLanguage();
    const { header, hive, custom } = t.solutions;

    const handleNav = (page: 'solutions' | 'contact') => {
        if (onNavigate) {
            onNavigate(page);
            window.scrollTo(0, 0);
        }
    };

    return (
        <section id="solutions" className="py-24 bg-white overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Unified Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight text-brand-anthracite">
                        {header.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-brand-blue font-display mb-8">
                        {header.subtitle}
                    </p>
                    <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-brand-gray font-sans leading-relaxed">
                        {header.intro}
                    </p>
                </div>

                {/* Option 1: Hive SaaS */}
                <div className="bg-brand-ice rounded-[2.5rem] p-8 md:p-12 mb-20 relative overflow-hidden group">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -mr-32 -mt-32 z-0"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-5/12">
                            {hive.badge && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-brand-anthracite rounded-full mb-6 border border-gray-200 shadow-sm">
                                    <Hexagon className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                                    <span className="text-xs font-bold uppercase tracking-wider font-display">{hive.badge}</span>
                                </div>
                            )}
                            <h3 className="text-3xl md:text-4xl font-bold text-brand-anthracite mb-4 font-display">{hive.title}</h3>
                            <p className="text-lg text-brand-gray mb-8 leading-relaxed font-sans">{hive.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-8">
                                {hive.features.map((feature, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="font-bold text-brand-anthracite font-display flex items-center gap-2">
                                            <div className="w-1 h-4 bg-brand-blue rounded-full"></div>
                                            {feature.title}
                                        </span>
                                        <span className="text-sm text-gray-500 pl-3">{feature.desc}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleNav('solutions')}
                                className="flex items-center gap-2 bg-brand-anthracite text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:bg-black font-display group hover:-translate-y-1"
                            >
                                {hive.cta}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Dashboard Mockup - SVG Implementation */}
                        <div className="lg:w-7/12 w-full">
                            <DashboardMockup />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 mb-20">
                    <div className="h-px bg-gray-200 w-full max-w-xs"></div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest bg-white px-4">OR</span>
                    <div className="h-px bg-gray-200 w-full max-w-xs"></div>
                </div>

                {/* Option 2: Custom Engineering */}
                <div className="bg-brand-anthracite rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white">
                    {/* Background Decor */}
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32 z-0 pointer-events-none"></div>

                    <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
                        {custom.badge && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full mb-6 border border-white/10 backdrop-blur-sm">
                                <Terminal className="w-3 h-3 text-brand-yellow" />
                                <span className="text-xs font-bold uppercase tracking-wider font-display">{custom.badge}</span>
                            </div>
                        )}
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">{custom.title}</h3>
                        <p className="text-lg text-gray-400 font-sans">{custom.description}</p>
                    </div>

                    {/* Grid reused from AdditionalFeatures */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {custom.items.map((item, index) => {
                            const Icon = icons[index % icons.length];
                            const style = iconStyles[index % iconStyles.length];

                            return (
                                <div key={index} className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                                    <div className={`w-12 h-12 ${style.bg} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                        <Icon className={`w-6 h-6 ${style.text}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 font-display">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed font-sans text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <p className="text-sm text-gray-500 italic font-sans mb-8 max-w-2xl">
                            {custom.disclaimer}
                        </p>
                        <button
                            onClick={() => handleNav('contact')}
                            className="flex items-center gap-2 bg-brand-yellow hover:bg-white text-brand-anthracite px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-yellow/30 font-display text-lg group"
                        >
                            {custom.cta_button}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Solutions;
