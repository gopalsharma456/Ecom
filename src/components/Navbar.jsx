import React, { useState } from "react";
import Login from "../pages/Login";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { setCartFromProduct, setWishListFromProduct } = props;
  const [wishlistItems, setWishlistItems] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  let user = false;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">MyShop</Link>
        </div>

        <div className="navbar-links">
          <Link
            to="/wishlist"
            className="navbar-wishlist"
            onClick={setCartFromProduct}
          >
            Wishlist ({wishlistItems})
          </Link>
          <Link
            to="/cart"
            className="navbar-cart"
            onClick={setWishListFromProduct}
          >
            Cart ({cartItems})
          </Link>
          <Link to='/account'>Welcome user</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
