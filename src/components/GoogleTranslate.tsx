import { useEffect } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    // Ajouter les styles CSS globaux pour Google Translate
    const style = document.createElement('style');
    style.textContent = `
      .google-translate-wrapper .goog-te-combo {
        background: transparent !important;
        border: 1px solid hsl(var(--border)) !important;
        border-radius: 6px !important;
        padding: 4px 8px !important;
        font-size: 12px !important;
        color: hsl(var(--foreground)) !important;
        outline: none !important;
        cursor: pointer !important;
      }
      
      .google-translate-wrapper .goog-te-combo:hover {
        border-color: hsl(var(--primary)) !important;
      }
      
      .google-translate-wrapper .goog-te-gadget {
        font-family: inherit !important;
        font-size: 0 !important;
      }
      
      .google-translate-wrapper .goog-te-gadget > span {
        display: none !important;
      }
      
      .google-translate-wrapper .goog-te-gadget > span:first-child {
        display: none !important;
      }
      
      .google-translate-wrapper .goog-logo-link {
        display: none !important;
      }
      
      .google-translate-wrapper .goog-te-gadget .goog-te-combo {
        margin: 0 !important;
      }
      
      /* Masquer la barre Google Translate en haut */
      .goog-te-banner-frame {
        display: none !important;
      }
      
      body {
        top: 0 !important;
      }
      
      .skiptranslate {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Fonction d'initialisation Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'fr',
          includedLanguages: 'fr,en,es,pt,it,ar,de,nl,ru,zh,ja',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Charger le script Google Translate
    const addScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    // Vérifier si le script n'est pas déjà chargé
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    }

    return () => {
      // Nettoyage du style si nécessaire
      const existingStyle = document.querySelector('style[data-google-translate]');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div 
        id="google_translate_element" 
        className="google-translate-wrapper"
      />
    </div>
  );
}