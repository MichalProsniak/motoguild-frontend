import React from "react";
import RemoveCookie from "../hooks/removeCookie";
import { useNavigate } from 'react-router';

export default function Logout() {
  const navigate = useNavigate()
  function handleClick() {
    localStorage.removeItem("token");
    navigate('/home')
  }
  return <span onClick={handleClick}>Logout</span>;
}
