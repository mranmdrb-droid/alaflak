import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-dark-emerald font-bold uppercase tracking-widest text-sm mb-4 block">
              {t('Our Future Projects', 'مشاريعنا المستقبلية')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-emerald mb-4">
              {t('A Glimpse into Tomorrow.', 'رؤية للمستقبل.')}
            </h2>
            <p className="text-slate-500 text-lg">
              {t(
                'In line with Saudi Vision 2030, Al-Aflak United is developing high-quality projects that support sustainable urban development, including:',
                'تماشيا مع رؤية السعودية 2030 تعمل شركة الأفلاك المتحدة على تطوير مشاريع نوعية تدعم التنمية الحضرية المستدامة، ومنها:'
              )}
            </p>
          </div>
          <button className="font-bold text-dark-emerald">
            {t('Our Future Projects', 'مشاريعنا المستقبلية')}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] mb-6 shadow-sm border border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-dark-emerald shadow-lg uppercase tracking-wide">
                    {t(project.category, project.category === 'Residential' ? 'سكني' : project.category === 'Commercial' ? 'تجاري' : 'ضيافة')}
                  </span>
                </div>

              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold text-dark-emerald mb-2 group-hover:text-gold transition-colors">
                    {t(project.title, project.titleAr)}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {t(project.description, project.descriptionAr)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
