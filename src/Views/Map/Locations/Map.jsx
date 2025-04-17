import { useEffect, useRef, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const { VITE_APP_GOOGLE_MAP_API_KEY } = import.meta.env;

const recycleLocations = [
  {
    key: "accra",
    name: "TTL Recycling Center, Accra",
    location: { lat: 5.6037, lng: -0.187 },
  },
  {
    key: "kumasi",
    name: "Kumasi Recycling Depot",
    location: { lat: 6.6885, lng: -1.6244 },
  },
  {
    key: "tema",
    name: "Tema Industrial Recycling",
    location: { lat: 5.6692, lng: 0.0179 },
  },
];

export default function Location() {
  const [userLocation, setUserLocation] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const directionsRendererRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.error("Failed to get user location", err);
      }
    );
  }, []);

  const handleMarkerClick = async (destination) => {
    if (!userLocation || !mapInstance || !window.google) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: userLocation,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          if (!directionsRendererRef.current) {
            directionsRendererRef.current =
              new window.google.maps.DirectionsRenderer();
            directionsRendererRef.current.setMap(mapInstance);
          }
          directionsRendererRef.current.setDirections(result);
        } else {
          console.error("Directions request failed", result);
        }
      }
    );
  };

  return (
    <APIProvider apiKey={VITE_APP_GOOGLE_MAP_API_KEY}>
      <Map
        style={{ height: "100vh", width: "100%" }}
        defaultCenter={{ lat: 5.6037, lng: -0.187 }}
        defaultZoom={8}
        gestureHandling="greedy"
        disableDefaultUI={false}
        onLoad={(map) => {
          setMapInstance(map);
        }}
      >
        {userLocation && (
          <AdvancedMarker position={userLocation}>
            <Pin background="#34A853" borderColor="#000" glyphColor="#fff" />
          </AdvancedMarker>
        )}

        {recycleLocations.map((loc) => (
          <AdvancedMarker
            key={loc.key}
            position={loc.location}
            onClick={() => handleMarkerClick(loc.location)}
          >
            <Pin background="red" glyphColor="#fff" borderColor="#000" />
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
