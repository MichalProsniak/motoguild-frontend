import { useLoadScript } from "@react-google-maps/api";
import SmallMap from "./SmallMap";
import PostsForPage from "./PostsForPage";

const libraries = ["places"];
export default function RouteBody(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <div>
      {isLoaded && (
        <SmallMap
          size={2}
          originPoint={props.route.startPlace}
          destinationPoint={props.route.endingPlace}
        />
      )}
      <PostsForPage link="route" />
    </div>
  );
}
