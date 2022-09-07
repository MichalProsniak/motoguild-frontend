import { useState, useEffect } from "react";
import SmallMap from "./SmallMap";
import { useLoadScript } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import ImportantRideInfo from "./ImportantRideInfo";

const libraries = ["places"];
export default function RideForList(props) {
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
                isLoaded={isLoaded}
                size={1}
                originPoint={props.startPlace}
                destinationPoint={props.endingPlace}
              />
            )}
          </Col>
          <Col className="text-container" sm={5}>
            <ImportantRideInfo
              nameId={props.id}
              nameText={props.name}
              startPlace={props.startPlace}
              endingPlace={props.endingPlace}
              startTime={props.startTime}
              minimumRating={props.minimumRating}
            />
          </Col>
          <Col>
            <div className="for-list-user">
              <h3 className="for-list-user-avatar">
                <i className="bi bi-person-circle"></i>
              </h3>
              <h3 className="for-list-user-text">{props.owner.userName}</h3>
              <h3 className="for-list-participants">
                <i className="bi bi-person-lines-fill for-list-participants-icon"></i>
                {"  "}
                {props.participants}
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
