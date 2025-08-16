import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Truck, Plane, Ship, MapPin, Clock, Weight, Calendar, User, Camera, CheckCircle2, Bell } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { TrackingMap } from './TrackingMap';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface TrackingResult {
  id: string;
  trackingNumber: string;
  type: string;
  transportMode: string;
  currentLocation: string;
  current_latitude?: number;
  current_longitude?: number;
  transport_mode?: string;
  status: string;
  weight?: number;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
  };
  estimated_delivery?: string;
  sender_name: string;
  sender_address: string;
  receiver_name: string;
  receiver_address: string;
  created_at: string;
  proof_of_delivery?: {
    photo?: string;
    signature?: string;
    recipient_name?: string;
    delivered_at?: string;
  };
  history: Array<{
    date: string;
    location: string;
    status: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    timestamp: string;
  }>;
}

export function TrackingSearch() {
  const [trackingCode, setTrackingCode] = useState('');
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const { t } = useLanguage();

  // Real-time notifications
  useEffect(() => {
    if (!result) return;

    const channel = supabase
      .channel('tracking-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tracking_history',
          filter: `shipment_id=eq.${result.id}`
        },
        (payload) => {
          console.log('Tracking update received:', payload);
          toast.success('Mise à jour du suivi disponible!', {
            description: 'Votre colis a été mis à jour. Actualisez pour voir les dernières informations.',
            action: {
              label: 'Actualiser',
              onClick: () => handleSearch()
            }
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [result]);

  const handleSearch = async () => {
    setLoading(true);
    setNotFound(false);
    setResult(null);

    try {
      // Search for shipment by tracking number
      const { data: shipment, error: shipmentError } = await supabase
        .from('shipments')
        .select('*')
        .eq('tracking_number', trackingCode.toUpperCase())
        .single();

      if (shipmentError || !shipment) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      // Get tracking history
      const { data: history, error: historyError } = await supabase
        .from('tracking_history')
        .select('*')
        .eq('shipment_id', shipment.id)
        .order('timestamp', { ascending: false });

      if (historyError) {
        console.error('Error fetching history:', historyError);
      }

      // Format the result
      const formattedResult: TrackingResult = {
        id: shipment.id,
        trackingNumber: shipment.tracking_number,
        type: shipment.shipment_type,
        transportMode: shipment.transport_mode,
        currentLocation: shipment.current_location || 'En cours de traitement',
        current_latitude: shipment.current_latitude,
        current_longitude: shipment.current_longitude,
        transport_mode: shipment.transport_mode,
        status: shipment.current_status,
        weight: shipment.weight,
        dimensions: shipment.dimensions as { length?: number; width?: number; height?: number; } | undefined,
        estimated_delivery: shipment.estimated_delivery,
        sender_name: shipment.sender_name,
        sender_address: `${shipment.sender_address}, ${shipment.sender_city}, ${shipment.sender_country}`,
        receiver_name: shipment.receiver_name,
        receiver_address: `${shipment.receiver_address}, ${shipment.receiver_city}, ${shipment.receiver_country}`,
        created_at: shipment.created_at,
        history: history?.map(h => ({
          date: new Date(h.timestamp).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          location: h.location,
          status: h.status,
          description: h.description,
          latitude: h.latitude,
          longitude: h.longitude,
          timestamp: h.timestamp
        })) || []
      };

      setResult(formattedResult);
    } catch (error) {
      console.error('Search error:', error);
      toast.error('Erreur lors de la recherche');
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'package': return <Package className="h-4 w-4" />;
      case 'cargo': return <Truck className="h-4 w-4" />;
      case 'vehicle': return <Truck className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const getTransportIcon = (mode: string) => {
    switch (mode) {
      case 'road': return <Truck className="h-4 w-4" />;
      case 'air': return <Plane className="h-4 w-4" />;
      case 'maritime': return <Ship className="h-4 w-4" />;
      default: return <Truck className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
      case 'preparing': return 'secondary';
      case 'transit':
      case 'en transit': return 'default';
      case 'customs':
      case 'douane': return 'outline';
      case 'delivering':
      case 'en livraison': return 'default';
      case 'delivered':
      case 'livré': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5 text-primary" />
            <span>{t.tracking.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-3">
            <Input
              placeholder={t.tracking.placeholder}
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button 
              onClick={handleSearch} 
              disabled={loading || !trackingCode.trim()}
              className="bg-gradient-primary hover:opacity-90"
            >
              {loading ? (
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                t.tracking.search
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {notFound && (
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">{t.tracking.notFound}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <div className="space-y-4">
          {/* Map Component */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Localisation en temps réel</span>
                </span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <Bell className="h-3 w-3 mr-1" />
                  Suivi actif
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TrackingMap trackingData={result} />
            </CardContent>
          </Card>

          {/* Shipment Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Basic Info */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    {getTypeIcon(result.type)}
                    <span>Informations générales</span>
                  </span>
                  <Badge variant={getStatusVariant(result.status)} className="flex items-center space-x-1">
                    {getTransportIcon(result.transportMode)}
                    <span>{result.status}</span>
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-muted-foreground">N° de suivi</p>
                    <p className="font-mono">{result.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Type</p>
                    <p className="capitalize">{result.type}</p>
                  </div>
                  {result.weight && (
                    <div>
                      <p className="font-medium text-muted-foreground flex items-center gap-1">
                        <Weight className="h-3 w-3" />
                        Poids
                      </p>
                      <p>{result.weight} kg</p>
                    </div>
                  )}
                  {result.dimensions && (
                    <div>
                      <p className="font-medium text-muted-foreground">Dimensions</p>
                      <p>{result.dimensions.length}×{result.dimensions.width}×{result.dimensions.height} cm</p>
                    </div>
                  )}
                  {result.estimated_delivery && (
                    <div className="col-span-2">
                      <p className="font-medium text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Livraison estimée
                      </p>
                      <p className="text-primary font-medium">
                        {new Date(result.estimated_delivery).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Addresses */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Expéditeur & Destinataire</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-muted-foreground mb-1">Expéditeur</p>
                  <p className="font-medium">{result.sender_name}</p>
                  <p className="text-sm text-muted-foreground">{result.sender_address}</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground mb-1">Destinataire</p>
                  <p className="font-medium">{result.receiver_name}</p>
                  <p className="text-sm text-muted-foreground">{result.receiver_address}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Proof of Delivery */}
          {result.proof_of_delivery && (
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Preuve de livraison</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.proof_of_delivery.photo && (
                    <div>
                      <p className="font-medium text-muted-foreground mb-2 flex items-center gap-1">
                        <Camera className="h-3 w-3" />
                        Photo de livraison
                      </p>
                      <img 
                        src={result.proof_of_delivery.photo} 
                        alt="Preuve de livraison"
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                    </div>
                  )}
                  <div>
                    {result.proof_of_delivery.recipient_name && (
                      <div className="mb-2">
                        <p className="font-medium text-muted-foreground">Reçu par</p>
                        <p>{result.proof_of_delivery.recipient_name}</p>
                      </div>
                    )}
                    {result.proof_of_delivery.delivered_at && (
                      <div>
                        <p className="font-medium text-muted-foreground">Livré le</p>
                        <p>{new Date(result.proof_of_delivery.delivered_at).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* History */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Historique de suivi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.history.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-b-0">
                    <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-1" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{event.status}</p>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                      {event.description && (
                        <p className="text-xs text-muted-foreground italic">{event.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}