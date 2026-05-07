import { motion } from 'motion/react';
import { Building2, Compass, MapPin, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP: Record<string, any> = {
  'Building2': Building2,
  'Compass': Compass,
  'MapPin': MapPin,
};

export default function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-dark-emerald text-white overflow-hidden relative">
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-b border-white/50 h-32"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            {t('Engineering Our Future', 'نهندس مستقبلنا')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold border-0 pt-0 pb-[11px] mb-8"
          >
            {lang === 'en' ? (
              <>Integrated Real Estate <br /> <span className="italic font-serif text-gold pt-0 pb-[1px] mt-3 mb-0 inline-block">Solutions.</span></>
            ) : (
               <>حلول عقارية <br /> <span className="italic font-serif text-gold pt-0 pb-[1px] mt-3 mb-0 inline-block">متكاملة.</span></>
            )}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group h-full"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[3rem] h-full flex flex-col transition-all duration-500 hover:bg-white/10 hover:border-gold/30 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gold text-dark-emerald flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={32} />
                  </div>
                  
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{t(service.title, service.titleAr)}</h3>
                    <ArrowUpRight className={`text-gold opacity-0 group-hover:opacity-100 transition-opacity ${lang === 'ar' ? '-rotate-90' : ''}`} />
                  </div>
                  
                  <p className="text-white/60 text-lg leading-relaxed mb-8 flex-grow">
                    {t(service.description, service.descriptionAr)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gold p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl"
        >
          <div className="text-dark-emerald">
            <h3 className="text-3xl font-bold mb-2">
              {t('Ready to Build Your Vision?', 'هل أنت مستعد لبناء رؤيتك؟')}
            </h3>
            <p className="font-medium opacity-80">
              {t('Consult with our elite team of architects and engineers today.', 'استشر فريق النخبة من المهندسين المعماريين والمهندسين لدينا اليوم.')}
            </p>
          </div>
          <button className="bg-dark-emerald text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl whitespace-nowrap">
            {t('Schedule a Consultation', 'احجز استشارة')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
