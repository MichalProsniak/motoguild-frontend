import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import GetHourMinutes from "../helpnigFunctions/GetHourMinutes";

export default function ImportantEventInfo(props) {
    const dayMonthYear = GetDayMonthYear(props.start);
    const hourMinutes = GetHourMinutes(props.start);
    
    return (
        <div className={props.style}>
        <Link to={`/events/${props.nameId}`}>
            <p className="for-list-name">{props.nameText}</p>
        </Link>
        <p>
            <i className="bi bi-record-circle"></i> {props.Place}
        </p>
        <p>
            <i className="bi bi-calendar-check"></i> {dayMonthYear}
        </p>
        <p>
            <i className="bi bi-alarm"></i> {hourMinutes}
        </p>
        </div>
    );
    }