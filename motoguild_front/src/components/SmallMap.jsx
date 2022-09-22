import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import { useState, useEffect } from "react";

export default function SmallMap(props) {
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const stopsForMap = props.stops.map(stop => {
      return {location : stop.place,
              stopover: true}
  })

  useEffect(() => {
    try {
      async function calculateRoute() {
        if (props.originPoint === "" || props.destinationPoint === "") {
          return;
        }
        const directionsService = new google.maps.DirectionsService();
        try {
          const results = await directionsService.route(
            {
              origin: props.originPoint,
              destination: props.destinationPoint,
              travelMode: google.maps.TravelMode.DRIVING,
              waypoints: stopsForMap
                // {
                //   location: "Warszawa",
                //   stopover: true,
                // },
                // {
                //   location: "Poznań",
                //   stopover: true,
                // },
              ,
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                setCorrectData(result);
                setMapLoaded(true);
                props.setLoadedMaps((prev) => prev + 1);
              }
            }
          );
        } catch (e) {}
      }
      let timeout = setTimeout(() => {
        calculateRoute();
      }, props.loadedMaps * 1000);

      return () => clearTimeout(timeout);
    } catch {}
  }, []);

  function setCorrectData(result) {
    setDirectionsResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
    try {
      props.setMapInfo([
        result.routes[0].legs[0].distance.text,
        result.routes[0].legs[0].duration.text,
      ]);
    } catch {}
  }

  if (props.size === 1) {
    return (
      <div className="container-map-small">
        {!mapLoaded && <div className="loader"></div>}
        {props.isLoaded && (
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
        {props.isLoaded && (
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
          </div>
        )}
      </div>
    );
  } else if (props.size === 3) {
    return (
      <div className="container-map-slider">
        {!mapLoaded && <div className="loader-slider"></div>}
        {props.isLoaded && (
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
