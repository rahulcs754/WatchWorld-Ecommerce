import { useWish } from "../../Products/Context/WishContext";
import { useProduct } from "../../Products/Context/ProductContext";
import { useCart } from "../../Products/Context/CartContext";

import { useAuthData } from "../../../Context/AuthContext";

import { removeCart, removeWishlist } from "../../../ApiService";

export const Product = ({
  _id,
  image,
  title,
  price,
  mrpPrice,
  isLiked,
  qty,
}) => {
  const { WishlistDispatch } = useWish();
  const { ProductDispatch } = useProduct();
  const { CartDispatch } = useCart();
  const { userAuth } = useAuthData();
  const { isUserLoggedIn, encodedToken } = userAuth;
  const productDetails = { _id, qty: 1, amount: price };

  const removeHandler = (productDetails) => {
    // using api remove product in cart
    removeCart(productDetails._id, encodedToken);

    //remove product in cart
    CartDispatch({
      type: "REMOVE_TO_CART",
      payload: productDetails._id,
    });

    ProductDispatch({
      type: "INCREASE_PRODUCT",
      payload: productDetails._id,
    });

    ProductDispatch({
      type: "IS_SELECTED",
      payload: productDetails._id,
    });
  };

  const wishlistHandler = (productId) => {
    // added using api
    addWishlist(productDetails._id, encodedToken);
    // remove wishlist using context
    WishlistDispatch({ type: "ADD_AND_REMOVE_WISHLIST", payload: productId });
    ProductDispatch({ type: "IS_LIKED", payload: productId });
  };

  const incrementHandler = (productId) => {
    CartDispatch({
      type: "INCREMENT_QTY",
      payload: productId,
    });
  };

  const decrementHandler = (productId) => {
    if (qty < 2) {
      CartDispatch({
        type: "REMOVE_TO_CART",
        payload: productDetails._id,
      });
    } else {
      CartDispatch({
        type: "DECREMENT_QTY",
        payload: productId,
      });
    }
  };

  return (
    <div className="card card-rs mb-s">
      <div className="card-part-horizontal">
        <div className="card-img-horizontal">
          <img src={image} className="card-image-hr" alt={image} />
        </div>
        <div className="card-header-horizontal">
          <div className="card-title">{title}</div>
          <div className="card-info">
            <p className="card-price f-s font-xl">${price}</p>
            <p className="mrp-price">${mrpPrice}</p>
          </div>
          <div className="text-center flex flex-row mb-s">
            Qty :
            <button
              className="qtyplus plus pointer-text"
              onClick={() => decrementHandler(_id)}
            >
              -
            </button>
            <input type="text" className="qty" value={qty} />
            <button
              className="qtyplus plus pointer-text"
              onClick={() => incrementHandler(_id)}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary width-100 "
            onClick={() => wishlistHandler(_id)}
          >
            {isLiked ? "Remove Wishlist" : "Add To Wishlist"}
          </button>
          <button
            className="btn btn-warning width-100"
            onClick={() => removeHandler(productDetails)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
