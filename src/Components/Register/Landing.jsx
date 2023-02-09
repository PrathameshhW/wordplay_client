import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad
        quae eius dicta quia autem.
      </p>
      <Link to="/register"> Register / Login </Link>
    </div>
  );
};

export default Landing;
