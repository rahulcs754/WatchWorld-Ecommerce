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
  const { theme, themeHandler } = useTheme();

  return (
    <>
      <div className="rs-row">
        <div className="col-12">
          <header className="header">
            <h1 className="header-logo">
              <Link to="/">Watch World</Link>
            </h1>

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
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
