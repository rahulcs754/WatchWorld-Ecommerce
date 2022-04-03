import axios from "axios";
import { toast } from "react-toastify";
export const removeCart = async (
  productId,
  token,
  CartDispatch,
  ProductDispatch
) => {
  try {
    const {
      data: { cart },
      status,
    } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });

    if (status === 200 || status === 201) {
      //remove product in cart
      CartDispatch({
        type: "REMOVE_TO_CART",
        payload: cart,
      });

      ProductDispatch({
        type: "INCREASE_PRODUCT",
        payload: productId,
      });

      ProductDispatch({
        type: "IS_SELECTED",
        payload: productId,
      });
      toast.success("Remove Item from the cart");
    }
  } catch (error) {
    toast.warning("Oops Something Went Wrong");
  }
};
