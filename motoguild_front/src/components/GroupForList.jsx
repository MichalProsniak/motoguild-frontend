import React from "react";
import picture from "../images/piesek.jpg";
import { Rating } from "react-simple-star-rating";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

export default function GroupForList(props) {
  return (
    <div className="group-container">
      <div className="group-photo-container">
        <Link to={`/groups/${props.id}`}>
          <img className="group-photo" src={picture} />
        </Link>
      </div>
      <div className="group-header">
        <Link to={`/groups/${props.id}`}>
          <p>{props.name}</p>
        </Link>
        <div className="group-details">
          {props.isPrivate ? (
            <p className="group-privacy-text">Prywatna</p>
          ) : (
            <p className="group-privacy-text">Publiczna</p>
          )}
          <div className="group-rating">
            <Rating initialValue={props.rating} readonly={true} size="13" />
          </div>
          <div className="group-description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div className="group-apply-button-container">
        <span className="group-participants-text">
          Członkowie: {props.participants.length}
        </span>
        {props.isPrivate ? (
          <button className="group-apply-button btn btn-outline-primary">
            <p className="group-apply-button-text-ask">Poproś o dostęp</p>
          </button>
        ) : (
          <button className="group-apply-button btn btn-outline-primary">
            <p className="group-apply-button-text-apply">Dołącz</p>
          </button>
        )}
      </div>
    </div>
  );
}
