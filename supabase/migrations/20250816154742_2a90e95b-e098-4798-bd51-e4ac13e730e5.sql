-- Enable realtime for tracking_history table
ALTER TABLE public.tracking_history REPLICA IDENTITY FULL;

-- Add the table to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.tracking_history;