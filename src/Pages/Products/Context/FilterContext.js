import { createContext, useContext, useReducer } from "react";
import FilterReducer from "../Reducer/FilterReducer";
import { useProduct } from "./ProductContext";

import {
  composeFunc,
  getSortedProducts,
  getRatingFilter,
  getProductByPrice,
  getProductCategory,
} from "../utitlities";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { ProductState } = useProduct();
  const { data, productCategory } = ProductState;
  const IntialValue = {
    priceRange: 0,
    category: [],
    rating: "",
    sortBy: "",
  };

  const [FilterState, FilterDispatch] = useReducer(FilterReducer, IntialValue);

  const ProductListFiltered = composeFunc(
    FilterState,
    getProductByPrice,
    getRatingFilter,
    getSortedProducts,
    getProductCategory
  )(data);

  return (
    <FilterContext.Provider
      value={{ ProductListFiltered, FilterState, FilterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
