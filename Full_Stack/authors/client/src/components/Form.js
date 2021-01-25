import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@reach/router";
import Nav from "./Nav";
import axios from "axios";

export default function Form(props) {
  const { link, linkTitle, codeText, path, id, baseURL } = props;
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    switch (path) {
      case "/new":
        axios
          .post(baseURL + "/api/authors/new", {
            name,
          })
          .then((res) => {
            if (res.data.error) {
              setNameError(res.data.error.errors.name.message);
            } else {
              setNameError(null);
              navigate("/");
            }
          })
          .catch((err) => console.log(err));
        break;

      default:
        axios
          .put(baseURL + "/api/authors/update/" + id, {
            name,
          })
          .then((res) => {
            if (res.data.error) {
              setNameError(res.data.error.errors.name.message);
            } else {
              setNameError(null);
              navigate("/");
            }
          })
          .catch((err) => console.log(err));
        break;
    }
  };
  useEffect(() => {
    if (id) {
      axios.get(baseURL + "/api/authors/" + id).then((res) => {
        if (res.data.result) {
          setName(res.data.result.name);
        } else {
          setNotFound(true);
        }
      });
    }
  }, [id]);
  const Form = (
    <form onSubmit={onSubmitHandler} id="form">
      {nameError ? <label className="text-danger">{nameError}</label> : ""}
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleName}
        />
      </div>
      <Link className="btn btn-primary btn-sm ml-2" type="button" to={link}>
        Cancel
      </Link>
      <button className="btn btn-primary btn-sm ml-3" type="submit">
        Submit
      </button>
    </form>
  );

  const Error = (
    <>
      <h5>
        We're sorry, but we could not find the author you are looking for. Would
        you like to add this author to our database?
      </h5>
      <Link to="/new">Create Author</Link>
    </>
  );

  return (
    <>
      <Nav link={link} linkTitle={linkTitle} codeText={codeText} />
      {notFound ? Error : Form}
    </>
  );
}
