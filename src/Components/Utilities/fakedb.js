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
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (index in shoppingCart) {
      // deleting a specific property form an object
      delete shoppingCart[index];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export { addToDB, removeFromDB };
