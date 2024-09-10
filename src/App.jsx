// import "./App.css";
import React from "react";
import Public from "./routes/Public.jsx";
import Private from "./routes/Private.jsx";
let isLoggedIn = true


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
    isLoggedIn ?  <Private /> : <Public />
  );
}

export default App;
