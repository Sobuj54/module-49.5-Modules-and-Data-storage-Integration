import React from "react";

const Product = (props) => {
  const { index, name, age } = props.product;
  return (
    <div>
      <h2>Person name: {name}</h2>
      <h3>Age : {age}</h3>
      <h4>ID :{index}</h4>
    </div>
  );
};

export default Product;
