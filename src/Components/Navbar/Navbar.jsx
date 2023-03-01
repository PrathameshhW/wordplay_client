import React from "react";
import Home from "../Home/Home";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="heading">
          <h2>
            <Link to="/">Wordplay</Link>
          </h2>
        </div>
        <nav>
          <ul className="nav_links">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/rules">
                <span>Game</span>
              </Link>
            </li>
            <li>
              <Link to="/rules">
                <span>Rules</span>
              </Link>
            </li>
            <li>
              <span>Help</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <Link to="">
            <button className="btn1">Register</button>
          </Link>

          <Link to="">
            <button className="btn2">Login</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
