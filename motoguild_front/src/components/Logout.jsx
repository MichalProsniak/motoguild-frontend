import React from "react";
import RemoveCookie from "../hooks/removeCookie";

export default function Logout() {
  function handleClick() {
    localStorage.removeItem("token");
  }
  return <span onClick={handleClick}>Logout</span>;
}
