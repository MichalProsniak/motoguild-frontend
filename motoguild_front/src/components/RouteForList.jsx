import SmallMap from "./SmallMap";
import { useLoadScript } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import ImportantRouteInfo from "./ImportantRouteInfo";
import pictures from "../images/piesek.jpg";
import Image from "react-bootstrap/Image";

const libraries = ["places"];
export default function RouteForList(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <div className="for-list">
      <Container>
        <Row>
          <Col sm={4}>
            {isLoaded && (
              <SmallMap
                isLoaded={isLoaded}
                size={1}
                originPoint={props.startPlace}
                destinationPoint={props.endingPlace}
                setLoadedMaps={props.setLoadedMaps}
                loadedMaps={props.loadedMaps}
                stops={props.stops}
              />
            )}
          </Col>
          <Col className="text-container" sm={5}>
            <ImportantRouteInfo
              style="ride-info-text-for-list"
              nameId={props.id}
              nameText={props.name}
              startPlace={props.startPlace}
              endingPlace={props.endingPlace}
              rating={props.rating}
            />
          </Col>
          <Col>
            <div className="for-list-user">
              <Image
                className="img fluid rounded-circle for-list-user-avatar"
                src={pictures}
              />
              <h3 className="for-list-user-text">{props.owner.userName}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
