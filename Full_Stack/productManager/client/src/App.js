import React from "react";
import Main from "./views/Main";
import { Router } from "@reach/router";
import Detail from "./views/Detail";
function App() {
  return (
    <div>
      <Router>
        <Main path="product/" />
        <Detail path="product/:id" />
      </Router>
    </div>
  );
}
export default App;
