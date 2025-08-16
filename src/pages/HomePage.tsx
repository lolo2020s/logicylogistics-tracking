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
      <section className="relative overflow-hidden rounded-2xl shadow-section">
        <div 
          className="relative h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
          
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
            <div className="max-w-4xl space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {t.home.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  {t.home.subtitle}
                </p>
              </div>
              
              {/* Clean Quick Tracking */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/20">
                <div className="flex space-x-3">
                  <Input
                    placeholder={t.home.trackingPlaceholder}
                    value={quickTrackingCode}
                    onChange={(e) => setQuickTrackingCode(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleQuickTracking()}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  />
                  <Button 
                    onClick={handleQuickTracking}
                    className="bg-primary hover:bg-primary/90 h-12 px-6 shadow-button transition-smooth"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => onNavigate('tracking')}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-button transition-smooth text-lg px-8 py-3 h-12"
              >
                {t.home.trackButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos Solutions de Transport
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depuis 2007, nous offrons des services de transport fiables et sécurisés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-section transition-smooth cursor-pointer border shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-smooth">
                  <img src={service.icon} alt={service.title} className="w-10 h-10 group-hover:filter group-hover:brightness-0 group-hover:invert transition-smooth" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-smooth"
                  >
                    En savoir plus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-light rounded-2xl p-8 md:p-12 text-center shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          Prêt à expédier ?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Contactez-nous pour obtenir un devis personnalisé ou suivez votre envoi en temps réel
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => onNavigate('contact')}
            variant="outline"
            size="lg"
            className="shadow-button transition-smooth"
          >
            Demander un devis
          </Button>
          <Button 
            onClick={() => onNavigate('tracking')}
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-button transition-smooth"
          >
            Suivre un envoi
          </Button>
        </div>
      </section>
    </div>
  );
}