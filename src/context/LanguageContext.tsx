import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/types/translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  isLanguageSupported: (language: string) => boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED_LANGUAGES: Language[] = ['fr', 'en', 'es', 'de', 'it', 'pt'];
const DEFAULT_LANGUAGE: Language = 'fr';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    // Detect language from URL first
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const urlLang = pathSegments[0];
    
    if (isLanguageSupported(urlLang)) {
      setCurrentLanguage(urlLang as Language);
      localStorage.setItem('logicy-language', urlLang);
      return;
    }

    // Fallback to localStorage
    const savedLang = localStorage.getItem('logicy-language');
    if (savedLang && isLanguageSupported(savedLang)) {
      setCurrentLanguage(savedLang as Language);
      return;
    }

    // Final fallback to browser language
    const browserLang = navigator.language.split('-')[0];
    if (isLanguageSupported(browserLang)) {
      setCurrentLanguage(browserLang as Language);
      localStorage.setItem('logicy-language', browserLang);
    }
  }, []);

  const isLanguageSupported = (language: string): boolean => {
    return SUPPORTED_LANGUAGES.includes(language as Language);
  };

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('logicy-language', language);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      isLanguageSupported
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}