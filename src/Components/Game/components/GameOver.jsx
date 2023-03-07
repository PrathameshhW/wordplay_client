import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordplay"
          : "You Failed to Guess the Word 🥲"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <div className="new-game">
        Want to play the Cooler Version of this game ?{" "}
        <button className="content-btn2">
          <span className="btn-rule">
            <a href="https://cool-wordplay.onrender.com" target="_blank">
              Click Me!
            </a>
          </span>
        </button>
      </div>
    </div>
  );
}

export default GameOver;
