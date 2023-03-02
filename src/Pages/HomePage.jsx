import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";

const HomePage = () => {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default HomePage;
