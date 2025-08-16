import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Truck, Plane, Ship, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import heroImage from '@/assets/hero-premium.jpg';
import roadIcon from '@/assets/icon-road.png';
import airIcon from '@/assets/icon-air.png';
import maritimeIcon from '@/assets/icon-maritime.png';
import transportRoutierBg from '@/assets/transport-routier-bg.jpg';
import transportAerienBg from '@/assets/transport-aerien-bg.jpg';
import transportMaritimeBg from '@/assets/transport-maritime-bg.jpg';
import carousel1 from '@/assets/carousel-1.jpg';
import carousel2 from '@/assets/carousel-2.jpg';
import carousel3 from '@/assets/carousel-3.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();
  const [quickTrackingCode, setQuickTrackingCode] = useState('');

  // Images du carrousel
  const carouselImages = [carousel1, carousel2, carousel3];
  
  // Configuration du carrousel avec autoplay
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

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
      {/* Section blanche du haut avec carrousel */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div className="text-left">
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

            {/* Carrousel à droite */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-section" ref={emblaRef}>
                <div className="flex">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="flex-none w-full">
                      <img 
                        src={image} 
                        alt={`Logistique ${index + 1}`}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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

          {/* Les 3 cartes de transport - Maintenant cliquables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { bg: transportRoutierBg, title: 'Transport\nroutier', route: 'transport-routier', icon: <Truck className="h-12 w-12 text-orange-400 mb-4" />, bgColor: 'bg-slate-800' },
              { bg: transportAerienBg, title: 'Transport\naérien', route: 'transport-aerien', icon: <Plane className="h-12 w-12 text-orange-400 mb-4" />, bgColor: 'bg-slate-800' },
              { bg: transportMaritimeBg, title: 'Transport\nmaritime', route: 'transport-maritime', icon: <Ship className="h-12 w-12 text-orange-400 mb-4" />, bgColor: 'bg-slate-800' }
            ].map((service, index) => (
              <button
                key={index}
                onClick={() => onNavigate(service.route)}
                className={`relative h-[300px] rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${service.bgColor}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-slate-700/40 group-hover:from-slate-900/95 group-hover:via-slate-800/70 group-hover:to-slate-700/50 transition-all duration-300" />
                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-montserrat font-bold text-white leading-tight whitespace-pre-line mb-4">
                    {service.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-6 w-6 text-orange-400" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}