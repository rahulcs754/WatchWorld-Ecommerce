import axios from "axios";

export const getCart = async (token) => {
  try {
    const {
      data: { cart },
      status,
    } = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      alert("Delete from Cart");
    }
    return { cart, status };
  } catch (error) {
    return false;
  }
};
