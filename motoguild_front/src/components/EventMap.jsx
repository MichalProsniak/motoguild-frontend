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
          if (
            props.place.current.value
          ) {
            console.log("XXXX")
            return;
          }
          else {
            
            const geocoder = new google.maps.Geocoder();
            const results = await geocoder.geocode({
                address: props.place,
            });
            console.log(results)
            setEventCoordinates(results)
          }
        }
          
        calculateEventCoordinates();
      }, [props.place]);
    

    return (
      <div>
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
            {eventCoordinates && <MarkerF position={eventCoordinates}/>}
            
          </GoogleMap>
        )}
        <br></br>
        <br></br>
      </div>
    );
  }
  