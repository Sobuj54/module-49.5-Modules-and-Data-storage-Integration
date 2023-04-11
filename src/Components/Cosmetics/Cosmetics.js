import React from "react";
import { add, multi } from "../Utilities/Utilities";

const Cosmetics = () => {
  const first = 44;
  const second = 33;
  const total = add(first, second);
  const multiply = multi(first, second);
  return (
    <div>
      <h3>This is cosmetics component.</h3>
      <h4>Total : {total}</h4>
      <h4>Multiplied :{multiply}</h4>
    </div>
  );
};

export default Cosmetics;
