import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Clock, Globe, Shield, CheckCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import transportAerienBg from '@/assets/transport-aerien-bg.jpg';

interface TransportAerienPageProps {
  onNavigate: (page: string) => void;
}

export function TransportAerienPage({ onNavigate }: TransportAerienPageProps) {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Rapidité Exceptionnelle",
      description: "Livraison express partout dans le monde en 24-72h"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Couverture Mondiale",
      description: "Réseau international avec tous les aéroports majeurs"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Sécurité Maximale",
      description: "Standards de sécurité aéronautique les plus élevés"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Traçabilité Complète",
      description: "Suivi en temps réel de l'aéroport de départ à la livraison"
    }
  ];

  const services = [
    "Fret aérien express (24h/48h/72h)",
    "Transport de marchandises périssables",
    "Colis urgents et documents",
    "Marchandises de valeur",
    "Transport pharmaceutique",
    "Pièces détachées industrielles",
    "E-commerce international",
    "Consolidation et groupage aérien"
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${transportAerienBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transport Aérien
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solutions de fret aérien express pour vos expéditions urgentes et internationales avec une couverture mondiale
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
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre transport aérien ?</h2>
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
              <h2 className="text-3xl font-bold mb-6">Nos Services de Fret Aérien</h2>
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
                  <Plane className="h-6 w-6 text-primary" />
                  <span>Délais et Destinations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Express 24h</p>
                    <p className="text-muted-foreground">Europe, Amérique du Nord</p>
                  </div>
                  <div>
                    <p className="font-medium">Express 48h</p>
                    <p className="text-muted-foreground">Asie, Moyen-Orient</p>
                  </div>
                  <div>
                    <p className="font-medium">Express 72h</p>
                    <p className="text-muted-foreground">Amérique du Sud, Océanie</p>
                  </div>
                  <div>
                    <p className="font-medium">Standard</p>
                    <p className="text-muted-foreground">Afrique, destinations spéciales</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Destinations principales</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Plus de 200 destinations mondiales</li>
                    <li>• Partenariats avec les grandes compagnies</li>
                    <li>• Accès aux aéroports cargo spécialisés</li>
                    <li>• Service porte-à-porte disponible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}