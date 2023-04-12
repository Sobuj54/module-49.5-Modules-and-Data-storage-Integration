// manage data in local storage

const manageDB = (index) => {
  let shoppingCart = {};
  const quantity = shoppingCart[index];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[index] = newQuantity;
    // localStorage.setItem(index, newQuantity);
  } else {
    // localStorage.setItem(index, 1);
    shoppingCart[index] = 1;
  }

  localStorage.setItem(index, JSON.stringify(shoppingCart));
};

export { manageDB };
