-- Fix RLS recursion: remove problematic admin policy on profiles
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Ensure essential policies exist (idempotent re-create only if missing)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies p 
    JOIN pg_class c ON p.tablename = c.relname 
    JOIN pg_namespace n ON c.relnamespace = n.oid 
    WHERE p.policyname = 'Users can view their own profile' AND n.nspname = 'public' AND c.relname = 'profiles'
  ) THEN
    EXECUTE $$CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);$$;
  END IF;
END $$;