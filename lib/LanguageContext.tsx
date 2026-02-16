'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, getTranslations, Translations } from './i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to German (primary Swiss language)
  const [language, setLanguageState] = useState<Language>('de');
  const [t, setTranslations] = useState<Translations>(getTranslations('de'));

  // Load language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['de', 'fr', 'it', 'en'].includes(saved)) {
      setLanguageState(saved);
      setTranslations(getTranslations(saved));
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setTranslations(getTranslations(lang));
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
