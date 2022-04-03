import axios from "axios";
import { toast } from "react-toastify";
export const incrementCartQty = async (productId, token, CartDispatch) => {
  try {
    const {
      data: { cart },
      status,
    } = await axios.post(
      `/api/user/cart/${productId}`,
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
};
