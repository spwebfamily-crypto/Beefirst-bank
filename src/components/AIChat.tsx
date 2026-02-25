import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { WordRotate } from './ui/word-rotate';

const queries = [
    { text: "How do I reset my password?", dept: "Support" },
    { text: "What is your refund policy for SaaS?", dept: "Billing" },
    { text: "My integration isn't syncing data.", dept: "Technical" },
    { text: "I want to upgrade to the Enterprise plan.", dept: "Sales" },
    { text: "Where can I find my API keys?", dept: "Dev" },
    { text: "Is there a downtime currently?", dept: "Status" },
];

const AIChat: React.FC = () => {
  return (
    <section className="py-24 bg-brand-anthracite text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display flex flex-col md:flex-row justify-center items-center gap-x-3">
            <span className="whitespace-nowrap">Train your AI on your</span>
            <div className="min-w-[300px] md:min-w-[450px] flex justify-center md:justify-start">
                <WordRotate 
                    words={["Knowledge Base", "Support Docs", "Past Tickets", "PDF Files", "Notion Pages"]} 
                    className="text-brand-yellow whitespace-nowrap"
                    duration={2000}
                />
            </div>
        </h2>
        <h3 className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-sans">
            BeeFirst ingests your docs, past tickets, and FAQs to provide human-like answers instantly.
        </h3>
        <button className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-brand-blue/30 font-sans">
            Start Training
        </button>
      </div>

      {/* Query Carousel */}
      <div className="w-full overflow-x-auto no-scrollbar pb-12">
        <div className="flex space-x-6 px-4 min-w-max animate-scroll-slow">
            {queries.concat(queries).map((q, i) => (
                <div key={i} className="flex-none w-80 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer group">
                    <p className="text-lg text-gray-200 mb-4 group-hover:text-white font-sans">"{q.text}"</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-brand-blue/20 text-brand-blue border border-brand-blue/30 font-display">{q.dept}</span>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-brand-yellow opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <MessageCircle className="w-6 h-6 text-brand-anthracite" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white font-display">Human-Centric Tone</h4>
            <p className="text-gray-400 font-sans">Our AI mirrors your brand voice. Professional, empathetic, and accurate.</p>
        </div>
        <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white font-display">Instant Resolution</h4>
            <p className="text-gray-400 font-sans">Deflect up to 80% of routine questions without human involvement.</p>
        </div>
        <div className="text-center md:text-left">
            <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white font-display">Enterprise Security</h4>
            <p className="text-gray-400 font-sans">Your data is isolated and encrypted. We never train public models on your private data.</p>
        </div>
      </div>
    </section>
  );
};

export default AIChat;