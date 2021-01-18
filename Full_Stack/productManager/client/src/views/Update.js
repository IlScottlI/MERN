import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import AlertDismissible from "../components/AlertDismissible";
import "../components/Product.css";
export default (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [variant, setVariant] = useState("success");
  const [message, setMessage] = useState("");
  const [header, setHeader] = useState("");
  const [showClose, setShowClose] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id).then((res) => {
      setTitle(res.data.title);
      setPrice(res.data.price);
      setDescription(res.data.description);
    });
  }, []);
  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/product/" + id, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        setShowClose(false);
        setVariant("success");
        setHeader("Success");
        setMessage(JSON.stringify(`${res.data.title} updated!`));
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      });
  };
  return (
    <div className="container">
      <Link className="btn btn-primary mt-5" to={`/product/${id}`}>
        Details
      </Link>

      <div className="contact-clean">
        <form onSubmit={updateProduct}>
          <h1 className="text-center">Product Manager</h1>
          <h4 className="text-center mb-3">Update Product</h4>
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
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
