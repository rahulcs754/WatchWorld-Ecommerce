import axios from "axios";
import { toast } from "react-toastify";
export const addWishlist = async (
  productDetails,
  token,
  WishlistDispatch,
  ProductDispatch,
  WishlistState
) => {
  const findItem = WishlistState.wishlist.find(
    (item) => item._id === productDetails._id
  );
  if (findItem === undefined) {
    // Here added into wishlist
    try {
      const {
        data: { wishlist },
        status,
      } = await axios.post(
        "/api/user/wishlist",
        { product: productDetails },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (status === 200 || status === 201) {
        WishlistDispatch({ type: "ADD_PRODUCT_WISHLIST", payload: wishlist });
        ProductDispatch({ type: "IS_LIKED", payload: productDetails._id });
        toast.success("Add item to wishlist");
      }
    } catch (error) {
      toast.warning("Oops something went wrong");
    }
  } else {
    //Show product already exits
    try {
      const {
        data: { wishlist },
        status,
      } = await axios.delete(`/api/user/wishlist/${productDetails._id}`, {
        headers: {
          authorization: token,
        },
      });

      if (status === 200 || status === 201) {
        WishlistDispatch({
          type: "REMOVE_PRODUCT_WISHLIST",
          payload: wishlist,
        });
        ProductDispatch({ type: "IS_LIKED", payload: productDetails._id });
        toast.warning("Remove item to wishlist", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.warning("Oops something went wrong");
    }
  }
};
