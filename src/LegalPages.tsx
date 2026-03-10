import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
  key?: string;
}

export const Impressum = ({ onBack }: LegalPageProps) => {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-4xl mx-auto px-6 py-32 min-h-screen"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-accent hover:text-white transition-colors mb-12 micro-label"
      >
        <ArrowLeft className="w-4 h-4" /> {t('legal.back')}
      </button>
      
      <h1 className="text-4xl md:text-5xl font-serif font-light mb-12">{t('footer.impressum')}</h1>
      
      <div className="space-y-8 text-white/70 font-light leading-relaxed">
        <section>
          <h2 className="text-xl font-serif text-white mb-4">{t('legal.impressum.sec1_title')}</h2>
          <p>
            SAMI Sovereign Surface Engineering - Safeta Gerzic<br />
            Auerbach 55<br />
            5224 Auerbach<br />
            Austria
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">{t('legal.impressum.sec2_title')}</h2>
          <p>
            {t('legal.impressum.phone')}: +43 676 7611 929<br />
            {t('legal.impressum.email')}: beschichtung.sami@outlook.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">{t('legal.impressum.sec3_title')}</h2>
          <p>
            {t('legal.impressum.sec3_desc')}:<br />
            ATU 82571646
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">{t('legal.impressum.sec4_title')}</h2>
          <p>
            {t('legal.impressum.sec4_desc')}
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export const PrivacyPolicy = ({ onBack }: LegalPageProps) => {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-4xl mx-auto px-6 py-32 min-h-screen"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-accent hover:text-white transition-colors mb-12 micro-label"
      >
        <ArrowLeft className="w-4 h-4" /> {t('legal.back')}
      </button>
      
      <h1 className="text-4xl md:text-5xl font-serif font-light mb-12">{t('footer.privacy')}</h1>
      
      <div className="space-y-8 text-white/70 font-light leading-relaxed">
        <section>
          <h2 className="text-xl font-serif text-white mb-4">{t('legal.privacy.sec1_title')}</h2>
          <h3 className="text-lg font-serif text-white/90 mb-2">{t('legal.privacy.sec1_subtitle')}</h3>
          <p className="mb-4">
            {t('legal.privacy.sec1_desc')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">{t('legal.privacy.sec2_title')}</h2>
          <p className="mb-4">
            {t('legal.privacy.sec2_desc')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">{t('legal.privacy.sec3_title')}</h2>
          <h3 className="text-lg font-serif text-white/90 mb-2">{t('legal.privacy.sec3_subtitle1')}</h3>
          <p className="mb-4">
            {t('legal.privacy.sec3_desc1')}
          </p>
          <h3 className="text-lg font-serif text-white/90 mb-2">{t('legal.privacy.sec3_subtitle2')}</h3>
          <p className="mb-4">
            {t('legal.privacy.sec3_desc2')}<br /><br />
            SAMI Sovereign Surface Engineering - Safeta Gerzic<br />
            Auerbach 55<br />
            5224 Auerbach<br />
            Austria<br />
            {t('legal.impressum.phone')}: +43 676 7611 929<br />
            {t('legal.impressum.email')}: beschichtung.sami@outlook.com
          </p>
        </section>
      </div>
    </motion.div>
  );
};
