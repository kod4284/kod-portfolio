import i18n from 'i18next';
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import { kr, en } from 'locales';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: { kr, en },
    fallbackLng: ['kr', 'en'],
    interpolation: { escapeValue: false },
    detection: { order: ['path', 'navigator']}
});

export default i18n;
