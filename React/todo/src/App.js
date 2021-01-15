import "./App.css";
import React from "react";
import Tasks from "./views/Tasks";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar title="TODOs" />
      <div className="container">
        <div className="form-row row-cols-1 justify-content-center align-items-center">
          <div className="col-xl-7 pl-1 pr-1">
            <Tasks />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
