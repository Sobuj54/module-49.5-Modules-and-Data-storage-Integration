// manage data in local storage

const addToDB = (index) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  const quantity = shoppingCart[index];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[index] = newQuantity;
  } else {
    shoppingCart[index] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDB = (index) => {
  console.log("removed form db", index);
};

export { addToDB, removeFromDB };
