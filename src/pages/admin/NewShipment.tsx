import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Loader2, Package, User, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function NewShipment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    // Sender info
    sender_name: '',
    sender_address: '',
    sender_city: '',
    sender_country: '',
    
    // Receiver info
    receiver_name: '',
    receiver_address: '',
    receiver_city: '',
    receiver_country: '',
    
    // Shipment details
    transport_mode: '',
    shipment_type: '',
    package_type: '',
    weight: '',
    dimensions: '',
    estimated_delivery: '',
    
    // Current location tracking
    current_location: '',
    current_latitude: '',
    current_longitude: '',
    google_maps_link: '',
  });

  const extractCoordinatesFromGoogleMaps = (link: string) => {
    // Extract coordinates from Google Maps link
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = link.match(regex);
    if (match) {
      const lat = match[1];
      const lng = match[2];
      setFormData(prev => ({
        ...prev,
        current_latitude: lat,
        current_longitude: lng,
        google_maps_link: link
      }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-extract coordinates if Google Maps link is pasted
    if (field === 'google_maps_link' && value.includes('google.com/maps')) {
      extractCoordinatesFromGoogleMaps(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const shipmentData = {
        ...formData,
        user_id: user?.id,
        weight: formData.weight ? parseFloat(formData.weight) : null,
        dimensions: formData.dimensions ? JSON.stringify({ description: formData.dimensions }) : null,
        estimated_delivery: formData.estimated_delivery || null,
        current_status: 'pending',
        current_location: formData.current_location || null,
        current_latitude: formData.current_latitude ? parseFloat(formData.current_latitude) : null,
        current_longitude: formData.current_longitude ? parseFloat(formData.current_longitude) : null,
      };

      const { data, error } = await supabase
        .from('shipments')
        .insert([shipmentData])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Envoi créé avec succès !",
        description: `Numéro de tracking: ${data.tracking_number}`,
      });

      navigate('/admin/shipments');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Créer un Nouvel Envoi</h1>
        <p className="text-muted-foreground">
          Ajoutez un nouvel envoi au système de suivi
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sender Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-primary" />
              <span>Informations Expéditeur</span>
            </CardTitle>
            <CardDescription>
              Détails de l'expéditeur du colis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <Input
                  value={formData.sender_name}
                  onChange={(e) => handleInputChange('sender_name', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ville *</label>
                <Input
                  value={formData.sender_city}
                  onChange={(e) => handleInputChange('sender_city', e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Adresse *</label>
              <Input
                value={formData.sender_address}
                onChange={(e) => handleInputChange('sender_address', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pays *</label>
              <Input
                value={formData.sender_country}
                onChange={(e) => handleInputChange('sender_country', e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Receiver Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Informations Destinataire</span>
            </CardTitle>
            <CardDescription>
              Détails du destinataire du colis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <Input
                  value={formData.receiver_name}
                  onChange={(e) => handleInputChange('receiver_name', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ville *</label>
                <Input
                  value={formData.receiver_city}
                  onChange={(e) => handleInputChange('receiver_city', e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Adresse *</label>
              <Input
                value={formData.receiver_address}
                onChange={(e) => handleInputChange('receiver_address', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pays *</label>
              <Input
                value={formData.receiver_country}
                onChange={(e) => handleInputChange('receiver_country', e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Shipment Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-primary" />
              <span>Détails de l'Envoi</span>
            </CardTitle>
            <CardDescription>
              Informations sur le type et les caractéristiques de l'envoi
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Mode de transport *</label>
                <Select value={formData.transport_mode} onValueChange={(value) => handleInputChange('transport_mode', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="road">Transport Routier</SelectItem>
                    <SelectItem value="air">Transport Aérien</SelectItem>
                    <SelectItem value="maritime">Transport Maritime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type d'envoi *</label>
                <Select value={formData.shipment_type} onValueChange={(value) => handleInputChange('shipment_type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="express">Express</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type de colis</label>
                <Select value={formData.package_type} onValueChange={(value) => handleInputChange('package_type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de colis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="package">Colis</SelectItem>
                    <SelectItem value="document">Document</SelectItem>
                    <SelectItem value="vehicle">Véhicule</SelectItem>
                    <SelectItem value="cargo">Cargaison</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Poids (kg)</label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  placeholder="Ex: 25.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Livraison estimée</label>
                <Input
                  type="date"
                  value={formData.estimated_delivery}
                  onChange={(e) => handleInputChange('estimated_delivery', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Dimensions / Description</label>
              <Textarea
                value={formData.dimensions}
                onChange={(e) => handleInputChange('dimensions', e.target.value)}
                placeholder="Ex: 50cm x 30cm x 20cm ou description du contenu"
                rows={3}
              />
            </div>
          </CardContent>
          </Card>

          {/* Current Location Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Position Actuelle du Colis</span>
              </CardTitle>
              <CardDescription>
                Indiquez la position actuelle du colis pour le suivi en temps réel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Adresse actuelle</label>
                <Input
                  value={formData.current_location}
                  onChange={(e) => handleInputChange('current_location', e.target.value)}
                  placeholder="Ex: Entrepôt LOGICY Paris, 123 Rue de la Logistique"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Lien Google Maps 
                  <span className="text-xs text-muted-foreground ml-1">(optionnel - extrait automatiquement les coordonnées)</span>
                </label>
                <Input
                  value={formData.google_maps_link}
                  onChange={(e) => handleInputChange('google_maps_link', e.target.value)}
                  placeholder="Ex: https://maps.google.com/..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Latitude
                    <span className="text-xs text-muted-foreground ml-1">(coordonnée GPS)</span>
                  </label>
                  <Input
                    type="number"
                    step="any"
                    value={formData.current_latitude}
                    onChange={(e) => handleInputChange('current_latitude', e.target.value)}
                    placeholder="Ex: 48.8566"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Longitude
                    <span className="text-xs text-muted-foreground ml-1">(coordonnée GPS)</span>
                  </label>
                  <Input
                    type="number"
                    step="any"
                    value={formData.current_longitude}
                    onChange={(e) => handleInputChange('current_longitude', e.target.value)}
                    placeholder="Ex: 2.3522"
                  />
                </div>
              </div>
              
              {formData.current_latitude && formData.current_longitude && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm font-medium text-green-800 mb-1">✓ Coordonnées détectées</p>
                  <p className="text-xs text-green-600">
                    Le colis sera visible sur la carte à la position: {formData.current_latitude}, {formData.current_longitude}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Submit Buttons */}
        <div className="flex space-x-4">
          <Button type="submit" disabled={loading} className="flex-1">
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Package className="w-4 h-4 mr-2" />
            )}
            Créer l'Envoi
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/admin/shipments')}
            className="flex-1"
          >
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
}