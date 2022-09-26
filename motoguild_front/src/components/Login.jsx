import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { loginUser, testLogin } from "../helpnigFunctions/ApiCaller";
import { useNavigate } from "react-router";

const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [isValidData, setIsValidData] = useState(true);
  const [errorMessage, setErrorMessage] = useState("Wprowadź poprawne dane!");

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const responseText = await loginUser(user);
    if (!localStorage.getItem("token")) {
      setIsValidData(false);
      return;
    } else {
      setIsValidData(true);
      navigate("/");
      window.location.reload(false);
    }
  }

  function handleRegister() {
    props.setIsRegistration(true);
  }

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <label name="userName">Nazwa użytkownika</label>
        <input
          className="input-login-register"
          type="text"
          name="userName"
          value={user.userName}
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
        {!isValidData && <p className="error-message">{errorMessage}</p>}
        <br></br>
        <button className="btn btn-dark">Zaloguj</button>
        <p className="login-form-register-text">Nie masz konta?</p>
        <button className="btn btn-outline-dark" onClick={handleRegister}>
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default Login;
