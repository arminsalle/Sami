import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "expertise": "Expertise",
        "systems": "Systems",
        "contact": "Contact",
        "languages": "Languages"
      },
      "hero": {
        "established": "Established 2004",
        "title_1": "We Don’t Just Coat.",
        "title_2": "We Refine. We Protect.",
        "desc_1": "Professional nano coating solutions for hotels, gastronomy, and high-end commercial properties.",
        "desc_2": "Using advanced coating systems developed and manufactured in Germany by SST Oberflächentechnik, we create long-term surface protection on a molecular level — hydrophobic, dirt-repellent, and highly resistant.",
        "bullet_1": "Reduced maintenance costs",
        "bullet_2": "Maximum asset protection",
        "bullet_3": "Visibly enhanced surfaces",
        "btn": "Request Consultation",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "years": "Years Experience",
        "estates": "Estates Protected",
        "discretion": "Discretion"
      },
      "about": {
        "label": "Institution / About",
        "title_1": "Nano Coating as a",
        "title_2": "Strategic Asset",
        "title_3": "Protection System",
        "desc_1": "Our work begins where conventional cleaning ends.",
        "desc_2": "A professional nano coating permanently seals glass, natural stone, ceramics, stainless steel, and premium materials. It forms an invisible protective layer against moisture, limescale, grease, environmental impact, and daily wear.",
        "desc_3": "In high-traffic environments — hotels, restaurants, corporate spaces — the condition of surfaces defines the perception of quality.",
        "bullet_title": "Consistently Exceptional",
        "bullet_desc": "We ensure that this perception of quality remains consistently exceptional."
      },
      "systems": {
        "label": "Systems",
        "title_1": "Precision. Analysis.",
        "title_2": "Long-Term Protection.",
        "desc": "Every property has unique materials, exposure levels, and performance requirements. That is why we do not apply standard solutions — we engineer customized coating systems.",
        "s1_title": "Material Analysis",
        "s1_desc": "Material and condition analysis.",
        "s2_title": "Surface Preparation",
        "s2_desc": "Professional deep surface preparation.",
        "s3_title": "Nano Application",
        "s3_desc": "Application of nano coating systems by SST Oberflächentechnik (Germany).",
        "s4_title": "Quality Inspection",
        "s4_desc": "Controlled curing and quality inspection, plus documentation and maintenance guidance."
      },
      "transformation": {
        "label": "We Don't Just Clean. We Reforge.",
        "title_1": "Cleaning is temporary.",
        "title_2": "Nano sealing is strategic.",
        "desc": "Thanks to its hydrophobic and dirt-repellent properties, water, grease, and contaminants bead off effortlessly. Surfaces remain cleaner for longer, become more resistant to abrasion, and require significantly less maintenance.",
        "bullet_1": "Fewer cleaning cycles",
        "bullet_2": "Reduced chemical usage",
        "bullet_3": "Lower operational costs",
        "bullet_4": "Sustainable protection of your investment",
        "btn": "Request Consultation",
        "guarantee_years": "5 Year",
        "guarantee_label": "Performance Guarantee"
      },
      "slider": {
        "before": "Before",
        "after": "After"
      },
      "case_study": {
        "label": "The Sovereign Reset",
        "title_1": "Structured Restoration",
        "title_2": "Within a Defined Timeframe",
        "desc": "For heavily used properties, we provide a comprehensive surface restoration program. All relevant surfaces are refined and permanently nano-sealed. The result is a technically optimized, visually enhanced, and long-term protected property environment.",
        "tag_1": "Deep-clean glass & façades",
        "tag_2": "Restore sanitary & wet areas",
        "tag_3": "Protect natural stone & flooring",
        "tag_4": "Seal kitchen & gastronomy surfaces",
        "s1_title": "Degraded vs. Sovereign Finish",
        "s1_desc": "Drag the slider to reveal the transformation. Years of foot traffic and micro-abrasions are completely sealed, restoring a rich, deep black color with a premium sheen.",
        "s2_title": "Kitchen Surface Restoration",
        "s2_desc": "Drag the slider to reveal the transformation. Heavy grease and grime buildup is completely removed and sealed, restoring the original surface.",
        "s3_title": "Sanitary & Wet Area Restoration",
        "s3_desc": "Drag the slider to reveal the transformation. Limescale, soap scum, and water stains are removed and the surface is nano-sealed for long-lasting protection."
      },
      "continuum": {
        "label": "The Continuum",
        "title_1": "Continuous Performance",
        "title_2": "Instead of One-Time Intervention",
        "desc": "Long-term asset protection requires a system. With our structured monitoring concept, we assess coated surfaces, evaluate wear exposure, and recommend targeted refresh cycles when necessary.",
        "quote": "\"Your property does not just stay clean — it remains at peak performance.\""
      },
      "faq": {
        "label": "Knowledge Base",
        "title": "FAQ – Nano Coating",
        "q1": "How long does a nano coating last?",
        "a1": "Depending on material and exposure, several years. Significantly more durable than conventional sealants.",
        "q2": "Is the coating visible?",
        "a2": "No. It is transparent and does not artificially alter the natural appearance of the surface.",
        "q3": "Is it suitable for gastronomy and food environments?",
        "a3": "Yes. The applied systems are engineered for demanding commercial applications.",
        "q4": "Which surfaces can be treated?",
        "a4": "Glass, natural stone, ceramics, stainless steel, metal, and most mineral-based materials."
      },
      "contact": {
        "label": "Contact / Request Quote",
        "title_1": "Request a",
        "title_2": "Private Consultation",
        "desc_1": "Would you like to reduce maintenance costs while securing the long-term value of your surfaces?",
        "desc_2": "Request a tailored surface analysis. Discrete. Precise. Systematic.",
        "hq": "Global Operations HQ, New York",
        "hours": "Mon-Fri, 9:00 AM - 6:00 PM EST",
        "form_name": "Full Name",
        "form_name_ph": "John Doe",
        "form_email": "Corporate Email",
        "form_email_ph": "john@company.com",
        "form_loc": "Property Location",
        "form_loc_ph": "City, Country",
        "form_sector": "Sector",
        "form_sector_ph": "Select Sector",
        "sector_1": "Hospitality",
        "sector_2": "Culinary",
        "sector_3": "Corporate",
        "sector_4": "Private Estate",
        "form_scope": "Project Scope",
        "form_scope_ph": "Briefly describe your requirements...",
        "btn": "Submit Request"
      },
      "footer": {
        "nav": "Navigation",
        "direct": "Direct Line",
        "rights": "© 2026 SAMI Sovereign Surface Engineering.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service"
      }
    }
  },
  de: {
    translation: {
      "nav": {
        "home": "Startseite",
        "expertise": "Expertise",
        "systems": "Systeme",
        "contact": "Kontakt",
        "languages": "Sprachen"
      },
      "hero": {
        "established": "Gegründet 2004",
        "title_1": "Wir beschichten nicht nur.",
        "title_2": "Wir veredeln. Wir schützen.",
        "desc_1": "Professionelle Nano-Beschichtungslösungen für Hotels, Gastronomie und hochwertige Gewerbeimmobilien.",
        "desc_2": "Mit fortschrittlichen Beschichtungssystemen, entwickelt und hergestellt in Deutschland von SST Oberflächentechnik, schaffen wir langfristigen Oberflächenschutz auf molekularer Ebene — hydrophob, schmutzabweisend und hochresistent.",
        "bullet_1": "Reduzierte Wartungskosten",
        "bullet_2": "Maximaler Werterhalt",
        "bullet_3": "Sichtbar aufgewertete Oberflächen",
        "btn": "Beratung anfordern",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "years": "Jahre Erfahrung",
        "estates": "Geschützte Immobilien",
        "discretion": "Diskretion"
      },
      "about": {
        "label": "Institution / Über uns",
        "title_1": "Nano-Beschichtung als",
        "title_2": "Strategisches",
        "title_3": "Schutzsystem",
        "desc_1": "Unsere Arbeit beginnt dort, wo herkömmliche Reinigung endet.",
        "desc_2": "Eine professionelle Nano-Beschichtung versiegelt dauerhaft Glas, Naturstein, Keramik, Edelstahl und Premium-Materialien. Sie bildet eine unsichtbare Schutzschicht gegen Feuchtigkeit, Kalk, Fett, Umwelteinflüsse und tägliche Abnutzung.",
        "desc_3": "In stark frequentierten Umgebungen — Hotels, Restaurants, Geschäftsräumen — definiert der Zustand der Oberflächen die Wahrnehmung von Qualität.",
        "bullet_title": "Konstant Außergewöhnlich",
        "bullet_desc": "Wir stellen sicher, dass diese Qualitätswahrnehmung konstant außergewöhnlich bleibt."
      },
      "systems": {
        "label": "Systeme",
        "title_1": "Präzision. Analyse.",
        "title_2": "Langzeitschutz.",
        "desc": "Jede Immobilie hat einzigartige Materialien, Belastungsgrade und Leistungsanforderungen. Deshalb wenden wir keine Standardlösungen an — wir entwickeln maßgeschneiderte Beschichtungssysteme.",
        "s1_title": "Materialanalyse",
        "s1_desc": "Material- und Zustandsanalyse.",
        "s2_title": "Oberflächenvorbereitung",
        "s2_desc": "Professionelle Tiefenreinigung der Oberfläche.",
        "s3_title": "Nano-Applikation",
        "s3_desc": "Anwendung von Nano-Beschichtungssystemen von SST Oberflächentechnik (Deutschland).",
        "s4_title": "Qualitätsprüfung",
        "s4_desc": "Kontrollierte Aushärtung und Qualitätsprüfung sowie Dokumentation und Pflegehinweise."
      },
      "transformation": {
        "label": "Wir reinigen nicht nur. Wir formen neu.",
        "title_1": "Reinigung ist temporär.",
        "title_2": "Nano-Versiegelung ist strategisch.",
        "desc": "Dank hydrophober und schmutzabweisender Eigenschaften perlen Wasser, Fett und Verunreinigungen mühelos ab. Oberflächen bleiben länger sauber, werden abriebfester und erfordern deutlich weniger Pflege.",
        "bullet_1": "Weniger Reinigungszyklen",
        "bullet_2": "Reduzierter Chemikalieneinsatz",
        "bullet_3": "Geringere Betriebskosten",
        "bullet_4": "Nachhaltiger Schutz Ihrer Investition",
        "btn": "Beratung anfordern",
        "guarantee_years": "5 Jahre",
        "guarantee_label": "Leistungsgarantie"
      },
      "slider": {
        "before": "Vorher",
        "after": "Nachher"
      },
      "case_study": {
        "label": "Der Sovereign Reset",
        "title_1": "Strukturierte Restaurierung",
        "title_2": "In einem definierten Zeitrahmen",
        "desc": "Für stark beanspruchte Immobilien bieten wir ein umfassendes Oberflächen-Restaurierungsprogramm. Alle relevanten Flächen werden veredelt und dauerhaft nano-versiegelt. Das Ergebnis ist eine technisch optimierte, optisch aufgewertete und langfristig geschützte Immobilienumgebung.",
        "tag_1": "Tiefenreinigung Glas & Fassaden",
        "tag_2": "Restaurierung Sanitär- & Nassbereiche",
        "tag_3": "Schutz Naturstein & Böden",
        "tag_4": "Versiegelung Küchen- & Gastronomieflächen",
        "s1_title": "Abgenutzt vs. Sovereign Finish",
        "s1_desc": "Ziehen Sie den Regler, um die Verwandlung zu sehen. Jahre von Fußgängerverkehr und Mikrokratzern werden vollständig versiegelt und eine satte, tiefschwarze Farbe mit Premium-Glanz wiederhergestellt.",
        "s2_title": "Restaurierung von Küchenoberflächen",
        "s2_desc": "Ziehen Sie den Regler, um die Verwandlung zu sehen. Starke Fett- und Schmutzablagerungen werden vollständig entfernt und versiegelt, wodurch die ursprüngliche Oberfläche wiederhergestellt wird.",
        "s3_title": "Restaurierung von Sanitär- & Nassbereichen",
        "s3_desc": "Ziehen Sie den Regler, um die Verwandlung zu sehen. Kalk, Seifenreste und Wasserflecken werden entfernt und die Oberfläche für langanhaltenden Schutz nano-versiegelt."
      },
      "continuum": {
        "label": "Das Kontinuum",
        "title_1": "Kontinuierliche Leistung",
        "title_2": "Statt einmaliger Intervention",
        "desc": "Langfristiger Werterhalt erfordert ein System. Mit unserem strukturierten Überwachungskonzept beurteilen wir beschichtete Oberflächen, bewerten die Abnutzung und empfehlen bei Bedarf gezielte Auffrischungszyklen.",
        "quote": "\"Ihre Immobilie bleibt nicht nur sauber — sie bleibt auf Höchstleistung.\""
      },
      "faq": {
        "label": "Wissensdatenbank",
        "title": "FAQ – Nano-Beschichtung",
        "q1": "Wie lange hält eine Nano-Beschichtung?",
        "a1": "Je nach Material und Beanspruchung mehrere Jahre. Deutlich langlebiger als herkömmliche Versiegelungen.",
        "q2": "Ist die Beschichtung sichtbar?",
        "a2": "Nein. Sie ist transparent und verändert das natürliche Aussehen der Oberfläche nicht künstlich.",
        "q3": "Ist sie für Gastronomie und Lebensmittelbereiche geeignet?",
        "a3": "Ja. Die angewandten Systeme sind für anspruchsvolle gewerbliche Anwendungen konzipiert.",
        "q4": "Welche Oberflächen können behandelt werden?",
        "a4": "Glas, Naturstein, Keramik, Edelstahl, Metall und die meisten mineralischen Materialien."
      },
      "contact": {
        "label": "Kontakt / Angebot anfordern",
        "title_1": "Fordern Sie eine",
        "title_2": "Private Beratung an",
        "desc_1": "Möchten Sie Wartungskosten senken und gleichzeitig den langfristigen Wert Ihrer Oberflächen sichern?",
        "desc_2": "Fordern Sie eine maßgeschneiderte Oberflächenanalyse an. Diskret. Präzise. Systematisch.",
        "hq": "Global Operations HQ, New York",
        "hours": "Mo-Fr, 9:00 - 18:00 EST",
        "form_name": "Vollständiger Name",
        "form_name_ph": "Max Mustermann",
        "form_email": "Firmen-E-Mail",
        "form_email_ph": "max@unternehmen.de",
        "form_loc": "Standort der Immobilie",
        "form_loc_ph": "Stadt, Land",
        "form_sector": "Sektor",
        "form_sector_ph": "Sektor wählen",
        "sector_1": "Hotellerie",
        "sector_2": "Gastronomie",
        "sector_3": "Unternehmen",
        "sector_4": "Privatanwesen",
        "form_scope": "Projektumfang",
        "form_scope_ph": "Beschreiben Sie kurz Ihre Anforderungen...",
        "btn": "Anfrage senden"
      },
      "footer": {
        "nav": "Navigation",
        "direct": "Direkter Kontakt",
        "rights": "© 2026 SAMI Sovereign Surface Engineering.",
        "privacy": "Datenschutzrichtlinie",
        "terms": "Nutzungsbedingungen"
      }
    }
  },
  hr: {
    translation: {
      "nav": {
        "home": "Početna",
        "expertise": "Stručnost",
        "systems": "Sustavi",
        "contact": "Kontakt",
        "languages": "Jezici"
      },
      "hero": {
        "established": "Osnovano 2004",
        "title_1": "Mi ne samo premazujemo.",
        "title_2": "Mi oplemenjujemo. Mi štitimo.",
        "desc_1": "Profesionalna rješenja nano premaza za hotele, gastronomiju i vrhunske komercijalne nekretnine.",
        "desc_2": "Korištenjem naprednih sustava premaza razvijenih i proizvedenih u Njemačkoj od strane SST Oberflächentechnik, stvaramo dugoročnu zaštitu površina na molekularnoj razini — hidrofobno, odbija prljavštinu i visoko otporno.",
        "bullet_1": "Smanjeni troškovi održavanja",
        "bullet_2": "Maksimalna zaštita imovine",
        "bullet_3": "Vidljivo poboljšane površine",
        "btn": "Zatražite konzultacije",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "years": "Godina iskustva",
        "estates": "Zaštićenih nekretnina",
        "discretion": "Diskrecija"
      },
      "about": {
        "label": "Institucija / O nama",
        "title_1": "Nano premaz kao",
        "title_2": "Strateški sustav",
        "title_3": "Zaštite imovine",
        "desc_1": "Naš rad počinje tamo gdje konvencionalno čišćenje završava.",
        "desc_2": "Profesionalni nano premaz trajno brtvi staklo, prirodni kamen, keramiku, nehrđajući čelik i vrhunske materijale. Stvara nevidljivi zaštitni sloj protiv vlage, kamenca, masti, utjecaja okoliša i svakodnevnog trošenja.",
        "desc_3": "U okruženjima s velikim prometom — hotelima, restoranima, korporativnim prostorima — stanje površina definira percepciju kvalitete.",
        "bullet_title": "Dosljedno iznimno",
        "bullet_desc": "Osiguravamo da ova percepcija kvalitete ostane dosljedno iznimna."
      },
      "systems": {
        "label": "Sustavi",
        "title_1": "Preciznost. Analiza.",
        "title_2": "Dugoročna zaštita.",
        "desc": "Svaka nekretnina ima jedinstvene materijale, razine izloženosti i zahtjeve za performansama. Zato ne primjenjujemo standardna rješenja — mi projektiramo prilagođene sustave premaza.",
        "s1_title": "Analiza materijala",
        "s1_desc": "Analiza materijala i stanja.",
        "s2_title": "Priprema površine",
        "s2_desc": "Profesionalna dubinska priprema površine.",
        "s3_title": "Nano aplikacija",
        "s3_desc": "Primjena sustava nano premaza tvrtke SST Oberflächentechnik (Njemačka).",
        "s4_title": "Inspekcija kvalitete",
        "s4_desc": "Kontrolirano stvrdnjavanje i inspekcija kvalitete, plus dokumentacija i smjernice za održavanje."
      },
      "transformation": {
        "label": "Mi ne samo čistimo. Mi preoblikujemo.",
        "title_1": "Čišćenje je privremeno.",
        "title_2": "Nano brtvljenje je strateško.",
        "desc": "Zahvaljujući hidrofobnim svojstvima i svojstvima odbijanja prljavštine, voda, mast i zagađivači lako skliznu. Površine ostaju dulje čiste, postaju otpornije na habanje i zahtijevaju znatno manje održavanja.",
        "bullet_1": "Manje ciklusa čišćenja",
        "bullet_2": "Smanjena upotreba kemikalija",
        "bullet_3": "Niži operativni troškovi",
        "bullet_4": "Održiva zaštita vaše investicije",
        "btn": "Zatražite konzultacije",
        "guarantee_years": "5 Godina",
        "guarantee_label": "Jamstvo performansi"
      },
      "slider": {
        "before": "Prije",
        "after": "Poslije"
      },
      "case_study": {
        "label": "Sovereign Reset",
        "title_1": "Strukturirana obnova",
        "title_2": "U definiranom vremenskom okviru",
        "desc": "Za jako korištene nekretnine pružamo sveobuhvatan program obnove površina. Sve relevantne površine su oplemenjene i trajno nano-brtvljene. Rezultat je tehnički optimizirano, vizualno poboljšano i dugoročno zaštićeno okruženje nekretnine.",
        "tag_1": "Dubinsko čišćenje stakla i fasada",
        "tag_2": "Obnova sanitarnih i mokrih čvorova",
        "tag_3": "Zaštita prirodnog kamena i podova",
        "tag_4": "Brtvljenje kuhinjskih i gastronomskih površina",
        "s1_title": "Degradirano vs. Sovereign završna obrada",
        "s1_desc": "Povucite klizač da biste otkrili transformaciju. Godine pješačkog prometa i mikro-abrazija potpuno su zapečaćene, vraćajući bogatu, duboku crnu boju s vrhunskim sjajem.",
        "s2_title": "Obnova kuhinjskih površina",
        "s2_desc": "Povucite klizač da biste otkrili transformaciju. Teške naslage masti i prljavštine potpuno su uklonjene i zapečaćene, vraćajući izvornu površinu.",
        "s3_title": "Obnova sanitarnih i mokrih čvorova",
        "s3_desc": "Povucite klizač da biste otkrili transformaciju. Kamenac, ostaci sapuna i mrlje od vode su uklonjeni, a površina je nano-zapečaćena za dugotrajnu zaštitu."
      },
      "continuum": {
        "label": "Kontinuum",
        "title_1": "Kontinuirane performanse",
        "title_2": "Umjesto jednokratne intervencije",
        "desc": "Dugoročna zaštita imovine zahtijeva sustav. S našim strukturiranim konceptom praćenja procjenjujemo premazane površine, ocjenjujemo izloženost trošenju i preporučujemo ciljane cikluse osvježavanja kada je to potrebno.",
        "quote": "\"Vaša nekretnina ne ostaje samo čista — ona ostaje na vrhuncu performansi.\""
      },
      "faq": {
        "label": "Baza znanja",
        "title": "FAQ – Nano premaz",
        "q1": "Koliko dugo traje nano premaz?",
        "a1": "Ovisno o materijalu i izloženosti, nekoliko godina. Znatno trajnije od konvencionalnih brtvila.",
        "q2": "Je li premaz vidljiv?",
        "a2": "Ne. Transparentan je i ne mijenja umjetno prirodni izgled površine.",
        "q3": "Je li prikladan za gastronomiju i prehrambena okruženja?",
        "a3": "Da. Primijenjeni sustavi projektirani su za zahtjevne komercijalne primjene.",
        "q4": "Koje se površine mogu tretirati?",
        "a4": "Staklo, prirodni kamen, keramika, nehrđajući čelik, metal i većina materijala na bazi minerala."
      },
      "contact": {
        "label": "Kontakt / Zatražite ponudu",
        "title_1": "Zatražite",
        "title_2": "Privatne konzultacije",
        "desc_1": "Želite li smanjiti troškove održavanja uz osiguranje dugoročne vrijednosti vaših površina?",
        "desc_2": "Zatražite prilagođenu analizu površine. Diskretno. Precizno. Sustavno.",
        "hq": "Global Operations HQ, New York",
        "hours": "Pon-Pet, 9:00 - 18:00 EST",
        "form_name": "Puno ime",
        "form_name_ph": "Ivan Horvat",
        "form_email": "Korporativna e-pošta",
        "form_email_ph": "ivan@tvrtka.hr",
        "form_loc": "Lokacija nekretnine",
        "form_loc_ph": "Grad, Država",
        "form_sector": "Sektor",
        "form_sector_ph": "Odaberite sektor",
        "sector_1": "Ugostiteljstvo",
        "sector_2": "Kulinarstvo",
        "sector_3": "Korporativno",
        "sector_4": "Privatno imanje",
        "form_scope": "Opseg projekta",
        "form_scope_ph": "Ukratko opišite svoje zahtjeve...",
        "btn": "Pošalji zahtjev"
      },
      "footer": {
        "nav": "Navigacija",
        "direct": "Izravna linija",
        "rights": "© 2026 SAMI Sovereign Surface Engineering.",
        "privacy": "Politika privatnosti",
        "terms": "Uvjeti pružanja usluge"
      }
    }
  },
  sl: {
    translation: {
      "nav": {
        "home": "Domov",
        "expertise": "Strokovnost",
        "systems": "Sistemi",
        "contact": "Kontakt",
        "languages": "Jeziki"
      },
      "hero": {
        "established": "Ustanovljeno 2004",
        "title_1": "Mi ne samo premazujemo.",
        "title_2": "Mi izpopolnjujemo. Mi ščitimo.",
        "desc_1": "Profesionalne rešitve nano premazov za hotele, gastronomijo in vrhunske komercialne nepremičnine.",
        "desc_2": "Z uporabo naprednih sistemov premazov, razvitih in proizvedenih v Nemčiji s strani SST Oberflächentechnik, ustvarjamo dolgoročno zaščito površin na molekularni ravni — hidrofobno, odporno na umazanijo in visoko odporno.",
        "bullet_1": "Zmanjšani stroški vzdrževanja",
        "bullet_2": "Maksimalna zaščita premoženja",
        "bullet_3": "Vidno izboljšane površine",
        "btn": "Zahtevajte posvet",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "years": "Let izkušenj",
        "estates": "Zaščitenih nepremičnin",
        "discretion": "Diskretnost"
      },
      "about": {
        "label": "Institucija / O nas",
        "title_1": "Nano premaz kot",
        "title_2": "Strateški sistem",
        "title_3": "Zaščite premoženja",
        "desc_1": "Naše delo se začne tam, kjer se konvencionalno čiščenje konča.",
        "desc_2": "Profesionalni nano premaz trajno zatesni steklo, naravni kamen, keramiko, nerjavno jeklo in vrhunske materiale. Ustvari neviden zaščitni sloj proti vlagi, vodnemu kamnu, maščobi, vplivom okolja in vsakodnevni obrabi.",
        "desc_3": "V okoljih z velikim prometom — hotelih, restavracijah, poslovnih prostorih — stanje površin določa percepcijo kakovosti.",
        "bullet_title": "Dosledno izjemno",
        "bullet_desc": "Zagotavljamo, da ta percepcija kakovosti ostane dosledno izjemna."
      },
      "systems": {
        "label": "Sistemi",
        "title_1": "Natančnost. Analiza.",
        "title_2": "Dolgoročna zaščita.",
        "desc": "Vsaka nepremičnina ima edinstvene materiale, stopnje izpostavljenosti in zahteve glede zmogljivosti. Zato ne uporabljamo standardnih rešitev — mi inženiramo prilagojene sisteme premazov.",
        "s1_title": "Analiza materialov",
        "s1_desc": "Analiza materialov in stanja.",
        "s2_title": "Priprava površine",
        "s2_desc": "Profesionalna globinska priprava površine.",
        "s3_title": "Nano aplikacija",
        "s3_desc": "Aplikacija sistemov nano premazov podjetja SST Oberflächentechnik (Nemčija).",
        "s4_title": "Nadzor kakovosti",
        "s4_desc": "Nadzorovano strjevanje in nadzor kakovosti, plus dokumentacija in smernice za vzdrževanje."
      },
      "transformation": {
        "label": "Mi ne samo čistimo. Mi preoblikujemo.",
        "title_1": "Čiščenje je začasno.",
        "title_2": "Nano tesnjenje je strateško.",
        "desc": "Zahvaljujoč hidrofobnim lastnostim in lastnostim odbijanja umazanije, voda, maščoba in onesnaževalci zlahka zdrsnejo. Površine ostanejo dlje časa čiste, postanejo bolj odporne na obrabo in zahtevajo bistveno manj vzdrževanja.",
        "bullet_1": "Manj ciklov čiščenja",
        "bullet_2": "Zmanjšana uporaba kemikalij",
        "bullet_3": "Nižji operativni stroški",
        "bullet_4": "Trajnostna zaščita vaše investicije",
        "btn": "Zahtevajte posvet",
        "guarantee_years": "5 Let",
        "guarantee_label": "Garancija na delovanje"
      },
      "slider": {
        "before": "Prej",
        "after": "Potem"
      },
      "case_study": {
        "label": "Sovereign Reset",
        "title_1": "Strukturirana obnova",
        "title_2": "V določenem časovnem okviru",
        "desc": "Za močno obremenjene nepremičnine zagotavljamo celovit program obnove površin. Vse ustrezne površine so izpopolnjene in trajno nano-zatesnjene. Rezultat je tehnično optimizirano, vizualno izboljšano in dolgoročno zaščiteno okolje nepremičnine.",
        "tag_1": "Globinsko čiščenje stekla in fasad",
        "tag_2": "Obnova sanitarnih in mokrih prostorov",
        "tag_3": "Zaščita naravnega kamna in tal",
        "tag_4": "Tesnjenje kuhinjskih in gastronomskih površin",
        "s1_title": "Degradirano vs. Sovereign zaključek",
        "s1_desc": "Povlecite drsnik, da razkrijete preobrazbo. Leta peš prometa in mikro-abrazij so popolnoma zatesnjena, kar povrne bogato, globoko črno barvo z vrhunskim sijajem.",
        "s2_title": "Obnova kuhinjskih površin",
        "s2_desc": "Povlecite drsnik, da razkrijete preobrazbo. Težke obloge maščobe in umazanije so popolnoma odstranjene in zatesnjene, kar povrne prvotno površino.",
        "s3_title": "Obnova sanitarnih in mokrih prostorov",
        "s3_desc": "Povlecite drsnik, da razkrijete preobrazbo. Vodni kamen, ostanki mila in madeži vode so odstranjeni, površina pa je nano-zatesnjena za dolgotrajno zaščito."
      },
      "continuum": {
        "label": "Kontinuum",
        "title_1": "Neprekinjeno delovanje",
        "title_2": "Namesto enkratne intervencije",
        "desc": "Dolgoročna zaščita premoženja zahteva sistem. Z našim strukturiranim konceptom spremljanja ocenjujemo premazane površine, vrednotimo izpostavljenost obrabi in priporočamo ciljne cikle osveževanja, ko je to potrebno.",
        "quote": "\"Vaša nepremičnina ne ostane samo čista — ostane na vrhuncu zmogljivosti.\""
      },
      "faq": {
        "label": "Baza znanja",
        "title": "FAQ – Nano premaz",
        "q1": "Kako dolgo traja nano premaz?",
        "a1": "Odvisno od materiala in izpostavljenosti, več let. Znatno bolj trpežno kot konvencionalna tesnila.",
        "q2": "Je premaz viden?",
        "a2": "Ne. Je prosojen in umetno ne spreminja naravnega videza površine.",
        "q3": "Je primeren za gastronomijo in prehrambena okolja?",
        "a3": "Da. Uporabljeni sistemi so zasnovani za zahtevne komercialne aplikacije.",
        "q4": "Katere površine je mogoče obdelati?",
        "a4": "Steklo, naravni kamen, keramika, nerjavno jeklo, kovina in večina materialov na mineralni osnovi."
      },
      "contact": {
        "label": "Kontakt / Zahtevajte ponudbo",
        "title_1": "Zahtevajte",
        "title_2": "Zasebni posvet",
        "desc_1": "Želite zmanjšati stroške vzdrževanja ob hkratnem zagotavljanju dolgoročne vrednosti vaših površin?",
        "desc_2": "Zahtevajte prilagojeno analizo površine. Diskretno. Natančno. Sistematično.",
        "hq": "Global Operations HQ, New York",
        "hours": "Pon-Pet, 9:00 - 18:00 EST",
        "form_name": "Polno ime",
        "form_name_ph": "Janez Novak",
        "form_email": "Korporativna e-pošta",
        "form_email_ph": "janez@podjetje.si",
        "form_loc": "Lokacija nepremičnine",
        "form_loc_ph": "Mesto, Država",
        "form_sector": "Sektor",
        "form_sector_ph": "Izberite sektor",
        "sector_1": "Gostinstvo",
        "sector_2": "Kulinarika",
        "sector_3": "Korporativno",
        "sector_4": "Zasebno posestvo",
        "form_scope": "Obseg projekta",
        "form_scope_ph": "Kratko opišite vaše zahteve...",
        "btn": "Pošlji zahtevo"
      },
      "footer": {
        "nav": "Navigacija",
        "direct": "Neposredna linija",
        "rights": "© 2026 SAMI Sovereign Surface Engineering.",
        "privacy": "Politika zasebnosti",
        "terms": "Pogoji storitve"
      }
    }
  }
};

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');
const initialLang = langParam && ['en', 'de', 'hr', 'sl'].includes(langParam) ? langParam : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
