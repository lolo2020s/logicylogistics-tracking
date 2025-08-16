import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Truck, Plane, Ship, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { TrackingMap } from './TrackingMap';

interface TrackingResult {
  trackingNumber: string;
  type: 'package' | 'cargo' | 'vehicle';
  transportMode: 'road' | 'air' | 'maritime';
  currentLocation: string;
  current_latitude?: number;
  current_longitude?: number;
  transport_mode?: string;
  status: 'preparing' | 'transit' | 'customs' | 'delivering' | 'delivered';
  history: Array<{
    date: string;
    location: string;
    status: string;
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

  // Mock data for demonstration
  const mockResults: Record<string, TrackingResult> = {
    'LOG123456789': {
      trackingNumber: 'LOG123456789',
      type: 'package',
      transportMode: 'road',
      currentLocation: 'Paris, France',
      current_latitude: 48.8566,
      current_longitude: 2.3522,
      transport_mode: 'road',
      status: 'transit',
      history: [
        { 
          date: '2024-01-15 09:00', 
          location: 'Entrepôt LOGICY - Lyon', 
          status: 'Colis enregistré',
          latitude: 45.7640,
          longitude: 4.8357,
          timestamp: '2024-01-15T09:00:00Z'
        },
        { 
          date: '2024-01-15 14:30', 
          location: 'Centre de tri - Lyon', 
          status: 'En cours de traitement',
          latitude: 45.7640,
          longitude: 4.8357,
          timestamp: '2024-01-15T14:30:00Z'
        },
        { 
          date: '2024-01-16 08:00', 
          location: 'En transit vers Paris', 
          status: 'Transport en cours',
          latitude: 47.0000,
          longitude: 3.0000,
          timestamp: '2024-01-16T08:00:00Z'
        },
        { 
          date: '2024-01-16 16:00', 
          location: 'Paris, France', 
          status: 'Arrivé à destination',
          latitude: 48.8566,
          longitude: 2.3522,
          timestamp: '2024-01-16T16:00:00Z'
        },
      ]
    },
    'LOG987654321': {
      trackingNumber: 'LOG987654321',
      type: 'vehicle',
      transportMode: 'maritime',
      currentLocation: 'Port de Marseille',
      current_latitude: 43.2965,
      current_longitude: 5.3698,
      transport_mode: 'maritime',
      status: 'customs',
      history: [
        { 
          date: '2024-01-10 10:00', 
          location: 'Casablanca, Maroc', 
          status: 'Véhicule embarqué',
          latitude: 33.5731,
          longitude: -7.5898,
          timestamp: '2024-01-10T10:00:00Z'
        },
        { 
          date: '2024-01-12 15:00', 
          location: 'En mer Méditerranée', 
          status: 'Transport maritime',
          latitude: 36.0000,
          longitude: 3.0000,
          timestamp: '2024-01-12T15:00:00Z'
        },
        { 
          date: '2024-01-15 09:00', 
          location: 'Port de Marseille', 
          status: 'Arrivée au port',
          latitude: 43.2965,
          longitude: 5.3698,
          timestamp: '2024-01-15T09:00:00Z'
        },
        { 
          date: '2024-01-15 14:00', 
          location: 'Port de Marseille', 
          status: 'Contrôle douanier',
          latitude: 43.2965,
          longitude: 5.3698,
          timestamp: '2024-01-15T14:00:00Z'
        },
      ]
    }
  };

  const handleSearch = () => {
    setLoading(true);
    setNotFound(false);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      const mockResult = mockResults[trackingCode.toUpperCase()];
      if (mockResult) {
        setResult(mockResult);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }, 1000);
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
    switch (status) {
      case 'preparing': return 'secondary';
      case 'transit': return 'default';
      case 'customs': return 'outline';
      case 'delivering': return 'default';
      case 'delivered': return 'secondary';
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
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Localisation en temps réel</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TrackingMap trackingData={result} />
            </CardContent>
          </Card>

          {/* Main Result */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  {getTypeIcon(result.type)}
                  <span>{t.tracking.details.trackingNumber}: {result.trackingNumber}</span>
                </span>
                <Badge variant={getStatusVariant(result.status)} className="flex items-center space-x-1">
                  {getTransportIcon(result.transportMode)}
                  <span>{t.tracking.status[result.status]}</span>
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{t.tracking.details.currentLocation}:</span>
                  <span className="text-sm">{result.currentLocation}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTypeIcon(result.type)}
                  <span className="text-sm font-medium">{t.tracking.details.type}:</span>
                  <span className="text-sm capitalize">{result.type}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* History */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{t.tracking.details.history}</span>
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