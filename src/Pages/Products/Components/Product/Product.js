import { useCart } from "../../Context/CartContext";
import { useProduct } from "../../Context/ProductContext";
import { useWish } from "../../Context/WishContext";

import styles from "./Product.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useAuthData } from "../../../../Context/AuthContext";

import { Rating } from "../../../../Components/Rating/index";
import { addCart } from "../../../../ApiService";
import axios from "axios";

const Product = (props) => {
  const {
    _id,
    image,
    title,
    price,
    mrpPrice,
    rating,
    discount,
    isLiked,
    inStock,
    storageQty,
    isSelected,
  } = props;

  const { WishlistDispatch } = useWish();
  const { ProductDispatch } = useProduct();
  const { CartDispatch } = useCart();
  const { userAuth } = useAuthData();
  const navigate = useNavigate();
  const { isUserLoggedIn, encodedToken } = userAuth;

  const productDetails = { _id: _id, qty: 1, amount: price };

  const addHandler = (productDetails) => {
    // api call to add item in cart
    addCart(productDetails, encodedToken, CartDispatch, ProductDispatch);
  };

  const wishlistHandler = async (productId) => {
    // api call to post data
    try {
      const { data, status } = await axios.post(
        "/api/user/wishlist",
        { product: { _id: productId } },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (status === 200 || status === 201) {
        alert("Added to Wishlist");
      }
    } catch (error) {
      alert(error);
    }

    WishlistDispatch({ type: "ADD_AND_REMOVE_WISHLIST", payload: productId });
    ProductDispatch({ type: "IS_LIKED", payload: productId });
  };

  const DiscountPercentage = (((mrpPrice - price) / mrpPrice) * 100).toFixed();
  return (
    <div className="card card-overlay">
      <img src={image} className="card-image img-c" alt="Card-Image" />

      <div className="card-header">
        <div className="card-title ">{title}</div>
      </div>
      <div className="card-info">
        <p className="card-price">$ {price}</p>
        <p className="mrp-price">$ {mrpPrice}</p>
        <p className="card-discount">{`${DiscountPercentage} % off`}</p>
        <Rating starValue={rating} />
      </div>
      <div className="card-footer ">
        {isSelected ? (
          <button className={`btn btn-primary ${styles.addtocartText} `}>
            <Link to="/cart">
              <i className="fas fa-shopping-cart mr-s" />
              Go To Cart
            </Link>
          </button>
        ) : isUserLoggedIn ? (
          <button
            className={`btn btn-primary ${styles.addtocartText} `}
            onClick={() => addHandler(productDetails)}
          >
            <i className="fas fa-shopping-cart mr-s" />
            Add To Cart
          </button>
        ) : (
          <button
            className={`btn btn-primary ${styles.addtocartText} `}
            onClick={() => navigate("/login")}
          >
            <i className="fas fa-shopping-cart mr-s" />
            Add To Cart
          </button>
        )}

        {isUserLoggedIn ? (
          <button
            className="btn btn-warning"
            onClick={() => wishlistHandler(_id)}
          >
            {isLiked ? "Added To Wishlist" : "Add To Wishlist"}
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => navigate("/login")}
          >
            {isLiked ? "Added To Wishlist" : "Add To Wishlist"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
