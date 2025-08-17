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
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          console.log('AuthContext: User logged in, checking admin status...', session.user.email);
          setLoading(true);
          // Check if user is admin
          setTimeout(async () => {
            try {
              const { data: profile, error } = await supabase
                .from('profiles')
                .select('is_admin')
                .eq('user_id', session.user.id)
                .single();
              
              console.log('AuthContext: Profile data:', profile, 'Error:', error);
              setIsAdmin(profile?.is_admin || false);
              console.log('AuthContext: isAdmin set to:', profile?.is_admin || false);
            } catch (err) {
              console.error('AuthContext: Error fetching profile:', err);
              setIsAdmin(false);
            }
            setLoading(false);
          }, 0);
        } else {
          setIsAdmin(false);
          setLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        console.log('AuthContext: Initial session check, user found:', session.user.email);
        setLoading(true);
        // Check if user is admin
        setTimeout(async () => {
          try {
            const { data: profile, error } = await supabase
              .from('profiles')
              .select('is_admin')
              .eq('user_id', session.user.id)
              .single();
            
            console.log('AuthContext: Initial profile data:', profile, 'Error:', error);
            setIsAdmin(profile?.is_admin || false);
            console.log('AuthContext: Initial isAdmin set to:', profile?.is_admin || false);
          } catch (err) {
            console.error('AuthContext: Initial error fetching profile:', err);
            setIsAdmin(false);
          }
          setLoading(false);
        }, 0);
      } else {
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