import { Link } from "react-router-dom";
export const WishlistCounter = ({ isUserLoggedIn, wishlist }) => {
  return (
    <>
      {isUserLoggedIn ? (
        <Link to="/wishlist">
          <div className="badge">
            <i className="fas fa-heart badge-icon" />
            <div className="badge-number">
              {wishlist.length ? wishlist.length : 0}
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/login">
          <div className="badge">
            <i className="fas fa-heart badge-icon" />
          </div>
        </Link>
      )}
    </>
  );
};
