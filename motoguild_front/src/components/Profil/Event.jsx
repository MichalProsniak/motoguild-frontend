import { Link } from "react-router-dom"
import { useState } from "react"
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";

const Event = ({event}) =>{
    const [styleUser, setStyleUser] = useState({
        backgroundImage: "url('https://localhost:3333/api/upload/noimage')"
        ,})
    
        useEffect(() => {
          var stringUser=`https://localhost:3333/api/upload/User/${event.owner.image}`;
          setStyleUser({backgroundImage: `url(${stringUser})`})
    
        },[])

    return(
        <div className="event-profile-container">
        <div className="ride-header">
            <Link to={`/event/${event.id}`} replace>
                <p>{event.name}</p>
            </Link>
            <h6>{event.startPlace} <i className="bi bi-arrow-down-left"></i></h6><br></br><h6> {event.endingPlace} </h6>
            <div className="group-details-profile">
                <div className="group-rating">
                    <Rating initialValue={event.rating} readonly={true} size="30" />
                </div>
            </div>
        </div>
        <div className="for-list-user">
        <div className="group-photo-image-for-list-profile-owner" style={styleUser}></div>
              <h3 className="for-list-user-text">{event.owner.userName}</h3>
            </div>
    </div>
    )
}

export default Event