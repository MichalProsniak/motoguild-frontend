import { Rating } from "react-simple-star-rating";

const UserData = ({profil}) => {
  console.log(profil)
  return (
    <div className="user">
        <div className="user-data">
            <h3 className="user-data-element">Name: {profil.userName}</h3>
            <h3 className="user-data-element">E-mail: {profil.email}</h3>
            <h3 className="user-data-element">Phone Number: {profil.phoneNumber}</h3>
            <Rating
              initialValue={profil.rating}
              readonly={true}
              size={70}
              className="ride-info-text-stars"
            />
        </div>
    </div>
  )
};

export default UserData;
