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
        <ArrowLeft className="w-4 h-4" /> BACK
      </button>
      
      <h1 className="text-4xl md:text-5xl font-serif font-light mb-12">{t('footer.impressum')}</h1>
      
      <div className="space-y-8 text-white/70 font-light leading-relaxed">
        <section>
          <h2 className="text-xl font-serif text-white mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            SAMI Sovereign Surface Engineering<br />
            [Ihre Straße und Hausnummer]<br />
            [PLZ und Ort]<br />
            [Land]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">Kontakt</h2>
          <p>
            Telefon: +43 676 7611 929<br />
            E-Mail: beschichtung.sami@outlook.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [Ihre USt-IdNr.]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
        <ArrowLeft className="w-4 h-4" /> BACK
      </button>
      
      <h1 className="text-4xl md:text-5xl font-serif font-light mb-12">{t('footer.privacy')}</h1>
      
      <div className="space-y-8 text-white/70 font-light leading-relaxed">
        <section>
          <h2 className="text-xl font-serif text-white mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-serif text-white/90 mb-2">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">2. Hosting</h2>
          <p className="mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Hostinger.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-lg font-serif text-white/90 mb-2">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <h3 className="text-lg font-serif text-white/90 mb-2">Verantwortliche Stelle</h3>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            SAMI Sovereign Surface Engineering<br />
            [Ihre Straße und Hausnummer]<br />
            [PLZ und Ort]<br />
            Telefon: +43 676 7611 929<br />
            E-Mail: beschichtung.sami@outlook.com
          </p>
        </section>
      </div>
    </motion.div>
  );
};
