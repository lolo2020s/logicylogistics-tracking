-- Create profiles table for user authentication
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create shipments table
CREATE TABLE public.shipments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT NOT NULL UNIQUE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  sender_name TEXT NOT NULL,
  sender_address TEXT NOT NULL,
  sender_city TEXT NOT NULL,
  sender_country TEXT NOT NULL,
  receiver_name TEXT NOT NULL,
  receiver_address TEXT NOT NULL,
  receiver_city TEXT NOT NULL,
  receiver_country TEXT NOT NULL,
  transport_mode TEXT NOT NULL CHECK (transport_mode IN ('road', 'air', 'maritime')),
  shipment_type TEXT NOT NULL CHECK (shipment_type IN ('standard', 'express', 'premium')),
  weight DECIMAL(10,2),
  dimensions JSONB,
  current_status TEXT NOT NULL DEFAULT 'pending' CHECK (current_status IN ('pending', 'picked_up', 'in_transit', 'customs', 'out_for_delivery', 'delivered', 'exception')),
  current_location TEXT,
  current_latitude DECIMAL(10, 8),
  current_longitude DECIMAL(11, 8),
  estimated_delivery TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on shipments
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;

-- Create policies for shipments
CREATE POLICY "Users can view their own shipments" 
ON public.shipments 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own shipments" 
ON public.shipments 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Public can view shipments by tracking number" 
ON public.shipments 
FOR SELECT 
USING (true);

-- Create tracking_history table
CREATE TABLE public.tracking_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID NOT NULL REFERENCES public.shipments(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  location TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  description TEXT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on tracking_history
ALTER TABLE public.tracking_history ENABLE ROW LEVEL SECURITY;

-- Create policies for tracking_history
CREATE POLICY "Public can view tracking history" 
ON public.tracking_history 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert tracking history" 
ON public.tracking_history 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_shipments_updated_at
BEFORE UPDATE ON public.shipments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger to automatically update current location when history is added
CREATE OR REPLACE FUNCTION public.update_shipment_location()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.shipments 
  SET 
    current_status = NEW.status,
    current_location = NEW.location,
    current_latitude = NEW.latitude,
    current_longitude = NEW.longitude,
    updated_at = now()
  WHERE id = NEW.shipment_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_shipment_on_history_insert
AFTER INSERT ON public.tracking_history
FOR EACH ROW
EXECUTE FUNCTION public.update_shipment_location();

-- Create function to handle new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id, 
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic profile creation
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- Enable realtime for tables
ALTER TABLE public.shipments REPLICA IDENTITY FULL;
ALTER TABLE public.tracking_history REPLICA IDENTITY FULL;
ALTER TABLE public.profiles REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.shipments;
ALTER PUBLICATION supabase_realtime ADD TABLE public.tracking_history;
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;