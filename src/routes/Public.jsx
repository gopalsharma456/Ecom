import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Product from "../pages/Product.jsx";

function Public() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default Public