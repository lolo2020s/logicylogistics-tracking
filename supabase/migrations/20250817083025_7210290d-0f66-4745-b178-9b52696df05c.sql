-- Check if bucket policies exist and create missing ones for shipment-photos bucket
-- Allow authenticated users to upload photos
CREATE POLICY "Allow authenticated users to upload shipment photos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
    bucket_id = 'shipment-photos' 
    AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete their uploaded photos
CREATE POLICY "Allow authenticated users to delete shipment photos" 
ON storage.objects 
FOR DELETE 
USING (
    bucket_id = 'shipment-photos' 
    AND auth.role() = 'authenticated'
);

-- Allow public read access to shipment photos
CREATE POLICY "Allow public read access to shipment photos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'shipment-photos');