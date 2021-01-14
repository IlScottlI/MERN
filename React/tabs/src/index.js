import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./compnoents/NavBar";
import PlainTabsApp from "./views/PlainTabs/App";
import FancyTabsApp from "./views/FancyTabs/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const navItems = [
  { label: "Plain Tabs", link: "/tabs" },
  { label: "Fancy Tabs", link: "/fancy-tabs" },
];
ReactDOM.render(
  <BrowserRouter>
    <NavBar navItems={navItems} />
    <Switch>
      <Route path="/tabs" render={(props) => <PlainTabsApp {...props} />} />
      <Route
        path="/fancy-tabs"
        render={(props) => <FancyTabsApp {...props} />}
      />
      <Redirect from="/" to="/tabs" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
