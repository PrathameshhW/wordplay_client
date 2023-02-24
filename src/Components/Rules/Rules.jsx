import React from "react";
import { Link } from "react-router-dom";
import "./Rules.scss";

const Rules = () => {
  return (
    <>
      <h1 className="rule-heading">
        Before entering the game Please Read the Rules
      </h1>
      <div className="rule">
        <div className="rule-container">
          <h1>How To Play</h1>
          <h3>Guess the Wordplay in 6 tries</h3>
          <ul>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
          <div className="main-examples">
            <h2>Examples</h2>
            <div className="examples">
              <ul>
                <li className="green">W</li>
                <li>E</li>
                <li>A</li>
                <li>R</li>
                <li>Y</li>
              </ul>
              <p>
                <b>W</b> is in the word and in the correct spot.
              </p>
            </div>
            <div className="examples">
              <ul>
                <li>P</li>
                <li className="yellow">I</li>
                <li>L</li>
                <li>L</li>
                <li>S</li>
              </ul>
              <p>
                <b>I</b> is in the word but in the wrong spot.
              </p>
            </div>
            <div className="examples">
              <ul>
                <li>V</li>
                <li>A</li>
                <li>G</li>
                <li className="grey">U</li>
                <li>E</li>
              </ul>
              <p>
                <b>U</b> is not in the word in any spot.
              </p>
            </div>
          </div>
          <div className="rule-para">
            <p>
              A new puzzle is released at every refresh. If you haven't already,
              you can play the game by clicking the following button.
            </p>
          </div>
          <div className="game-rule-btn">
            <Link to="/play">
              <button className="content-btn1">Enter Game</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
