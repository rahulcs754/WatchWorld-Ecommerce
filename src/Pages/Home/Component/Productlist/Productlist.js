import { useProduct } from "../../../Products/Context/ProductContext";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
const Productlist = ({ headingTitle, productType }) => {
  const { ProductState } = useProduct();
  const { data } = ProductState;

  const popularProducts =
    productType === "new" ? data.slice(0, 4) : data.slice(8, 12);
  return (
    <>
      <div className="rs-row m-l product_container">
        <div className="col-sm-12">
          <span>{headingTitle}</span>
        </div>
      </div>

      <div className="rs-row m-l product_container">
        {popularProducts.map(({ image, title }, i) => {
          return (
            <div className="col-sm-3" key={i}>
              <Link to="/products/All Product">
                <div className="card card-overlay">
                  <div>
                    <img
                      src={image}
                      className="card-image img-c"
                      alt="Card-Image"
                    />
                  </div>
                  <span
                    className={`card-with-badge text-capitalize ${styles.card_with_badge}`}
                  >
                    {productType}
                  </span>
                  <div className="card-header">
                    <div className="card-title text-center">{title}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Productlist;
