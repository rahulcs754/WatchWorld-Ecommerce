const getProductByPrice = (ProductState, data) => {
    const productList = [...data];
    const { priceRange } = ProductState;
  
    if (priceRange !== 0) {
      return productList.filter(({ price }) => price < Number(priceRange));
    }
    return productList;
  };
  
export { getProductByPrice };
  