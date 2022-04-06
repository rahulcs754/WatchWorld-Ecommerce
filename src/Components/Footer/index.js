import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr className="hr" />
      <div className="rs-row mt-l ">
        <div className="col-sm-3 margin-auto">
          <div className="input-box">
            <label className="label-text mb-l">Newsletter</label>
            <input
              type="text"
              className="field-item"
              required
              placeholder="Email Address"
            />
          </div>
          <div className="input-box d-block">
            <button className="btn btn-primary">Suscribe</button>
          </div>
        </div>
        <div className="col-sm-3 margin-auto">
          <h3 className="f-s ml-m">Quick Link</h3>
          <ul className="list">
            <li className="list-item bg-warning bt">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="list-item bg-warning bt">
              <Link to="/products/All Product">Product List</Link>
            </li>
            <li className="list-item bg-warning bt">
              <Link to="/cart">Card Page</Link>
            </li>
            <li className="list-item bg-warning bt">
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 margin-auto">
          <h3 className="f-s mb-m">Terms</h3>
          <p>Returns and Refunds</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
          <p>Shipping Policy</p>
          <p>Contact Us</p>
          <p>Cancellation Policy</p>
        </div>
        <div className="col-sm-3 margin-auto">
          <h3 className="f-s mb-m">Contact</h3>
          <p>Lorem Address</p>
          <p>XXX-XXX-XXX </p>
          <p>© 2022, Author Rahul Shukla</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
