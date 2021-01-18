import React from "react";
import "./ProductList.css";
import { Link } from "@reach/router";
export default function ProductList(props) {
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
