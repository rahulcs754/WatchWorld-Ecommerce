import { useCart } from "../Products/Context/CartContext";

import { CartCounter, ProductList, CartTotal } from "./Components";

export const Cart = () => {
  const { CartState } = useCart();
  const { cart } = CartState;
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
