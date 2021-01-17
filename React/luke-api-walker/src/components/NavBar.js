import React from "react";
import NumericInput from "react-numeric-input";
import { Link } from '@reach/router';

export default function NavBar(props) {
  const handleForm = (e) => {
    props.setGetResult(!props.getResult)
  };

  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-search fulid">
      <div className="container">
        <a className="navbar-brand" href="/">
          Luke APIwalker
        </a>
        <button
          data-toggle="collapse"
          data-target="#navcol-1"
          className="navbar-toggler"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav"></ul>
          <form className="form-inline mr-auto" onSubmit={handleForm}>
            <label className="text-secondary mr-3">Search for:</label>
            <select
              className="form-control bg-lightgray"
              value={props.selectedResource}
              onChange={(e) => {
                props.setSelectedResource(e.target.value);
              }}
            >
              {props.resources.map((item) => {
                return (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <label className="text-secondary ml-2 mr-3">ID:</label>
            <NumericInput
              className="form-control bg-lightgray"
              min={1}
              max={100}
              value={props.resourceId}
              onChange={(e) => {
                props.setResourceId(e);
              }}
            />
            <Link 
                className="btn btn-primary ml-3 pl-3 pr-3" 
                type="button" 
                to={`/${props.selectedResource}/${props.resourceId}`} 
                onClick={handleForm}>
              Search
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
