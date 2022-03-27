import axios from "axios";

export const removeCart = async (productId, token) => {
  try {
    const { data, status } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      return { error: 1, data, status };
    }
  } catch (error) {
    return { error: 1 };
  }
};
