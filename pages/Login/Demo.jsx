import React from "react";
import "./demo.scss";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();
  const admin = "admin";
  const developer = "developer";
  return (
    <div className="login">
      <div className="demo-user">
        <div className="login-form">
          Log in as a demo user:
          <div className="user-grid">
            <div className="same-line-icon">
              <div>
                <RiAdminLine />
              </div>
              <div>{admin}</div>
            </div>
            <div className="same-line-icon">
              <div>
                <AiOutlineUser />
              </div>
              <div>{developer}</div>
            </div>
          </div>
          <div>
            Back to login: <span onClick={() => navigate("/login")}>Login</span>
            {/* span styles used from signins.scss */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
