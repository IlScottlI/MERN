import React, { useState } from "react";
import AlertDismissible from "./AlertDismissible";
import axios from "axios";
import "./Product.css";
export default () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("success");
  const [message, setMessage] = useState("");
  const [header, setHeader] = useState("");
  const [showClose, setShowClose] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        setShowClose(false);
        setVariant("success");
        setHeader("Success");
        setMessage(JSON.stringify(`${res.data.title} added!`));
        setShow(true);
        setTitle("");
        setPrice("");
        setDescription("");
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setVariant("danger");
        setShow(true);
        setHeader(err.name);
        setMessage(err.message);
        setShowClose(true);
      });
  };
  return (
    <>
      <div className="contact-clean">
        <form onSubmit={onSubmitHandler}>
          <h2 className="text-center">Product Manager</h2>
          <AlertDismissible
            setShow={setShow}
            show={show}
            variant={variant}
            message={message}
            header={header}
            showClose={showClose}
          />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="Title"
              placeholder="Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="price"
              placeholder="Price"
              inputMode="numeric"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="description"
              placeholder="Description"
              rows="14"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group d-xl-flex justify-content-xl-end">
            <button className="btn btn-primary" type="submit">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
