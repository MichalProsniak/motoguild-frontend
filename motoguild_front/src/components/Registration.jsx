import React, { useState } from "react";
import { createUser } from "../helpnigFunctions/ApiCaller";

const Registration = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: 0,
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isValidData, setIsValidData] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleChangePasswordConfirm(event) {
    setPasswordConfirm(event.target.value);
  }

  async function handleSubmit(event) {
    if (
      passwordConfirm === user.password &&
      user.email !== "" &&
      user.userName.length > 4
    ) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
      event.preventDefault();
      return;
    }
    await createUser(user);
  }

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <label name="userName">User Name</label>
        <input
          className="standard-input"
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        ></input>
        <label name="email">Email</label>
        <input
          className="standard-input"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        ></input>
        <label name="password">Password</label>
        <input
          className="standard-input"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        ></input>
        <label name="passwordConfirm">Password Confirm</label>
        <input
          className="standard-input"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChangePasswordConfirm}
        ></input>
        <label name="phoneNumber">Phone Number</label>
        <input
          className="standard-input"
          type="tel"
          name="phoneNumber"
          pattern="[0-9]{9}"
          value={user.phoneNumber}
          onChange={handleChange}
        ></input>
        {!isValidData && (
          <p className="error-message">Wprowadź prawidłowe dane!</p>
        )}
        <br></br>
        <button className="btn btn-primary">Zarejestruj</button>
      </form>
    </div>
  );
};

export default Registration;
