import { Link } from "react-router-dom"
import { useState } from "react"
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";

const Event = ({event}) =>{
    const [picture, setPictrue] = useState("src/images/LWG.jpg")
    const [ownerPictrue, setOwnerPictru] = useState("src/images/LWG.jpg")
    if(event.image != null){
        setPictrue(event.image)
    }
    if(event.owner.image != null){
        setOwnerPictru(event.owner.image)
    }

    console.log(event)
    return(
        <div className="event-profile-container">
        <div className="group-photo-container">
            <Link to={`/event/${event.id}`} replace>
                <Image className="group-photo" src={picture} />
            </Link>
        </div>
        <div className="ride-header">
            <Link to={`/event/${event.id}`} replace>
                <p>{event.name}</p>
            </Link>
            <h6>{event.startPlace} =></h6><br></br><h6> {event.endingPlace} </h6>
            <div className="group-details-profile">
                <div className="group-rating">
                    <Rating initialValue={event.rating} readonly={true} size="30" />
                </div>
            </div>
        </div>
        <div className="for-list-user">
              <Image
                className="img fluid rounded-circle for-list-user-avatar"
                src={ownerPictrue}
              />
              <h3 className="for-list-user-text">{event.owner.userName}</h3>
            </div>
    </div>
    )
}

export default Event