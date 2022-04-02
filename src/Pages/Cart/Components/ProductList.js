import { Product } from "./Product";

import { useProduct } from "../../Products/Context/ProductContext";

export const ProductList = ({ cart }) => {
  const { ProductState } = useProduct();
  const { data } = ProductState;
  return (
    <div className="item-bucket">
      {cart.map((item) => {
        const ProductDetails = data.find((product) => product._id === item._id);
        if (ProductDetails !== undefined) {
          return <Product {...ProductDetails} qty={item.qty} />;
        }
      })}
    </div>
  );
};
