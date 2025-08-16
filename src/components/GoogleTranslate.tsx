import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    // Ajouter les styles CSS pour personnaliser Google Translate
    const style = document.createElement('style');
    style.innerHTML = `
      /* Masquer la barre Google Translate */
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      
      body {
        top: 0px !important;
      }
      
      /* Styliser le sélecteur de langue */
      .goog-te-gadget {
        font-size: 0px !important;
        color: transparent !important;
      }
      
      .goog-te-gadget .goog-te-combo {
        color: hsl(var(--foreground)) !important;
        background: hsl(var(--background)) !important;
        border: 1px solid hsl(var(--border)) !important;
        border-radius: 6px !important;
        padding: 6px 8px !important;
        font-size: 13px !important;
        outline: none !important;
        cursor: pointer !important;
        font-family: inherit !important;
      }
      
      .goog-te-gadget .goog-te-combo:hover {
        border-color: hsl(var(--primary)) !important;
      }
      
      .goog-te-gadget .goog-te-combo:focus {
        border-color: hsl(var(--primary)) !important;
        box-shadow: 0 0 0 2px hsl(var(--primary) / 0.2) !important;
      }
      
      /* Masquer le texte "Propulsé par Google Traduction" */
      .goog-te-gadget > span > a {
        display: none !important;
      }
      
      .goog-te-gadget > span {
        display: none !important;
      }
      
      .goog-te-gadget::before {
        content: "🌐 ";
        color: hsl(var(--muted-foreground));
        font-size: 14px;
        margin-right: 4px;
      }
    `;
    document.head.appendChild(style);

    // Fonction d'initialisation Google Translate
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'fr,en,es,pt,it,ar,de,nl,ru,zh',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');
    };

    // Charger le script Google Translate s'il n'existe pas déjà
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      // Si le script est déjà chargé, initialiser directement
      window.googleTranslateElementInit();
    }

    // Nettoyage
    return () => {
      // Le nettoyage est géré par Google Translate lui-même
    };
  }, []);

  return (
    <div className="flex items-center">
      <div id="google_translate_element"></div>
    </div>
  );
}