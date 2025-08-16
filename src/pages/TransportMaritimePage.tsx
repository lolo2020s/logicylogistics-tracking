import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Anchor, Globe, DollarSign, CheckCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import transportMaritimeBg from '@/assets/transport-maritime-bg.jpg';

interface TransportMaritimePageProps {
  onNavigate: (page: string) => void;
}

export function TransportMaritimePage({ onNavigate }: TransportMaritimePageProps) {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Économique",
      description: "Solution la plus rentable pour les gros volumes"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Mondial",
      description: "Accès à tous les ports internationaux"
    },
    {
      icon: <Anchor className="h-6 w-6 text-primary" />,
      title: "Capacité",
      description: "Transport de charges lourdes et volumineuses"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Fiabilité",
      description: "Respect des délais et sécurité des marchandises"
    }
  ];

  const services = [
    "Conteneurs FCL (Full Container Load)",
    "Groupage LCL (Less than Container Load)",
    "Conteneurs frigorifiques",
    "Transport de véhicules (RoRo)",
    "Marchandises en vrac",
    "Projets industriels",
    "Conteneurs spéciaux (Open Top, Flat Rack)",
    "Transport multi-modal mer/route/rail"
  ];

  const routes = [
    { from: "Le Havre", to: "New York", duration: "7-10 jours" },
    { from: "Marseille", to: "Casablanca", duration: "2-3 jours" },
    { from: "Anvers", to: "Shanghai", duration: "25-30 jours" },
    { from: "Rotterdam", to: "Dubaï", duration: "12-15 jours" }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${transportMaritimeBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transport Maritime
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solutions de fret maritime économiques et fiables pour vos expéditions internationales de tous volumes
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
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre transport maritime ?</h2>
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

        {/* Services et Routes */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos Services Maritimes</h2>
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
                  <Ship className="h-6 w-6 text-primary" />
                  <span>Routes Principales</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {routes.map((route, index) => (
                    <div key={index} className="border-b border-border pb-3 last:border-b-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{route.from} → {route.to}</p>
                          <p className="text-sm text-muted-foreground">Transit: {route.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-medium mb-2">Types de conteneurs</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 20' Standard (33 m³)</li>
                    <li>• 40' Standard (67 m³)</li>
                    <li>• 40' High Cube (76 m³)</li>
                    <li>• Conteneurs spéciaux sur demande</li>
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