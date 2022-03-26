import { act } from "@testing-library/react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "STAR_RATING":
      return { ...state, rating: action.payload };
    case "PRODUCT_CATEGORY":
      return state.category.includes(action.payload)
        ? {
            ...state,
            category: state.category.filter((item) => item !== action.payload),
          }
        : { ...state, category: [...state.category, action.payload] };

    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "CLEAR":
      return {
        ...state,
        priceRange: 0,
        category: [],
        rating: "",
        sortBy: "",
      };

    default:
      return state;
  }
};

export default FilterReducer;
