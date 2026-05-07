import { motion } from 'motion/react';
import { ChevronDown, Landmark, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';
import heroVideo from '../assets/images/Luxury_residential_compound_at_dusk_202605062314.mp4';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-dark-emerald">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          key="hero-video-local"
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
        />
        
        {/* Simple Gradient Overlays for contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-emerald/80 via-dark-emerald/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8 lg:col-start-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                <span className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">
                  {t('Integrated Vision for a Sustainable Future', 'رؤية متكاملة لمستقبل مستدام')}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                {lang === 'en' ? (
                  <>Al-Aflak United <br /> <span className="text-gold font-serif italic">Real Estate Development.</span></>
                ) : (
                  <>الأفلاك المتحدة <br /> <span className="text-gold font-serif italic">للتطوير العقاري.</span></>
                )}
              </h1>
              
              <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
                {t(
                  'Your premier destination for sustainable real estate investments and exceptional projects aligned with Saudi Vision 2030.',
                  'وجهتك الرائدة نحو استثمارات عقارية مستدامة ومشاريع استثنائية تواكب طموحات رؤية السعودية 2030.'
                )}
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center">
                <button className="group relative overflow-hidden bg-gold text-dark-emerald px-10 py-5 rounded-full font-bold text-lg transition-all hover:pr-14 rtl:hover:pl-14">
                  <span className="relative z-10">{t('Explore Portfolio', 'استعرض أعمالنا')}</span>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all rtl:right-auto rtl:left-6">
                    <ArrowRight size={20} className="rtl:rotate-180" />
                  </div>
                </button>
                <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  {t('Our Services', 'خدماتنا')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Accent Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className={`absolute bottom-24 p-8 hidden lg:block ${lang === 'ar' ? 'left-0' : 'right-0'}`}
      >
        <span className="arabic-text text-8xl font-bold text-white select-none">
          {t('AL-AFLAK UNITED', 'الأفلاك المتحدة')}
        </span>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
          {t('Discover', 'اكتشف')}
        </span>
        <ChevronDown size={24} className="text-gold" />
      </motion.div>
    </section>
  );
}
