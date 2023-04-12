// manage data in local storage

const manageDB = (index) => {
  const quantity = localStorage.getItem(index);
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(index, newQuantity);
  } else {
    localStorage.setItem(index, 1);
  }
};

export { manageDB };
