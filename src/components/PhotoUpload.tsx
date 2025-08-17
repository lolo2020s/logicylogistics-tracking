import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, X, Image as ImageIcon } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface PhotoUploadProps {
  shipmentId?: string;
  onPhotosChange?: (photos: UploadedPhoto[]) => void;
  maxPhotos?: number;
}

interface UploadedPhoto {
  id?: string;
  file?: File;
  preview: string;
  type: string;
  description: string;
  uploaded?: boolean;
  photo_url?: string;
}

export function PhotoUpload({ shipmentId, onPhotosChange, maxPhotos = 10 }: PhotoUploadProps) {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const photoTypes = [
    { value: 'package', label: 'Colis' },
    { value: 'vehicle', label: 'Véhicule' },
    { value: 'cargo', label: 'Cargaison' },
    { value: 'loading', label: 'Chargement' },
    { value: 'document', label: 'Document' },
    { value: 'other', label: 'Autre' }
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    if (photos.length + files.length > maxPhotos) {
      toast({
        title: "Limite atteinte",
        description: `Vous ne pouvez pas ajouter plus de ${maxPhotos} photos.`,
        variant: "destructive"
      });
      return;
    }

    const newPhotos: UploadedPhoto[] = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      type: 'package',
      description: '',
      uploaded: false
    }));

    const updatedPhotos = [...photos, ...newPhotos];
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  const updatePhoto = (index: number, updates: Partial<UploadedPhoto>) => {
    const updatedPhotos = photos.map((photo, i) => 
      i === index ? { ...photo, ...updates } : photo
    );
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  const removePhoto = (index: number) => {
    const photoToRemove = photos[index];
    if (photoToRemove.preview && !photoToRemove.uploaded) {
      URL.revokeObjectURL(photoToRemove.preview);
    }
    
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  const uploadPhotos = async () => {
    if (!shipmentId) {
      toast({
        title: "Erreur",
        description: "L'envoi doit être créé avant d'uploader les photos.",
        variant: "destructive"
      });
      return false;
    }

    setUploading(true);
    
    try {
      const uploadPromises = photos.map(async (photo, index) => {
        if (photo.uploaded || !photo.file) return photo;

        const fileExt = photo.file.name.split('.').pop();
        const fileName = `${shipmentId}/${Date.now()}-${index}.${fileExt}`;

        // Upload to storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('shipment-photos')
          .upload(fileName, photo.file);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          throw uploadError;
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('shipment-photos')
          .getPublicUrl(fileName);

        // Save to database
        const { data: dbData, error: dbError } = await supabase
          .from('shipment_photos')
          .insert({
            shipment_id: shipmentId,
            photo_url: publicUrl,
            photo_type: photo.type,
            description: photo.description || null,
            uploaded_by: (await supabase.auth.getUser()).data.user?.id
          })
          .select()
          .single();

        if (dbError) {
          console.error('Database error:', dbError);
          throw dbError;
        }

        return {
          ...photo,
          id: dbData.id,
          photo_url: publicUrl,
          uploaded: true
        };
      });

      const uploadedPhotos = await Promise.all(uploadPromises);
      setPhotos(uploadedPhotos);
      onPhotosChange?.(uploadedPhotos);

      toast({
        title: "Succès",
        description: `${photos.filter(p => !p.uploaded).length} photo(s) uploadée(s) avec succès.`
      });

      return true;
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Erreur d'upload",
        description: "Une erreur est survenue lors de l'upload des photos.",
        variant: "destructive"
      });
      return false;
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Camera className="h-5 w-5 text-primary" />
          <span>Photos de l'envoi</span>
          <Badge variant="outline">{photos.length}/{maxPhotos}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Upload Button */}
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={photos.length >= maxPhotos}
            className="flex items-center space-x-2"
          >
            <Upload className="h-4 w-4" />
            <span>Ajouter des photos</span>
          </Button>
          
          {shipmentId && photos.some(p => !p.uploaded) && (
            <Button
              type="button"
              onClick={uploadPhotos}
              disabled={uploading}
              className="flex items-center space-x-2"
            >
              {uploading ? (
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <ImageIcon className="h-4 w-4" />
              )}
              <span>Uploader ({photos.filter(p => !p.uploaded).length})</span>
            </Button>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Photos Grid */}
        {photos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative border rounded-lg p-3 space-y-2">
                {/* Image Preview */}
                <div className="relative">
                  <img
                    src={photo.photo_url || photo.preview}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-32 object-cover rounded border"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-1 left-1">
                    <Badge variant={photo.uploaded ? "default" : "secondary"} className="text-xs">
                      {photo.uploaded ? "Uploadée" : "En attente"}
                    </Badge>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>

                {/* Photo Type */}
                <Select
                  value={photo.type}
                  onValueChange={(value) => updatePhoto(index, { type: value })}
                  disabled={photo.uploaded}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {photoTypes.map(type => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Description */}
                <Input
                  placeholder="Description (optionnel)"
                  value={photo.description}
                  onChange={(e) => updatePhoto(index, { description: e.target.value })}
                  disabled={photo.uploaded}
                  className="h-8 text-xs"
                />
              </div>
            ))}
          </div>
        )}

        {photos.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>Aucune photo ajoutée</p>
            <p className="text-sm">Cliquez sur "Ajouter des photos" pour commencer</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}