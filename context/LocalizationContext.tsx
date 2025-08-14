import React, { createContext, useState, useContext, useMemo, ReactNode } from 'react';
import { en } from '../locales/en';
import { tr } from '../locales/tr';

type Language = 'en' | 'tr';

const translations = { 
  en: { ...en, locale: 'en-US' }, 
  tr: { ...tr, locale: 'tr-TR' }
};

interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.en;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
