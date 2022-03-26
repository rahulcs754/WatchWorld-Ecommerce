import axios from "axios";

export const getWishlist = async (token) => {
  try {
    const { data, status } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      return { data, status };
    }
  } catch (error) {
    return false;
  }
};
