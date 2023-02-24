import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Register/Dashboard";
import Error from "./Components/Register/Error";
import Landing from "./Components/Register/Landing";
import Register from "./Components/Register/Register";
import HomePage from "../src/Pages/HomePage";
import GamePage from "./Pages/GamePage";
import Login from "./Components/Login/Login";
import RulesPage from "./Pages/RulesPage";

// window.addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/play" element={<GamePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
