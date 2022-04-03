import axios from "axios";
import { toast } from "react-toastify";

export const addCart = async (
  product,
  token,
  CartDispatch,
  ProductDispatch,
  CartState
) => {
  const findItem = CartState.cart.find((item) => item._id === product._id);

  if (findItem === undefined) {
    try {
      const {
        data: { cart },
        status,
      } = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 200 || status === 201) {
        CartDispatch({ type: "ADD_TO_CART", payload: cart });

        ProductDispatch({
          type: "DECREASE_PRODUCT_QTY",
          payload: product._id,
        });

        ProductDispatch({
          type: "IS_SELECTED",
          payload: product._id,
        });
        toast.success("Add item to cart");
      }
    } catch (error) {
      toast.warning("Oops something went wrong");
    }
  } else {
    try {
      const {
        data: { cart },
        status,
      } = await axios.post(
        `/api/user/cart/${product._id}`,
        { action: { type: "increment" } },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200 || status === 201) {
        CartDispatch({
          type: "INCREMENT_QTY",
          payload: cart,
        });
        toast.success("Increase item quantity in the cart");
      }
    } catch (error) {
      toast.warning("Oops Something went wrong");
    }
  }
};
