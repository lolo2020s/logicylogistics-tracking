import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header-simple';
import { Footer } from '@/components/Footer';
import { useLanguageContext } from '@/context/LanguageContext';
import { buildLocalizedPath } from '@/utils/routeUtils';

interface PageLayoutProps {
  children: ReactNode;
  currentPage?: string;
}

export function PageLayout({ children, currentPage = 'home' }: PageLayoutProps) {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageContext();

  // Scroll to top when page changes OR when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  // Also scroll to top on initial mount (for page refresh)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleNavigation = (page: string) => {
    // Convert internal navigation to proper routing with language support
    const pathMap: Record<string, string> = {
      'home': '/',
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
      'politique-confidentialite': '/politique-confidentialite',
      'devis': '/devis',
      'zones-livraison': '/zones-livraison'
    };
    
    const basePath = pathMap[page];
    if (basePath) {
      const localizedPath = buildLocalizedPath(basePath, currentLanguage);
      navigate(localizedPath);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="flex-1">
        {children}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}