const UserData = ({user}) => {
  return (
    <div className="user">
        <div className="user-data">
            <h3 className="user-data-element">Name: {user.userName}</h3>
            <h3 className="user-data-element">E-mail: {user.email}</h3>
            <h3 className="user-data-element">Phone Number: {user.phoneNumber}</h3>
        </div>
    </div>
  )
};

export default UserData;
