-- Align shipment_photos.photo_type allowed values with the app
ALTER TABLE public.shipment_photos
DROP CONSTRAINT IF EXISTS shipment_photos_photo_type_check;

-- Allow the following types used across the app
ALTER TABLE public.shipment_photos
ADD CONSTRAINT shipment_photos_photo_type_check
CHECK (
  photo_type IN (
    'package',
    'vehicle',
    'cargo',
    'loading',
    'document',
    'other',
    'signature',
    'delivery_proof',
    'damage'
  )
);
