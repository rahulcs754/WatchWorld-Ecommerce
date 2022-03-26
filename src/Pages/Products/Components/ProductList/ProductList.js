import { useFilter } from "../../Context/FilterContext";
import Product from "../Product/Product";

const ProductsList = () => {
  const { ProductListFiltered } = useFilter();

  return (
    <div className="col-10 col-md-10 col-lg-10 ml-l">
      <div className="flex flex-row flex-center gap-sm product_list_container cart_setter">
        {ProductListFiltered
          ? ProductListFiltered.map((item, i) => <Product {...item} key={i} />)
          : null}
      </div>
    </div>
  );
};

export default ProductsList;
