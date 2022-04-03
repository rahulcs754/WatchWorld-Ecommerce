const WishlistReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "ADD_PRODUCT_WISHLIST":
      return { ...state, wishlist: payload };

    case "REMOVE_PRODUCT_WISHLIST":
      return { ...state, wishlist: payload };

    default:
      return state;
  }
};

export default WishlistReducer;
