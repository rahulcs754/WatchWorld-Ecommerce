import { useProduct } from "../../Products/Context/ProductContext";
import { useWish } from "../../Products/Context/WishContext";
import { useCart } from "../../Products/Context/CartContext";
import { useAuthData } from "../../../Context/AuthContext";
import { addCart, removeWishlist, getWishlist } from "../../../ApiService";
import { Rating } from "../../../Components/Rating";
import { useNavigate } from "react-router-dom";

const WishlistProducts = () => {
  const navigate = useNavigate();
  const { WishlistState, WishlistDispatch } = useWish();
  const { ProductState, ProductDispatch } = useProduct();
  const { CartDispatch } = useCart();
  const { userAuth } = useAuthData();
  const { isUserLoggedIn, encodedToken } = userAuth;

  if (isUserLoggedIn) {
    navigate("/login");
  }

  const addHandler = async (productDetails) => {
    // api call to add item in cart
    await addCart(productDetails, encodedToken);

    CartDispatch({ type: "ADD_TO_CART", payload: productDetails });

    ProductDispatch({
      type: "DECREASE_PRODUCT_QTY",
      payload: productDetails._id,
    });

    ProductDispatch({
      type: "IS_SELECTED",
      payload: productDetails._id,
    });

    //after adding into cart remove product from wishlist
    WishlistDispatch({
      type: "REMOVE_PRODUCT_WISHLIST",
      payload: productDetails._id,
    });

    //like button true to false
    ProductDispatch({ type: "IS_LIKED", payload: productDetails._id });
  };

  const removeHandler = async (productId) => {
    // api call to add item in cart
    await removeWishlist(productId, encodedToken);
    WishlistDispatch({ type: "REMOVE_PRODUCT_WISHLIST", payload: productId });
    ProductDispatch({ type: "IS_LIKED", payload: productId });
  };

  return (
    <>
      <div className="flex flex-center mt-l mb-l f-m">
        <h3>My WishList</h3>
      </div>

      <div className="rs-row margin-auto width-80 wishlist-container">
        {WishlistState.wishlist.length === 0 && (
          <div className="col-sm-12 margin-auto">No Data Found</div>
        )}

        {WishlistState.wishlist &&
          ProductState.data.map(
            ({ _id, image, title, price, mrpPrice, rating }) => {
              const DiscountPercentage = (
                ((mrpPrice - price) / mrpPrice) *
                100
              ).toFixed();

              const productDetails = { _id: _id, qty: 1, amount: price };
              return WishlistState.wishlist.includes(_id) ? (
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
              ) : null;
            }
          )}
      </div>
    </>
  );
};

export default WishlistProducts;
