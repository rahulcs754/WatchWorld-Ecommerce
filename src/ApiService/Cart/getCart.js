import axios from "axios";
import { useState, useEffect } from "react";

export const getCart = async () => {
  const [cart, setCart] = useState({
    cartResponse: [],
    cartError: "",
    cartLoading: true,
  });

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const {
        data: { cart },
        status,
      } = await axios.get("/api/user/cart", {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      });
      if (status === 200 || status === 201) {
        setCart((prev) => ({ ...prev, cartResponse: cart }));
      }
    } catch (error) {
      setCart((prev) => ({ ...prev, cartError: error }));
    } finally {
      setCart((prev) => ({ ...prev, cartLoading: false }));
      setCartLoading(false);
    }
  };

  const { cartResponse, cartError, cartLoading } = cart;
  return { cartResponse, cartError, cartLoading };
};
