import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  useEffect(() => {
    // Detect current language from URL or localStorage
    const pathSegments = window.location.pathname.split('/');
    const urlLang = pathSegments[1];
    const supportedLangs = languages.map(l => l.code);
    
    if (supportedLangs.includes(urlLang)) {
      setCurrentLanguage(urlLang);
    } else {
      const savedLang = localStorage.getItem('selectedLang');
      if (savedLang && supportedLangs.includes(savedLang)) {
        setCurrentLanguage(savedLang);
      }
    }
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    
    // Trigger Google Translate
    const selectEl = document.querySelector("#google_translate_element select") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = languageCode;
      selectEl.dispatchEvent(new Event('change'));
    }
    
    // Update URL
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace(/^\/(fr|en|es|de|it|pt)/, '');
    const newPath = languageCode === 'fr' ? cleanPath : `/${languageCode}${cleanPath}`;
    
    if (currentPath !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
          <span className="sm:hidden">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer ${
              currentLanguage === language.code ? 'bg-accent' : ''
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}