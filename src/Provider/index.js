import { ProductProvider } from "../Pages/Products/Context/ProductContext";
const AllProvider = ({ children }) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default AllProvider;
