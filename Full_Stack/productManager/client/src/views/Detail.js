import React, { useEffect, useState } from "react";
import axios from "axios";
export default (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + props.id)
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <div className="container">
      <a className="btn btn-primary mt-5" href="/product">
        Back
      </a>
      <div className="contact-clean">
        <form>
          <h2 className="text-center">Product Manager</h2>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </form>
      </div>
    </div>
  );
};
