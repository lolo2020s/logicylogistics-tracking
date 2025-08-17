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
            <Route path="/es/accueil" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/es/a-propos" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/es/contact" element={<ContactPage />} />
            <Route path="/es/services" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/es/suivi" element={<TrackingPage />} />
            <Route path="/es/transport-routier" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/es/transport-aerien" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/es/transport-maritime" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/es/logistique-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/es/solutions-sur-mesure" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/es/devis" element={<ContactPage />} />
            <Route path="/es/zones-livraison" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/es/conditions-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/es/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />

            {/* German routes */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/accueil" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/de/a-propos" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/de/contact" element={<ContactPage />} />
            <Route path="/de/services" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/de/suivi" element={<TrackingPage />} />
            <Route path="/de/transport-routier" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/de/transport-aerien" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/de/transport-maritime" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/de/logistique-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/de/solutions-sur-mesure" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/de/devis" element={<ContactPage />} />
            <Route path="/de/zones-livraison" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/de/conditions-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/de/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />

            {/* Italian routes */}
            <Route path="/it" element={<Index />} />
            <Route path="/it/accueil" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/it/a-propos" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/it/contact" element={<ContactPage />} />
            <Route path="/it/services" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/it/suivi" element={<TrackingPage />} />
            <Route path="/it/transport-routier" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/it/transport-aerien" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/it/transport-maritime" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/it/logistique-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/it/solutions-sur-mesure" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/it/devis" element={<ContactPage />} />
            <Route path="/it/zones-livraison" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/it/conditions-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/it/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />

            {/* Portuguese routes */}
            <Route path="/pt" element={<Index />} />
            <Route path="/pt/accueil" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/pt/a-propos" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/pt/contact" element={<ContactPage />} />
            <Route path="/pt/services" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/pt/suivi" element={<TrackingPage />} />
            <Route path="/pt/transport-routier" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/pt/transport-aerien" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/pt/transport-maritime" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/pt/logistique-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/pt/solutions-sur-mesure" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/pt/devis" element={<ContactPage />} />
            <Route path="/pt/zones-livraison" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/pt/conditions-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/pt/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />
            
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
