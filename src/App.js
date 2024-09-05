import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

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

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
