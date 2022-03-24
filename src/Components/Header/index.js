import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "./Menu";
import { useAuthData } from "../../Context/AuthContext";
const Header = () => {
  const [showmenu, setShowmenu] = useState(false);
  const { userAuth } = useAuthData();
  const getToken = localStorage.getItem("encodedToken");
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
                <Link to="/wishlist">
                  <div className="badge">
                    <i className="fas fa-heart badge-icon" />
                    <div className="badge-number">0</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <div className="badge">
                    <i className="far fa-cart-arrow-down badge-icon" />
                    <div className="badge-number">0</div>
                  </div>
                </Link>
              </li>
              <li>
                {isUserLoggedIn ? (
                  <div className="badge" onClick={() => setShowmenu(!showmenu)}>
                    <img
                      className="badge-img profile_icon_size"
                      src="https://picsum.photos/200"
                      alt="badge-1"
                    />
                    <div className="badge-item badge-online"></div>
                    {showmenu ? <Menu /> : null}
                  </div>
                ) : (
                  <button className="header-btn">
                    <Link to="/login">Login</Link>
                  </button>
                )}
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
