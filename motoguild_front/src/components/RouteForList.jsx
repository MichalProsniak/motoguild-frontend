import SmallMap from "./SmallMap";
import { useLoadScript } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import ImportantRouteInfo from "./ImportantRouteInfo";

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
          <Col sm={12} className="normal-container">
            {/* <Link to={`/rides/${props.id}`}>
                <h2>{props.name}</h2>
              </Link> */}
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            {isLoaded && (
              <SmallMap
                size={1}
                originPoint={props.startPlace}
                destinationPoint={props.endingPlace}
              />
            )}
          </Col>
          <Col className="text-container" sm={5}>
            <ImportantRouteInfo
              nameId={props.id}
              nameText={props.name}
              startPlace={props.startPlace}
              endingPlace={props.endingPlace}
              minimumRating={props.minimumRating}
            />
          </Col>
          <Col>
            <div className="for-list-user">
              <h3 className="for-list-user-avatar">
                <i className="bi bi-person-circle"></i>
              </h3>
              <h3 className="for-list-user-text">{props.owner.userName}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
