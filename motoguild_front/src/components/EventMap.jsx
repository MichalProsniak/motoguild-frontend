import {
    GoogleMap,
    useLoadScript,
    MarkerF,
  } from "@react-google-maps/api";
  import { useState, useEffect } from "react";
  import geocode from "react-geocode";


  
  const libraries = ["places"];
  
  export default function EventMap(props) {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      libraries,
    });

    const [eventCoordinates, setEventCoordinates] = useState(null);

    useEffect(() => {
        async function calculateEventCoordinates() {
            const geocoder = new google.maps.Geocoder();
            const results = await geocoder.geocode({
                address: props.place,
            });
            setEventCoordinates(results[0].geometry.location);}

        calculateEventCoordinates();


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
            {props.place && <MarkerF position={props.place} />}


            <MarkerF />

          </GoogleMap>
        )}
      </div>
    );
}}