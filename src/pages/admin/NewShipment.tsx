import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Loader2, Package, User, MapPin, Phone, Mail, AlertTriangle, CreditCard, Shield, FileText, Clock } from 'lucide-react';
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
    sender_phone: '',
    sender_email: '',
    
    // Receiver info
    receiver_name: '',
    receiver_address: '',
    receiver_city: '',
    receiver_country: '',
    receiver_phone: '',
    receiver_email: '',
    
    // Emergency contact
    emergency_contact_name: '',
    emergency_contact_phone: '',
    
    // Shipment details
    transport_mode: '',
    shipment_type: '',
    package_type: '',
    weight: '',
    dimensions: '',
    estimated_delivery: '',
    
    // Value & Insurance
    declared_value: '',
    currency: 'EUR',
    insurance_value: '',
    
    // References & Instructions
    client_reference: '',
    order_number: '',
    special_instructions: '',
    delivery_instructions: '',
    preferred_delivery_time: '',
    internal_notes: '',
    
    // Priority & Options
    priority_level: 'normal',
    is_fragile: false,
    is_dangerous: false,
    requires_signature: false,
    
    // Cost & Payment
    transport_cost: '',
    payment_method: '',
    payment_status: 'pending',
    
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-extract coordinates if Google Maps link is pasted
    if (field === 'google_maps_link' && typeof value === 'string' && value.includes('google.com/maps')) {
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
        declared_value: formData.declared_value ? parseFloat(formData.declared_value) : null,
        insurance_value: formData.insurance_value ? parseFloat(formData.insurance_value) : null,
        transport_cost: formData.transport_cost ? parseFloat(formData.transport_cost) : null,
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
                <label className="block text-sm font-medium mb-2">Téléphone *</label>
                <Input
                  type="tel"
                  value={formData.sender_phone}
                  onChange={(e) => handleInputChange('sender_phone', e.target.value)}
                  placeholder="+33 1 23 45 67 89"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.sender_email}
                  onChange={(e) => handleInputChange('sender_email', e.target.value)}
                  placeholder="expediteur@exemple.com"
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
                <label className="block text-sm font-medium mb-2">Téléphone *</label>
                <Input
                  type="tel"
                  value={formData.receiver_phone}
                  onChange={(e) => handleInputChange('receiver_phone', e.target.value)}
                  placeholder="+33 1 23 45 67 89"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.receiver_email}
                  onChange={(e) => handleInputChange('receiver_email', e.target.value)}
                  placeholder="destinataire@exemple.com"
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

          {/* Emergency Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>Contact d'Urgence</span>
              </CardTitle>
              <CardDescription>
                Personne à contacter en cas de problème avec la livraison
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom du contact</label>
                  <Input
                    value={formData.emergency_contact_name}
                    onChange={(e) => handleInputChange('emergency_contact_name', e.target.value)}
                    placeholder="Nom de la personne à contacter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone d'urgence</label>
                  <Input
                    type="tel"
                    value={formData.emergency_contact_phone}
                    onChange={(e) => handleInputChange('emergency_contact_phone', e.target.value)}
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Value & Insurance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Valeur et Assurance</span>
              </CardTitle>
              <CardDescription>
                Valeur déclarée de la marchandise et couverture d'assurance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Valeur déclarée</label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.declared_value}
                    onChange={(e) => handleInputChange('declared_value', e.target.value)}
                    placeholder="1000.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Devise</label>
                  <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="MAD">MAD (Dirham)</SelectItem>
                      <SelectItem value="XOF">XOF (Franc CFA)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Valeur assurée</label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.insurance_value}
                    onChange={(e) => handleInputChange('insurance_value', e.target.value)}
                    placeholder="1000.00"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References & Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Références et Instructions</span>
              </CardTitle>
              <CardDescription>
                Références client et instructions spéciales pour la livraison
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Référence client</label>
                  <Input
                    value={formData.client_reference}
                    onChange={(e) => handleInputChange('client_reference', e.target.value)}
                    placeholder="REF-2024-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Numéro de commande</label>
                  <Input
                    value={formData.order_number}
                    onChange={(e) => handleInputChange('order_number', e.target.value)}
                    placeholder="CMD-12345"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Instructions spéciales</label>
                <Textarea
                  value={formData.special_instructions}
                  onChange={(e) => handleInputChange('special_instructions', e.target.value)}
                  placeholder="Instructions particulières pour le transport (fragile, manipulation spéciale, etc.)"
                  rows={2}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Instructions de livraison</label>
                <Textarea
                  value={formData.delivery_instructions}
                  onChange={(e) => handleInputChange('delivery_instructions', e.target.value)}
                  placeholder="Instructions pour la livraison (code d'accès, étage, horaires préférés, etc.)"
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Créneau de livraison préféré</label>
                <Input
                  value={formData.preferred_delivery_time}
                  onChange={(e) => handleInputChange('preferred_delivery_time', e.target.value)}
                  placeholder="Ex: 9h-12h ou 14h-18h"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Notes internes</label>
                <Textarea
                  value={formData.internal_notes}
                  onChange={(e) => handleInputChange('internal_notes', e.target.value)}
                  placeholder="Notes pour l'équipe LOGICY (non visibles par le client)"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Priority & Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Priorité et Options</span>
              </CardTitle>
              <CardDescription>
                Niveau de priorité et options spéciales pour l'envoi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Niveau de priorité</label>
                <Select value={formData.priority_level} onValueChange={(value) => handleInputChange('priority_level', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="express">Express</SelectItem>
                    <SelectItem value="critical">Critique</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="fragile"
                    checked={formData.is_fragile}
                    onCheckedChange={(checked) => handleInputChange('is_fragile', checked ? 'true' : 'false')}
                  />
                  <label htmlFor="fragile" className="text-sm font-medium cursor-pointer">
                    Colis fragile
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dangerous"
                    checked={formData.is_dangerous}
                    onCheckedChange={(checked) => handleInputChange('is_dangerous', checked ? 'true' : 'false')}
                  />
                  <label htmlFor="dangerous" className="text-sm font-medium cursor-pointer">
                    Matières dangereuses
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="signature"
                    checked={formData.requires_signature}
                    onCheckedChange={(checked) => handleInputChange('requires_signature', checked ? 'true' : 'false')}
                  />
                  <label htmlFor="signature" className="text-sm font-medium cursor-pointer">
                    Signature obligatoire
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cost & Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <span>Coût et Paiement</span>
              </CardTitle>
              <CardDescription>
                Informations de facturation et paiement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Coût de transport</label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.transport_cost}
                    onChange={(e) => handleInputChange('transport_cost', e.target.value)}
                    placeholder="150.00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mode de paiement</label>
                  <Select value={formData.payment_method} onValueChange={(value) => handleInputChange('payment_method', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Espèces</SelectItem>
                      <SelectItem value="card">Carte bancaire</SelectItem>
                      <SelectItem value="transfer">Virement</SelectItem>
                      <SelectItem value="check">Chèque</SelectItem>
                      <SelectItem value="account">Compte client</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Statut paiement</label>
                  <Select value={formData.payment_status} onValueChange={(value) => handleInputChange('payment_status', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">En attente</SelectItem>
                      <SelectItem value="paid">Payé</SelectItem>
                      <SelectItem value="partial">Partiel</SelectItem>
                      <SelectItem value="failed">Échec</SelectItem>
                      <SelectItem value="refunded">Remboursé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
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