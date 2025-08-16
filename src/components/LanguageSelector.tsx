import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguageContext } from '@/context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

export function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguageContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as any);
    
    // Get current path without language prefix
    const cleanPath = location.pathname.replace(/^\/(fr|es|de|it|pt)/, '') || '/';
    
    // Map current path to appropriate path for new language
    const getLocalizedPath = (lang: string, path: string) => {
      const pathMap: Record<string, Record<string, string>> = {
        fr: {
          '/': '/',
          '/accueil': '/accueil',
          '/a-propos': '/a-propos',
          '/contact': '/contact',
          '/services': '/services',
          '/suivi': '/suivi',
          '/transport-routier': '/transport-routier',
          '/transport-aerien': '/transport-aerien',
          '/transport-maritime': '/transport-maritime',
          '/devis': '/devis',
          '/zones-livraison': '/zones-livraison'
        },
        es: {
          '/': '/es',
          '/accueil': '/es/inicio',
          '/a-propos': '/es/acerca-de', 
          '/contact': '/es/contacto',
          '/services': '/es/servicios',
          '/suivi': '/es/seguimiento',
          '/transport-routier': '/es/transporte-terrestre',
          '/transport-aerien': '/es/transporte-aereo',
          '/transport-maritime': '/es/transporte-maritimo',
          '/devis': '/es/cotizacion',
          '/zones-livraison': '/es/zonas-entrega'
        },
        de: {
          '/': '/de',
          '/accueil': '/de/startseite',
          '/a-propos': '/de/uber-uns',
          '/contact': '/de/kontakt', 
          '/services': '/de/dienstleistungen',
          '/suivi': '/de/sendungsverfolgung',
          '/transport-routier': '/de/strassentransport',
          '/transport-aerien': '/de/lufttransport',
          '/transport-maritime': '/de/seetransport',
          '/devis': '/de/angebot',
          '/zones-livraison': '/de/lieferzonen'
        },
        it: {
          '/': '/it',
          '/accueil': '/it/home',
          '/a-propos': '/it/chi-siamo',
          '/contact': '/it/contatti',
          '/services': '/it/servizi',
          '/suivi': '/it/tracking',
          '/transport-routier': '/it/trasporto-stradale',
          '/transport-aerien': '/it/trasporto-aereo',
          '/transport-maritime': '/it/trasporto-marittimo',
          '/devis': '/it/preventivo',
          '/zones-livraison': '/it/zone-consegna'
        },
        pt: {
          '/': '/pt',
          '/accueil': '/pt/inicio',
          '/a-propos': '/pt/sobre',
          '/contact': '/pt/contato',
          '/services': '/pt/servicos',
          '/suivi': '/pt/rastreamento',
          '/transport-routier': '/pt/transporte-rodoviario',
          '/transport-aerien': '/pt/transporte-aereo',
          '/transport-maritime': '/pt/transporte-maritimo',
          '/devis': '/pt/orcamento',
          '/zones-livraison': '/pt/zonas-entrega'
        }
      };

      return pathMap[lang]?.[path] || (lang === 'fr' ? path : `/${lang}${path}`);
    };

    const newPath = getLocalizedPath(languageCode, cleanPath);
    navigate(newPath);
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