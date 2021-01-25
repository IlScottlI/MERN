import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Features-Boxed.css";

ReactDOM.render(
  <React.StrictMode>
    <App baseURL="http://10.0.0.199:8000" />
  </React.StrictMode>,
  document.getElementById("root")
);
