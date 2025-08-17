-- Ajouter une colonne pour le type de colis (package_type)
ALTER TABLE public.shipments 
ADD COLUMN package_type text;

-- Mettre à jour la contrainte pour le type de colis
ALTER TABLE public.shipments 
ADD CONSTRAINT shipments_package_type_check 
CHECK (package_type IS NULL OR package_type = ANY (ARRAY['package'::text, 'document'::text, 'vehicle'::text, 'cargo'::text]));