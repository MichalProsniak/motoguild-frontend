import React, { useState } from "react";
import { createUser } from "../helpnigFunctions/ApiCaller";

const Registration = (props) => {
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

  function handleBackToLogin() {
    props.setIsRegistration(false);
  }

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <p className="back-to-login-text" onClick={handleBackToLogin}>
          <i class="bi bi-arrow-left"></i> Wróć do logowania
        </p>
        <label className="label-custom" name="userName">
          Nazwa użytkownika
        </label>
        <input
          className="input-login-register"
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        ></input>
        <label className="label-custom" name="email">
          Adres e-mail
        </label>
        <input
          className="input-login-register"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        ></input>
        <label className="label-custom" name="password">
          Hasło
        </label>
        <input
          className="input-login-register"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        ></input>
        <label className="label-custom" name="passwordConfirm">
          Potwierdź hasło
        </label>
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
        <button className="btn btn-dark custom-red-button">Zarejestruj</button>
      </form>
    </div>
  );
};

export default Registration;
