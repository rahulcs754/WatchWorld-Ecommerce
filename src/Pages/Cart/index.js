import { useCart } from "../Products/Context/CartContext";
import { useAuthData } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartCounter, ProductList, CartTotal } from "./Components";
import { useEffect } from "react";

export const Cart = () => {
  const navigate = useNavigate();
  const { userAuth } = useAuthData();
  const { isUserLoggedIn } = userAuth;
  const { CartState } = useCart();
  const { cart } = CartState;

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <CartCounter {...CartState} />

      {cart.length !== 0 ? (
        <div className="mycart-box margin-auto">
          <ProductList {...CartState} />
          <CartTotal {...CartState} />
        </div>
      ) : (
        <div className="mycart-box margin-auto">
          <img
            src="https://res.cloudinary.com/diyo6qdy1/image/upload/v1647703955/e-comm/extraimg/bagresizecompress-removebg-preview_yeqfby.png"
            className="img-src"
            height="400"
          />
        </div>
      )}
    </>
  );
};
