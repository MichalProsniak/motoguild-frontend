import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
