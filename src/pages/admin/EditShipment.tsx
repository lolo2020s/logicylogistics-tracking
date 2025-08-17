import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Save, Upload, X, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShipmentPhoto {
  id: string;
  photo_url: string;
  photo_type: string;
  description?: string;
  created_at: string;
}

interface ShipmentData {
  id: string;
  tracking_number: string;
  sender_name: string;
  sender_address: string;
  sender_city: string;
  sender_country: string;
  receiver_name: string;
  receiver_address: string;
  receiver_city: string;
  receiver_country: string;
  current_status: string;
  transport_mode: string;
  description?: string;
  weight?: number;
  dimensions?: any;
}

export function EditShipment() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  const [photos, setPhotos] = useState<ShipmentPhoto[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (id) {
      loadShipment();
      loadPhotos();
    }
  }, [id]);

  const loadShipment = async () => {
    try {
      const { data, error } = await supabase
        .from('shipments')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setShipment(data);
    } catch (error) {
      console.error('Error loading shipment:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Impossible de charger les données de l\'envoi',
      });
    } finally {
      setLoading(false);
    }
  };

  const loadPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('shipment_photos')
        .select('*')
        .eq('shipment_id', id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error('Error loading photos:', error);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !id) return;

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${id}/${Date.now()}.${fileExt}`;

        // Upload file to storage
        const { error: uploadError } = await supabase.storage
          .from('shipment-photos')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('shipment-photos')
          .getPublicUrl(fileName);

        // Save photo record
        const { error: dbError } = await supabase
          .from('shipment_photos')
          .insert({
            shipment_id: id,
            photo_url: publicUrl,
            photo_type: 'general',
            uploaded_by: (await supabase.auth.getUser()).data.user?.id
          });

        if (dbError) throw dbError;
      }

      await loadPhotos();
      toast({
        title: 'Succès',
        description: 'Photos ajoutées avec succès',
      });
    } catch (error) {
      console.error('Error uploading photos:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Impossible d\'ajouter les photos',
      });
    } finally {
      setUploading(false);
    }
  };

  const deletePhoto = async (photoId: string, photoUrl: string) => {
    try {
      // Extract file path from URL
      const fileName = photoUrl.split('/').slice(-2).join('/');
      
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('shipment-photos')
        .remove([fileName]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('shipment_photos')
        .delete()
        .eq('id', photoId);

      if (dbError) throw dbError;

      await loadPhotos();
      toast({
        title: 'Succès',
        description: 'Photo supprimée avec succès',
      });
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Impossible de supprimer la photo',
      });
    }
  };

  const handleSave = async () => {
    if (!shipment) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('shipments')
        .update({
          sender_name: shipment.sender_name,
          sender_address: shipment.sender_address,
          sender_city: shipment.sender_city,
          sender_country: shipment.sender_country,
          receiver_name: shipment.receiver_name,
          receiver_address: shipment.receiver_address,
          receiver_city: shipment.receiver_city,
          receiver_country: shipment.receiver_country,
          current_status: shipment.current_status,
          transport_mode: shipment.transport_mode,
          description: shipment.description,
          weight: shipment.weight,
          dimensions: shipment.dimensions,
        })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Succès',
        description: 'Envoi modifié avec succès',
      });
      
      navigate('/admin/shipments');
    } catch (error) {
      console.error('Error updating shipment:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Impossible de modifier l\'envoi',
      });
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: keyof ShipmentData, value: string | number) => {
    if (!shipment) return;
    setShipment({ ...shipment, [field]: value });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/admin/shipments')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </div>
        <div className="text-center py-8">Chargement...</div>
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/admin/shipments')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </div>
        <div className="text-center py-8">Envoi non trouvé</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/admin/shipments')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Modifier l'Envoi</h1>
            <p className="text-muted-foreground">
              Numéro de tracking: {shipment.tracking_number}
            </p>
          </div>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="w-4 h-4 mr-2" />
          {saving ? 'Enregistrement...' : 'Enregistrer'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expéditeur */}
        <Card>
          <CardHeader>
            <CardTitle>Informations Expéditeur</CardTitle>
            <CardDescription>Détails de l'expéditeur</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="sender_name">Nom</Label>
              <Input
                id="sender_name"
                value={shipment.sender_name}
                onChange={(e) => updateField('sender_name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="sender_address">Adresse</Label>
              <Textarea
                id="sender_address"
                value={shipment.sender_address}
                onChange={(e) => updateField('sender_address', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="sender_city">Ville</Label>
              <Input
                id="sender_city"
                value={shipment.sender_city}
                onChange={(e) => updateField('sender_city', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="sender_country">Pays</Label>
              <Input
                id="sender_country"
                value={shipment.sender_country}
                onChange={(e) => updateField('sender_country', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Destinataire */}
        <Card>
          <CardHeader>
            <CardTitle>Informations Destinataire</CardTitle>
            <CardDescription>Détails du destinataire</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="receiver_name">Nom</Label>
              <Input
                id="receiver_name"
                value={shipment.receiver_name}
                onChange={(e) => updateField('receiver_name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="receiver_address">Adresse</Label>
              <Textarea
                id="receiver_address"
                value={shipment.receiver_address}
                onChange={(e) => updateField('receiver_address', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="receiver_city">Ville</Label>
              <Input
                id="receiver_city"
                value={shipment.receiver_city}
                onChange={(e) => updateField('receiver_city', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="receiver_country">Pays</Label>
              <Input
                id="receiver_country"
                value={shipment.receiver_country}
                onChange={(e) => updateField('receiver_country', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Détails de l'envoi */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Détails de l'Envoi</CardTitle>
            <CardDescription>Informations sur le transport et le statut</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="transport_mode">Mode de Transport</Label>
              <Select
                value={shipment.transport_mode}
                onValueChange={(value) => updateField('transport_mode', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="road">Routier</SelectItem>
                  <SelectItem value="air">Aérien</SelectItem>
                  <SelectItem value="maritime">Maritime</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="current_status">Statut</Label>
              <Select
                value={shipment.current_status}
                onValueChange={(value) => updateField('current_status', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="in_transit">En transit</SelectItem>
                  <SelectItem value="delivered">Livré</SelectItem>
                  <SelectItem value="cancelled">Annulé</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="weight">Poids (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={shipment.weight || ''}
                onChange={(e) => updateField('weight', parseFloat(e.target.value) || 0)}
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={shipment.description || ''}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Description du contenu de l'envoi"
              />
            </div>

            <div>
              <Label htmlFor="dimensions">Dimensions</Label>
              <Input
                id="dimensions"
                value={shipment.dimensions || ''}
                onChange={(e) => updateField('dimensions', e.target.value)}
                placeholder="L x l x h (cm)"
              />
            </div>
          </CardContent>
        </Card>

        {/* Photos du colis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Photos du Colis</CardTitle>
            <CardDescription>Gérez les photos associées à cet envoi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Upload de nouvelles photos */}
            <div>
              <Label htmlFor="photo-upload">Ajouter des photos</Label>
              <div className="flex items-center space-x-2">
                <input
                  id="photo-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('photo-upload')?.click()}
                  disabled={uploading}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploading ? 'Upload en cours...' : 'Sélectionner des photos'}
                </Button>
              </div>
            </div>

            {/* Affichage des photos existantes */}
            {photos.length > 0 && (
              <div>
                <Label>Photos existantes ({photos.length})</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                  {photos.map((photo) => (
                    <div key={photo.id} className="relative group">
                      <img
                        src={photo.photo_url}
                        alt={photo.description || 'Photo du colis'}
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => window.open(photo.photo_url, '_blank')}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deletePhoto(photo.id, photo.photo_url)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      {photo.description && (
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          {photo.description}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {new Date(photo.created_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {photos.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                Aucune photo ajoutée pour cet envoi
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}