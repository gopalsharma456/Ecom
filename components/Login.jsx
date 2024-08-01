import React from "react";

let inputStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "10px",
};

let buttonClass = {
  marginTop: "20px",
};

let hoverEffect = {
  backgroundColor: "Blue",
  // color: 'white'
};

class Login extends React.Component {
  render() {
    return (
      <form
        style={{
          backgroundColor: "yellow",
          padding: "20px 40px",
          borderRadius: "10px",
        }}
      >
        <label>Username:</label>
        <br></br>
        <input type="text" style={inputStyle} />
        <br></br>
        <label>Password:</label>
        <br></br>
        <input type="password" style={inputStyle} />
        <br></br>
        <button style={buttonClass}>Login</button>
      </form>
    );
  }
}
export default Login;
