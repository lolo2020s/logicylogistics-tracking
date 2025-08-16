import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Plane, Ship, Package, Clock, Shield, Euro, CheckCircle, Zap, Settings, Phone } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import heroImage from '@/assets/hero-premium.jpg';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t, tArray } = useTranslation();

  const services = [
    {
      icon: <Truck className="h-8 w-8 text-blue-500" />,
      title: t('services.road.title'),
      description: t('services.road.description'),
      features: tArray('services.road.features'),
      link: "transport-routier"
    },
    {
      icon: <Plane className="h-8 w-8 text-green-500" />,
      title: t('services.air.title'),
      description: t('services.air.description'),
      features: tArray('services.air.features'),
      link: "transport-aerien"
    },
    {
      icon: <Ship className="h-8 w-8 text-blue-600" />,
      title: t('services.maritime.title'),
      description: t('services.maritime.description'),
      features: tArray('services.maritime.features'),
      link: "transport-maritime"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: t('services.express.title'),
      description: t('services.express.description'),
      features: tArray('services.express.features'),
      link: "logistique-express"
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: tArray('services.custom.features'),
      link: "solutions-sur-mesure"
    },
    {
      icon: <Package className="h-8 w-8 text-orange-500" />,
      title: t('services.tracking.title'),
      description: t('services.tracking.description'),
      features: tArray('services.tracking.features'),
      link: "tracking"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: t('services.advantages.delivery.title'),
      description: t('services.advantages.delivery.description')
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('services.advantages.security.title'),
      description: t('services.advantages.security.description')
    },
    {
      icon: <Euro className="h-8 w-8 text-primary" />,
      title: t('services.advantages.pricing.title'),
      description: t('services.advantages.pricing.description')
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
            {t('services.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
          <Badge className="mb-8 bg-primary/20 text-primary border-primary/30">
            <CheckCircle className="h-3 w-3 mr-1" />
            {t('services.experience')}
          </Badge>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Services Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.services.title')}</h2>
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
                    {t('common.learnMore')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.values.title')}</h2>
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
                {t('common.getQuote')}
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                {t('services.description')}
              </p>
              <div className="space-x-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-primary hover:bg-white/90 mr-4"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {t('common.contact')}
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  {t('common.freeQuote')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}