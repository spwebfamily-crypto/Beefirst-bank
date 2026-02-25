
import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';

const Testimonial: React.FC = () => {
  const { t } = useLanguage();
  const { quote, author, role, chat } = t.testimonial;

  return (
    <section className="py-24 bg-brand-ice rounded-t-[3rem] -mt-6 relative z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 relative overflow-hidden">
          {/* Decorative Hive Background */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
             <svg width="300" height="300" viewBox="0 0 100 100">
                <path d="M50 0 L93 25 L93 75 L50 100 L7 75 L7 25 Z" fill="#0505E3" />
             </svg>
          </div>

          <Quote className="absolute top-8 left-8 w-12 h-12 text-brand-yellow fill-brand-yellow -z-0 transform -translate-x-2 -translate-y-2 opacity-50" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
                <blockquote className="text-2xl md:text-3xl font-medium text-brand-anthracite leading-tight mb-8">
                    {quote}
                </blockquote>
                <div className="flex items-center space-x-4">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                        alt={author} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                        <div className="font-bold text-brand-anthracite text-lg">{author}</div>
                        <div className="text-brand-gray font-medium text-sm">{role}</div>
                    </div>
                </div>
            </div>
             <div className="w-full md:w-1/3">
                <div className="aspect-square bg-brand-ice rounded-2xl flex items-center justify-center p-8">
                    {/* Placeholder for abstract illustration */}
                    <div className="w-full h-full bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">AI</div>
                             <div className="bg-gray-100 rounded-lg p-2 text-xs text-gray-600 flex-1">{chat.ai}</div>
                        </div>
                        <div className="flex items-center gap-2 flex-row-reverse">
                             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">U</div>
                             <div className="bg-brand-blue text-white rounded-lg p-2 text-xs flex-1">{chat.user}</div>
                        </div>
                        <div className="mt-auto text-center">
                             <span className="text-xs font-bold text-brand-anthracite">CSAT: 5.0 ★★★★★</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
