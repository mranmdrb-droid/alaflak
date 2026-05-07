import { motion } from 'motion/react';
import { Eye, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import architectureImg from '../assets/images/regenerated_image_1778099496319.png';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { 
      title: 'Vision', 
      titleAr: 'رؤيتنا', 
      icon: <Eye />, 
      text: 'To be a leader in real estate development in the Kingdom through sustainable projects.',
      textAr: 'أن نكون من رواد التطوير العقاري في المملكة، عبر تقديم مشاريع مستدامة وعصرية تلبي احتياجات السوق وتسهم في تحقيق أهداف رؤية السعودية 2030'
    },
    { 
      title: 'Mission', 
      titleAr: 'رسالتنا', 
      icon: <Mail />, 
      text: 'Committed to developing distinguished real estate projects in terms of quality and design.',
      textAr: 'نلتزم بتطوير مشاريع عقارية متميزة من حيث الجودة والتصميم مع توفير حلول مبتكرة تسهم في تحسين جودة الحياة. ودعم التنمية المستدامة.'
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-dark-emerald font-bold uppercase tracking-widest text-sm mb-4 block">
                {t('Al-Aflak United', 'شركة الأفلاك المتحدة')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-emerald mb-8 leading-tight">
                {t('Who Are We?', 'من نحن')}
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  {t(
                    'At Al-Aflak United, we believe that real estate is not just an investment, but part of an integrated vision for building a sustainable future. The company is committed to developing real estate projects that reflect the highest standards of quality and innovation.',
                    'في شركة الأفلاك المتحدة نؤمن بأن العقار ليس مجرد استثمار، بل هو جزء من رؤية متكاملة لبناء مستقبل مستدام التزمت الشركة بتطوير مشاريع عقارية تعكس أعلى معايير الجودة والابتكار، مع التركيز على الاستدامة وتوفير بيئات سكنية وتجارية متميزة.'
                  )}
                </p>
                <p>
                  {t(
                    'The company works in strategic partnerships with elite engineering offices to ensure modern architectural designs that combine creativity and functionality. Its projects are inspired by Saudi Vision 2030, making it a leader in developing modern communities that keep pace with aspirations.',
                    'تعمل الشركة بشراكات استراتيجية مع نخبة من المكاتب الهندسية، لضمان تقديم تصاميم معمارية عصرية تجمع بين الإبداع والوظائف العملية. كما تستلهم مشاريعها من رؤية السعودية 2030 مما يجعلها رائدة في تطوير مجتمعات حديثة ومتطورة تواكب تطلعات الأفراد والمستثمرين.'
                  )}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-[3.5rem] overflow-hidden hidden lg:block shadow-2xl"
            >
              <img 
                src={architectureImg} 
                alt="Modern Saudi Architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-emerald/40 to-transparent"></div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="p-10 rounded-[2.5rem] border border-slate-100 bg-cream/30 hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-dark-emerald text-white flex items-center justify-center rounded-2xl group-hover:bg-gold transition-colors">
                    {v.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-dark-emerald mb-4">
                  {t(v.title, v.titleAr)}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t(v.text, v.textAr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
