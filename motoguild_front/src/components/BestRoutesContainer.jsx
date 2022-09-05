import { useState, useEffect, useRef } from "react";
import SmallMap from "./SmallMap";
import { useLoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const libraries = ["places"];
export default function BestRoutesContainer(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const delay = 5000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevState) =>
          prevState === props.routes.length - 1 ? 0 : prevState + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      {/* {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />}
                {isLoaded && <SmallMap
                  size={3}
                  originPoint={{lat: 52.237049, lng: 21.017532}}
                  destinationPoint={{lat: 50.049683, lng: 19.944544}}
                />} */}
                
   
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {props.routes.map((route) => (
          <div className="slide" key={route.id}>
            {isLoaded && (
              <Link to={`/routes/${route.id}`}>
                <SmallMap
                  size={3}
                  originPoint={route.startPlace}
                  destinationPoint={route.endingPlace}
                />
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {props.routes.map((route, idx) => (
          <div
            key={route.id}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}
