const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_LIST":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_CATEGORY_LIST":
      return {
        ...state,
        productCategory: action.payload,
      };
    case "INCREASE_PRODUCT":
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload
            ? { ...item, stock: item.stock + 1 }
            : item
        ),
      };
    case "DECREASE_PRODUCT_QTY":
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload
            ? { ...item, stock: item.stock - 1 }
            : item
        ),
      };
    case "IS_LIKED":
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload
            ? { ...item, isLiked: !item.isLiked }
            : item
        ),
      };

    case "IS_SELECTED":
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload
            ? { ...item, isSelected: !item.isSelected }
            : item
        ),
      };
    case "ADD_AND_REMOVE_ERROR":
      return {
        ...state,
        error: true,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
