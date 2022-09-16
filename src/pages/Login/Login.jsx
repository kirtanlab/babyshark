import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleOwnerLogin = () => {
    setIsAdmin(true);
  };

  const handleAdminLogin = () => {
    setIsAdmin(false);
  };

  return (
    <div className="outer-login">
      <div
        className={isAdmin ? "container right-panel-active" : "container"}
        id="main"
      >
        <div className="owner">
          <form action="#">
            <h1>Login For Owner</h1>

            <p>Use your provided E-mail and Password for login</p>
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
            <Link to="/owner-dashboard">
              <button>Log In</button>
            </Link>
          </form>
        </div>
        <div className="admin">
          <form action="#">
            <h1>Login For Admin</h1>

            <p>Use your registered E-mail and Password for login</p>
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
            <Link to="/admin-dashboard">
              <button>Log In</button>
            </Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Are You An Admin?</h1>
              <p>Click the below button for login as Admin</p>
              <button id="adminLogIn" onClick={handleAdminLogin}>
                Admin Login
              </button>
            </div>
            <div className="overlay-right">
              <h1>Are You A Canteen Owner?</h1>
              <p>Click the below button for login as Canteen Owner</p>
              <button id="ownerLogIn" onClick={handleOwnerLogin}>
                Owner Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
