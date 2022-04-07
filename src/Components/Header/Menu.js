import { Link, useNavigate } from "react-router-dom";
import { useAuthData } from "../../Context/AuthContext";
export const Menu = () => {
  const Firstname = localStorage.getItem("Firstname");
  const { DispatchUserAuth } = useAuthData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    DispatchUserAuth({
      type: "LOGOUT",
    });
    navigate("/products/All Product");
  };
  return (
    <div className="menu">
      <h3 className="profile_name f-s">Welcome {Firstname}</h3>

      <ul>
        <li>
          <Link to="#">My profile</Link>
        </li>
        <li onClick={logoutHandler}>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};
