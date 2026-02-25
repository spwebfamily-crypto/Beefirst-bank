import React from 'react';
import { useLanguage } from '../lib/languageContext';

const LOGOS = [
  { name: 'Hetzner', src: '/logos/hetzner.svg' },
  { name: 'AWS', src: '/logos/aws.svg' },
  { name: 'TypeScript', src: '/logos/typescript.svg' },
  { name: 'OpenAI', src: '/logos/openai.svg' },
  { name: 'Gemini', src: '/logos/gemini.svg' },
  { name: 'DeepSeek', src: '/logos/deepseek.svg' },
  { name: 'OpenRouter', src: '/logos/openrouter.svg' },
  { name: 'Meta', src: '/logos/meta.svg' },
  { name: 'Postgres', src: '/logos/postgres.svg' },
  { name: 'NodeJS', src: '/logos/nodejs.svg' },
  { name: 'Python', src: '/logos/python.svg' },
  { name: 'React', src: '/logos/react.svg' },
];

const LogoMarquee: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-brand-anthracite border-b border-gray-800 overflow-hidden relative z-20">
      <div className="text-center mb-8">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-display">{t.logo_marquee.title}</h3>
      </div>

      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-brand-anthracite to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-brand-anthracite to-transparent z-10 pointer-events-none"></div>

      <div className="marquee-container w-full">
        <div className="marquee-content flex items-center space-x-20 px-4">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => {
            const isTextOnly = logo.name === 'OpenRouter';
            const hideText = ['Hetzner', 'Gemini', 'DeepSeek'].includes(logo.name);

            let sizeClass = 'w-8 h-8 md:w-10 md:h-10'; // default
            if (logo.name === 'Hetzner') {
              sizeClass = 'w-40 h-20 md:w-80 md:h-32';
            } else if (logo.name === 'DeepSeek') {
              sizeClass = 'w-28 h-10 md:w-40 md:h-14';
            } else if (logo.name === 'Gemini') {
              sizeClass = 'w-24 h-8 md:w-32 md:h-10 -translate-y-[2px]';
            }

            return (
              <div key={index} className="flex items-center space-x-3 text-gray-500 opacity-60 hover:opacity-100 hover:text-white transition-all duration-300 group">
                {isTextOnly ? (
                  <span className="text-xl font-bold font-display cursor-default">OpenRouter</span>
                ) : (
                  <>
                    <div
                      className={`${sizeClass} bg-current`}
                      style={{
                        maskImage: `url(${logo.src})`,
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        maskSize: 'contain',
                        WebkitMaskImage: `url(${logo.src})`,
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        WebkitMaskSize: 'contain'
                      }}
                    />
                    {!hideText && (
                      <span className="text-xl font-bold font-display hidden md:block">{logo.name}</span>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
