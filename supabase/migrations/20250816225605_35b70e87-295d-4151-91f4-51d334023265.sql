-- Fix the function search path security issue
CREATE OR REPLACE FUNCTION public.generate_tracking_number()
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;