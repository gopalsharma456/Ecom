import React from "react";
import "./style.css";
import Signup from "./Signup";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
    <h1>Login</h1>
      <form>
        <input type="text" className="input-style" placeholder="Enter Your Email ID..." />
        <input type="password" className="input-style" placeholder="Enter Your Password..." />
        <button className="submit-btn">Login</button>
        <p>
          Don't have account <Link to='/signup'>Create New</Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
