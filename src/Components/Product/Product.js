import React from "react";
import "./Product.css";
import { manageDB } from "../Utilities/fakebd";

const Product = (props) => {
  const { index, name, age } = props.product;

  const cart = (index) => {
    manageDB(index);
  };
  // this function is used to understand better.
  //const cartWithPara = () => cart(index);

  return (
    <div className="product">
      <h2>Person name: {name}</h2>
      <h3>Age : {age}</h3>
      <h4>ID :{index}</h4>
      {/* <button onClick={cartWithPara}>Add to cart</button> */}
      <button onClick={() => cart(index)}>Purchase</button>
    </div>
  );
};

export default Product;
