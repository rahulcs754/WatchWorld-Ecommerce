const WishlistReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "ADD_PRODUCT_WISHLIST":
      const findObj = state.wishlist.includes(payload);
      if (findObj === false) {
        return { ...state, wishlist: [...state.wishlist, payload] };
      } else {
        return {
          ...state,
          wishlist: state.wishlist.filter((item) => item !== payload),
        };
      }

    case "REMOVE_PRODUCT_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item !== payload),
      };

    default:
      return state;
  }
};

export default WishlistReducer;
