import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { loginUser, testLogin } from "../helpnigFunctions/ApiCaller";

const Login = () => {
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
    }else{
    setIsValidData(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name="userName">User Name</label>
        <input
          className="standard-input"
          type="text"
          name="userName"
          value={user.userName}
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
        {!isValidData && <p className="error-message">{errorMessage}</p>}

        <button>Zaloguj</button>
      </form>
      {!isValidData && <p>{errorMessage}</p>}
    </div>
  );
};}

export default Login;
