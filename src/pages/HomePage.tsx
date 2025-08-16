import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Truck, Plane, Ship, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';
import heroImage from '@/assets/hero-premium.jpg';
import roadIcon from '@/assets/icon-road.png';
import airIcon from '@/assets/icon-air.png';
import maritimeIcon from '@/assets/icon-maritime.png';
import transportRoutierBg from '@/assets/transport-routier-bg.jpg';
import transportAerienBg from '@/assets/transport-aerien-bg.jpg';
import transportMaritimeBg from '@/assets/transport-maritime-bg.jpg';

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
    <div className="space-y-0 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="relative h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
          
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
            <div className="max-w-4xl space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight">
                  Depuis 2007,<br />
                  LOGICY TRANSPORT<br />
                  <span className="text-3xl md:text-5xl font-montserrat font-semibold">
                    livre vos colis, cargaisons<br />
                    et véhicules partout dans<br />
                    le monde avec fiabilité<br />
                    et prestige
                  </span>
                </h1>
              </div>
              
              <Button
                onClick={() => onNavigate('tracking')}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-button transition-smooth text-lg px-8 py-3 h-14 font-montserrat font-semibold"
              >
                Suivre un envoi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Background */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white">
              Depuis 2007, LOGICY TRANSPORT<br />
              livre vos colis, cargaisons et<br />
              véhicules partout dans le monde
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const cardBackgrounds = [
                transportRoutierBg,
                transportAerienBg,
                transportMaritimeBg
              ];
              const serviceNames = ['Transport\nroutier', 'Transport\naérien', 'Transport\nmaritime'];
              
              return (
                <div 
                  key={index} 
                  className="group hover:shadow-premium transition-smooth cursor-pointer rounded-none overflow-hidden bg-cover bg-center relative h-[400px]"
                  style={{ backgroundImage: `url(${cardBackgrounds[index]})` }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-smooth" />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <h3 className="text-2xl font-montserrat font-bold text-white leading-tight whitespace-pre-line">
                      {serviceNames[index]}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}