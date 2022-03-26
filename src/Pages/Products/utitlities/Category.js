const getProductCategory = (ProductState, data) => {
  const { category } = ProductState;

  const productList = [...data];
  if (category.length !== 0) {
    return productList.filter(({ categoryName }) =>
      category.includes(categoryName)
    );
  }

  return productList;
};

export { getProductCategory };
