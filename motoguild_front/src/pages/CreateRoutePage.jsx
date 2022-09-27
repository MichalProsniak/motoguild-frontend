import NewRouteBody from "../components/NewRouteBody";
import React from "react";

export default function CreateRoutePage() {
  return (
    <div className="navbar-margin">
      <div className="container-custom">
        <h1 className="header-custom-font">Dodaj trasę</h1>
        <NewRouteBody />
      </div>
    </div>
  );
}
