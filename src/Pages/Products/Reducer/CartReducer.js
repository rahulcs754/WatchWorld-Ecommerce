const CartReducer = (state, action) => {
  const { payload } = action;

  const findObj = state.cart.find((element) => element._id === payload?._id);

  switch (action.type) {
    case "ADD_TO_CART":
      if (findObj === undefined) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === payload?._id
              ? { ...findObj, qty: findObj.qty + 1 }
              : item
          ),
        };
      }

    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p._id !== payload),
      };

    case "CALCULATE_TOTAL_AMOUNT":
      return {
        ...state,
        total: state.cart.reduce((acc, curr) => {
          return Number(acc) + Number(curr.amount);
        }, 0),
      };
    default:
      return state;
  }
};

export { CartReducer };
