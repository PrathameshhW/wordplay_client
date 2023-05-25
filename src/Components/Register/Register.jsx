import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(email);
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (
      name &&
      email &&
      password &&
      password === reEnterPassword &&
      validateEmail(email)
    ) {
      setLoading(true); // set loading to true before sending the request
      axios
        // .post("https://brave-ox-flannel-shirt.cyclic.app//register", user)
        .post("https://localhost:9002", user)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        });
    } else {
      setLoading(false); // set loading to false if there was an error
      alert("Invalid input");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button btn1" onClick={register}>
        {loading ? "Good Job.." : "Register"}{" "}
      </div>
      <div className="or">or</div>
      <div className="button btn2" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
