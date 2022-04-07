import { useProduct, useCart, useWish } from "../Products/Context";
import { useAuthData } from "../../Context/AuthContext";
import { addCart, removeWishlist, getWishlist } from "../../ApiService";
import { Rating } from "../../Components/Rating";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Wishlist = () => {
  const navigate = useNavigate();
  const { WishlistState, WishlistDispatch } = useWish();
  const { ProductDispatch } = useProduct();
  const { CartState, CartDispatch } = useCart();
  const { userAuth } = useAuthData();
  const { isUserLoggedIn, encodedToken } = userAuth;

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  const addHandler = async (productDetails) => {
    // api call to add item in cart
    addCart(
      productDetails,
      encodedToken,
      CartDispatch,
      ProductDispatch,
      CartState
    );
  };

  // remove from wishlist product
  const removeHandler = (productId) => {
    // api call to add item in cart
    removeWishlist(productId, encodedToken, WishlistDispatch, ProductDispatch);
  };

  return (
    <>
      <div className="flex flex-center mt-l mb-l f-m">
        <h3>My WishList ({WishlistState.wishlist.length}) </h3>
      </div>

      <div className="rs-row margin-auto width-80 wishlist-container">
        {WishlistState.wishlist.length === 0 && (
          <div className="col-sm-12 margin-auto f-m">
            You've no item in your wishlist
          </div>
        )}

        {WishlistState.wishlist &&
          WishlistState.wishlist.map(
            ({ _id, image, title, price, mrpPrice, rating }) => {
              const DiscountPercentage = (
                ((mrpPrice - price) / mrpPrice) *
                100
              ).toFixed();

              const productDetails = { _id: _id, qty: 1, amount: price };

              return (
                <div className="col-sm-4">
                  <div className="card card-overlay">
                    <img
                      src={image}
                      className="card-image img-c"
                      alt="Card-Image"
                    />
                    <div className="card-header">
                      <div className="card-title">{title}</div>
                    </div>
                    <div className="card-info">
                      <p className="card-price">${price}</p>
                      <p className="mrp-price">${mrpPrice}</p>
                      <p className="card-discount">{`${DiscountPercentage} % off`}</p>
                      <Rating starValue={rating} />
                    </div>
                    <div className="card-footer ">
                      <button
                        className="btn btn-primary "
                        onClick={() => addHandler(productDetails)}
                      >
                        <i className="fas  fa-shopping-cart" /> Add to Cart
                      </button>
                      <button
                        className="btn btn-warning "
                        onClick={() => removeHandler(_id)}
                      >
                        <i className="fas  fa-shopping-cart" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </>
  );
};
