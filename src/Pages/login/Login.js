import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const login = () => {
    const userName = document.getElementById("username");
    const password = document.getElementById("password");

    console.log(userName.value, password.value);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("password", password.value);

    window.location.href = "/home";
  };

  return (
    <div id="loginPage">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="home-title text-center">Welcome to Ecommerce</h2>
            <div className="login-wrapper">
              <h4 className="text-center">{showSignup ? "Login" : "SignUp"}</h4>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="username"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <div className="input-group">
                <input
                  onClick={login}
                  type="submit"
                  className="form-control btn btn-primary"
                  value={`${showSignup ? "Login" : "Signup"} as a user`}
                  placeholder="Password"
                  id="password"
                />
              </div>
              <div
                className="signup-btn text-center text-info"
                onClick={toggleSignup}
              >
                {showSignup
                  ? "Already have an account,Login"
                  : "Dont have an account? Sign up"}
              </div>
              <div className="auth-error-msg text-danger text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
