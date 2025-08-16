import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Clock, Shield, Euro, CheckCircle, Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import transportRoutierBg from '@/assets/transport-routier-bg.jpg';
import transportRoutierHero from '@/assets/transport-routier-hero.jpg';

interface TransportRoutierPageProps {
  onNavigate: (page: string) => void;
}

export function TransportRoutierPage({ onNavigate }: TransportRoutierPageProps) {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Livraison Rapide",
      description: "Délais de livraison courts grâce à notre réseau routier optimisé"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Sécurité Garantie",
      description: "Assurance complète et suivi en temps réel de vos colis"
    },
    {
      icon: <Euro className="h-6 w-6 text-primary" />,
      title: "Tarifs Compétitifs",
      description: "Prix attractifs pour tous types de marchandises"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Flexibilité",
      description: "Service porte-à-porte adapté à vos besoins spécifiques"
    }
  ];

  const services = [
    "Transport de marchandises générales",
    "Livraison express (24h/48h)",
    "Transport de véhicules",
    "Déménagement professionnel", 
    "Transport frigorifique",
    "Marchandises dangereuses (ADR)",
    "Convois exceptionnels",
    "Distribution urbaine"
  ];

  return (
    <div className="min-h-screen bg-gradient-surface" style={{ backgroundImage: `url(${transportRoutierHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative z-10">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${transportRoutierBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transport Routier
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solutions de transport routier fiables et efficaces pour tous vos besoins logistiques en Europe et au-delà
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            Demander un Devis
          </Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Avantages */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre transport routier ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos Services de Transport Routier</h2>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-primary hover:bg-primary/90 text-white mr-4"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Nous Contacter
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                >
                  Devis Gratuit
                </Button>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-6 w-6 text-primary" />
                  <span>Flotte et Capacités</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Véhicules légers</p>
                    <p className="text-muted-foreground">Jusqu'à 3,5 tonnes</p>
                  </div>
                  <div>
                    <p className="font-medium">Porteurs</p>
                    <p className="text-muted-foreground">Jusqu'à 19 tonnes</p>
                  </div>
                  <div>
                    <p className="font-medium">Semi-remorques</p>
                    <p className="text-muted-foreground">Jusqu'à 40 tonnes</p>
                  </div>
                  <div>
                    <p className="font-medium">Convois spéciaux</p>
                    <p className="text-muted-foreground">Charges exceptionnelles</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Zones de livraison</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• France métropolitaine</li>
                    <li>• Union Européenne</li>
                    <li>• Afrique du Nord</li>
                    <li>• Europe de l'Est</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}