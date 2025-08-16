-- Créer le profil pour l'utilisateur contact@logicy-transport.com et le rendre admin
INSERT INTO public.profiles (user_id, is_admin, full_name)
SELECT 
  id, 
  true, 
  COALESCE(raw_user_meta_data->>'full_name', 'Administrator')
FROM auth.users 
WHERE email = 'contact@logicy-transport.com'
ON CONFLICT (user_id) 
DO UPDATE SET is_admin = true;