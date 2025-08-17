import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface TrackingMapProps {
  trackingData?: {
    current_latitude?: number;
    current_longitude?: number;
    current_location?: string;
    transport_mode?: string;
    history?: Array<{
      latitude?: number;
      longitude?: number;
      location: string;
      timestamp: string;
    }>;
  };
}

export function TrackingMap({ trackingData }: TrackingMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoibG9sb2xvMjAiLCJhIjoiY21lZWVtdzBiMGw3dTJrc2E3dGVyZTF1OCJ9.AjZqAS5HdqB8inRxGS3n_g';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.3522, 48.8566], // Paris par défaut
      zoom: 5,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // If we have tracking data, add markers and route
    if (trackingData && trackingData.current_latitude && trackingData.current_longitude) {
      const currentLng = trackingData.current_longitude;
      const currentLat = trackingData.current_latitude;

      // Center map on current location
      map.current.setCenter([currentLng, currentLat]);
      map.current.setZoom(8);

      // Add current location marker
      const currentMarker = new mapboxgl.Marker({
        color: '#ef4444', // red for current location
        scale: 1.2
      })
        .setLngLat([currentLng, currentLat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold">Position actuelle</h3>
                <p class="text-sm">${trackingData.current_location || 'Position en cours de mise à jour'}</p>
                <p class="text-xs text-gray-600">Transport: ${trackingData.transport_mode || 'road'}</p>
              </div>
            `)
        )
        .addTo(map.current);

      // Add history markers if available
      if (trackingData.history && trackingData.history.length > 0) {
        trackingData.history.forEach((point, index) => {
          if (point.latitude && point.longitude) {
            const isFirst = index === 0;
            const marker = new mapboxgl.Marker({
              color: isFirst ? '#22c55e' : '#6b7280', // green for start, gray for intermediate
              scale: isFirst ? 1.0 : 0.8
            })
              .setLngLat([point.longitude, point.latitude])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                  .setHTML(`
                    <div class="p-2">
                      <h3 class="font-semibold">${isFirst ? 'Point de départ' : 'Étape'}</h3>
                      <p class="text-sm">${point.location}</p>
                      <p class="text-xs text-gray-600">${new Date(point.timestamp).toLocaleDateString('fr-FR')}</p>
                    </div>
                  `)
              )
              .addTo(map.current!);
          }
        });

        // Create route line if we have multiple points
        const coordinates = trackingData.history
          .filter(point => point.latitude && point.longitude)
          .map(point => [point.longitude!, point.latitude!]);
        
        // Add current location to the end of the route
        coordinates.push([currentLng, currentLat]);

        if (coordinates.length > 1) {
          map.current.on('load', () => {
            map.current!.addSource('route', {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: coordinates
                }
              }
            });

            map.current!.addLayer({
              id: 'route',
              type: 'line',
              source: 'route',
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': '#3b82f6',
                'line-width': 3,
                'line-opacity': 0.8
              }
            });
          });

          // Fit map to show all points
          const bounds = new mapboxgl.LngLatBounds();
          coordinates.forEach(coord => bounds.extend(coord as [number, number]));
          map.current.fitBounds(bounds, { padding: 50 });
        }
      }
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [trackingData]);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}