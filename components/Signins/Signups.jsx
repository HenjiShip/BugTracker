import React from "react";
import "./signins.scss";

// in Login
const Signups = ({ setLogin }) => {
  return (
    <div className="sign-ups">
      <div className="login-form">
        <form>
          <h3>Sign Up</h3>
          <input type="text" placeholder="First Name" name="email" />
          <input type="text" placeholder="Last Name" name="email" />
          <input type="text" placeholder="JohnDoe@gmail.com" name="email" />
          <input type="password" placeholder="Password" name="email" />
          <button>Login</button>
        </form>
        <span onClick={() => setLogin(true)}>Login</span>
      </div>
    </div>
  );
};

export default Signups;
