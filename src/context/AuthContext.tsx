import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthContext: Starting initialization...');
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('AuthContext: Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          console.log('AuthContext: User found, setting as admin for now...');
          setIsAdmin(true); // Temporairement, on met tous les utilisateurs connectés comme admin
          setLoading(false);
        } else {
          console.log('AuthContext: No user, setting loading to false');
          setIsAdmin(false);
          setLoading(false);
        }
      }
    );

    // THEN check for existing session
    console.log('AuthContext: Checking existing session...');
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('AuthContext: Existing session:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        console.log('AuthContext: Existing user found, setting as admin for now...');
        setIsAdmin(true); // Temporairement
        setLoading(false);
      } else {
        console.log('AuthContext: No existing user');
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, isAdmin, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}