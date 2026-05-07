import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export default function Footer() {
  const { lang, t } = useLanguage();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark-emerald text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Logo light={true} />
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              {t(
                'Al-Aflak United Real Estate Company is a leader in developing sustainable and modern projects across the Kingdom.',
                'شركة الأفلاك المتحدة للتطوير العقاري هي شركة رائدة في تطوير مشاريع مستدامة وعصرية في جميع أنحاء المملكة.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">{t('Quick Links', 'روابط سريعة')}</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-gold transition-colors">{t('Our Vision', 'رؤيتنا')}</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">{t('Services', 'الخدمات')}</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">{t('Projects', 'المشاريع')}</a></li>
            </ul>
          </div>

          {/* Certification */}
          <div>
            <h4 className="text-lg font-bold mb-8">{t('Accreditation', 'الاعتمادات')}</h4>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-sm font-semibold text-gold leading-relaxed">
                {t('Certified Real Estate Developer', 'حاصل على شهادة تأهيل مطور عقاري')}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {t('Aflak Real Estate Development. All rights reserved.', 'جميع الحقوق محفوظة لأفلاك للتطوير العقاري.')}
          </p>
          <div className="flex items-center gap-8">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gold hover:text-white transition-colors"
            >
              {t('Back to Top', 'العودة للأعلى')} <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
