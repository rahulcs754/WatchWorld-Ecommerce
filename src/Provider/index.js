import { ProductProvider } from "../Pages/Products/Context/ProductContext";
import { AuthProvider } from "../Context/AuthContext";
import { FilterProvider } from "../Pages/Products/Context/FilterContext";
import { CartProvider } from "../Pages/Products/Context/CartContext";
import { WishProvider } from "../Pages/Products/Context/WishContext";

const AllProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <FilterProvider>
          <WishProvider>
            <CartProvider>{children}</CartProvider>
          </WishProvider>
        </FilterProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default AllProvider;
