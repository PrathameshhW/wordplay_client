import React from "react";
import Home from "../Home/Home";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setLoginUser }) => {
  return (
    <>
      <header className="navbar">
        <div className="heading">
          <h2>
            <Link to="/home">Wordplay</Link>
          </h2>
        </div>
        <label htmlFor="toggle" className="navbar-toggler">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <nav>
          <ul className="nav_links">
            <li>
              <Link to="/home">
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
              <span>Contact</span>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className=".btn1" onClick={() => setLoginUser({})}>
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
