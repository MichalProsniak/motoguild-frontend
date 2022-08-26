import { Rating } from 'react-simple-star-rating'
import GetDayMonthYear from '../helpnigFunctions/GetDayMonthYear'
import GetHourMinutes from '../helpnigFunctions/GetHourMinutes'

export default function ImportantRideInfo(props)
{

    const dayMonthYear = GetDayMonthYear(props.startTime)
    const hourMinutes = GetHourMinutes(props.startTime)

    return (
        <div>
            <p><i className="bi bi-record-circle"></i> {props.startPlace}</p>
            <p><i className="bi bi-caret-right-fill"></i> {props.endingPlace}</p>
            <p><i className="bi bi-calendar-check"></i> {dayMonthYear}</p>
            <p><i className="bi bi-alarm"></i> {hourMinutes}</p>
            <Rating initialValue={props.minimumRating} readonly={true} />
        </div>
        
    )
}