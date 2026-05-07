import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Microscope, Award, Leaf, CreditCard, Users } from 'lucide-react';

export default function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: 'Advanced Engineering',
      titleAr: 'تصاميم هندسية متطورة',
      text: 'In collaboration with elite engineering offices.',
      textAr: 'بالتعاون مع نخبة من المكاتب الهندسية المتميزة لضمان الإبداع والوظائف العملية.',
      icon: <Microscope className="w-8 h-8" />
    },
    {
      title: 'Global Quality',
      titleAr: 'معايير جودة عالمية',
      text: 'Ensuring project sustainability and high investment value.',
      textAr: 'تضمن استدامة المشاريع وقيمتها الاستثمارية العالية وفق أحدث المعايير.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Sustainability',
      titleAr: 'التزام بالاستدامة',
      text: 'Developing projects based on smart and eco-friendly solutions.',
      textAr: 'تطوير مشاريع تعتمد على الحلول الذكية والصديقة للبيئة.',
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: 'Financial Flexibility',
      titleAr: 'خطط مالية مرنة',
      text: 'Options that suit both investors and owners.',
      textAr: 'خطط مالية متنوعة تناسب احتياجات المستثمرين والملاك على حد سواء.',
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: 'Strategic Partnerships',
      titleAr: 'شراكات استراتيجية',
      text: 'Expertise that strengthens our position in the market.',
      textAr: 'خبرة وشراكات قوية تعزز قوة الشركة في سوق العقارات السعودي.',
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-dark-emerald font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            {t('Our Edge', 'مميزاتنا')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-dark-emerald"
          >
            {t('Why Al-Aflak United?', 'لماذا نحن؟')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-dark-emerald mb-6 group-hover:bg-dark-emerald group-hover:text-white transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-emerald mb-3">
                {t(reason.title, reason.titleAr)}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t(reason.text, reason.textAr)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
