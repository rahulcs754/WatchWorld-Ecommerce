export const IsSelected = (ProductState, data) => {
  const { category } = ProductState;
  const productList = [...data];
  if (category.man || category.woman) {
    return productList.filter(
      (idealFor, index) => idealFor[index] === category.man
    );
  }
  return productList;
};
