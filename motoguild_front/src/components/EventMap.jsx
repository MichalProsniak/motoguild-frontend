import {
    GoogleMap,
    useLoadScript,
    MarkerF
  } from "@react-google-maps/api";
  import { useState, useEffect } from "react";
  
  const libraries = ["places"];
  export default function EventMap(props) {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      libraries,
    });

    const [eventCoordinates, setEventCoordinates] = useState(null)

    useEffect(() => {
        async function calculateEventCoordinates() {
          if (!props.isOrigin) {
            return;
          }
          else {
            const geocoder = new google.maps.Geocoder();
            const results = await geocoder.geocode({
                address: props.place.current.value,
            });
            setEventCoordinates(results.results[0].geometry.location)
          }
        }
          
        calculateEventCoordinates();
      }, [props.place, props.isOrigin]);
    

    return (
      <div>
        {isLoaded && !props.isOrigin && (
          <GoogleMap
            zoom={7}
            center={props.coordinates}
            mapContainerClassName="googlemap"
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}
          > 
          </GoogleMap>
        )}
        {isLoaded && props.isOrigin && (
          <GoogleMap
            zoom={7}
            center={eventCoordinates}
            mapContainerClassName="googlemap"
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}
          >
            {props.isOrigin && <MarkerF position={eventCoordinates}/>}
            
          </GoogleMap>
        )}
        <br></br>
        <br></br>
      </div>
    );
  }
  