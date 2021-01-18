import React from "react";
import "./ProductList.css";
import axios from "axios";
import { Link } from "@reach/router";
export default function ProductList(props) {
  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <ul className="list-unstyled text-center">
        {props.products.map((product, index) => {
          return (
            <li key={index} className="m-2">
              <Link
                className="text-secondary text-underline m-3"
                to={product._id}
              >
                {product.title}
              </Link>
              |
              <a
                className="btn-sm ml-2 btn-danger"
                onClick={(e) => {
                  deleteProduct(product._id);
                }}
              >
                Delete
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
