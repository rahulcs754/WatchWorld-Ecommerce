import { ProductProvider } from "../Pages/Products/Context/ProductContext";
import { AuthProvider } from "../Context/AuthContext";
import { FilterProvider } from "../Pages/Products/Context/FilterContext";
import { CartProvider } from "../Pages/Products/Context/CartContext";
import { WishProvider } from "../Pages/Products/Context/WishContext";
import { ThemeProvider } from "../Context/ThemeContext";

const AllProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductProvider>
          <FilterProvider>
            <WishProvider>
              <CartProvider>{children}</CartProvider>
            </WishProvider>
          </FilterProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AllProvider;
