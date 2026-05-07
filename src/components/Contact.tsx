import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-saudi-green font-bold uppercase tracking-widest text-sm mb-4 block">
              {t('Get in Touch', 'تواصل معنا')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-emerald mb-8">
              {t('Let\'s Discuss Your ', 'لنناقش ')}<br />
              {t('Next ', 'معلمك ')} <span className="text-gold italic font-serif">{t('Landmark.', 'القادم.')}</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-md">
              {t(
                'Whether you are looking for a new residence, business hub, or partnership, our team is ready to assist you.',
                'سواء كنت تبحث عن سكن جديد، أو مركز أعمال، أو شراكة، فإن فريقنا مستعد لمساعدتك.'
              )}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-cream flex items-center justify-center rounded-2xl group-hover:bg-saudi-green group-hover:text-white transition-all text-saudi-green">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">
                    {t('Email Us', 'راسلنا عبر البريد')}
                  </p>
                  <p className="text-lg font-bold text-dark-emerald">info@aflak.sa</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-cream flex items-center justify-center rounded-2xl group-hover:bg-saudi-green group-hover:text-white transition-all text-saudi-green">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">
                    {t('Call Us', 'اتصل بنا')}
                  </p>
                  <p className="text-lg font-bold text-dark-emerald">+966 11 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-cream flex items-center justify-center rounded-2xl group-hover:bg-saudi-green group-hover:text-white transition-all text-saudi-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">
                    {t('Our Office', 'مكتبنا')}
                  </p>
                  <p className="text-lg font-bold text-dark-emerald">
                    {t('King Fahd Road, Sky Tower, Riyadh', 'طريق الملك فهد، برج سكاي، الرياض')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button key={i} className="w-12 h-12 bg-cream text-dark-emerald flex items-center justify-center rounded-full hover:bg-gold hover:text-dark-emerald transition-all shadow-sm">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream/40 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm"
          >
            <form className="space-y-6 text-left rtl:text-right">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400 mx-1">
                    {t('Full Name', 'الاسم الكامل')}
                  </label>
                  <input 
                    type="text" 
                    placeholder={t('John Doe', 'فلان الفلاني')}
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-saudi-green outline-none transition-all placeholder:text-slate-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-slate-400 mx-1">
                    {t('Work Email', 'البريد الإلكتروني')}
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-saudi-green outline-none transition-all placeholder:text-slate-300" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-400 mx-1">
                  {t('Subject', 'الموضوع')}
                </label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-saudi-green outline-none appearance-none transition-all text-slate-900">
                  <option>{t('Residential Project Inquiry', 'استفسار عن مشروع سكني')}</option>
                  <option>{t('Commercial Development', 'تطوير تجاري')}</option>
                  <option>{t('Consultancy Services', 'خدمات استشارية')}</option>
                  <option>{t('Investment Opportunities', 'فرص استثمارية')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-400 mx-1">
                  {t('Message', 'الرسالة')}
                </label>
                <textarea 
                  rows={4} 
                  placeholder={t('Tell us about your project...', 'أخبرنا عن مشروعك...')}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-saudi-green outline-none transition-all placeholder:text-slate-300 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-saudi-green text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-dark-emerald transition-all shadow-xl group">
                {t('Send Message', 'إرسال الرسالة')}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:-rotate-90 rtl:group-hover:-translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] rounded-[3rem] overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 bg-slate-200 border border-slate-100 flex items-center justify-center">
            <div className="text-center">
                <MapPin className="text-saudi-green w-10 h-10 mx-auto mb-4" />
                <p className="text-dark-emerald font-bold text-xl">
                  {t('Riyadh Sky Tower Location', 'موقع برج سكاي الرياض')}
                </p>
                <p className="text-slate-500">
                  {t('Interactive map view under development', 'عرض الخارطة التفاعلية قيد التطوير')}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
