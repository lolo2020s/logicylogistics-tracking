-- Supprimer la politique problématique qui cause la récursion infinie
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;