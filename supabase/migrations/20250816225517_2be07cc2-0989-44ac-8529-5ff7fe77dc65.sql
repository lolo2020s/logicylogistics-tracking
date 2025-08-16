-- Update the existing profiles table to add admin role
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT false;

-- Update RLS policies to allow admins to view all profiles
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id OR (SELECT is_admin FROM public.profiles WHERE user_id = auth.uid()) = true);

-- Function to generate readable tracking numbers
CREATE OR REPLACE FUNCTION generate_tracking_number()
RETURNS TEXT AS $$
DECLARE
    year_code TEXT;
    sequence_num INTEGER;
    tracking_num TEXT;
BEGIN
    -- Get year code (last 2 digits of current year)
    year_code := TO_CHAR(CURRENT_DATE, 'YY');
    
    -- Get next sequence number for this year
    SELECT COALESCE(MAX(CAST(SUBSTRING(tracking_number FROM 4 FOR 6) AS INTEGER)), 0) + 1
    INTO sequence_num
    FROM public.shipments
    WHERE tracking_number LIKE 'LOG' || year_code || '%';
    
    -- Format: LOG + YY + 6-digit sequence (e.g., LOG24000001)
    tracking_num := 'LOG' || year_code || LPAD(sequence_num::TEXT, 6, '0');
    
    RETURN tracking_num;
END;
$$ LANGUAGE plpgsql;

-- Update shipments table to auto-generate tracking numbers
ALTER TABLE public.shipments ALTER COLUMN tracking_number SET DEFAULT generate_tracking_number();

-- Add RLS policy for admins to manage all shipments
DROP POLICY IF EXISTS "Admins can manage all shipments" ON public.shipments;
CREATE POLICY "Admins can manage all shipments" 
ON public.shipments 
FOR ALL 
USING ((SELECT is_admin FROM public.profiles WHERE user_id = auth.uid()) = true);

-- Allow admins to update shipments
DROP POLICY IF EXISTS "Admins can update shipments" ON public.shipments;
CREATE POLICY "Admins can update shipments" 
ON public.shipments 
FOR UPDATE 
USING ((SELECT is_admin FROM public.profiles WHERE user_id = auth.uid()) = true);