import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewRideBody from "./components/NewRideBody";

function CreateRide() {

  return (
    <div className="App">
      <Navbar />
      <NewRideBody />
    </div>
  );
}

export default CreateRide;
