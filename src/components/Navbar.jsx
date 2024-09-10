import React, { useState } from "react";
import Login from "../pages/Login";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { addToCart } from "../store/actions/cartAction";

function Navbar(props) {
  // const { setCartFromProduct, setWishListFromProduct } = props;
  // const [wishlistItems, setWishlistItems] = useState(0);
  // const [cartItems, setCartItems] = useState(0);
  let user = false;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Shopeee!</Link>
        </div>

        <div className="navbar-links">
          <Link
            to="/wishlist"
            className="navbar-wishlist"
          >
            Wishlist ({/*wishlistItems*/})
          </Link>
          <Link
            to="/cart"
            className="navbar-cart"
          >
            Cart ({props.cartCount.length})
          </Link>
          <Link to='/account'>Welcome user</Link>
        </div>
      </nav>
    </>
  );
}

// export default Navbar;

const mapStateToProps = (state) => {
  return {
    cartCount: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);