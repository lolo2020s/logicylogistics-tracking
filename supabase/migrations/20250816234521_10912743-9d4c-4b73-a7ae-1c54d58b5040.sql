-- Supprimer les politiques RLS problématiques qui causent la récursion
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Créer une politique RLS simple sans récursion
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Permettre la lecture de tous les profils pour les utilisateurs authentifiés 
-- (nécessaire pour que l'AuthContext fonctionne)
CREATE POLICY "Authenticated users can view profiles" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (true);