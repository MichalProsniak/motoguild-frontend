import { Rating } from "react-simple-star-rating";

export default function RouteSuggestion(props) {
  return (
    <div className="suggestion" onClick={props.customClickEvent}>
      <div>
        <p className="suggestion-title-rating">
          <span className="suggestion-title">{props.route.name}</span>
          <span className="suggestion-rating">
            <Rating
              initialValue={props.route.rating}
              readonly={true}
              size={16}
            />
          </span>
        </p>
        <p>
          {props.route.startPlace} <i className="bi bi-caret-right-fill"></i>{" "}
          {props.route.endingPlace}
        </p>
      </div>
    </div>
  );
}
