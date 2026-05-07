import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', nameAr: 'الرئيسية', href: '#home' },
    { name: 'About', nameAr: 'من نحن', href: '#about' },
    { name: 'Services', nameAr: 'خدماتنا', href: '#services' },
    { name: 'Projects', nameAr: 'المشاريع', href: '#projects' },
  ];

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Logo light={!isScrolled} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                isScrolled ? 'text-dark-emerald' : 'text-white'
              } hover:text-gold`}
            >
              {t(link.name, link.nameAr)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 bg-dark-emerald text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold transition-all transform hover:scale-105 shadow-md"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-dark-emerald' : 'text-white'}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-bold text-dark-emerald flex justify-between items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{t(link.name, link.nameAr)}</span>
                </a>
              ))}
              <button 
                onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
                className="w-full bg-dark-emerald text-white py-4 rounded-2xl font-bold mt-2 flex items-center justify-center gap-3"
              >
                <Globe className="w-5 h-5" />
                {lang === 'en' ? 'تبديل للعربية' : 'Switch to English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
