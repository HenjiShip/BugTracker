import React from "react";
import "./signins.scss";
import { useNavigate } from "react-router-dom";

// in Login
const Signups = ({ setLogin }) => {
  const navigate = useNavigate();
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
        <div>
          <span style={{ color: "gray" }}>Already have an account? </span>
          <span onClick={() => setLogin(true)}>Login</span>
        </div>
        <div>
          <span style={{ color: "gray" }}>Sign in as a demo user: </span>
          <span onClick={() => navigate("/demo")}>Demo</span>
        </div>
      </div>
    </div>
  );
};

export default Signups;
