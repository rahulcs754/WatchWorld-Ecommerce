import {
  Home,
  Cart,
  Login,
  Products,
  Signup,
  Address,
  Wishlist,
} from "../Pages";
import MockAPI from "../mock-api";

import { Routes, Route } from "react-router-dom";

const Routespaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/mock-api" element={<MockAPI />}></Route>
    </Routes>
  );
};

export default Routespaths;
