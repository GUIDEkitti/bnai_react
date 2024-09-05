import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//css
const boostrapCDN = document.createElement("link");
boostrapCDN.rel = "stylesheet";
boostrapCDN.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
document.head.appendChild(boostrapCDN);

//jvscript
const boostrapScript = document.createElement("script");
boostrapScript.src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
boostrapScript.async = true;
document.body.appendChild(boostrapScript);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
