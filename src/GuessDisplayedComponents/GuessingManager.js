import { useEffect } from "react";
import "./GuessingManager.scss";
const GuessingManager = ({
  guess,
  correctAnswersAmount,
  wrongAnswersAmount,
}) => {
  useEffect(() => {
    window.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        guess(document.querySelector("#answer-input"));
      }
    });
  }, []);
  return (
    <div className="guessing-manager-container">
      <input
        autoComplete="off"
        id="answer-input"
        type="text"
        placeholder="your answer..."
      ></input>
      <button
        id="submit-answer-btn"
        onClick={() => {
          guess(document.querySelector("#answer-input"));
        }}
      >
        Submit answer
      </button>
      <div>
        <h2 className="correct-answers-amount">{correctAnswersAmount}</h2>
        <h2 className="wrong-answers-amount">{wrongAnswersAmount}</h2>
      </div>
    </div>
  );
};

export default GuessingManager;
