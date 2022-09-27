import NewEventBody from "../components/NewEventBody";
import React from "react";

export default function CreateEventPage() {
  return (
    <div className="navbar-margin">
      <div className="container-custom">
        <h1 className="page-title">Dodaj wydarzenie</h1>
        <NewEventBody />
      </div>
    </div>
  );
}
