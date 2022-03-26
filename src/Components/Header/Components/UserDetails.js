import { Link } from "react-router-dom";
import { Menu } from "../Menu";
import { useState } from "react";
export const UserDetails = ({ isUserLoggedIn, wishlist }) => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <>
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
    </>
  );
};
