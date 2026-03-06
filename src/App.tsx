import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Shield, Clock, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Impressum, PrivacyPolicy } from './LegalPages';

const Navbar = ({ onNavigate }: { onNavigate: (view: 'home' | 'impressum' | 'privacy') => void }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { name: t('nav.lang_en'), code: 'en' },
    { name: t('nav.lang_de'), code: 'de' },
    { name: t('nav.lang_hr'), code: 'hr' },
    { name: t('nav.lang_sl'), code: 'sl' }
  ];

  const handleLangSelect = (langCode: string) => {
    setCurrentLang(langCode);
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
    
    const url = new URL(window.location.href);
    url.searchParams.set('lang', langCode);
    window.history.pushState({}, '', url);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22H22L12 2Z" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M12 10L8 18H16L12 10Z" fill="var(--color-accent)"/>
          </svg>
          <span className="font-serif text-2xl tracking-widest uppercase">SAMI</span>
        </div>
        <div className="hidden md:flex items-center gap-10 micro-label">
          <button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">{t('nav.home')}</button>
          <a href="#expertise" onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">{t('nav.expertise')}</a>
          <a href="#systems" onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">{t('nav.systems')}</a>
        </div>
        <div className="relative" ref={langRef}>
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="border border-accent/50 text-accent px-6 py-2.5 micro-label hover:bg-accent hover:text-bg transition-all duration-300 flex items-center gap-2"
          >
            {t('nav.languages')}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-bg border border-white/10 shadow-xl py-2 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className={`w-full text-left px-6 py-3 micro-label hover:bg-white/5 transition-colors flex items-center justify-between ${currentLang === lang.code ? 'text-accent' : 'text-white/70'}`}
                >
                  {lang.name}
                  {currentLang === lang.code && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-start overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ clipPath: 'inset(0 0 0 0)' }}>
        <div className="fixed inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover object-center opacity-30"
          >
            <source src="https://cdn.coverr.co/videos/coverr-walking-in-a-luxury-hotel-lobby-2649/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg z-10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl font-serif leading-[0.95] mb-8 font-light tracking-tight">
            {t('hero.title_1')} <br />
            <span className="italic text-accent">{t('hero.title_2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-6 max-w-2xl font-light leading-relaxed">
            {t('hero.desc_1')}
          </p>
          <p className="text-base md:text-lg text-white/50 mb-10 max-w-2xl font-light leading-relaxed">
            {t('hero.desc_2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 text-sm font-light text-accent">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> {t('hero.bullet_1')}</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> {t('hero.bullet_2')}</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> {t('hero.bullet_3')}</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="hidden lg:flex flex-col items-center gap-6 absolute right-12 top-1/2 -translate-y-1/2"
        >
          <span className="vertical-text micro-label tracking-[0.4em] text-white/30">{t('hero.vertical')}</span>
          <div className="w-[1px] h-24 bg-white/20"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  return (
    <section className="border-y border-white/5 bg-bg-light relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-white/5">
          <div className="text-center px-4">
            <div className="text-5xl md:text-6xl font-serif text-accent mb-4 font-light tracking-tight">15+</div>
            <div className="micro-label">{t('stats.years')}</div>
          </div>
          <div className="text-center px-4">
            <div className="text-5xl md:text-6xl font-serif text-accent mb-4 font-light tracking-tight">200+</div>
            <div className="micro-label">{t('stats.estates')}</div>
          </div>
          <div className="text-center px-4">
            <div className="text-5xl md:text-6xl font-serif text-accent mb-4 font-light tracking-tight">100%</div>
            <div className="micro-label">{t('stats.discretion')}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="expertise" className="py-32 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://i.imgur.com/6BTn5jw.webp" 
              alt="Modern House Exterior" 
              className="w-full h-[650px] object-cover rounded-sm opacity-90"
            />
            <div className="absolute -bottom-16 -right-12 w-2/3 hidden md:block border-[8px] border-bg">
              <img 
                src="https://i.imgur.com/N8IzX2O.webp" 
                alt="Modern Bathroom" 
                className="w-full h-[350px] object-cover rounded-sm opacity-90"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-16"
          >
            <div className="micro-label mb-6 text-accent">{t('about.label')}</div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 font-light">
              {t('about.title_1')} <br />
              <span className="italic">{t('about.title_2')}</span> <br />
              {t('about.title_3')}
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              {t('about.desc_1')}
            </p>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
              {t('about.desc_2')}
            </p>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              {t('about.desc_3')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-xl mb-2">{t('about.bullet_title')}</h4>
                  <p className="text-white/50 font-light text-sm leading-relaxed">{t('about.bullet_desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t('systems.s1_title'),
      desc: t('systems.s1_desc'),
      image: "https://i.imgur.com/Ui8zP0k.webp",
      fallback: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
    },
    {
      title: t('systems.s2_title'),
      desc: t('systems.s2_desc'),
      image: "https://i.imgur.com/MypaiXp.webp",
      fallback: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80"
    },
    {
      title: t('systems.s3_title'),
      desc: t('systems.s3_desc'),
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    },
    {
      title: t('systems.s4_title'),
      desc: t('systems.s4_desc'),
      image: "https://i.imgur.com/qP01mft.webp",
      fallback: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="systems" className="py-32 bg-bg-light relative overflow-hidden border-y border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div>
          <div className="micro-label mb-4 text-accent">{t('systems.label')}</div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight font-light">
            {t('systems.title_1')} <br />{t('systems.title_2')}
          </h2>
        </div>
        <p className="text-white/50 text-sm font-light max-w-sm text-right leading-relaxed">
          {t('systems.desc')}
        </p>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative h-[550px] overflow-hidden cursor-pointer rounded-sm"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                onError={(e) => {
                  if (service.fallback) {
                    (e.target as HTMLImageElement).src = service.fallback;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="w-8 h-[1px] bg-accent mb-4 transition-all duration-500 group-hover:w-12"></div>
                <h3 className="text-2xl font-serif text-white mb-2 font-light">{service.title}</h3>
                <p className="text-white/60 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformation = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:pr-12"
          >
            <div className="micro-label mb-6 text-accent">{t('transformation.label')}</div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 font-light">
              {t('transformation.title_1')} <br />
              <span className="italic">{t('transformation.title_2')}</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
              {t('transformation.desc')}
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-white/70 font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {t('transformation.bullet_1')}
              </div>
              <div className="flex items-center gap-3 text-white/70 font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {t('transformation.bullet_2')}
              </div>
              <div className="flex items-center gap-3 text-white/70 font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {t('transformation.bullet_3')}
              </div>
              <div className="flex items-center gap-3 text-white/70 font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {t('transformation.bullet_4')}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center justify-center w-full py-12 lg:py-0"
          >
            <div className="bg-bg/80 backdrop-blur-md border border-white/10 p-10 rounded-sm w-full max-w-md text-center shadow-2xl">
              <div className="text-accent font-serif text-5xl mb-3">{t('transformation.guarantee_years')}</div>
              <div className="micro-label text-lg tracking-widest">{t('transformation.guarantee_label')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, title, description }: BeforeAfterSliderProps) => {
  const { t } = useTranslation();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-4xl mx-auto mb-24"
    >
      <div 
        ref={containerRef}
        className="relative h-[600px] md:h-[800px] overflow-hidden rounded-sm bg-bg border border-white/10 shadow-2xl cursor-ew-resize select-none group"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* Before Image (Background) */}
        <img 
          src={beforeImage} 
          alt="Before Coating"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80";
          }}
        />
        <div className="absolute top-6 left-6 z-10 bg-bg/80 backdrop-blur-md px-4 py-2 border border-white/10 pointer-events-none">
          <span className="micro-label text-white">{t('slider.before')}</span>
        </div>

        {/* After Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <img 
            src={afterImage} 
            alt="After Coating"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute top-6 right-6 z-10 bg-accent/90 backdrop-blur-md px-4 py-2 border border-accent-hover pointer-events-none">
            <span className="micro-label text-bg font-bold">{t('slider.after')}</span>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-accent pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bg border-2 border-accent rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <div className="flex gap-1">
              <ChevronLeft className="w-4 h-4 text-accent" />
              <ChevronRight className="w-4 h-4 text-accent" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="font-serif text-3xl mb-3 font-light text-white">
          {title}
        </h3>
        <p className="text-white/70 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const CaseStudy = () => {
  const { t } = useTranslation();
  return (
    <section id="case-study" className="py-32 bg-bg-light relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="micro-label mb-4 text-accent">{t('case_study.label')}</div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight font-light mb-6">
            {t('case_study.title_1')} <br /><span className="italic">{t('case_study.title_2')}</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
            {t('case_study.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-light text-white/70">
            <span className="px-4 py-2 border border-white/10 rounded-full">{t('case_study.tag_1')}</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">{t('case_study.tag_2')}</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">{t('case_study.tag_3')}</span>
            <span className="px-4 py-2 border border-white/10 rounded-full">{t('case_study.tag_4')}</span>
          </div>
        </motion.div>

        <BeforeAfterSlider 
          beforeImage="https://i.imgur.com/2LDVaoE.webp"
          afterImage="https://i.imgur.com/VUG5T2J.webp"
          title={t('case_study.s1_title')}
          description={t('case_study.s1_desc')}
        />

        <BeforeAfterSlider 
          beforeImage="https://i.imgur.com/AxAQ8Et.webp"
          afterImage="https://i.imgur.com/QklU05t.webp"
          title={t('case_study.s2_title')}
          description={t('case_study.s2_desc')}
        />

        <BeforeAfterSlider 
          beforeImage="https://i.imgur.com/dc4UtRW.webp"
          afterImage="https://i.imgur.com/3UBPjuS.webp"
          title={t('case_study.s3_title')}
          description={t('case_study.s3_desc')}
        />
      </div>
    </section>
  );
};

const Continuum = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-bg border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <div className="micro-label mb-6 text-accent">{t('continuum.label')}</div>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 font-light">
          {t('continuum.title_1')} <br />
          <span className="italic">{t('continuum.title_2')}</span>
        </h2>
        <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
          {t('continuum.desc')}
        </p>
        <p className="text-2xl font-serif text-white/90 italic">
          {t('continuum.quote')}
        </p>
      </motion.div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1')
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2')
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3')
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4')
    }
  ];

  return (
    <section className="py-32 bg-bg-light border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="micro-label mb-4 text-accent">{t('faq.label')}</div>
          <h2 className="text-4xl font-serif font-light">{t('faq.title')}</h2>
        </motion.div>
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-b border-white/10 pb-8"
            >
              <h4 className="text-xl font-serif mb-4 text-white/90">{faq.q}</h4>
              <p className="text-white/60 font-light leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (view: 'home' | 'impressum' | 'privacy') => void }) => {
  const { t } = useTranslation();
  return (
    <footer className="bg-bg py-16 border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12"
      >
        <div className="flex flex-col gap-5 text-center md:text-left">
          <span className="micro-label">{t('footer.nav')}</span>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('home')} className="text-sm font-light text-white/50 hover:text-accent transition-colors">{t('nav.home')}</button>
            <a href="#expertise" onClick={() => onNavigate('home')} className="text-sm font-light text-white/50 hover:text-accent transition-colors">{t('nav.expertise')}</a>
            <a href="#systems" onClick={() => onNavigate('home')} className="text-sm font-light text-white/50 hover:text-accent transition-colors">{t('nav.systems')}</a>
          </div>
        </div>
        
        <div>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hover:opacity-100 transition-opacity">
            <path d="M12 2L2 22H22L12 2Z" stroke="var(--color-accent)" strokeWidth="1" strokeLinejoin="round"/>
            <path d="M12 10L8 18H16L12 10Z" fill="var(--color-accent)"/>
          </svg>
        </div>
        
        <div className="flex flex-col gap-5 text-center md:text-right">
          <span className="micro-label">{t('footer.direct')}</span>
          <div className="flex flex-col gap-2">
            <a href="mailto:beschichtung.sami@outlook.com" className="text-sm font-light text-white/50 hover:text-accent transition-colors">beschichtung.sami@outlook.com</a>
            <a href="tel:+436767611929" className="text-sm font-light text-white/50 hover:text-accent transition-colors">+43 676 7611 929</a>
            <a href="tel:+436641428611" className="text-sm font-light text-white/50 hover:text-accent transition-colors">+43 664 1428 611</a>
            <a href="tel:+38670642132" className="text-sm font-light text-white/50 hover:text-accent transition-colors">+386 70 642 132</a>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-xs font-light text-white/30">
          {t('footer.rights')}
        </p>
        <div className="flex gap-4 text-xs font-light text-white/30">
          <button onClick={() => { onNavigate('privacy'); window.scrollTo(0, 0); }} className="hover:text-white/60 transition-colors">{t('footer.privacy')}</button>
          <button onClick={() => { onNavigate('impressum'); window.scrollTo(0, 0); }} className="hover:text-white/60 transition-colors">{t('footer.impressum')}</button>
        </div>
      </motion.div>
    </footer>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'impressum' | 'privacy'>('home');

  return (
    <div className="min-h-screen bg-bg text-white selection:bg-accent selection:text-bg font-sans bg-grain">
      <Navbar onNavigate={setCurrentView} />
      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            <Stats />
            <About />
            <Services />
            <Transformation />
            <CaseStudy />
            <Continuum />
            <FAQ />
          </motion.main>
        )}
        {currentView === 'impressum' && (
          <Impressum key="impressum" onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'privacy' && (
          <PrivacyPolicy key="privacy" onBack={() => setCurrentView('home')} />
        )}
      </AnimatePresence>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}
