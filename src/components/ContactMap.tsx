import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';

interface ContactMapProps {
  address?: string;
  coordinates?: [number, number]; // [longitude, latitude]
}

export function ContactMap({ 
  address = "Gesworenhoekseweg 4, 5047 TM Tilburg, Pays-Bas",
  coordinates = [5.0914, 51.5656] // Tilburg, Pays-Bas coordinates
}: ContactMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapContainer.current) return;

      try {
        // Get Mapbox token from Supabase secrets
        const { data, error } = await supabase.functions.invoke('get-secrets', {
          body: { secret_name: 'MAPBOX_PUBLIC_TOKEN' }
        });

        if (error || !data?.secret_value) {
          console.error('Error getting Mapbox token:', error);
          return;
        }

        // Initialize map with Mapbox token
        mapboxgl.accessToken = data.secret_value;
        
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: coordinates,
          zoom: 15,
        });

        // Add navigation controls
        map.current.addControl(
          new mapboxgl.NavigationControl(),
          'top-right'
        );

        // Add company location marker
        const marker = new mapboxgl.Marker({
          color: '#ef4444', // Primary color
          scale: 1.2
        })
          .setLngLat(coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-3">
                  <h3 class="font-semibold text-lg mb-2">LOGICY TRANSPORT</h3>
                  <p class="text-sm text-gray-600">${address}</p>
                </div>
              `)
          )
          .addTo(map.current);

        // Show popup by default
        marker.togglePopup();

      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [coordinates, address]);

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg bg-muted">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}