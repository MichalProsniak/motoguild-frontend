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
        <label name="userName">Nazwa użytkownika</label>
        <input
          className="input-login-register"
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        ></input>
        <label name="email">Adres e-mail</label>
        <input
          className="input-login-register"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        ></input>
        <label name="password">Hasło</label>
        <input
          className="input-login-register"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        ></input>
        <label name="passwordConfirm">Potwierdź hasło</label>
        <input
          className="input-login-register"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChangePasswordConfirm}
        ></input>
        {!isValidData && (
          <p className="error-message">Wprowadź prawidłowe dane!</p>
        )}
        <br></br>
        <button className="btn btn-secondary">Zarejestruj</button>
      </form>
    </div>
  );
};

export default Registration;
