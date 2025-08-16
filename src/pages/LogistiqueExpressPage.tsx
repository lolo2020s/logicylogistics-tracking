import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Clock, Shield, Phone, CheckCircle, Truck, Plane, Package } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import heroImage from '@/assets/hero-premium.jpg';
import logistiqueExpressHero from '@/assets/logistique-express-hero.jpg';

interface LogistiqueExpressPageProps {
  onNavigate: (page: string) => void;
}

export function LogistiqueExpressPage({ onNavigate }: LogistiqueExpressPageProps) {
  const { t } = useTranslation();

  const services = [
    {
      title: "Express Même Jour",
      time: "0-8h",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      description: "Collecte et livraison dans la même journée",
      features: ["Prise en charge immédiate", "Livraison garantie le jour même", "Suivi temps réel", "Service 7j/7"],
      color: "yellow"
    },
    {
      title: "Express 24h",
      time: "24h",
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      description: "Livraison garantie le lendemain",
      features: ["Collecte avant 18h", "Livraison avant 12h le lendemain", "Assurance incluse", "Service international"],
      color: "orange"
    },
    {
      title: "Express 48h",
      time: "48h",
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      description: "Livraison sous 48h maximum",
      features: ["Collecte programmée", "Livraison en 2 jours ouvrés", "Tarif optimisé", "Toute l'Europe"],
      color: "blue"
    }
  ];

  const advantages = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Rapidité Garantie",
      description: "Délais respectés ou remboursement"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Sécurité Maximum",
      description: "Assurance ad valorem et suivi permanent"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Disponibilité 24/7",
      description: "Service d'urgence disponible en continu"
    },
    {
      icon: <Package className="h-6 w-6 text-primary" />,
      title: "Tous Types de Colis",
      description: "De l'enveloppe au colis de 30kg"
    }
  ];

  const useCases = [
    "Documents urgents et contrats",
    "Pièces détachées critiques",
    "Échantillons et prototypes",
    "Médicaments et produits de santé",
    "Colis e-commerce prioritaires",
    "Dossiers juridiques",
    "Support informatique",
    "Livraisons événementielles"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800",
      blue: "bg-blue-50 border-blue-200 text-blue-800"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gradient-surface" style={{ backgroundImage: `url(${logistiqueExpressHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative z-10">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Zap className="h-3 w-3 mr-1" />
            Service Premium
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Logistique Express
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solutions ultra-rapides pour vos envois urgents. Livraison le jour même, 24h ou 48h garanties avec suivi temps réel.
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            <Zap className="h-4 w-4 mr-2" />
            Envoi Express
          </Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Services Express */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services Express</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all ${getColorClasses(service.color)}`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    <Clock className="h-3 w-3 mr-1" />
                    {service.time}
                  </Badge>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Avantages */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre service express ?</h2>
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

        {/* Cas d'usage et processus */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cas d'Usage Typiques</h2>
              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-primary hover:bg-primary/90 text-white mr-4"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Urgence 24/7
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                >
                  Devis Express
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plane className="h-6 w-6 text-primary" />
                  <span>Processus Express</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Commande Express</p>
                      <p className="text-sm text-muted-foreground">Commande en ligne ou par téléphone</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Collecte Immédiate</p>
                      <p className="text-sm text-muted-foreground">Coursier dépêché dans l'heure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Transport Prioritaire</p>
                      <p className="text-sm text-muted-foreground">Acheminement par le mode le plus rapide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-medium">Livraison Garantie</p>
                      <p className="text-sm text-muted-foreground">Remise en main propre avec preuve</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Zones Express</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Île-de-France : même jour</li>
                    <li>• Grandes métropoles : 24h</li>
                    <li>• France métropolitaine : 48h</li>
                    <li>• Europe : 24-72h</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tarification Express */}
        <section>
          <Card className="bg-gradient-hero">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Tarification Express Transparente
              </h3>
              <p className="text-white/90 mb-6">
                Pas de surprise ! Prix fixe selon le délai choisi, calculé instantanément
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-medium">Même jour</p>
                  <p className="text-white/80 text-sm">À partir de 25€</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-medium">Express 24h</p>
                  <p className="text-white/80 text-sm">À partir de 15€</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white font-medium">Express 48h</p>
                  <p className="text-white/80 text-sm">À partir de 10€</p>
                </div>
              </div>
              <Button 
                onClick={() => onNavigate('quote')}
                className="bg-white text-primary hover:bg-white/90"
              >
                Calculer le Prix
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
      </div>
    </div>
  );
}