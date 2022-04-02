const CartReducer = (state, action) => {
  const { payload } = action;

  const findObj = state.cart.find((element) => element._id === payload?._id);

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        cart: action.payload,
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        cart: action.payload,
      };

    case "CALCULATE_TOTAL_AMOUNT":
      return {
        ...state,
        total: state.cart.reduce((acc, curr) => {
          return Number(acc) + Number(curr.amount * curr.qty);
        }, 0),
      };
    default:
      return state;
  }
};

export { CartReducer };
