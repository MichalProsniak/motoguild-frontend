import { Rating } from "react-simple-star-rating";
import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import GetHourMinutes from "../helpnigFunctions/GetHourMinutes";
import { Link } from "react-router-dom";

export default function ImportantRideInfo(props) {
  const dayMonthYear = GetDayMonthYear(props.startTime);
  const hourMinutes = GetHourMinutes(props.startTime);

  return (
    <div className={props.style}>
      <Link to={`/rides/${props.nameId}`}>
        <p className="for-list-name">{props.nameText}</p>
      </Link>
      <p>
        <i className="bi bi-record-circle"></i> {props.startPlace}
      </p>
      <p>
        <i className="bi bi-caret-right-fill"></i> {props.endingPlace}
      </p>
      <p>
        <i className="bi bi-calendar-check"></i> {dayMonthYear}
      </p>
      <p>
        <i className="bi bi-alarm"></i> {hourMinutes}
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
