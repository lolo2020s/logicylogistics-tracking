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

      // Wait for the widget to be ready, then setup language detection
      setTimeout(() => {
        setupLanguageDetection();
      }, 1000);
    };

    // Language detection and URL management
    function setupLanguageDetection() {
      // Détecter la langue dans l'URL (/fr/, /en/, etc.)
      const pathSegments = window.location.pathname.split('/');
      let lang = pathSegments[1] || 'fr';

      function applyTranslation(language: string) {
        const selectEl = document.querySelector("#google_translate_element select") as HTMLSelectElement;
        if (selectEl && language !== 'fr') {
          selectEl.value = language;
          selectEl.dispatchEvent(new Event('change'));
        }
      }

      // Appliquer la langue au chargement
      applyTranslation(lang);

      // Sauvegarder la langue côté localStorage
      localStorage.setItem('selectedLang', lang);

      // Mettre à jour la langue lors du changement du widget
      const selectEl = document.querySelector("#google_translate_element select") as HTMLSelectElement;
      if (selectEl) {
        selectEl.addEventListener('change', function() {
          const selected = selectEl.value;
          localStorage.setItem('selectedLang', selected);
          updateInternalLinks(selected);
        });
      }

      // Fonction pour mettre à jour tous les liens internes en conservant le sous-dossier langue
      function updateInternalLinks(language: string) {
        const links = document.querySelectorAll('a[href]');
        links.forEach((link) => {
          let href = link.getAttribute('href');
          if (href && !href.startsWith('http') && !href.startsWith('#')) {
            // Supprimer ancien sous-dossier si présent
            href = href.replace(/^\/(fr|en|es|de|it|pt)\//, '/');
            link.setAttribute('href', `/${language}${href}`);
          }
        });
      }

      // Mise à jour initiale des liens internes
      updateInternalLinks(lang);

      // Observer le DOM pour traduire les contenus dynamiques
      const observer = new MutationObserver(() => applyTranslation(lang));
      observer.observe(document.body, { childList: true, subtree: true });
    }

    // Load Google Translate script
    const gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(gtScript);
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="google-translate-container"
    />
  );
}