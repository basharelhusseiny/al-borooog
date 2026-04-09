import React, { createContext, useContext, useState } from "react";
import { TRANSLATIONS } from "../data/translations";

const TranslationContext = createContext();

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const isAr = lang === "ar";

  const t = (path) => {
    return (
      path
        .split(".")
        .reduce(
          (obj, key) => (obj && obj[key] !== undefined ? obj[key] : null),
          TRANSLATIONS[lang],
        ) || path
    );
  };

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <TranslationContext.Provider value={{ lang, isAr, t, toggleLang }}>
      <div
        dir={isAr ? "rtl" : "ltr"}
        className={`min-h-screen bg-white text-slate-800 ${isAr ? "font-sans leading-loose" : "font-sans"}`}
      >
        {children}
      </div>
    </TranslationContext.Provider>
  );
};
