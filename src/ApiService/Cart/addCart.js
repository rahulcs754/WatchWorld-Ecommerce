import axios from "axios";
import { toast } from "react-toastify";

export const addCart = async (
  product,
  token,
  CartDispatch,
  ProductDispatch
) => {
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
      toast.success("Add item to cart", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  } catch (error) {
    toast.warning("Oops something went wrong", {
      position: "bottom-right",
      autoClose: 2000,
    });
  }
};
