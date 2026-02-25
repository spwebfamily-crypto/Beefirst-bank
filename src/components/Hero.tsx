
import React from 'react';
import { Play } from 'lucide-react';
import { TypingAnimation } from './ui/typing-animation';
import { WordRotate } from './ui/word-rotate';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from './ui/background-paper-shaders';
import { useLanguage } from '../lib/languageContext';

interface HeroProps {
    onNavigate?: (page: 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { title_lines, rotating_words, subtitle } = t.hero;

  const handleCta = () => {
    if (onNavigate) {
        onNavigate('contact');
        window.scrollTo(0, 0);
    }
  }

  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-brand-anthracite text-white min-h-[90vh] flex flex-col justify-center">
      {/* 3D Shader Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            {/* @ts-ignore */}
            <ambientLight intensity={0.5} />
            {/* Using a dark mix of brand colors for a 'paper-like' shader effect */}
            <ShaderPlane color1="#0a0a0a" color2="#1a1a2e" />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-anthracite via-transparent to-brand-anthracite pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Headline with Word Rotate */}
        <div className="flex flex-col items-center justify-center font-extrabold mb-10 max-w-6xl font-display uppercase drop-shadow-2xl gap-2 md:gap-4">
            <span className="text-2xl md:text-4xl lg:text-5xl leading-tight tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                {title_lines[0]}
            </span>
            <span className="text-2xl md:text-4xl lg:text-5xl leading-tight tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                {title_lines[1]}
            </span>
            
            {/* FOR/PARA */}
            <span className="text-2xl md:text-4xl lg:text-5xl leading-tight tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                {title_lines[2]}
            </span>
            
            {/* Rotating Word */}
            <div className="flex items-center justify-center min-w-[200px] mt-2">
                <WordRotate 
                    words={rotating_words} 
                    className="text-4xl md:text-6xl lg:text-7xl leading-tight tracking-normal text-brand-yellow"
                    duration={2000}
                />
            </div>
        </div>
        
        {/* Subtitle with Looped Typing Animation */}
        <div className="mb-12 max-w-2xl min-h-[5rem]">
             <TypingAnimation 
                text={subtitle}
                duration={30}
                className="text-lg md:text-xl text-gray-400 leading-relaxed font-normal font-sans tracking-wide"
            />
        </div>

      </div>
    </section>
  );
};

export default Hero;
