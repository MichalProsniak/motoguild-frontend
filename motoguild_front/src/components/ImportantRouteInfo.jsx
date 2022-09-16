import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

export default function ImportantRouteInfo(props) {
  return (
    <div className={props.style}>
      <Link to={`/routes/${props.nameId}`}>
        <p className="for-list-name">{props.nameText}</p>
      </Link>
      <p>
        <i className="bi bi-record-circle"></i> {props.startPlace}
      </p>
      <p>
        <i className="bi bi-caret-right-fill"></i> {props.endingPlace}
      </p>
      <Rating
        initialValue={props.rating}
        readonly={true}
        size={20}
        className="ride-info-text-stars"
      />
    </div>
  );
}
