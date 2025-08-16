-- Donner les droits admin au compte de contact (deux variantes d'orthographe)
INSERT INTO public.profiles (user_id, email, full_name, is_admin)
SELECT u.id, u.email, COALESCE(u.raw_user_meta_data->>'full_name', 'Administrator'), true
FROM auth.users u
WHERE u.email IN ('contact@logicy-transport.com','contact@logixy-transport.com')
ON CONFLICT (user_id) DO UPDATE SET is_admin = EXCLUDED.is_admin, email = EXCLUDED.email;