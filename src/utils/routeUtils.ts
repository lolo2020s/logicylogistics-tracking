import { Language } from '@/types/translations';

export const SUPPORTED_LANGUAGES: Language[] = ['fr', 'en', 'es', 'de', 'it', 'pt'];
export const DEFAULT_LANGUAGE: Language = 'fr';

export function extractLanguageFromPath(pathname: string): { language: Language; cleanPath: string } {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (SUPPORTED_LANGUAGES.includes(firstSegment as Language)) {
    return {
      language: firstSegment as Language,
      cleanPath: '/' + pathSegments.slice(1).join('/')
    };
  }
  
  return {
    language: DEFAULT_LANGUAGE,
    cleanPath: pathname
  };
}

export function buildLocalizedPath(path: string, language: Language): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (language === DEFAULT_LANGUAGE) {
    return cleanPath === '/' ? '/' : cleanPath;
  }
  
  return `/${language}${cleanPath === '/' ? '' : cleanPath}`;
}

export function getLocalizedNavigation(currentLanguage: Language) {
  const basePaths = {
    home: '/',
    tracking: '/suivi',
    services: '/services',
    about: '/a-propos',
    contact: '/contact',
    quote: '/devis',
    zones: '/zones-livraison'
  };

  const localizedPaths: Record<string, string> = {};
  
  Object.entries(basePaths).forEach(([key, path]) => {
    localizedPaths[key] = buildLocalizedPath(path, currentLanguage);
  });

  return localizedPaths;
}