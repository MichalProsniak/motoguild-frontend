import React from "react";
import RemoveCookie from "../hooks/removeCookie";

export default function Logout() {
  function handleClick() {
    RemoveCookie("refreshToken");
  }
  return <span onClick={handleClick}>Logout</span>;
}
