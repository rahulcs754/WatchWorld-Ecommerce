import { useProduct } from "../../../Products/Context/ProductContext";

import { Link } from "react-router-dom";
import styles from "./Category.module.css";

export const Category = () => {
  const { ProductState } = useProduct();
  const { productCategory } = ProductState;
  return (
    <>
      <div className="rs-row m-l">
        <div className="col-sm-12 text-left">
          <span className={styles.section_heading}>SHOP BY CATEGORY</span>
        </div>
      </div>
      <div className="rs-row m-l">
        <div className="col-sm-12 flex flex-row flex-center flex-grow gap-md">
          {productCategory.map(
            ({ linkCategory, bannerImage, categoryName }, i) => {
              return (
                <div className="col-sm-3" key={i}>
                  <div className="card card-shadow img-square">
                    <Link to={`/products/${categoryName}`}>
                      <img
                        src={bannerImage}
                        className="card-image img-lg"
                        alt="Card-Image"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
