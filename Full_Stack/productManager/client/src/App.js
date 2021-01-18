import React from "react";
import Main from "./views/Main";
import { Router } from "@reach/router";
import Detail from "./views/Detail";
import Update from "./views/Update";
function App() {
  return (
    <div>
      <Router>
        <Main path="product/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit" />
      </Router>
    </div>
  );
}
export default App;
