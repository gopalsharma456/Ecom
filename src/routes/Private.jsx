import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from "../pages/Product.jsx";
import Cart from "../pages/Cart.jsx";
import WishList from "../pages/WishList.jsx"

function Private() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<Cart />}/>
      </Routes>
    </Router>
  )
}

export default Private