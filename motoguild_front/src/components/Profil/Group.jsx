import { Link } from "react-router-dom"
import { useState } from "react"
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";

const Group = ({group}) =>{
    const [picture, setPictrue] = useState("src/images/LWG.jpg")
    const [ownerPictrue, setOwnerPictru] = useState("src/images/LWG.jpg")

    if(group.image != null){
        setPictrue(group.image)
    }
    if(group.owner.image != null){
        setOwnerPictru(group.owner.image)
    }

    return(
    <div className="group-profile-container">
        <div className="group-photo-container">
            <Link to={`/groups/${group.id}`} replace>
                <Image className="group-photo" src={picture} />
            </Link>
        </div>
        <div className="group-header">
            <Link to={`/groups/${group.id}`} replace>
                <p>{group.name}</p>
            </Link>
            <div className="group-details-profile">
                <div className="group-rating">
                    <Rating initialValue={group.rating} readonly={true} size="30" />
                </div>
            </div>
        </div>
        <div className="for-list-user">
              <Image
                className="img fluid rounded-circle for-list-user-avatar"
                src={ownerPictrue}
              />
              <h3 className="for-list-user-text">{group.owner.userName}</h3>
            </div>
    </div>
    )
}

export default Group