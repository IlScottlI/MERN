import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
export default (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + props.id)
      .then((res) => setProduct(res.data));
  }, []);
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        navigate(`/product`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <Link className="btn btn-primary mt-5" to="/product">
        Back
      </Link>
      <Link
        className="btn btn-primary mt-5 float-right"
        to={`/product/${props.id}/edit`}
      >
        Edit
      </Link>
      <div className="contact-clean">
        <form>
          <h1 className="text-center">Product Manager</h1>
          <h4 className="text-center">Details</h4>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </form>
        <a
          className="btn btn-danger mt-5 float-right"
          onClick={(e) => {
            deleteProduct(props.id);
          }}
        >
          DELETE
        </a>
      </div>
    </div>
  );
};
