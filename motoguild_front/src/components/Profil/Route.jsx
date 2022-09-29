import { Link } from "react-router-dom"
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";


const Route = ({route}) =>{
      const [styleUser, setStyleUser] = useState({
        backgroundImage: "url('https://localhost:3333/api/upload/noimage')"
        ,})
    
        useEffect(() => {
          var stringUser=`https://localhost:3333/api/upload/User/${route.owner.image}`;
          setStyleUser({backgroundImage: `url(${stringUser})`})
    
        },[])


    return(
        <div className="ride-profile-container">
        <div className="ride-header">
            <Link to={`/routes/${route.id}`} replace>
                <p>{route.name}</p>
            </Link>
            <h6>{route.startPlace} <i className="bi bi-arrow-down-left"></i></h6><br></br><h6> {route.endingPlace} </h6>
            <div className="group-details-profile">
                <div className="group-rating">
                    <Rating initialValue={route.rating} readonly={true} size="30" />
                </div>
            </div>
        </div>
        <div className="for-list-user-profile-page">
            <div className="group-photo-image-for-list-profile-owner" style={styleUser}></div>
              <h3 className="for-list-user-text">{route.owner.userName}</h3>
            </div>
    </div>
    )
}

export default Route