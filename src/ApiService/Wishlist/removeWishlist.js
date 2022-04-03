import axios from "axios";
import { toast } from "react-toastify";
export const removeWishlist = async (
  productId,
  token,
  WishlistDispatch,
  ProductDispatch
) => {
  try {
    const {
      data: { wishlist },
      status,
    } = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });

    if (status === 200 || status === 201) {
      WishlistDispatch({ type: "REMOVE_PRODUCT_WISHLIST", payload: wishlist });
      ProductDispatch({ type: "IS_LIKED", payload: productId });
      toast.success("Add item to wishlist", {
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
