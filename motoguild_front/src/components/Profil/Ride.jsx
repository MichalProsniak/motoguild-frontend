import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Rating } from "react-simple-star-rating";

const Ride = ({ride}) =>{
    const [styleUser, setStyleUser] = useState({
        backgroundImage: "url('https://localhost:3333/api/upload/noimage')"
        ,})
    
        useEffect(() => {
          var stringUser=`https://localhost:3333/api/upload/User/${ride.owner.image}`;
          setStyleUser({backgroundImage: `url(${stringUser})`})
    
        },[])


    return(
    <div className="ride-profile-container">
        <div className="ride-header">
            <Link to={`/rides/${ride.id}`} replace>
                <p>{ride.name}</p>
            </Link>
            <div className="group-details-profile">
                <h6>{ride.startPlace} <i className="bi bi-arrow-down-left"></i></h6><br></br><h6> {ride.endingPlace} </h6>
                <div className="group-profile-rating">
                    <Rating initialValue={ride.minimumRating} readonly={true} size="30" />
                </div>
            </div>
        </div>
        <div className="for-list-user-profile-page">
            <div className="group-photo-image-for-list-profile-owner" style={styleUser}></div>
            <h3 className="for-list-user-text">{ride.owner.userName}</h3>
            </div>
    </div>
    )
}

export default Ride