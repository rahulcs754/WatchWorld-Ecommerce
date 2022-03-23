import Banner from "./Banner/Banner";
import Productlist from "./Productlist/Productlist";
import { Category } from "./Category/Category";

const Main = () => {
  return (
    <>
      <Banner />
      <Productlist headingTitle="NEW PRODUCT LISTS" productType="new" />
      <Category />
      <Productlist headingTitle="POPULAR PRODUCT LISTS" productType="popular" />
    </>
  );
};

export default Main;
