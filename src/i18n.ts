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
        "languages": "Languages",
        "lang_en": "English",
        "lang_de": "German",
        "lang_hr": "Croatian",
        "lang_sl": "Slovenian"
      },
      "hero": {
        "established": "Established 2004",
        "title_1": "We don’t coat.",
        "title_2": "We refine and protect.",
        "desc_1": "Professional surface protection for hotels, gastronomy and demanding commercial properties.",
        "desc_2": "With highly advanced coating systems, we create long-lasting surface protection on a molecular level – hydrophobic, dirt-repellent and extremely durable.",
        "bullet_1": "Reduced cleaning costs.",
        "bullet_2": "Maximum value retention.",
        "bullet_3": "Visibly refined surfaces.",
        "btn": "Request Consultation",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "german_tech": "German Technology",
        "discretion": "Discretion"
      },
      "about": {
        "label": "INSTITUTION / ABOUT",
        "title_1": "Coating as",
        "title_2": "strategic",
        "title_3": "value preservation",
        "desc_1": "Our work begins where traditional cleaning ends.",
        "desc_2": "Professional coating permanently seals glass, natural stone, ceramic, metal and high-quality surfaces. It creates an invisible protective layer against moisture, limescale, dirt, grease and environmental influences.",
        "desc_3": "Especially in high-traffic areas – hotels, restaurants, corporate spaces – the condition of surfaces determines the overall impression.",
        "bullet_title": "Consistently Excellent",
        "bullet_desc": "We ensure that this impression remains consistently excellent."
      },
      "systems": {
        "label": "SYSTEMS",
        "title_1": "Precision. Analysis.",
        "title_2": "Long-term protection.",
        "desc": "Every property has its own materials, stress factors and requirements. That is why we do not work with standard solutions, but with systematic analysis and tailored coating concepts.",
        "s1_title": "Material and condition analysis",
        "s1_desc": "1. Material and condition analysis",
        "s2_title": "Deep cleaning & preparation",
        "s2_desc": "2. Deep cleaning & preparation",
        "s3_title": "Application of the appropriate coating system",
        "s3_desc": "3. Application of the appropriate coating system",
        "s4_title": "Curing & quality control",
        "s4_desc": "4. Curing & quality control. 5. Documentation & maintenance recommendation. The products used are developed and manufactured in Germany and designed for demanding commercial applications."
      },
      "transformation": {
        "label": "WE DON’T JUST CLEAN. WE REFORGE.",
        "title_1": "Cleaning is temporary.",
        "title_2": "Sealing is strategic.",
        "desc": "Due to the hydrophobic and dirt-repellent effect, water, grease and contaminants bead off. Surfaces remain clean longer, are more resistant to wear and significantly easier to maintain.",
        "bullet_1": "Fewer cleaning cycles",
        "bullet_2": "Reduced use of chemicals",
        "bullet_3": "Lower operating costs",
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
        "label": "THE SOVEREIGN RESET",
        "title_1": "Structured sealing",
        "title_2": "in the shortest time",
        "desc": "For heavily used properties, we offer an intensive complete treatment of all relevant surfaces. Within a defined time window the following areas are deep-cleaned and permanently sealed. The result is a technically optimized, visually refined and long-term protected property.",
        "tag_1": "Glass and façade surfaces",
        "tag_2": "Sanitary areas",
        "tag_3": "Natural stone and floor surfaces",
        "tag_4": "Kitchen and gastronomy surfaces",
        "s1_title": "Worn vs. Sovereign Finish",
        "s1_desc": "The surface was cleaned and then coated. The coating ensures an even color effect and forms a durable protective layer against moisture, dirt and daily wear.",
        "s2_title": "Kitchen surfaces",
        "s2_desc": "The surface was thoroughly prepared and then coated. The coating protects the surface from grease, dirt and intensive use and significantly simplifies daily cleaning.",
        "s3_title": "Coating of solid wood surfaces",
        "s3_desc": "The surface of the solid wood cabinet was prepared and then coated. The coating protects the wood from moisture, dirt and daily use and makes maintenance of the surface easier."
      },
      "continuum": {
        "label": "THE CONTINUUM",
        "title_1": "Permanent performance",
        "title_2": "instead of a one-time measure",
        "desc": "Long-term value preservation requires a system. With our continuous service concept, we monitor coated surfaces, evaluate wear and recommend targeted refresh treatments.",
        "quote": "\"Your property does not just remain clean – it remains consistently at the highest level.\""
      },
      "faq": {
        "label": "Knowledge Base",
        "title": "FAQ – COATING",
        "q1": "How long does a surface coating last?",
        "a1": "Depending on the material and level of use, 2 – 8 years.",
        "q2": "Is the coating visible?",
        "a2": "No. It is transparent and does not change the natural appearance. However, colored coatings are also available upon request.",
        "q3": "Is it suitable for gastronomy?",
        "a3": "Yes. The systems used are designed for commercial and demanding applications.",
        "q4": "For which surfaces is it suitable?",
        "a4": "Glass, natural stone, ceramic, stainless steel, metal and many other mineral surfaces."
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
        "impressum": "Imprint"
      },
      "legal": {
        "back": "BACK",
        "impressum": {
          "sec1_title": "Information according to § 5 TMG",
          "sec2_title": "Contact",
          "phone": "Phone",
          "email": "Email",
          "sec3_title": "VAT ID",
          "sec3_desc": "VAT Identification Number according to § 27 a of the Value Added Tax Act",
          "sec4_title": "Consumer Dispute Resolution/Universal Arbitration Board",
          "sec4_desc": "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
        },
        "privacy": {
          "sec1_title": "1. Data Protection at a Glance",
          "sec1_subtitle": "General Information",
          "sec1_desc": "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified.",
          "sec2_title": "2. Hosting",
          "sec2_desc": "We host the content of our website with the following provider: Hostinger.",
          "sec3_title": "3. General Notes and Mandatory Information",
          "sec3_subtitle1": "Data Protection",
          "sec3_desc1": "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.",
          "sec3_subtitle2": "Responsible Entity",
          "sec3_desc2": "The responsible entity for data processing on this website is:"
        }
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
        "languages": "Sprachen",
        "lang_en": "Englisch",
        "lang_de": "Deutsch",
        "lang_hr": "Kroatisch",
        "lang_sl": "Slowenisch"
      },
      "hero": {
        "established": "Gegründet 2004",
        "title_1": "Wir veredeln",
        "title_2": "und schützen.",
        "desc_1": "Professionelle Beschichtung für Hotels, Gastronomie und anspruchsvolle Gewerbeimmobilien.",
        "desc_2": "Mit hochentwickelten Beschichtungssystemen schaffen wir dauerhaften Oberflächenschutz auf molekularer Ebene – hydrophob, schmutzabweisend und extrem widerstandsfähig.",
        "bullet_1": "Reduzierte Reinigungskosten.",
        "bullet_2": "Maximaler Werterhalt.",
        "bullet_3": "Sichtbar veredelte Oberflächen.",
        "btn": "Beratung anfordern",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "german_tech": "Deutsche Technologie",
        "discretion": "Diskretion"
      },
      "about": {
        "label": "INSTITUTION / ABOUT",
        "title_1": "Beschichtung als",
        "title_2": "strategischer",
        "title_3": "Werterhalt",
        "desc_1": "Unsere Arbeit beginnt dort, wo klassische Reinigung endet.",
        "desc_2": "Eine professionelle Beschichtung versiegelt Glas, Naturstein, Keramik, Metall und hochwertige Oberflächen dauerhaft. Sie bildet eine unsichtbare Schutzschicht gegen Feuchtigkeit, Kalk, Schmutz, Fett und Umwelteinflüsse.",
        "desc_3": "Gerade in stark frequentierten Bereichen – Hotels, Restaurants, Corporate Spaces – entscheidet der Zustand der Oberflächen über den Gesamteindruck.",
        "bullet_title": "Konstant Exzellent",
        "bullet_desc": "Wir sorgen dafür, dass dieser Eindruck konstant exzellent bleibt."
      },
      "systems": {
        "label": "SYSTEMS",
        "title_1": "Präzision. Analyse.",
        "title_2": "Langzeitschutz.",
        "desc": "Jede Immobilie besitzt eigene Materialien, Belastungen und Anforderungen. Deshalb arbeiten wir nicht mit Standardlösungen, sondern mit systematischer Analyse und abgestimmten Beschichtungskonzepten.",
        "s1_title": "Material- und Zustandsanalyse",
        "s1_desc": "1. Material- und Zustandsanalyse",
        "s2_title": "Tiefenreinigung & Vorbereitung",
        "s2_desc": "2. Tiefenreinigung & Vorbereitung",
        "s3_title": "Applikation des passenden Beschichtungssystems",
        "s3_desc": "3. Applikation des passenden Beschichtungssystems",
        "s4_title": "Aushärtung & Qualitätskontrolle",
        "s4_desc": "4. Aushärtung & Qualitätskontrolle. 5. Dokumentation & Wartungsempfehlung. Die eingesetzten Produkte werden in Deutschland entwickelt und produziert und sind für anspruchsvolle gewerbliche Anwendungen konzipiert."
      },
      "transformation": {
        "label": "WE DON’T JUST CLEAN. WE REFORGE.",
        "title_1": "Reinigung ist kurzfristig.",
        "title_2": "Versiegelung ist strategisch.",
        "desc": "Durch die hydrophobe und schmutzabweisende Wirkung perlen Wasser, Fette und Verschmutzungen ab. Oberflächen bleiben länger sauber, sind widerstandsfähiger gegen Abnutzung und deutlich pflegeleichter.",
        "bullet_1": "Weniger Reinigungszyklen",
        "bullet_2": "Geringerer Chemikalieneinsatz",
        "bullet_3": "Reduzierte Betriebskosten",
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
        "label": "THE SOVEREIGN RESET",
        "title_1": "Strukturierte Versiegelung",
        "title_2": "in kürzester Zeit",
        "desc": "Für stark beanspruchte Immobilien bieten wir eine intensive Komplettbehandlung aller relevanten Oberflächen. Innerhalb eines definierten Zeitfensters werden tiefengereinigt und dauerhaft versiegelt. Das Ergebnis ist eine technisch optimierte, optisch veredelte und langfristig geschützte Immobilie.",
        "tag_1": "Glas- und Fassadenflächen",
        "tag_2": "Sanitärbereiche",
        "tag_3": "Naturstein- und Bodenflächen",
        "tag_4": "Küchen- und Gastronomieflächen",
        "s1_title": "Abgenutzt vs. Sovereign Finish",
        "s1_desc": "Die Oberfläche wurde gereinigt und anschließend beschichtet. Die Beschichtung sorgt für eine gleichmäßige Farbwirkung und bildet eine widerstandsfähige Schutzschicht gegen Feuchtigkeit, Schmutz und tägliche Belastung.",
        "s2_title": "Küchenoberflächen",
        "s2_desc": "Die Oberfläche wurde gründlich vorbereitet und anschließend beschichtet. Die Beschichtung schützt die Oberfläche vor Fett, Schmutz und intensiver Nutzung und erleichtert die tägliche Reinigung deutlich.",
        "s3_title": "Beschichtung von Echtholzoberflächen",
        "s3_desc": "Die Oberfläche des Echtholzschranks wurde vorbereitet und anschließend beschichtet. Die Beschichtung schützt das Holz vor Feuchtigkeit, Verschmutzungen und täglicher Nutzung und erleichtert die Pflege der Oberfläche."
      },
      "continuum": {
        "label": "THE CONTINUUM",
        "title_1": "Dauerhafte Performance",
        "title_2": "statt Einzelmaßnahme",
        "desc": "Langfristiger Werterhalt erfordert System. Mit unserem kontinuierlichen Betreuungskonzept überwachen wir beschichtete Flächen, prüfen Beanspruchung und empfehlen gezielte Auffrischungen.",
        "quote": "\"Ihre Immobilie bleibt nicht nur sauber – sie bleibt konstant auf höchstem Niveau.\""
      },
      "faq": {
        "label": "Wissensdatenbank",
        "title": "FAQ – BESCHICHTUNG",
        "q1": "Wie lange hält eine Oberflächenbeschichtung?",
        "a1": "Je nach Material und Beanspruchung 2 - 8 Jahre.",
        "q2": "Ist die Beschichtung sichtbar?",
        "a2": "Nein. Sie ist transparent und verändert die natürliche Optik nicht, jedoch gibt es auf Anfrage und Wunsch auch farbiger Beschichtungen.",
        "q3": "Ist sie für Gastronomie geeignet?",
        "a3": "Ja. Die eingesetzten Systeme sind für gewerbliche und anspruchsvolle Einsatzbereiche konzipiert.",
        "q4": "Für welche Oberflächen ist sie geeignet?",
        "a4": "Glas, Naturstein, Keramik, Edelstahl, Metall und viele weitere mineralische Oberflächen."
      },
      "contact": {
        "label": "KONTAKT / REQUEST QUOTE",
        "title_1": "Beratung für",
        "title_2": "Ihre Immobilie",
        "desc_1": "Sie möchten Reinigungskosten senken und gleichzeitig die Wertigkeit Ihrer Oberflächen dauerhaft sichern?",
        "desc_2": "Fordern Sie eine individuelle Analyse an. Präzise. Nachhaltig. Systematisch.",
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
        "privacy": "Datenschutzerklärung",
        "impressum": "Impressum"
      },
      "legal": {
        "back": "ZURÜCK",
        "impressum": {
          "sec1_title": "Angaben gemäß § 5 TMG",
          "sec2_title": "Kontakt",
          "phone": "Telefon",
          "email": "E-Mail",
          "sec3_title": "Umsatzsteuer-ID",
          "sec3_desc": "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz",
          "sec4_title": "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
          "sec4_desc": "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
        },
        "privacy": {
          "sec1_title": "1. Datenschutz auf einen Blick",
          "sec1_subtitle": "Allgemeine Hinweise",
          "sec1_desc": "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
          "sec2_title": "2. Hosting",
          "sec2_desc": "Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Hostinger.",
          "sec3_title": "3. Allgemeine Hinweise und Pflichtinformationen",
          "sec3_subtitle1": "Datenschutz",
          "sec3_desc1": "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
          "sec3_subtitle2": "Verantwortliche Stelle",
          "sec3_desc2": "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:"
        }
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
        "languages": "Jezici",
        "lang_en": "Engleski",
        "lang_de": "Njemački",
        "lang_hr": "Hrvatski",
        "lang_sl": "Slovenski"
      },
      "hero": {
        "established": "Osnovano 2004",
        "title_1": "Ne premazujemo.",
        "title_2": "Mi oplemenjujemo i štitimo.",
        "desc_1": "Profesionalna zaštita površina za hotele, gastronomiju i zahtjevne komercijalne nekretnine.",
        "desc_2": "Uz visoko razvijene sustave premaza stvaramo dugotrajnu zaštitu površina na molekularnoj razini – hidrofobnu, otpornu na prljavštinu i iznimno izdržljivu.",
        "bullet_1": "Smanjeni troškovi čišćenja.",
        "bullet_2": "Maksimalno očuvanje vrijednosti.",
        "bullet_3": "Vidljivo oplemenjene površine.",
        "btn": "Zatražite konzultacije",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "german_tech": "Njemačka tehnologija",
        "discretion": "Diskrecija"
      },
      "about": {
        "label": "INSTITUTION / ABOUT",
        "title_1": "Premaz kao",
        "title_2": "strateško",
        "title_3": "očuvanje vrijednosti",
        "desc_1": "Naš rad počinje tamo gdje klasično čišćenje završava.",
        "desc_2": "Profesionalni premaz trajno zatvara i štiti staklo, prirodni kamen, keramiku, metal i visokokvalitetne površine. Stvara nevidljivi zaštitni sloj protiv vlage, kamenca, prljavštine, masnoće i utjecaja okoliša.",
        "desc_3": "Posebno u prostorima s velikom frekvencijom – hoteli, restorani, poslovni prostori – stanje površina odlučuje o ukupnom dojmu.",
        "bullet_title": "Konstantno izvrsno",
        "bullet_desc": "Mi osiguravamo da taj dojam ostane konstantno izvrstan."
      },
      "systems": {
        "label": "SYSTEMS",
        "title_1": "Preciznost. Analiza.",
        "title_2": "Dugoročna zaštita.",
        "desc": "Svaka nekretnina ima svoje materijale, opterećenja i zahtjeve. Zato ne radimo sa standardnim rješenjima, već sa sustavnom analizom i usklađenim konceptima premaza.",
        "s1_title": "Analiza materijala i stanja",
        "s1_desc": "1. Analiza materijala i stanja",
        "s2_title": "Dubinsko čišćenje i priprema",
        "s2_desc": "2. Dubinsko čišćenje i priprema",
        "s3_title": "Nanošenje odgovarajućeg sustava premaza",
        "s3_desc": "3. Nanošenje odgovarajućeg sustava premaza",
        "s4_title": "Stvrdnjavanje i kontrola kvalitete",
        "s4_desc": "4. Stvrdnjavanje i kontrola kvalitete. 5. Dokumentacija i preporuke za održavanje. Korišteni proizvodi razvijeni su i proizvedeni u Njemačkoj te su namijenjeni zahtjevnim komercijalnim primjenama."
      },
      "transformation": {
        "label": "WE DON’T JUST CLEAN. WE REFORGE.",
        "title_1": "Čišćenje je kratkoročno.",
        "title_2": "Brtvljenje je strateško.",
        "desc": "Zahvaljujući hidrofobnom i odbijajućem učinku prljavštine, voda, masnoća i nečistoće jednostavno klize s površine. Površine ostaju duže čiste, otpornije su na habanje i znatno lakše za održavanje.",
        "bullet_1": "Manje ciklusa čišćenja",
        "bullet_2": "Manja upotreba kemikalija",
        "bullet_3": "Smanjeni operativni troškovi",
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
        "label": "THE SOVEREIGN RESET",
        "title_1": "Strukturirano brtvljenje",
        "title_2": "u najkraćem vremenu",
        "desc": "Za snažno opterećene nekretnine nudimo intenzivan kompletan tretman svih relevantnih površina. Unutar definiranog vremenskog okvira obrađuju se dubinski očišćene i trajno zaštićene premazom. Rezultat je tehnički optimizirana, vizualno oplemenjena i dugoročno zaštićena nekretnina.",
        "tag_1": "Staklene i fasadne površine",
        "tag_2": "Sanitarni prostori",
        "tag_3": "Površine od prirodnog kamena i podovi",
        "tag_4": "Kuhinjske i gastronomske površine",
        "s1_title": "Istrošeno vs. Sovereign Finish",
        "s1_desc": "Površina je očišćena, a zatim premazana. Premaz osigurava ujednačen izgled boje i stvara izdržljiv zaštitni sloj protiv vlage, prljavštine i svakodnevnog opterećenja.",
        "s2_title": "Kuhinjske površine",
        "s2_desc": "Površina je temeljito pripremljena, a zatim premazana. Premaz štiti površinu od masnoće, prljavštine i intenzivne uporabe te znatno olakšava svakodnevno čišćenje.",
        "s3_title": "Premazivanje površina od punog drva",
        "s3_desc": "Površina ormara od punog drva pripremljena je, a zatim premazana. Premaz štiti drvo od vlage, prljavštine i svakodnevne uporabe te olakšava održavanje površine."
      },
      "continuum": {
        "label": "THE CONTINUUM",
        "title_1": "Trajna učinkovitost",
        "title_2": "umjesto jednokratne mjere",
        "desc": "Dugoročno očuvanje vrijednosti zahtijeva sustav. Uz naš koncept kontinuirane brige nadziremo premazane površine, provjeravamo opterećenje i preporučujemo ciljano obnavljanje.",
        "quote": "\"Vaša nekretnina ne ostaje samo čista – ona ostaje stalno na najvišoj razini.\""
      },
      "faq": {
        "label": "Baza znanja",
        "title": "FAQ – PREMAZI",
        "q1": "Koliko dugo traje premaz površine?",
        "a1": "Ovisno o materijalu i opterećenju, 2 – 8 godina.",
        "q2": "Je li premaz vidljiv?",
        "a2": "Ne. Transparentan je i ne mijenja prirodan izgled površine, no na zahtjev su moguće i obojene varijante.",
        "q3": "Je li prikladan za gastronomiju?",
        "a3": "Da. Sustavi koji se koriste razvijeni su za komercijalne i zahtjevne primjene.",
        "q4": "Za koje površine je prikladan?",
        "a4": "Staklo, prirodni kamen, keramika, nehrđajući čelik, metal i mnoge druge mineralne površine."
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
        "impressum": "Impresum"
      },
      "legal": {
        "back": "NATRAG",
        "impressum": {
          "sec1_title": "Informacije prema § 5 TMG",
          "sec2_title": "Kontakt",
          "phone": "Telefon",
          "email": "E-mail",
          "sec3_title": "PDV ID",
          "sec3_desc": "Identifikacijski broj za PDV prema § 27 a Zakona o porezu na dodanu vrijednost",
          "sec4_title": "Rješavanje potrošačkih sporova/Univerzalno arbitražno tijelo",
          "sec4_desc": "Nismo spremni niti obvezni sudjelovati u postupcima rješavanja sporova pred potrošačkim arbitražnim tijelom."
        },
        "privacy": {
          "sec1_title": "1. Zaštita podataka na prvi pogled",
          "sec1_subtitle": "Opće informacije",
          "sec1_desc": "Sljedeće informacije pružaju jednostavan pregled onoga što se događa s vašim osobnim podacima kada posjetite ovu web stranicu. Osobni podaci su svi podaci pomoću kojih vas se može osobno identificirati.",
          "sec2_title": "2. Hosting",
          "sec2_desc": "Sadržaj naše web stranice hostamo kod sljedećeg pružatelja usluga: Hostinger.",
          "sec3_title": "3. Opće napomene i obvezne informacije",
          "sec3_subtitle1": "Zaštita podataka",
          "sec3_desc1": "Operateri ovih stranica vrlo ozbiljno shvaćaju zaštitu vaših osobnih podataka. S vašim osobnim podacima postupamo povjerljivo i u skladu sa zakonskim propisima o zaštiti podataka te ovom politikom privatnosti.",
          "sec3_subtitle2": "Odgovorno tijelo",
          "sec3_desc2": "Odgovorno tijelo za obradu podataka na ovoj web stranici je:"
        }
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
        "languages": "Jeziki",
        "lang_en": "Angleščina",
        "lang_de": "Nemščina",
        "lang_hr": "Hrvaščina",
        "lang_sl": "Slovenščina"
      },
      "hero": {
        "established": "Ustanovljeno 2004",
        "title_1": "Mi ne premazujemo.",
        "title_2": "Mi plemenitimo in ščitimo.",
        "desc_1": "Profesionalna zaščita površin za hotele, gostinstvo in zahtevne poslovne nepremičnine.",
        "desc_2": "Z uporabo visoko razvitih sistemov ustvarjamo dolgotrajno zaščito površin na molekularni ravni – hidrofobno, odporno na umazanijo in izjemno vzdržljivo.",
        "bullet_1": "Znižani stroški čiščenja.",
        "bullet_2": "Maksimalno ohranjanje vrednosti.",
        "bullet_3": "Vidno oplemenitene površine.",
        "btn": "Zahtevajte posvet",
        "vertical": "SOVEREIGN ENGINEERING"
      },
      "stats": {
        "german_tech": "Nemška tehnologija",
        "discretion": "Diskretnost"
      },
      "about": {
        "label": "INSTITUCIJA / O NAS",
        "title_1": "Zaščita kot",
        "title_2": "strateško",
        "title_3": "ohranjanje vrednosti",
        "desc_1": "Naše delo se začne tam, kjer se klasično čiščenje konča.",
        "desc_2": "Profesionalna zaščita trajno zatesni in zaščiti steklo, naravni kamen, keramiko, kovino in druge visokokakovostne površine. Ustvari nevidno zaščitno plast proti vlagi, vodnemu kamnu, umazaniji, maščobam in vplivom okolja.",
        "desc_3": "Predvsem v prostorih z visoko frekvenco gibanja – v hotelih, restavracijah in poslovnih prostorih – stanje površin določa splošni vtis.",
        "bullet_title": "Dosledno izviren in odličen",
        "bullet_desc": "Mi zagotavljamo, da ta vtis ostane dosledno izviren in odličen."
      },
      "systems": {
        "label": "SISTEMI",
        "title_1": "Natančnost. Analiza.",
        "title_2": "Dolgoročna zaščita.",
        "desc": "Vsaka nepremičnina ima svoje specifične materiale, obremenitve in zahteve. Zato ne ponujamo standardnih rešitev, temveč delamo na podlagi sistemske analize in usklajenih konceptov zaščite.",
        "s1_title": "Analiza materiala in stanja",
        "s1_desc": "1. Analiza materiala in stanja",
        "s2_title": "Globinsko čiščenje in priprava",
        "s2_desc": "2. Globinsko čiščenje in priprava",
        "s3_title": "Nanos ustreznega sistema zaščite",
        "s3_desc": "3. Nanos ustreznega sistema zaščite",
        "s4_title": "Strjevanje in kontrola kakovosti",
        "s4_desc": "4. Strjevanje in kontrola kakovosti. 5. Dokumentacija in priporočila za vzdrževanje. Uporabljeni izdelki so razviti in proizvedeni v Nemčiji ter so namenjeni zahtevni komercialni uporabi."
      },
      "transformation": {
        "label": "NE LE ČIŠČENJE. REFORMACIJA POVRŠIN.",
        "title_1": "Čiščenje je kratkoročno.",
        "title_2": "Zaščita je strateška.",
        "desc": "Zaradi hidrofobnega učinka in odbojnosti umazanije voda, maščoba in nečistoče preprosto zdrsnejo s površine. Površine ostanejo dlje časa čiste, so odpornejše na obrabo in znatno lažje za vzdrževanje.",
        "bullet_1": "Manj ciklov čiščenja",
        "bullet_2": "Manjša poraba kemikalij",
        "bullet_3": "Nižji obratovalni stroški",
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
        "label": "THE SOVEREIGN RESET",
        "title_1": "Strukturirana zaščita",
        "title_2": "v najkrajšem času",
        "desc": "Za močno obremenjene nepremičnine nudimo intenzivno celovito obdelavo vseh relevantnih površin. V definiranem časovnem okvirju obdelamo vse površine, ki so globinsko očiščene in trajno zaščitene. Rezultat je tehnično optimizirana, vizualno izboljšana in dolgoročno zavarovana nepremičnina.",
        "tag_1": "Steklene in fasadne površine",
        "tag_2": "Sanitarne prostore",
        "tag_3": "Površine iz naravnega kamna in tlake",
        "tag_4": "Kuhinjske in gostinske površine",
        "s1_title": "Obrabljeno vs. Sovereign Finish",
        "s1_desc": "Splošne površine: Površina je očiščena in nato zaščitena. Premaz zagotavlja enakomeren barvni učinek in ustvarja trpežno plast proti vlagi in vsakodnevni obrabi.",
        "s2_title": "Kuhinjske površine",
        "s2_desc": "Temeljito pripravljene in zaščitene površine so varne pred maščobo in intenzivno uporabo, kar znatno poenostavi dnevno čiščenje.",
        "s3_title": "Masivni les",
        "s3_desc": "Zaščita prodre v površino in varuje les pred vlago ter umazanijo, hkrati pa olajša vzdrževanje brez spreminjanja naravnega otipa."
      },
      "continuum": {
        "label": "THE CONTINUUM",
        "title_1": "Trajna zmogljivost",
        "title_2": "namesto enkratnega ukrepa",
        "desc": "Dolgoročno ohranjanje vrednosti zahteva sistem. Z našim konceptom neprekinjene oskrbe nadzorujemo zaščitene površine, ocenjujemo obrabo in priporočamo ciljno obnovo.",
        "quote": "\"Vaša nepremičnina ne ostane le čista – ostane na najvišji možni ravni.\""
      },
      "faq": {
        "label": "Pogosta vprašanja (FAQ)",
        "title": "FAQ – ZAŠČITA",
        "q1": "Kako dolgo traja zaščita površine?",
        "a1": "Odvisno od materiala in stopnje obremenitve, od 2 do 8 let.",
        "q2": "Ali je zaščitni sloj viden?",
        "a2": "Ne. Je popolnoma transparenten in ne spremeni naravnega videza površine. Na željo so na voljo tudi barvne različice.",
        "q3": "Je sistem primeren za gostinstvo?",
        "a3": "Da. Uporabljeni sistemi so razviti specifično za komercialne in najbolj zahtevne aplikacije.",
        "q4": "Za katere površine je primeren?",
        "a4": "Steklo, naravni kamen, keramika, nerjaveče jeklo, kovina in številne druge mineralne površine."
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
        "impressum": "Impresum"
      },
      "legal": {
        "back": "NAZAJ",
        "impressum": {
          "sec1_title": "Informacije v skladu s § 5 TMG",
          "sec2_title": "Kontakt",
          "phone": "Telefon",
          "email": "E-pošta",
          "sec3_title": "ID za DDV",
          "sec3_desc": "Identifikacijska številka za DDV v skladu s § 27 a Zakona o davku na dodano vrednost",
          "sec4_title": "Reševanje potrošniških sporov/Univerzalni arbitražni odbor",
          "sec4_desc": "Nismo pripravljeni ali dolžni sodelovati v postopkih reševanja sporov pred potrošniškim arbitražnim odborom."
        },
        "privacy": {
          "sec1_title": "1. Varstvo podatkov na prvi pogled",
          "sec1_subtitle": "Splošne informacije",
          "sec1_desc": "Naslednje informacije zagotavljajo preprost pregled nad tem, kaj se zgodi z vašimi osebnimi podatki, ko obiščete to spletno mesto. Osebni podatki so vsi podatki, s katerimi vas je mogoče osebno prepoznati.",
          "sec2_title": "2. Gostovanje",
          "sec2_desc": "Vsebino našega spletnega mesta gostujemo pri naslednjem ponudniku: Hostinger.",
          "sec3_title": "3. Splošne opombe in obvezne informacije",
          "sec3_subtitle1": "Varstvo podatkov",
          "sec3_desc1": "Upravljavci teh strani zelo resno jemljejo varstvo vaših osebnih podatkov. Z vašimi osebnimi podatki ravnamo zaupno in v skladu z zakonskimi predpisi o varstvu podatkov ter to politiko zasebnosti.",
          "sec3_subtitle2": "Odgovorni organ",
          "sec3_desc2": "Odgovorni organ za obdelavo podatkov na tem spletnem mestu je:"
        }
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
