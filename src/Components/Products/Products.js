import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>This is products component.</h1>
      {products.map((product) => (
        <Product product={product} key={product.index}></Product>
      ))}
    </div>
  );
};

export default Products;
