/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { lang } = useLanguage();
  
  return (
    <div className="min-h-screen relative" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

