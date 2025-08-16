import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Package, TrendingUp, Clock, Users } from 'lucide-react';

interface DashboardStats {
  totalShipments: number;
  pendingShipments: number;
  deliveredShipments: number;
  totalClients: number;
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalShipments: 0,
    pendingShipments: 0,
    deliveredShipments: 0,
    totalClients: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [shipmentsResponse, profilesResponse] = await Promise.all([
        supabase.from('shipments').select('current_status'),
        supabase.from('profiles').select('id')
      ]);

      const shipments = shipmentsResponse.data || [];
      const profiles = profilesResponse.data || [];

      setStats({
        totalShipments: shipments.length,
        pendingShipments: shipments.filter(s => s.current_status === 'pending').length,
        deliveredShipments: shipments.filter(s => s.current_status === 'delivered').length,
        totalClients: profiles.length,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Envois',
      value: stats.totalShipments,
      icon: Package,
      description: 'Nombre total d\'envois',
      color: 'text-blue-600'
    },
    {
      title: 'En Cours',
      value: stats.pendingShipments,
      icon: Clock,
      description: 'Envois en cours de livraison',
      color: 'text-orange-600'
    },
    {
      title: 'Livrés',
      value: stats.deliveredShipments,
      icon: TrendingUp,
      description: 'Envois livrés avec succès',
      color: 'text-green-600'
    },
    {
      title: 'Clients',
      value: stats.totalClients,
      icon: Users,
      description: 'Nombre total de clients',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Vue d'ensemble de votre activité logistique
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? '...' : stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
            <CardDescription>
              Accès rapide aux fonctions principales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-col space-y-2">
              <Badge variant="outline" className="justify-start p-3 cursor-pointer hover:bg-muted">
                <Package className="w-4 h-4 mr-2" />
                Créer un nouvel envoi
              </Badge>
              <Badge variant="outline" className="justify-start p-3 cursor-pointer hover:bg-muted">
                <Clock className="w-4 h-4 mr-2" />
                Voir les envois en cours
              </Badge>
              <Badge variant="outline" className="justify-start p-3 cursor-pointer hover:bg-muted">
                <Users className="w-4 h-4 mr-2" />
                Gérer les clients
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Numéros de Tracking</CardTitle>
            <CardDescription>
              Système automatique de génération
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Format :</span>
                <Badge variant="secondary">LOG + Année + Séquence</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Exemple :</span>
                <Badge variant="outline">LOG25000001</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Chaque envoi reçoit automatiquement un numéro unique
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}