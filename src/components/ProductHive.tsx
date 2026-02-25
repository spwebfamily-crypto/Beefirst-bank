import React from 'react';
import { useLanguage } from '../lib/languageContext';
import { Bot, MessageCircle, BarChart, Database, ArrowRight, Zap, Settings, Bell, Menu } from 'lucide-react';

const ProductHive: React.FC = () => {
  const { t } = useLanguage();
  const { title, description, features, badge, cta } = t.solutions.hive;

  return (
    <section className="py-24 bg-brand-ice overflow-hidden relative" id="hive-platform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="lg:w-5/12 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/20 text-brand-anthracite rounded-full mb-6 border border-brand-yellow/30">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider font-display">{badge}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-brand-anthracite mb-6 font-display leading-tight">
                    {title}
                </h2>
                
                <p className="text-brand-gray text-lg mb-10 leading-relaxed font-sans">
                    {description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {features.map((feature, i) => (
                        <div key={i} className="flex flex-col gap-2">
                             <div className="flex items-center gap-2 text-brand-anthracite font-bold font-display">
                                <div className="w-6 h-6 rounded bg-brand-ice flex items-center justify-center border border-gray-200">
                                    {i === 0 && <Bot size={14} />}
                                    {i === 1 && <MessageCircle size={14} />}
                                    {i === 2 && <Database size={14} />}
                                    {i === 3 && <BarChart size={14} />}
                                </div>
                                {feature.title}
                             </div>
                             <p className="text-sm text-brand-gray pl-8">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 bg-brand-anthracite text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:bg-black font-display group">
                    {cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Dashboard Mockup - CSS Only */}
            <div className="lg:w-7/12 w-full relative">
                {/* Abstract Blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>

                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform lg:rotate-1 lg:hover:rotate-0 transition-all duration-500">
                    {/* Fake Browser Bar */}
                    <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="mx-auto w-1/2 h-6 bg-white rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-400 font-mono">
                            app.beefirst.ai/dashboard
                        </div>
                    </div>

                    <div className="flex h-[400px]">
                        {/* Sidebar */}
                        <div className="w-16 md:w-56 bg-brand-anthracite border-r border-gray-800 flex flex-col p-4">
                            <div className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                                <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center shrink-0">
                                    <span className="text-brand-anthracite text-xs">BF</span>
                                </div>
                                <span className="hidden md:inline font-display">Hive</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 p-2 rounded bg-white/10 text-white cursor-pointer">
                                    <Bot size={18} />
                                    <span className="hidden md:inline text-sm font-medium">Agents</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded text-gray-400 hover:text-white cursor-pointer">
                                    <MessageCircle size={18} />
                                    <span className="hidden md:inline text-sm font-medium">Inbox</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded text-gray-400 hover:text-white cursor-pointer">
                                    <Database size={18} />
                                    <span className="hidden md:inline text-sm font-medium">Data</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded text-gray-400 hover:text-white cursor-pointer">
                                    <BarChart size={18} />
                                    <span className="hidden md:inline text-sm font-medium">Analytics</span>
                                </div>
                            </div>
                            <div className="mt-auto flex items-center gap-3 p-2 text-gray-400">
                                <Settings size={18} />
                                <span className="hidden md:inline text-sm">Settings</span>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 bg-gray-50 p-6 overflow-hidden">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800 font-display">Overview</h3>
                                <div className="flex gap-3">
                                    <div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm relative">
                                        <Bell size={16} className="text-gray-500" />
                                        <div className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    </div>
                                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                                        JD
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Active Agents</div>
                                    <div className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                        12
                                        <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded">+2</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Messages Today</div>
                                    <div className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                        1,402
                                        <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded">↑ 12%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Preview */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-full">
                                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                                    <div className="text-sm font-bold text-gray-700">Recent Conversations</div>
                                    <div className="text-xs text-brand-blue font-bold cursor-pointer">View All</div>
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                                {item === 1 && <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" className="w-4 h-4" alt="whatsapp" />}
                                                {item === 2 && <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="w-4 h-4" alt="instagram" />}
                                                {item === 3 && <MessageCircle size={14} className="text-gray-500" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between">
                                                    <div className="text-xs font-bold text-gray-800">User_{9000 + item}</div>
                                                    <div className="text-[10px] text-gray-400">2m ago</div>
                                                </div>
                                                <div className="text-xs text-gray-500 truncate">
                                                    {item === 1 ? "I'd like to schedule a demo for..." : item === 2 ? "What are your pricing tiers?" : "Order #442 status update"}
                                                </div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow hidden md:block">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Zap size={20} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-800">Automated</div>
                            <div className="text-xs text-gray-500">Ticket #8821 resolved</div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHive;