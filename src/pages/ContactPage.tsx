import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useToast } from '@/hooks/use-toast';

export function ContactPage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: '', email: '', message: '' });
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@logicy-transport.com',
      action: 'mailto:contact@logicy-transport.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 1 23 45 67 89',
      action: 'tel:+33123456789'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: '123 Avenue de la Logistique\n69000 Lyon, France',
      action: null
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: 'Lun-Ven: 8h-18h\nSam: 9h-12h',
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="space-y-12 relative">
        {/* Header */}
        <div className="bg-gradient-hero text-center py-16 px-4 -mx-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Contact Form */}
          <Card className="shadow-premium bg-gradient-surface border-0 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="h-5 w-5 text-primary" />
              <span>Envoyez-nous un message</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.name')} *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.email')} *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.message')} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande..."
                  className="min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                {loading ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                {t('contact.form.send')}
              </Button>
            </form>
          </CardContent>
        </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-premium hover:shadow-premium transition-smooth hover:-translate-y-1 bg-gradient-surface border-0 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-premium">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-primary hover:text-primary-glow transition-smooth whitespace-pre-line"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        {/* Map Section */}
        <Card className="shadow-premium bg-gradient-surface border-0 animate-scale-in mx-4">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Nous trouver</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-dark rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white">LOGICY TRANSPORT</h3>
              <p className="text-white/80">
                123 Avenue de la Logistique<br />
                69000 Lyon, France
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Une carte interactive sera bientôt disponible pour faciliter votre visite
          </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}