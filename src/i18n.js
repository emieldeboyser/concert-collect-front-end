import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import en from "./locales/en.json";
import nl from "./locales/nl.json";

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      nl: {
        translation: nl,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    debug: false, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
