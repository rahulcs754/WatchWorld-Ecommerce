import axios from "axios";

export const addWishlist = async (productId, token) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/wishlist",
      { product: { _id: productId } },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      return { data, status };
    }
  } catch (error) {
    return false;
  }
};
