import i18n from "i18next";

i18n.init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { translation: require("../i18n/locales/en.json") },
    es: { translation: require("../i18n/locales/es.json") }
  }
});

export default i18n;
