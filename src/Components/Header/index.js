import { useCart, useWish } from "../../Pages/Products/Context";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

import { useAuthData } from "../../Context/AuthContext";
import { CartCounter } from "./Components/CartCounter";
import { WishlistCounter } from "./Components/WishlistCounter";
import { UserDetails } from "./Components/UserDetails";

const Header = () => {
  const { WishlistState } = useWish();
  const { CartState } = useCart();
  const { userAuth } = useAuthData();
  const { isUserLoggedIn } = userAuth;
  const { theme, themeHanlder } = useTheme();

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
              {isUserLoggedIn ? (
                <li>
                  <Link to="/products/All Product"> Watches </Link>
                </li>
              ) : null}
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
              <li>
                <Link to="#">
                  <div className="badge">
                    <i
                      class="fas fa-sun badge-icon"
                      onClick={() => themeHanlder(theme)}
                    ></i>
                  </div>
                </Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
