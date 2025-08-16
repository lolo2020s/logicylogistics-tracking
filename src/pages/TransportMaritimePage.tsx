import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Anchor, Globe, DollarSign, CheckCircle, Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import transportMaritimeBg from '@/assets/transport-maritime-bg.jpg';
import transportMaritimeHero from '@/assets/transport-maritime-hero.jpg';

interface TransportMaritimePageProps {
  onNavigate: (page: string) => void;
}

export function TransportMaritimePage({ onNavigate }: TransportMaritimePageProps) {
  const { t, tArray } = useTranslation();

  const advantages = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: t('transport.maritime.advantages.economical.title'),
      description: t('transport.maritime.advantages.economical.description')
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t('transport.maritime.advantages.global.title'),
      description: t('transport.maritime.advantages.global.description')
    },
    {
      icon: <Anchor className="h-6 w-6 text-primary" />,
      title: t('transport.maritime.advantages.capacity.title'),
      description: t('transport.maritime.advantages.capacity.description')
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: t('transport.maritime.advantages.reliability.title'),
      description: t('transport.maritime.advantages.reliability.description')
    }
  ];

  const services = [
    t('transport.maritime.services.0'),
    t('transport.maritime.services.1'),
    t('transport.maritime.services.2'),
    t('transport.maritime.services.3'),
    t('transport.maritime.services.4'),
    t('transport.maritime.services.5'),
    t('transport.maritime.services.6'),
    t('transport.maritime.services.7')
  ];

  const routes = [
    { from: "Le Havre", to: "New York", duration: "7-10 jours" },
    { from: "Marseille", to: "Casablanca", duration: "2-3 jours" },
    { from: "Anvers", to: "Shanghai", duration: "25-30 jours" },
    { from: "Rotterdam", to: "Dubaï", duration: "12-15 jours" }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface" style={{ backgroundImage: `url(${transportMaritimeHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative z-10">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${transportMaritimeBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('transport.maritime.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('transport.maritime.subtitle')}
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            {t('transport.maritime.quote')}
          </Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Avantages */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('transport.maritime.whyChoose')}</h2>
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
              <h2 className="text-3xl font-bold mb-6">{t('transport.maritime.servicesTitle')}</h2>
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
                  {t('transport.maritime.contact')}
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                >
                  {t('transport.maritime.freeQuote')}
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Ship className="h-6 w-6 text-primary" />
                  <span>{t('transport.maritime.routesTitle')}</span>
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
                  <h4 className="font-medium mb-2">{t('transport.maritime.containers.title')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {t('transport.maritime.containers.list.0')}</li>
                    <li>• {t('transport.maritime.containers.list.1')}</li>
                    <li>• {t('transport.maritime.containers.list.2')}</li>
                    <li>• {t('transport.maritime.containers.list.3')}</li>
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