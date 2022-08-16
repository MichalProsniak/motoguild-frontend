import React from "react";
import ReactDOM from "react-dom/client";
import CreateRide from "./CreateRide";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("create-ride")).render(
  <React.StrictMode>
    <CreateRide />
  </React.StrictMode>
);
