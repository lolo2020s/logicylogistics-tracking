import { useState, useEffect } from 'react';
import { Language, translations } from '@/types/translations';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('logicy-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('logicy-language', newLanguage);
  };

  return {
    language,
    setLanguage: changeLanguage,
    t: translations[language]
  };
}