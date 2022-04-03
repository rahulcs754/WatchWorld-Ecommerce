import { useWish, useProduct, useCart } from "../../Products/Context";
import { useAuthData } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  removeCart,
  removeWishlist,
  decrementCartQty,
  addWishlist,
  incrementCartQty,
} from "../../../ApiService";
import { useEffect } from "react";

export const Product = (item) => {
  const { _id, image, title, price, mrpPrice, isLiked, qty } = item;
  const navigate = useNavigate();
  const { WishlistState, WishlistDispatch } = useWish();
  const { ProductDispatch } = useProduct();
  const { CartDispatch } = useCart();
  const {
    userAuth: { encodedToken, isUserLoggedIn },
  } = useAuthData();

  const productDetails = { _id, qty: 1, amount: price };

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  const removeHandler = (productDetails) => {
    // using api remove product in cart
    removeCart(productDetails._id, encodedToken, CartDispatch, ProductDispatch);
  };

  const wishlistHandler = (productDetails) => {
    // added using api
    addWishlist(
      productDetails,
      encodedToken,
      WishlistDispatch,
      ProductDispatch,
      WishlistState
    );
  };

  const incrementHandler = (productId) => {
    //api call
    incrementCartQty(productId, encodedToken, CartDispatch);
  };

  const decrementHandler = (productId) => {
    decrementCartQty(
      productId,
      encodedToken,
      qty,
      CartDispatch,
      ProductDispatch
    );
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
            onClick={() => wishlistHandler(item)}
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
