import { createContext, useContext, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";

import { useEffect } from "react";

import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const IntialValue = {
    data: [],
    productCategory: [],
    loading: false,
    error: false,
  };

  const [ProductState, ProductDispatch] = useReducer(
    ProductReducer,
    IntialValue
  );

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products");
      ProductDispatch({ type: "ADD_PRODUCT_LIST", payload: data.products });

      const getCategory = await axios.get("/api/categories");
      ProductDispatch({
        type: "ADD_CATEGORY_LIST",
        payload: getCategory.data.categories,
      });
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ ProductState, ProductDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
