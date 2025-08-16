import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Globe, Clock, Truck, Plane, Ship, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ZonesLivraisonPageProps {
  onNavigate: (page: string) => void;
}

export function ZonesLivraisonPage({ onNavigate }: ZonesLivraisonPageProps) {
  const { t } = useLanguage();

  const zones = [
    {
      region: "France Métropolitaine",
      countries: ["France"],
      modes: ["road", "air"],
      delais: "24-48h",
      color: "green",
      description: "Couverture complète avec service express disponible"
    },
    {
      region: "Union Européenne",
      countries: ["Allemagne", "Belgique", "Pays-Bas", "Italie", "Espagne", "Portugal", "Pologne", "République Tchèque", "Autriche", "Suisse"],
      modes: ["road", "air"],
      delais: "2-5 jours",
      color: "blue",
      description: "Réseau routier et aérien optimisé"
    },
    {
      region: "Afrique du Nord",
      countries: ["Maroc", "Tunisie", "Algérie"],
      modes: ["road", "maritime", "air"],
      delais: "3-7 jours",
      color: "orange",
      description: "Liaisons régulières par tous modes de transport"
    },
    {
      region: "Amérique du Nord",
      countries: ["États-Unis", "Canada", "Mexique"],
      modes: ["air", "maritime"],
      delais: "2-10 jours",
      color: "purple",
      description: "Fret aérien express et maritime économique"
    },
    {
      region: "Asie-Pacifique",
      countries: ["Chine", "Japon", "Corée du Sud", "Singapour", "Thaïlande", "Vietnam", "Australie"],
      modes: ["air", "maritime"],
      delais: "3-30 jours",
      color: "red",
      description: "Hub logistique pour l'Asie avec options express"
    },
    {
      region: "Moyen-Orient",
      countries: ["Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït", "Liban", "Jordanie"],
      modes: ["air", "maritime"],
      delais: "2-15 jours",
      color: "yellow",
      description: "Partenariats locaux pour une livraison efficace"
    }
  ];

  const getTransportIcon = (mode: string) => {
    switch (mode) {
      case 'road': return <Truck className="h-4 w-4" />;
      case 'air': return <Plane className="h-4 w-4" />;
      case 'maritime': return <Ship className="h-4 w-4" />;
      default: return <MapPin className="h-4 w-4" />;
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-800 border-green-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      red: "bg-red-100 text-red-800 border-red-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zones de Livraison
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Découvrez notre couverture mondiale et les délais de livraison pour chaque destination
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Statistiques */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">Pays desservis</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Villes principales</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary">24h</p>
              <p className="text-sm text-muted-foreground">Délai minimum</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary">99.8%</p>
              <p className="text-sm text-muted-foreground">Taux de livraison</p>
            </CardContent>
          </Card>
        </section>

        {/* Zones de Livraison */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Nos Zones de Couverture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {zones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{zone.region}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`${getColorClasses(zone.color)} flex items-center space-x-1`}
                    >
                      <Clock className="h-3 w-3" />
                      <span>{zone.delais}</span>
                    </Badge>
                  </div>
                  <CardDescription>{zone.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Modes de transport */}
                  <div>
                    <p className="font-medium text-sm mb-2">Modes de transport :</p>
                    <div className="flex space-x-2">
                      {zone.modes.map((mode) => (
                        <Badge key={mode} variant="outline" className="flex items-center space-x-1">
                          {getTransportIcon(mode)}
                          <span className="capitalize">{mode === 'road' ? 'Routier' : mode === 'air' ? 'Aérien' : 'Maritime'}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pays */}
                  <div>
                    <p className="font-medium text-sm mb-2">Pays principaux :</p>
                    <div className="flex flex-wrap gap-1">
                      {zone.countries.slice(0, 6).map((country) => (
                        <Badge key={country} variant="secondary" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                      {zone.countries.length > 6 && (
                        <Badge variant="secondary" className="text-xs">
                          +{zone.countries.length - 6} autres
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conditions Spéciales */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Conditions et Restrictions</CardTitle>
              <CardDescription>
                Informations importantes concernant nos livraisons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Marchandises acceptées :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Colis et documents standards</li>
                    <li>• Marchandises commerciales</li>
                    <li>• Véhicules (selon destination)</li>
                    <li>• Produits périssables (conditions spéciales)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Restrictions :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Matières dangereuses (selon réglementation)</li>
                    <li>• Produits interdits par les douanes</li>
                    <li>• Objets de valeur exceptionnelle</li>
                    <li>• Animaux vivants (nous consulter)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-hero rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Votre destination n'apparaît pas dans la liste ?
          </h3>
          <p className="text-white/90 mb-6">
            Contactez-nous pour étudier votre demande spécifique. Nous avons des solutions pour presque toutes les destinations.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary hover:bg-white/90"
            >
              <Phone className="h-4 w-4 mr-2" />
              Nous Contacter
            </Button>
            <Button 
              onClick={() => onNavigate('quote')}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Demander un Devis
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}