

export default function ImportantRideInfo(props)
{

    const dayMonthYear = props.startTime.slice(0,10).split("-").reverse().join(".")
    const hourMinutes = props.startTime.split("T")[1].slice(0,5)

    return (
        <div>
            <p><i className="bi bi-record-circle"></i> {props.startPlace}</p>
            <p><i className="bi bi-caret-right-fill"></i> {props.endingPlace}</p>
            <p><i className="bi bi-calendar-check"></i> {dayMonthYear}</p>
            <p><i className="bi bi-alarm"></i> {hourMinutes}</p>
        </div>
        
    )
}