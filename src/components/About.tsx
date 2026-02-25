
import React from 'react';
import { useLanguage } from '../lib/languageContext';
import { Zap, TrendingUp, Sliders, Brain, Briefcase, Linkedin, ArrowUpRight } from 'lucide-react';
import { TypingAnimation } from './ui/typing-animation';
import { DottedSurface } from './ui/dotted-surface';
import { BeeFirstLogo } from './BeeFirstLogo';

const About: React.FC = () => {
    const { t } = useLanguage();
    const { title, subtitle, mission, team, dna, conclusion, badge, stats } = t.about;

    return (
        <div className="bg-white">
            {/* Hero Section - Matching Main Page Hero Aesthetic */}
            <section className="relative pt-40 pb-24 bg-brand-anthracite text-white overflow-hidden min-h-[60vh] flex flex-col justify-center">
                <DottedSurface className="opacity-30" />

                {/* Abstract Gradient Blobs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6 font-display">
                        {badge}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight leading-tight">
                        {title}
                    </h1>
                    <div className="max-w-3xl mx-auto h-32 md:h-24 flex items-center justify-center">
                        <TypingAnimation
                            text={subtitle}
                            className="text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed"
                            duration={30}
                        />
                    </div>
                </div>
            </section>

            {/* Mission Section - Clean & Typographic */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 text-[200px] font-bold text-brand-ice leading-none select-none font-display z-0 opacity-50">
                                "
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-anthracite leading-tight font-display relative z-10">
                                {mission.p1}
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xl text-brand-gray leading-relaxed font-sans border-l-4 border-brand-yellow pl-6">
                                {mission.p2}
                            </p>
                            <div className="flex gap-4 pt-4 pl-6">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-brand-blue font-display">100%</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider font-sans font-semibold">{stats.focus}</span>
                                </div>
                                <div className="w-px bg-gray-200 mx-4"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-brand-blue font-display">24/7</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider font-sans font-semibold">{stats.eng}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section - Premium Cards */}
            <section className="py-32 bg-brand-ice relative overflow-hidden">
                {/* Background texture similar to Pricing */}
                <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                        alt="Texture"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-brand-anthracite mb-4 font-display uppercase tracking-widest">{team.title}</h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {team.members.map((member, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="h-full bg-white rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col relative overflow-hidden">

                                    {/* Decorative Background Element */}
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${index === 0 ? 'from-brand-blue/5' : 'from-brand-yellow/10'} to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110 pointer-events-none`}></div>

                                    <div className="relative z-10 flex flex-col h-full">

                                        {/* Founder Header: Photo, Name, Role */}
                                        <div className="mb-6">
                                            {/* Founder Photo - Top Left */}
                                            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-4 border-brand-yellow mb-6 bg-gray-100">
                                                <img
                                                    src={index === 0
                                                        ? "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
                                                        : "/eu.jpeg"
                                                    }
                                                    alt={member.name}
                                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>

                                            <h3 className="text-3xl font-bold text-brand-anthracite font-display mb-1">{member.name}</h3>
                                            <div className="flex items-center gap-2 text-brand-blue font-bold tracking-wide text-sm uppercase font-sans">
                                                {index === 0 ? <Briefcase className="w-4 h-4" /> : <Brain className="w-4 h-4" />}
                                                {member.role}
                                            </div>
                                        </div>

                                        {/* Bio Section */}
                                        <div className="flex-grow">
                                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-md mb-4 font-display">
                                                {member.focus}
                                            </span>
                                            <div className="space-y-4 text-brand-gray font-sans leading-relaxed text-sm md:text-base mb-6">
                                                {member.bio.map((paragraph, i) => (
                                                    <p key={i} className={i === 0 ? "font-medium text-brand-anthracite" : ""}>{paragraph}</p>
                                                ))}
                                            </div>

                                            <a
                                                href={index === 0 ? "https://www.linkedin.com/in/fabiocastanheira" : "https://www.linkedin.com/in/lucasmiyazawa"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-yellow font-bold font-display uppercase tracking-wide text-sm transition-colors duration-300 group/link"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                                <span>LinkedIn</span>
                                                <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DNA Section - Dark Grid */}
            <section className="py-24 bg-brand-anthracite text-white border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <BeeFirstLogo className="w-12 h-12 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-white font-display uppercase tracking-widest">{dna.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dna.items.map((item, index) => {
                            const icons = [Zap, TrendingUp, Sliders];
                            const Icon = icons[index];
                            return (
                                <div key={index} className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/0 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 mx-auto bg-brand-anthracite border border-gray-700 rounded-2xl flex items-center justify-center mb-6 text-brand-blue group-hover:text-brand-yellow group-hover:border-brand-yellow/50 transition-colors duration-300 shadow-lg">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                                        <p className="text-gray-400 font-sans leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-24 bg-gradient-to-r from-brand-blue to-blue-900 rounded-3xl p-1 md:p-2 shadow-2xl">
                        <div className="bg-brand-anthracite rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                            <p className="text-2xl md:text-3xl text-white font-display leading-tight relative z-10">
                                "{conclusion}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
