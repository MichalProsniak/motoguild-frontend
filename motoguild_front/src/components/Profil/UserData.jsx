import { Rating } from "react-simple-star-rating";

const UserData = ({user}) => {
  console.log(user)
  return (
    <div className="user">
        <div className="user-data">
            <h3 className="user-data-element">Name: {user.userName}</h3>
            <h3 className="user-data-element">E-mail: {user.email}</h3>
            <h3 className="user-data-element">Phone Number: {user.phoneNumber}</h3>
            <Rating
              initialValue={user.rating}
              readonly={true}
              size={70}
              className="ride-info-text-stars"
            />
        </div>
    </div>
  )
};

export default UserData;
