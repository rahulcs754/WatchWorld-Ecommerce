import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { CartReducer } from "../Reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const intialValue = {
    cart: [],
    total: 0,
  };

  const [CartState, CartDispatch] = useReducer(CartReducer, intialValue);

  useEffect(() => {
    CartDispatch({ type: "CALCULATE_TOTAL_AMOUNT" });
  }, [CartState.cart]);

  return (
    <CartContext.Provider value={{ CartState, CartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
