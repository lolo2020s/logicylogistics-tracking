import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { Search, Eye, Edit, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Shipment {
  id: string;
  tracking_number: string;
  sender_name: string;
  receiver_name: string;
  receiver_city: string;
  receiver_country: string;
  current_status: string;
  transport_mode: string;
  created_at: string;
}

export function ShipmentsList() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadShipments();
  }, []);

  const loadShipments = async () => {
    try {
      const { data, error } = await supabase
        .from('shipments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setShipments(data || []);
    } catch (error) {
      console.error('Error loading shipments:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredShipments = shipments.filter(shipment =>
    shipment.tracking_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.sender_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.receiver_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: 'En attente', variant: 'secondary' as const },
      in_transit: { label: 'En transit', variant: 'default' as const },
      delivered: { label: 'Livré', variant: 'default' as const },
      cancelled: { label: 'Annulé', variant: 'destructive' as const },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || { 
      label: status, 
      variant: 'outline' as const 
    };

    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getTransportMode = (mode: string) => {
    const modes = {
      road: 'Routier',
      air: 'Aérien',
      maritime: 'Maritime'
    };
    return modes[mode as keyof typeof modes] || mode;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Envois</h1>
          <p className="text-muted-foreground">
            Gérez tous vos envois et suivez leur statut
          </p>
        </div>
        <Button onClick={() => navigate('/admin/shipments/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Nouvel Envoi
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Envois</CardTitle>
          <CardDescription>
            {filteredShipments.length} envoi(s) trouvé(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher par numéro de tracking, expéditeur ou destinataire..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Numéro de Tracking</TableHead>
                  <TableHead>Expéditeur</TableHead>
                  <TableHead>Destinataire</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Transport</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-4">
                      Chargement...
                    </TableCell>
                  </TableRow>
                ) : filteredShipments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-4">
                      Aucun envoi trouvé
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredShipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-mono">
                        {shipment.tracking_number}
                      </TableCell>
                      <TableCell>{shipment.sender_name}</TableCell>
                      <TableCell>{shipment.receiver_name}</TableCell>
                      <TableCell>
                        {shipment.receiver_city}, {shipment.receiver_country}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {getTransportMode(shipment.transport_mode)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(shipment.current_status)}
                      </TableCell>
                      <TableCell>
                        {new Date(shipment.created_at).toLocaleDateString('fr-FR')}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              console.log('Voir envoi:', shipment.id);
                              // Pour l'instant, on affiche les détails dans un toast
                              alert(`Détails de l'envoi ${shipment.tracking_number}`);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              console.log('Modifier envoi:', shipment.id);
                              // Pour l'instant, on redirige vers la création d'un nouvel envoi
                              navigate('/admin/shipments/new');
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}