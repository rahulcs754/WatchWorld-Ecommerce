export const addToCart = (state, data) => {
    const { category } = state;
  const productList = [...data];

  if (category[0] === true || category[1] === true) {
    return productList.filter((brand, index) => state.category[index] === true);
  }
  return state;
}


