-- Ajouter tous les champs manquants pour un système de logistique complet
ALTER TABLE public.shipments 
ADD COLUMN IF NOT EXISTS sender_phone text,
ADD COLUMN IF NOT EXISTS sender_email text,
ADD COLUMN IF NOT EXISTS receiver_phone text,
ADD COLUMN IF NOT EXISTS receiver_email text,
ADD COLUMN IF NOT EXISTS emergency_contact_name text,
ADD COLUMN IF NOT EXISTS emergency_contact_phone text,
ADD COLUMN IF NOT EXISTS declared_value numeric(10,2),
ADD COLUMN IF NOT EXISTS currency text DEFAULT 'EUR',
ADD COLUMN IF NOT EXISTS insurance_value numeric(10,2),
ADD COLUMN IF NOT EXISTS special_instructions text,
ADD COLUMN IF NOT EXISTS client_reference text,
ADD COLUMN IF NOT EXISTS order_number text,
ADD COLUMN IF NOT EXISTS internal_notes text,
ADD COLUMN IF NOT EXISTS priority_level text DEFAULT 'normal',
ADD COLUMN IF NOT EXISTS delivery_instructions text,
ADD COLUMN IF NOT EXISTS preferred_delivery_time text,
ADD COLUMN IF NOT EXISTS transport_cost numeric(10,2),
ADD COLUMN IF NOT EXISTS payment_method text,
ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS is_fragile boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS is_dangerous boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS requires_signature boolean DEFAULT false;

-- Ajouter des contraintes pour les énumérations
ALTER TABLE public.shipments 
ADD CONSTRAINT shipments_priority_level_check 
CHECK (priority_level = ANY (ARRAY['normal'::text, 'urgent'::text, 'express'::text, 'critical'::text]));

ALTER TABLE public.shipments 
ADD CONSTRAINT shipments_payment_method_check 
CHECK (payment_method IS NULL OR payment_method = ANY (ARRAY['cash'::text, 'card'::text, 'transfer'::text, 'check'::text, 'account'::text]));

ALTER TABLE public.shipments 
ADD CONSTRAINT shipments_payment_status_check 
CHECK (payment_status = ANY (ARRAY['pending'::text, 'paid'::text, 'partial'::text, 'failed'::text, 'refunded'::text]));

ALTER TABLE public.shipments 
ADD CONSTRAINT shipments_currency_check 
CHECK (currency = ANY (ARRAY['EUR'::text, 'USD'::text, 'GBP'::text, 'MAD'::text, 'XOF'::text]));