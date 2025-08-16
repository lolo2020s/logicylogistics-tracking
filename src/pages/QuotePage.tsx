import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator, Truck, Plane, Ship, Package, User, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { toast } from 'sonner';

interface QuotePageProps {
  onNavigate: (page: string) => void;
}

export function QuotePage({ onNavigate }: QuotePageProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    transportMode: '',
    serviceType: '',
    origin: '',
    destination: '',
    weight: '',
    dimensions: '',
    description: '',
    urgency: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const transportModes = [
    { value: 'road', label: 'Transport Routier', icon: <Truck className="h-4 w-4" /> },
    { value: 'air', label: 'Transport Aérien', icon: <Plane className="h-4 w-4" /> },
    { value: 'maritime', label: 'Transport Maritime', icon: <Ship className="h-4 w-4" /> }
  ];

  const serviceTypes = {
    road: ['Colis standard', 'Express 24h', 'Transport véhicule', 'Déménagement'],
    air: ['Express 24h', 'Express 48h', 'Fret standard', 'Marchandises périssables'],
    maritime: ['Conteneur FCL', 'Groupage LCL', 'Véhicule RoRo', 'Fret en vrac']
  };

  const urgencyLevels = [
    { value: 'standard', label: 'Standard (5-7 jours)', color: 'secondary' },
    { value: 'express', label: 'Express (2-3 jours)', color: 'default' },
    { value: 'urgent', label: 'Urgent (24-48h)', color: 'destructive' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    toast.success("Demande de devis envoyée avec succès! Nous vous répondrons sous 24h.");
    // Reset form
    setFormData({
      transportMode: '',
      serviceType: '',
      origin: '',
      destination: '',
      weight: '',
      dimensions: '',
      description: '',
      urgency: '',
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Demander un Devis
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Obtenez un devis personnalisé en quelques minutes. Notre équipe vous répondra sous 24h.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Type de Transport */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-primary" />
                <span>Type de Transport</span>
              </CardTitle>
              <CardDescription>
                Sélectionnez le mode de transport le plus adapté à vos besoins
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {transportModes.map((mode) => (
                  <Card 
                    key={mode.value}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.transportMode === mode.value ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => handleInputChange('transportMode', mode.value)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-2">{mode.icon}</div>
                      <p className="font-medium">{mode.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {formData.transportMode && (
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2">Type de service</label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes[formData.transportMode as keyof typeof serviceTypes]?.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Détails de l'Expédition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-primary" />
                <span>Détails de l'Expédition</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Origine</label>
                  <Input
                    placeholder="Ville, pays"
                    value={formData.origin}
                    onChange={(e) => handleInputChange('origin', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Destination</label>
                  <Input
                    placeholder="Ville, pays"
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Poids (kg)</label>
                  <Input
                    type="number"
                    placeholder="Ex: 25"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Dimensions (L x l x H en cm)</label>
                  <Input
                    placeholder="Ex: 50 x 30 x 20"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description de la marchandise</label>
                <Textarea
                  placeholder="Décrivez brièvement ce que vous souhaitez expédier..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Urgence</label>
                <div className="flex flex-wrap gap-2">
                  {urgencyLevels.map((level) => (
                    <Badge
                      key={level.value}
                      variant={formData.urgency === level.value ? 'default' : 'outline'}
                      className="cursor-pointer px-3 py-1"
                      onClick={() => handleInputChange('urgency', level.value)}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      {level.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informations de Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <span>Vos Informations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet *</label>
                  <Input
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Entreprise</label>
                  <Input
                    placeholder="Nom de l'entreprise"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <Input
                    type="tel"
                    placeholder="+33 1 23 45 67 89"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message complémentaire</label>
                <Textarea
                  placeholder="Informations supplémentaires, contraintes particulières..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              disabled={!formData.name || !formData.email || !formData.transportMode}
            >
              Envoyer ma Demande de Devis
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              * Nous vous répondrons sous 24h avec un devis détaillé
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}