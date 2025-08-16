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
      <footer className="bg-black text-white py-16 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo et description */}
            <div className="md:col-span-1">
              <img 
                src="/lovable-uploads/bf7b75bd-bbc4-4ea9-8372-c927a61de59b.png" 
                alt="LOGICY TRANSPORT" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Depuis 2007, LOGICY TRANSPORT offre des solutions logistiques fiables et prestigieuses pour tous vos besoins de transport dans le monde entier.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-montserrat font-bold text-lg mb-4">Nos Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Transport Routier</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Transport Aérien</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Transport Maritime</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Logistique Express</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Solutions Sur-Mesure</a></li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div>
              <h4 className="text-white font-montserrat font-bold text-lg mb-4">Liens Utiles</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Suivi de Colis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Demander un Devis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Zones de Livraison</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Conditions Générales</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-smooth text-sm">Politique de Confidentialité</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-montserrat font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="text-primary mt-1">📍</div>
                  <p className="text-gray-300 text-sm">
                    123 Avenue des Transports<br />
                    75001 Paris, France
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary">📞</div>
                  <p className="text-gray-300 text-sm">+33 1 23 45 67 89</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary">✉️</div>
                  <p className="text-gray-300 text-sm">contact@logicytransport.com</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary">🕒</div>
                  <p className="text-gray-300 text-sm">Lun-Ven: 8h-18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ligne de séparation */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 LOGICY TRANSPORT. Tous droits réservés.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
