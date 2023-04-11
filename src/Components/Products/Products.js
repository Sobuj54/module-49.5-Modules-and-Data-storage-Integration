import React from "react";
import Product from "../Product/Product";

const Products = () => {
  const products = [
    { id: 1, name: "sari", price: 5000 },
    { id: 2, name: "punjabi", price: 2000 },
    { id: 3, name: "dhuti", price: 1000 },
    { id: 4, name: "shirt", price: 500 },
    { id: 5, name: "pant", price: 800 },
  ];
  return (
    <div>
      <h1>This is products component.</h1>
      {products.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Products;
