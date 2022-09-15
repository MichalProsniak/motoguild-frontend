
import { Link } from "react-router-dom";
import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";

export default function ImportantEventInfo(props) {
    const dayMonthYearStart = GetDayMonthYear(props.start);
    const dayMonthYearStop = GetDayMonthYear(props.stop);
    
    return (
        <div className={props.style}>
        <Link to={`/events/${props.nameId}`}>
            <p className="for-list-name">{props.nameText}</p>
        </Link>
        <p>
            <i className="bi bi-record-circle"></i> {props.Place}
        </p>
        <p>
            <i className="bi bi-calendar-check"></i> {dayMonthYearStart}
        </p>        
        <p>
            <i className="bi bi-calendar-check"></i> {dayMonthYearStop}
        </p>
        </div>
    );
    }