import React from "react";
import "../Signins/signins.scss";

// in Login
const Logins = ({ setLogin }) => {
  return (
    <div className="logins">
      <div className="login-form">
        <form>
          <h3>Login</h3>
          <input type="text" placeholder="JohnDoe@gmail.com" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Login</button>
        </form>
        <div>
          <span style={{ color: "gray" }}>Don't have an account? </span>
          <span onClick={() => setLogin(false)}>Sign up</span>
        </div>
        <div>
          <span style={{ color: "gray" }}>Sign in as a demo user: </span>
          <span>Demo</span>
        </div>
      </div>
    </div>
  );
};

export default Logins;
