import { useEffect, useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface Language {
  code: string;
  name: string;
  flag: string;
  googleCode: string;
}

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', googleCode: 'fr' },
  { code: 'en', name: 'English', flag: '🇺🇸', googleCode: 'en' },
  { code: 'es', name: 'Español', flag: '🇪🇸', googleCode: 'es' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', googleCode: 'pt' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', googleCode: 'it' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', googleCode: 'ar' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', googleCode: 'de' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', googleCode: 'nl' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', googleCode: 'ru' },
  { code: 'zh', name: '中文', flag: '🇨🇳', googleCode: 'zh' },
];

export function GoogleTranslate() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isTranslateLoaded, setIsTranslateLoaded] = useState(false);

  useEffect(() => {
    // Styles pour masquer les éléments Google Translate par défaut
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      body {
        top: 0px !important;
      }
      #google_translate_element {
        display: none !important;
      }
      .goog-te-gadget {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Fonction d'initialisation Google Translate
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: languages.map(lang => lang.googleCode).join(','),
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');
      setIsTranslateLoaded(true);
    };

    // Charger le script Google Translate s'il n'existe pas déjà
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setSelectedLanguage(language);
    
    // Trigger Google Translate
    if (isTranslateLoaded && window.google && window.google.translate) {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = language.googleCode;
        selectElement.dispatchEvent(new Event('change'));
      }
    }
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 px-3 bg-background/95 backdrop-blur border-border/50 hover:bg-accent hover:border-primary/20 transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg leading-none">{selectedLanguage.flag}</span>
              <span className="hidden sm:inline text-sm font-medium text-foreground">
                {selectedLanguage.name}
              </span>
              <Globe className="h-3 w-3 text-muted-foreground sm:hidden" />
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          align="end" 
          className="w-56 bg-background/95 backdrop-blur border-border/50 shadow-lg"
          sideOffset={8}
        >
          <div className="p-2">
            <div className="text-xs text-muted-foreground mb-2 px-2 font-medium uppercase tracking-wide">
              Choisir la langue
            </div>
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                onClick={() => changeLanguage(language)}
                className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-accent/80 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg leading-none">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                </div>
                {selectedLanguage.code === language.code && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}