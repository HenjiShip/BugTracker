import React, { useState } from "react";
import "./login.scss";
import { Logins, Signups } from "../../components";

const Login = () => {
  const [login, setLogin] = useState(false);
  console.log(login);
  return (
    <div className="login">
      {login ? <Logins setLogin={setLogin} /> : <Signups setLogin={setLogin} />}
    </div>
  );
};

export default Login;
