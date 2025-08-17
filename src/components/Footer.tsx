import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Truck, Plane, Ship, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();

  const services = [
    { key: 'transport-routier', label: t('services.road.title'), icon: <Truck className="h-4 w-4" /> },
    { key: 'transport-aerien', label: t('services.air.title'), icon: <Plane className="h-4 w-4" /> },
    { key: 'transport-maritime', label: t('services.maritime.title'), icon: <Ship className="h-4 w-4" /> }
  ];

  const quickLinks = [
    { key: 'tracking', label: t('nav.tracking') },
    { key: 'contact', label: t('nav.contact') }
  ];

  const legalLinks = [
    { key: 'conditions-generales', label: t('footer.legal.conditions', 'Conditions Générales') },
    { key: 'politique-confidentialite', label: t('footer.legal.privacy', 'Politique de Confidentialité') },
    { key: 'mentions-legales', label: t('footer.legal.mentions', 'Mentions Légales') }
  ];


  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">LOGICY TRANSPORT</h3>
            <p className="text-sm text-muted-foreground">
              {t('about.description')}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Gesworenhoekseweg 4, 5047 TM Tilburg, Pays-Bas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+31626018693</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@logixy-transport.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t('services.title')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.key}>
                  <button
                    onClick={() => onNavigate(service.key)}
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.icon}
                    <span>{service.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t('nav.home')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => onNavigate(link.key)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t('contact.title')}</h3>
            <div className="space-y-2">
              <Button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {t('nav.contact')}
              </Button>
              <Button 
                onClick={() => onNavigate('tracking')}
                variant="outline"
                className="w-full"
              >
                {t('nav.tracking')}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            {t('footer.copyright', '© 2024 LOGICY TRANSPORT. Tous droits réservés.')}
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            {legalLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => onNavigate(link.key)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}