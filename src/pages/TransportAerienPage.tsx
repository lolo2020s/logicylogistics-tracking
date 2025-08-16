import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Clock, Globe, Shield, CheckCircle, Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import transportAerienBg from '@/assets/transport-aerien-bg.jpg';
import transportAerienHero from '@/assets/transport-aerien-hero.jpg';

interface TransportAerienPageProps {
  onNavigate: (page: string) => void;
}

export function TransportAerienPage({ onNavigate }: TransportAerienPageProps) {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.speed.title', 'Rapidité Exceptionnelle'),
      description: t('transport.aerial.advantages.speed.description', 'Livraison express partout dans le monde en 24-72h')
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.coverage.title', 'Couverture Mondiale'),
      description: t('transport.aerial.advantages.coverage.description', 'Réseau international avec tous les aéroports majeurs')
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.security.title', 'Sécurité Maximale'),
      description: t('transport.aerial.advantages.security.description', 'Standards de sécurité aéronautique les plus élevés')
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.tracking.title', 'Traçabilité Complète'),
      description: t('transport.aerial.advantages.tracking.description', 'Suivi en temps réel de l\'aéroport de départ à la livraison')
    }
  ];

  const services = [
    t('transport.aerial.services.0', 'Fret aérien express (24h/48h/72h)'),
    t('transport.aerial.services.1', 'Transport de marchandises périssables'),
    t('transport.aerial.services.2', 'Colis urgents et documents'),
    t('transport.aerial.services.3', 'Marchandises de valeur'),
    t('transport.aerial.services.4', 'Transport pharmaceutique'),
    t('transport.aerial.services.5', 'Pièces détachées industrielles'),
    t('transport.aerial.services.6', 'E-commerce international'),
    t('transport.aerial.services.7', 'Consolidation et groupage aérien')
  ];

  return (
    <div className="min-h-screen bg-gradient-surface" style={{ backgroundImage: `url(${transportAerienHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${transportAerienBg})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('transport.aerial.title', 'Transport Aérien')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('transport.aerial.subtitle', 'Solutions de fret aérien express pour vos expéditions urgentes et internationales avec une couverture mondiale')}
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            {t('transport.aerial.quote', 'Demander un Devis')}
          </Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Avantages */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('transport.aerial.whyChoose', 'Pourquoi choisir notre transport aérien ?')}</h2>
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
              <h2 className="text-3xl font-bold mb-6">{t('transport.aerial.servicesTitle', 'Nos Services de Fret Aérien')}</h2>
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
                  {t('transport.aerial.contact', 'Nous Contacter')}
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                >
                  {t('transport.aerial.freeQuote', 'Devis Gratuit')}
                </Button>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plane className="h-6 w-6 text-primary" />
                  <span>{t('transport.aerial.timelines.title', 'Délais et Destinations')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.express24', 'Express 24h')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.europe', 'Europe, Amérique du Nord')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.express48', 'Express 48h')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.asia', 'Asie, Moyen-Orient')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.express72', 'Express 72h')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.southAmerica', 'Amérique du Sud, Océanie')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.standard', 'Standard')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.africa', 'Afrique, destinations spéciales')}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">{t('transport.aerial.timelines.destinations.title', 'Destinations principales')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {[0, 1, 2, 3].map(index => (
                      <li key={index}>• {t(`transport.aerial.timelines.destinations.list.${index}`, [
                        'Plus de 200 destinations mondiales',
                        'Partenariats avec les grandes compagnies',
                        'Accès aux aéroports cargo spécialisés',
                        'Service porte-à-porte disponible'
                      ][index])}</li>
                    ))}
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