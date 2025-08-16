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
    <div className="min-h-screen bg-white">
      {/* Section blanche du haut */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-black leading-tight mb-8">
            Depuis 2007,<br />
            LOGICY TRANSPORT<br />
            livre vos colis, cargaisons<br />
            et véhicules partout dans<br />
            le monde avec fiabilité<br />
            et prestige
          </h1>
          
          <Button
            onClick={() => onNavigate('tracking')}
            className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold px-8 py-4 text-lg rounded-lg shadow-button transition-smooth"
          >
            Suivre un envoi
          </Button>
        </div>
      </section>

      {/* Section noire du bas avec image d'avion */}
      <section 
        className="bg-black py-20 px-6 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white leading-tight mb-8">
              Depuis 2007, LOGICY TRANSPORT<br />
              livre vos colis, cargaisons et<br />
              véhicules partout dans le monde
            </h2>
          </div>

          {/* Les 3 cartes de transport */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { bg: transportRoutierBg, title: 'Transport\nroutier' },
              { bg: transportAerienBg, title: 'Transport\naérien' },
              { bg: transportMaritimeBg, title: 'Transport\nmaritime' }
            ].map((service, index) => (
              <div 
                key={index}
                className="relative h-[300px] bg-cover bg-center rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${service.bg})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 p-6 h-full flex items-end">
                  <h3 className="text-xl font-montserrat font-bold text-white leading-tight whitespace-pre-line">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}