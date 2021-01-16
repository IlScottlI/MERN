import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Router } from "@reach/router";
import Welcome from "./components/Welcome";
import Number from "./components/Number";
import NavBarr from "./components/NavBarr";
function App(props) {
  console.log(props);
  const myVar = 10 < 20 ? (5 < 10 ? true : false) : false;
  return (
    <div className="container mt-5">
      <NavBarr />
      <Router>
        <Welcome path="/home" />
        <Number path="/:id" />
        <Number path="/:id/:text/:background" />
      </Router>
    </div>
  );
}

export default App;
