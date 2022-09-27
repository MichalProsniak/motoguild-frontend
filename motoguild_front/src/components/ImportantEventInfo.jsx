
import { Link } from "react-router-dom";
import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import GetHourMinutes from "../helpnigFunctions/GetHourMinutes";

export default function ImportantEventInfo(props) {
    const dayMonthYearStart = GetDayMonthYear(props.start)
    const dayMonthYearStop = GetDayMonthYear(props.stop)
    const hourMinutesStart = GetHourMinutes(props.start)
    const hourMinutesStop = GetHourMinutes(props.stop)
   
    return (
        <div className={props.style}>
        <Link to={`/events/${props.nameId}`}>
            <p className="for-list-name">{props.nameText}</p>
        </Link>
        <p>
            <i className="bi bi-record-circle"></i> {props.place}
        </p>
        
        <p>
            <i className="bi bi-calendar-check"></i> {dayMonthYearStart}
        </p>     
        <p>
            <i className="bi bi-alarm"></i> {hourMinutesStart}
        </p>   
        <p>
            <i className="bi bi-calendar-check"></i> {dayMonthYearStop}
        </p>
        <p>
            <i className="bi bi-alarm"></i> {hourMinutesStop}
        </p>   
        </div>
    );
    }