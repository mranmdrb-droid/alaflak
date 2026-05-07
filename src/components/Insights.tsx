import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Insights() {
  const { lang, t } = useLanguage();

  const posts = [
    {
      title: 'The Future of Sustainable Urbanism in Riyadh',
      titleAr: 'مستقبل العمران المستدام في الرياض',
      date: 'May 12, 2026',
      dateAr: '١٢ مايو ٢٠٢٦',
      category: 'Market Trends',
      categoryAr: 'اتجهات السوق',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Traditional Najdi Elements in Modern Design',
      titleAr: 'العناصر النجدية التقليدية في التصميم الحديث',
      date: 'April 28, 2026',
      dateAr: '٢٨ أبريل ٢٠٢٦',
      category: 'Design',
      categoryAr: 'تصميم',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Impact of Vision 2030 on Real Estate Investment',
      titleAr: 'أثر رؤية 2030 على الاستثمار العقاري',
      date: 'April 15, 2026',
      dateAr: '١٥ أبريل ٢٠٢٦',
      category: 'Economy',
      categoryAr: 'اقتصاد',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-cream/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-16 px-2">
            <div className="max-w-xl">
                <span className="text-saudi-green font-bold uppercase tracking-widest text-sm mb-4 block">
                  {t('Aflak Insights', 'رؤى أفلاك')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-emerald mb-4">
                  {t('Market News.', 'أخبار السوق.')}
                </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 font-bold text-saudi-green hover:gap-4 transition-all">
                {t('Read All News', 'اقرأ جميع الأخبار')} <ArrowRight size={20} className="rtl:rotate-180" />
            </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-4 ${lang === 'en' ? 'left-4' : 'right-4'} bg-saudi-green text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full`}>
                  {t(post.category, post.categoryAr)}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-4">
                  <Calendar size={14} />
                  {t(post.date, post.dateAr)}
                </div>
                <h3 className="text-xl font-bold text-dark-emerald mb-3 group-hover:text-saudi-green transition-colors leading-tight">
                  {t(post.title, post.titleAr)}
                </h3>
                <a href="#" className="inline-flex items-center gap-2 text-dark-emerald font-bold text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors mt-4">
                  {t('Read Article', 'اقرأ المقال')}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
