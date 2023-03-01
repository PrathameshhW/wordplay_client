import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "../src/Pages/HomePage";
import GamePage from "./Pages/GamePage";

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

        <Route path="/rules" element={<RulesPage />} />
        <Route path="/play" element={<GamePage />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
