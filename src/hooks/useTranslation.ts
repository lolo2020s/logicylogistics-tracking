import { useLanguageContext } from '@/context/LanguageContext';
import { translationData } from '@/utils/translationData';

export function useTranslation() {
  const { currentLanguage } = useLanguageContext();
  
  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.');
    let value: any = translationData[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue || key;
      }
    }
    
    return typeof value === 'string' ? value : defaultValue || key;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: any = translationData[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return [];
      }
    }
    
    return Array.isArray(value) ? value : [];
  };

  return {
    t,
    tArray,
    currentLanguage,
    isLanguageSupported: (lang: string) => lang in translationData
  };
}