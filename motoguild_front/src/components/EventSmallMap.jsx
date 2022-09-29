import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from "react";

export default function EventSmallMap(props) {
  const [eventCoordinates, setEventCoordinates] = useState(null);

  useEffect(() => {
    async function calculateEventCoordinates() {
      const geocoder = new google.maps.Geocoder();
      const results = await geocoder.geocode({
        address: props.place,
      });
      setEventCoordinates(results.results[0].geometry.location);
    }

    calculateEventCoordinates();
  }, []);

  if (props.size == 1)  return (
    <div>
      <GoogleMap
        zoom={6}
        center={eventCoordinates}
        mapContainerClassName="googlemap-small"
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        <MarkerF position={eventCoordinates} />
      </GoogleMap>
    </div>
  );

  if (props.size == 2) return (
    <div>
    <GoogleMap
      zoom={6}
      center={eventCoordinates}
      mapContainerClassName="googlemap"
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      <MarkerF position={eventCoordinates} />
    </GoogleMap>
  </div>
  );

}
