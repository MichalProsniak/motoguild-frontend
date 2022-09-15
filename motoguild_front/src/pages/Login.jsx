import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { loginUser, testLogin } from "../helpnigFunctions/ApiCaller";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [isValidData, setIsValidData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    if (
      responseText === "User not found." ||
      responseText === "Wrong password."
    ) {
      setErrorMessage(responseText);
      setIsValidData(false);
      return;
    }else{
    setIsValidData(true);
    return <Navigate to="home" />
    }
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
          <button>Zaloguj</button>
      </form>
      {!isValidData && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
