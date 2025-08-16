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
      <section className="relative overflow-hidden rounded-2xl">
        <div 
          className="relative h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t.home.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {t.home.subtitle}
              </p>
              
              {/* Quick Tracking */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto">
                <div className="flex space-x-3">
                  <Input
                    placeholder={t.home.trackingPlaceholder}
                    value={quickTrackingCode}
                    onChange={(e) => setQuickTrackingCode(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleQuickTracking()}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button 
                    onClick={handleQuickTracking}
                    className="bg-primary hover:bg-primary-glow shadow-primary"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => onNavigate('tracking')}
                size="lg"
                className="bg-primary hover:bg-primary-glow shadow-primary text-lg px-8 py-3"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Nos Solutions de Transport
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depuis 2007, nous offrons des services de transport fiables et sécurisés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <img src={service.icon} alt={service.title} className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-accent rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Prêt à expédier ?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Contactez-nous pour obtenir un devis personnalisé ou suivez votre envoi en temps réel
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => onNavigate('contact')}
            variant="outline"
            size="lg"
          >
            Demander un devis
          </Button>
          <Button 
            onClick={() => onNavigate('tracking')}
            size="lg"
            className="bg-gradient-primary hover:opacity-90"
          >
            Suivre un envoi
          </Button>
        </div>
      </section>
    </div>
  );
}