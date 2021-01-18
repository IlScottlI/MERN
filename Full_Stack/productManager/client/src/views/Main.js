import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

export default () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  }, []);
  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };
  return (
    <div className="container">
      <ProductForm />
      <h1 className="text-center mb-4">All Products:</h1>
      {loaded && (
        <ProductList products={products} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};
