import FilterList from "./Components/FilterList/FilterList";
import ProductsList from "./Components/ProductList/ProductList";

export const Products = () => {
  return (
    <>
      <div className="rs-row m-l">
        <FilterList />
        <ProductsList />
      </div>
    </>
  );
};
