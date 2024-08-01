import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login.jsx";
import Signup from "../components/Signup.jsx";

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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} /> {/* Default route */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
