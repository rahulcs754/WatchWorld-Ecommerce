import { useCart } from "../../Pages/Products/Context/CartContext";
import { useWish } from "../../Pages/Products/Context/WishContext";

import { Link } from "react-router-dom";
const Header = () => {
  const { WishlistState } = useWish();
  const { CartState } = useCart();

  return (
    <>
      <div className="rs-row">
        <div className="col-12">
          <header className="header">
            <h1 className="header-logo">
              <Link to="/">Watch World</Link>
            </h1>
            <div className="header-search">
              <input
                type="text"
                className="header-input field-item"
                placeholder="Search"
              />
              <div className="error-icon header-error-icon">
                <i className="fas fa-search input-error-icon header-search-icon" />
              </div>
            </div>
            <ul className="header-nav">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <div className="badge">
                    <i className="fas fa-heart badge-icon" />
                    <div className="badge-number">
                      {WishlistState.wishlist.length
                        ? WishlistState.wishlist.length
                        : 0}
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <div className="badge">
                    <i className="far fa-cart-arrow-down badge-icon" />
                    <div className="badge-number">
                      {CartState.cart.length ? CartState.cart.length : 0}
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <button className="header-btn">
                  <Link to="/login">Login</Link>
                </button>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
