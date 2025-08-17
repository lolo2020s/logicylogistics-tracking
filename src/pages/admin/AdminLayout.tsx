import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/AdminSidebar';
import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react';

export function AdminLayout() {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('AdminLayout - user:', user?.email || 'No user');
    console.log('AdminLayout - isAdmin:', isAdmin);
    console.log('AdminLayout - loading:', loading);
    
    if (!loading) {
      if (!user) {
        console.log('AdminLayout - No user, redirecting to /auth');
        navigate('/auth');
        return;
      } 
      if (!isAdmin) {
        console.log('AdminLayout - User not admin, redirecting to /');
        navigate('/');
        return;
      }
      console.log('AdminLayout - User is admin, proceeding...');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-12 flex items-center border-b bg-background px-4">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-lg font-semibold">Administration LOGICY TRANSPORT</h1>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gradient-surface">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}