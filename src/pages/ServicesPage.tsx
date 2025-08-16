import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Plane, Ship, Package, Clock, Shield, Euro, CheckCircle, Zap, Settings, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import heroImage from '@/assets/hero-premium.jpg';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Truck className="h-8 w-8 text-blue-500" />,
      title: "Transport Routier",
      description: "Solutions de transport routier fiables pour l'Europe et l'Afrique du Nord",
      features: ["Livraison express 24-48h", "Véhicules légers à poids lourds", "Suivi temps réel", "Assurance tous risques"],
      link: "transport-routier"
    },
    {
      icon: <Plane className="h-8 w-8 text-green-500" />,
      title: "Transport Aérien",
      description: "Fret aérien express pour vos envois urgents dans le monde entier",
      features: ["Livraison 24-72h", "Couverture mondiale", "Sécurité maximale", "Traçabilité complète"],
      link: "transport-aerien"
    },
    {
      icon: <Ship className="h-8 w-8 text-blue-600" />,
      title: "Transport Maritime",
      description: "Solutions économiques pour vos expéditions internationales volumineuses",
      features: ["Conteneurs FCL/LCL", "Tous ports mondiaux", "Tarifs compétitifs", "Groupage optimisé"],
      link: "transport-maritime"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Logistique Express",
      description: "Service premium pour vos envois urgents avec garantie de délais",
      features: ["Même jour possible", "Service 24/7", "Coursier dédié", "Remboursement si retard"],
      link: "logistique-express"
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Solutions Sur-Mesure",
      description: "Solutions logistiques personnalisées selon vos besoins spécifiques",
      features: ["Analyse des besoins", "Solution dédiée", "Accompagnement expert", "Évolutivité garantie"],
      link: "solutions-sur-mesure"
    },
    {
      icon: <Package className="h-8 w-8 text-orange-500" />,
      title: "Suivi de Colis",
      description: "Système de tracking avancé pour suivre vos envois en temps réel",
      features: ["Géolocalisation GPS", "Notifications SMS", "Interface web", "API disponible"],
      link: "tracking"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Délais Respectés",
      description: "Nos équipes s'engagent à respecter les délais convenus avec des garanties"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Sécurité Maximale",
      description: "Vos envois sont protégés et assurés durant tout le transport"
    },
    {
      icon: <Euro className="h-8 w-8 text-primary" />,
      title: "Tarifs Transparents",
      description: "Prix fixes sans surprise avec devis gratuit sous 24h"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Services de Transport
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solutions logistiques complètes pour tous vos besoins de transport, 
            de la livraison express aux expéditions internationales
          </p>
          <Badge className="mb-8 bg-primary/20 text-primary border-primary/30">
            <CheckCircle className="h-3 w-3 mr-1" />
            Plus de 17 ans d'expérience
          </Badge>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Services Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Découvrez Nos Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate(service.link)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(service.link);
                    }}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir LOGICY TRANSPORT ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-hero">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin d'un Service Personnalisé ?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Nos experts vous accompagnent pour trouver la solution de transport 
                la plus adaptée à vos besoins et contraintes spécifiques.
              </p>
              <div className="space-x-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-primary hover:bg-white/90 mr-4"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Nous Contacter
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Devis Gratuit
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}