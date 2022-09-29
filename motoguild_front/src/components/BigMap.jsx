import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";

const libraries = ["places"];
export default function BigMap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const stopsForMap = props.stops.map((stop) => {
    return { location: stop.place, stopover: true };
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);

  useEffect(() => {
    async function calculateRoute() {
      if (
        props.originRef.current.value === "" ||
        props.destinationRef.current.value === ""
      ) {
        return;
      }
      if (props.isOrigin && props.isDestination && !props.isStops) {
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: props.originRef.current.value,
          destination: props.destinationRef.current.value,
          travelMode: google.maps.TravelMode.DRIVING,
          // waypoints: stopsForMap
        });
        setDirectionsResponse(results);
      }
      if (props.isOrigin && props.isDestination && props.isStops) {
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: props.originRef.current.value,
          destination: props.destinationRef.current.value,
          travelMode: google.maps.TravelMode.DRIVING,
          waypoints: stopsForMap,
        });
        setDirectionsResponse(results);
      }
    }
    calculateRoute();
  }, [props.isOrigin, props.isDestination, props.isStops, props.stops, props.stopsChange]);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          zoom={7}
          center={props.coordinates}
          mapContainerClassName="googlemap"
          options={{
            streetViewControl: false,
            mapTypeControl: false,
          }}
        >
          <MarkerF />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      )}
    </>
  );
}
