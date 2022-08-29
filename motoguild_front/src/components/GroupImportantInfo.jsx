import GetDayMonthYear from '../helpnigFunctions/GetDayMonthYear'
import { Rating } from 'react-simple-star-rating'

export default function GroupImportantInfo(props)
{
    const dayMonthYear = GetDayMonthYear(props.group.creationDate)
    
    return (
        <div>
            <h1>{props.group.name}</h1>
            {props.group.isPrivate ? <h4>Prywatna</h4> : <h4>Publiczna</h4>}
            <h3><i className="bi bi-person-circle"></i></h3>
            <h3>{props.group.owner.userName}</h3>
            <p><i className="bi bi-calendar-check"></i> {dayMonthYear}</p>
            <Rating initialValue={props.group.rating} readonly={true} />
        </div>
    )
}