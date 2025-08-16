import { useState, useEffect } from 'react';
import { Header } from '@/components/Header-simple';
import { Footer } from '@/components/Footer';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { ServicesPage } from './ServicesPage';
import { TrackingPage } from './TrackingPage';
import { TransportRoutierPage } from './TransportRoutierPage';
import { TransportAerienPage } from './TransportAerienPage';
import { TransportMaritimePage } from './TransportMaritimePage';
import { LogistiqueExpressPage } from './LogistiqueExpressPage';
import { SolutionsSurMesurePage } from './SolutionsSurMesurePage';
import { QuotePage } from './QuotePage';
import { ZonesLivraisonPage } from './ZonesLivraisonPage';
import { ConditionsGeneralesPage } from './ConditionsGeneralesPage';
import { PolitiqueConfidentialitePage } from './PolitiqueConfidentialitePage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact': return <ContactPage />;
      case 'services': return <ServicesPage onNavigate={setCurrentPage} />;
      case 'tracking': return <TrackingPage />;
      case 'transport-routier': return <TransportRoutierPage onNavigate={setCurrentPage} />;
      case 'transport-aerien': return <TransportAerienPage onNavigate={setCurrentPage} />;
      case 'transport-maritime': return <TransportMaritimePage onNavigate={setCurrentPage} />;
      case 'logistique-express': return <LogistiqueExpressPage onNavigate={setCurrentPage} />;
      case 'solutions-sur-mesure': return <SolutionsSurMesurePage onNavigate={setCurrentPage} />;
      case 'quote': return <QuotePage onNavigate={setCurrentPage} />;
      case 'zones-livraison': return <ZonesLivraisonPage onNavigate={setCurrentPage} />;
      case 'conditions-generales': return <ConditionsGeneralesPage onNavigate={setCurrentPage} />;
      case 'politique-confidentialite': return <PolitiqueConfidentialitePage onNavigate={setCurrentPage} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default Index;