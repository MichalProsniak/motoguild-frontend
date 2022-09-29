import { Link } from "react-router-dom"
import { useState } from "react"
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";

const Ride = ({ride}) =>{
    const [ownerPictrue, setOwnerPictru] = useState("src/images/LWG.jpg")
    if(ride.image != null){
        setPictrue(ride.image)
    }
    if(ride.owner.image != null){
        setOwnerPictru(ride.owner.image)
    }

    return(
    <div className="ride-profile-container">
        <div className="ride-header">
            <Link to={`/rides/${ride.id}`} replace>
                <p>{ride.name}</p>
            </Link>
            <h6>{ride.startPlace} <i className="bi bi-arrow-down-left"></i></h6><br></br><h6> {ride.endingPlace} </h6>
            <div className="group-details-profile">
                <div className="group-rating">
                    <Rating initialValue={ride.rating} readonly={true} size="30" />
                </div>
            </div>
        </div>
        <div className="for-list-user-profile-page">
              <Image
                className="img fluid rounded-circle for-list-user-avatar"
                src={ownerPictrue}
              />
              <h3 className="for-list-user-text">{ride.owner.userName}</h3>
            </div>
    </div>
    )
}

export default Ride