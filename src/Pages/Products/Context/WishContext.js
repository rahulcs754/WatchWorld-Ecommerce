import { createContext, useContext, useReducer } from "react";
import WishlistReducer from "../Reducer/WishlistReducer";

const WishContext = createContext();

const WishProvider = ({ children }) => {
  const intialValue = {
    wishlist: [],
    loader: true,
    error: "",
  };

  const [WishlistState, WishlistDispatch] = useReducer(
    WishlistReducer,
    intialValue
  );

  return (
    <WishContext.Provider value={{ WishlistState, WishlistDispatch }}>
      {children}
    </WishContext.Provider>
  );
};

const useWish = () => useContext(WishContext);

export { useWish, WishProvider };
