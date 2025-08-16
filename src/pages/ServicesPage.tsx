import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Plane, Ship, Clock, Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import roadIcon from '@/assets/icon-road.png';
import airIcon from '@/assets/icon-air.png';
import maritimeIcon from '@/assets/icon-maritime.png';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useLanguage();

  const services = [
    {
      icon: roadIcon,
      title: t.services.road.title,
      description: t.services.road.description,
      features: ['Livraison 24-48h en Europe', 'Suivi GPS en temps réel', 'Transport sécurisé', 'Assurance incluse'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: airIcon,
      title: t.services.air.title,
      description: t.services.air.description,
      features: ['Livraison express mondial', 'Délais garantis', 'Manutention spécialisée', 'Douane simplifiée'],
      color: 'from-sky-500 to-sky-600'
    },
    {
      icon: maritimeIcon,
      title: t.services.maritime.title,
      description: t.services.maritime.description,
      features: ['Solutions économiques', 'Conteneurs FCL/LCL', 'Port à port', 'Charges lourdes'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Délais respectés',
      description: 'Nos équipes s\'engagent à respecter les délais convenus'
    },
    {
      icon: Shield,
      title: 'Sécurité maximale',
      description: 'Vos envois sont protégés et assurés durant tout le transport'
    },
    {
      icon: Globe,
      title: 'Réseau mondial',
      description: 'Partenaires de confiance dans plus de 50 pays'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="space-y-16 relative">
        {/* Header */}
        <div className="bg-gradient-hero text-center py-16 px-4 -mx-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            {t.services.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Découvrez nos solutions de transport adaptées à tous vos besoins logistiques
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-premium transition-smooth hover:-translate-y-2 bg-gradient-surface border-0 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-premium">
                  <img src={service.icon} alt={service.title} className="w-12 h-12" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Advantages */}
      <section className="bg-gradient-accent rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Pourquoi choisir LOGICY TRANSPORT ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <advantage.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

        {/* CTA */}
        <div className="text-center bg-gradient-dark rounded-2xl p-8 shadow-premium animate-scale-in mx-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Besoin d'un devis personnalisé ?</h2>
          <p className="text-white/80 mb-6">
            Contactez nos experts pour une solution adaptée à vos besoins
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => onNavigate('contact')}
            size="lg"
            className="bg-gradient-primary hover:opacity-90"
          >
            Demander un devis
          </Button>
          <Button 
            onClick={() => onNavigate('tracking')}
            variant="outline"
            size="lg"
          >
            Suivre un envoi
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}