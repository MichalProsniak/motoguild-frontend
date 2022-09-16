import React from "react";
import RemoveCookie from "../hooks/removeCookie";
import { useNavigate } from "react-router";

export default function Logout() {
  const navigate = useNavigate();
  function handleClick() {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(false);
  }
  return <span onClick={handleClick}>Wyloguj</span>;
}
