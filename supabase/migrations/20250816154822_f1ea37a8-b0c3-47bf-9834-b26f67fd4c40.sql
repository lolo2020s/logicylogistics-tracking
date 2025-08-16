-- Create storage bucket for shipment photos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('shipment-photos', 'shipment-photos', true);

-- Create RLS policies for shipment photos
CREATE POLICY "Anyone can view shipment photos" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'shipment-photos');

CREATE POLICY "Authenticated users can upload shipment photos" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'shipment-photos' AND auth.role() = 'authenticated');

-- Create photos table to link images to shipments
CREATE TABLE public.shipment_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID NOT NULL REFERENCES public.shipments(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL,
  photo_type TEXT NOT NULL CHECK (photo_type IN ('package', 'delivery_proof', 'damage', 'signature')),
  description TEXT,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on photos table
ALTER TABLE public.shipment_photos ENABLE ROW LEVEL SECURITY;

-- Create policies for photos table
CREATE POLICY "Anyone can view shipment photos" 
ON public.shipment_photos FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can upload photos" 
ON public.shipment_photos FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');