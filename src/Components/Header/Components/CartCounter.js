import { Link } from "react-router-dom";
export const CartCounter = ({ isUserLoggedIn, cart }) => {
  return (
    <>
      {isUserLoggedIn ? (
        <Link to="/cart">
          <div className="badge">
            <i className="far fa-cart-arrow-down badge-icon" />
            <div className="badge-number">{cart.length ? cart.length : 0}</div>
          </div>
        </Link>
      ) : (
        <Link to="/login">
          <div className="badge">
            <i className="far fa-cart-arrow-down badge-icon" />
          </div>
        </Link>
      )}
    </>
  );
};
