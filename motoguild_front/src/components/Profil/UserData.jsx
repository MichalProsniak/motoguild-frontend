import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Image from "react-bootstrap/Image";

const UserData = ({ profil }) => {
  const [pictures, setPictrues] = useState("src/images/LWG.jpg");

  if (profil.image != null) {
    setPictrues(profil.image);
  }

  return (
    <div className="user">
      <div className="user-data">
        <h3 className="user-data-element">Name: {profil.userName}</h3>
        <h3 className="user-data-element">E-mail: {profil.email}</h3>
        <h3 className="user-data-element">
          Phone Number: {profil.phoneNumber}
        </h3>
        <div className="user-stars">
          <Rating
            initialValue={profil.rating}
            readonly={true}
            size={16}
            className="ride-info-text-stars"
          />
        </div>
      </div>
      <div className="user-image">
        <Image
          className="img fluid rounded-circle navbar-profile-pic"
          style={{ height: "150px", width: "150px" }}
          src={pictures}
        />
      </div>
    </div>
  );
};

export default UserData;
