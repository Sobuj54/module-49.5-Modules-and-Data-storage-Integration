import React from "react";

const Product = (props) => {
  const { id, name, price } = props.product;
  return (
    <div>
      <h2>Product name: {name}</h2>
      <h3>Price : {price}</h3>
      <h4>ID :{id}</h4>
    </div>
  );
};

export default Product;
