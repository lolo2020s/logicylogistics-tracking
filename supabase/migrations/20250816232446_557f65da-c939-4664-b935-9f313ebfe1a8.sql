-- Mettre le premier utilisateur comme admin par défaut
UPDATE public.profiles 
SET is_admin = true 
WHERE user_id IN (
  SELECT id FROM auth.users ORDER BY created_at LIMIT 1
);