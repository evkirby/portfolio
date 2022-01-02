import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLocale from "./locales/en.json";
import frLocale from "./locales/fr.json";

const resources = {
  en: { translation: enLocale },
  fr: { translation: frLocale },
};

// FIXME: Properly get default language
// const defaulLocale = () => {
//   const locale = Localization.locale.split("-")[0];
//   return locale || "en";
// };

i18n.use(initReactI18next).init({
  resources,
  // lng: defaulLocale(),
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
  nsSeparator: ".",
});

export default i18n;
