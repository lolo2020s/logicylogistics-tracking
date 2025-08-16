import { useState } from 'react';
import { Header } from '@/components/Header';
import { HomePage } from '@/pages/HomePage';
import { TrackingPage } from '@/pages/TrackingPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'tracking':
        return <TrackingPage />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">LOGICY TRANSPORT</h3>
            <p className="text-sm opacity-80">
              Solutions logistiques fiables depuis 2007
            </p>
          </div>
          <div className="text-xs opacity-60">
            © 2024 LOGICY TRANSPORT. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
