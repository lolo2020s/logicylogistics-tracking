import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    // Function to initialize Google Translate
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,fr,es,de,it,pt',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');

      // Auto-detect language from URL parameter and update all links
      setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        
        if (lang && lang !== 'fr') {
          const selectEl = document.querySelector("#google_translate_element select") as HTMLSelectElement;
          if (selectEl) {
            selectEl.value = lang;
            selectEl.dispatchEvent(new Event('change'));
          }
        }

        // Update all links to include language parameter
        if (lang) {
          const links = document.querySelectorAll('a[href]');
          links.forEach((link) => {
            const href = link.getAttribute('href');
            
            // Ignorer les liens externes
            if (!href || href.startsWith('http') || href.startsWith('#')) return;
            
            // Ajouter ou remplacer le paramètre lang
            const newUrl = new URL(href, window.location.origin);
            newUrl.searchParams.set('lang', lang);
            link.setAttribute('href', newUrl.toString());
          });
        }
      }, 1000); // Wait for Google Translate to fully load
    };

    // Load Google Translate script
    const gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(gtScript);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        existingScript.remove();
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="google-translate-container"
    />
  );
}