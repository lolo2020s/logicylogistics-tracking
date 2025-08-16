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
import { QuotePage } from "./pages/QuotePage";
import { ZonesLivraisonPage } from "./pages/ZonesLivraisonPage";
import { ConditionsGeneralesPage } from "./pages/ConditionsGeneralesPage";
import { PolitiqueConfidentialitePage } from "./pages/PolitiqueConfidentialitePage";
import { LanguageProvider } from "./context/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
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
            <Route path="/devis" element={<QuotePage onNavigate={() => {}} />} />
            <Route path="/zones-livraison" element={<ZonesLivraisonPage onNavigate={() => {}} />} />
            <Route path="/conditions-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />
            
            {/* Language prefixed routes */}
            <Route path="/:lang/" element={<Index />} />
            <Route path="/:lang/accueil" element={<HomePage onNavigate={() => {}} />} />
            <Route path="/:lang/a-propos" element={<AboutPage onNavigate={() => {}} />} />
            <Route path="/:lang/contact" element={<ContactPage />} />
            <Route path="/:lang/services" element={<ServicesPage onNavigate={() => {}} />} />
            <Route path="/:lang/suivi" element={<TrackingPage />} />
            <Route path="/:lang/transport-routier" element={<TransportRoutierPage onNavigate={() => {}} />} />
            <Route path="/:lang/transport-aerien" element={<TransportAerienPage onNavigate={() => {}} />} />
            <Route path="/:lang/transport-maritime" element={<TransportMaritimePage onNavigate={() => {}} />} />
            <Route path="/:lang/logistique-express" element={<LogistiqueExpressPage onNavigate={() => {}} />} />
            <Route path="/:lang/solutions-sur-mesure" element={<SolutionsSurMesurePage onNavigate={() => {}} />} />
            <Route path="/:lang/devis" element={<QuotePage onNavigate={() => {}} />} />
            <Route path="/:lang/zones-livraison" element={<ZonesLivraisonPage onNavigate={() => {}} />} />
            <Route path="/:lang/conditions-generales" element={<ConditionsGeneralesPage onNavigate={() => {}} />} />
            <Route path="/:lang/politique-confidentialite" element={<PolitiqueConfidentialitePage onNavigate={() => {}} />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
