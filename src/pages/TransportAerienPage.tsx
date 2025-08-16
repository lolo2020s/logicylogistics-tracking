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
  const { t, tArray } = useTranslation();

  const advantages = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.speed.title'),
      description: t('transport.aerial.advantages.speed.description')
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.coverage.title'),
      description: t('transport.aerial.advantages.coverage.description')
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.security.title'),
      description: t('transport.aerial.advantages.security.description')
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: t('transport.aerial.advantages.tracking.title'),
      description: t('transport.aerial.advantages.tracking.description')
    }
  ];

  const services = [
    t('transport.aerial.services.0'),
    t('transport.aerial.services.1'),
    t('transport.aerial.services.2'),
    t('transport.aerial.services.3'),
    t('transport.aerial.services.4'),
    t('transport.aerial.services.5'),
    t('transport.aerial.services.6'),
    t('transport.aerial.services.7')
  ];

  return (
    <div className="min-h-screen bg-gradient-surface" style={{ backgroundImage: `url(${transportAerienHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative z-10">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${transportAerienBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('transport.aerial.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('transport.aerial.subtitle')}
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            {t('transport.aerial.quote')}
          </Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Avantages */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('transport.aerial.whyChoose')}</h2>
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
              <h2 className="text-3xl font-bold mb-6">{t('transport.aerial.servicesTitle')}</h2>
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
                  {t('transport.aerial.contact')}
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                >
                  {t('transport.aerial.freeQuote')}
                </Button>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plane className="h-6 w-6 text-primary" />
                  <span>{t('transport.aerial.timelines.title')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.express24')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.europe')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.express48')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.asia')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.express72')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.southAmerica')}</p>
                  </div>
                  <div>
                    <p className="font-medium">{t('transport.aerial.timelines.standard')}</p>
                    <p className="text-muted-foreground">{t('transport.aerial.timelines.zones.africa')}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">{t('transport.aerial.timelines.destinations.title')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {t('transport.aerial.timelines.destinations.list.0')}</li>
                    <li>• {t('transport.aerial.timelines.destinations.list.1')}</li>
                    <li>• {t('transport.aerial.timelines.destinations.list.2')}</li>
                    <li>• {t('transport.aerial.timelines.destinations.list.3')}</li>
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