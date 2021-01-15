import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <Router>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
        </div>
      </nav>
    </Router>
  );
}
