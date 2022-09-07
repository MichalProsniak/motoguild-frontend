import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

export default function ImportantRoutInfo(props) {
  
  return (
    <div className="ride-info-text">
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
        initialValue={props.minimumRating}
        readonly={true}
        size={20}
        className="ride-info-text-stars"
      />
    </div>
  );
}
