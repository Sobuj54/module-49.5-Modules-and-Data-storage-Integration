import React from "react";
import Product from "../Product/Product";

const Products = () => {
  const products = [
    {
      index: 0,
      age: 37,
      name: "Vera York",
    },
    {
      index: 1,
      age: 34,
      name: "Mitchell Lott",
    },
    {
      index: 2,
      age: 29,
      name: "Ebony Duke",
    },
    {
      index: 3,
      age: 31,
      name: "Rowe Vega",
    },
    {
      index: 4,
      age: 35,
      name: "Janis Collins",
    },
    {
      index: 5,
      age: 21,
      name: "Craig Wise",
    },
    {
      index: 6,
      age: 38,
      name: "Penny Beasley",
    },
  ];
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
