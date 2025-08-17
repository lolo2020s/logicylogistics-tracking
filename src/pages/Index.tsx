import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { extractLanguageFromPath } from '@/utils/routeUtils';
import { useLanguageContext } from '@/context/LanguageContext';
import { HomePage } from './HomePage';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLanguage } = useLanguageContext();

  useEffect(() => {
    // Extract language and clean path from current URL
    const { language, cleanPath } = extractLanguageFromPath(location.pathname);
    
    // Set the language context
    setLanguage(language);
    
    // If we're on the root paths, show the home page
    if (cleanPath === '/' || cleanPath === '') {
      // This is the home page, no need to redirect
      return;
    }
    
    // For any other path, navigate to the appropriate route
    // This ensures the correct component is loaded based on the URL
    navigate(location.pathname, { replace: true });
  }, [location.pathname, navigate, setLanguage]);

  // This component now only handles the home page
  return <HomePage onNavigate={(page) => {
    // Convert internal navigation to proper routing
    const pathMap: Record<string, string> = {
      'about': '/a-propos',
      'contact': '/contact', 
      'services': '/services',
      'tracking': '/suivi',
      'transport-routier': '/transport-routier',
      'transport-aerien': '/transport-aerien',
      'transport-maritime': '/transport-maritime',
      'logistique-express': '/logistique-express',
      'solutions-sur-mesure': '/solutions-sur-mesure',
      'conditions-generales': '/conditions-generales',
      'politique-confidentialite': '/politique-confidentialite'
    };
    
    const path = pathMap[page];
    if (path) {
      navigate(path);
    }
  }} />;
};

export default Index;