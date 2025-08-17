import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TrackingPage } from "./pages/TrackingPage";
import { TransportRoutierPage } from "./pages/TransportRoutierPage";
import { TransportAerienPage } from "./pages/TransportAerienPage";
import { TransportMaritimePage } from "./pages/TransportMaritimePage";
import { LogistiqueExpressPage } from "./pages/LogistiqueExpressPage";
import { SolutionsSurMesurePage } from "./pages/SolutionsSurMesurePage";
import { ConditionsGeneralesPage } from "./pages/ConditionsGeneralesPage";
import { PolitiqueConfidentialitePage } from "./pages/PolitiqueConfidentialitePage";
import { AuthProvider } from "./context/AuthContext";
import { AuthPage } from "./pages/AuthPage";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ShipmentsList } from "./pages/admin/ShipmentsList";
import { NewShipment } from "./pages/admin/NewShipment";
import { EditShipment } from "./pages/admin/EditShipment";
import { ClientsList } from "./pages/admin/ClientsList";
import { AdminSettings } from "./pages/admin/AdminSettings";
import { LanguageProvider } from "./context/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Default French routes */}
            <Route path="/" element={<Index />} />
            <Route path="/accueil" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/a-propos" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/suivi" element={<TrackingPage />} />
            <Route path="/transport-routier" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/transport-aerien" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/transport-maritime" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/logistique-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/solutions-sur-mesure" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/devis" element={<ContactPage />} />
            <Route path="/zones-livraison" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/conditions-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />
            
            {/* Auth routes */}
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="shipments" element={<ShipmentsList />} />
              <Route path="shipments/new" element={<NewShipment />} />
              <Route path="shipments/edit/:id" element={<EditShipment />} />
              <Route path="clients" element={<ClientsList />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            
            {/* Spanish routes */}
            <Route path="/es" element={<Index />} />
            <Route path="/es/inicio" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/es/acerca-de" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/es/contacto" element={<ContactPage />} />
            <Route path="/es/servicios" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/es/seguimiento" element={<TrackingPage />} />
            <Route path="/es/transporte-terrestre" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/es/transporte-aereo" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/es/transporte-maritimo" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/es/logistica-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/es/soluciones-medida" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/es/cotizacion" element={<ContactPage />} />
            <Route path="/es/zonas-entrega" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/es/condiciones-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/es/politica-privacidad" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />

            {/* German routes */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/startseite" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/de/uber-uns" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/de/kontakt" element={<ContactPage />} />
            <Route path="/de/dienstleistungen" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/de/sendungsverfolgung" element={<TrackingPage />} />
            <Route path="/de/strassentransport" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/de/lufttransport" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/de/seetransport" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/de/express-logistik" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/de/massgeschneiderte-losungen" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/de/angebot" element={<ContactPage />} />
            <Route path="/de/lieferzonen" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/de/allgemeine-bedingungen" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/de/datenschutzrichtlinie" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />

            {/* Italian routes */}
            <Route path="/it" element={<Index />} />
            <Route path="/it/home" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/it/chi-siamo" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/it/contatti" element={<ContactPage />} />
            <Route path="/it/servizi" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/it/tracking" element={<TrackingPage />} />
            <Route path="/it/trasporto-stradale" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/it/trasporto-aereo" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/it/trasporto-marittimo" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/it/logistica-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/it/soluzioni-su-misura" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/it/preventivo" element={<ContactPage />} />
            <Route path="/it/zone-consegna" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/it/condizioni-generali" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/it/politica-privacy" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />

            {/* Portuguese routes */}
            <Route path="/pt" element={<Index />} />
            <Route path="/pt/inicio" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/pt/sobre" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/pt/contato" element={<ContactPage />} />
            <Route path="/pt/servicos" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/pt/rastreamento" element={<TrackingPage />} />
            <Route path="/pt/transporte-rodoviario" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/pt/transporte-aereo" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/pt/transporte-maritimo" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/pt/logistica-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/pt/solucoes-medida" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/pt/orcamento" element={<ContactPage />} />
            <Route path="/pt/zonas-entrega" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/pt/condicoes-gerais" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/pt/politica-privacidade" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />
            
            {/* Catch-all route must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  </TooltipProvider>
  </QueryClientProvider>
);

export default App;
