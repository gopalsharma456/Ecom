import "./Product.css";
import Navbar from "../components/Navbar";
import ProductContainer from "../container/ProductContainer";
import { useState } from "react";

function Product() {
  const [wishlistCount, setWishlistCount] = useState(false);
  const [cartState, setCartState] = useState([]);

  function handleWishListState(data) {
    setWishlistCount(data);
  }

  function handleCartState(cartData) {
    setCartState(cartData);
  }

  return (
    <>
      <Navbar
        // setWishListFromProduct={handleWishListState}
        // setCartFromProduct={handleCartState}
      />
      <ProductContainer />
    </>
  );
}

export default Product;
