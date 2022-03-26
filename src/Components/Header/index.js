import { useCart } from "../../Pages/Products/Context/CartContext";
import { useWish } from "../../Pages/Products/Context/WishContext";
import { Link } from "react-router-dom";

import { useAuthData } from "../../Context/AuthContext";

import { CartCounter } from "./Components/CartCounter";
import { WishlistCounter } from "./Components/WishlistCounter";
import { UserDetails } from "./Components/UserDetails";
const Header = () => {
  const { WishlistState } = useWish();
  const { CartState } = useCart();
  const { userAuth } = useAuthData();
  const { isUserLoggedIn } = userAuth;

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
                <WishlistCounter
                  isUserLoggedIn={isUserLoggedIn}
                  wishlist={WishlistState.wishlist}
                />
              </li>
              <li>
                <CartCounter
                  isUserLoggedIn={isUserLoggedIn}
                  cart={CartState.cart}
                />
              </li>
              <li>
                <UserDetails isUserLoggedIn={isUserLoggedIn} />
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
