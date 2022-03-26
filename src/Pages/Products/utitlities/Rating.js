const getRatingFilter = (ProductState, data) => {
    const { rating } = ProductState;
    const productList = [...data];
    if (rating !== 0) {
      return productList.filter((item) => item.rating >= rating);
    }
  
    return productList;
  };
  
  export { getRatingFilter };
  