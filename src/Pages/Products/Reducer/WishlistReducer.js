const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_AND_REMOVE_WISHLIST":
      const { payload } = action;
      const findObj = state.wishlist.includes(payload);
      if (findObj === false) {
        return { ...state, wishlist: [...state.wishlist, payload] };
      } else {
        return {
          ...state,
          wishlist: state.wishlist.filter((item) => item !== payload),
        };
      }

    default:
      return state;
  }
};

export default WishlistReducer;
