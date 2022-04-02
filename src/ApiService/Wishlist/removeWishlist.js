import axios from "axios";

export const removeWishlist = async (productId, token) => {
  try {
    const { data, status } = axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      alert("Remove From Wishlist");
      return { data, status };
    }
  } catch (error) {
    return false;
  }
};
