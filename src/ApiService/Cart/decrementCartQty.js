import axios from "axios";
import { toast } from "react-toastify";
export const decrementCartQty = async (
  productId,
  token,
  qty,
  CartDispatch,
  ProductDispatch
) => {
  try {
    if (qty < 2) {
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
        toast.warning("Remove Item from the cart");
      }
    } else {
      const {
        data: { cart },
        status,
      } = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "decrement" } },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200 || status === 201) {
        toast.success("Decrease item quantity in the cart");
        CartDispatch({
          type: "DECREMENT_QTY",
          payload: cart,
        });
      }
    }
  } catch (error) {
    toast.warning("Oops Something went wrong");
  }
};
