import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <form>
        <label>Name:</label>
        <br></br>
        <input type="text" />
        <br></br>
        <label>Username:</label>
        <br></br>
        <input type="text" />
        <br></br>
        <label>Email:</label>
        <br></br>
        <input type="text" />
        <br></br>
        <label>Password:</label>
        <br></br>
        <input type="password" />
        <br></br>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default Signup;
