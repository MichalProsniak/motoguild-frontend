import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLoadScript } from "@react-google-maps/api";
import SmallMap from "./SmallMap";
import ImportantRideInfo from "./ImportantRideInfo";
import PostsForPage from "./PostsForPage";

const libraries = ["places"];
export default function RideBody(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <div>
      <div className="ride-for-list">
        <Container>
          <Row>
            <Col sm={6}>
              {isLoaded && (
                <SmallMap
                  size={2}
                  originPoint={props.ride.route.startPlace}
                  destinationPoint={props.ride.route.endingPlace}
                />
              )}
            </Col>
            <Col sm={6}>
              <h3>Opis przejazdu</h3>
              <p>{props.ride.description}</p>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <h4>
                <i className="bi bi-person-circle"></i>{" "}
                {props.ride.owner.userName}
              </h4>
              <br></br>
              <ImportantRideInfo
                startPlace={props.ride.route.startPlace}
                endingPlace={props.ride.route.endingPlace}
                startTime={props.ride.startTime}
                minimumRating={props.minimumRating}
              />
            </Col>
            <Col sm={6}>
              <PostsForPage link="ride" />
            </Col>
          </Row>
        </Container>
      </div>
      <button>Weź udział</button>
    </div>
  );
}
