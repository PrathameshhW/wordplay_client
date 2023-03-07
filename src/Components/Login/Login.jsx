import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    if (name === "email" && value !== "" && !isValidEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const login = () => {
    setLoading(true); // set loading to true before sending the request
    axios
      .post("https://brave-ox-flannel-shirt.cyclic.app//login", user)
      .then((res) => {
        setLoading(false); // set loading to false after getting the response
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false); // set loading to false if there was an error
        console.error(error);
      });
  };

  return (
    <div className="login-component">
      <form>
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          ></input>
          {emailError && <div className="error">{emailError}</div>}
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          ></input>
          <div className="button btn1" onClick={login}>
            {loading ? "Almost There.." : "Login"}{" "}
            {/* Show loading message or "Login" depending on loading status */}
          </div>
          <div className="or">or</div>
          <div className="button btn2" onClick={() => navigate("/register")}>
            Register
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
