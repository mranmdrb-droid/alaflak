import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();

  const logos = [
    { name: 'Aramco', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Saudi_Aramco_Logo.svg' },
    { name: 'PIF', url: 'https://www.pif.gov.sa/MediaLibrary/PIF-Logo-Gold.svg' },
    { name: 'NEOM', url: 'https://www.neom.com/static/media/neom-logo.3f19e7a9.svg' },
    { name: 'SABIC', url: 'https://www.sabic.com/en/Images/sabic-logo-horizontal_tcm10-184.png' },
    { name: 'Vision 2030', url: 'https://upload.wikimedia.org/wikipedia/ar/b/bb/Saudi_Vision_2030_logo.svg' }
  ];

  return (
    <section className="bg-white py-20 border-y border-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-16"
        >
          {t('Strategic Partners & Industry Leaders', 'الشركاء الاستراتيجيون وقادة القطاع')}
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                referrerPolicy="no-referrer"
                className="h-10 md:h-12 w-auto object-contain max-w-[160px] filter drop-shadow-sm group-hover:scale-110 transition-transform"
                onError={(e) => {
                  // Fallback to text if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const textFallback = document.createElement('span');
                    textFallback.className = 'text-dark-emerald font-bold text-lg';
                    textFallback.innerText = logo.name;
                    parent.appendChild(textFallback);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
