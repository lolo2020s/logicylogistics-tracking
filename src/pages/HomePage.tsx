import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Truck, Plane, Ship, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import heroImage from '@/assets/hero-transport.jpg';
import roadIcon from '@/assets/icon-road.png';
import airIcon from '@/assets/icon-air.png';
import maritimeIcon from '@/assets/icon-maritime.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();
  const [quickTrackingCode, setQuickTrackingCode] = useState('');

  const handleQuickTracking = () => {
    if (quickTrackingCode.trim()) {
      onNavigate('tracking');
    }
  };

  const services = [
    {
      icon: roadIcon,
      title: t.home.services.road.title,
      description: t.home.services.road.description,
    },
    {
      icon: airIcon,
      title: t.home.services.air.title,
      description: t.home.services.air.description,
    },
    {
      icon: maritimeIcon,
      title: t.home.services.maritime.title,
      description: t.home.services.maritime.description,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl shadow-elegant">
        <div 
          className="relative h-[700px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating" />
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/15 rounded-full blur-2xl floating" style={{animationDelay: '1s'}} />
          
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-5xl space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4 glass-effect">
                  🚚 Depuis 2007 • Transport International
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white to-primary-glow bg-clip-text text-transparent">
                  {t.home.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                  {t.home.subtitle}
                </p>
              </div>
              
              {/* Enhanced Quick Tracking */}
              <div className="glass-effect rounded-2xl p-8 max-w-lg mx-auto border shadow-glow">
                <h3 className="text-lg font-semibold mb-4 text-center">Suivi Express</h3>
                <div className="flex space-x-3">
                  <Input
                    placeholder={t.home.trackingPlaceholder}
                    value={quickTrackingCode}
                    onChange={(e) => setQuickTrackingCode(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleQuickTracking()}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 text-lg"
                  />
                  <Button 
                    onClick={handleQuickTracking}
                    className="bg-gradient-primary hover:shadow-glow transition-bounce h-12 px-6"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => onNavigate('tracking')}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-bounce text-lg px-10 py-4 h-auto pulse-glow"
                >
                  {t.home.trackButton}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  onClick={() => onNavigate('services')}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 transition-bounce text-lg px-8 py-4 h-auto"
                >
                  Nos Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-surface opacity-50 rounded-3xl" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-accent rounded-full text-accent font-semibold mb-6">
              ✨ Excellence depuis 2007
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Nos Solutions de Transport
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Des services de transport innovants et sécurisés, adaptés à tous vos besoins logistiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-glow transition-bounce cursor-pointer border-0 shadow-soft bg-gradient-to-br from-card to-card/80 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-smooth" />
                <CardHeader className="text-center relative z-10 pb-6">
                  <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-bounce shadow-primary">
                    <img src={service.icon} alt={service.title} className="w-12 h-12 filter brightness-0 invert" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-smooth font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-center text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-bounce border-primary/20">
                      En savoir plus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="bg-gradient-hero p-12 md:p-16 text-center relative">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl floating" />
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-primary/20 rounded-full blur-xl floating" style={{animationDelay: '2s'}} />
          
          <div className="relative z-10 text-white">
            <div className="inline-block px-6 py-3 bg-white/10 rounded-full text-sm font-medium mb-6 glass-effect">
              🚀 Démarrez maintenant
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Prêt à révolutionner votre logistique ?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez des milliers d'entreprises qui nous font confiance pour leurs expéditions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-secondary transition-bounce text-lg px-8 py-4 h-auto bg-white/10"
              >
                <span className="mr-2">📋</span>
                Demander un devis gratuit
              </Button>
              <Button 
                onClick={() => onNavigate('tracking')}
                size="lg"
                className="bg-white text-secondary hover:bg-primary-soft hover:text-primary transition-bounce text-lg px-8 py-4 h-auto shadow-glow"
              >
                <span className="mr-2">📍</span>
                Suivre un envoi
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">2007</div>
                <div className="text-sm text-white/80">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-white/80">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Support client</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}