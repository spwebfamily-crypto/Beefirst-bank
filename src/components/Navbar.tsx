
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';
import { Language } from '../lib/content';
import { BeeFirstLogo } from './BeeFirstLogo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'solutions' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLang = (lang: Language) => {
    setLanguage(lang);
    setIsMobileMenuOpen(false);
  }

  const handleNav = (page: 'home' | 'about' | 'solutions' | 'contact') => {
    onNavigate(page);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }
  
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <BeeFirstLogo className={`w-10 h-10 md:w-12 md:h-12 transition-all ${isScrolled ? 'text-brand-anthracite' : 'text-white'}`} />
            <span className={`text-2xl font-bold font-display tracking-tight ${isScrolled ? 'text-brand-anthracite' : 'text-white'}`}>
              Bee<span className="text-brand-yellow">First</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
                onClick={() => handleNav('home')} 
                className={`font-medium transition-colors hover:text-brand-blue ${isScrolled ? 'text-brand-gray' : 'text-gray-300'}`}
            >
                {t.navbar.home}
            </button>
            <button 
                onClick={() => handleNav('solutions')}
                className={`font-medium transition-colors hover:text-brand-blue ${isScrolled ? 'text-brand-gray' : 'text-gray-300'}`}
            >
                {t.navbar.solutions}
            </button>
            <button 
                onClick={() => handleNav('about')} 
                className={`font-medium transition-colors hover:text-brand-blue ${isScrolled ? 'text-brand-gray' : 'text-gray-300'}`}
            >
                {t.navbar.about}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-gray-500 pl-6 ml-2">
                {(['en', 'pt', 'es'] as Language[]).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => changeLang(lang)}
                        className={`text-xs font-bold uppercase px-2 py-1 rounded transition-all ${
                            language === lang 
                            ? 'bg-brand-blue text-white' 
                            : isScrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {lang}
                    </button>
                ))}
            </div>

            <button 
                onClick={() => handleNav('contact')}
                className={`px-6 py-2.5 rounded-xl font-bold font-display transition-all ${
                isScrolled 
                ? 'bg-brand-anthracite text-white hover:bg-black' 
                : 'bg-brand-yellow text-brand-anthracite hover:bg-white'
            }`}>
                {t.navbar.cta}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={isScrolled ? 'text-brand-anthracite' : 'text-white'}
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 md:hidden flex flex-col gap-4">
             <button 
                onClick={() => handleNav('home')} 
                className="text-left font-medium text-brand-anthracite p-2 hover:bg-gray-50 rounded-lg"
            >
                {t.navbar.home}
            </button>
            <button 
                onClick={() => handleNav('solutions')}
                className="text-left font-medium text-brand-anthracite p-2 hover:bg-gray-50 rounded-lg"
            >
                {t.navbar.solutions}
            </button>
            <button 
                onClick={() => handleNav('about')} 
                className="text-left font-medium text-brand-anthracite p-2 hover:bg-gray-50 rounded-lg"
            >
                {t.navbar.about}
            </button>
            
            <div className="flex gap-2 p-2 border-t border-gray-100 pt-4">
                 {(['en', 'pt', 'es'] as Language[]).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => changeLang(lang)}
                        className={`text-xs font-bold uppercase px-3 py-2 rounded flex-1 ${
                            language === lang 
                            ? 'bg-brand-blue text-white' 
                            : 'bg-gray-100 text-gray-500'
                        }`}
                    >
                        {lang}
                    </button>
                ))}
            </div>

            <button 
                onClick={() => handleNav('contact')}
                className="w-full px-6 py-3 rounded-xl font-bold font-display bg-brand-anthracite text-white"
            >
                {t.navbar.cta}
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
