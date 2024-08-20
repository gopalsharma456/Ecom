// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import WishList from "./pages/WishList.jsx"


// const router = createBrowserRouter([
//   {
//     path: "login",

//     element: (
//       <>
//         <Login />
//         {/* <Link To='./signup'>Click here</Link> */}
//       </>
//     ),
//   },
//   {
//     path: "signup",
//     element: <Signup />,
//   },
// ]);

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   render() {
//     const { isLoggedIn } = this.state;
//     return <>{isLoggedIn ? <Signup /> : <Login />}</>;
//   }
// }

// src/App.js

function App() {
  return (
    <Router>
      {/* <Product /> */}
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path=""/> */}
      </Routes>
    </Router>
  );
}

export default App;
