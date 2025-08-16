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
      function getCurrentLanguage() {
        const pathSegments = window.location.pathname.split('/');
        const urlLang = pathSegments[1];
        const supportedLangs = ['en', 'fr', 'es', 'de', 'it', 'pt'];
        
        if (supportedLangs.includes(urlLang)) {
          return urlLang;
        }
        
        // Fallback: check localStorage, then default to 'fr'
        const savedLang = localStorage.getItem('selectedLang');
        return (savedLang && supportedLangs.includes(savedLang)) ? savedLang : 'fr';
      }

      function applyTranslation(language: string) {
        const selectEl = document.querySelector("#google_translate_element select") as HTMLSelectElement;
        if (selectEl) {
          // Force reset to French first, then apply translation
          if (language !== 'fr') {
            selectEl.value = language;
            selectEl.dispatchEvent(new Event('change'));
          }
        }
      }

      function handleLanguageChange() {
        const currentLang = getCurrentLanguage();
        
        // Apply translation
        setTimeout(() => applyTranslation(currentLang), 500);
        
        // Save to localStorage
        localStorage.setItem('selectedLang', currentLang);
        
        // Update internal links
        updateInternalLinks(currentLang);
      }

      // Mettre à jour la langue lors du changement du widget
      const selectEl = document.querySelector("#google_translate_element select") as HTMLSelectElement;
      if (selectEl) {
        selectEl.addEventListener('change', function() {
          const selected = this.value;
          localStorage.setItem('selectedLang', selected);
          
          // Update URL if needed
          const currentPath = window.location.pathname;
          const cleanPath = currentPath.replace(/^\/(fr|en|es|de|it|pt)/, '');
          const newPath = selected === 'fr' ? cleanPath : `/${selected}${cleanPath}`;
          
          if (currentPath !== newPath) {
            window.history.pushState({}, '', newPath);
          }
          
          updateInternalLinks(selected);
        });
      }

      // Fonction pour mettre à jour tous les liens internes
      function updateInternalLinks(language: string) {
        const links = document.querySelectorAll('a[href]');
        links.forEach((link) => {
          let href = link.getAttribute('href');
          if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            // Clean existing language prefix
            href = href.replace(/^\/(fr|en|es|de|it|pt)/, '');
            // Add language prefix if not French
            const newHref = language === 'fr' ? href : `/${language}${href}`;
            link.setAttribute('href', newHref);
          }
        });
      }

      // Initial setup
      handleLanguageChange();

      // Listen for popstate (back/forward button)
      window.addEventListener('popstate', handleLanguageChange);

      // Observer for dynamic content
      const observer = new MutationObserver(() => {
        const currentLang = getCurrentLanguage();
        setTimeout(() => applyTranslation(currentLang), 200);
        updateInternalLinks(currentLang);
      });
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
      className="google-translate-container hidden"
      style={{ display: 'none' }}
    />
  );
}