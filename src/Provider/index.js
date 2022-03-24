import { ProductProvider } from "../Pages/Products/Context/ProductContext";
import { AuthProvider } from "../Context/AuthContext";
const AllProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>{children}</ProductProvider>
    </AuthProvider>
  );
};

export default AllProvider;
