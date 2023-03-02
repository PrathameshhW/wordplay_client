import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import GamePage from "./Pages/GamePage";
import RulesPage from "./Pages/RulesPage";
import { useState } from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import Home from "./Components/Home/Home";

// window.addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route
          path="/"
          element={
            user && user._id ? (
              <>
                <Navbar setLoginUser={setLoginUser} />
                <Home />
              </>
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/play" element={<GamePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
