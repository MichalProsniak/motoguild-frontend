import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";

const libraries = ["places"];

export default function SmallMap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [directionsResponse, setDirectionsResponse] = useState(null);
  useEffect(() => {
    async function calculateRoute() {
      if (props.originPoint === "" || props.destinationPoint === "") {
        return;
      }
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route(
        {
          origin: props.originPoint,
          destination: props.destinationPoint,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            setDistance(result.routes[0].legs[0].distance.text);
            setDuration(result.routes[0].legs[0].duration.text);
          } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
          }
        }
      );
    }

    calculateRoute();
  }, []);
  if (props.size === 1) {
    return (
      <div>
        {isLoaded && (
          <div>
            <GoogleMap
              mapContainerClassName="googlemap-small"
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              <MarkerF />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
            <div className="small-map-info">
              <p>
                <i className="bi bi-browser-safari"></i> {distance}
              </p>
              <p>
                <i className="bi bi-clock-history"></i> {duration}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  } else if (props.size === 2) {
    return (
      <div>
        {isLoaded && (
          <div>
            <GoogleMap
              mapContainerClassName="googlemap-normal"
              options={{
                mapTypeControl: false,
              }}
            >
              <MarkerF />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
            <p>
              <i className="bi bi-browser-safari"></i> {distance}
            </p>
            <p>
              <i className="bi bi-clock-history"></i> {duration}
            </p>
          </div>
        )}
      </div>
    );
  } else if (props.size === 3) {
    return (
      <div>
        {isLoaded && (
          <div>
            <GoogleMap
              mapContainerClassName="googlemap-slides"
              options={{
                mapTypeControl: false,
              }}
            >
              <MarkerF />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
            <div className="googlemap-slides-containter-text">
              <p>
                <i className="bi bi-browser-safari"></i> {distance}
              </p>
              <p>
                <i className="bi bi-clock-history"></i> {duration}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
