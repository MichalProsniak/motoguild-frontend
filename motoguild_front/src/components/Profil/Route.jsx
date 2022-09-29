import { Link } from "react-router-dom"
import { useState } from "react"
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";


const Route = ({route}) =>{
   
    return(
        <div className="ride-profile-container">
        <div className="ride-header">
            <Link to={`/routes/${route.id}`} replace>
                <p>{route.name}</p>
            </Link>
            <h6>{route.startPlace} <i class="bi bi-arrow-down-left"></i></h6><br></br><h6> {route.endingPlace} </h6>
            <div className="group-details-profile">
                <div className="group-rating">
                    <Rating initialValue={route.rating} readonly={true} size="30" />
                </div>
            </div>
        </div>
        <div className="ffor-list-user-profile-page">
              <Image
                className="img fluid rounded-circle for-list-user-avatar"
              //  src={ownerPictrue}
              />
              <h3 className="for-list-user-text">{route.owner.userName}</h3>
            </div>
    </div>
    )
}

export default Route