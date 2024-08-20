import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
  <h1>Signup</h1>
    <form>
      <input className="input-style" type="text" placeholder="Enter Your Name" />
      <input className="input-style" type="text" placeholder="Enter Your Email"/>
      <input className="input-style" type="password" placeholder="Choose Your Password"/>
      <button className="submit-btn">Sign Up</button>
      <p>
          Already have account <Link to='/login'>Login Here</Link>
        </p>
    </form>
    </>
  );
}

export default Signup;
