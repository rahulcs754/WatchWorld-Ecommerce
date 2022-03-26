import axios from "axios";

export const addCart = async (product, token) => {
  try {
    const { data, status } = await axios.post(
      "api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      alert("Product added into cart");
    }
    return data;
  } catch (error) {
    return false;
  }
};
